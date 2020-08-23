/*
 
Las cartas están en inglés
Clubs Tréboles
Diamonds Diamantes
Hearts Corazones
Spades Picas

*/

// Variables globales
let deck = [ ]; // Creamos baraja de cartas
const tipos = ['C', 'D', 'H', 'S'];
const cartas_especiales = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0;
	puntosComputadora = 0;


// Referencias HTML

const botonPedir = document.querySelector('#botonPedir');
console.log(botonPedir);

const puntosJugadorHtml = document.querySelectorAll('small');




const crearDeck = () => {  // Creamos una función para agregar las cartas al deck

	for(let i = 2; i <= 10; i++){
		for(let tipo of tipos){
			deck.push(i + tipo);
		}
	}

	for(let tipo of tipos){
		for(let especial of cartas_especiales){
			deck.push(especial + tipo);
		}
	}

	//console.log(deck);
	deck = _.shuffle(deck);
	console.log(deck);
	return deck;

}

crearDeck();

// Función para pedir carta

const pedirCarta = () => {
	
	if(deck.length === 0){
		throw 'No hay cartas en el deck';
	}


	const carta = deck.pop();
	return carta;
}

//pedirCarta();


const valorCarta = (carta) =>{
	
	const valor = carta.substring(0, carta.length-1);
	return( isNaN(valor)) ?
		(valor === 'A') ? 11 : 10
		: valor * 1;
}

// Eventos

botonPedir.addEventListener('click', () => {
	const carta = pedirCarta();
	puntosJugador = puntosJugador + valorCarta(carta);
	puntosJugadorHtml[0].innerText = puntosJugador;


    
});












