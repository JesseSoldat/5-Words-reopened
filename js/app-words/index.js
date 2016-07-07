import angular from 'angular';
import 'angular-cookies';


import GoldenCtrl from './ctrl/golden.ctrl';
import RegisterCtrl from './ctrl/register.ctrl';
import AddCtrl from './ctrl/add.ctrl';
import EditCtrl from './ctrl/edit.ctrl';
import MatchCtrl from './ctrl/match.ctrl';
import TravelCtrl from './ctrl/travel.ctrl';
import BookCtrl from './ctrl/book.ctrl';

import WordService from './services/word.service'

angular
	.module('app.words', ['ngCookies'])

	.controller('GoldenCtrl', GoldenCtrl)
	.controller('TravelCtrl', TravelCtrl)
	.controller('BookCtrl', BookCtrl)
	.controller('RegisterCtrl',RegisterCtrl)
	.controller('AddCtrl', AddCtrl)
	.controller('EditCtrl', EditCtrl)
	.controller('MatchCtrl', MatchCtrl)

	.service('WordService', WordService)
;