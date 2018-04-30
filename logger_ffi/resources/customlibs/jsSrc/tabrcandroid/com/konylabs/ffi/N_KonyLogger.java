package com.konylabs.ffi;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.Vector;
import com.konylabs.api.TableLib;
import com.konylabs.vm.LuaTable;



import com.kony.logger.Core.KonyJSFacade;
import com.konylabs.libintf.Library;
import com.konylabs.libintf.JSLibrary;
import com.konylabs.vm.LuaError;
import com.konylabs.vm.LuaNil;


public class N_KonyLogger extends JSLibrary {

 
 
	public static final String getLogLevel = "getLogLevel";
 
 
	public static final String flush = "flush";
 
	String[] methods = { getLogLevel, flush };


 Library libs[] = null;
 public Library[] getClasses() {
 libs = new Library[1];
 libs[0] = new InitializeLogger();
 return libs;
 }



	public N_KonyLogger(){
	}

	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.getLogLevel( );
 
 			break;
 		case 1:
 if (paramLen != 0){ return new Object[] {new Double(100),"Invalid Params"}; }
 ret = this.flush( );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "KonyLogger";
	}


	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] getLogLevel( ){
 
		Object[] ret = null;
 Double val = new Double(com.kony.logger.Core.KonyJSFacade.getLogLevel( ));
 
 			ret = new Object[]{val, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] flush( ){
 
		Object[] ret = null;
 com.kony.logger.Core.KonyJSFacade.flush( );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 


class InitializeLogger extends JSLibrary {

 
 
	public static final String addPersister = "addPersister";
 
 
	public static final String logTrace = "logTrace";
 
 
	public static final String logDebug = "logDebug";
 
 
	public static final String logWarning = "logWarning";
 
 
	public static final String logInfo = "logInfo";
 
 
	public static final String logError = "logError";
 
 
	public static final String logFatal = "logFatal";
 
 
	public static final String setConfig = "setConfig";
 
	String[] methods = { addPersister, logTrace, logDebug, logWarning, logInfo, logError, logFatal, setConfig };

	public Object createInstance(final Object[] params) {
 return new com.kony.logger.Core.KonyJSFacade(
 );
 }


	public Object[] execute(int index, Object[] params) {
		// TODO Auto-generated method stub
		Object[] ret = null;
 try {
		int paramLen = params.length;
 int inc = 1;
		switch (index) {
 		case 0:
 if (paramLen < 2 || paramLen > 3){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable addPersister0 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 addPersister0 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 com.konylabs.vm.Function errorCallback0 = null;
 if(params[1+inc] != null && params[1+inc] != LuaNil.nil) {
 errorCallback0 = (com.konylabs.vm.Function)params[1+inc];
 }
 ret = this.addPersister(params[0]
 ,addPersister0
 ,errorCallback0
 );
 
 			break;
 		case 1:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable message1 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 message1 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.logTrace(params[0]
 ,message1
 );
 
 			break;
 		case 2:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable message2 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 message2 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.logDebug(params[0]
 ,message2
 );
 
 			break;
 		case 3:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable message3 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 message3 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.logWarning(params[0]
 ,message3
 );
 
 			break;
 		case 4:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable message4 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 message4 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.logInfo(params[0]
 ,message4
 );
 
 			break;
 		case 5:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable message5 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 message5 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.logError(params[0]
 ,message5
 );
 
 			break;
 		case 6:
 if (paramLen < 1 || paramLen > 2){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 com.konylabs.vm.LuaTable message6 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 message6 = (com.konylabs.vm.LuaTable)params[0+inc];
 }
 ret = this.logFatal(params[0]
 ,message6
 );
 
 			break;
 		case 7:
 if (paramLen < 3 || paramLen > 4){ return new Object[] {new Double(100),"Invalid Params"};}
 inc = 1;
 
 java.lang.String loggerName7 = null;
 if(params[0+inc] != null && params[0+inc] != LuaNil.nil) {
 loggerName7 = (java.lang.String)params[0+inc];
 }
 com.konylabs.vm.LuaTable loggerConfig7 = null;
 if(params[1+inc] != null && params[1+inc] != LuaNil.nil) {
 loggerConfig7 = (com.konylabs.vm.LuaTable)params[1+inc];
 }
 com.konylabs.vm.Function errorCallBack7 = null;
 if(params[2+inc] != null && params[2+inc] != LuaNil.nil) {
 errorCallBack7 = (com.konylabs.vm.Function)params[2+inc];
 }
 ret = this.setConfig(params[0]
 ,loggerName7
 ,loggerConfig7
 ,errorCallBack7
 );
 
 			break;
 		default:
			break;
		}
 }catch (Exception e){
			ret = new Object[]{e.getMessage(), new Double(101), e.getMessage()};
		}
		return ret;
	}

	public String[] getMethods() {
		// TODO Auto-generated method stub
		return methods;
	}
	public String getNameSpace() {
		// TODO Auto-generated method stub
		return "InitializeLogger";
	}

	/*
	 * return should be status(0 and !0),address
	 */
 
 
 	public final Object[] addPersister( Object self ,com.konylabs.vm.LuaTable inputKey0
 ,com.konylabs.vm.Function inputKey1
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).addPersister( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 , (com.konylabs.vm.Function)inputKey1
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] logTrace( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).logTrace( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] logDebug( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).logDebug( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] logWarning( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).logWarning( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] logInfo( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).logInfo( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] logError( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).logError( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] logFatal( Object self ,com.konylabs.vm.LuaTable inputKey0
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).logFatal( (java.util.Hashtable)TableLib.convertToHash(inputKey0)
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
 
 	public final Object[] setConfig( Object self ,java.lang.String inputKey0
 ,com.konylabs.vm.LuaTable inputKey1
 ,com.konylabs.vm.Function inputKey2
 ){
 
		Object[] ret = null;
 ((com.kony.logger.Core.KonyJSFacade)self).setConfig( inputKey0
 , (java.util.Hashtable)TableLib.convertToHash(inputKey1)
 , (com.konylabs.vm.Function)inputKey2
 );
 
 ret = new Object[]{LuaNil.nil, new Double(0)};
 		return ret;
	}
 
}

};
