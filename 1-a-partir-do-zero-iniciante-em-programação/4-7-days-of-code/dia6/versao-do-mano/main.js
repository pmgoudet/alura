const itemName = document.getElementById('itemName');
const itemSector = document.getElementById('itemSector');
const listaCompras = document.getElementById('listaCompras');
let shoppingList = [];
let sectors = [];

function handleAdd(){
	if (itemName.value == "" || itemSector.value == "" ){
		window.alert("Por favor, insira um nome e um setor para o item.");
		return;
	}
	makeItem(itemName.value,itemSector.value);
	itemName.value =''; 
	itemSector.value = '';
	printItems();
}

function makeItem(name,sector){
	let item = {
		name: name,
		sector: sector
	}
	shoppingList.push(item);
	addSector(item.sector);
}

function addSector(sec){
	if (sectors.includes(sec) == false){
		sectors.push(sec);
	}
}

function printItems(){
	listaCompras.innerHTML = '';
	// para cada setor, cria a div e o título do setor;
	for (let i=0; i<sectors.length; i++){
		let sectorDiv = document.createElement('div');
		sectorDiv.id = sectors[i];
		sectorDiv.setAttribute('class','setor');
		sectorDiv.innerHTML = `<h2>${sectors[i]}</h2>`;
		listaCompras.appendChild(sectorDiv);
		// ainda no laço for, para cada item na lista que seja daquele setor, insere o checkbox e label do item
		shoppingList.filter((element) => {
			if (element.sector == sectors[i]){
				// cria div para botão e nome do item
				let itemDiv = document.createElement('div');
				itemDiv.id = `${element.name}-${element.sector}`;
				itemDiv.setAttribute('class','itemDiv');
				sectorDiv.appendChild(itemDiv);
				// cria botão
				let removeBtn = document.createElement('button');
				removeBtn.setAttribute('onclick',`removeItem('${element.name}','${element.sector}')`);
				removeBtn.innerHTML = 'x';
				itemDiv.appendChild(removeBtn);
				// cria item
				let listItem = document.createElement('p');
				listItem.innerHTML = `${element.name}`;
				itemDiv.appendChild(listItem);				
			};
		})
	}
}

function removeItem(divId, parentDivId) {
	// remove da div setor
	let parentDiv = document.getElementById(parentDivId);
	let childDiv = document.getElementById(`${divId}-${parentDivId}`);
	parentDiv.removeChild(childDiv);
	
	// remove a div setor caso esteja sozinha
	if (parentDiv.childNodes.length <= 1){
		parentDiv.parentNode.removeChild(parentDiv);
		// remove o setor da lista de setores
		let sectorListIndex = sectors.findIndex((element) => {
		if (element == parentDiv) {
			return true;
		}
	});
	sectors.splice(sectorListIndex,1);
	};
	
	// se não houver mais setores na lista, volta a mensagem padrão
	if (listaCompras.hasChildNodes() == false){
		listaCompras.innerHTML = `<p>Sua lista está vazia :(<br>Adicione itens para começar!</p>`;
	}
	
	// remove da lista de objetos
	let shoppingListIndex = shoppingList.findIndex((element) => {
		if (element.name == divId) {
			return true;
		}
	});
	shoppingList.splice(shoppingListIndex,1);
}