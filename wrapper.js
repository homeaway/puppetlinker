

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

function wrapit(dom) {
  var oldString = dom.innerHTML.match(/\/etc\/puppet\/environments\/.*pp/);
  //console.log(oldString);
  var trimmed = oldString[0].replace(/\/etc\/puppet\/environments\//,'');
  var wrapper = "<a href='http://github.wvrgroup.internal/operations/puppet-modules/blob"+trimmed+"'>"+oldString[0]+"</a>";

  dom.innerHTML = wrapper;

}

alert("All HAIL the hypnotoad! your puppet log now has links!");
