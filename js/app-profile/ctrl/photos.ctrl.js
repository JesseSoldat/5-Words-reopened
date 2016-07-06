let PhotosCtrl = function(ProfileService, $state, $cookies) {

	let vm = this;

	this.goTo = goTo;


	getPhotos();

	function getPhotos(){
		ProfileService.getPhotos().then( (res) => {
			vm.photos = res.data;
		});
	}

	function goTo(path) {
		$state.go('root.' + path)
	}
};

PhotosCtrl.$inject = ['ProfileService', '$state', '$cookies'];

export default PhotosCtrl;