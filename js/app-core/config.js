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
		.state('root.books', {
			url: '/books',
			views: {
				sidebar: {

				},
				content: {
					controller: 'BookCtrl as vm',
					templateUrl: 'templates/app-words/books.html'
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
		
		//app-profile
		// CURRENT USERS MAIN PROFILE
		.state('root.profile', {
			url: '/profile',
			views: {
				sidebar: {
					controller: 'ProfileSideCtrl as vm',
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					controller: 'ProfileCtrl as vm',
					templateUrl: 'templates/app-profile/profile.main.html'
				}
			}
		})
		.state('root.profileEdit', {
			url: '/profile/edit',
			views: {
				sidebar: {
					controller: 'ProfileSideCtrl as vm',
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					controller: 'ProfileEditCtrl as vm',
					templateUrl: 'templates/app-profile/profile.edit.html'
				}
			}
		})
		//ADD A FRIEND
		.state('root.addFriends', {
			url: '/add/friends/:name',
			views: {
				sidebar: {
					controller: 'ProfileSideCtrl as vm',
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
					controller: 'ProfileSideCtrl as vm',
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					templateUrl: 'templates/app-profile/friends.html',
					controller: 'FriendsCtrl as vm'
				}
			}
		})
		.state('root.friendsPhotos', {
			url: '/friends/pic/:username',
			views: {
				sidebar: {
					controller: 'ProfileSideCtrl as vm',
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					controller: 'FriendsPhotosCtrl as vm',
					templateUrl: 'templates/app-profile/friends.photos.html'
				}
			}
		})
		// VIEW YOUR PHOTOS
		.state('root.photos', {
			url: '/photos',
			views: {
				sidebar: {
					controller: 'ProfileSideCtrl as vm',
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					controller: 'PhotosCtrl as vm',
					templateUrl: 'templates/app-profile/photos.html'
				}
			}
			
		})
		.state('root.photosAdd', {
			url: '/photos/add',
			views: {
				sidebar: {
					controller: 'ProfileSideCtrl as vm',
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					controller: 'PhotosAddCtrl as vm',
					templateUrl: 'templates/app-profile/photos.add.html'
				}
			}
		})
		.state('root.singlePhoto', {
			url: '/photos/single/:id',
			views: {
				sidebar: {
					controller: 'ProfileSideCtrl as vm',
					templateUrl: 'templates/app-profile/profile.side.html'
				},
				content: {
					controller: 'UserSingleImgCtrl as vm',
					templateUrl: 'templates/app-profile/user.single.img.html'
				}
			}
		})



};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;