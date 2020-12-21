$.confirm = function(options) {
	return new Promise((resolve, reject) => {
		const modal = $.modal({
			title: options.title,
			width: '400px',
			closable: false,
			content: options.content,
			onClose() {
				modal.destroy()
			},
			footerButtons: [
		{text: 'Cancel', type: 'secondary', handler() {
			console.log('primary clicked')
			modal.close()
			reject()
		}},
		{text: 'Delete', type: 'danger', handler() {
			console.log('primary clicked')
			modal.close()
			resolve()
		}}
			]
		})

		setTimeout(() => modal.open(), 100)
	})
}