let TravelCtrl = function(WordService, $state, $cookies) {

	let vm = this;
	this.matchWords = matchWords;

	getWords();

	function getWords() {
		let category ='travel';
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;

			let data = res.data.length;

			if(data) {
				console.log('Have Words');
			} else {
				$state.go('root.add', {category})
			}


		});
	}

	function matchWords(words, category) {
		$state.go('root.match', {category})
	}

};
TravelCtrl.$inject = ['WordService', '$state', '$cookies'];

export default TravelCtrl;