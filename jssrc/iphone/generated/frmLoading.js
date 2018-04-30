function addWidgetsfrmLoading() {
    frmLoading.setDefaultUnit(kony.flex.DP);
    var Image0e923426a891b49 = new kony.ui.Image2({
        "height": "203dp",
        "id": "Image0e923426a891b49",
        "isVisible": true,
        "left": "17dp",
        "skin": "slImage",
        "src": "konylogo.png",
        "top": "23dp",
        "width": "340dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Button0b52275a59e744b = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0b52275a59e744b",
        "isVisible": true,
        "left": "68dp",
        "onClick": AS_Button_h4bd97a4ebcf455a915eb79079e30f0c,
        "skin": "slButtonGlossBlue",
        "text": "Offline Object Demo",
        "top": "476dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Image0ec984e1a98f04e = new kony.ui.Image2({
        "centerX": "50%",
        "height": "53dp",
        "id": "Image0ec984e1a98f04e",
        "isVisible": true,
        "left": "169dp",
        "onTouchStart": AS_Image_ef5a7b368cf145dd937ab34cfb74bba8,
        "skin": "slImage",
        "src": "exitapp.png",
        "top": "560dp",
        "width": "85dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmLoading.add(Image0e923426a891b49, Button0b52275a59e744b, Image0ec984e1a98f04e);
};

function frmLoadingGlobals() {
    frmLoading = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLoading,
        "enabledForIdleTimeout": false,
        "id": "frmLoading",
        "init": AS_Form_b9f67c89375945e6a97889b464d272e6,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_je7ae5733dd84e3fa08a8271d089de49,
        "preShow": AS_Form_bf25a576b8ec41b3b5b14bd628fe57d7,
        "skin": "CopyslForm0a8cb3496a6a747"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
};