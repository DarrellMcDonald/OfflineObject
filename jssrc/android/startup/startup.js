//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SyncV2VizSample",
    appName: "SyncV2VizSample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.31",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "SyncV2VizSample",
    isturlbase: "http://10.10.19.230:9080/services",
    isMFApp: true,
    appKey: "30df7ce6f55946b0671ecf15addf4f11",
    appSecret: "6696b02c1086e1607d56dbd4b816b0c9",
    serviceUrl: "http://10.10.19.230:9080/authService/100000002/appconfig",
    svcDoc: {
        "selflink": "http://10.10.19.230:9080/authService/100000002/appconfig",
        "appId": "24ad3ad9-7522-442b-99b7-20ae2f81ac28",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "OfflineObjects",
        "reportingsvc": {
            "session": "http://10.10.19.230:9080/services/IST",
            "custom": "http://10.10.19.230:9080/services/CMS"
        },
        "baseId": "84568ba4-722a-466f-b3a4-b684ed3559b6",
        "services_meta": {
            "RDBMSBasedOS": {
                "offline": true,
                "metadata_url": "http://10.10.19.230:9080/services/metadata/v1/RDBMSBasedOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "http://10.10.19.230:9080/services/data/v1/RDBMSBasedOS"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "http://10.10.19.230:9080/admin/SyncV2VizSample/MWServlet",
    secureurl: "http://10.10.19.230:9080/admin/SyncV2VizSample/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeMVCTemplates();
    initializeUserWidgets();
    frmCRUDDemoGlobals();
    frmCreateDemoGlobals();
    frmHomeGlobals();
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
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
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