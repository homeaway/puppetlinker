function save_options() {
  var repo = document.getElementById('gitrepo').value;
  var dash = document.getElementById('dashurl').value;
    chrome.storage.sync.set({
      gitrepo: repo,
      puppetdash: dash
    }, function() {
        console.log("repo: "+repo);
        console.log("dash: "+dash);
        var status = document.getElementById('status');
        status.textContent = "Options Saved";
        setTimeout(function() {
          status.textContent = '';
        }, 750);
      }
    );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
// Use default value color = 'github' and 'puppet-dashboard'.
    chrome.storage.sync.get({
       gitrepo: 'https://github.com',
       puppetdash: 'https://puppet-dashboard:3000'
    }, function(items) {
    document.getElementById('gitrepo').value = items.gitrepo;
    document.getElementById('dashurl').value = items.puppetdash;
  });
}

function setSaveListener(){
  document.getElementById('save').addEventListener('click', save_options);
}

document.addEventListener('DOMContentLoaded', restore_options);
document.addEventListener('DOMContentLoaded', setSaveListener);


