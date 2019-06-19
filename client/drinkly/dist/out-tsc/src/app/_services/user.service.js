import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Camera } from '@ionic-native/Camera/ngx';
import { AUTH_SERVER, SERVICE_SERVER } from '../config';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Platform } from '@ionic/angular';
var CONTEXT = AUTH_SERVER + '/api/get-context';
var UPLOAD_URL = SERVICE_SERVER + "/users/me/images";
var UPDATE_PROFILE_IMG_URL = SERVICE_SERVER + "/users/me/image";
var USER_INFO = SERVICE_SERVER + "/api/get-user-info/";
var PROPS_HIM = SERVICE_SERVER + "/api/props/";
var UNPROPS_HIM = SERVICE_SERVER + "/api/unprops/";
var UPDATE_USER_ADDRESS = SERVICE_SERVER + "/users/position";
var STORAGE_KEY = 'experience_key_img';
var UserService = /** @class */ (function () {
    function UserService(http, transfer, platform, camera, auth) {
        this.http = http;
        this.transfer = transfer;
        this.platform = platform;
        this.camera = camera;
        this.auth = auth;
        this.contentType = 'image/png';
        this.fileTransfer = this.transfer.create();
    }
    UserService.prototype.getContext = function () {
        return this.http.get(CONTEXT);
    };
    UserService.prototype.uploadImage = function (index, sourceType, onUri, onError) {
        var _this = this;
        if (onUri === void 0) { onUri = null; }
        if (onError === void 0) { onError = null; }
        if (index > 3)
            return;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 400,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('mobileweb') || _this.platform.is('desktop')) {
                imageData = "data:image/jpeg;base64," + imageData;
                var formData = new FormData();
                var imgBlob = _this.dataURItoBlob(imageData);
                formData.append('image', imgBlob, _this.createFileName());
                _this.uploadImageData(UPLOAD_URL + ("/" + index), formData, function (user, response) {
                    if (!user.images) {
                        user.images = new Array(3);
                    }
                    user.images[index - 1] = response['url'];
                    return user;
                });
            }
            else {
                _this.uploadUri(UPLOAD_URL + ("/" + index), imageData);
            }
            if (onUri) {
                // onUri(imageData)
            }
        }, function (err) {
            console.log(err);
        });
    };
    UserService.prototype.udateProfileImg = function (sourceType, onUri, onError) {
        var _this = this;
        if (onUri === void 0) { onUri = null; }
        if (onError === void 0) { onError = null; }
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 400,
            targetHeight: 400,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            if (_this.platform.is('mobileweb') || _this.platform.is('desktop')) {
                imageData = "data:image/jpeg;base64," + imageData;
                var formData = new FormData();
                var imgBlob = _this.dataURItoBlob(imageData);
                formData.append('image', imgBlob, _this.createFileName());
                _this.uploadImageData(UPDATE_PROFILE_IMG_URL, formData, function (user, response) {
                    user.profileImg = response['url'];
                    return user;
                });
            }
            else {
                _this.uploadUri(UPDATE_PROFILE_IMG_URL, imageData);
            }
            if (onUri) {
                // onUri(imageData)
            }
        }, function (err) {
            console.log(err);
        });
    };
    //todo: check request whether is an profile or  generic image
    UserService.prototype.uploadUri = function (upload_url, uri, onSuccess) {
        var _this = this;
        if (onSuccess === void 0) { onSuccess = function (data) { console.log(data); }; }
        var options = {
            fileKey: 'file',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {
                'auth-token': this.auth.authToken
            },
            fileName: this.createFileName()
        };
        this.fileTransfer.upload(encodeURI(uri), upload_url, options)
            .then(function (response) {
            var user = _this.auth.currentUserValue;
            user.profileImg = response['url'];
            _this.auth.contextRefresh(user);
        })
            .catch(function (err) { return console.log(err); });
    };
    UserService.prototype.uploadImageData = function (upload_url, formData, getUpdatedUser) {
        var _this = this;
        return this.http.post(upload_url, formData).subscribe(function (response) {
            var user = getUpdatedUser(_this.auth.currentUserValue, response);
            console.log(user);
            _this.auth.contextRefresh(user);
        });
    };
    UserService.prototype.dataURItoBlob = function (dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
    };
    UserService.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    UserService.prototype.getUserInfo = function (userId) {
        return this.http.get(USER_INFO + userId);
    };
    UserService.prototype.propsHim = function (userInfo) {
        console.log(userInfo);
        return this.http.post(PROPS_HIM + userInfo.id, {});
    };
    UserService.prototype.unpropsHim = function (userInfo) {
        return this.http.post(UNPROPS_HIM + userInfo.id, {});
    };
    UserService.prototype.updateAddress = function (address, latitude, longitude) {
        return this.http.post(UPDATE_USER_ADDRESS, { address: address, latitude: latitude, longitude: longitude });
    };
    UserService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            FileTransfer,
            Platform,
            Camera,
            AuthService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map