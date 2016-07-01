let RegisterCtrl = function($state, HomeService, WordService){

	let vm = this;

	this.addWords = addWords;

	function addWords(words) {
		let golden = 'golden';
		HomeService.addWords(words, golden).then( (res) => {
			console.log(res);
			$state.go('root.golden');
		});
	}
};
RegisterCtrl.$inject = ['$state', 'HomeService', 'WordService'];

export default RegisterCtrl;