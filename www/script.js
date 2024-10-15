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
  else if (intent_string.endsWith(`"data":"openapp://pxpay.plus"}`)) {
      return openPXPAYPlus()
  }
  else if (intent_string.endsWith(`"data":"openapp://cpcpay"}`)) {
      return openCPCPay()
  }
  else if (intent_string.endsWith(`"data":"openapp://scan"}`)) {
      return openScanner()
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
  var config = {
      action: "com.google.zxing.client.android.SCAN",
      category: "android.intent.category.DEFAULT",
  };
  openWebIntent(config)
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
