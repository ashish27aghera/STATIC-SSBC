//tracking

function formatDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
  
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
  
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }
  
  var input = document.getElementById("myInput");
  if(input){
  
    input.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("submit-tracking").click();
      }
    });
  }
  
  function reloadThePage(){
    window.location.reload();
  } 
  
jQuery( document ).ready(function( $ ) {
    $('.search0result').hide();
    $button = $('#submit-tracking');
  
    $('.tracking').click(function (e) {
      $('.search-form').toggle();
    })
  
    $button.click(function (e) {
      $('.search0result').show();
      var tracking_no = $('#myInput').val().replace(/\n/g, ',');
      var serach_by = $('input[name="searchRadios"]:checked').val();
    // alert(serach_by);
    
    $.getJSON('http://139.59.60.106/api/v1/track.json?tracking_no='+tracking_no+'&search_by='+serach_by+'&show_stages=yes', function (data) {
  
        $('.track_rslt').html('');
        $('.info-table tbody').html('');
  
        if (data && data.length) {
          $.each(data, function (_index, docket) {
  
            if (docket.docket_info.length) {
              $.each(docket.docket_info, function (index, value) {
                $tr = $('<tr>');
                $tr.append($('<th>').html(value[0]));
                $tr.append($('<td>').html(value[1]));
                $('.info-table tbody').append($tr);
              });
            }
  
            if (docket.docket_events.length) {
              $.each(docket.docket_events, function (index, value) {
                $tr = $('<tr>');
                $tr.append($('<td>').html(formatDate(new Date(value.event_at))));
                $tr.append($('<td>').html(value.event_location));
                $tr.append($('<td>').html(value.event_description));
                $('.track_rslt').append($tr)
              });
            } else {
              $tr = $('<tr>');
              $tr.append($('<td colspan="3">').html(docket.tracking_no + '= Tracking details will be available shortly, or else click on the forwarding number'));
              $('.track_rslt').append($tr)
            }
            if (data.length > (_index + 1)) {
              $('.track_rslt').append($('<tr>').append($('<td colspan="3">').html('-')))
  
            }
          });
        }
      });
    });
  
  });
  