let TravelCtrl = function(WordService, $state, $cookies) {

	let vm = this;

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

};
TravelCtrl.$inject = ['WordService', '$state', '$cookies'];

export default TravelCtrl;