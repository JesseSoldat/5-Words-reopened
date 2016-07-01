let HomeCtrl = function(HomeService, $cookies, $state) {

	let vm = this;

	vm.title = 'Five Words';
	vm.login = login;
	vm.register = register;


	function login(user) {
		HomeService.login(user).then( (res) => {
			console.log(res);
			let auth = $cookies.put('authToken', res.data.access_token);
			let userId = $cookies.put('userId', res.data.id);

			$cookies.put('username', res.data.username);
			
			$state.go('root.golden');
		});
	}

	function register(user) {
		HomeService.register(user).then( (res) => {
			$cookies.put('authToken', res.data.access_token);
			$cookies.put('username', res.data.username);
			console.log(res);
			$state.go('register');
		});
	}
};

HomeCtrl.$inject = ['HomeService', '$cookies', '$state'];

export default HomeCtrl;