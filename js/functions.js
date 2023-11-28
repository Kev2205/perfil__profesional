// alert("FUNTIOCN ACTIVO");
// ############ tipo de variables
// const para valores constantes
const pi = 3.1416;
const pul = 2.54;
// var para variables globales
var days = 10;
var name = "Angel Urrego";
// let para variables de bloque o locales
let count = 1;

// ############ tipo de variables
// alert
//alert(name);
// console.log
console.log(name);
// body - pantalla
document.write(name + "####Angel Urrego");
document.getElementById("box_one").innerHTML = "<h1>Angel Urrego</h1>";
document.getElementById("box_two").innerText = "<h1>Angel Urrego</h1>";
//librerias
//Swal.fire(
//    'The Internet?',
//    'That thing is still around?',
//    'question'
//  )
    

// Swal.fire({
//     icon: 'error',
//     showConfirmButton: false,
//     title: name,
//     text: name,
//     footer: "footer: " + name,
//     background: 'green',
//     position: 'top-start'

// });

// ############ tipo de datos
// numericos

var number_one = 20;
var number_two = 5.5;
//texto
var class_type = "Electiva Tecnica 1";
// booleanos
var boolean = true; //false
// arrays - veectores
var array_num = [1,2,3,45,3.4,1.2];
var array_tex = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
var array_mix = [1,"a",2,"c"];
var array_mul = [
    {name:"Wilder", last_name:"Duarte", age:"31"},
    {name:"Antonella", last_name:"Martinez", age:"32"},
    {name:"Angel", last_name:"Duarte", age:"3"},
    {name:"Urrego", last_name:"Duarte", age:"1"}
]

// ############ operadores basicos
// suma
var suma = number_one + number_two;
console.log("Suma = " + suma);
// resta
var resta = number_one - number_two;
console.log("Resta = " + resta);
// multiplicacion
var multi = number_one * number_two;
console.log("Multiplicacion = " + multi);
// division
var divi = number_one / number_two;
console.log("Division = " + divi.toFixed(2));
// modulo
var modulo = number_one % number_two;
console.log("Modulo = " + modulo);

//OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES(INVERSE, INCREMENTO Y DECREMENTO)
// AND && con if - Ampersand
var bool = true;
var numeric = 10;
if(!bool && numeric == 10){ // bool == true
    console.log("ENTRA IF ");

}
else{
    console.log("ENTRA ELSE");
}

// OR || con if 

if(!bool || numeric == 7){
    console.log("ENTRA IF");
    numeric+=3;
}else{
    console.log("ENTRA ELSE");
    numeric--;

}
console.log(numeric);

//FOR

for(let j = 0; j<array_tex.length; j++){
    console.log(array_tex[j] + (j+1));

}

//WHILE
//  let f=0;
//  while(f<array_tex.length){
//      console.log(array_tex[f] + (f+1))
//  }

//DO WHILE
// let m = 0;
// do{
//      console.log(array_tex[m] + (m + 1));
//      m++;

//  }while(m<array_tex.length);

 //FUNCIONES Y EVENTOS
 function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getMinutes());
    for(let j=0;j<array_mul.length;j++){
        console.log(array_mul[j].name);
    }
   
    //alert("LA PAGINA SE HA CARGADO CORRECTAMENTE");
 }
 function validate(){
    let nombres = document.getElementById("nombres").value;
    let nombres_style  = document.getElementById("nombres");
    if(nombres.length > 2){
       nombres_style.style.border = " 2px solid green";
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
        //alert(nombres.toUpperCase());
        alert(nombres.split(" "));
        
        //alert(document.concat("Urrego"));
    }
 }



 function change_Color(){
    document.body.style.backgroundColor = "red";
    document.body.style.color = "#fff";
 }

 const clear_color = document.querySelector("#clear_color");
 clear_color.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
 });
 
 // REGISTRO FORMULARIO
 const form_register = document.getElementById("form_register");
 const nombres       = document.getElementById("nombres");
 const apellidos     = document.getElementById("apellidos");
 const information   = document.getElementById("information");

 form_register.addEventListener("submit", name_event => {
    name_event.preventDefault();
    let info ="";
    //console.log(nombres.value);
    if(nombres.value.length <= 2 || apellidos.value.length <=2){
        
        info+="NOMBRES Y/O APELLIDOS INVALIDOS";
        information.style.color = "red";

    }
    else{
        alert(nombres.value + " " +apellidos.value);

    }
    information.innerText = info;
 })

 






