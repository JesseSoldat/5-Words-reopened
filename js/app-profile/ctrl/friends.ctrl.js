let FriendsCtrl = function($state, $cookies, ProfileService){

	let vm = this;

	getFriends();

	function getFriends(){
		ProfileService.getFriends().then( (res) => {
			vm.friends = res.data;
			console.log(res.data);
		});
	}

};
FriendsCtrl.$inject = ['$state', '$cookies', 'ProfileService'];

export default FriendsCtrl;
