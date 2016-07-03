let WordService = function($http, SERVER, $cookies) {
	let auth = $cookies.get('authToken');
	let id = $cookies.get('userId');

	this.getGolden = getGolden;
	this.addWords = addWords;
	this.getWords = getWords;
	this.searchWords = searchWords;

	let tempWords;
	this.tempWords = [];

	function getGolden(golden) {
	
		return $http({
			url: SERVER.URL + 'words/user/' + golden,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function addWords(words, category) {
		
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
	
		return $http({
			url: SERVER.URL + 'words/user/' + category,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function searchWords(words, category){

		return $http({
			url: SERVER.URL + 'words/matches/' + category,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}
};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;