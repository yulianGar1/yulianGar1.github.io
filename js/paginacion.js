const elementosPorPagina = 4;
let paginaActual = 1;

//document.getElementById("page2").onclick()
//document.getElementById("page2").click();

function page1() {
  paginaActual=1;
  if(paginaActual==1){
    document.getElementById("5").style.display="none";
    document.getElementById("6").style.display="none";
    document.getElementById("7").style.display="none";
    document.getElementById("8").style.display="none";
    document.getElementById("9").style.display="none";
    document.getElementById("10").style.display="none";

    document.getElementById("1").style.display="block";
    document.getElementById("2").style.display="block";
    document.getElementById("3").style.display="block";
    document.getElementById("4").style.display="block";
  }else{
    
  }

}
function page2() {
  paginaActual=2;
  if(paginaActual==2){
   //borrar la de pagina 1 
   document.getElementById("1").style.display="none";
   document.getElementById("2").style.display="none";
   document.getElementById("3").style.display="none";
   document.getElementById("4").style.display="none";
   document.getElementById("9").style.display="none";
   document.getElementById("10").style.display="none";
   //Colocar las de pagina 2  
  document.getElementById("5").style.display="block";
  document.getElementById("6").style.display="block";
  document.getElementById("7").style.display="block";
  document.getElementById("8").style.display="block";

  }else{

  }
  
}
function page3() {
  paginaActual=3;
  if(paginaActual==3){
   //borrar la de pagina 1 y 2 
   document.getElementById("1").style.display="none";
   document.getElementById("2").style.display="none";
   document.getElementById("3").style.display="none";
   document.getElementById("4").style.display="none";
   document.getElementById("5").style.display="none";
   document.getElementById("6").style.display="none";
   document.getElementById("7").style.display="none";
   document.getElementById("8").style.display="none";
   //Colocar las de pagina 3  
  document.getElementById("9").style.display="block";
  document.getElementById("10").style.display="block";

  }else{

  }
}

