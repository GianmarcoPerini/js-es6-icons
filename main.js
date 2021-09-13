const icon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
const dropDown = document.querySelector('#drop-down')
const box = document.querySelector('#box');

const filterMenu = () => {
    const typeList = []
    icon.forEach(element => {
        if(typeList.indexOf(element.type) == -1) typeList.push(element.type)
    })
    typeList.forEach(element => {
        dropDown.innerHTML += `<option value="${element}">${element}</option>`
    })
}


const displayElement = () => {
		dropDown.addEventListener('change', (event)=>{
			let writeHTML = filtered(event.target.value)
			let temporaryHTML = ''
			writeHTML.forEach(element => {
			if(event.target.value == `${element.type}`){
				temporaryHTML += 
				`<div class="dai">
					<i class="${element.family} ${element.prefix}${element.name}"></i>
					<p>${element.name.toUpperCase().split('-').join(' ')}</p>
				</div>`
				box.innerHTML = temporaryHTML;
			}
		})
	})
}






const filtered = (toFilter) => {
	return icon.filter(el => el.type == toFilter)
}



filterMenu()

displayElement()