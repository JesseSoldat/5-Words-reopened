let EditCtrl = function() {
	let vm = this;

	this.editWords = editWords;

	function getWords(){
		let category = $stateParams.category;
		WordService.getWords(category).then( (res) => {
			console.log(res);
			vm.words = res.data;
		})
	}

	function editWords(words) {
		console.log(words);
	}
};

EditCtrl.$inject = [];

export default EditCtrl;