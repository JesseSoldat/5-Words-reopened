import angular from 'angular';
import 'angular-cookies';


import GoldenCtrl from './ctrl/golden.ctrl';

angular
	.module('app.words', ['ngCookies'])

	.controller('GoldenCtrl', GoldenCtrl)
;