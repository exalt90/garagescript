const fs =require("fs");

const printUsers = (err,files)=>{
console.log(files);
};



fs.readdir('/home',printUsers);

