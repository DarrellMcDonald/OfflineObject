var KonyLogger={};
KonyLogger.InitializeLogger=function(){
this.addPersister= function(addPersister,errorCallback){};
this.logTrace= function(message){};
this.logDebug= function(message){};
this.logWarning= function(message){};
this.logInfo= function(message){};
this.logError= function(message){};
this.logFatal= function(message){};
this.setConfig= function(loggerName,loggerConfig,errorCallBack){};
};
KonyLogger.getLogLevel= function(){};
KonyLogger.flush= function(){};
