let BookCtrl = function(WordService, $state) {
	let vm = this;

	let category = 'books';

	this.matchWords = matchWords;
	this.editWords = editWords;

	getWords();

	function matchWords() {
		$state.go('root.match', {category});
	}

	function editWords(words){
		$state.go('root.edit', {category});
	}

	function getWords(){
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;
		})
	}
};
BookCtrl.$inject = ['WordService', '$state'];

export default BookCtrl;