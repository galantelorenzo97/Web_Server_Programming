/* B"H
*/
const Users = [
    { Name: 'Lorenzo', Password: '2020', Email: 'galantel1@hawkmail.newpaltz.edu' },
    { Name: 'Eddie', Password: 'ironmaiden', Email: 'eddie@ironmaiden.band' },

];

let ob = {
    CurrentUser: null,
    Login(email, password) {

        const user = Users.find(x => x.Email == email);
        if (!user) throw Error('User not found');
        if (user.Password != password) throw Error('Wrong Password');

        return this.CurrentUser = user;
    }
};

export default ob;