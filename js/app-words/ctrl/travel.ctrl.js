let TravelCtrl = function(WordService, $state, $cookies) {

	let vm = this;
	let category = 'travel';
	this.editWords = editWords;
	this.matchWords = matchWords;

	getWords();

	function getWords() {
		let category ='travel';
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;

			let data = res.data.length;

			if(data) {
				
			} else {
				$state.go('root.add', {category})
			}


		});
	}

	function editWords() {
		$state.go('root.edit', {category});
	}

	function matchWords() {
		$state.go('root.match', {category})
	}

};
TravelCtrl.$inject = ['WordService', '$state', '$cookies'];

export default TravelCtrl;