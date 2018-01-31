// キーボードリスナーを登録する。
{
"use strict";
const jquery = require('jquery');
window.$ = window.jQuery = jquery;
const util = require('./util');
const Rx = require('rxjs');


function getHeadingText(){
    return $("title").text().replace(/\n/g, "").replace(/^ +/, "").replace(/ +$/g, "")
}

function sendMessage(keyboardEvent){
    if(keyboardEvent.ctrlKey){
        if(keyboardEvent.shiftKey){
            if(keyboardEvent.key === "Y"){
                chrome.runtime.sendMessage({method: "copyUrlOfAllTab"}, response=>{});
            }
        }else{
            console.log(keyboardEvent.key);
            if(keyboardEvent.key === "y"){
                util.copyTextToClipboard("- [" + getHeadingText() + "](" + decodeURIComponent(location.href) + ")");
            }else if(keyboardEvent.key === "7"){  // This overrides ordinal ctrl+c. DO NOT.
                util.copyTextToClipboard(decodeURIComponent(location.href));
            }
        }
    }
}

// $(document).keydown(function(event){
//     sendMessage(event);
// })


// 以下は、リアクティブな書き方。
$(document).ready(()=>{
    Rx.Observable.fromEvent(document, 'keydown')
        .subscribe(
            event => sendMessage(event),
            err => console.log('[Error] ' + err),
            () => console.log('[complete]'));
    }
)
}

