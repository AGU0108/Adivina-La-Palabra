//Crea dos variables para almacenar los nombres de los jugadores en localStorage:

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");


//Declara las 2 variables para la puntuación de los jugadores con valor de 0:
var player1_score = 0;
var player2_score = 0;

//innerHTML sirve para mostrar algo nuevo en la pag web
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

//Coloca la puntuación de los jugadores en la pag web utilizando innerHTML:
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

//Coloca los textos para el turno de los jugadores utilizando innerHTML
document.getElementById("player_question").innerHTML = "Turno para preguntar: " + player1_name;
document.getElementById("player_answer").innerHTML = "Turno para responder: " + player2_name;


function send() {
    //Declara la función get_word, su valor será la palabra que ingrese el usuario la caja de texto:
    get_word = document.getElementById("word").value;

    //Convierte la palabra que escriba el jugador en minúsculas:
    word = get_word.toLowerCase();

    //Declara la variable charAt1 para obtener una letra de la palabra:
    charAt1 = word.charAt(1);

    //Aquí dividimos la palabra para que puedan ocultarse algunas letras:
    lenght_divide_2 = Math.floor(word.length/2);

    //Declara la variable charAt2 para obtener otra letra de la palabra:
    charAt2 = word.charAt(lenght_divide_2);

    //Obtén la última letra de la palabra utilizando word.length - 1:
    length_minus_1 = word.length - 1;
    charAt3 =word.charAt(length_minus_1);

    //Coloca las variables que reemplazarán las letras pos espacios vacíos:
    remove_charAt1 = word.replace(charAt1, "_");
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

// CLASE 92:

question_turn = "player1";
answer_turn = "player2";


function check() {
    //1. Declara la variable get_answer para obtener la respuesta que coloque el usuario en la caja de texto:
	var get_answer = document.getElementById("input_check_box").value;

    //2. Convierte la resuesta del usuario a letras minúsculas:
	 var answer = get_answer.toLowerCase();

    //3. Utiliza IF para comparar si la respuesta es igual a la palabra original:
	if( answer == word    )	{

		if(answer_turn == "player1")
		{
            //4. Aumenta un punto a la puntuación de player 1:
			player1_score = player1_score +1;

            //5. Muestra la nueva puntuación de player_1 en la pag web utilizando innerHTML:
		    document.getElementById("player1_score").innerHTML = player1_score;
        
		}
		else 
		{
            //6. Aumenta un punto a la puntuación de player 2:
            player2_score = player2_score +1;
			

            //7. Muestra la nueva puntuación de player_2 en la pag web utilizando innerHTML:
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}

    //8. Utiliza IF para comparar si es el turno de preguntar para player1:
	if(    question_turn == "player1"    ) {

        //9. Cambia el valor de la variable question_turn para "player2":
		 question_turn = "player2";

		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ;
	}
	else {

        //10. Cambia el valor de la variable question_turn para "player1":
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
	}

    // 11. Utiliza IF para comparar si es el turno de responder para player1:
	if(  answer_turn == "player1"     ) {

        //12. Cambia el valor de la variable answer_turn para "player2":
		answer_turn = "player2"; 
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
	} 
	else {

        //13. Cambia el valor de la variable answer_turn para "player1":
		answer_turn = "player1";
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}


