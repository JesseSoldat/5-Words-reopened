let ProfileEditCtrl = function(ProfileService, $state){
	let vm = this;

	this.editBio = editBio;

	getBio();

	function getBio(){
		let bio = ProfileService.tempBio;

		if(bio.length === 0) {
			console.log('No Bio');
			ProfileService.getBioPrivate().then( (res) => {
				vm.bio = res.data;
			})
		} else {
			console.log('Bio');
			vm.bio = ProfileService.tempBio;
		}

	}

	function editBio(bio){
		console.log(bio);
		ProfileService.editBio(bio).then( (res) => {
			$state.go('root.profile');

		});
	}



};

ProfileEditCtrl.$inject = ['ProfileService', '$state'];

export default ProfileEditCtrl;
