
function user(userName, password) {
    this.userName = userName;
    this.password = password;
}

const user1 = new user("Abc","123");


const user2 = new user("XYZ","234");
console.log(user2);
console.log("Name:"+user2.userName);

console.log("----------------------")

console.log(user1);
console.log("Name:"+user1.userName);


console.log("----------------------")

console.log(user1.constructor);


