let FriendsPhotosCtrl = function(ProfileService, $stateParams){

	let vm = this;
	let user = $stateParams.username;

	getFriendsPic(user);

	function getFriendsPic(user){
		ProfileService.getFriendsPic(user).then( (res) => {
			vm.images = res.data;
		})
	}
};

FriendsPhotosCtrl.$inject = ['ProfileService', '$stateParams'];

export default FriendsPhotosCtrl;