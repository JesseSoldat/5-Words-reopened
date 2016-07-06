let FriendsCtrl = function($state, $cookies, ProfileService){

	let vm = this;
	this.deleteFriend = deleteFriend;

	getFriends();

	function getFriends(){
		ProfileService.getFriends().then( (res) => {
			vm.friends = res.data;
			
		});
	}

	function deleteFriend(user){
		ProfileService.deleteFriend(user).then( (res) => {
			console.log('deleted');
			$state.go('root.friends');
			location.reload();
		});
	}

};
FriendsCtrl.$inject = ['$state', '$cookies', 'ProfileService'];

export default FriendsCtrl;
