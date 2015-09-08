var puppetdash;
var git;

function puppet_dashboard() {
  chrome.storage.sync.get("puppetdash", function(obj) {
    puppetdash = obj.puppetdash;
  });
}

function github() {
  chrome.storage.sync.get("gitrepo", function(obj) {
    git = obj.gitrepo;
  });
}


//checkDashboardDomain();
init = function(){
  puppet_dashboard();
  github();

  console.log("puppet dashboard is: "+puppetdash);
  
//  if puppetdash.includes(location.origin) {
  console.log("after if reached");
  console.log("git set to: "+git);
  
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
// } 
}

init();

function wrapit(dom) {
  var oldString = dom.innerHTML.match(/\/etc\/puppet\/environments\/.*pp/);
  //console.log(oldString);
  var trimmed = oldString[0].replace(/\/etc\/puppet\/environments\//,'');
  var wrapper = "<a href='"+github+trimmed+"'>"+oldString[0]+"</a>";

  dom.innerHTML = wrapper;

}

//document.addEventListener('DOMContentLoaded', checkDashboardDomain )

//alert("All HAIL the hypnotoad! your puppet log now has links!");
