// メッセージが来たら、現在開いているページのurlをコピーする。

{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util')
const _ = require('lodash');
const R = require('ramda');


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.method == "copyUrlOfActiveTab"){
        chrome.tabs.query({active: true, currentWindow: true}, function(activeTabs){
            const url = decodeURIComponent(activeTabs[0].url);
            util.copyTextToClipboard(url);
        })
    }else if (request.method == "copyUrlOfAllTab"){
        chrome.tabs.query({currentWindow: true}, function(activeTabs){
            const urlsText =_(activeTabs)
                .map(tab=>decodeURIComponent(tab.url))
                .filter(util.isInformativePage)
                .map(R.tap(x=>{console.log(x)}))
                .join('\n')
            util.copyTextToClipboard(urlsText);
        })
    }
    sendResponse({});
});

}
