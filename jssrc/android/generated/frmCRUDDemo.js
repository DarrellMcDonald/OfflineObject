function addWidgetsfrmCRUDDemo() {
    frmCRUDDemo.setDefaultUnit(kony.flex.DP);
    var Label0bb4ae66baeeb43 = new kony.ui.Label({
        "id": "Label0bb4ae66baeeb43",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0dc2e0582092844",
        "text": "Category ID",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "45dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblCategoryID = new kony.ui.Label({
        "id": "lblCategoryID",
        "isVisible": true,
        "left": "23dp",
        "skin": "CopyslLabel0caddd20a7c1343",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "85dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var Label0e455b5062a2647 = new kony.ui.Label({
        "id": "Label0e455b5062a2647",
        "isVisible": true,
        "left": "21dp",
        "skin": "CopyslLabel0g369af8d72954a",
        "text": "Category Desc",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "140dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var txtCategoryDesc = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "txtCategoryDesc",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "21dp",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "text": "TextBox2",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "172dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
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
    }, {});
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
    }, {});
    frmCRUDDemo.add(Label0bb4ae66baeeb43, lblCategoryID, Label0e455b5062a2647, txtCategoryDesc, btnUpdate, btnDelete);
};

function frmCRUDDemoGlobals() {
    frmCRUDDemo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCRUDDemo,
        "enabledForIdleTimeout": false,
        "id": "frmCRUDDemo",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "preShow": AS_Form_aa8ebf92e24f4e7eaced413b1e27e979,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};