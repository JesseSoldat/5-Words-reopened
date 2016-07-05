import angular from 'angular';
import 'angular-cookies';

import '../app-core/index';
import AddFriendCtrl from './ctrl/add.friend.ctrl';

angular
	.module('app.profile', ['app.core','ngCookies'])

	.controller('AddFriendCtrl', AddFriendCtrl)

;