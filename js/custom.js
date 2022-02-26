/* //JS to enable link to tab
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
} */

/* // Javascript to enable link to tab
var hash = (window.location.href.match(/[?&]tab-name=[^&$]+/i) || '=').split('=')[1];
if (hash) {
    $('#nav-list .nav-link a[href="#' + hash + '"]').tab('show');
} 

// Change hash for page-reload
$('#nav-list .nav-link a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
}) */

window.addEventListener('load',function(){
  //associate all links to open the stuffs
  const allTabs=[...document.querySelectorAll('div[role=tabpanel]')];
  const tabsLabel=[...document.querySelectorAll("a[href]")].filter(y=>{
    const href=y.href;
    const idx=href.indexOf("#");
    return idx!=-1&&href.slice(idx+1).length>0;
  });
  function closeAllExcept(name=""){
    allTabs.forEach((item) => {
      if(item.getAttribute("id")!=name){
        item.classList.remove("active");
      }
      else{
        item.classList.add("active");
      }
    });
    tabsLabel.forEach((element) => {
      if(!element.href.endsWith(`#${name}`)){
        element.classList.remove("active");
      }
      else{
        element.classList.add("active");
      }
    });
    setTimeout(()=>window.scrollTo(0,0),50);
  }
  tabsLabel.forEach((element) => {
    const href=element.href;
    const id=href.slice(href.indexOf("#")+1);
    element.addEventListener("click",closeAllExcept.bind(window,id));
  });
  //finally try to resolve url hashtag
  if(location.hash.length>0){
    closeAllExcept(location.hash.slice(1));
  }
});