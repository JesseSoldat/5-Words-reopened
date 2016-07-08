import angular from 'angular';
import 'angular-cookies';


import GoldenCtrl from './ctrl/golden.ctrl';
import RegisterCtrl from './ctrl/register.ctrl';
import AddCtrl from './ctrl/add.ctrl';
import EditCtrl from './ctrl/edit.ctrl';
import MatchCtrl from './ctrl/match.ctrl';
import TravelCtrl from './ctrl/travel.ctrl';
import TechCtrl from './ctrl/tech.ctrl';
import CarCtrl from './ctrl/car.ctrl';
import BookCtrl from './ctrl/book.ctrl';
import FilmCtrl from './ctrl/film.ctrl';
import FoodieCtrl from './ctrl/foodie.ctrl';
import MusicCtrl from './ctrl/music.ctrl';


import WordService from './services/word.service'

angular
	.module('app.words', ['ngCookies'])

	.controller('GoldenCtrl', GoldenCtrl)
	.controller('TravelCtrl', TravelCtrl)
	.controller('TechCtrl', TechCtrl)
	.controller('BookCtrl', BookCtrl)
	.controller('CarCtrl', CarCtrl)
	.controller('FilmCtrl', FilmCtrl)
	.controller('FoodieCtrl', FoodieCtrl)
	.controller('MusicCtrl', MusicCtrl)
	
	.controller('RegisterCtrl',RegisterCtrl)
	.controller('AddCtrl', AddCtrl)
	.controller('EditCtrl', EditCtrl)
	.controller('MatchCtrl', MatchCtrl)

	.service('WordService', WordService)
;