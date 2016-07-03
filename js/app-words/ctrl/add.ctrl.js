let AddCtrl = function($stateParams, $state, $cookies, WordService) {
	
	let vm = this;
	this.addWords = addWords;
	let category = $stateParams;
	vm.category = category;

	function addWords(words, category) {
		
		let one = words.one.toLowerCase();
		let two = words.two.toLowerCase();
		let three = words.three.toLowerCase();
		let four = words.four.toLowerCase();
		let five = words.five.toLowerCase();

		let wordsArray = [one, two, three, four, five];
		let username = $cookies.get('username');

		let data = {
			words: wordsArray,
			category: category,
			username: username
		};

		let response = WordService.addWords(data, category);
		
		response.request.then( function() {
			let promise = response.category;
			$state.go('root.' + promise);
		});

	}

};
AddCtrl.$inject = ['$stateParams', '$state', '$cookies', 'WordService'];

export default AddCtrl;