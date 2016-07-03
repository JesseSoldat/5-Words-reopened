import _ from 'underscore';

let MatchCtrl = function(WordService, $state, $stateParams, $cookies){

	let vm = this;
	this.goBack = goBack;

	let category = $stateParams.category;

	getWords();

	function goBack() {
		$state.go('root.' + category);
	}

	function getWords() {
		console.log(category);
		let words = WordService.tempWords;
		

		if(words.length === 0) {
			WordService.getWords(category).then( (res) => {
				let data = res.data;
				matchWords(data);

				function matchWords(data) {
					console.log(data);
		
					let array = [];
					
					for(let i = 0; i < data.length; i++) {
						array.push(data[i].word);
					}
					console.log(array);

					let category = res.data[0].category;

					WordService.searchWords(array, category).then( (res) => {
						console.log(res.data);
					})

				}
			})
		}
	}

};
MatchCtrl.$inject = ['WordService', '$state', '$stateParams', '$cookies'];

export default MatchCtrl;