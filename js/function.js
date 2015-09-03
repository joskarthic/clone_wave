
var showroom_name=localStorage.getItem("showroom_name");
var user_name=localStorage.getItem("user_name");
var showroom_id=localStorage.getItem("showroom_id");
//if(user_name==""){
//	window.open('index.html', '_blank', 'location=yes');
//}
//if(user_name!=""){
	document.getElementById("showroom_name").innerHTML=showroom_name;
	document.getElementById("user_name").innerHTML=user_name;
//	window.open('scan.html', '_blank', 'location=yes');
//}
function logout(){
	localStorage.clear();
	window.open('index.html', '_blank','location=no');
	
}

function add_customer() {
    var showroom_id=localStorage.getItem("showroom_id");
    var user_id=localStorage.getItem("user_id");
     window.open('add_customers.html', '_blank','location=no');
}

function Local_item() {
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100*100*1024);
	db.transaction(function (tx){
		var QRcode = document.getElementById("QRcode").value;
		tx.executeSql('SELECT * FROM productlist where item_code = ? collate NOCASE', [QRcode],function (tx, results) {
			var fetch_len = results.rows.length;
			if (fetch_len==1) {
				localStorage.setItem("QRcode", QRcode);
				window.open('overview.html', '_blank','location=no');
			}
			else
			{
				alert("Item Code Does Not Exist");
			}
		});
	});
}

function myFunction() {
    var QRcode=document.getElementById("QRcode").value;
     var networkState = navigator.network.connection.type;
var states = {};
states[Connection.UNKNOWN] = 'Unknown connection';
states[Connection.ETHERNET] = 'Ethernet connection';
states[Connection.WIFI] = 'WiFi connection';
states[Connection.CELL_2G] = 'Cell 2G connection';
states[Connection.CELL_3G] = 'Cell 3G connection';
states[Connection.CELL_4G] = 'Cell 4G connection';
states[Connection.NONE] = 'No network connection';
//alert('Connection type: ' + states[networkState]);
        
        var network_status = states[networkState];
        //alert(network_status);

        if(network_status=='No network connection'){
		
		Local_item();
		
		}else{
		Local_item();
		}


        
       /* if(network_status=='No network connection'){
            if(QRcode!=''){
                localStorage.setItem("QRcode", QRcode);
				window.open('overview.html', '_blank', 'location=yes');
            
           }
        }else{
            if(QRcode!=''){
				
			localStorage.setItem("QRcode", QRcode);
            window.open('overview.html', '_blank', 'location=yes');
            //  var showroom_id=localStorage.getItem("showroom_id");
            //  var user_id=localStorage.getItem("user_id");
            //window.open('http://wave2dev.elasticbeanstalk.com/app/overview.php?qrcode='+QRcode+'&user_id='+user_id+'&showroom_id='+showroom_id, '_blank', 'location=yes');
           }
        }*/
}

            app.initialize();
	    
	    
	    

function onDeviceReady() {
	var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100*100*1024);
	db.transaction(function (tx){
		var name = document.getElementById("uname").value;
		tx.executeSql("select * FROM show_room,users WHERE show_room.showroom_id=users.showroom_id and username = ? and password = ? ", [name,md5pwd], function (tx, results) {
			var fetch_len = results.rows.length;
			if (fetch_len==1) {
				var role = results.rows.item(0).role;
				if (role=='Admin' || role=='Wave Manager') {
					localStorage.setItem("all_price", 'TRUE');
				}else
				{
					localStorage.setItem("all_price", 'FALSE');
				}
				username = results.rows.item(0).username;
				showroom_id = results.rows.item(0).showroom_id;
				user_id = results.rows.item(0).user_id;
				showroom_name = results.rows.item(0).showroom_name;
				currency = results.rows.item(0).currency;
				//all_price = results.rows.item(i).all_price;
				localStorage.setItem("user_name", username);
				localStorage.setItem("showroom_id",showroom_id);
				localStorage.setItem("user_id",user_id);
				localStorage.setItem("showroom_name", showroom_name);
				localStorage.setItem("currency", currency);
				window.open('scan.html', '_blank','location=no');
			}
			else
			{
				alert("Incorrect Username and Password");
			}
		});
	});
}

            
function formsubmit() {
	
	var networkState = navigator.network.connection.type;
	var states = {};
	states[Connection.UNKNOWN] = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI] = 'WiFi connection';
	states[Connection.CELL_2G] = 'Cell 2G connection';
	states[Connection.CELL_3G] = 'Cell 3G connection';
	states[Connection.CELL_4G] = 'Cell 4G connection';
	states[Connection.NONE] = 'No network connection';
	//alert('Connection type: ' + states[networkState]);
        
        var network_status = states[networkState];
	
	
	var name = document.getElementById("uname").value;
	var password = document.getElementById("password").value;

	// data : { uname : name, password : password },
	// Returns successful data submission message when the entered information is stored in database.
	//var dataString = 'uname='+name+'&password='+password ;
	if (name == '' || password == '') {
		alert("Please Fill All Fields");
	}
	else {
		if(network_status=='No network connection'){
			md5pwd = calcMD5(password);
			
			onDeviceReady();
		}
		else
		{
			// AJAX code to submit form.
			$.ajax({
				type: "POST",
				url: "http://wave2dev.elasticbeanstalk.com/app/ajax_execution.php",
				data :  'uname='+name+'&password='+password ,
				dataType: "json",
				processData: false,
				success: function(json) {
					if (json.login_status=='Success') {
						window.open('scan.html', '_blank','location=no');
						
						localStorage.setItem("showroom_name", json.showroom_name);
						localStorage.setItem("user_name", json.user_name);
						localStorage.setItem("showroom_id", json.showroom_id);
						localStorage.setItem("currency", json.currency);
						localStorage.setItem("user_id", json.user_id);
						localStorage.setItem("all_price", json.all_price);
						
					}else{
						alert('Incorrect Username and Password');
					}
				}
			});
		}
	}
	return false;
}   

	
