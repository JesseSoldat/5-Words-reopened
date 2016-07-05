let config = function($urlRouterProvider, $stateProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			controller: 'HomeCtrl as vm',
			templateUrl: 'templates/app-layout/layout.html'
		})
		.state('home', {
			url: '/',
			controller: 'HomeCtrl as vm', 
			templateUrl: 'templates/app-layout/home.html'
		})
		.state('register', {
			url: '/register',
			controller: 'RegisterCtrl as vm',
			templateUrl: 'templates/app-words/register.html'
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
		.state('root.add', {
			url: '/add/:category',
			controller: 'AddCtrl as vm',
			templateUrl: 'templates/app-words/add.html'
		})
		.state('root.edit', {
			url: '/edit/:category',
			controller: 'EditCtrl as vm',
			templateUrl: 'templates/app-words/edit.html'
		})
		.state('root.match', {
			url: '/match/:category',
			controller: 'MatchCtrl as vm',
			templateUrl: 'templates/app-words/match.html'
		})
		.state('root.travel', {
			url: '/travel',
			views: {
				sidebar: {
					templateUrl: 'templates/app-words/dash.side.html'
				},
				content: {
					controller: 'TravelCtrl as vm',
					templateUrl: 'templates/app-words/travel.html'
				}
			}
			
		})
		//app-profile
		//ADD A FRIEND
		.state('root.addFriends', {
			url: '/add/friends/:name',
			views: {
				sidebar: {
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					controller: 'AddFriendCtrl as vm',
					templateUrl: 'templates/app-profile/add.friend.html'
				}	
			}
			
		})
		//VIEW YOUR FRIENDS
		.state('root.friends', {
			url: '/friends',
			views: {
				sidebar: {
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					templateUrl: 'templates/app-profile/friends.html',
					controller: 'FriendsCtrl as vm'
				}
			}
		})



};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;