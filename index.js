const frameworks = [
	{id: 1,	title: 'Angular', img: 'https://images.app.goo.gl/E8YQS7yZRzfKeLdB7'},
	{id: 2, title: 'React', img: 'https://images.app.goo.gl/mqnwsvEesz6iATZG9'},
	{id: 3, title: 'Vue', img: 'https://images.app.goo.gl/8rHb1ia2KWNtckTR9'},
	{id: 4, title: 'Svelte', img: 'https://images.app.goo.gl/Z56YW9sdu2mhNMoW9'}
]

const modal = $.modal({
	title: 'Modal window title',
	closable: true,
	content: `<h4><p>Text</p></h4>`,
	width: '400px',
	footerButtons: [
		{text: 'OK', type: 'primary', handler() {
			console.log('primary clicked')
		}},
		{text: 'Cancel', type: 'danger', handler() {
			console.log('danger clicked')
		}}
	]
})