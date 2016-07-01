import angular from 'angular';
import 'angular-cookies';


import GoldenCtrl from './ctrl/golden.ctrl';
import RegisterCtrl from './ctrl/register.ctrl'

import WordService from './services/word.service'

angular
	.module('app.words', ['ngCookies'])

	.controller('GoldenCtrl', GoldenCtrl)
	.controller('RegisterCtrl',RegisterCtrl)

	.service('WordService', WordService)
;