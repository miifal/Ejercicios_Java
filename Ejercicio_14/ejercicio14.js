
/* *Utilizando el array de la figura 39 pinta en la consola una frase por cada usuario que es 
premium y después crea un array con los usuarios que no son premium * */

const users = [
    {username :'ppc90', age: 30, premium: false},
    {username :'lu65', age: 24, premium: true},
    {username :'maria3', age: 36, premium: false},
    {username :'abc123', age: 20, premium: false},
    {username :'sergio58', age: 26, premium: true}
];


users.map(user => {
    if (user.premium) {
        console.log(user.username + ' tiene cuanta premium')
    }
});


const userNoPremium = users.filter (user => !user.premium);
console.log (userNoPremium);