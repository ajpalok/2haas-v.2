---
layout: compress
---
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('{{site.baseurl | prepend: site.url}}/Worker.js')
    .then(reg => console.log('Install our app from browser menu'))
    .catch(err => console.log('service worker not registered', err));
}

$( document ).ready(function() {
   
});