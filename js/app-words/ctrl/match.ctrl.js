import _ from 'underscore';

let MatchCtrl = function(WordService, $state, $stateParams, $cookies){

	let vm = this;
	this.goBack = goBack;

	let category = $stateParams.category;

	getWords();

	function goBack() {
		$state.go('root.' + category);
	}

	function getWords() {
		let words = WordService.tempWords;

		if(words.length === 0) {
			WordService.getWords(category).then( (res) => {
				let data = res.data;
				matchWords(data);

				function matchWords(data) {
					
					let array = [];
					
					for(let i = 0; i < data.length; i++) {
						array.push(data[i].word);
					}
					
					let category = res.data[0].category;

					WordService.searchWords(array, category).then( (res) => {

						let array = res.data;
						// console.log(res.data);
						let users = _.union(_.pluck(array, 'username'));
						
						let byUser = [];
						_.each(users, function(user) {
							let obj = {};
							obj.user = user;
							obj.words = _.where(array, {username: user});
							byUser.push(obj);

							vm.matches = byUser;


						});
					})

				}
			})
		}
	}

};
MatchCtrl.$inject = ['WordService', '$state', '$stateParams', '$cookies'];

export default MatchCtrl;