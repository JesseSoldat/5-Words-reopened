let UserSingleImgCtrl = function($stateParams, $state, ProfileService){

	let vm = this;
	this.goBack = goBack;
	this.deleteImg = deleteImg;

	let id = $stateParams.id;

	getPhoto(id);

	function goBack(){
		$state.go('root.photos');
	}

	function deleteImg(){
		ProfileService.deleteImg(id).then( (res) => {
			$state.go('root.photos');
		})
	}

	function getPhoto(id){
		ProfileService.getPhoto(id).then( (res) => {
			vm.photo = res.data[0].image_url;
		});
	}
};

UserSingleImgCtrl.$inject = ['$stateParams', '$state', 'ProfileService'];

export default UserSingleImgCtrl;