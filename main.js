const icon = [
	{name: 'cat', prefix: 'fa-', type: 'Animal', family: 'fas'},
	{name: 'crow', prefix:'fa-', type: 'Animal', family: 'fas'},
	{name: 'dog', prefix: 'fa-', type: 'Animal', family: 'fas'},
	{name: 'dove', prefix: 'fa-', type: 'Animal', family: 'fas'},
	{name: 'dragon', prefix: 'fa-', type: 'Animal', family: 'fas'},
	{name: 'horse', prefix: 'fa-', type: 'Animal', family: 'fas'},
	{name: 'hippo',	prefix: 'fa-', type: 'Animal', family: 'fas'},
	{name: 'fish', prefix: 'fa-', type: 'Animal', family: 'fas'},
	{name: 'carrot', prefix: 'fa-', type: 'Vegetable', family: 'fas'},
	{name: 'apple-alt', prefix: 'fa-', type: 'Vegetable', family: 'fas'},
	{name: 'lemon',	prefix: 'fa-', type: 'Vegetable', family: 'fas'},
	{name: 'pepper-hot', prefix: 'fa-', type: 'Vegetable', family: 'fas'},
	{name: 'user-astronaut', prefix: 'fa-', type: 'User', family: 'fas'},
	{name: 'user-graduate',	prefix: 'fa-', type: 'User', family: 'fas'},
	{name: 'user-ninja', prefix: 'fa-', type: 'User', family: 'fas'},
	{name: 'user-secret', prefix: 'fa-', type: 'User', family: 'fas'}
];

	// RICERCA DEL TYPE NELL'ARRAY DI OGGETTI E CREAZIONE DELL'ARRAY NELLA QUALE VERRÀ IMMAGAZZINATA L'INFORMAZIONE

const unicType = (arr)=>{
	const typeList = []
	arr.forEach(element => {
		if(typeList.indexOf(element.type) == -1) typeList.push(element.type)
	})
	return typeList
}

	// GENERATORE DI COLORI RANDOMICI CHE RITORNA UN ARRAI DI CODICI HEX

const colorsGenerator = () => {
	const typeList = unicType(icon)
	const colorsArr = []
	typeList.forEach(()=>{
		colorsArr.push('#' + Math.floor(Math.random()*16777215).toString(16))
	})
	return colorsArr
}



const dropDown = document.querySelector('#drop-down')
const box = document.querySelector('#box');


	// CREAZIONE DEL DROPDOWN MENÙ PER LA SCELTA MULTIPLA

const dropDownMenu = (placeToPrint) => {
	const typeList = unicType(icon)
    typeList.forEach(element => {
        placeToPrint.innerHTML += `<option value="${element}">${element}</option>`
    })
	return typeList
}


	// QUESTA FUNZIONE SERVE A STAMPARE LA PAGINA CON TUTTI I VALORI PRESENTI NELL'ARRAY (DEFAULT)

const defaultHTML = (arr, placeToPrint) => {	
	let displayHTML = '';			
	arr.forEach(element => {
		displayHTML += classWriting(element)
		placeToPrint.innerHTML = displayHTML;
	})
}


	// UNA VOLTA ESEGUITA LA SCELTA IL MENÙ STAMPA IN PAGINA GLI ELEMENTI FILTRATI RICHIESTI

const printElements = (eventToListen, placeToPrint) => {
	eventToListen.addEventListener('change', (event)=>{
		let targetValue = event.target.value;
		let writeHTML = filtered(targetValue, icon);	// LA FUNZIONE FILTER VIENE COSÌ INSERITA IN UNA VARIABILE IN MODO DA POTER ESSERE RICHIAMATA E USATA
		let currentTarget = '';						
		writeHTML.forEach(element => {					// VIENE CREATO IL CICLO CHE ITERA GLI ELEMENTI DELL'ARRAY E LI STAMPA
		currentTarget += classWriting(element)			// LA STAMPA AVVIENE AGGIUNGENDO I VARI ELEMENTE UNO DOPO L'ALTRO CON IL +=.......MA!!!
		})
		placeToPrint.innerHTML = currentTarget;					// UNA VOLTA CHE LA SCELTA CAMBIA (DROPDOWN MENÙ),
	})													// LA PAGINA VIENE SVUOTATA E POI DI NUOVO RIEMPITA CON I NUOVI ELEMENTI FILTRATI
}														// QUESTO AVVIENE PERCHÈ NON VIENE USATO += -alias aggiungi- MA = CHE SOVRASCRIVE IL VECCHIO CON IL NUOVO


	// FILTRO CHE PRENDE L'ELEMENTO CHE SI DESIDERA RICHIAMARE E RESTITUISCE L'ARREY CON TUTTI GLI OGGETTI CORRISPONDETI ALL'INTERNO

const filtered = (toFilter, arr) => {
	if(toFilter == 'All') return arr					// SE È -ALL- MI RESTITUISCI L'ARRAY INTERO ICON
	return arr.filter(el => el.type == toFilter)		// ALTRIMENTI MI RESTITUISCI L'ARRAY CON IL -TYPE- == A toFilter(esempio: User oppure Animal)
}

	// VARIABILE DI COMODO PER NON RISCRIVERE LA STESSA INFORMAZIONE PIÙ VOLTE
const classWriting = (el) => `<div class="card card-obj"><i class="${el.family} ${el.prefix}${el.name} fs-2 mt-2" style="color:${el.color}"></i><p class="mt-3">${el.name.toUpperCase().split('-').join(' ')}</p></div>`


	// CREAZIONE NUOVA KEY NEGLI OGGETTI E ASSEGNAZIONE DEL COLORE
const colorized = (arr, color) => {
	const types = unicType(arr);						// TYPE UNICI

	const colorizedArray = arr.map((element) => {		
		const indexOfType = types.indexOf(element.type);	// VARIABILE DOVE VIENE SALVATO L'INDEX DEI VARI TYPE
		if(indexOfType !== -1){								// CONTROLLO QUAL'È L'INDEX DI TYPE(type = ['Animal', 'Vegetable', 'User'])
			element.color = color[indexOfType]; 			// SE L'INDICE VIENE TROVATO ALLORA SI CREA UNA NUOVA KEY DENTRO GLI OGGETTI.
		}													// IL VALORE DI QUESTA KEY È = variabileCOLOR[indexOfType]; 
		return element
	})	
	return colorizedArray
}



const colors = colorsGenerator()		// GENERAZIONE COLORE

colorized(icon, colors)					// GENERAZIONE KEY COLORE E ASSEGNAZIONE TRAMITE IN-LINE STYLE

defaultHTML(icon, box);					// STAMPAGGIO LISTA OGGETTI COMPLETA SU PAGINA

dropDownMenu(dropDown)					// DROPDOWN MENÙ

printElements(dropDown, box);			// IN BASE A CHE VALORE VIENE SCELTO VERRÀ STAMPATA LA PROPRIA SCELTA