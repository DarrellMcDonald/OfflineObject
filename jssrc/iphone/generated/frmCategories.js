function addWidgetsfrmCategories() {
    frmCategories.setDefaultUnit(kony.flex.DP);
    var flexScrollCategories = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "86.76%",
        "horizontalScrollIndicator": true,
        "id": "flexScrollCategories",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "slFSbox",
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "100%"
    }, {}, {});
    flexScrollCategories.setDefaultUnit(kony.flex.DP);
    if (typeof initializeFBox0b71ae51269074f === 'function') initializeFBox0b71ae51269074f();
    var segCategories = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "lblCategory": ""
        }],
        "groupCells": false,
        "height": "94.44%",
        "id": "segCategories",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_e33c60d395f44491a77fc03393b44a52,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0a81a64e3eb7543",
        "rowTemplate": FBox0b71ae51269074f,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "lblCategory": "lblCategory"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    flexScrollCategories.add(segCategories);
    var btnSyncCategories = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "btnSyncCategories",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_c3f06a600d7d42c59d68f09cf43a2d2c,
        "skin": "slButtonGlossBlue",
        "text": "Sync",
        "top": "85%",
        "width": "153dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    frmCategories.add(flexScrollCategories, btnSyncCategories);
};

function frmCategoriesGlobals() {
    var RBarBtnItem0 = new kony.ui.BarButtonItem({
        "type": constants.BAR_BUTTON_TITLE,
        "tintColor": "ffffff00",
        "style": constants.BAR_ITEM_STYLE_PLAIN,
        "enabled": true,
        "action": AS_BarButtonItem_fef2531c3fbe4f1e8a49b33a822a70b2,
        "metaData": {
            "title": "Add"
        }
    });
    frmCategories = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmCategories,
        "enabledForIdleTimeout": false,
        "id": "frmCategories",
        "init": AS_Form_fdaa3b5bd4c94062b9764193c0fba365,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_afa5a75f4c4f45aa9630e67198553c4b,
        "skin": "CopyslForm0dcc1b49da2ad49"
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
            "prompt": "Categories",
            "leftItemsSupplementBackButton": true,
            "leftBarButtonItems": [{
                "titleBarLeftSideView": "button",
                "labelLeftSideView": "Back"
            }],
            "rightBarButtonItems": [RBarBtnItem0]
        },
        "titleBarSkin": "skTitleBar"
    });
};