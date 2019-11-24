cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cc.fovea.cordova.purchase.InAppPurchase",
      "file": "plugins/cc.fovea.cordova.purchase/www/store-ios.js",
      "pluginId": "cc.fovea.cordova.purchase",
      "clobbers": [
        "store"
      ]
    }
  ];
  module.exports.metadata = {
    "cc.fovea.cordova.purchase": "8.1.1"
  };
});