/**
 * Login tools - detection of caps lock
 */
document.addEventListener("DOMContentLoaded", function() {
    "use strict";

    function capsLock(e) {
        let element = document.getElementById('form-password');

        // http://www.codeproject.com/KB/scripting/Detect_Caps_Lock.aspx
        const kc = (e.keyCode ? e.keyCode : e.which);
        const sk = e.shiftKey ? e.shiftKey : ((kc === 16));
        const addRemove = (((kc >= 65 && kc <= 90) && !sk) || ((kc >= 97 && kc <= 122) && sk));

        element.classList.toggle('has-warning', addRemove);
        element.classList.toggle('has-feedback', addRemove);

        element.querySelector('.form-control-feedback').classList.toggle('hidden', !addRemove);
        element.querySelector('#passwordStatus').classList.toggle('hidden', !addRemove);
    }

    function cookiesEnabled() {
        if (!navigator.cookieEnabled) {
            const warning = document.getElementById('disabled-cookies-box');
            if (!warning) {
                console.error('Cookies not enabled, but warning html element not found.');
                return;
            }
            warning.classList.remove('hidden');
        }
    }

    let inputElements = document.getElementsByTagName('input');
    for(let i = 0; i < inputElements.length; i++) {
        inputElements[i].addEventListener('keypress',  capsLock);
    }

    // Autofocus won't trigger "focus"
    const autofocusElement = document.querySelector('[autofocus]');
    if (autofocusElement) {
        autofocusElement.focus();
    }

    cookiesEnabled();
});
