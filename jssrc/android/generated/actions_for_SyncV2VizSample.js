//actions.js file 
function AS_AppEvents_ad5329758125437482b56fe27cc587b6(eventobject) {}

function AS_AppEvents_c563068adf454dc8b4afffe6f94d0658(eventobject) {
    return setupSync.call(this);
}

function AS_Button_af0fc70c9a38415ebfefcea41ddd6af4(eventobject) {
    return createCategory.call(this);
}

function AS_Button_bd8a94625cbe4086aa52f0255f4858d6(eventobject) {
    return onUpdate.call(this);
}

function AS_Button_c3f06a600d7d42c59d68f09cf43a2d2c(eventobject) {
    return performSyncOnCategories.call(this);
}

function AS_Button_ec84823ac6d34640879941e909499d0c(eventobject) {
    return setupSync.call(this);
}

function AS_Button_idd31725f84e4cdb85db74bf3e8077c1(eventobject) {
    return onDelete.call(this);
}

function AS_Button_jbf46edc1dfa492baa3b97d451b44e88(eventobject) {
    selectedCategory = null;
    frmCreateDemo.show();
}

function AS_Form_aa8ebf92e24f4e7eaced413b1e27e979(eventobject) {
    return frmCRUDDemoInit.call(this);
}

function AS_Form_fdaa3b5bd4c94062b9764193c0fba365(eventobject) {}

function AS_Segment_e33c60d395f44491a77fc03393b44a52(eventobject, sectionNumber, rowNumber) {
    return onRowClick.call(this, eventobject, sectionNumber, rowNumber, eventobject);
}