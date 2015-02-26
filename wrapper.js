
var doc = document.getElementsByTagName("code")[0];

// remove the wbr tags from string elements
var wbrs = document.getElementsByTagName('wbr');
while (wbrs.length) {
      wbrs[0].parentNode.innerHTML.replace(/["]/g, '');
      //wbrs[0].parentNode.removeChild(wbrs[0]);
}

//var oldString = string.match(/\/etc\/puppet\/environments\/\.*pp/);
//var trimmed = oldString.replace(/\/etc\/puppet\/environments\//,'');
//var wrapper = '<a href=“http://github.wvrgroup.internal/operations/puppet-modules/blob'+trimmed+'>'+oldString+'</a>';

//document.html.replace(oldString, wrapper);


alert("hello");
