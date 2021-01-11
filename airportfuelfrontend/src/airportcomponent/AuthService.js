class AuthService {
    successfulLogin(username, token)
    {
        console.log('Login Sucess');
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('token', token)

    }
    logout()
    {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('token');
        sessionStorage.clear();

    }
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        let token = sessionStorage.getItem('token');
        if(user === null)
        {
            return false;
        }
        return token;
    }
    getUserLogged()
        {
            let user = sessionStorage.getItem('authenticatedUser')
            let token = sessionStorage.getItem('token');
            if(user === null)
            {
                return '';
            }
            return token;
        }
    

}
export default new AuthService()