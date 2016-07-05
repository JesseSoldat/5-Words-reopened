let PhotosCtrl = function(ProfileService, $state, $cookies) {

	let vm = this;

	getPhotos();

	function getPhotos(){
		ProfileService.getPhotos().then( (res) => {
			vm.photos = res.data;
		});
	}
};

PhotosCtrl.$inject = ['ProfileService', '$state', '$cookies'];

export default PhotosCtrl;