function addWidgetsfrmEditCategory() {
    frmEditCategory.setDefaultUnit(kony.flex.DP);
    var lblCategoryIDtxt = new kony.ui.Label({
        "id": "lblCategoryIDtxt",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0dc2e0582092844",
        "text": "Category ID",
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
    var lblCategoryID = new kony.ui.Label({
        "id": "lblCategoryID",
        "isVisible": true,
        "left": "9%",
        "skin": "CopyslLabel0caddd20a7c1343",
        "text": "Label",
        "textStyle": {},
        "top": "9%",
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
    var lblCategoryDesctxt = new kony.ui.Label({
        "id": "lblCategoryDesctxt",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0g369af8d72954a",
        "text": "Category Description",
        "textStyle": {},
        "top": "15%",
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
    var txtCategoryDesc = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtCategoryDesc",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "9%",
        "secureTextEntry": false,
        "skin": "CopyslTextBox0f085b38b568645",
        "text": "TextBox2",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "20%",
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
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var btnUpdate = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnUpdate",
        "isVisible": true,
        "left": "43dp",
        "onClick": AS_Button_bd8a94625cbe4086aa52f0255f4858d6,
        "skin": "slButtonGlossBlue",
        "text": "Update",
        "top": "267dp",
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
    var btnDelete = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnDelete",
        "isVisible": true,
        "left": "43dp",
        "onClick": AS_Button_idd31725f84e4cdb85db74bf3e8077c1,
        "skin": "slButtonGlossBlue",
        "text": "Delete",
        "top": "358dp",
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
    frmEditCategory.add(lblCategoryIDtxt, lblCategoryID, lblCategoryDesctxt, txtCategoryDesc, btnUpdate, btnDelete);
};

function frmEditCategoryGlobals() {
    var RBarBtnItem0 = new kony.ui.BarButtonItem({
        "type": constants.BAR_BUTTON_TITLE,
        "tintColor": "fffaff00",
        "style": constants.BAR_ITEM_STYLE_PLAIN,
        "enabled": true,
        "metaData": {
            "title": ""
        }
    });
    frmEditCategory = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmEditCategory,
        "enabledForIdleTimeout": false,
        "id": "frmEditCategory",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_aa8ebf92e24f4e7eaced413b1e27e979,
        "skin": "CopyslForm0dabaa184037949"
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
            "tintColor": "fffaff00",
            "hidesBackButton": true,
            "prompt": "Edit Category",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "button",
                "closureLeftSideView": AS_BarButtonItem_f7659510a2364ab5a884cd373cf4dc6e,
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": [RBarBtnItem0]
        },
        "titleBarSkin": "skTitleBar"
    });
};