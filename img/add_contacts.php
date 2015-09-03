<?php include 'functions.php';
include 'config.php';
include 'header.php';

 if(isset($_POST['submit'])){

	$form_data = array(
	       'Name' => $_POST['cname'],
	       'Mobile' => $_POST['cmobile'],
	       'Landline' => $_POST['clandline'],
	       'Email' => $_POST['cemail'],
	       'bussinesscardimage_path' => $_POST['cbussi'],
	       'Key_contact' => $_POST['ckeycon'],
	       'Supplier_id' => $_POST['csupplier'],
	       'Position' => $_POST['cposition'],
	       'Skype' => $_POST['cskype'],
	       'Wechat' => $_POST['cwechat'],
	      'QQ' => $_POST['cqq'],
	       'WhatsApp' => $_POST['cwhats']
	       
	      );
	
	
               
	  dbRowInsert('contacts', $form_data);
	header("Location: contacts.php");
	
	   
 }
 ?>



<style>
       .ui-button-icon-primary{
	      top:0%;
       }
</style>
<div id="main" role="main">
<div id="content">
<!-- widget grid -->
<section id="widget-grid" class="">


	<!-- START ROW -->

	<div class="row">


		<!-- NEW COL START -->
		<article class="col-lg-12">
			
			<!-- Widget ID (each widget will need unique ID)-->
			<div id="wid-id-1" class="jarviswidget jarviswidget-color-blueDark jarviswidget-sortable" data-widget-deletebutton="false" data-widget-editbutton="false" >
				<!-- widget options:
					usage: <div class="jarviswidget" id="wid-id-0" data-widget-editbutton="false">
					
					data-widget-colorbutton="false"	
					data-widget-editbutton="false"
					data-widget-togglebutton="false"
					data-widget-deletebutton="false"
					data-widget-fullscreenbutton="false"
					data-widget-custombutton="false"
					data-widget-collapsed="true" 
					data-widget-sortable="false"
					
				-->
				<header>
					<span class="widget-icon"> <i class="fa fa-edit"></i> </span>
					<h2>Add New Contacts</h2>				
					
				</header>

				<!-- widget div-->
				<div>
					
					<!-- widget edit box -->
					<div class="jarviswidget-editbox">
						<!-- This area used as dropdown edit box -->
						
					</div>
					<!-- end widget edit box -->
					
					<!-- widget content -->
					<div class="widget-body no-padding">
						
						<form action="add_contacts.php"  enctype="multipart/form-data" method="POST" id="smart-form-register" class="smart-form">
							

							<fieldset>
								
								
								
								<div class="row">
								<section class="col col-6">
										<label class="label">Contact Name</label>
										<label class="input"> 
											<input type="text" name="cname">
										</label>
								</section>
								<section class="col col-6">
										<label class="label">Mobile</label>
										<label class="input"> 
											<input type="text" name="cmobile">
										</label>
								</section>
								
								
								</div>
								<div class="row">
								<section class="col col-6">
										<label class="label">Landline</label>
										<label class="input"> 
											<input type="text" name="clandline">
										</label>
								</section>
								
								<section class="col col-6">
										<label class="label">Email</label>
										<label class="input"> 
											<input type="text" name="cemail">
										</label>
								</section>
								</div>
								<div class="row">
								<section class="col col-6">
										<label class="label">Bussiness Card Image Path</label>
										<label class="input"> 
											<input type="text" name="cbussi">
										</label>
								</section>
								
								<section class="col col-6">
										<label class="label">Key Contact</label>
										<div class="inline-group">
<label class="radio"><input type="radio" name="ckeycon" value="1"><i></i>Yes</label>
<label class="radio"><input type="radio" name="ckeycon" value="0"><i></i>No</label>
										</div>
								    
										    
											<!--<input type="text" name="ckeycon">-->
										
								</section>
								</div>
								
								
								<div class="row">
								<section class="col col-6">
										<label class="label">Select Supplier</label>
										<label class="select"> 
										    <select name="csupplier">
										    <option disabled="" selected="work" value="0">Select a Supplier</option>
										    <?php
										    $fetsql3= mysql_query("SELECT * FROM suppliers");
										    while($row=mysql_fetch_array($fetsql3)){
										    $sid = $row['id'];
										    $sname = $row['Name'];
										    ?>
										    <option value="<?php echo $sid; ?>"><?php echo $sname; ?></option>
										    <?php 
										    }
										    ?>
										    </select>	
										    </label>
																		    </section>
																		    
																		    <section class="col col-6">
										<label class="label">Position</label>
										<label class="input"> 
											<input type="text" name="cposition">
										</label>
								</section>
																		    
																		    
								</div>
								<div class="row">
								<section class="col col-6">
										<label class="label">Skype</label>
										<label class="input"> 
											<input type="text" name="cskype">
										</label>
								</section>
								<section class="col col-6">
										<label class="label">Wechat</label>
										<label class="input"> 
											<input type="text" name="cwechat">
										</label>
								</section>
								</div>
								
								<div class="row">
								<section class="col col-6">
										<label class="label">QQ</label>
										<label class="input"> 
											<input type="text" name="cqq">
										</label>
								</section>
								<section class="col col-6">
										<label class="label">WhatsApp</label>
										<label class="input"> 
											<input type="text" name="cwhats">
										</label>
								</section>
								</div>
							</fieldset>

							
							<footer>
							       <button class="btn btn-default" onclick="window.history.back();" type="button"> Cancel </button>
								<a href="#ajax/datatables.php"><input type="submit" name="submit" value='submit' class="btn btn-primary">

								</input> </a>
								
							</footer>
						</form>						
						
					</div>
					<!-- end widget content -->
					
				</div>
				<!-- end widget div -->
				
			</div>
			<!-- end widget -->
		

		</article>
		<!-- END COL -->		

	</div>

	<!-- END ROW -->

</section>
<!-- end widget grid -->
</div>
</div>
<!-- Modal -->


<meta http-equiv="content-type" content="text/php; charset=UTF-8"/>



<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.8.9/themes/base/jquery-ui.css" type="text/css" />
<link rel="stylesheet" href="js1/jquery.ui.plupload/css/jquery.ui.plupload.css" type="text/css" />

<!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>-->
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js"></script>

<!-- production -->
<script type="text/javascript" src="js1/plupload.full.min.js"></script>
<script type="text/javascript" src="js1/jquery.ui.plupload/jquery.ui.plupload.js"></script>

<!-- debug 
<script type="text/javascript" src="../../js/moxie.js"></script>
<script type="text/javascript" src="../../js/plupload.dev.js"></script>
<script type="text/javascript" src="../../js/jquery.ui.plupload/jquery.ui.plupload.js"></script>
-->


<!--

<?php/* ($_POST);*/?>

<form id="form" method="post" action="dump.php">
	
</form>-->

<script type="text/javascript">
// Initialize the widget when the DOM is ready
$(function() {
	$("#uploader").plupload({
		// General settings
		runtimes : 'html5,flash,silverlight,html4',
		url : 'upload.php',

		// User can upload no more then 20 files in one go (sets multiple_queues to false)
		max_file_count: 20,
		
		chunk_size: '1mb',

		// Resize images on clientside if we can
		resize : {
			width : 200, 
			height : 200, 
			quality : 90,
			crop: true // crop to exact dimensions
		},
		
		filters : {
			// Maximum file size
			max_file_size : '1000mb',
			// Specify what files to browse for
			mime_types: [
				{title : "Image files", extensions : "jpg,gif,png"},
				{title : "Zip files", extensions : "zip"}
			]
		},

		// Rename files by clicking on their titles
		rename: true,
		
		// Sort files
		sortable: true,

		// Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
		dragdrop: true,

		// Views to activate
		views: {
			list: true,
			thumbs: true, // Show thumbs
			active: 'thumbs'
		},

		// Flash settings
		flash_swf_url : 'js1/Moxie.swf',

		// Silverlight settings
		silverlight_xap_url : 'js1/Moxie.xap',
		init: attachCallbacks
		
	});

	function attachCallbacks(uploader) {
uploader.bind('FileUploaded', function(up, file, response) {
if( (uploader.total.uploaded + 1) == uploader.files.length)
{
window.location = '/content/groupedit/<?= $container_id; ?>';
}
});
};
	
	
	
	 alert(file.name);
	
	
	
	function attachCallbacks(uploader) {
        

		 fileempty();

        uploader.bind('FileUploaded', function(up, file, response) {
            console.log("file uploaded: "+file.id);
            console.log(response);
             alert(file.name);
            
            var res = response.response;
            
            console.log(res);
            
             var objResponse = jQuery.parseJSON(res);
            
             fileadd(objResponse.result);
			 
			  if( (uploader.total.uploaded) == uploader.files.length)
				  {
				 alert(file.name);
				 
				 $("#file_upload").val(file.name);
				 //  
					
				//	$('#add_submit').prop('disabled',false);
				  		
				  }
             
          
        });
    }	

function fileadd (a) {
	
	var file_val = $("#file_upload").val();
		if(file_val!="")
		    $("#file_upload").val(file_val+','+a);
		else
		    $("#file_upload").val(a);
	    
  
}

function fileempty()
{
	$("#file_upload").val('');
}



});
	
	

	// Handle the case when form was submitted before uploading has finished
	$('#form').submit(function(e) {
		// Files in queue upload them first
		if ($('#uploader').plupload('getFiles').length > 0) {

			// When all files are uploaded submit form
			$('#uploader').on('complete', function() {
				$('#form')[0].submit();
			});

			$('#uploader').plupload('start');
		} else {
			alert("You must have at least one file in the queue.");
		}
		return false; // Keep the form from submitting
	});
</script>


<!-- SCRIPTS ON PAGE EVENT -->
<script type="text/javascript">
	
	// DO NOT REMOVE : GLOBAL FUNCTIONS!
	pageSetUp();
	
	
	// PAGE RELATED SCRIPTS

	// Load form valisation dependency 
	loadScript("js/plugin/jquery-form/jquery-form.min.js", runFormValidation);
	
	
	// Registration validation script
	function runFormValidation() {
		

		var $checkoutForm = $('#checkout-form').validate({
		// Rules for form validation
			rules : {
				fname : {
					required : true
				},
				lname : {
					required : true
				},
				email : {
					required : true,
					email : true
				},
				phone : {
					required : true
				},
				country : {
					required : true
				},
				city : {
					required : true
				},
				code : {
					required : true,
					digits : true
				},
				address : {
					required : true
				},
				name : {
					required : true
				},
				card : {
					required : true,
					creditcard : true
				},
				cvv : {
					required : true,
					digits : true
				},
				month : {
					required : true
				},
				year : {
					required : true,
					digits : true
				}
			},
	
			// Messages for form validation
			messages : {
				sname : {
					required : 'Please enter your name'
				},
				saddress : {
					required : 'Please enter your address'
				},
				stele : {
					required : 'Please enter your telephone number'
				},
				
				sfax : {
					required : 'Please enter your fax',
					digits : 'Digits only'
				},
				semail : {
					required : 'Please enter your email address',
					email : 'Please enter a VALID email address'
				},
				
				swebsite : {
					required : 'Please enter your Website'
				},
				code : {
					required : 'Please enter code',
					digits : 'Digits only please'
				},
				address : {
					required : 'Please enter your full address'
				},
				name : {
					required : 'Please enter name on your card'
				},
				card : {
					required : 'Please enter your card number'
				},
				cvv : {
					required : 'Enter CVV2',
					digits : 'Digits only'
				},
				month : {
					required : 'Select month'
				},
				year : {
					required : 'Enter year',
					digits : 'Digits only please'
				}
			},
	
			// Do not change code below
			errorPlacement : function(error, element) {
				error.insertAfter(element.parent());
			}
		});
				
		var $registerForm = $("#smart-form-register").validate({

			// Rules for form validation
			rules : {
				vname : {
				   minlength : 3,
					required : true
				},
				vmake : {
				   minlength : 3,
					required : true,
					
				},
				password : {
					required : true,
					minlength : 3,
					maxlength : 20
				},
				passwordConfirm : {
					required : true,
					minlength : 3,
					maxlength : 20,
					equalTo : '#password'
				},
				firstname : {
					required : true
				},
				lastname : {
					required : true
				},
				gender : {
					required : true
				},
				terms : {
					required : true
				}
			},

			// Messages for form validation
			messages : {
				vname : {
					required : 'Please enter max 3 letters'
				},
				email : {
					required : 'Please enter your email address',
					email : 'Please enter a VALID email address'
				},
				password : {
					required : 'Please enter your password'
				},
				passwordConfirm : {
					required : 'Please enter your password one more time',
					equalTo : 'Please enter the same password as above'
				},
				firstname : {
					required : 'Please select your first name'
				},
				lastname : {
					required : 'Please select your last name'
				},
				gender : {
					required : 'Please select your gender'
				},
				terms : {
					required : 'You must agree with Terms and Conditions'
				}
			},

			// Do not change code below
			errorPlacement : function(error, element) {
				error.insertAfter(element.parent());
			}
		});

		var $reviewForm = $("#review-form").validate({
			// Rules for form validation
			rules : {
				name : {
					required : true
				},
				email : {
					required : true,
					email : true
				},
				review : {
					required : true,
					minlength : 20
				},
				quality : {
					required : true
				},
				reliability : {
					required : true
				},
				overall : {
					required : true
				}
			},

			// Messages for form validation
			messages : {
				name : {
					required : 'Please enter your name'
				},
				email : {
					required : 'Please enter your email address',
					email : '<i class="fa fa-warning"></i><strong>Please enter a VALID email addres</strong>'
				},
				review : {
					required : 'Please enter your review'
				},
				quality : {
					required : 'Please rate quality of the product'
				},
				reliability : {
					required : 'Please rate reliability of the product'
				},
				overall : {
					required : 'Please rate the product'
				}
			},

			// Do not change code below
			errorPlacement : function(error, element) {
				error.insertAfter(element.parent());
			}
		});
		
		var $commentForm = $("#comment-form").validate({
			// Rules for form validation
			rules : {
				name : {
					required : true
				},
				email : {
					required : true,
					email : true
				},
				url : {
					url : true
				},
				comment : {
					required : true
				}
			},

			// Messages for form validation
			messages : {
				name : {
					required : 'Enter your name',
				},
				email : {
					required : 'Enter your email address',
					email : 'Enter a VALID email'
				},
				url : {
					email : 'Enter a VALID url'
				},
				comment : {
					required : 'Please enter your comment'
				}
			},

			// Ajax form submition
			submitHandler : function(form) {
				$(form).ajaxSubmit({
					success : function() {
						$("#comment-form").addClass('submited');
					}
				});
			},

			// Do not change code below
			errorPlacement : function(error, element) {
				error.insertAfter(element.parent());
			}
		});

		var $contactForm = $("#contact-form").validate({
			// Rules for form validation
			rules : {
				name : {
					required : true
				},
				email : {
					required : true,
					email : true
				},
				message : {
					required : true,
					minlength : 10
				}
			},

			// Messages for form validation
			messages : {
				name : {
					required : 'Please enter your name',
				},
				email : {
					required : 'Please enter your email address',
					email : 'Please enter a VALID email address'
				},
				message : {
					required : 'Please enter your message'
				}
			},

			// Ajax form submition
			submitHandler : function(form) {
				$(form).ajaxSubmit({
					success : function() {
						$("#contact-form").addClass('submited');
					}
				});
			},

			// Do not change code below
			errorPlacement : function(error, element) {
				error.insertAfter(element.parent());
			}
		});

		var $loginForm = $("#login-form").validate({
			// Rules for form validation
			rules : {
				email : {
					required : true,
					email : true
				},
				password : {
					required : true,
					minlength : 3,
					maxlength : 20
				}
			},

			// Messages for form validation
			messages : {
				email : {
					required : 'Please enter your email address',
					email : 'Please enter a VALID email address'
				},
				password : {
					required : 'Please enter your password'
				}
			},

			// Do not change code below
			errorPlacement : function(error, element) {
				error.insertAfter(element.parent());
			}
		});

		var $orderForm = $("#order-form").validate({
			// Rules for form validation
			rules : {
				name : {
					required : true
				},
				email : {
					required : true,
					email : true
				},
				phone : {
					required : true
				},
				interested : {
					required : true
				},
				budget : {
					required : true
				}
			},

			// Messages for form validation
			messages : {
				name : {
					required : 'Please enter your name'
				},
				email : {
					required : 'Please enter your email address',
					email : 'Please enter a VALID email address'
				},
				phone : {
					required : 'Please enter your phone number'
				},
				interested : {
					required : 'Please select interested service'
				},
				budget : {
					required : 'Please select your budget'
				}
			},

			// Do not change code below
			errorPlacement : function(error, element) {
				error.insertAfter(element.parent());
			}
		});

		// START AND FINISH DATE
		$('#startdate').datepicker({
			dateFormat : 'dd.mm.yy',
			prevText : '<i class="fa fa-chevron-left"></i>',
			nextText : '<i class="fa fa-chevron-right"></i>',
			onSelect : function(selectedDate) {
				$('#finishdate').datepicker('option', 'minDate', selectedDate);
			}
		});
		
		$('#finishdate').datepicker({
			dateFormat : 'dd.mm.yy',
			prevText : '<i class="fa fa-chevron-left"></i>',
			nextText : '<i class="fa fa-chevron-right"></i>',
			onSelect : function(selectedDate) {
				$('#startdate').datepicker('option', 'maxDate', selectedDate);
			}
		});


	}; 
</script>
