/***************************************************************************************
****************************************************************************************
***** Super GM_setValue and GM_getValue.js
*****
***** This library extends the Greasemonkey/TamperMonkey GM_setValue and GM_getValue functions to
***** handle any javascript variable type.
*****
***** Add it to your GM script with:
***** // @require https://github.com/Acotec/require/raw/master/Super_GM.user.js
*****
*****
***** Usage:
***** GM_SuperValue.set (varName, varValue);
***** var x = GM_SuperValue.get (varName, defaultValue);
*****
***** Test mode:
***** GM_SuperValue.runTestCases(bUseConsole);
*****
*/
// ==UserScript==
// @name Super_GM_setValue_and_GM_getValue.js
// @description Extends the GM_setValue and GM_getValue functions for any javascript variable type.
// @namespace userscripts-mirror.org/users/158640
// ==/UserScript==

var GM_SuperValue=new function(){var JSON_MarkerStr="json_val: ",FunctionMarker="function_code: ";function ReportError(e){if(!console||!console.error)throw new Error(e);console.log(e)}"function"!=typeof GM_setValue&&ReportError("This library requires Greasemonkey/TamperMonkey! GM_setValue is missing."),"function"!=typeof GM_getValue&&ReportError("This library requires Greasemonkey/TamperMonkey! GM_getValue is missing."),this.set=function(e,r){if(e)switch(/[^\w _-]/.test(e)&&ReportError("Suspect, probably illegal, varName sent to GM_SuperValue.set()."),typeof r){case"undefined":ReportError("Illegal varValue sent to GM_SuperValue.set().");break;case"boolean":case"string":GM_setValue(e,r);break;case"number":if(r===parseInt(r)&&Math.abs(r)<2147483647){GM_setValue(e,r);break}break;case"object":var a=JSON_MarkerStr+JSON.stringify(r);GM_setValue(e,a);break;case"function":a=FunctionMarker+r.toString(),GM_setValue(e,a);break;default:ReportError("Unknown type in GM_SuperValue.set()!")}else ReportError("Illegal varName sent to GM_SuperValue.set().")},this.get=function(varName,defaultValue){if(varName){/[^\w _-]/.test(varName)&&ReportError("Suspect, probably illegal, varName sent to GM_SuperValue.get().");var varValue=GM_getValue(varName);if(!varValue)return defaultValue;if("string"==typeof varValue){var regxp=new RegExp("^"+JSON_MarkerStr+"(.+)$"),m=varValue.match(regxp);if(m&&m.length>1)return varValue=JSON.parse(m[1]),varValue;if(regxp=new RegExp("^"+FunctionMarker+"((?:.|\n|\r)+)$"),m=varValue.match(regxp),m&&m.length>1)return varValue=eval("("+m[1]+")"),varValue}return varValue}ReportError("Illegal varName sent to GM_SuperValue.get().")}};
//--- EOF
