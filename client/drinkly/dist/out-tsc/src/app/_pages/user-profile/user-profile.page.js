import * as tslib_1 from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { ToastController, ActionSheetController, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { PictureSourceType } from '@ionic-native/Camera/ngx';
import { Location } from '@angular/common';
import { ImageModalComponent } from '../../_components/image-modal/image-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../_services/auth.service';
import { ChatMapper } from 'src/app/_models/chat';
import { ChatService } from 'src/app/_services/chat.service';
var COLUMN_COUNT = 4;
var UserProfilePage = /** @class */ (function () {
    function UserProfilePage(location, actionSheetController, toastController, modalController, translateService, loadingController, ref, chatService, popoverController, userService, authService) {
        this.location = location;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.modalController = modalController;
        this.translateService = translateService;
        this.loadingController = loadingController;
        this.ref = ref;
        this.chatService = chatService;
        this.popoverController = popoverController;
        this.userService = userService;
        this.authService = authService;
        this.section = 'gallery';
        this.images = [];
    }
    UserProfilePage.prototype.ngOnInit = function () {
        var _this = this;
        this.userInfo = this.authService.currentUserValue;
        console.log(this.userInfo);
        this.chatService.getChats().subscribe(function (response) {
            _this.chats = ChatMapper.fromJsonArray(response['chats']);
        });
    };
    UserProfilePage.prototype.editProfileImg = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.uploadImage(function () {
                    _this.userService.udateProfileImg(PictureSourceType.CAMERA);
                }, function () {
                    _this.userService.udateProfileImg(PictureSourceType.PHOTOLIBRARY);
                });
                return [2 /*return*/];
            });
        });
    };
    UserProfilePage.prototype.presentToast = function (text) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async userPopover(event){
    //   const popover = await this.popoverController.create({
    //     component: UserProfilePopoverComponent,
    //     event: event,
    //     translucent: true,
    //     // componentProps:{
    //     //   userId : proposal.createdBy
    //     // }
    //   });
    //   // popover.onDidDismiss().then((hasDoneSomethingOverlay:OverlayEventDetail)=>{
    //   //   if(hasDoneSomethingOverlay.data){
    //   //     this.getGeolocation()
    //   //   }
    //   // })
    //   return await popover.present();
    // }
    //   modal.onDidDismiss().then((proposal: OverlayEventDetail<Proposal>) => {
    //     if (proposal.data != null) {
    //       console.log('The result:', proposal.data.id);
    //     }
    //   });
    //   await modal.present();
    // }
    UserProfilePage.prototype.uploadImage = function (cameraHandler, libraryHandler) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var selectImageSourceString, loadFromLibrariString, useCameraString, cancelString, actionSheet;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.translateService.get('select_image_source').toPromise()];
                    case 1:
                        selectImageSourceString = _a.sent();
                        return [4 /*yield*/, this.translateService.get('load_from_library').toPromise()];
                    case 2:
                        loadFromLibrariString = _a.sent();
                        return [4 /*yield*/, this.translateService.get('use_camera').toPromise()];
                    case 3:
                        useCameraString = _a.sent();
                        return [4 /*yield*/, this.translateService.get('cancel').toPromise()];
                    case 4:
                        cancelString = _a.sent();
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: selectImageSourceString,
                                buttons: [{
                                        text: loadFromLibrariString,
                                        handler: libraryHandler
                                    },
                                    {
                                        text: useCameraString,
                                        handler: cameraHandler
                                    },
                                    {
                                        text: cancelString,
                                        role: 'cancel'
                                    }
                                ]
                            })];
                    case 5:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProfilePage.prototype.editImage = function (index) {
        var _this = this;
        this.uploadImage(function () {
            _this.userService.uploadImage(index, PictureSourceType.CAMERA, function (uri) { return _this.images.push(uri); });
        }, function () {
            _this.userService.uploadImage(index, PictureSourceType.PHOTOLIBRARY, function (uri) { return _this.images.push(uri); });
        });
    };
    UserProfilePage.prototype.openPreview = function (img) {
        this.modalController.create({
            component: ImageModalComponent,
            componentProps: {
                img: img
            }
        }).then(function (modal) {
            modal.present();
        });
    };
    UserProfilePage = tslib_1.__decorate([
        Component({
            selector: 'app-user-profile',
            templateUrl: './user-profile.page.html',
            styleUrls: ['./user-profile.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Location,
            ActionSheetController,
            ToastController,
            ModalController,
            TranslateService,
            LoadingController,
            ChangeDetectorRef,
            ChatService,
            PopoverController,
            UserService,
            AuthService])
    ], UserProfilePage);
    return UserProfilePage;
}());
export { UserProfilePage };
//# sourceMappingURL=user-profile.page.js.map