import angular from 'angular';
import 'angular-cookies';

import '../app-core/index';

import AddFriendCtrl from './ctrl/add.friend.ctrl';
import FriendsCtrl from './ctrl/friends.ctrl';

import ProfileService from './services/profile.service';

angular
	.module('app.profile', ['app.core','ngCookies'])

	.controller('AddFriendCtrl', AddFriendCtrl)
	.controller('FriendsCtrl', FriendsCtrl)

	.service('ProfileService', ProfileService)

;