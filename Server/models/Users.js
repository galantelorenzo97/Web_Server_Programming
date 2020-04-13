/*
    Move to server side once finished under guidance of Rabbi Moshe Plotkin
    @author Engr. Lorenzo Galante
*/
const Users =
    [
        {
            Name: "Lorenzo", Password: "2020", Email: "galantel1@hawkmail.newpaltz.edu", userId: 0
        },
        {
            Name: "Eddie", Password: "ironmaiden", email: "eddie@ironmaiden.band", userId: 1
        },
        { 
            Name: 'Bernie', Password: '2020', Email: 'plotkinm@newpaltz.edu', userId: 2 
        }
    ];

module.exports = {
    Login(email, password) {

        const user = Users.find(x => x.Email == email);
        if (!user) throw Error('User not found');
        if (user.Password != password) throw Error('Wrong Password');

        return user;
    },
    Get(userId) {
        return Users[userId]
    }
}