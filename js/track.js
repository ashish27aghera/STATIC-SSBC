function formatDate(date) {
    // var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return day + '/' + (monthIndex + 1) + '/' + year;
}

jQuery(document).ready(function ($) {
    $('.track-result').hide();
    var currentURL = window.location.href;
    var url = new URL(currentURL);
    var tracking_no = url.searchParams.get("tracking_no");
    var search_by = url.searchParams.get("searchSelected");
    if (search_by == 1) {
        var searchtype = "tracking_no";
    } else if (search_by == 6) {
        var searchtype = "forwarding_no1";
    } else if (search_by == 2) {
        var searchtype = "reference_no";
    }
    if (tracking_no) {
        var tracking_no = tracking_no.trim().split(/[ ,]+/);
        if (tracking_no.length > 50) {
            alert("Up to 10 tracking numbers are allowed at a time");
            $('.tracking-data').html('');
            return false;
        }
        $('.track-result').show('slow', () => {
            $('.track-result').get(0).scrollIntoView();
        });
    } else {
        return false;
    }
    jQuery.getJSON('https://admin.ssbc.co/api/tracking_api/get_tracking_data?' + searchtype + '=' + tracking_no + '&customer_code=superadmin&company=SSBC&api_company_id=6', function (data) {
        jQuery('.tracking-data').html('');
        if (data && data.length) {
            jQuery.each(data, function (_index, docket) {
                var lbl_no = (search_by == 1 ? 'AWB: ' + docket.tracking_no : search_by == 2 ? 'Reference: ' + docket.reference_no : search_by == 3 ? 'Order: ' + docket.order_no : search_by == 4 ? 'Eway Bill: ' + docket.eway_bill_no : search_by == 5 ? 'Invoice: ' + docket.invoice_no : search_by == 6 ? 'Forwarding : ' + docket.forwarding_no : 'Forwarding 2: ' + docket.forwarding_no2);
                if (docket.docket_info) {
                    if (docket.docket_info.length) {
                        if (_index == 0) {
                            var is_active = 1;
                        } else {
                            var is_active = 0;
                        }
                        var tr_toappend = '<div class="accordion-header  ' + (is_active == 1 ? "active" : "") + '">' +
                            '<h2>' + lbl_no + '</h2>' +
                            '<h2>Status: ' + docket.docket_info[4][1] + '</h2>' +
                            '<span class="accordion-toggle"><i class="fa ' + (is_active == 1 ? "fa-chevron-up" : "fa-chevron-down") + ' fa_icon"></i></span>' +
                            '</div>' +
                            '<div class="accordion-body  ' + (is_active == 1 ? "active" : "") + '">' +
                            '<h3 class="text-center">' + lbl_no + '</h3>' +
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
                            '<tr><td>' + (docket.docket_info[0][1]) +
                            '</td><td>' + (formatDate(new Date(docket.docket_info[1][1]))) +
                            '</td><td>' + (docket.docket_info[2][1]) +
                            '</td><td>' + (docket.docket_info[3][1]) +
                            '</td><td>' + (docket.pcs ? docket.pcs : "") +
                            '</td><td>' + (docket.docket_info[4][1]) +
                            '</td><td>' + ((isNaN(new Date(docket.docket_info[5][1].split(' ')[0])) || (new Date(docket.docket_info[5][1].split(' ')[0])) == "undefined") ? " " : (formatDate(new Date(docket.docket_info[5][1].split(' ')[0])))) +
                            '</td><td>' + (docket.docket_info[5][1] ? docket.docket_info[5][1].split(' ')[1] : "") +
                            '</td><td>' + (docket.docket_info[6][1]) +
                            '</td><td>' + (docket.forwarding_url ? '<a href="' + docket.forwarding_url + '" target="_blank" style="color: black;font-weight: 600;"><u> ' + docket.forwarding_no + '</u></a>' : '' + docket.forwarding_no + '') +
                            '</td><td>' + (docket.pod_image ? '<a href="' + docket.pod_image + '" target="_blank"> View </a>' : "") +
                            '</td></tr>' +
                            '</tbody>' +
                            '</table>' +
                            '</div>';
                    }
                }
                if (docket.docket_events) {
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
                        jQuery.each(docket.docket_events, function (index, value) {
                            tr_toappend +=
                                '<tr>' +
                                '<td>' + (value.event_at ? formatDate(new Date(value.event_at.split(' ')[0])) : " ") + '</td>' +
                                '<td>' + (value.event_at ? value.event_at.split(' ')[1].slice(0, 5) : " ") + '</td>' +
                                '<td>' + (value.event_location) + '</td>' +
                                '<td>' + (value.event_description) + '</td>' +
                                '<td>' + (value.event_remark ? value.event_remark : "") + '</td>' +
                                '</tr>';
                        });
                        tr_toappend += '</tbody>' + '</table>' + '</div>' + '</div>';

                        if (tr_toappend) {
                            jQuery('.tracking-data').append(tr_toappend);
                        }
                    } else {
                        jQuery('.tracking-data').append('<div class="invalid-record"><h5>Invalid No.: ' + docket.tracking_no + '</h5></div>');
                    }
                }
            });
        }
        jQuery('.accordion-header').click(function () {
            if ($(this).hasClass("active")) {
                $('.accordion-header').removeClass('active');
                $('.accordion-body').removeClass('active');
                $('.fa_icon').removeClass('fa-chevron-up').addClass("fa-chevron-down");
            } else {
                $('.accordion-header').removeClass('active');
                $('.accordion-body').removeClass('active');
                $(this).addClass('active');
                $(this).next('.accordion-body').addClass('active');
                $('.fa_icon').removeClass('fa-chevron-up').addClass("fa-chevron-down");
                $(this).find(".fa_icon").addClass("fa-chevron-up").removeClass('fa-chevron-down');
            }
        });
    });
});