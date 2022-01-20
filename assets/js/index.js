
let tabla= () => {
let num = prompt("Ingresar un numero del 0 al 20")
if(num>20||num<0){
    alert("número fuera del rango")
} else{
    let text ="";
    let i=1;
    let factorial =1;
    
while( i<=num){
     mult =num*i;
     text += i+" x "+num+" = "+ mult +"<br>";
     i++

     
  //for anidado, solo para consola  (requerimiento)
  for(let y = 1;y<=num;y++ ){
     factorial *= y;
     console.log(" El Factorial de "+ y +" = "+ factorial );
  }
   
}

document.getElementById('cont1').innerHTML= text;
console.log(text);
let text2 ="";
let x=1;
let fac =1;

while( x<=num){
 fac = fac * x;
 text2 += " El Factorial de "+x +" = "+ fac +"<br>";
 x++

}
document.getElementById('cont2').innerHTML= text2;
}


}