/***
 *     ██████╗██╗   ██╗███████╗████████╗ ██████╗ ███╗   ███╗
 *    ██╔════╝██║   ██║██╔════╝╚══██╔══╝██╔═══██╗████╗ ████║
 *    ██║     ██║   ██║███████╗   ██║   ██║   ██║██╔████╔██║
 *    ██║     ██║   ██║╚════██║   ██║   ██║   ██║██║╚██╔╝██║
 *    ╚██████╗╚██████╔╝███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║
 *     ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝
 *
 * This File is Essential to The Project
 * Created by     : @OrbitTurner
 * Optimised by   : @OrbitTurner
 * Maintened by   : -
 * Last Update    : 16 July 2022
 */
// -------------------------------------
// >>> INITIAL LOG <<<
console.log('%cS%cT%cA%cR%cT%cI%cN%cG',
  'font-size: 30px; color: blue;',
  'font-size: 30px; color: lightblue;',
  'font-size: 30px; color: lightgreen;',
  'font-size: 30px; color: green',
  'font-size: 30px; color: yellow;',
  'font-size: 30px; color: orange',
  'font-size: 30px; color: red',
  'font-size: 30px; color: blue;');
console.log('%c' + 'ORBIT-TOOLBOX',
  'font-family:Comic Sans MS; color: #fff; ' +
  'font-size:50px; font-weight:bold; ' +
  'background-image: repeating-linear-gradient(45deg, hsla(195,95%,57%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212));' +
  ' border-radius: 5px; padding: 20px');
console.log('%c' + 'FOR ANY HELP OR INFORMATION CONTACT US hello@futurize.world',
  'font-family:Comic Sans MS; color: #fff; ' +
  'font-size:20px; font-weight:bold; ' +
  'background:  #071a52;');
// -------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    var containers = document.querySelectorAll(".draggable-zone");

    if (containers.length === 0) {
        return false;
    }
    
    var swappable = new Sortable.default(containers, {
        draggable: ".draggable",
        handle: ".draggable .draggable-handle",
        mirror: {
            //appendTo: selector,
            appendTo: "body",
            constrainDimensions: true
        }
    });
}, false);
  