/*
 * Practica1.
 * José Arcos Aneas  
 * joseaa@correo.ugr.es
 * 
 * Descripción del programa:
 *
 * El siguiente codigo lee un fichero de datos en el que cada linea
 * esta formada por un nombre y seis valores numéricos separados por comas. 
 * Ejemplo:
 		Jose,5,6,7,8,7,6
 * Cada fila representa la informacion de un alumno. El primer 
 * valor es el nombre, los 5 valores siguientes representan las
 * notas de la evaluación de 5 temas y el ultimo valor numérico
 * corresponde a la puntuación del proyecto final.
 * 
 * Ejecución : rhino Practica1.js entrada.txt
 * 
*/

// Inicializacion del objeto FileReader y bufferReader
var FileReader = java.io.FileReader;
var BufferedReader =java.io.BufferedReader;
// Archivo a leer pasado como argumento al programa
var file_name = arguments[0];
// Lectura del archivo de entrada
var f = new FileReader(file_name);
var br = new BufferedReader( f );
// Variable del tipo Array que contendra una lista de 
// alumnos
var listaalumnos=new Array(alumno);

/*
 * Mientras el archivo no este vacio
 * leemos de linea en linea. Cada linea 
 * se almacenará en un objeto de tipo JSON
 * que almacenará los datos de cada alumno.
 */
while ((line = br.readLine()) != null) {

	// Introduccimos la linea en un string y
	// (como se indica en los contenidos del tema 
	// necesario para que pueda entenderlo javascript
	//  ya que se utiliza una libreria de java para la entrada) 
	// separamos sus valores por comas.
	var estaLinea = new String( line);
	resultado  = estaLinea.split(","); 
    // Creamos un objeto JSON con el que trabajaremos
    
    /* El objeto alumno contara con los siguientes campos:
     * name = será el nombre o identificador del alumno en este caso
     * notas = es una lista de 5 notas una de cada tema.
     * media = funcion que calcula la media con las 5 notas anteriores.
     * proyecto = es la nota obtenida por el alumno en el proyecto final.
     */
	var alumno = { "name": resultado[0], 
			"notas":[resultado[1],resultado[2],resultado[3], resultado[4],resultado[5]], 
			"proyecto": resultado[6] ,
			"media":function(){	
			var media=0;
			for (var i =0; i<5;i++){
				media=media + parseInt(this.notas[i]);		

			}			
			return media/5;
		}
	}
	// LLamada a la subrutina "evaluar"
	evaluar(alumno);	
	
}

/* Funcion evaluar
 * Toma como entrada un objeto de tipo alumno.
 * La subruta evaluar considera aprobado o suspenso a un alumno
 * dependiendo de las nota media y la nota del proyecto.
 */
function evaluar(alumno){
	// Almaceno la nota media y la nota final del alumno
	var media=alumno.media();
	var notaProyecto= alumno.proyecto;
	// Uso el condicional "if" para comprobar si esta aprobado
	// o esta suspenso.
	if (media > 8 && notaProyecto >5){
		print ("El alumno "+alumno.name+" esta probado");
	}else if(media >=5 && media <8 && notaProyecto >=8){
		print ("El alumno "+ alumno.name +" esta probado");
	}else{
		print ("El alumno "+ alumno.name +" esta suspenso");
	}
}






