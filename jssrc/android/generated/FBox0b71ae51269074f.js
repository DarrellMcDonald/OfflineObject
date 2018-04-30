function initializeFBox0b71ae51269074f() {
    FBox0b71ae51269074f = new kony.ui.FlexContainer({
        "clipBounds": false,
        "height": "40dp",
        "id": "FBox0b71ae51269074f",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "width": "100%"
    }, {
        "containerWeight": 100
    }, {});
    FBox0b71ae51269074f.setDefaultUnit(kony.flex.DP);
    var lblCategory = new kony.ui.Label({
        "id": "lblCategory",
        "isVisible": true,
        "left": "5dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "5dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    FBox0b71ae51269074f.add(lblCategory);
}