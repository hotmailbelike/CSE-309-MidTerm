$('#click').click(function() {
  $(this).text('Cooking');
  var start = $('#start').val();
  var end = $('#end').val();
  var interval = $('#interval').val();

  // console.log(start);
  // console.log(end);
  // console.log(interval);
  // var c1, c2, c3, c4, c5;
  // c1 = 'blue';
  // c2 = 'green';
  // c3 = 'yellow';
  // c4 = 'orange';
  // c5 = 'red';

  var size = 0;

  $('#start-temperature').text(start + ' Degree Celcius');
  $('#end-temperature').text(end + ' Degree Celcius');

  var progress = setInterval(function() {
    size += 20;
    if (size === 20) {
      $('#bar')
        .addClass('bg-primary')
        .css('width', size + '%');
    } else if (size === 40) {
      $('#bar')
        .addClass('bg-success')
        .css('width', size + '%');
    } else if (size === 60) {
      $('#bar')
        .addClass('bg-warning')
        .css('width', size + '%');
    } else if (size === 80) {
      $('#bar')
        .addClass('progress-bar-orange')
        .css('width', size + '%');
    } else if (size === 100) {
      $('#bar')
        .removeClass('progress-bar-orange')
        .addClass('bg-danger')
        .css('width', size + '%');
    }

    // $('#bar').css('width', size + '%');
  }, interval);
});

// $(document).ready(function () {
//   $('#start').click(function () {
//     var size = 0;
//     var interval = setInterval(function () {
//       size = size + 10;
//       $('.progress-bar-fill').css('width', size + '%');
//       if (size >= 100) {
//         clearInterval(interval);
//       }
//     }, 1000);
//   });
// });
