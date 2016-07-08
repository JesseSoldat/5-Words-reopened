let MusicCtrl = function(WordService, $state){

	let vm = this;
	let category = "music";

	this.editWords = editWords;
	this.matchWords = matchWords;

	getWords();

	function getWords(){
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;

			let data = res.data.length;

			if(data) {
				$state.go('root.music');
			}	else {
				$state.go('root.add', {category});
			}
		});
	}
	

	function editWords(){
		$state.go('root.edit', {category});
	}

	function matchWords(){
		$state.go('root.match', {category});
	}

};
MusicCtrl.$inject = ['WordService', '$state'];

export default MusicCtrl;
