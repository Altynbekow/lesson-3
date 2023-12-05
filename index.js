/***/ 
/*
коментарии
много коментарии
*/
// комментарии линенный
// условные конструкции(if else жана switch case default )
let color = '';
if (color ==='red') {
    console.log('stop!');
    document.write("<h4>stop!</h4>")
}else if (color ==='green')

if (color === "green") {
    console.log('go->');
    document.write("<h4> GOO! </h4>")
}else if (color === "yellow") 

if (color === "yellow") {
    console.log('ready');
    document.write("<h4> ready </h4>")
}   else if (color === '')

if (color === "") {
    console.log('онду солду карап от');
    document.write("<h4> онду солду карап от </h4>")
}
let capacity = 4
if (capacity = 4 ){
    console.log('канaаттaндырарлык');
    document.write("<h4>канaаттaндырарлык </h4>")
}
// &&-and|| - or
let user = {
    name: 'islo',
    nik:"isabek001",
    password:"20012001"
}
let nikprompt=prompt(' введите ник ')
let passwordprompt = prompt('введите пароль')


if (nikprompt === user.nik && passwordprompt === user.password) {
    alert("hello " + user.name)
}
let age = 50
if (age > 5 && age <18) {
    console.log('people')
}
if (age > 18 && age <25) {
    console.log('students')
    document.write("<h4>students</h4>")
}
if (age > 25 && age <50) {
    console.log('workers')
    document.write("<h4>workers</h4>")
}
let weight = 50
if(weight===100) {
    console.log('oop    Bec')

}
if(weight===50) {
    console.log('jenil   Bec') 
}

const user2 ={
    name: "shoola",
    isOnline:false}
    if(user2.isOnline===true){
        console.log('shoola online')
    }
    if(user2.isOnline===false) {
        console.log('shoola offline')
    }