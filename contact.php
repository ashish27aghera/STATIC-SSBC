<!doctype html>
<html lang="en">

<head>
    <?php include 'includes/inc_head.php';?>
</head>

<body>
    <?php include 'includes/inc_header.php';?>
        
       <section class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 text-center">
                        <h3>
                            Contact Us
                        </h3>
                        <p class="page-breadcrumb">
                            <a href="index.php">Home</a> / Contact Us
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section-content-block section-contact-block contact-area">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 wow fadeInLeft">
                        <div class="contact-form-block">
                            <h2 class="contact-title">Contact Form</h2>
                            <form role="form" action="#" method="post" class="contact-form">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Name"/>
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email"/>
                                </div>
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="Number"/>
                                </div>
                                <div class="form-group">
                                    <textarea class="form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-theme">Send Now</button>
                                </div>
                            </form>
                        </div>
                    </div> 
                    <div class="col-sm-6 wow fadeInRight">
                        <h2 class="contact-title">Our Location</h2>
                        <div class="section-google-map-block wow fadeInUp">
                            <div id="map_block">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9055021901568!2d73.87399831489293!3d18.533171987401737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f793a1b161%3A0x87ecdf4085cfb6ed!2sSSBC!5e0!3m2!1sen!2sin!4v1632999095107!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div>
                        </div>                          
                    </div>                  
                </div>
            </div>
        </section>

        
        <?php include 'includes/inc_footer.php';?>
    <?php include 'includes/inc_footer_scripts.php';?>
</body>

</html>