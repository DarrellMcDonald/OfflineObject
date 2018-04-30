function addWidgetsfrmCreateCategory() {
    frmCreateCategory.setDefaultUnit(kony.flex.DP);
    var lblCategoryPin = new kony.ui.Label({
        "id": "lblCategoryPin",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0cd3b108ffa2746",
        "text": "Category Pin Number",
        "textStyle": {},
        "top": "5%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var lblCategoryDesc = new kony.ui.Label({
        "id": "lblCategoryDesc",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0h2a626a5ec2d44",
        "text": "Category Description",
        "textStyle": {},
        "top": "20%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var txtCategoryPN = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtCategoryPN",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "8%",
        "placeholder": "Category Pin Number",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0f085b38b568645",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "9%",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "CopyslTextBox0i6e71d3d85ac41",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtCategoryDesc = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtCategoryDesc",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "8%",
        "placeholder": "Category Description",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0f085b38b568645",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "24%",
        "width": "80%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "CopyslTextBox0ed39dc85503749",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnCreate = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnCreate",
        "isVisible": true,
        "left": "57dp",
        "onClick": AS_Button_af0fc70c9a38415ebfefcea41ddd6af4,
        "skin": "slButtonGlossBlue",
        "text": "Create Category",
        "top": "225dp",
        "width": "50%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmCreateCategory.add(lblCategoryPin, lblCategoryDesc, txtCategoryPN, txtCategoryDesc, btnCreate);
};

function frmCreateCategoryGlobals() {
    var RBarBtnItem0 = new kony.ui.BarButtonItem({
        "type": constants.BAR_BUTTON_TITLE,
        "tintColor": "333333",
        "style": constants.BAR_ITEM_STYLE_PLAIN,
        "enabled": true,
        "metaData": {
            "title": ""
        }
    });
    frmCreateCategory = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCreateCategory,
        "enabledForIdleTimeout": false,
        "id": "frmCreateCategory",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0d41f9097aaed47"
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
        "titleBar": true,
        "titleBarAttributes": {
            "barStyle": constants.BAR_STYLE_DEAFULT,
            "navigationBarHidden": false,
            "translucent": true,
            "tintColor": "ffffff00",
            "hidesBackButton": true,
            "prompt": "",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "button",
                "closureLeftSideView": AS_BarButtonItem_d9ce94d6a43e441b9f6c7d80c416ed0a,
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": [RBarBtnItem0]
        },
        "titleBarSkin": "skTitleBar"
    });
};