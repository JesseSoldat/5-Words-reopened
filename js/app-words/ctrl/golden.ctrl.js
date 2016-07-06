let GoldenCtrl = function($cookies, $state, WordService) {
	let vm = this;

	this.editWords = editWords;

	checkAuth();
	getGolden();

	function checkAuth() {
		let auth = $cookies.get('authToken');
		if (auth) {
			
		}	else {
			$state.go('home');
		}
	}

	function getGolden() {
		let golden = 'golden';
		WordService.getGolden(golden).then( (res) => {
		
			vm.words = res.data;
		})
	};

	function editWords(words, category) {
		$state.go('root.edit', {category});
	}

};
GoldenCtrl.$inject = ['$cookies', '$state', 'WordService'];

export default GoldenCtrl;