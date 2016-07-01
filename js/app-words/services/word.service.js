let WordService = function($http, SERVER, $cookies) {

	this.getGolden = getGolden;

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
};

WordService.$inject = ['$http', 'SERVER', '$cookies'];

export default WordService;