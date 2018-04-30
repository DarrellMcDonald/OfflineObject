//Globals
var categoriesObj = null;
var categoryRecords = null;
var selectedCategory = null;
var ObjServiceObject = null;

function onSetupSuccess() {
    if (!ObjServiceObject) {
        ObjServiceObject = new kony.sdk.KNYObjSvc("RDBMSBasedOS");
    }
    if (!categoriesObj) {
        categoriesObj = new kony.sdk.KNYObj("CATEGORY");
    }
    kony.application.dismissLoadingScreen();
    alert("Setup Success");
}

function onSetupFailed() {
    kony.application.dismissLoadingScreen();
    alert("Setup Failed");
}

function setupSync() {
    kony.application.showLoadingScreen("slForm", "Initializing", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
    kony.logger.activatePersistors(kony.logger.consolePersistor);
    kony.logger.currentLogLevel = kony.logger.logLevel.TRACE;
    KNYMobileFabric.OfflineObjects.setup(onSetupSuccess, onSetupFailed); //Type your code here
}

function performSyncOnCategories() {
    var options = {
        'downloadBatchSize': 100,
        'uploadBatchSize': 20
    };
    var netStatus = kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY);
    if (netStatus === true) {
        ObjServiceObject.startSync(options, onSyncSuccess.bind(this), onSyncFailure.bind(this), onSyncProgress.bind(this));
    } else {
        alert("Sync not available when offline");
    }
}

function onSyncSuccess() {
    alert("Sync on category object Succeded");
    categoriesObj.get(null, onGetAllSuccess, onGetAllFail);
    frmCategories.forceLayout();
}

function onSyncFailure(error) {
    alert("Sync on Category object failed" + error.code);
}

function onSyncProgress(object) {
    //    alert(JSON.stringify(object));
}

function onGetAllSuccess(records) {
    categoryRecords = records;
    populateSegment(records);
}

function onGetAllFail(error) {
    print("unable to retrieve records from db" + error.code);
}

function populateSegment(categories) {
    var objRecords = categories;
    var data = [];
    var noOfRecords = objRecords.length;
    for (var i = 0; i < noOfRecords; i++) {
        var objRecord = objRecords[i];
        var categoryDesc = objRecord.CATEGORY_DES;
        data[i] = {
            lblCategory: {
                text: categoryDesc,
            }
        };
    }
    frmCategories.segCategories.data = data;
    frmCategories.segCategories.left = 0;
}
//Handle on row click to Update or delete selected categoriy
function onRowClick(seguiWidget, sectionIndex, rowIndex, isSelected) {
    selectedCategory = categoryRecords[rowIndex];
    frmEditCategory.show();
}

function frmEditCategoryInit() {
    if (selectedCategory) {
        frmEditCategory.lblCategoryID.text = selectedCategory.CATEGORY_ID;
        frmEditCategory.txtCategoryDesc.text = selectedCategory.CATEGORY_DES;
    }
}

function onUpdate() {
    var updatedRecord = {};
    updatedRecord.CATEGORY_DES = frmEditCategory.txtCategoryDesc.text;
    var options = {};
    var primary = {
        'CATEGORY_ID': selectedCategory.CATEGORY_ID
    };
    options.primaryKeys = primary;
    categoriesObj.updateByPK(updatedRecord, options, onUpdateRecordSuccess, onUpdateRecordFailed);
}

function onUpdateRecordSuccess() {
    alert("Update succeded");
}

function onUpdateRecordFailed(errorObj) {
    alert("Update failed with error " + errorObj.errorCode);
}

function onDelete() {
    var pk = {};
    pk.CATEGORY_ID = selectedCategory.CATEGORY_ID;
    var options = {
        "primaryKeys": pk
    };
    categoriesObj.deleteByPK(options, onDeleteSuccess, onDeleteFailure);
}

function onDeleteSuccess() {
    alert("record deleted");
}

function onDeleteFailure(errorObj) {
    alert("delete failed with error " + errorObj.errorCode);
}

function onSuccess(successContext) {
    alert("success !!");
}

function onFailure(error) {
    alert("Create failed with error :" + JSON.stringify(error));
}

function createCategory() {
    var categories = new kony.sdk.KNYObj("CATEGORY");
    //Add a record  where primary key CATEGORY_ID is marked as autogenerated.
    var category1 = {};
    var options = {};
    category1.CATEGORY_PN = parseInt(frmCreateCategory.txtCategoryPN.text);
    category1.CATEGORY_DES = frmCreateCategory.txtCategoryDesc.text;
    category1.CreatedBy = createdbyUser;
    //Call the objects create API
    categories.create(category1, options, onSuccess, onFailure); //persists records db.
}

function refreshCategories() {
    categoriesObj.get(null, onRefreshAllSuccess, onRefreshAllFail);
}

function onRefreshAllSuccess(records) {
    categoryRecords = records;
    populateSegment(records);
}

function onRefreshAllFail(error) {
    print("unable to refresh records from db" + error.code);
}