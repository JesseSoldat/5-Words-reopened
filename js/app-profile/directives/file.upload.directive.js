let fileUpload = function(ProfileService){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			file: '=image'
		},
		template: `
		<div>
			<h3>Upload Images</h3>
			<br><br><br>
			<form>
				<input type="file" name="pic" accept="image/*" ng-model="image.one" title="Choose an image please">
				<button id="addPhotosBtn">Submit</button>
			</form>
			<hr>
		</div>
		`,
		link: function(scope, element, attrs){
			element.on('click', function(){
				
				let submit = angular.element(document.querySelector('#addPhotosBtn'));
			});
			element.on('submit', function(){
				let file = element.find('input')[0].files[0];
				console.log(file);
				ProfileService.sendPhoto(file);
			})
		}
	}
};

fileUpload.$inject = ['ProfileService'];

export default fileUpload;