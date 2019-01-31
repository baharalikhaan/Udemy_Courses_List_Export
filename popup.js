document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    var table = document.getElementsByTagName('table');
alert(table[0].outerHTML);
    if (table) {
     
      // If outerHTML property available, use it
      if (typeof table.outerHTML == 'string') {
        alert( table.outerHTML);
     
      } else {
         alert(1);
      }
    }
  }, false);
}, false);