let FilmCtrl = function(WordService, $state){

	let vm = this;
	let category = 'film';

	this.editWords = editWords;
	this.matchWords = matchWords;

	getWords();

	function getWords(){
		WordService.getWords(category).then( (res) => {
			
			vm.words = res.data;

			let data = res.data.length;

			if(data) {
				$state.go('root.film');
			} else {
				$state.go('root.add', {
					category
				});
			}

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

FilmCtrl.$inject = ['WordService', '$state'];

export default FilmCtrl;