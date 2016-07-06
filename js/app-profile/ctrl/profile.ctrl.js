let ProfileCtrl = function($state, $cookies, ProfileService){

	let vm = this;

	this.editBio = editBio;
	this.editAvatar = editAvatar;

	getBioPrivate();


	function getBioPrivate() {
		ProfileService.getBioPrivate().then( (res) => {
			vm.bio = res.data;
		});
	}

	function editBio() {
		$state.go('root.profileEdit');
	}

	function editAvatar() {
		$state.go('root.photosAdd');
	}

};
ProfileCtrl.$inject = ['$state', '$cookies', 'ProfileService'];

export default ProfileCtrl;