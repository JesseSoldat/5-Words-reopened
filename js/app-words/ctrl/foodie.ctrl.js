let FoodieCtrl = function(WordService, $state){

	let vm = this;
	let category = 'foodie';

	this.editWords = editWords;
	this.matchWords = matchWords;

	getWords();

	function getWords(){
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;
		});
	}

	function editWords(){
		$state.go('root.edit', {category});
	}

	function matchWords(){
		$state.go('root.match', {category});
	}

};

FoodieCtrl.$inject = ['WordService', '$state'];

export default FoodieCtrl;