<!doctype html>
<html lang="en">

<head>
    <?php include 'includes/inc_head.php'; ?>
</head>

<body>
    <?php include 'includes/inc_header.php'; ?>

    <section class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <h3>
                        Track Your Shipment
                    </h3>
                    <p class="page-breadcrumb">
                        <a href="index.php">Home</a> / Track Your Shipment
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-content-block section-contact-block track-area">
        <div class="container">
            <div class="row section-heading-wrapper">
                <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                    <h3>Track</h3>
                    <h2 class="text-uppercase">Your Shipment</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 wow fadeInUp">
                    <form method="get">
                        <div class="track-form">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                    <select name="searchSelected" id="searchSelected" class="form-control">
                                        <option value="1" selected="selected">AWB No.</option>
                                        <option value="6">Forwarding No.</option>
                                        <option value="2">Reference No.</option>
                                    </select>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group">
                                    <input type="text" name="tracking_no" id="myInput" class="form-control" placeholder="Enter your awb number">
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 form-group text-center">
                                    <button type="submit" id="submit_tracking" class="btn btn-theme" style="width:100%;">Track</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 track-block track-result">
                    <div class="accordion tracking-data"></div>
                </div>
            </div>
        </div>
    </section>
    <?php include 'includes/inc_footer.php'; ?>
    <?php include 'includes/inc_footer_scripts.php'; ?>
</body>

</html>