let HomeService = function($http, SERVER){

	this.login = login;

	function login (user) {
		return $http.post(SERVER.URL + 'login', user);
	}

};
HomeService.$inject = ['$http', 'SERVER'];

export default HomeService;