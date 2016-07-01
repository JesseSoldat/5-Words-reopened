let HomeService = function($http, SERVER, $cookies){

	this.login = login;
	this.register = register;
	this.addWords = addWords;

	//LOGIN
	function login(user) {
		return $http.post(SERVER.URL + 'login', user);
	}
	//REGISTER
	function register(user){
		return $http.post(SERVER.URL + 'signup', user);
	}
	//ADD WORDS
	function addWords(words) {
		let auth = $cookies.get('authToken');
    	let username = $cookies.get('username');
		let category = 'golden';

		//Change all the words to lowercase 
	    let one = words.one.toLowerCase();
	    let two = words.two.toLowerCase();
	    let three = words.three.toLowerCase();
	    let four = words.four.toLowerCase();
	    let five = words.five.toLowerCase();

	    let wordsArray = [one,two,three,four,five];

	    let lower = {
	    	words: wordsArray,
	    	category: category,
	    	username: username
	    };

	    return $http({
	    	url: SERVER.URL + 'words/create',
	    	method: 'POST',
	    	headers:{
        		access_token: auth
      		}, 
      		data: lower

	    });

	}

};
HomeService.$inject = ['$http', 'SERVER', '$cookies'];

export default HomeService;