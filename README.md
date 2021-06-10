# require
Helper Functions For autoFcb Scripts
Forks from https://userscripts-mirror.org/scripts/show/107941   //SuperGM
           https://gist.github.com/BrockA/2625891               //WaitForKeyElements

This version decrease the size of the code(minified) and correct some error to make it perfect for tamperMonkey

This library extends the Greasemonkey/TamperMonkey GM_setValue() and GM_getValue() functions to handle any javascript variable type.

A library is necessary because [GM_setValue](http://wiki.greasespot.net/GM_setValue) only stores: strings, booleans, and 32-bit integers. 

Important! This is a library, not a standard Greasemonkey script.
It is meant to be included via the @require directive.

Add it to your script with this line in the [metadata block](http://wiki.greasespot.net/Metadata_Block):

// @require  https://github.com/Acotec/require/raw/master/Super_GM.user.js

In your user script,you can use like this;

       GM_SuperValue.set (varName, varValue);  
       var x = GM_SuperValue.get (varName, defaultValue);

That is, just like you would use GM_setValue and GM_getValue, but without the worries of the script breaking on invalid values.
