let EditCtrl = function(WordService, $stateParams, $state) {
	let vm = this;

	this.editWords = editWords;

	getWords();

	function getWords(){
		let category = $stateParams.category;
		WordService.getWords(category).then( (res) => {
			vm.words = res.data;
		});
	}

	function editWords(words) {
		let category = words[0].category;
		
		let wordArray = [];
		let idArray = [];

		if(words.length > 0) {
			for(var i = 0; i < words.length; i++) {
				wordArray.push(words[i].word.toLowerCase());
				idArray.push(words[i].id);
			}
			// console.log(wordArray);
			// console.log(idArray);	
		}
	let wordData = [];

	for(var i = 0; i < words.length; i++) {

		wordData.push(
			{new: wordArray[i], id: idArray[i]}
			);
			
	}
	

	let data = {
		words: wordData
	};

	let response = WordService.editWords(data, category);

	response.request.then( () => {
		let promise = response.category;
		$state.go('root.' + promise);
	})

		
	}
};

EditCtrl.$inject = ['WordService', '$stateParams', '$state'];

export default EditCtrl;