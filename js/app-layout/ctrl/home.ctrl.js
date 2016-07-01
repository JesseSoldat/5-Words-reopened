let HomeCtrl = function(HomeService, $cookies, $state) {

	let vm = this;

	vm.title = 'Five Words';
	vm.login = login;


	function login(user) {
		HomeService.login(user).then( (res) => {
			console.log(res);
			let auth = $cookies.put('authToken', res.data.access_token);
			let userId = $cookies.put('userId', res.data.id);

			$cookies.put('username', res.data.username);
			
			$state.go('root.golden');
		})
	}
};

HomeCtrl.$inject = ['HomeService', '$cookies', '$state'];

export default HomeCtrl;