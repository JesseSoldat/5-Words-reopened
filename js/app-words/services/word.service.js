let WordService = function($http, SERVER, $cookies) {

	this.getGolden = getGolden;
	this.addWords = addWords;
	this.getWords = getWords;

	function getGolden(golden) {
		let auth = $cookies.get('authToken');
		let id = $cookies.get('userId');

		return $http({
			url: SERVER.URL + 'words/user/' + golden,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function addWords(words, category) {
		// console.log(words);
		// console.log(category);
		let auth = $cookies.get('authToken');

		let request = $http({
			url: SERVER.URL + 'words/create',
			method: 'POST',
			headers: {
				access_token: auth
			},
			data: words
		});

		return {
			request: request,
			category: category
		}
	}

	function getWords(category) {
		let auth = $cookies.get('authToken');
	

		return $http({
			url: SERVER.URL + 'words/user/' + category,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}
};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;