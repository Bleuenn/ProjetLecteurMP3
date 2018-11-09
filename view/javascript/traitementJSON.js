// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]"
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

/* VARIABLES GLOBALES */
let data = getData(initJSON());
/* -------------------*/

function initJSON() {
    let json = {"sample_rate":48000,"samples_per_pixel":48000,"bits":8,"length":226,"data":[0,0,-8,8,-7,7,-10,9,-8,7,-11,10,-9,9,-9,8,-9,7,-43,44,-44,48,-37,41,-40,41,-36,37,-36,42,-41,34,-42,41,-39,45,-71,46,-35,52,-37,44,-46,45,-45,43,-52,40,-37,43,-40,54,-40,40,-49,46,-37,44,-42,49,-44,45,-43,45,-48,44,-36,46,-48,48,-40,41,-39,45,-36,40,-43,53,-41,37,-44,47,-39,43,-44,50,-47,42,-37,44,-47,44,-35,38,-38,45,-60,45,-38,58,-58,52,-49,47,-58,68,-49,71,-60,65,-49,54,-55,52,-59,65,-46,50,-55,61,-64,66,-55,70,-55,53,-44,46,-54,71,-43,61,-57,46,-44,58,-37,39,-47,47,-37,41,-50,55,-44,53,-42,47,-37,46,-43,47,-40,47,-43,51,-45,56,-54,65,-42,51,-47,50,-54,48,-46,62,-70,60,-60,76,-55,57,-50,64,-75,52,-59,78,-51,49,-48,46,-61,67,-65,64,-47,46,-48,49,-62,72,-68,79,-51,57,-53,55,-41,52,-47,58,-50,53,-49,48,-50,49,-56,53,-54,49,-58,43,-47,48,-43,64,-44,47,-47,46,-48,46,-41,52,-62,50,-50,59,-51,42,-47,42,-47,45,-46,48,-57,41,-43,56,-40,40,-55,55,-47,43,-43,45,-46,42,-52,44,-53,54,-40,44,-47,44,-52,45,-40,52,-56,52,-53,52,-44,39,-38,40,-51,54,-39,42,-44,44,-45,50,-50,45,-38,42,-51,41,-42,41,-46,44,-47,44,-43,43,-43,40,-47,43,-46,57,-38,39,-56,51,-46,46,-43,45,-57,50,-58,48,-52,47,-47,50,-53,51,-55,67,-46,46,-51,46,-52,49,-52,52,-55,52,-46,62,-71,65,-60,62,-60,59,-52,52,-57,47,-43,45,-53,57,-55,64,-54,42,-39,52,-46,52,-42,44,-43,43,-46,44,-56,49,-44,44,-46,46,-51,61,-51,45,-44,47,-47,50,-52,57,-41,49,-52,43,-56,50,-43,49,-51,48,-45,44,-52,39,-40,46,-52,44,-52,46,-39,46,-45,41,-56,41,-47,41,-41,38,-45,49,-50,53,-44,44,-39,47,-57,43,-27,35,-24,25,-19,18,-11,13,-10,12,-7,7,-3,3,-1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
    return json;
}

function getData(json) {
    return json.data;
}

function deleteOdd(data) {
    //console.log(data.length);
    var tableau = [];
    for (i = 1; i < data.length-1; i = i + 2) {
        tableau.push(data[i]);
    }
    return tableau;
}

data = deleteOdd(data);


function draw(data) {
    var ctx = document.getElementById("canvas").getContext('2d');
    var canvas = document.getElementById("canvas");
    var height = 150;
    var width = window.innerWidth;

    console.log(width);
    console.log(data.length);
    canvas.setAttribute("width","" + width);
    canvas.setAttribute("height",""+ height);

    for (var i = 0; i < data.length; i++) {
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo((i*width/data.length),height);
        ctx.lineTo((i*width/data.length),data[i]);
        ctx.stroke();
    }

}

draw(data);
