let frameworks = [
	{id: 1,	title: 'Angular', info: 'https://angularjs.org/', img: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'},
	{id: 2, title: 'React', info: 'https://reactjs.org/', img: 'https://techythought.com/wp-content/uploads/2020/09/ReactNative.png'},
	{id: 3, title: 'Vue', info: 'https://vuejs.org/', img: 'https://cdn2.auth0.com/blog/vuejs/logo.png'},
	{id: 4, title: 'Svelte', info: 'https://svelte.dev/', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/499px-Svelte_Logo.svg.png'}
]

const setCardData = card => `
	<div class="card" style="width: 18rem;">
  		<img src="${card.img}" class="card-img-top" style="height: 300px;" alt="${card.title || CARD_TITLE}">
  		<div class="card-body">
    		<h5 class="card-title">${card.title || CARD_TITLE}</h5>
    		<a href="#" class="btn btn-primary" data-btn="info" data-id="${card.id}">Get info</a>
    		<a href="#" class="btn btn-danger" data-btn="remove" data-id="${card.id}">Delete</a>
  		</div>
	</div>

`
function cardRender() {
	const cardData = frameworks.map(card => setCardData(card)).join('')
	document.querySelector('#row').innerHTML = cardData
}

cardRender()

const getCardInfo = $.modal({
	title: 'Detailed framework info',
	closable: true,
	width: '400px',
	footerButtons: [
		{text: 'Close', type: 'primary', handler() {
			getCardInfo.close()
		}}
	]
})
/*
const confirmModal = $.modal({
	title: 'Are you sure?',
	closable: true,
	width: '400px',
	footerButtons: [
		{text: 'Cancel', type: 'secondary', handler() {
			console.log('primary clicked')
			getCardInfo.close()
		}},
		{text: 'Delete', type: 'danger', handler() {
			console.log('primary clicked')
			getCardInfo.close()
		}}
	]
})
*/
document.addEventListener('click', event => {
	event.preventDefault()
	const btnType = event.target.dataset.btn
	const id = +event.target.dataset.id
	const framework = frameworks.find(f => f.id === id)
	
	if (btnType === 'info') {
		
		getCardInfo.setContent(`
			<p>You can get more info about ${framework.title} <a href="${framework.info}" target="_blank">here</a></p>
			`)
		getCardInfo.open()
		console.log(framework)
	} 
	else if (btnType === 'remove') {
		$.confirm({
			title: 'Are you sure?',
			content: `
			<p>You gonna make ${framework.title} unpopular</p>

			`}).then(() => {
				frameworks = frameworks.filter(f => f.id !== id)
				cardRender()
			}).catch(() => {
				console.log('cancel')
			})
		/*
		confirmModal.setContent(`
			<p>You're deleting <strong>${framework.title}</strong></p>

			`)
		confirmModal.open()*/
	}
})







