import angular from 'angular';
import 'angular-cookies';


import HomeCtrl from './ctrl/home.ctrl';

import HomeService from './services/home.service';

angular
	.module('app.layout', ['ngCookies'])

	.controller('HomeCtrl', HomeCtrl)

	.service('HomeService', HomeService)

;