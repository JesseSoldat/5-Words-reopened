let avatarUpload = function(ProfileService){

	return {
		restrict: 'E',
		replace: true,
		scope: {
			file: '=image'
		},
		template: `
			<div>
				<h3>Upload Your Avatar</h3>
				<br><br><br>
				<form>
					<input type="file" name="pic" accept="image/*" ng-model="image.one" title="Choose an Avatar">
					<button id="addAvatarBtn">Submit</button>
				</form>
			</div>
		`,
		link: function(scope, element, attrs) {
			element.on('click', function(){
				let submit = angular.element(document.querySelector('#addAvatarBtn'));
			});

			element.on('submit', function(){
				let file = element.find('input')[0].files[0];
				ProfileService.sendAvatar(file);
			});

		}


	}
};

avatarUpload.$inject = ['ProfileService'];

export default avatarUpload;