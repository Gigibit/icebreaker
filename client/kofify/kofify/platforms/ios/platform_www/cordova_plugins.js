cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-inapppurchase.PaymentsPlugin",
      "file": "plugins/cordova-plugin-inapppurchase/www/index-ios.js",
      "pluginId": "cordova-plugin-inapppurchase",
      "clobbers": [
        "inAppPurchase"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-inapppurchase": "1.1.0"
  };
});