/* ESERCIZIO 1
			   Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
			*/
const title = document.querySelector('h1');

const changeTitle = function () {
	title.innerText = 'Ho cambiato il titolo';
};

changeTitle();

/* ESERCIZIO 2
			   Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
			*/

const addClassToTitle = function () {
	title.classList.add('myHeading');
};

addClassToTitle();

/* ESERCIZIO 3
			   Scrivi una funzione per che cambi il testo dei p figli di un div
			  */

const changePcontent = function () {
	const pars = document.querySelectorAll('div p');
	pars.forEach((element, index) => {
		element.innerText = `testo cambiato ${index + 1}`;
	});
};

changePcontent();

/* ESERCIZIO 4
			   Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
			  */

const changeUrls = function () {
	const links = document.querySelectorAll('a:not(footer a)');
	links.forEach(element => {
		element.setAttribute('href', 'https://www.google.com');
	});
};

changeUrls();

/* ESERCIZIO 5
			   Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
			*/

const addToTheSecond = function () {
	const secondList = document.getElementById('secondList');
	const newLi = document.createElement('li');
	newLi.innerText = 'nuovo list item';
	secondList.appendChild(newLi);
};

addToTheSecond();

/* ESERCIZIO 6
			   Scrivi una funzione che aggiunga un secondo paragrafo al primo div
			*/

const addParagraph = function () {
	const firstDiv = document.querySelector('div');
	const newPar = document.createElement('p');
	newPar.innerText = 'Paragrafo aggiunto';
	firstDiv.appendChild(newPar);
};

addParagraph();

/* ESERCIZIO 7
			   Scrivi una funzione che faccia scomparire la prima lista non ordinata
			*/

const hideFirstUl = function () {
	const firstList = document.getElementById('firstList');
	firstList.remove();
};

// hideFirstUl();

/* ESERCIZIO 8
			   Scrivi una funzione che renda verde il background di ogni lista non ordinata
			  */

const paintItGreen = function () {
	const lists = document.querySelectorAll('ul');
	lists.forEach(list => {
		list.classList.add('backGreen');
	});
};

paintItGreen();

/* ESERCIZIO 9
			   Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
			  */

const makeItClickable = function () {
	title.addEventListener('click', function () {
		title.innerText = title.innerText.slice(0, -1);
	});
};

makeItClickable();

/* ESERCIZIO 10
			   Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
			  */

const revealFooterLink = function () {
	const myFooter = document.querySelector('footer');
	myFooter.classList.add('pointer');
	myFooter.onclick = () => {
		const myLink = document.querySelector('footer a').getAttribute('href');
		alert(myLink);
	};
};

revealFooterLink();

/* ESERCIZIO 11
			   Crea una funzione che crei una tabella nell'elemento con id "tableArea".
			   La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
			*/

const products = [
	{
		image: 'https://m.media-amazon.com/images/I/71IjKpXWaJL._AC_UL320_.jpg',
		product: 'MSI Thin GF63 12UDX-293IT',
		qty: 15,
		price: '€ 849',
	},
	{
		image: 'https://m.media-amazon.com/images/I/71Gc0XFzTuL._AC_UL320_.jpg',
		product: 'Lenovo, pc portatile Notebook, i7 1255u',
		qty: 12,
		price: '€ 839',
	},
	{
		image: 'https://m.media-amazon.com/images/I/61Pdb2wbgbL._AC_UL320_.jpg',
		product: 'Samsung Galaxy Book3 Laptop',
		qty: 21,
		price: '€ 819',
	},
	{
		image: 'https://m.media-amazon.com/images/I/81KCFGj7yFL._AC_UL320_.jpg',
		product: 'Dell Inspiron 16 5645 Notebook 16"',
		qty: 25,
		price: '€ 749',
	},
	{
		image: 'https://m.media-amazon.com/images/I/61Qx75Y5NDL._AC_UL320_.jpg',
		product: 'HP Victus 15-fa1003sl Notebook',
		qty: 14,
		price: '€ 990',
	},
];
const generateTable = function () {
	// Elementi generali
	const tableContainer = document.getElementById('tableArea');
	const myTable = document.createElement('table');
	const tableHead = document.createElement('thead');
	const tableBody = document.createElement('tbody');

	// Intestazione tabella
	const headImage = document.createElement('th');
	const headProduct = document.createElement('th');
	const headQty = document.createElement('th');
	const headPrice = document.createElement('th');
	const headRow = document.createElement('tr');

	headImage.innerText = 'IMMAGINE';
	headProduct.innerText = 'NOME PRODOTTO';
	headQty.innerText = 'QUANTITÀ';
	headPrice.innerText = 'PREZZO';

	headRow.appendChild(headImage);
	headRow.appendChild(headProduct);
	headRow.appendChild(headQty);
	headRow.appendChild(headPrice);

	tableHead.appendChild(headRow);

	myTable.appendChild(tableHead);

	// Contenuto tabella
	for (let i = 0; i < products.length; i++) {
		const newRow = document.createElement('tr');
		const cellImage = document.createElement('td');
		const cellProduct = document.createElement('td');
		const cellQty = document.createElement('td');
		const cellPrice = document.createElement('td');
		const imgProd = document.createElement('img');

		imgProd.setAttribute('src', products[i].image);
		cellImage.appendChild(imgProd);
		cellProduct.innerText = products[i].product;
		cellQty.innerText = products[i].qty;
		cellPrice.innerText = products[i].price;

		newRow.appendChild(cellImage);
		newRow.appendChild(cellProduct);
		newRow.appendChild(cellQty);
		newRow.appendChild(cellPrice);

		tableBody.appendChild(newRow);
	}

	myTable.appendChild(tableBody);

	tableContainer.appendChild(myTable);
};

generateTable();

/* ESERCIZIO 12
			   Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
			*/
const newProduct = {
	image: 'https://m.media-amazon.com/images/I/71NxKpg1NIL._AC_UL320_.jpg',
	product: 'ASUS TUF Gaming F15',
	qty: 9,
	price: '€ 999',
};

const addRow = function (product) {
	const tableContainer = document.getElementById('tableArea');
	const myTable = document.querySelector('table');
	const tableBody = document.querySelector('tbody');
	const newRow = document.createElement('tr');
	const cellImage = document.createElement('td');
	const cellProduct = document.createElement('td');
	const cellQty = document.createElement('td');
	const cellPrice = document.createElement('td');
	const imgProd = document.createElement('img');

	imgProd.setAttribute('src', product.image);
	cellImage.appendChild(imgProd);
	cellProduct.innerText = product.product;
	cellQty.innerText = product.qty;
	cellPrice.innerText = product.price;

	newRow.appendChild(cellImage);
	newRow.appendChild(cellProduct);
	newRow.appendChild(cellQty);
	newRow.appendChild(cellPrice);

	tableBody.appendChild(newRow);
	myTable.appendChild(tableBody);
	tableContainer.appendChild(myTable);
};

addRow(newProduct);

/* ESERCIZIO 14
			  Crea una funzione che nasconda le immagini della tabella quando eseguita
			*/

const hideAllImages = function () {
	const images = document.querySelectorAll('img');
	images.forEach(image => (image.style.display = 'none'));
};

// hideAllImages();

/* EXTRA ESERCIZIO 15
			  Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
			*/

const changeColorWithRandom = function () {
	const change = document.getElementById('changeMyColor');
	change.addEventListener('click', function () {
		const red = Math.floor(Math.random() * 256);
		const green = Math.floor(Math.random() * 256);
		const blue = Math.floor(Math.random() * 256);
		const newColor = `rgb(${red}, ${green}, ${blue})`;
		change.style.color = newColor;
	});
};

changeColorWithRandom();
