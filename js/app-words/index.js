import angular from 'angular';
import 'angular-cookies';


import GoldenCtrl from './ctrl/golden.ctrl';
import RegisterCtrl from './ctrl/register.ctrl';
import AddCtrl from './ctrl/add.ctrl';
import MatchCtrl from './ctrl/match.ctrl';
import TravelCtrl from './ctrl/travel.ctrl';

import WordService from './services/word.service'

angular
	.module('app.words', ['ngCookies'])

	.controller('GoldenCtrl', GoldenCtrl)
	.controller('RegisterCtrl',RegisterCtrl)
	.controller('AddCtrl', AddCtrl)
	.controller('MatchCtrl', MatchCtrl)
	.controller('TravelCtrl', TravelCtrl)

	.service('WordService', WordService)
;