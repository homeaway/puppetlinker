var puppet_dashboard = 'http://puppet-dashboard.aus1.homeaway.live'; 
var github = 'http://github.wvrgroup.internal/operations/puppet-modules/blob/';

function get_storage_items() {
  chrome.storage.sync.get(null,
    function(items) {
      puppet_dashboard = items['puppetdash'];
      github = items['gitrepo'];
    });
}

function checkDashboardDomain(){
    get_storage_items();
    if( puppet_dashboard.includes(location.origin)) {

    /*
    chrome.storage.sync.get("gitrepo", function(obj) {
      github = obj['gitrepo']
    });
    */

    // remove the wbr tags from string elements
    var wbrs = document.getElementsByTagName('wbr');
    while (wbrs.length) {
          parent = wbrs[0].parentNode;
          parent.innerHTML.replace(/["]/g, '');
          parent.className = 'link';
          parent.removeChild(wbrs[0]);
    }

    var doc = document.getElementsByClassName("link");
    for (i in doc) {
      try {
        // you need to tweak this for your environment
        if (doc[i].innerHTML.match(/\/etc\/puppet\/environments\/.*pp/)) {
          wrapit(doc[i]);
        }
      }
      catch(e){
        if(e){
          // If fails, Do something else
        }
      }
    }
  }
}
function wrapit(dom) {
  var oldString = dom.innerHTML.match(/\/etc\/puppet\/environments\/.*pp/);
  //console.log(oldString);
  var trimmed = oldString[0].replace(/\/etc\/puppet\/environments\//,'');
  var wrapper = "<a href='"+github+trimmed+"'>"+oldString[0]+"</a>";

  dom.innerHTML = wrapper;

}

document.addEventListener('DOMContentLoaded', checkDashboardDomain);


//alert("All HAIL the hypnotoad! your puppet log now has links!");
