const icon = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'Animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'Vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'Vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'Vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'Vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'User',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'User',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'User',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'User',
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
			if(event.target.value == 'All'){
				temporaryHTML += 
				`<div class="card card-obj">
					<i class="${element.family} ${element.prefix}${element.name}"></i>
					<p>${element.name.toUpperCase().split('-').join(' ')}</p>
				</div>`
				box.innerHTML = temporaryHTML;
			}else if (event.target.value == `${element.type.charAt(0).toUpperCase() + element.type.slice(1)}`){
				temporaryHTML += 
				`<div class="card card-obj">
					<i class="${element.family} ${element.prefix}${element.name}"></i>
					<p>${element.name.toUpperCase().split('-').join(' ')}</p>
				</div>`
				box.innerHTML = temporaryHTML;
			}
		})
	})
}

const filtered = (toFilter) => {
	if(toFilter == 'All'){
		return icon
	} 
	return icon.filter(el => el.type == toFilter)
}

const defaultHTML = () => {
	icon.forEach(element => {
		let tempDefault = 
		`<div class="card card-obj">
			<i class="${element.family} ${element.prefix}${element.name}"></i>
			<p class="mb-0">${element.name.toUpperCase().split('-').join(' ')}</p>
		</div>`
		box.innerHTML += tempDefault
	})
}


defaultHTML()

filterMenu()

displayElement()