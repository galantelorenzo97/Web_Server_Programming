/*
    Move to server side once finished under guidance of Rabbi Moshe Plotkin
    @author Engr. Lorenzo Galante
*/
const Users =
    [
        {
            Name: "Lorenzo", Password: "2020", Email: "galantel1@hawkmail.newpaltz.edu"
        },
        {
            Name: "Eddie", Password: "ironmaiden", email: "eddie@ironmaiden.band"
        }
    ];


let obj = {
    CurrentUser : null,

    Login(email, password) {
        const user = Users.find(x => x.Email == email);

        if (!user) throw Error("User not found");
        if (user.Password != password) throw Error('Wrong Password');

        return CurrentUser = user;

    }

}

export default obj