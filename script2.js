window.onload=function() {
   numero = prompt("Introduce un numero:");
   document.write("<table border='1'><tr><td>Numero</td><td>Resultado</td></tr>");
   while(numero>100){
     alert("Numero entre el 1 y el 100");
     var numero=prompt('La tabla de multiplicar de:');
     }
     if(numero<=100){
    for(i=0;i<=10;i++){
          document.write("<tr><td>"+numero+" x " + i +"</td><td>"+numero*i+"</td></tr>");
          }

      }
   document.write("</table>");

}
