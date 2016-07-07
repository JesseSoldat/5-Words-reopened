let TechCtrl = function(WordService, $state){

	let vm = this;
	let category = 'tech';

	this.editWords = editWords;
	this.matchWords = matchWords;

	getWords();

	function getWords(){
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;
		});
	}

	function editWords(words){
		$state.go('root.edit', {
			category
		});
	}
	function matchWords(words){
		$state.go('root.match', {
			category
		});
	}

};

TechCtrl.$inject = ['WordService', '$state'];

export default TechCtrl;