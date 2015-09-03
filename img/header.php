	<?php include 'auth.php';
ob_start();
//
//$role=$_SESSION['SESS_USER_ROLE'];
//$_SESSION['vview'];
//$sql="select * from roles where  role_name ='$role'";
//$res=mysql_query($sql);
//$row=mysql_fetch_array($res);
//
//$_SESSION['vview']=$row['vehicles'];
//$_SESSION['vadd']=$row['vadd'];
//$_SESSION['vedit']=$row['vedit'];
//$_SESSION['vdelete']=$row['vdelete'];
//$_SESSION['fmeview']=$row['fuel_meter_entry'];
//$_SESSION['fmeadd']=$row['fmeadd'];
//$_SESSION['fmeedit']=$row['fmeedit'];
//$_SESSION['stview']=$row['service_type'];
//$_SESSION['stadd']=$row['stadd'];
//$_SESSION['stedit']=$row['stedit'];
//$_SESSION['stdelete']=$row['stdelete'];
//$_SESSION['vseview']=$row['vehicle_service_entry'];
//$_SESSION['vseadd']=$row['vseadd'];
//$_SESSION['vseedit']=$row['vseedit'];
//$_SESSION['vsedelete']=$row['vsedelete'];
//$_SESSION['cview']=$row['checklist'];
//$_SESSION['centry']=$row['centry'];
//$_SESSION['cgview']=$row['checklist_group'];
//$_SESSION['cgadd']=$row['cgadd'];
//$_SESSION['cgedit']=$row['cgedit'];
//$_SESSION['cgdelete']=$row['cgdelete'];
//$_SESSION['ciview']=$row['checklist_items'];
//$_SESSION['ciadd']=$row['ciadd'];
//$_SESSION['ciedit']=$row['ciedit'];
//$_SESSION['cidelete']=$row['cidelete'];
//$_SESSION['upiview']=$row['used_parts'];
//$_SESSION['upiadd']=$row['upiadd'];
//$_SESSION['upiedit']=$row['upiedit'];
//$_SESSION['upidelete']=$row['upidelete'];
//$_SESSION['npiview']=$row['new_parts'];
//$_SESSION['npiadd']=$row['npiadd'];
//$_SESSION['npiedit']=$row['npiedit'];
//$_SESSION['npidelete']=$row['npidelete'];
//$_SESSION['wview']=$row['workshops'];
//$_SESSION['wadd']=$row['wadd'];
//$_SESSION['wedit']=$row['wedit'];
//$_SESSION['wdelete']=$row['wdelete'];
//$_SESSION['uview']=$row['users'];
//$_SESSION['uadd']=$row['uadd'];
//$_SESSION['uedit']=$row['uedit'];
//$_SESSION['udelete']=$row['udelete'];
//$_SESSION['sview']=$row['settings'];
//$_SESSION['sadd']=$row['sadd'];
//$_SESSION['sedit']=$row['sedit'];
//$_SESSION['sdelete']=$row['sdelete'];
?>
<!DOCTYPE html>
<html lang="en-us">
	<head>
		<meta charset="utf-8">
		<!--<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">-->

		<title> WAVE </title>
		<meta name="description" content="">
		<meta name="author" content="">
			
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

		<!-- Basic Styles -->
		<link rel="stylesheet" type="text/css" media="screen" href="css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" media="screen" href="css/font-awesome.min.css">

		<!-- SmartAdmin Styles : Please note (smartadmin-production.css) was created using LESS variables -->
		<link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-production.css">
		<link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-skins.css">

		<!-- SmartAdmin RTL Support is under construction
		<link rel="stylesheet" type="text/css" media="screen" href="css/smartadmin-rtl.css"> -->

		<!-- We recommend you use "your_style.css" to override SmartAdmin
		     specific styles this will also ensure you retrain your customization with each SmartAdmin update.
		<link rel="stylesheet" type="text/css" media="screen" href="css/your_style.css"> -->

		<!-- Demo purpose only: goes with demo.js, you can delete this css when designing your own WebApp -->
		<!--<link rel="stylesheet" type="text/css" media="screen" href="css/demo.css">

	-->	<!-- FAVICONS -->
		<link rel="shortcut icon" href="img/favicon/favicon.ico" type="image/x-icon">
		<link rel="icon" href="img/favicon.ico" type="image/x-icon">

		<!-- GOOGLE FONT -->
		<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,300,400,700">

		<!-- Specifying a Webpage Icon for Web Clip 
			 Ref: https://developer.apple.com/library/ios/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html -->
		<link rel="apple-touch-icon" href="img/splash/sptouch-icon-iphone.png">
		<link rel="apple-touch-icon" sizes="76x76" href="img/splash/touch-icon-ipad.png">
		<link rel="apple-touch-icon" sizes="120x120" href="img/splash/touch-icon-iphone-retina.png">
		<link rel="apple-touch-icon" sizes="152x152" href="img/splash/touch-icon-ipad-retina.png">
		
		<!-- iOS web-app metas : hides Safari UI Components and Changes Status Bar Appearance -->
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		
		<!-- Startup image for web apps -->
		<link rel="apple-touch-startup-image" href="img/splash/ipad-landscape.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)">
		<link rel="apple-touch-startup-image" href="img/splash/ipad-portrait.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)">
		<link rel="apple-touch-startup-image" href="img/splash/iphone.png" media="screen and (max-device-width: 320px)">

	</head>
	<body>
		<!-- POSSIBLE CLASSES: minified, fixed-ribbon, fixed-header, fixed-width
			 You can also add different skin classes such as "smart-skin-1", "smart-skin-2" etc...-->
		
		<!-- HEADER -->
		<header id="header">
			<div id="logo-group">

				<!-- PLACE YOUR LOGO HERE -->
				<span id="logo" style="margin-top: 0px;"> <img src="img/logo.png" alt="Sedar"> </span>
				<!-- END LOGO PLACEHOLDER -->

				<!-- Note: The activity badge color changes when clicked and resets the number to 0
				Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications -->
				

				<!-- AJAX-DROPDOWN : control this dropdown height, look and feel from the LESS variable file -->
				<div class="ajax-dropdown">

					<!-- the ID links are fetched via AJAX to the ajax container "ajax-notifications" -->
					

					<!-- notification content -->
					
					<!-- end notification content -->

					<!-- footer: refresh area -->
					<span>
						<button type="button" data-loading-text="<i class='fa fa-refresh fa-spin'></i> Loading..." class="btn btn-xs btn-default pull-right">
							<i class="fa fa-refresh"></i>
						</button> </span>
					<!-- end footer -->

				</div>
				<!-- END AJAX-DROPDOWN -->
			</div>

			<!-- projects dropdown -->
			
			<!-- end projects dropdown -->

			<!-- pulled right: nav area -->
			<div class="pull-right">
				

				<!-- collapse menu button -->
				<div id="hide-menu" class="btn-header pull-right">
					<span> <a href="javascript:void(0);" title="Collapse Menu"><i class="fa fa-reorder"></i></a> </span>
				</div>
				<!-- end collapse menu -->

				<!-- logout button -->
				<div id="logout" class="btn-header transparent pull-right">
					<span> <a href="logout.php" title="Sign Out" data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i class="fa fa-sign-out"></i></a> </span>
				</div>
				<!-- end logout button -->

				<!-- search mobile button (this is hidden till mobile view port) -->
				<div id="search-mobile" class="btn-header transparent pull-right">
					<span> <a href="javascript:void(0)" title="Search"><i class="fa fa-search"></i></a> </span>
				</div>
				<!-- end search mobile button -->

				<!-- input: search field -->
				
				<!-- end input: search field -->

				<!-- fullscreen button -->
					<!-- end fullscreen button -->

				<!-- multiple lang dropdown : find all flags in the image folder -->
				
				<!-- end multiple lang -->

			</div>
			<!-- end pulled right: nav area -->

		</header>
		<!-- END HEADER -->

		<!-- Left panel : Navigation area -->
		<!-- Note: This width of the aside area can be adjusted through LESS variables -->
		<aside id="left-panel">

			<!-- User info -->
			<div class="login-info">
				<span> <!-- User image size is adjusted inside CSS, it should stay as it --> 
					
					<a href="javascript:void(0);" id="show-shortcut">
						
						<span>
							<?php echo $role;?>
							
						</span>
						<i class="fa fa-lg fa-user"></i>
					</a> 
					
				</span>
			</div>
			<!-- end user info -->

			<!-- NAVIGATION : This navigation is also responsive

			To make this navigation dynamic please make sure to link the node
			(the reference to the nav > ul) after page load. Or the navigation
			will not initialize.
			-->
			<nav>
				<!-- NOTE: Notice the gaps after each icon usage <i></i>..
				Please note that these links work a bit different than
				traditional href="" links. See documentation for details.
				-->

				<ul>
					<!--<li class="">
						<a href="ajax/" title=""><i class="fa fa-lg fa-fw fa-building "></i> <span class="menu-item-parent">Room Master</span></a>
					</li>-->
					
					<li>
						<a href="dashboard.php"><i class="fa fa-lg fa-fw fa-home"></i> <span class="menu-item-parent">Dashboard</span></a>
					</li>
					
					<li>
						<a href="suppliers.php"><i class="fa fa-lg fa-fw fa-list-alt"></i> <span class="menu-item-parent">Suppliers</span></a>
					</li>
					<li>
						<a href="contacts.php"><i class="fa fa-lg fa-fw fa-user"></i> <span class="menu-item-parent">Contacts</span></a>
					</li>
					<li>
						<a href="sku.php"><i class="fa fa-lg fa-fw fa-list-alt"></i> <span class="menu-item-parent">SKU</span></a>
					</li>
					<li>
						<a href="pdtcategory.php"><i class="fa fa-lg fa-fw fa-tachometer"></i> <span class="menu-item-parent">Category</span></a>
					</li>
					<li>
						<a href="users.php"><i class="fa fa-lg fa-fw fa-home"></i> <span class="menu-item-parent">Users</span></a>
					</li>
					<li>
						<a href="settings.php"><i class="fa fa-lg fa-fw fa-gear"></i> <span class="menu-item-parent">Settings</span></a>
					</li>
					
					
					
				</ul>
			</nav>
			<span class="minifyme"> <i class="fa fa-arrow-circle-left hit"></i> </span>

		</aside>
		<!-- END NAVIGATION -->

		<!-- MAIN PANEL -->
		<div >

			<!-- RIBBON -->
			<div id="ribbon">

				<span class="ribbon-button-alignment"> <span  data-title="refresh"  rel="tooltip" data-placement="bottom" data-original-title="<i class='text-warning fa fa-warning'></i> Warning! This will reset all your widget settings." data-html="true" data-reset-msg="Would you like to RESET all your saved widgets and clear LocalStorage?"></span> </span>

				<!-- breadcrumb -->
				<ol class="breadcrumb">
					<!-- This is auto generated -->
				</ol>
				
				<!-- end breadcrumb -->
<!--
				 You can also add more buttons to the
				ribbon for further usability

				Example below:-->

				<span class="ribbon-button-alignment pull-right">
				<!--<span id="search" class="btn btn-ribbon hidden-xs" data-title="search"><i class="fa-grid"></i> Change Grid</span>
				<span id="add" class="btn btn-ribbon hidden-xs" data-title="add"><i class="fa-plus"></i> Add</span>
				<span id="search" class="btn btn-ribbon" data-title="search"><i class="fa-search"></i> <span class="hidden-mobile">Search</span></span>
				--><span style="color: #ffffff;font-size: 16pt;font-weight: bold"><?php if($role!="Admin"){ echo $workshop; }?></span>
				</span> 

			</div>
			<!-- END RIBBON -->
<?php //print_r($_POST); ?>
			<!-- MAIN CONTENT -->
			
			
			<!-- END MAIN CONTENT -->

		</div>
		<!-- END MAIN PANEL -->

		<!-- SHORTCUT AREA : With large tiles (activated via clicking user name tag)
		Note: These tiles are completely responsive,
		you can add as many as you like
		-->
		<!--<div id="shortcut">
			<ul>
				<li>
					<a href="#ajax/inbox.html" class="jarvismetro-tile big-cubes bg-color-blue"> <span class="iconbox"> <i class="fa fa-envelope fa-4x"></i> <span>Mail <span class="label pull-right bg-color-darken">14</span></span> </span> </a>
				</li>
				<li>
					<a href="#ajax/calendar.html" class="jarvismetro-tile big-cubes bg-color-orangeDark"> <span class="iconbox"> <i class="fa fa-calendar fa-4x"></i> <span>Calendar</span> </span> </a>
				</li>
				<li>
					<a href="#ajax/gmap-xml.html" class="jarvismetro-tile big-cubes bg-color-purple"> <span class="iconbox"> <i class="fa fa-map-marker fa-4x"></i> <span>Maps</span> </span> </a>
				</li>
				<li>
					<a href="#ajax/invoice.html" class="jarvismetro-tile big-cubes bg-color-blueDark"> <span class="iconbox"> <i class="fa fa-book fa-4x"></i> <span>Invoice <span class="label pull-right bg-color-darken">99</span></span> </span> </a>
				</li>
				<li>
					<a href="#ajax/gallery.html" class="jarvismetro-tile big-cubes bg-color-greenLight"> <span class="iconbox"> <i class="fa fa-picture-o fa-4x"></i> <span>Gallery </span> </span> </a>
				</li>
				<li>
					<a href="#ajax/profile.html" class="jarvismetro-tile big-cubes selected bg-color-pinkDark"> <span class="iconbox"> <i class="fa fa-user fa-4x"></i> <span>My Profile </span> </span> </a>
				</li>
			</ul>
		</div>-->
		<!-- END SHORTCUT AREA -->

		<!--================================================== -->

		<!-- PACE LOADER - turn this on if you want ajax loading to show (caution: uses lots of memory on iDevices)
		<script data-pace-options='{ "restartOnRequestAfter": true }' src="js/plugin/pace/pace.min.js"></script>-->

		<!-- Link to Google CDN's jQuery + jQueryUI; fall back to local -->
		<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.2/jquery.min.js"></script>
		<script>
			if (!window.jQuery) {
				document.write('<script src="js/libs/jquery-2.0.2.min.js"><\/script>');
			}
		</script>

		<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
		<script>
			if (!window.jQuery.ui) {
				document.write('<script src="js/libs/jquery-ui-1.10.3.min.js"><\/script>');
			}
		</script>

		<!-- JS TOUCH : include this plugin for mobile drag / drop touch events
		<script src="js/plugin/jquery-touch/jquery.ui.touch-punch.min.js"></script> -->

		<!-- BOOTSTRAP JS -->
		<script src="js/bootstrap/bootstrap.min.js"></script>

		<!-- CUSTOM NOTIFICATION -->
		<script src="js/notification/SmartNotification.min.js"></script>

		<!-- JARVIS WIDGETS -->
		<script src="js/smartwidgets/jarvis.widget.min.js"></script>

		<!-- EASY PIE CHARTS -->
		<script src="js/plugin/easy-pie-chart/jquery.easy-pie-chart.min.js"></script>

		<!-- SPARKLINES -->
		<script src="js/plugin/sparkline/jquery.sparkline.min.js"></script>

		<!-- JQUERY VALIDATE -->
		<script src="js/plugin/jquery-validate/jquery.validate.min.js"></script>

		<!-- JQUERY MASKED INPUT -->
		<script src="js/plugin/masked-input/jquery.maskedinput.min.js"></script>

		<!-- JQUERY SELECT2 INPUT -->
		<script src="js/plugin/select2/select2.min.js"></script>

		<!-- JQUERY UI + Bootstrap Slider -->
		<script src="js/plugin/bootstrap-slider/bootstrap-slider.min.js"></script>

		<!-- browser msie issue fix -->
		<script src="js/plugin/msie-fix/jquery.mb.browser.min.js"></script>

		<!-- FastClick: For mobile devices: you can disable this in app.js
		<script src="js/plugin/fastclick/fastclick.js"></script> -->

		<!--[if IE 7]>

		<h1>Your browser is out of date, please update your browser by going to www.microsoft.com/download</h1>

		<![endif]-->

		<!-- Demo purpose only -->
		

		<!-- MAIN APP JS FILE -->
		<script src="js/app.js"></script>
	</body>

</html>