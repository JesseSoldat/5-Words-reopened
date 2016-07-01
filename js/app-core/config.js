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
		.state('root.golden', {
			url: '/golden',
			views: {
				sidebar: {
					templateUrl: 'templates/app-words/dash.side.html'

				},
				content: {
					controller: 'GoldenCtrl as vm',
					templateUrl: 'templates/app-words/golden.html'
				}
			}
		})



};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;