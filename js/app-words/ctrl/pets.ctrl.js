let PetsCtrl = function(WordService, $state){

	let vm = this;
	let category = 'pets';

	this.matchWords = matchWords;
	this.editWords = editWords;

	getWords();

	function getWords(){
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;

			let data = res.data.length;

			if(data) {
				$state.go('root.pets');
			} else {
				$state.go('root.add', {category});
			}
		});
	}

	function matchWords(){
		$state.go('root.match', {category});
	}

	function editWords(){
		$state.go('root.edit', {category});
	}

};
PetsCtrl.$inject = ['WordService', '$state'];

export default PetsCtrl;