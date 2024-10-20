function ready() {
  window.plugins.intent.getCordovaIntent(function (intent) {
      try {
          handle_intent(intent);
      } catch (e) {
          alert(JSON.stringify(e));
          navigator.app.exitApp();
      }
  });
}

function callbackExitApp(e) {
//     alert('OK:' + JSON.stringify(e, null, 2));
  navigator.app.exitApp();
}
function callbackExitAppWithFail(e) {
  alert('Failed:' + JSON.stringify(e, null, 2));
  navigator.app.exitApp();
}

function handle_intent(intent) {
  let intent_string = JSON.stringify(intent)
  if (intent_string.endsWith(`"data":"openapp://linepay/show"}`)) {
      return openLinepayShow()
  }
  else if (intent_string.endsWith(`"data":"openapp://linepay/scan"}`)) {
      return openLinepayScan()
  }
  else if (intent_string.endsWith(`"data":"openapp://jkos"}`)) {
      return openJKOS()
  }
  else if (intent_string.endsWith(`"data":"openapp://jkos/show"}`)) {
      return openJKOSShow()
  }
  else if (intent_string.endsWith(`"data":"openapp://jkos/scan"}`)) {
      return openJKOSScan()
  }
  else if (intent_string.endsWith(`"data":"openapp://pxpay.plus"}`)) {
      return openPXPAYPlus()
  }
  else if (intent_string.endsWith(`"data":"openapp://cpcpay"}`)) {
      return openCPCPay()
  }
  else if (intent_string.endsWith(`"data":"openapp://scan"}`)) {
      return openScanner()
  }
  else if (intent_string.endsWith(`"data":"openapp://twmp"}`)) {
      return openTWMP()
  }
  else if (intent_string.endsWith(`"data":"openapp://twmp/nfc"}`)) {
      return openTWMPNFC()
  }
  return openScanner()

//     navigator.app.exitApp();
//     return

//     _calendar_extras = {
// //         title: "TITLE",
// //         description: "DESCRIPTION",
//         uri: "https://web-tw-pay.line.me/R/"
//     }


}

function openWebIntent(config) {
  window.plugins.webintent.startActivity(config,
      callbackExitApp,
      callbackExitAppWithFail
  );
}

function openLinepayShow() {
//     var config = {
//         action: "android.intent.action.VIEW",
//         category: "android.intent.category.DEFAULT",
// //         activity: "tw.com.twmp.twhcewallet.screen.SplashActivity_",
//         packageName: "tw.com.twmp.twhcewallet",
//         package: "tw.com.twmp.twhcewallet",
// //         url: "https://web-tw-pay.line.me/R/"
// //         url: "intent://package=tw.com.twmp.twhcewallet;end"
//         url: "marketing://"
//     };
  var config = {
      action: window.plugins.webintent.ACTION_VIEW,
   url: "https://web-tw-pay.line.me/R/"
  };

  openWebIntent(config)
//   try {
// //       alert('ok' + typeof(startApp) + typeof(startApp.set))
// //     var sApp = startApp.set({
// // //         "application":"com.jkos.app"
// //         "action": "ACTION_MAIN",
// // //         "uri": "fb://facewebmodal/f?href=https://www.facebook.com/GitHub"
// //         "package": "tw.com.twmp.twhcewallet",
// //         "intentstart":"startActivity",
// //     }).start();
//
// //     var sApp = startApp.set({
// // //         "component": ["tw.com.twmp.twhcewallet.","tw.com.twmp.twhcewallet.screen.SplashActivity_"],
// //         "action": "ACTION_MAIN",
// //         "category":"LAUNCHER",
// //         "package": "tw.com.twmp.twhcewallet",
// //         "intentstart":"startActivity",
// //     }).start();
//
//
//     // 臺灣支付，可用
// //     var sApp = startApp.set({
// //     "component": ["tw.com.twmp.twhcewallet","tw.com.twmp.twhcewallet.screen.SplashActivity_"],
// //     }).start(callbackExitApp, callbackExitAppWithFail);
//
//     // 成功啟動特定Widget
// //     var sApp = startApp.set({
// //         "component": ["com.ss.popupWidget","com.ss.popupWidget.PopupWidgetActivity"],
// //         "uri":"popupWidget://pid/1714868377626"
// //     }).start(callbackExitApp, callbackExitAppWithFail);
//
// //           var sApp = startApp.set({
// //         "component": ["com.ss.popupWidget","com.ss.popupWidget.PopupWidgetActivity"],
// //         "uri":"popupWidget://pid/1728969164894"
// //     }).start(callbackExitApp, callbackExitAppWithFail);
//
//
//     // #Intent;action=android.intent.action.MAIN;category=com.android.launcher3.DEEP_SHORTCUT;launchFlags=0x10200000;package=com.jkos.app;component=com.jkos.app/.LoadActivity;S.shortcut_id=jkos_shortcut_show_qr_code;end
// //     var sApp = startApp.set({
// //         "action": "android.intent.action.MAIN",
// //         "category": "com.android.launcher3.DEEP_SHORTCUT",
// //         "flags":["FLAG_ACTIVITY_NEW_TASK"],
// //         "package": "com.jkos.app",
// //         "component": 'com.jkos.app/.LoadActivity',
// //         "noParse": true
// // //         "uri": "jkos://show_qr_code"
// //     }, {
// //         "shortcut_id": "jkos_shortcut_show_qr_code"
// //     }).start(callbackExitApp, callbackExitAppWithFail);
//
// //     #Intent;action=android.intent.action.MAIN;category=com.android.launcher3.DEEP_SHORTCUT;launchFlags=0x10200000;package=tw.com.twmp.twhcewallet;component=tw.com.twmp.twhcewallet/.screen.SplashActivity_;S.shortcut_id=%E6%8E%83%E7%A2%BC%E6%94%B6%E4%BB%98;end
// //     var sApp = startApp.set({
// // //         "action": "android.intent.action.MAIN",
// //         "category": "com.android.launcher3.DEEP_SHORTCUT",
// //         "flags":["FLAG_ACTIVITY_NEW_TASK"],
// //         "package": "tw.com.twmp.twhcewallet",
// //         "component": ["tw.com.twmp.twhcewallet", "tw.com.twmp.twhcewallet.screen.SplashActivity_"],
// //         "noParse": true
// // //         "uri": "jkos://show_qr_code"
// //     }, {
// //         "shortcut_id": "%E6%8E%83%E7%A2%BC%E6%94%B6%E4%BB%98"
// //     }).start(callbackExitApp, callbackExitAppWithFail);
//
// //     var intentExtras = {
// //         "shortcut_id": "jkos_shortcut_show_qr_code"
// //     };
// //
// //     window.plugins.intentShim.startActivity({
// //         action: "android.intent.action.MAIN",
// //         package: 'com.jkos.app',
// //         component: 'com.jkos.app/.LoadActivity',
// //         categories: ['com.android.launcher3.DEEP_SHORTCUT'],
// //         flags: ["FLAG_ACTIVITY_NEW_TASK"],  // Equivalent to FLAG_ACTIVITY_NEW_TASK | FLAG_ACTIVITY_RESET_TASK_IF_NEEDED
// //         extras: intentExtras
// //     },
// //     callbackExitApp, callbackExitAppWithFail);
//
// //      var sApp = startApp.set({
// // //         "component": ["com.jkos.app","com.jkos.app.LoadActivity"],
// // //          "action": "android.intent.action.MAIN",
// //          "action": "ACTION_MAIN",
// //          "component": ["com.jkos.app","com.jkos.app.LoadActivity"],
// //         "uri":"intent://LoadActivity#Intent;action=android.intent.action.MAIN;category=com.android.launcher3.DEEP_SHORTCUT;launchFlags=0x10200000;package=com.jkos.app;S.shortcut_id=jkos_shortcut_show_qr_code;end
// // "
// //     }).start(callbackExitApp, callbackExitAppWithFail);

//   } catch (e) {
//       alert('Failed:' + JSON.stringify(e, null, 2));
//     navigator.app.exitApp();
//   }
}

function openLinepayScan() {
  var config = {
      action: window.plugins.webintent.ACTION_VIEW,
//         url: "https://web-tw-pay.line.me/R/"
//         url: "twmpshortcut://?type=scan"
      url: "line://pay/scanQR"
  };

  openWebIntent(config)
}

function openJKOS() {
  var config = {
      action: window.plugins.webintent.ACTION_VIEW,
      url: "jkos://"
  };

  openWebIntent(config)
}

function openJKOSShow() {
  startApp.set({
    "component": ["com.ss.popupWidget","com.ss.popupWidget.PopupWidgetActivity"],
    "uri":"popupWidget://pid/1728969164894"
  }).start(callbackExitApp, callbackExitAppWithFail);
}

function openJKOSScan() {
  startApp.set({
    "component": ["com.ss.popupWidget","com.ss.popupWidget.PopupWidgetActivity"],
    "uri":"popupWidget://pid/1728969164895"
  }).start(callbackExitApp, callbackExitAppWithFail);
}

function openPXPAYPlus() {
  var config = {
      action: window.plugins.webintent.ACTION_VIEW,
      url: "com.pxpay.plus://zjdja"
  };

  openWebIntent(config)
}

function openCPCPay() {
  var config = {
      action: window.plugins.webintent.ACTION_VIEW,
      url: "cpcpay://"
  };

  openWebIntent(config)
}


function openTWMP() {
  startApp.set({
    "component": ["tw.com.twmp.twhcewallet","tw.com.twmp.twhcewallet.screen.SplashActivity_"],
  }).start(callbackExitApp, callbackExitAppWithFail);
}

function openTWMPNFC() {
  startApp.set({
    "component": ["com.ss.popupWidget","com.ss.popupWidget.PopupWidgetActivity"],
    "uri":"popupWidget://pid/1729447579951"
  }).start(callbackExitApp, callbackExitAppWithFail);
}

function openScanner() {
   // Default handlers
//     var successCallback = function(data) {
//         alert("Success!");
//         // if calling canLaunch() with getAppList:true, data will contain an array named "appList" with the package names of applications that can handle the uri specified.
//     };
//     var errorCallback = function(errMsg) {
//         alert("Error! " + errMsg);
//     }
//
//     window.plugins.launcher.launch({uri:'fb://profile'}, successCallback, errorCallback);

//     packageName
//     var _config = {
//         action: "android.intent.action.MAIN",
//         category: "android.app.category.LAUNCHER",
//         pacakgeName: "com.linepaytw.upay"
//
//     };
//
//     window.plugins.webintent.startActivity(_config,
//         callbackExitApp,
//         callbackExitAppWithFail
//     );

//     var _config = {
//         action: window.plugins.webintent.ACTION_VIEW,
//         url: "com.pxpay.plus://zjdja"
//     };

//     var _config = {
//         action: window.plugins.webintent.ACTION_VIEW,
//         url: "jkos://"
//     };

//     var _config = {
//         action: window.plugins.webintent.ACTION_VIEW,
//         url: "cpcpay://",
// //         url: "jkos://"
//     };

  // 掃描
  var config = {
      action: "com.google.zxing.client.android.SCAN",
      category: "android.intent.category.DEFAULT",
//         url: "jkos://"
  };

//     var _config = {
//         action: window.plugins.webintent.ACTION_VIEW,
//         url: "https://@id/0x7F1200B7/web/paymentUrl",
// //         url: "jkos://"
//     };
  openWebIntent(config)
}

// https://vercel-tunnel-holder-hjbq6nk9c-pulipulichens-projects.vercel.app/api/tunnel-holder/app-redirect?u=openapp://scan
