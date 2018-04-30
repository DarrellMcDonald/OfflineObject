//actions.js file 
function AS_AppEvents_ad5329758125437482b56fe27cc587b6(eventobject) {}

function AS_AppEvents_c563068adf454dc8b4afffe6f94d0658(eventobject) {
    return setupSync.call(this);
}

function AS_BarButtonItem_d9ce94d6a43e441b9f6c7d80c416ed0a(eventobject) {
    frmCategories.show();
}

function AS_BarButtonItem_f7659510a2364ab5a884cd373cf4dc6e(eventobject) {
    frmCategories.show();
}

function AS_BarButtonItem_fef2531c3fbe4f1e8a49b33a822a70b2(eventobject) {
    frmCreateCategory.show();
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

function AS_Button_g7e1bf7d00a74f23aadf41a625a8b8af(eventobject) {
    kony.application.exit();
}

function AS_Button_h4bd97a4ebcf455a915eb79079e30f0c(eventobject) {
    frmCategories.show();
}

function AS_Button_idd31725f84e4cdb85db74bf3e8077c1(eventobject) {
    return onDelete.call(this);
}

function AS_Button_jbf46edc1dfa492baa3b97d451b44e88(eventobject) {
    selectedCategory = null;
    frmCreateDemo.show();
}

function AS_Form_aa8ebf92e24f4e7eaced413b1e27e979(eventobject) {
    return frmEditCategoryInit.call(this);
}

function AS_Form_afa5a75f4c4f45aa9630e67198553c4b(eventobject) {
    return refreshCategories.call(this);
}

function AS_Form_b9f67c89375945e6a97889b464d272e6(eventobject) {}

function AS_Form_bf25a576b8ec41b3b5b14bd628fe57d7(eventobject) {}

function AS_Form_fdaa3b5bd4c94062b9764193c0fba365(eventobject) {}

function AS_Form_je7ae5733dd84e3fa08a8271d089de49(eventobject) {}

function AS_Image_ef5a7b368cf145dd937ab34cfb74bba8(eventobject, x, y) {
    kony.application.exit();
}

function AS_Segment_e33c60d395f44491a77fc03393b44a52(eventobject, sectionNumber, rowNumber) {
    return onRowClick.call(this, eventobject, sectionNumber, rowNumber, eventobject);
}