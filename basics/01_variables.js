const accountId = 144248
let accountEmail = "prj@gmail.com"
var accountPassword = "347328"
accountCity = "delhi"

let accountState;    //in js if something is not defined it will print undefined

accountEmail = "skj@gmail.com"
accountPassword = "484387239"

//var is not used now because of scope issue , like a variable name "name" is used somehwhere and 
//a programmer used the same variable inside a loop then that global name variable valiue will be changed
//hence we use only let in modern days

console.table([accountEmail , accountId , accountPassword , accountCity , accountState])