let ProfileCtrl = function($state, $cookies, ProfileService){

	let vm = this;

	getBioPrivate();

	function getBioPrivate() {
		ProfileService.getBioPrivate().then( (res) => {
			vm.bio = res.data;
		});
	}

};
ProfileCtrl.$inject = ['$state', '$cookies', 'ProfileService'];

export default ProfileCtrl;