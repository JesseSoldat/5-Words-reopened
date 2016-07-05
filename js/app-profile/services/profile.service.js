let ProfileService = function($http, SERVER, $cookies, $state){

	let auth = $cookies.get('authToken');

	this.getBioPublic = getBioPublic;
	this.getFriends = getFriends;
	this.addFriend = addFriend;


	function getBioPublic(user) {
		return $http({
			url: SERVER.URL + 'user/profile/public/' + user,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function getFriends() {
		return $http({
			url: SERVER.URL + 'user/friends',
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function addFriend(user){
		return $http({
			url: SERVER.URL + 'user/add_friend/' + user,
			method: 'POST',
			headers: {
				access_token: auth
			}
		});
	}

};
ProfileService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default ProfileService;