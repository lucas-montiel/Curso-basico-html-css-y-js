
   let name = "Mundo" ;
   let saludo = `Hola Mundo!!!`

   document.getElementById("saludo").innerHTML = saludo; 

const load = () =>{
   name = document.getElementById('newName').value;
   saludo = `Hola ${name}`
   console.log(`Hola ${name}!!!`);

   document.getElementById("saludo").innerHTML = saludo; 
}