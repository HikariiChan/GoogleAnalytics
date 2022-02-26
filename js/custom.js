//JS to enable link to tab
var url = document.location.toString();
if(url.match('#')){
  $(newFunction()).tab('show') ;
}

// Change hash for page-reload
$('.nav-link a').on('shown.bs.tab', function (e) {
  window.location.hash = e.target.hash;
})


function newFunction() {
  return '.nav-tabs a[href=#' + url.split('#')[1] + ']';
}
/* // Javascript to enable link to tab
var hash = (window.location.href.match(/[?&]tab-name=[^&$]+/i) || '=').split('=')[1];
if (hash) {
    $('#nav-list .nav-link a[href="#' + hash + '"]').tab('show');
} 

// Change hash for page-reload
$('#nav-list .nav-link a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
}) */