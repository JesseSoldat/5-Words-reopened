let AddFriendCtrl = function($state, $stateParams, $cookies, ProfileService) {

	let vm = this;
	this.addFriend = addFriend;

	let user = $stateParams.name;
	console.log(user);

	getBioPublic(user);

	function getBioPublic(user) {
		ProfileService.getBioPublic(user).then( (res) => {
			console.log(res.data);
			vm.bio = res.data;
		});
	}

	function addFriend(user) {
		ProfileService.addFriend(user).then( (res) => {
			console.log(res);
			$state.go('root.friends');
		});
	}
};

AddFriendCtrl.$inject = ['$state', '$stateParams', '$cookies', 'ProfileService'];

export default AddFriendCtrl;