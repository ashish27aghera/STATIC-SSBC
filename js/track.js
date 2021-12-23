function formatDate(date) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + '/' + (monthIndex + 1) + '/' + year;
}

jQuery(document).ready(function($) {
    $('.track-result').hide();
    $('#submit_tracking').click(function(e) {
        var tracking_no = $('#myInput').val().replace(/\n/g, ',');
        if (tracking_no) {
            $('.track-result').show();
        } else {
            alert("Please Insert a Tracking Number");
            $('#myInput').val() = "";
        }
        var serach_by = "";
        $.getJSON('https://admin.ssbc.co/api/v1/track.json?tracking_no=' + tracking_no + '&search_by=' + serach_by + '&show_stages=yes', function(data) {
            $('.tracking-data').html('');
            if (data && data.length) {
                $.each(data, function(_index, docket) {

                    if (_index == 0) {
                        var is_active = 1;
                    } else {
                        var is_active = 0;
                    }
                    if (docket.docket_info.length) {
                        var tr_toappend = '<div class="accordion-header  ' + (is_active == 1 ? "active" : "") + '">' +
                            '<h2>AWB No.: ' + docket.tracking_no + '</h2>' +
                            '<h2>Status: ' + docket.docket_info[4][1] + '</h2>' +
                            '<span class="accordion-toggle"><i class="fa ' + (is_active == 1 ? "fa-chevron-up" : "fa-chevron-down") + ' fa_icon"></i></span>' +
                            '</div>' +
                            '<div class="accordion-body  ' + (is_active == 1 ? "active" : "") + '">' +
                            '<h3 class="text-center">AWB No.: ' + docket.tracking_no + '</h3>' +
                            '<h5>Tracking Information</h5>' +
                            '<div class="tracking-info">' +
                            '<table>' +
                            '<thead>' +
                            '<tr>' +
                            '<th>AWB No.</th>' +
                            '<th>Booking Date</th>' +
                            '<th>Consignee Name</th>' +
                            '<th>Destination</th>' +
                            '<th>No. of Pieces</th>' +
                            '<th>Status</th>' +
                            '<th>Delivery Date</th>' +
                            '<th>Delivery Time</th>' +
                            '<th>Receiver Name</th>' +
                            '<th>Forwarding No.</th>' +
                            '<th>View POD</th>' +
                            '</tr>' +
                            '</thead>' +
                            '<tbody>' +
                            '<tr><td>' + (docket.tracking_no) + '</td><td>' +
                            (formatDate(new Date(docket.docket_info[1][1]))) +
                            '</td><td>' + (docket.docket_info[2][1]) +
                            '</td><td>' + (docket.docket_info[3][1]) +
                            '</td><td>' + docket.pcs +
                            '</td><td>' + (docket.docket_info[4][1]) +
                            '</td><td>' + ((isNaN(new Date(docket.docket_info[5][1])) || (new Date(docket.docket_info[5][1])) == "undefined") ? " " : (formatDate(new Date(docket.docket_info[5][1])))) +
                            '</td><td>' + (docket.docket_info[5][1] ? docket.docket_info[5][1].split(' ')[2] : " ") +
                            '</td><td>' + (docket.docket_info[6][1] ? docket.docket_info[6][1] : "") +
                            '</td><td>' + (docket.forwarding_url ? '<a href="' + docket.forwarding_url + '" target="_blank"> ' + docket.forwarding_no + ' </a>' : '' + docket.forwarding_no + '') +
                            '</td><td>' + (docket.pod_image ? '<a href="' + docket.pod_image + '" target="_blank"> View </a>' : "") +
                            '</tbody>' + '</table>' + '</div>';
                    }

                    if (docket.docket_events.length) {
                        tr_toappend +=
                            '<h5>Delivery Information</h5>' +
                            '<div class="delivery-info">' +
                            '<table>' +
                            '<thead>' +
                            '<tr>' +
                            '<th>Date</th>' +
                            '<th>Time</th>' +
                            '<th>Location</th>' +
                            '<th>Activity</th>' +
                            '<th>Remarks</th>' +
                            '</tr>' +
                            '</thead>' +
                            '<tbody>';
                        $.each(docket.docket_events, function(index, value) {
                            tr_toappend +=
                                '<tr>' +
                                '<td>' + formatDate(new Date(value.event_at)) + '</td>' +
                                '<td>' + (value.event_at ? value.event_at.split('T')[1].slice(0, 5) : " ") + '</td>' +
                                '<td>' + (value.event_location) + '</td>' +
                                '<td>' + (value.event_description) + '</td>' +
                                '<td>' + (value.event_remark ? value.event_remark : "") + '</td>' +
                                '</tr>';
                        });
                        tr_toappend += '</tbody>' + '</table>' + '</div>' + '</div>';

                        if (tr_toappend) {
                            $('.tracking-data').append(tr_toappend);
                        }

                    } else {
                        $('.tracking-data').append('<div class="invalid-record"><h5>Invalid AWB: ' + docket.tracking_no + '</h5></div>');
                    }
                });
            }
            $('#myInput').keypress(function(event) {
                if (event.keyCode == 13) {
                    $('#submit_tracking').click();
                    return false;
                }
            });
        });
    });
});