/*!
 * IE10 viewport hack for Surface/desktop Windows 8 bug
 * Copyright 2014 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see http://creativecommons.org/licenses/by/3.0/.
 */

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

(function () {
  'use strict';
  if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style')
    msViewportStyle.appendChild(
      document.createTextNode(
        '@-ms-viewport{width:auto!important}'
      )
    )
    document.querySelector('head').appendChild(msViewportStyle)
  }
})();


// Linking CSS and JS - Check the css file
function getDeviceSize() {
    var el = document.getElementsByTagName("html")[0];

    if(typeof window.getComputedStyle === 'function'){
        deviceSize = window.getComputedStyle(el, null).fontFamily;
    }else if(typeof el.currentStyle === 'object'){
        deviceSize = el.currentStyle.fontFamily;
    } else {
        deviceSize = false;
    }
    
    if (deviceSize.indexOf("lg") !=-1){
        var size = 'lg';
    } else if (deviceSize.indexOf("md") !=-1){
        var size = 'md';
    } else if (deviceSize.indexOf("sm") !=-1){
        var size = 'sm';
    } else if (deviceSize.indexOf("xs") !=-1){
        var size = 'xs';
    } else {
        var size = false;
    }
    
    return size;
}

// Document Ready
$(function (){
    // Do something
});

// Document Resize
$(window).resize(function (){
    // Do something
});