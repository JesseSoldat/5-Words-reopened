let config = function($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/app-layout/layout.html'
		})
		.state('home', {
			url: '/',
			controller: 'HomeCtrl as vm', 
			templateUrl: 'templates/app-layout/home.html'
		})



};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;