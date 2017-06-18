var inputNumero = document.getElementById("alturaDaPiramide");

function criarPiramide(){
  var altura = Number(inputNumero.value); //Comentário 1.
  var aux = 1; // incremento relativo à altura da piramide e ao incremento. 
                   
  for(var x = 1; x <= altura; x++){        	
	  if(x == 1){	   			
		  document.write("_".repeat(Math.max(0, altura - x))); //Comentário 2.
		  document.write("#");
		  document.write("<br>");   			
	  }else{	    		
		  document.write("_".repeat(Math.max(0, altura - x)));
		  document.write("#".repeat(x + aux));		        
		  document.write("<br>");
		  aux++;		    
	    }	   		   			      	
    }
  }

var btCriar = document.getElementById("btCriarPiramide");
btCriar.onclick = criarPiramide;  

  //Comentário 1. A função Number(); = Retorna o valor dado pelo usuário como um numeral e não um texto.

  /*Comentário 2. A função Math.max(); = Define o valor (mínimo) ao qual o cálculo pode retornar;
 valores negativos serão interpretados como zero(0).*/ 