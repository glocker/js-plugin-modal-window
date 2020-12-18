const frameworks = [
	{id: 1,	title: 'Angular', img: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg'},
	{id: 2, title: 'React', img: 'https://techythought.com/wp-content/uploads/2020/09/ReactNative.png'},
	{id: 3, title: 'Vue', img: 'https://cdn2.auth0.com/blog/vuejs/logo.png'},
	{id: 4, title: 'Svelte', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/499px-Svelte_Logo.svg.png'}
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