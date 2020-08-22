/*
 
Las cartas están en inglés
Clubs Tréboles
Diamonds Diamantes
Hearts Corazones
Spades Picas

*/

let deck = [ ]; // Creamos baraja de cartas
const tipos = ['C', 'D', 'H', 'S'];
const cartas_especiales = ['A', 'J', 'Q', 'K'];


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

	console.log(deck);
	deck = _.shuffle(deck);
	console.log(deck);
	return deck;

}

crearDeck();
