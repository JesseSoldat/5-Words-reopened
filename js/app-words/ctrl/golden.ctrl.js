let GoldenCtrl = function($cookies, $state, WordService) {
	let vm = this;

	getGolden();

	function getGolden() {
		let golden = 'golden';
		WordService.getGolden(golden).then( (res) => {
			console.log(res);

			vm.words = res.data;
		})
	};

};
GoldenCtrl.$inject = ['$cookies', '$state', 'WordService'];

export default GoldenCtrl;