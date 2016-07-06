let ProfileService = function($http, SERVER, $cookies, $state){

	let auth = $cookies.get('authToken');

	let tempBio;
	this.tempBio = [];

	this.getBioPublic = getBioPublic;
	this.getBioPrivate = getBioPrivate;
	this.editBio = editBio;
	this.getFriends = getFriends;
	this.addFriend = addFriend;
	this.getPhotos = getPhotos;
	this.getPhoto = getPhoto;
	this.deleteImg =deleteImg;


	function getBioPublic(user) {
		return $http({
			url: SERVER.URL + 'user/profile/public/' + user,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function getBioPrivate(user) {
		return $http({
			url: SERVER.URL + 'user/profile/private',
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function editBio(bio){
		return $http({
			url: SERVER.URL + 'user/edit',
			method: 'PUT',
			headers: {
				access_token: auth
			},
			data: bio
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

	function getPhotos(){
		return $http({
			url: SERVER.URL + 'user/gallery',
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function getPhoto(id){
		return $http({
			url: SERVER.URL + 'user/image/' + id,
			method: 'GET',
			headers: {
				access_token: auth
			}
		});
	}

	function deleteImg(id){
		return $http({
			url: SERVER.URL + 'image/destroy/' + id,
			method: 'DELETE',
			headers: {
				access_token: auth
			}
		});
	}

};
ProfileService.$inject = ['$http', 'SERVER', '$cookies', '$state'];

export default ProfileService;