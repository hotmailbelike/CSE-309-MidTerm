$('#click').click(function() {
  $(this).text('Cooking');
  var start = $('#start').val();
  var end = $('#end').val();
  var interval = $('#interval').val();

  // console.log(start);
  // console.log(end);
  // console.log(interval);
  var c1, c2, c3, c4, c5;
  c1 = 'blue';
  c2 = 'green';
  c3 = 'yellow';
  c4 = 'orange';
  c5 = 'red';

  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById('bar');
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + '%';
        }
      }
    }
  }
});
