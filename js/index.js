/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
  function checkConnection() {

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
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scan').addEventListener('click', this.scan, false);
        document.getElementById('encode').addEventListener('click', this.encode, false);
    },

    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    scan: function() {
        console.log('scanning');
        
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");
        scanner.scan( function (result) { 

          // alert("We got a barcode\n" + 
           // "Result: " + result.text + "\n" + 
          //  "Format: " + result.format + "\n" + 
         //  "Cancelled: " + result.cancelled);  
        var QRcode=result.text;
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
        
            var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100 * 1024 * 1024);
            db.transaction(function (tx){
                var QRcode = result.text;
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
        
        }else{
        
       var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100 * 1024 * 1024);
            db.transaction(function (tx){
                var QRcode = result.text;
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



      /*  if(network_status=='No network connection'){
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
            //window.open('http://wave.elasticbeanstalk.com/app/overview.php?qrcode='+QRcode+'&user_id='+user_id+'&showroom_id='+showroom_id, '_blank', 'location=yes');
           }
        }*/
            //alert(QRcode);
           // alert('test');
           
           console.log("Scanner result: \n" +
                "text: " + result.text + "\n" +
                "format: " + result.format + "\n" +
                "cancelled: " + result.cancelled + "\n");
            document.getElementById("info").innerHTML = result.text;
            
            console.log(result);
            /*
            if (args.format == "QR_CODE") {
                window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
            }
            */

        }, function (error) { 
            console.log("Scanning failed: ", error); 
        } );
    },

    encode: function() {
        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.encode(scanner.Encode.TEXT_TYPE, "http://www.nhl.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          }
        );

    }

};
