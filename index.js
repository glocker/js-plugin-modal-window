const frameworks = [
	{id: 1,	title: 'Angular', info: 'Angular info', img: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'},
	{id: 2, title: 'React', info: 'React info', img: 'https://techythought.com/wp-content/uploads/2020/09/ReactNative.png'},
	{id: 3, title: 'Vue', info: 'Vue info', img: 'https://cdn2.auth0.com/blog/vuejs/logo.png'},
	{id: 4, title: 'Svelte', info: 'Svelte info', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/499px-Svelte_Logo.svg.png'}
]

const modal = $.modal({
	title: 'Modal window title',
	closable: true,
	content: `<h4><p>Text</p></h4>`,
	width: '400px',
	footerButtons: [
		{text: 'OK', type: 'primary', handler() {
			console.log('primary clicked')
			modal.close()
		}},
		{text: 'Cancel', type: 'danger', handler() {
			console.log('danger clicked')
			modal.close()
		}}
	]
})

function _createCard(options) {
	const container = document.querySelector('.container')
	const column = document.createElement('div')
	column.classList.add('col')

	frameworks.forEach(card => {
		column.insertAdjacentHTML('afterbegin', `


				<div class="card" style="width: 18rem;">
  					<img src="${card.img}" class="card-img-top" style="height: 300px;">
  						<div class="card-body">
    						<h5 class="card-title">${card.title}</h5>
    							<a href="#" class="btn btn-primary">Go next</a>
    							<a href="#" class="btn btn-danger">Delete</a>
  						</div>
				</div>

		`)


	})

	container.appendChild(column)
	return column

}

_createCard(frameworks)

