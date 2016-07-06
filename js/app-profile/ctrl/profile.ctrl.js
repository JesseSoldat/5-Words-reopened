let ProfileCtrl = function($state, $cookies, ProfileService){

	let vm = this;

	this.editBio = editBio;

	getBioPrivate();


	function getBioPrivate() {
		ProfileService.getBioPrivate().then( (res) => {
			vm.bio = res.data;
		});
	}

	function editBio() {
		$state.go('root.profileEdit');
	}

};
ProfileCtrl.$inject = ['$state', '$cookies', 'ProfileService'];

export default ProfileCtrl;