<script src="js/jquery.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/dcalendar.picker.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.backTop.min.js"></script>
<script src="js/waypoints.min.js"></script>
<script src="js/waypoints-sticky.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/jquery.counterup.min.js"></script>
<script src="js/venobox.min.js"></script>
<script src="js/custom-scripts.js"></script>
<script src="js/track.js"></script>
<script>
    jQuery(document).ready(function() {
        var href = window.location.href;
        jQuery('.nav li a').each(function(e, i) {
                jQuery(this).removeClass("link-active");
            if (href.indexOf(jQuery(this).attr('href')) >= 0) {
                jQuery(".nav li a.link-active").removeClass("link-active");
                jQuery(this).addClass("link-active");
                return false;
            }
        });
    });
</script>