var dbShell;

function doLog(s){
    /*
    setTimeout(function(){
        console.log(s);
    }, 3000);
    */
}

function dbErrorHandler(err){
    alert("DB Error: "+err.message + "\nCode="+err.code);
}

function phoneReady(){
    doLog("phoneReady");
    navigator.splashscreen.hide();
    $.mobile.defaultDialogTransition = 'none';
    $.event.special.tap.tapholdThreshold = 4000;
    //First, open our db
    dbShell = window.openDatabase("SedarApp", 2, "SedarApp", 80971520);
    doLog("db was opened");
    //run transaction to create initial tables
    dbShell.transaction(setupTable,dbErrorHandler);
    doLog("ran setup");
    myIntervaledit = setInterval(connetSyncstatus,4000);
}

//I just create our initial table - all one of em
function setupTable(tx){
    doLog("before execute sql...");
    //tx.executeSql('DROP TABLE IF EXISTS settings');
    tx.executeSql("CREATE TABLE IF NOT EXISTS settings(id INTEGER UNIQUE PRIMARY KEY,dbserver,dbport,dbname,dbuname,dbpwd,currency,updated,status NOT NULL default 'n')");
    
    dbShell.transaction(function(tx) {
      tx.executeSql("select id, dbserver, dbport, dbname, dbuname, dbpwd, currency, updated, status from settings where status='y' AND id=1 ",[],function(tx,selected) {
      doLog("render selected entries");
      if (selected.rows.length == 0) {
        
      tx.executeSql("insert into settings(id,dbserver,dbport,dbname,dbuname,dbpwd,currency,updated,'status') values(?,?,?,?,?,?,?,?,?)",[1, 'localhost','80', 'sampleapp','root', 'toor1','AED', new Date(),'y']);
      doLog("after execute sql...");
      alert("Default Settings Installed- you need to configure");
      }
                 
      },dbErrorHandler);
      
      doLog("before execute Product sql...");
    
      tx.executeSql("CREATE TABLE IF NOT EXISTS productlist(id INTEGER,item_code PRIMARY KEY UNIQUE,brand,catalogue_name,category,fabric_width,AED_price_per_SQM,AED_stitching_price,AED_norm_lining_per_SQM,AED_branded_lining_per_SQM,AED_cataluna_blackout_per_SQM,AED_antartica_blackout_per_SQM,AED_bateaux_per_SQM,AED_plata_per_SQM,SALE_AED_price_per_SQM,SALE_AED_stitching_price,SALE_AED_norm_lining_per_SQM,SALE_AED_branded_lining_per_SQM,SALE_AED_cataluna_blackout_per_SQM,SALE_AED_antartica_blackout_per_SQM,SALE_AED_bateaux_per_SQM,SALE_AED_plata_per_SQM,SAR_price_per_SQM,SAR_stitching_price,SAR_norm_lining_per_SQM,SAR_branded_lining_per_SQM,SAR_cataluna_blackout_per_SQM,SAR_antartica_blackout_per_SQM,SAR_bateaux_per_SQM,SAR_plata_per_SQM,SALE_SAR_price_per_SQM,SALE_SAR_stitching_price,SALE_SAR_norm_lining_per_SQM,SALE_SAR_branded_lining_per_SQM,SALE_SAR_cataluna_blackout_per_SQM,SALE_SAR_antartica_blackout_per_SQM,SALE_SAR_bateaux_per_SQM,SALE_SAR_plata_per_SQM,QAR_price_per_SQM,QAR_stitching_price,QAR_norm_lining_per_SQM,QAR_branded_lining_per_SQM,QAR_cataluna_blackout_per_SQM,QAR_antartica_blackout_per_SQM,QAR_bateaux_per_SQM,QAR_plata_per_SQM,SALE_QAR_price_per_SQM,SALE_QAR_stitching_price,SALE_QAR_norm_lining_per_SQM,SALE_QAR_branded_lining_per_SQM,SALE_QAR_cataluna_blackout_per_SQM,SALE_QAR_antartica_blackout_per_SQM,SALE_QAR_bateaux_per_SQM,SALE_QAR_plata_per_SQM,OMR_price_per_SQM,OMR_stitching_price,OMR_norm_lining_per_SQM,OMR_branded_lining_per_SQM,OMR_cataluna_blackout_per_SQM,OMR_antartica_blackout_per_SQM,OMR_bateaux_per_SQM,OMR_plata_per_SQM,SALE_OMR_price_per_SQM,SALE_OMR_stitching_price,SALE_OMR_norm_lining_per_SQM,SALE_OMR_branded_lining_per_SQM,SALE_OMR_cataluna_blackout_per_SQM,SALE_OMR_antartica_blackout_per_SQM,SALE_OMR_bateaux_per_SQM,SALE_OMR_plata_per_SQM,BHD_price_per_SQM,BHD_stitching_price,BHD_norm_lining_per_SQM,BHD_branded_lining_per_SQM,BHD_cataluna_blackout_per_SQM,BHD_antartica_blackout_per_SQM,BHD_bateaux_per_SQM,BHD_plata_per_SQM,SALE_BHD_price_per_SQM,SALE_BHD_stitching_price,SALE_BHD_norm_lining_per_SQM,SALE_BHD_branded_lining_per_SQM,SALE_BHD_cataluna_blackout_per_SQM,SALE_BHD_antartica_blackout_per_SQM,SALE_BHD_bateaux_per_SQM,SALE_BHD_plata_per_SQM,deleted,last_mod)");
      tx.executeSql("CREATE TABLE IF NOT EXISTS lastsync(id INTEGER PRIMARY KEY AUTOINCREMENT,lastsyncd VARCHAR(2000))");
    
      tx.executeSql("select count(*) from productlist where deleted ='f'",[],function(tx,proselected) {
      doLog("render selected entries");
      if (proselected.rows.item(0)["count(*)"] == 0) {
      tx.executeSql("INSERT INTO productlist(id,item_code,brand,catalogue_name,category,fabric_width,AED_price_per_SQM,AED_stitching_price,AED_norm_lining_per_SQM,AED_branded_lining_per_SQM,AED_cataluna_blackout_per_SQM,AED_antartica_blackout_per_SQM,AED_bateaux_per_SQM,AED_plata_per_SQM,SALE_AED_price_per_SQM,SALE_AED_stitching_price,SALE_AED_norm_lining_per_SQM,SALE_AED_branded_lining_per_SQM,SALE_AED_cataluna_blackout_per_SQM,SALE_AED_antartica_blackout_per_SQM,SALE_AED_bateaux_per_SQM,SALE_AED_plata_per_SQM,SAR_price_per_SQM,SAR_stitching_price,SAR_norm_lining_per_SQM,SAR_branded_lining_per_SQM,SAR_cataluna_blackout_per_SQM,SAR_antartica_blackout_per_SQM,SAR_bateaux_per_SQM,SAR_plata_per_SQM,SALE_SAR_price_per_SQM,SALE_SAR_stitching_price,SALE_SAR_norm_lining_per_SQM,SALE_SAR_branded_lining_per_SQM,SALE_SAR_cataluna_blackout_per_SQM,SALE_SAR_antartica_blackout_per_SQM,SALE_SAR_bateaux_per_SQM,SALE_SAR_plata_per_SQM,QAR_price_per_SQM,QAR_stitching_price,QAR_norm_lining_per_SQM,QAR_branded_lining_per_SQM,QAR_cataluna_blackout_per_SQM,QAR_antartica_blackout_per_SQM,QAR_bateaux_per_SQM,QAR_plata_per_SQM,SALE_QAR_price_per_SQM,SALE_QAR_stitching_price,SALE_QAR_norm_lining_per_SQM,SALE_QAR_branded_lining_per_SQM,SALE_QAR_cataluna_blackout_per_SQM,SALE_QAR_antartica_blackout_per_SQM,SALE_QAR_bateaux_per_SQM,SALE_QAR_plata_per_SQM,OMR_price_per_SQM,OMR_stitching_price,OMR_norm_lining_per_SQM,OMR_branded_lining_per_SQM,OMR_cataluna_blackout_per_SQM,OMR_antartica_blackout_per_SQM,OMR_bateaux_per_SQM,OMR_plata_per_SQM,SALE_OMR_price_per_SQM,SALE_OMR_stitching_price,SALE_OMR_norm_lining_per_SQM,SALE_OMR_branded_lining_per_SQM,SALE_OMR_cataluna_blackout_per_SQM,SALE_OMR_antartica_blackout_per_SQM,SALE_OMR_bateaux_per_SQM,SALE_OMR_plata_per_SQM,BHD_price_per_SQM,BHD_stitching_price,BHD_norm_lining_per_SQM,BHD_branded_lining_per_SQM,BHD_cataluna_blackout_per_SQM,BHD_antartica_blackout_per_SQM,BHD_bateaux_per_SQM,BHD_plata_per_SQM,SALE_BHD_price_per_SQM,SALE_BHD_stitching_price,SALE_BHD_norm_lining_per_SQM,SALE_BHD_branded_lining_per_SQM,SALE_BHD_cataluna_blackout_per_SQM,SALE_BHD_antartica_blackout_per_SQM,SALE_BHD_bateaux_per_SQM,SALE_BHD_plata_per_SQM,deleted,last_mod)VALUES(19,'SX500-6','Antartica','1924 Collection','D',2.8,78,46,317,285,450,450,450,450,450,450,560,450,450,450,450,450,450,450,450,450,450,450,450,450,450,321,110,450,456,450,450,450,450,450,450,450,450,450,450,450,40,450,450,450,450,450,450,450,145.520,45.250,45.250,45.250,45.250,45.250,85.250,75.250,25.250,85.500,25.250,25.250,25.250,85.250,245.250,245.250,245.250,55.520,56.500,25.300,56.500,56.500,25.800,19.800,56.500,56.400,56.500,28.300,56.500,56.500,56.500,56.500,'f','2013-09-04 10:53:08');",[]);
      tx.executeSql("INSERT INTO lastsync(lastsyncd)VALUES('2013-09-04 10:09:44');",[]);
      doLog("after execute sql...");
      alert("Sample Product inserted");
      }         
      },dbErrorHandler);
    
     doLog("after execute Product list sql...");
      
    },dbErrorHandler);
    
     doLog("after execute Setup sql...");
}

function connetSync(){
    var lastdate;
      dbShell.transaction(function(tx) {
      tx.executeSql("select id, dbserver, dbport, dbname, dbuname, dbpwd, currency, updated, status from settings where status='y' AND id=1 ",[],function(tx,serselected) {
      doLog("render selected entries");
      if (serselected.rows.length == 0) {
       alert("Please Select Server");
      }
      else if (serselected.rows.item(0).dbserver !="" && serselected.rows.item(0).dbname !="" && serselected.rows.item(0).dbuname !="" &&  serselected.rows.item(0).dbpwd !="" && serselected.rows.item(0).currency != "" ) {
        
    serinfo = new Array();
    serinfo["dbserver"] = serselected.rows.item(0).dbserver;
    serinfo["dbport"] = serselected.rows.item(0).dbport;
    serinfo["dbname"] = serselected.rows.item(0).dbname;
    serinfo["dbuname"] = serselected.rows.item(0).dbuname;
    serinfo["dbpwd"] = serselected.rows.item(0).dbpwd;
    serinfo["currency"] = serselected.rows.item(0).currency;
    
     var serviceURL = "http://"+serinfo["dbserver"]+":"+serinfo["dbport"]+"/sedarservices/";
       // alert(serviceURL + 'profetch.php?itemid='+itemid+'&dbserver='+serinfo["dbserver"]+'&dbport='+serinfo["dbport"]+'&dbname='+serinfo["dbname"]+'&dbuname='+serinfo["dbuname"]+'&dbpwd='+serinfo["dbpwd"]+'&currency='+serinfo["currency"]);
       if (checkConnection() != "No" ) {
     
      tx.executeSql("SELECT * from lastsync where id=(SELECT MAX(id) FROM lastsync)",[],function(tx,synselected) {
	    
	    lastdate = synselected.rows.item(0).lastsyncd;
	 
	        $.getJSON(serviceURL+'dbfetch.php?lastmod='+lastdate+'&dbname='+serinfo["dbname"]+'&dbuname='+serinfo["dbuname"]+'&dbpwd='+serinfo["dbpwd"],function(data){
		
		if (data.item.length > 0 ) {
		    //code
		    datasyncronize(data,"sync");
		}  
		else{
		     datasyncronize(data,"lupdate");
		}
		
    }).done(function() {
  console.log( "second Sync success" );
 
  })
.fail(
      function(data,textStatus, errorThrown) {
         var jsonerror = $.parseJSON(data);
          console.log( "error : >> " + textStatus);
           if (checkConnection() == "No" ){
            alert("InterNet Failed to Connect:Server");
              
          $(".statusrangefin").trigger("click");
           }else{
            alert("Check Your Internet Range and Correct Your Server Settings for DB Authentication");
              
  $(".statusrangefin").trigger("click");
           }
      }
  ).always(function() { console.log( "complete" ); });
	    
	 },dbErrorHandler);
     
       }else{
        alert("Internet connection : failed");
          
  $(".statusrangefin").trigger("click");
       }
      }else{
        alert("Some Error Occured");
          
  $(".statusrangefin").trigger("click");
      }            
      },dbErrorHandler);
	},dbErrorHandler);
	    
	}
        
        
function connetSyncstatus(){
    var lastdate;
	    
      dbShell.transaction(function(tx) {
      tx.executeSql("select id, dbserver, dbport, dbname, dbuname, dbpwd, currency, updated, status from settings where status='y' AND id=1 ",[],function(tx,serselected) {
      doLog("render selected entries");
      if (serselected.rows.length == 0) {
       alert("Please Fill Your Server Settings");
      }
      else if (serselected.rows.item(0).dbserver !="" && serselected.rows.item(0).dbname !="" && serselected.rows.item(0).dbuname !="" &&  serselected.rows.item(0).dbpwd !="" && serselected.rows.item(0).currency != "" ) {
        
    serinfo = new Array();
    serinfo["dbserver"] = serselected.rows.item(0).dbserver;
    serinfo["dbport"] = serselected.rows.item(0).dbport;
    serinfo["dbname"] = serselected.rows.item(0).dbname;
    serinfo["dbuname"] = serselected.rows.item(0).dbuname;
    serinfo["dbpwd"] = serselected.rows.item(0).dbpwd;
    serinfo["currency"] = serselected.rows.item(0).currency;
    
     var serviceURL = "http://"+serinfo["dbserver"]+":"+serinfo["dbport"]+"/sedarservices/";
       // alert(serviceURL + 'profetch.php?itemid='+itemid+'&dbserver='+serinfo["dbserver"]+'&dbport='+serinfo["dbport"]+'&dbname='+serinfo["dbname"]+'&dbuname='+serinfo["dbuname"]+'&dbpwd='+serinfo["dbpwd"]+'&currency='+serinfo["currency"]);
       if (checkConnection() != "No" ) {
     
      tx.executeSql("SELECT * from lastsync where id=(SELECT MAX(id) FROM lastsync)",[],function(tx,synselected) {
	    
	    lastdate = synselected.rows.item(0).lastsyncd;
	    
	        $.getJSON(serviceURL+'dbfetchstatus.php?lastmod='+lastdate+'&dbname='+serinfo["dbname"]+'&dbuname='+serinfo["dbuname"]+'&dbpwd='+serinfo["dbpwd"],function(data){
		
		if (data.itemcount > 0 ) {
		 $(".statusrange").css("display","inline");
                 $(".statusrange").text('LIVE');
		}  
		else{
                     $(".statusrange").css("display","none");
		}
                 $("#lastresult").html(lastdate);
                
    }).done(function(data) {               
var Date_set = new Date();
var nh = Date_set.getHours();
var nm = Date_set.getMinutes();
var nms= Date_set.getSeconds();
//if (((nh == 22) && (nm == 1) && (nms < 20)) || ((nh == 12) && (nm == 1) && (nms < 20))){

if(data.itemcount > 0)
{ 
    $("#dataSync").trigger("click");
    console.log( "Auto Triggering after data change for syncronization" );
}else{
    console.log( "Auto Triggering no data change for syncronization" );
}
  
 //  }
  console.log( "second Sync success" );
  console.log( nh +":"+nm+":"+nms);
  })
.fail(
      function(data,textStatus, errorThrown) {
          console.log( "error : >> " + textStatus);
           if (checkConnection() == "No" ){
            $(".statusrange").css("display","none");
       
           }else{
            $(".statusrange").css("display","none");
          
           }
      }
  ).always(function() {
    console.log( "complete" );
    });
	    
	 },dbErrorHandler);
     
       }else{
        $(".statusrange").css("display","none");
    
       }
      }else{
        $(".statusrange").css("display","none");
      }            
      },dbErrorHandler);
	},dbErrorHandler);
	    
	}
	
	function datasyncronize(data,stats){
            
            var resultup ;
	    
	    dbShell.transaction(function(tx) {
		
		if(stats=="lupdate")
		{
		      var lastsynced = data.lastupdate;
		if (lastsynced !="") {
		 
		     tx.executeSql("INSERT INTO lastsync(lastsyncd)VALUES(?);",[lastsynced]);
                    $("#lastresult").html(lastsynced);
		}
                resultup = " No Records Modified Since You Update ";
		}
		else if (stats=="sync") {
		    //code
		    
		    var lastsynced = data.lastupdate;
		if (lastsynced !="") {
		     tx.executeSql("INSERT INTO lastsync(lastsyncd)VALUES(?);",[lastsynced]);
                     $("#lastresult").html(lastsynced);
		}
	       var insup=0;
               var del=0;
$.each(data.item, function(index, value) {
    
    if (value.deleted != 't') {
  tx.executeSql('INSERT OR REPLACE INTO productlist(id,item_code,brand,catalogue_name,category,fabric_width,AED_price_per_SQM,AED_stitching_price,AED_norm_lining_per_SQM,AED_branded_lining_per_SQM,AED_cataluna_blackout_per_SQM,AED_antartica_blackout_per_SQM,AED_bateaux_per_SQM,AED_plata_per_SQM,SALE_AED_price_per_SQM,SALE_AED_stitching_price,SALE_AED_norm_lining_per_SQM,SALE_AED_branded_lining_per_SQM,SALE_AED_cataluna_blackout_per_SQM,SALE_AED_antartica_blackout_per_SQM,SALE_AED_bateaux_per_SQM,SALE_AED_plata_per_SQM,SAR_price_per_SQM,SAR_stitching_price,SAR_norm_lining_per_SQM,SAR_branded_lining_per_SQM,SAR_cataluna_blackout_per_SQM,SAR_antartica_blackout_per_SQM,SAR_bateaux_per_SQM,SAR_plata_per_SQM,SALE_SAR_price_per_SQM,SALE_SAR_stitching_price,SALE_SAR_norm_lining_per_SQM,SALE_SAR_branded_lining_per_SQM,SALE_SAR_cataluna_blackout_per_SQM,SALE_SAR_antartica_blackout_per_SQM,SALE_SAR_bateaux_per_SQM,SALE_SAR_plata_per_SQM,QAR_price_per_SQM,QAR_stitching_price,QAR_norm_lining_per_SQM,QAR_branded_lining_per_SQM,QAR_cataluna_blackout_per_SQM,QAR_antartica_blackout_per_SQM,QAR_bateaux_per_SQM,QAR_plata_per_SQM,SALE_QAR_price_per_SQM,SALE_QAR_stitching_price,SALE_QAR_norm_lining_per_SQM,SALE_QAR_branded_lining_per_SQM,SALE_QAR_cataluna_blackout_per_SQM,SALE_QAR_antartica_blackout_per_SQM,SALE_QAR_bateaux_per_SQM,SALE_QAR_plata_per_SQM,OMR_price_per_SQM,OMR_stitching_price,OMR_norm_lining_per_SQM,OMR_branded_lining_per_SQM,OMR_cataluna_blackout_per_SQM,OMR_antartica_blackout_per_SQM,OMR_bateaux_per_SQM,OMR_plata_per_SQM,SALE_OMR_price_per_SQM,SALE_OMR_stitching_price,SALE_OMR_norm_lining_per_SQM,SALE_OMR_branded_lining_per_SQM,SALE_OMR_cataluna_blackout_per_SQM,SALE_OMR_antartica_blackout_per_SQM,SALE_OMR_bateaux_per_SQM,SALE_OMR_plata_per_SQM,BHD_price_per_SQM,BHD_stitching_price,BHD_norm_lining_per_SQM,BHD_branded_lining_per_SQM,BHD_cataluna_blackout_per_SQM,BHD_antartica_blackout_per_SQM,BHD_bateaux_per_SQM,BHD_plata_per_SQM,SALE_BHD_price_per_SQM,SALE_BHD_stitching_price,SALE_BHD_norm_lining_per_SQM,SALE_BHD_branded_lining_per_SQM,SALE_BHD_cataluna_blackout_per_SQM,SALE_BHD_antartica_blackout_per_SQM,SALE_BHD_bateaux_per_SQM,SALE_BHD_plata_per_SQM,deleted,last_mod) values('+value.id+',"'+value.item_code+'","'+value.brand+'","'+value.catalogue_name+'","'+value.category+'","'+value.fabric_width+'","'+value.AED_price_per_SQM+'","'+value.AED_stitching_price+'","'+value.AED_norm_lining_per_SQM+'","'+value.AED_branded_lining_per_SQM+'","'+value.AED_cataluna_blackout_per_SQM+'","'+value.AED_antartica_blackout_per_SQM+'","'+value.AED_bateaux_per_SQM+'","'+value.AED_plata_per_SQM+'","'+value.SALE_AED_price_per_SQM+'","'+value.SALE_AED_stitching_price+'","'+value.SALE_AED_norm_lining_per_SQM+'","'+value.SALE_AED_branded_lining_per_SQM+'","'+value.SALE_AED_cataluna_blackout_per_SQM+'","'+value.SALE_AED_antartica_blackout_per_SQM+'","'+value.SALE_AED_bateaux_per_SQM+'","'+value.SALE_AED_plata_per_SQM+'","'+value.SAR_price_per_SQM+'","'+value.SAR_stitching_price+'","'+value.SAR_norm_lining_per_SQM+'","'+value.SAR_branded_lining_per_SQM+'","'+value.SAR_cataluna_blackout_per_SQM+'","'+value.SAR_antartica_blackout_per_SQM+'","'+value.SAR_bateaux_per_SQM+'","'+value.SAR_plata_per_SQM+'","'+value.SALE_SAR_price_per_SQM+'","'+value.SALE_SAR_stitching_price+'","'+value.SALE_SAR_norm_lining_per_SQM+'","'+value.SALE_SAR_branded_lining_per_SQM+'","'+value.SALE_SAR_cataluna_blackout_per_SQM+'","'+value.SALE_SAR_antartica_blackout_per_SQM+'","'+value.SALE_SAR_bateaux_per_SQM+'","'+value.SALE_SAR_plata_per_SQM+'","'+value.QAR_price_per_SQM+'","'+value.QAR_stitching_price+'","'+value.QAR_norm_lining_per_SQM+'","'+value.QAR_branded_lining_per_SQM+'","'+value.QAR_cataluna_blackout_per_SQM+'","'+value.QAR_antartica_blackout_per_SQM+'","'+value.QAR_bateaux_per_SQM+'","'+value.QAR_plata_per_SQM+'","'+value.SALE_QAR_price_per_SQM+'","'+value.SALE_QAR_stitching_price+'","'+value.SALE_QAR_norm_lining_per_SQM+'","'+value.SALE_QAR_branded_lining_per_SQM+'","'+value.SALE_QAR_cataluna_blackout_per_SQM+'","'+value.SALE_QAR_antartica_blackout_per_SQM+'","'+value.SALE_QAR_bateaux_per_SQM+'","'+value.SALE_QAR_plata_per_SQM+'","'+value.OMR_price_per_SQM+'","'+value.OMR_stitching_price+'","'+value.OMR_norm_lining_per_SQM+'","'+value.OMR_branded_lining_per_SQM+'","'+value.OMR_cataluna_blackout_per_SQM+'","'+value.OMR_antartica_blackout_per_SQM+'","'+value.OMR_bateaux_per_SQM+'","'+value.OMR_plata_per_SQM+'","'+value.SALE_OMR_price_per_SQM+'","'+value.SALE_OMR_stitching_price+'","'+value.SALE_OMR_norm_lining_per_SQM+'","'+value.SALE_OMR_branded_lining_per_SQM+'","'+value.SALE_OMR_cataluna_blackout_per_SQM+'","'+value.SALE_OMR_antartica_blackout_per_SQM+'","'+value.SALE_OMR_bateaux_per_SQM+'","'+value.SALE_OMR_plata_per_SQM+'","'+value.BHD_price_per_SQM+'","'+value.BHD_stitching_price+'","'+value.BHD_norm_lining_per_SQM+'","'+value.BHD_branded_lining_per_SQM+'","'+value.BHD_cataluna_blackout_per_SQM+'","'+value.BHD_antartica_blackout_per_SQM+'","'+value.BHD_bateaux_per_SQM+'","'+value.BHD_plata_per_SQM+'","'+value.SALE_BHD_price_per_SQM+'","'+value.SALE_BHD_stitching_price+'","'+value.SALE_BHD_norm_lining_per_SQM+'","'+value.SALE_BHD_branded_lining_per_SQM+'","'+value.SALE_BHD_cataluna_blackout_per_SQM+'","'+value.SALE_BHD_antartica_blackout_per_SQM+'","'+value.SALE_BHD_bateaux_per_SQM+'","'+value.SALE_BHD_plata_per_SQM+'","'+value.deleted+'","'+value.last_mod+'")');
  console.log( "Inserted: >> " + value.item_code);
    insup++;
    }
    else if(value.deleted == 't'){
	
	  tx.executeSql('DELETE FROM productlist where item_code =?',[value.item_code]);
	  console.log( "Deleted: >> " + value.item_code);
    del++;
    }
});
resultup = "Inserted/Updated: "+insup+"&nbsp; Deleted: "+del;
 
}  $(".statusrangefin").trigger("click");
   $("#resultssync").html(resultup);
   $.mobile.hidePageLoadingMsg();

},dbErrorHandler);
	         
	}


function getselectLocalEntries(itemid) {
    doLog("get stat entries");
    dbShell.transaction(function(tx) {
      tx.executeSql("select id, dbserver, dbport, dbname, dbuname, dbpwd, currency, updated, status from settings where status='y' AND id=1 ",[],function(tx,selected) {
      doLog("render selected entries");
      if (selected.rows.length == 0) {
       alert("Please Enter Currencies in Settings");
      }
      else{
        
    serinfo = new Array();
    serinfo["dbserver"] = selected.rows.item(0).dbserver;
    serinfo["dbport"] = selected.rows.item(0).dbport;
    serinfo["dbname"] = selected.rows.item(0).dbname;
    serinfo["dbuname"] = selected.rows.item(0).dbuname;
    serinfo["dbpwd"] = selected.rows.item(0).dbpwd;
    serinfo["currency"] = selected.rows.item(0).currency;
  
       var itemcode = itemid;
     
       console.log("Enter to jSON Request");
       var curs= serinfo["currency"]
        //code
        if (itemid == "") {
            alert(" Please enter an item code in the box.");
        }else{
            
            tx.executeSql('select * from productlist where item_code LIKE ? AND deleted="f" ',[itemid],function(tx,priresults) {
            
            if(priresults.rows.length == 0){
                alert("Sorry, the item was not found.");
            }else{
        
        displayLocalProduct(priresults.rows.item(0),curs);
         $('#Proinfo').css('overflow-y', 'scroll');
           $('#Proinfo').css('overflow-x', 'hidden');
           $('#popupBasic').css('overflow-x', 'hidden');
         $( "#popupBasic" ).popup( "open" );
            }
            });
        }
        
      }
             
      },dbErrorHandler);
    }, dbErrorHandler);
}

function displayLocalProduct(data,currencies) {
    
      var products = data;
      var curss =new Array();
      curss = currencies.split(',');

        if(products==false)
        {
         $('#Proinfo').html("<b>No item Found for Your Item Code</b><br/> <b>Below Criteria May Occured: </b> <br/> 1.QR Code Damaged or Wrong : Please Enter QR Code Manualy, <br/> 2.QR Code Not Found In Price List DB : Make Entry in DB<br/>");
        }else{
            
        var tmpl = '<div id="jwhmContainerd"><div class="jwhmTop"><div class="jwhmtitle"><h1>{{brand}}</h1></div><div class="jwhmrighthead"><h1>{{item_code}}</h1></div><div class="clear"></div>';
        tmpl = tmpl + '<div class="FabricContainer"><div class="Fabrichead"><h2>Fabric Width</h2></div><div class="Widthmeter"><h3>{{fabric_width}}</h3></div></div>';
        tmpl = tmpl + '<div class="FabricContainerM"><div class="FabricheadM"><h2>Catalogue</h2></div><div class="WidthmeterM"><h3>{{catalogue_name}}</h3></div></div>';
        tmpl = tmpl + '<div class="FabricContainerlast"><div class="Fabrichead"><h2>Category</h2></div><div class="Widthmeter"><h3>{{category}}</h3></div></div>';
        
$.each(curss, function(index, value) {
var n_price_per_SQM  = value+"_price_per_SQM";
var n_stitching_price = value+"_stitching_price";
var n_norm_lining_per_SQM = value+"_norm_lining_per_SQM";
var n_branded_lining_per_SQM = value+"_branded_lining_per_SQM";
var n_cataluna_blackout_per_SQM = value+"_cataluna_blackout_per_SQM";
var n_antartica_blackout_per_SQM = value+"_antartica_blackout_per_SQM";
var n_bateaux_per_SQM = value+"_bateaux_per_SQM";
var n_plata_per_SQM = value+"_plata_per_SQM";
var s_price_per_SQM  = "SALE_"+value+"_price_per_SQM";
var s_stitching_price = "SALE_"+value+"_stitching_price";
var s_norm_lining_per_SQM = "SALE_"+value+"_norm_lining_per_SQM";
var s_branded_lining_per_SQM = "SALE_"+value+"_branded_lining_per_SQM";
var s_cataluna_blackout_per_SQM = "SALE_"+value+"_cataluna_blackout_per_SQM";
var s_antartica_blackout_per_SQM = "SALE_"+value+"_antartica_blackout_per_SQM";
var s_bateaux_per_SQM = "SALE_"+value+"_bateaux_per_SQM";
var s_plata_per_SQM = "SALE_"+value+"_plata_per_SQM";

var pcolor="";
var cu_name="";
switch (value){
case "AED":
    pcolor = "NLining";
    cu_name ="UAE";
break;
case "QAR":
    pcolor = "NLining";
    cu_name ="Qatar";
break;
case "SAR":
    pcolor = "NLining";
    cu_name ="KSA";
break;
case "BHD":
    pcolor = "NLiningp";
    cu_name ="Bahrain";
break;
case "OMR":
    pcolor = "NLiningp";
    cu_name ="Oman";
break;
default : alert("You Currency not in details page");
}

  tmpl = tmpl +'<div class="jwhmAed"><h3>'+cu_name+' Retail Prices </h3></div>';
  
  tmpl = tmpl +'<div class="Retailprice"><ul class="'+pcolor+'"><li><label style="padding-top:7px;padding-bottom:6px;">Fabric / Lm</label><span>{{'+n_price_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Stitching / m<sup>2</sup> </label><span>{{'+n_stitching_price+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>No Lining / m<sup>2</sup> </label><span>{{'+n_norm_lining_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Branded Lining / m<sup>2</sup> </label><span>{{'+n_branded_lining_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Plata Blackout / m<sup>2</sup> </label><span>{{'+n_plata_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Cataluna Blackout / m<sup>2</sup> </label><span>{{'+n_cataluna_blackout_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Antartica Blackout / m<sup>2</sup> </label><span>{{'+n_antartica_blackout_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Bateaux / m<sup>2</sup> </label><span>{{'+n_bateaux_per_SQM+'}}</span></li></ul></div>';

  tmpl = tmpl +'<div class="jwhmAed"><h3>'+cu_name+' Dealer Prices </h3></div>';
  
  tmpl = tmpl +'<div class="Dealerprice"><ul class="'+pcolor+'"><li><label style="padding-top:7px;padding-bottom:6px;">Fabric / Lm</label><span>{{'+s_price_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Stitching / m<sup>2</sup> </label><span>{{'+s_stitching_price+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>No Lining / m<sup>2</sup> </label><span>{{'+s_norm_lining_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Branded Lining / m<sup>2</sup> </label><span>{{'+s_branded_lining_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Plata Blackout / m<sup>2</sup> </label><span>{{'+s_plata_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Cataluna Blackout / m<sup>2</sup> </label><span>{{'+s_cataluna_blackout_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Antartica Blackout / m<sup>2</sup>  </label><span>{{'+s_antartica_blackout_per_SQM+'}}</span></li></ul><ul class="'+pcolor+'"><li><label>Bateaux / m<sup>2</sup> </label><span>{{'+s_bateaux_per_SQM+'}}</span></li></ul></div>';
  
});
        
        tmpl = tmpl +'</div></div>';
        
        var htmlt = Mustache.to_html(tmpl, products);
        $('#Proinfo').html(htmlt);
            
        $('#itemCode').text(products.item_code);
	$('#brand').text(products.brand);
	$('#catalogueName').text(products.catalogue_name);
        
        }
}

function saveNote(note, cb){
    //Sometimes you may want to jot down something quickly....
    dbShell.transaction(function(tx) {
        if(note.id == "") {
            tx.executeSql("insert into settings(dbserver,dbport,dbname,dbuname,dbpwd,currency,updated) values(?,?,?,?,?,?,?)",[note.dbserver, note.dbport, note.dbname, note.dbuname, note.dbpwd, note.currency, new Date()]);}
        else {
            tx.executeSql("update settings set dbserver=?,dbport=?,dbname=?,dbuname=?,dbpwd=?,currency=?,updated=? where id=1",[note.dbserver,note.dbport,note.dbname,note.dbuname,note.dbpwd,note.currency, new Date()]);
               
            }
    }, dbErrorHandler,cb);
}
   

   function sendItemcode() {
   
    itemCode = $("#itemid").val();
   if (itemCode == "" || itemCode == null) {
    //code
    alert("Please enter an item code in the box.");
    }else{
    getselectEntries(itemCode);
    }
    }
    
     function sendItemLocalcode() {
   
    itemCode = $("#itemid").val();
   if (itemCode == "" || itemCode == null) {
    //code
    alert("Please enter an item code in the box.");
    }else{
    getselectLocalEntries(itemCode);
      $("#itemid").val("");
    }
    }
 
function setinit(){
    //handle form submission of a new/old note
    $.mobile.changePage("edit.html?id=1",{reverse:false});

    var errorc="0";
    
        
$(document).delegate('#settingsForm', 'submit', function() {
  
     if ($("#dbServer").val()=="" || $("#dbName").val() == "" || $("#dbUname").val() == "" || $("#dbPwd").val() =="") {
           // alert ("Need to fill all Text box"); //$.mobile.changePage("index.html",{reverse:false});
           errorc="1";
        }
        var currencyArray= new Array();
    $('input:checkbox[name=currency]:checked').each(function() 
{
    currencyArray.push($(this).val());
});
    
    if(currencyArray.length >0 && errorc == "0"){
        
        var currencies = currencyArray.join(',');
       
        var data = {dbserver:$("#dbServer").val(), 
                    dbport:$("#dbPort").val(),
                    dbname:$("#dbName").val(),
                    dbuname:$("#dbUname").val(),
                    dbpwd:$("#dbPwd").val(),
                    currency: currencies,
                    id:$("#noteId").val()
        };
        saveNote(data,function() {
            $.mobile.changePage("index.html",{reverse:false});
        });
    }else{
        alert("Please select at least one currency and Fill the Highlighted Text Box");
    }
});
   

    //edit page logic needs to know to get old record (possible)
    $("#editPage").live("pageshow", function() {
       
        //get the location - it is a hash - got to be a better way
        var loc = window.location.href;
        if(loc.indexOf("?") >= 0) {
            var qs = loc.substr(loc.indexOf("?")+1,loc.length);
            var noteId = qs.split("=")[1];
          
            //load the values
            $("#editFormSubmitButton").attr("disabled","disabled"); 
            dbShell.transaction(
                function(tx) {
                    
                     tx.executeSql("SELECT * from lastsync where id=(SELECT MAX(id) FROM lastsync)",[],function(tx,synselected) {
	    
	               lastdate = synselected.rows.item(0).lastsyncd;
                         $("#lastresult").html(lastdate);
            
                     },dbErrorHandler);
              tx.executeSql("select id,dbserver,dbport,dbname,dbuname,dbpwd,currency from settings where status='y' AND id=1",[],function(tx,results) {
                       
              var SelectCur  = new Array();
                        var varcheck;
                        var smalll;
                        $("#dbServer").val(results.rows.item(0).dbserver);
                        $("#dbPort").val(results.rows.item(0).dbport);
                        $("#dbName").val(results.rows.item(0).dbname);
                        $("#dbUname").val(results.rows.item(0).dbuname);
                        $("#dbPwd").val(results.rows.item(0).dbpwd);
                        $("#noteId").val(noteId);
                        $("#editFormSubmitButton").removeAttr("disabled"); 
                        curresel=results.rows.item(0).currency;
                   
                        SelectCur = curresel.split(',');
                   
                      if(SelectCur.length>0){
                         
                             for(var i=0;i<SelectCur.length;i++){
                            smalll=SelectCur[i].toLowerCase();
                      
                            $("#"+smalll).attr("checked",true).checkboxradio("refresh");
                         }
                        }
                        else{
                            smalll=SelectCur[i].toLowerCase();
                       
                         $("#"+smalll).attr("checked",true).checkboxradio("refresh");
                        }
                      
                    },dbErrorHandler);
                    
                },dbErrorHandler);
         
        } else {
         $("#editFormSubmitButton").removeAttr("disabled");
        }
    });
}
