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
                            Get Quote
                        </h3>
                        <p class="page-breadcrumb">
                            <a href="index.php">Home</a> / Get Quote
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="section-content-block section-contact-block get-quote-area">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 wow fadeInLeft">
                        <div class="contact-form-block">
                            <h2 class="contact-title">Get Quote</h2>
                            <form role="form" action="#" method="post" class="get-form">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" placeholder="Name">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="email" class="form-control" placeholder="Email">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" placeholder="Number">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" placeholder="Moving From">
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" placeholder="Moving To">
                                </div> 
                                <div class="form-group col-md-6">
                                    <div class="select-style">                                    
                                        <select class="form-control" name="moving size">
                                            <option>Service</option>
                                            <option>1 Bedroom Home or Apartment</option>
                                            <option>2 Bedroom Home or Apartment</option>
                                            <option>3 Bedroom Home or Apartment</option>
                                            <option>4 Bedroom Home </option>
                                            <option>5+ Bedroom Home </option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group col-md-12">
                                    <button type="submit" class="btn btn-theme">Send Now</button>
                                </div>
                            </form>
                        </div>
                    </div>                 
                </div>
            </div>
        </section>

        
        <?php include 'includes/inc_footer.php';?>
    <?php include 'includes/inc_footer_scripts.php';?>
</body>

</html>