import angular from 'angular';
import 'angular-cookies';

import '../app-core/index';

import AddFriendCtrl from './ctrl/add.friend.ctrl';
import FriendsCtrl from './ctrl/friends.ctrl';
import FriendsPhotosCtrl from './ctrl/friends.photos.ctrl';
import ProfileCtrl from './ctrl/profile.ctrl';
import ProfileSideCtrl from './ctrl/profile.side.ctrl';
import ProfileEditCtrl from './ctrl/profile.edit.ctrl';
import PhotosCtrl from './ctrl/photos.ctrl';
import PhotosAddCtrl from './ctrl/photos.add.ctrl';
import UserSingleImgCtrl from './ctrl/user.single.img.ctrl';

import ProfileService from './services/profile.service';

import fileUpload from './directives/file.upload.directive.js';
import avatarUpload from './directives/avatar.upload.directive.js';

angular
	.module('app.profile', ['app.core','ngCookies'])

	.controller('AddFriendCtrl', AddFriendCtrl)
	.controller('FriendsCtrl', FriendsCtrl)
	.controller('FriendsPhotosCtrl', FriendsPhotosCtrl)
	.controller('ProfileCtrl', ProfileCtrl)
	.controller('ProfileEditCtrl', ProfileEditCtrl)
	.controller('ProfileSideCtrl', ProfileSideCtrl)
	.controller('PhotosCtrl', PhotosCtrl)
	.controller('PhotosAddCtrl', PhotosAddCtrl)
	.controller('UserSingleImgCtrl', UserSingleImgCtrl)

	.service('ProfileService', ProfileService)

	.directive('fileUpload', fileUpload)
	.directive('avatarUpload', avatarUpload)
;