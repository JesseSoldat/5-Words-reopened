import angular from 'angular';



import HomeCtrl from './ctrl/home.ctrl';


angular
	.module('app.layout', [])

	.controller('HomeCtrl', HomeCtrl)

;