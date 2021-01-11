import axios from "axios";


// login user
export const users = async ( email, password ) => {
    console.log("in service");
    let response;
    await axios
      .post("http://localhost:5000/api/auth", { email, password })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));


    console.log(response);
    return response;
  };

//add user
  export const signUpUser = async ( name, email, password ) => {
      console.log(name);
    let response;
    await axios
      .post("http://localhost:5000/api/user", {
        name,
        email,
        password
      })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
  
    return response;
  };
  
  //get my own detail
  export const fetchUser = async () => {
    const jsonToken = await sessionStorage.getItem("token");
    let response;
    await axios
      .get("http://localhost:3002/api/users/me", {
        headers: {
          "x-auth-token": jsonToken,
        },
      })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
  
    return response;
  };


  //add airport details
  export const addAirport = async ( airport_name, fuel_available, fuel_capacity ) => {
  let response;
  const jsonToken = await sessionStorage.getItem("token");
  await axios
    .post("http://localhost:5000/api/airport", {
        airport_name,
        fuel_available,
        fuel_capacity
    },
    {
        headers: {
          "x-auth-token": jsonToken,
        },
      })
    .then((res) => (response = res))
    .catch((err) => (response = err.response));

  return response;
};


//add aircraft details
export const addAircraft = async ( aircraft_no, airline, source, destination ) => {
    console.log("in axios call add aircraft");
    let response;
    const jsonToken = await sessionStorage.getItem("token");
    await axios
      .post("http://localhost:5000/api/aircraft", {
          aircraft_no,
          airline,
          source,
          destination
      },
      {
          headers: {
            "x-auth-token": jsonToken,
          },
        })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
  
    return response;
  };


  //list of all aircraft
  export const fetchAircraft = async () => {
    const jsonToken = await sessionStorage.getItem("token");
    let response;
    await axios
      .get("http://localhost:5000/api/aircraft", {
        headers: {
          "x-auth-token": jsonToken,
        },
      })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
    return response;
  };


  
  //list of all airports
  export const fetchAirport = async () => {
    const jsonToken = await sessionStorage.getItem("token");
    let response;
    await axios
      .get("http://localhost:5000/api/airport", {
        headers: {
          "x-auth-token": jsonToken,
        },
      })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
    return response;
  };

    //list of all transaction
    export const fetchTransaction = async () => {
        const jsonToken = await sessionStorage.getItem("token");
        let response;
        await axios
          .get("http://localhost:5000/api/transaction", {
            headers: {
              "x-auth-token": jsonToken,
            },
          })
          .then((res) => (response = res))
          .catch((err) => (response = err.response));
        return response;
      };

  //reset transaction 
  export const reset = async () => {
    const jsonToken = await sessionStorage.getItem("token");
    let response;
    await axios
      .get("http://localhost:5000/api/transaction/reset", {
        headers: {
          "x-auth-token": jsonToken,
        },
      })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
    return response;
  };


  //in transaction
  export const intransaction = async ( airport_name, quantity ) => {
      console.log(airport_name);
      console.log(quantity);
    let response;
    const jsonToken = await sessionStorage.getItem("token");
    await axios
      .post("http://localhost:5000/api/transaction/in", {
          airport_name,
          quantity
      },
      {
          headers: {
            "x-auth-token": jsonToken,
          },
        })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
  
    return response;
  };



  
  //out transaction
  export const outtransaction = async ( airport_name, aircraft_no, quantity ) => {
    let response;
    const jsonToken = await sessionStorage.getItem("token");
    await axios
      .post("http://localhost:5000/api/transaction/out", {
          airport_name,
          aircraft_no,
          quantity,
      },
      {
          headers: {
            "x-auth-token": jsonToken,
          },
        })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
  
    return response;
  };



  //reverse transaction
  export const reverseTransaction = async ( _id ) => {
    console.log("in axios call");
    let response;
    const jsonToken = await sessionStorage.getItem("token");
    await axios
      .post("http://localhost:5000/api/transaction/reverse", {
          _id
      },
      {
          headers: {
            "x-auth-token": jsonToken,
          },
        })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
      console.log(response);
  
    return response;
  };


  //list of all transaction to be reverssed
  export const revTransaction = async () => {

    const jsonToken = await sessionStorage.getItem("token");
    let response;
    await axios
      .get("http://localhost:5000/api/transaction/rev", {
        headers: {
          "x-auth-token": jsonToken,
        },
      })
      .then((res) => (response = res))
      .catch((err) => (response = err.response));
    return response;
  };