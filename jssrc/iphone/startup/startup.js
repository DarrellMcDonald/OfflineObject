//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "OfflineObjectApp",
    appName: "OfflineObjectApp",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.31",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "OfflineObjectApp",
    isturlbase: "https://digitalsolutionslab.konycloud.com/services",
    isMFApp: true,
    appKey: "facedec73c9f592d0f47c0efc36194a0",
    appSecret: "6f2ff782e1290291761eca1c2cefc8de",
    serviceUrl: "https://100020796.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100020796.auth.konycloud.com/appconfig",
        "service_doc_etag": "00000162F37CD7E0",
        "appId": "ebe680b8-b9b4-47f2-80cd-156d2d2bbfae",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "OfflineObjects",
        "reportingsvc": {
            "session": "https://digitalsolutionslab.konycloud.com/services/IST",
            "custom": "https://digitalsolutionslab.konycloud.com/services/CMS"
        },
        "baseId": "a9f00ff6-3db5-4528-be47-7fcd24327817",
        "services_meta": {
            "RDBMSBasedOS": {
                "offline": true,
                "metadata_url": "https://digitalsolutionslab.konycloud.com/services/metadata/v1/RDBMSBasedOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://digitalsolutionslab.konycloud.com/services/data/v1/RDBMSBasedOS"
            }
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://100020796.auth.konycloud.com/appconfig",
    secureurl: "https://100020796.auth.konycloud.com/appconfig"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeMVCTemplates();
    initializeUserWidgets();
    frmCategoriesGlobals();
    frmCreateCategoryGlobals();
    frmEditCategoryGlobals();
    frmLoadingGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        postappinit: AS_AppEvents_c563068adf454dc8b4afffe6f94d0658,
        showstartupform: function() {
            frmLoading.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;