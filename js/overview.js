$(document).ready(function(){
    onDeviceReady();
    var name='wave';
    $.ajax({
        type: "POST",
        url: 'http://wave2dev.elasticbeanstalk.com/app/ajax_sync_product_count.php',
        data : 'uname='+name ,
        dataType:"json",
        processData: false,
        success:function (json) {
            var produc_row_count = json.product_count;
        }
    });
    var showroom_name=localStorage.getItem("showroom_name");
    var user_name=localStorage.getItem("user_name");
    var showroom_id=localStorage.getItem("showroom_id");
    document.getElementById("showroom_name").innerHTML=showroom_name;
    document.getElementById("user_name").innerHTML=user_name;
    var currency = localStorage.getItem("currency");
    var all_price = localStorage.getItem("all_price");
	
    if (all_price=="TRUE")
    {
        $("#all_price").show();
    }else
    {
        $("#all_price").hide();
    }
    //	alert(currency);

    if (currency=="AED") {
        $("*#SAR").addClass("hide");
        $("*#QAR").addClass("hide");
        $("*#OMR").addClass("hide");
        $("*#BHD").addClass("hide");
		$("*#KWD").addClass("hide");
    }
    if (currency=="SAR") {
        $("*#AED").addClass("hide");                          
        $("*#QAR").addClass("hide");
        $("*#OMR").addClass("hide");
        $("*#BHD").addClass("hide");
		$("*#KWD").addClass("hide");
    }
    if (currency=="QAR") {
        $("*#AED").addClass("hide");
        $("*#SAR").addClass("hide");				
        $("*#OMR").addClass("hide");
        $("*#BHD").addClass("hide");
		$("*#KWD").addClass("hide");
    }
    if (currency=="OMR") {
        $("*#AED").addClass("hide");
        $("*#SAR").addClass("hide");
        $("*#QAR").addClass("hide");
        $("*#BHD").addClass("hide");
		$("*#KWD").addClass("hide");
    }
    if (currency=="BHD") {
        $("*#AED").addClass("hide");
        $("*#SAR").addClass("hide");
        $("*#QAR").addClass("hide");
        $("*#OMR").addClass("hide");
		$("*#KWD").addClass("hide");
    }
	if (currency=="KWD") {
        $("*#AED").addClass("hide");
        $("*#SAR").addClass("hide");
        $("*#QAR").addClass("hide");
        $("*#OMR").addClass("hide");
		$("*#BHD").addClass("hide");
    }
	

    
});

var QRcode=localStorage.getItem("QRcode");
//alert(QRcode);
function queryDB(tx) {
    tx.executeSql('SELECT * FROM productlist where item_code = ? collate NOCASE', [QRcode], querySuccess, errorCB);
	
    }
    function querySuccess(tx, results) {
		var len = results.rows.length;
	//	alert("length-"+len);
		for (var i=0; i<len; i++){
			if (results.rows.item(0).image=="") {
					$("#previewimage1").addClass("hide");
					$("#href_item_image1").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image1=="") {
                    $("#previewimage2").addClass("hide");
                    $("#href_item_image2").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image2=="") {
                    $("#previewimage3").addClass("hide");
                    $("#href_item_image3").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image3=="") {
                    $("#previewimage4").addClass("hide");
                    $("#href_item_image4").removeClass("fancybox-buttons1");
                }
                if (results.rows.item(0).image==""&&results.rows.item(0).image1==""&&results.rows.item(0).image2==""&&results.rows.item(0).image3=="") {
                    $("#previewimage_null").removeClass("hide");
                }
                image = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image;
                image1 = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image1;
                image2 = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image2;
                image3 = "http://wave.elasticbeanstalk.com/admin/"+results.rows.item(i).image3;
                
                $("#href_item_image1").attr(image);
                $("#href_item_image2").attr(image1);
                $("#href_item_image3").attr(image2);
                $("#href_item_image4").attr(image3);
                document.getElementById("item_image1").src = image;
                document.getElementById("item_image2").src = image1;
                document.getElementById("item_image3").src = image2;
                document.getElementById("item_image4").src = image3; 
 
				
				var Category_name = results.rows.item(i).Category_name;
			//	alert(results.rows.item(i).AED_Premium_Price_per_SQM);
			//	alert("category-"+Category_name);
								
			/*	if (Category_name=="") {
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide"); 
				} */
				 if (Category_name=="Fabric") {
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Pleated_Blinds") {
					$("#Fabric").addClass("hide");                          
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Folding_Door") {
					$("#Fabric").addClass("hide"); 
					$("#Pleated_Blinds").addClass("hide");				
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Wooden_Roman") {
					$("#Fabric").addClass("hide"); 
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Awning") {
				   $("#Fabric").addClass("hide"); 
				   $("#Pleated_Blinds").addClass("hide");
				   $("#Folding_Door").addClass("hide");
				   $("#Wooden_Roman").addClass("hide");
				   $("#Combi_Shades").addClass("hide");
				   $("#Wallpaper").addClass("hide");
				   $("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Combi_Shades") {
					$("#Fabric").addClass("hide"); 
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Wallpaper") {
					$("#Fabric").addClass("hide"); 
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Vertical_Blinds") {
					$("#Fabric").addClass("hide"); 
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Venetian").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
				}
				if (Category_name=="Venetian") {
					$("#Fabric").addClass("hide"); 
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Fujikawa_Harmony").addClass("hide");
					
				}
				if (Category_name=="Fujikawa_Harmony") {
					$("#Fabric").addClass("hide"); 
					$("#Pleated_Blinds").addClass("hide");
					$("#Folding_Door").addClass("hide");
					$("#Wooden_Roman").addClass("hide");
					$("#Awning").addClass("hide");
					$("#Combi_Shades").addClass("hide");
					$("#Wallpaper").addClass("hide");
					$("#Vertical_Blinds").addClass("hide");
					$("#Venetian").addClass("hide");
					
				}
				
				
				//alert(results.rows.item(i).item_code);
								
				/* Fabric  start */ 
				
				document.getElementById("item_code").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand").innerHTML = results.rows.item(i).brand;
				document.getElementById("catalogue_name").innerHTML = results.rows.item(i).catalogue_name;
				document.getElementById("category").innerHTML = results.rows.item(i).category;
				document.getElementById("fabric_width").innerHTML = results.rows.item(i).fabric_width;
				document.getElementById("panelheight").innerHTML = results.rows.item(i).panelheight;
				document.getElementById("weight_gramsm2").innerHTML = results.rows.item(i).weight_gramsm2;
				document.getElementById("additional_notes").innerHTML = results.rows.item(i).additional_notes;
				
					//AED
				
				document.getElementById("AED_price_per_SQM").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Roman_Price_per_SQM").innerHTML = results.rows.item(i).AED_Roman_Price_per_SQM;
				document.getElementById("SALE_AED_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_AED_Roman_Price_per_SQM;
				document.getElementById("AED_stitching_price").innerHTML = results.rows.item(i).AED_stitching_price;
				document.getElementById("SALE_AED_stitching_price").innerHTML = results.rows.item(i).SALE_AED_stitching_price;
				document.getElementById("AED_norm_lining_per_SQM").innerHTML = results.rows.item(i).AED_norm_lining_per_SQM;
				document.getElementById("SALE_AED_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_AED_norm_lining_per_SQM;
				document.getElementById("AED_branded_lining_per_SQM").innerHTML = results.rows.item(i).AED_branded_lining_per_SQM;
				document.getElementById("SALE_AED_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_AED_branded_lining_per_SQM;
				document.getElementById("AED_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).AED_cataluna_blackout_per_SQM;
				document.getElementById("SALE_AED_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_AED_cataluna_blackout_per_SQM;
				document.getElementById("AED_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).AED_antartica_blackout_per_SQM;
				document.getElementById("SALE_AED_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_AED_antartica_blackout_per_SQM;
				document.getElementById("AED_bateaux_per_SQM").innerHTML = results.rows.item(i).AED_bateaux_per_SQM;
				document.getElementById("SALE_AED_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_AED_bateaux_per_SQM;
				document.getElementById("AED_plata_per_SQM").innerHTML = results.rows.item(i).AED_plata_per_SQM;
				document.getElementById("SALE_AED_plata_per_SQM").innerHTML = results.rows.item(i).SALE_AED_plata_per_SQM;
				
				//SAR
				document.getElementById("SAR_price_per_SQM").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SAR_Roman_Price_per_SQM;
				document.getElementById("SALE_SAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_Roman_Price_per_SQM;
				document.getElementById("SAR_stitching_price").innerHTML = results.rows.item(i).SAR_stitching_price;
				document.getElementById("SALE_SAR_stitching_price").innerHTML = results.rows.item(i).SALE_SAR_stitching_price;
				document.getElementById("SAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SAR_norm_lining_per_SQM;
				document.getElementById("SALE_SAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_norm_lining_per_SQM;
				document.getElementById("SAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SAR_branded_lining_per_SQM;
				document.getElementById("SALE_SAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_branded_lining_per_SQM;
				document.getElementById("SAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SAR_cataluna_blackout_per_SQM;
				document.getElementById("SALE_SAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_cataluna_blackout_per_SQM;
				document.getElementById("SAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SAR_antartica_blackout_per_SQM;
				document.getElementById("SALE_SAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_antartica_blackout_per_SQM;
				document.getElementById("SAR_bateaux_per_SQM").innerHTML = results.rows.item(i).SAR_bateaux_per_SQM;
				document.getElementById("SALE_SAR_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_bateaux_per_SQM;
				document.getElementById("SAR_plata_per_SQM").innerHTML = results.rows.item(i).SAR_plata_per_SQM;
				document.getElementById("SALE_SAR_plata_per_SQM").innerHTML = results.rows.item(i).SALE_SAR_plata_per_SQM;
				
				//QAR
				document.getElementById("QAR_price_per_SQM").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).QAR_Roman_Price_per_SQM;
				document.getElementById("SALE_QAR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_Roman_Price_per_SQM;
				document.getElementById("QAR_stitching_price").innerHTML = results.rows.item(i).QAR_stitching_price;
				document.getElementById("SALE_QAR_stitching_price").innerHTML = results.rows.item(i).SALE_QAR_stitching_price;
				document.getElementById("QAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).QAR_norm_lining_per_SQM;
				document.getElementById("SALE_QAR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_norm_lining_per_SQM;
				document.getElementById("QAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).QAR_branded_lining_per_SQM;
				document.getElementById("SALE_QAR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_branded_lining_per_SQM;
				document.getElementById("QAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).QAR_cataluna_blackout_per_SQM;
				document.getElementById("SALE_QAR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_cataluna_blackout_per_SQM;
				document.getElementById("QAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).QAR_antartica_blackout_per_SQM;
				document.getElementById("SALE_QAR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_antartica_blackout_per_SQM;
				document.getElementById("QAR_bateaux_per_SQM").innerHTML = results.rows.item(i).QAR_bateaux_per_SQM;
				document.getElementById("SALE_QAR_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_bateaux_per_SQM;
				document.getElementById("QAR_plata_per_SQM").innerHTML = results.rows.item(i).QAR_plata_per_SQM;
				document.getElementById("SALE_QAR_plata_per_SQM").innerHTML = results.rows.item(i).SALE_QAR_plata_per_SQM;
				
				//OMR
				document.getElementById("OMR_price_per_SQM").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).OMR_Roman_Price_per_SQM;
				document.getElementById("SALE_OMR_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_Roman_Price_per_SQM;
				document.getElementById("OMR_stitching_price").innerHTML = results.rows.item(i).OMR_stitching_price;
				document.getElementById("SALE_OMR_stitching_price").innerHTML = results.rows.item(i).SALE_OMR_stitching_price;
				document.getElementById("OMR_norm_lining_per_SQM").innerHTML = results.rows.item(i).OMR_norm_lining_per_SQM;
				document.getElementById("SALE_OMR_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_norm_lining_per_SQM;
				document.getElementById("OMR_branded_lining_per_SQM").innerHTML = results.rows.item(i).OMR_branded_lining_per_SQM;
				document.getElementById("SALE_OMR_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_branded_lining_per_SQM;
				document.getElementById("OMR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).OMR_cataluna_blackout_per_SQM;
				document.getElementById("SALE_OMR_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_cataluna_blackout_per_SQM;
				document.getElementById("OMR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).OMR_antartica_blackout_per_SQM;
				document.getElementById("SALE_OMR_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_antartica_blackout_per_SQM;
				document.getElementById("OMR_bateaux_per_SQM").innerHTML = results.rows.item(i).OMR_bateaux_per_SQM;
				document.getElementById("SALE_OMR_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_bateaux_per_SQM;
				document.getElementById("OMR_plata_per_SQM").innerHTML = results.rows.item(i).OMR_plata_per_SQM;
				document.getElementById("SALE_OMR_plata_per_SQM").innerHTML = results.rows.item(i).SALE_OMR_plata_per_SQM;
				
				
				//BHD
				document.getElementById("BHD_price_per_SQM").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Roman_Price_per_SQM").innerHTML = results.rows.item(i).BHD_Roman_Price_per_SQM;
				document.getElementById("SALE_BHD_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_Roman_Price_per_SQM;
				document.getElementById("BHD_stitching_price").innerHTML = results.rows.item(i).BHD_stitching_price;
				document.getElementById("SALE_BHD_stitching_price").innerHTML = results.rows.item(i).SALE_BHD_stitching_price;
				document.getElementById("BHD_norm_lining_per_SQM").innerHTML = results.rows.item(i).BHD_norm_lining_per_SQM;
				document.getElementById("SALE_BHD_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_norm_lining_per_SQM;
				document.getElementById("BHD_branded_lining_per_SQM").innerHTML = results.rows.item(i).BHD_branded_lining_per_SQM;
				document.getElementById("SALE_BHD_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_branded_lining_per_SQM;
				document.getElementById("BHD_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).BHD_cataluna_blackout_per_SQM;
				document.getElementById("SALE_BHD_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_cataluna_blackout_per_SQM;
				document.getElementById("BHD_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).BHD_antartica_blackout_per_SQM;
				document.getElementById("SALE_BHD_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_antartica_blackout_per_SQM;
				document.getElementById("BHD_bateaux_per_SQM").innerHTML = results.rows.item(i).BHD_bateaux_per_SQM;
				document.getElementById("SALE_BHD_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_bateaux_per_SQM;
				document.getElementById("BHD_plata_per_SQM").innerHTML = results.rows.item(i).BHD_plata_per_SQM;
				document.getElementById("SALE_BHD_plata_per_SQM").innerHTML = results.rows.item(i).SALE_BHD_plata_per_SQM;
				
				
				//KWD
				document.getElementById("KWD_price_per_SQM").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Roman_Price_per_SQM").innerHTML = results.rows.item(i).KWD_Roman_Price_per_SQM;
				document.getElementById("SALE_KWD_Roman_Price_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_Roman_Price_per_SQM;
				document.getElementById("KWD_stitching_price").innerHTML = results.rows.item(i).KWD_stitching_price;
				document.getElementById("SALE_KWD_stitching_price").innerHTML = results.rows.item(i).SALE_KWD_stitching_price;
				document.getElementById("KWD_norm_lining_per_SQM").innerHTML = results.rows.item(i).KWD_norm_lining_per_SQM;
				document.getElementById("SALE_KWD_norm_lining_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_norm_lining_per_SQM;
				document.getElementById("KWD_branded_lining_per_SQM").innerHTML = results.rows.item(i).KWD_branded_lining_per_SQM;
				document.getElementById("SALE_KWD_branded_lining_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_branded_lining_per_SQM;
				document.getElementById("KWD_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).KWD_cataluna_blackout_per_SQM;
				document.getElementById("SALE_KWD_cataluna_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_cataluna_blackout_per_SQM;
				document.getElementById("KWD_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).KWD_antartica_blackout_per_SQM;
				document.getElementById("SALE_KWD_antartica_blackout_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_antartica_blackout_per_SQM;
				document.getElementById("KWD_bateaux_per_SQM").innerHTML = results.rows.item(i).KWD_bateaux_per_SQM;
				document.getElementById("SALE_KWD_bateaux_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_bateaux_per_SQM;
				document.getElementById("KWD_plata_per_SQM").innerHTML = results.rows.item(i).KWD_plata_per_SQM;
				document.getElementById("SALE_KWD_plata_per_SQM").innerHTML = results.rows.item(i).SALE_KWD_plata_per_SQM;
				
				
				//all currency
				
				//AED
				document.getElementById("AED_price_per_SQM1").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).AED_Roman_Price_per_SQM;
				document.getElementById("SALE_AED_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_Roman_Price_per_SQM;
				document.getElementById("AED_stitching_price1").innerHTML = results.rows.item(i).AED_stitching_price;
				document.getElementById("SALE_AED_stitching_price1").innerHTML = results.rows.item(i).SALE_AED_stitching_price;
				document.getElementById("AED_norm_lining_per_SQM1").innerHTML = results.rows.item(i).AED_norm_lining_per_SQM;
				document.getElementById("SALE_AED_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_norm_lining_per_SQM;
				document.getElementById("AED_branded_lining_per_SQM1").innerHTML = results.rows.item(i).AED_branded_lining_per_SQM;
				document.getElementById("SALE_AED_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_branded_lining_per_SQM;
				document.getElementById("AED_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).AED_cataluna_blackout_per_SQM;
				document.getElementById("SALE_AED_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_cataluna_blackout_per_SQM;
				document.getElementById("AED_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).AED_antartica_blackout_per_SQM;
				document.getElementById("SALE_AED_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_antartica_blackout_per_SQM;
				document.getElementById("AED_bateaux_per_SQM1").innerHTML = results.rows.item(i).AED_bateaux_per_SQM;
				document.getElementById("SALE_AED_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_bateaux_per_SQM;
				document.getElementById("AED_plata_per_SQM1").innerHTML = results.rows.item(i).AED_plata_per_SQM;
				document.getElementById("SALE_AED_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_plata_per_SQM;
				
				//SAR
				document.getElementById("SAR_price_per_SQM1").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SAR_Roman_Price_per_SQM;
				document.getElementById("SALE_SAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_Roman_Price_per_SQM;
				document.getElementById("SAR_stitching_price1").innerHTML = results.rows.item(i).SAR_stitching_price;
				document.getElementById("SALE_SAR_stitching_price1").innerHTML = results.rows.item(i).SALE_SAR_stitching_price;
				document.getElementById("SAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SAR_norm_lining_per_SQM;
				document.getElementById("SALE_SAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_norm_lining_per_SQM;
				document.getElementById("SAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SAR_branded_lining_per_SQM;
				document.getElementById("SALE_SAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_branded_lining_per_SQM;
				document.getElementById("SAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SAR_cataluna_blackout_per_SQM;
				document.getElementById("SALE_SAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_cataluna_blackout_per_SQM;
				document.getElementById("SAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SAR_antartica_blackout_per_SQM;
				document.getElementById("SALE_SAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_antartica_blackout_per_SQM;
				document.getElementById("SAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SAR_bateaux_per_SQM;
				document.getElementById("SALE_SAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_bateaux_per_SQM;
				document.getElementById("SAR_plata_per_SQM1").innerHTML = results.rows.item(i).SAR_plata_per_SQM;
				document.getElementById("SALE_SAR_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_plata_per_SQM;
				
				//OMR
				document.getElementById("OMR_price_per_SQM1").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).OMR_Roman_Price_per_SQM;
				document.getElementById("SALE_OMR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_Roman_Price_per_SQM;
				document.getElementById("OMR_stitching_price1").innerHTML = results.rows.item(i).OMR_stitching_price;
				document.getElementById("SALE_OMR_stitching_price1").innerHTML = results.rows.item(i).SALE_OMR_stitching_price;
				document.getElementById("OMR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).OMR_norm_lining_per_SQM;
				document.getElementById("SALE_OMR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_norm_lining_per_SQM;
				document.getElementById("OMR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).OMR_branded_lining_per_SQM;
				document.getElementById("SALE_OMR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_branded_lining_per_SQM;
				document.getElementById("OMR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).OMR_cataluna_blackout_per_SQM;
				document.getElementById("SALE_OMR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_cataluna_blackout_per_SQM;
				document.getElementById("OMR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).OMR_antartica_blackout_per_SQM;
				document.getElementById("SALE_OMR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_antartica_blackout_per_SQM;
				document.getElementById("OMR_bateaux_per_SQM1").innerHTML = results.rows.item(i).OMR_bateaux_per_SQM;
				document.getElementById("SALE_OMR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_bateaux_per_SQM;
				document.getElementById("OMR_plata_per_SQM1").innerHTML = results.rows.item(i).OMR_plata_per_SQM;
				document.getElementById("SALE_OMR_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_plata_per_SQM;
				
				
				//BHD
				document.getElementById("BHD_price_per_SQM1").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).BHD_Roman_Price_per_SQM;
				document.getElementById("SALE_BHD_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_Roman_Price_per_SQM;
				document.getElementById("BHD_stitching_price1").innerHTML = results.rows.item(i).BHD_stitching_price;
				document.getElementById("SALE_BHD_stitching_price1").innerHTML = results.rows.item(i).SALE_BHD_stitching_price;
				document.getElementById("BHD_norm_lining_per_SQM1").innerHTML = results.rows.item(i).BHD_norm_lining_per_SQM;
				document.getElementById("SALE_BHD_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_norm_lining_per_SQM;
				document.getElementById("BHD_branded_lining_per_SQM1").innerHTML = results.rows.item(i).BHD_branded_lining_per_SQM;
				document.getElementById("SALE_BHD_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_branded_lining_per_SQM;
				document.getElementById("BHD_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).BHD_cataluna_blackout_per_SQM;
				document.getElementById("SALE_BHD_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_cataluna_blackout_per_SQM;
				document.getElementById("BHD_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).BHD_antartica_blackout_per_SQM;
				document.getElementById("SALE_BHD_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_antartica_blackout_per_SQM;
				document.getElementById("BHD_bateaux_per_SQM1").innerHTML = results.rows.item(i).BHD_bateaux_per_SQM;
				document.getElementById("SALE_BHD_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_bateaux_per_SQM;
				document.getElementById("BHD_plata_per_SQM1").innerHTML = results.rows.item(i).BHD_plata_per_SQM;
				document.getElementById("SALE_BHD_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_plata_per_SQM;
				
				
				//QAR
				document.getElementById("QAR_price_per_SQM1").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).QAR_Roman_Price_per_SQM;
				document.getElementById("SALE_QAR_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_Roman_Price_per_SQM;
				document.getElementById("QAR_stitching_price1").innerHTML = results.rows.item(i).QAR_stitching_price;
				document.getElementById("SALE_QAR_stitching_price1").innerHTML = results.rows.item(i).SALE_QAR_stitching_price;
				document.getElementById("QAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).QAR_norm_lining_per_SQM;
				document.getElementById("SALE_QAR_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_norm_lining_per_SQM;
				document.getElementById("QAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).QAR_branded_lining_per_SQM;
				document.getElementById("SALE_QAR_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_branded_lining_per_SQM;
				document.getElementById("QAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).QAR_cataluna_blackout_per_SQM;
				document.getElementById("SALE_QAR_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_cataluna_blackout_per_SQM;
				document.getElementById("QAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).QAR_antartica_blackout_per_SQM;
				document.getElementById("SALE_QAR_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_antartica_blackout_per_SQM;
				document.getElementById("QAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).QAR_bateaux_per_SQM;
				document.getElementById("SALE_QAR_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_bateaux_per_SQM;
				document.getElementById("QAR_plata_per_SQM1").innerHTML = results.rows.item(i).QAR_plata_per_SQM;
				document.getElementById("SALE_QAR_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_plata_per_SQM;
				
				
				//KWD
				document.getElementById("KWD_price_per_SQM1").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).KWD_Roman_Price_per_SQM;
				document.getElementById("SALE_KWD_Roman_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_Roman_Price_per_SQM;
				document.getElementById("KWD_stitching_price1").innerHTML = results.rows.item(i).KWD_stitching_price;
				document.getElementById("SALE_KWD_stitching_price1").innerHTML = results.rows.item(i).SALE_KWD_stitching_price;
				document.getElementById("KWD_norm_lining_per_SQM1").innerHTML = results.rows.item(i).KWD_norm_lining_per_SQM;
				document.getElementById("SALE_KWD_norm_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_norm_lining_per_SQM;
				document.getElementById("KWD_branded_lining_per_SQM1").innerHTML = results.rows.item(i).KWD_branded_lining_per_SQM;
				document.getElementById("SALE_KWD_branded_lining_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_branded_lining_per_SQM;
				document.getElementById("KWD_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).KWD_cataluna_blackout_per_SQM;
				document.getElementById("SALE_KWD_cataluna_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_cataluna_blackout_per_SQM;
				document.getElementById("KWD_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).KWD_antartica_blackout_per_SQM;
				document.getElementById("SALE_KWD_antartica_blackout_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_antartica_blackout_per_SQM;
				document.getElementById("KWD_bateaux_per_SQM1").innerHTML = results.rows.item(i).KWD_bateaux_per_SQM;
				document.getElementById("SALE_KWD_bateaux_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_bateaux_per_SQM;
				document.getElementById("KWD_plata_per_SQM1").innerHTML = results.rows.item(i).KWD_plata_per_SQM;
				document.getElementById("SALE_KWD_plata_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_plata_per_SQM;
				
				/* Fabric End */
				
				/* Pleated_Blinds start */ 
				
				document.getElementById("item_code21").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand21").innerHTML = results.rows.item(i).brand;
				document.getElementById("catalogue_name21").innerHTML = results.rows.item(i).catalogue_name;
				document.getElementById("Minimum_Chargeable21").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("additional_notes21").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				document.getElementById("item_image211").src = image;
				document.getElementById("item_image212").src = image1;
				document.getElementById("item_image213").src = image2;
				document.getElementById("item_image214").src = image3; 
				
				
				//  AED
				document.getElementById("AED_price_per_SQM21").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM21").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_AED_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).SALE_AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("AED_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).AED_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_AED_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).SALE_AED_Price_with_Guide_Rope_per_SQM;
				
				//  SAR
				document.getElementById("SAR_price_per_SQM21").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM21").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_SAR_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SAR_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).SAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_SAR_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Guide_Rope_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM21").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM21").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_QAR_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("QAR_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).QAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_QAR_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Guide_Rope_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM21").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM21").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_OMR_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("OMR_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).OMR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_OMR_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Guide_Rope_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM21").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM21").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_BHD_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("BHD_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).BHD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_BHD_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Guide_Rope_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM21").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM21").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_KWD_Price_with_Mono_Command_Ball_Chain_System21").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("KWD_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).KWD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_KWD_Price_with_Guide_Rope_per_SQM21").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Guide_Rope_per_SQM;
				
				//all currency
				
				//  AED
				document.getElementById("AED_price_per_SQM211").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM211").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_AED_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).SALE_AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("AED_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).AED_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_AED_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).SALE_AED_Price_with_Guide_Rope_per_SQM;
				//  SAR
				document.getElementById("SAR_price_per_SQM211").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM211").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_SAR_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SAR_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).SAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_SAR_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Guide_Rope_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM211").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM211").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_QAR_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("QAR_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).QAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_QAR_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Guide_Rope_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM211").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM211").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_OMR_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("OMR_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).OMR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_OMR_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Guide_Rope_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM211").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM211").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_BHD_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("BHD_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).BHD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_BHD_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Guide_Rope_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM211").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM211").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_KWD_Price_with_Mono_Command_Ball_Chain_System211").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("KWD_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).KWD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_KWD_Price_with_Guide_Rope_per_SQM211").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Guide_Rope_per_SQM;
				
				
				
				/* Pleated_Blinds End */
				
				
				
				/* Folding_Door start*/
				
				document.getElementById("item_code22").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand22").innerHTML = results.rows.item(i).brand;
				document.getElementById("Collection_name22").innerHTML = results.rows.item(i).Collection_name;
				document.getElementById("Minimum_Chargeable22").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("Maximum_Height22").innerHTML = results.rows.item(i).Maximum_Height;
				document.getElementById("additional_notes22").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				document.getElementById("item_image221").src = image;
				document.getElementById("item_image222").src = image1;
				document.getElementById("item_image223").src = image2;
				document.getElementById("item_image224").src = image3; 
				
				//  AED
				document.getElementById("AED_price_per_SQM22").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM22").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).AED_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_AED_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).SALE_AED_Price_for_Window_Glass_per_Piece;
				document.getElementById("AED_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).AED_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_AED_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).SALE_AED_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  SAR
				document.getElementById("SAR_price_per_SQM22").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM22").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).SAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_SAR_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SAR_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).SAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_SAR_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  QAR
				document.getElementById("QAR_price_per_SQM22").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM22").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).QAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_QAR_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("QAR_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).QAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_QAR_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  OMR
				document.getElementById("OMR_price_per_SQM22").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM22").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).OMR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_OMR_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Window_Glass_per_Piece;
				document.getElementById("OMR_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).OMR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_OMR_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  BHD
				document.getElementById("BHD_price_per_SQM22").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM22").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).BHD_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_BHD_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Window_Glass_per_Piece;
				document.getElementById("BHD_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).BHD_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_BHD_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  KWD
				document.getElementById("KWD_price_per_SQM22").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM22").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).KWD_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_KWD_Price_for_Window_Glass_per_Piece22").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Window_Glass_per_Piece;
				document.getElementById("KWD_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).KWD_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_KWD_Price_for_Decorative_Window_Glass_Film_per_Piece22").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Decorative_Window_Glass_Film_per_Piece;
				
				//all currency
				
				// AED
				document.getElementById("AED_price_per_SQM222").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM222").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).AED_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_AED_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).SALE_AED_Price_for_Window_Glass_per_Piece;
				document.getElementById("AED_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).AED_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_AED_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).SALE_AED_Price_for_Decorative_Window_Glass_Film_per_Piece;
				// SAR
				document.getElementById("SAR_price_per_SQM222").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM222").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).SAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_SAR_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SAR_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).SAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_SAR_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				// QAR
				document.getElementById("QAR_price_per_SQM222").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM222").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).QAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_QAR_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Window_Glass_per_Piece;
				document.getElementById("QAR_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).QAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_QAR_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  OMR
				document.getElementById("OMR_price_per_SQM222").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM222").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).OMR_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_OMR_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Window_Glass_per_Piece;
				document.getElementById("OMR_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).OMR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_OMR_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  BHD
				document.getElementById("BHD_price_per_SQM222").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM222").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).BHD_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_BHD_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Window_Glass_per_Piece;
				document.getElementById("BHD_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).BHD_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_BHD_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Decorative_Window_Glass_Film_per_Piece;
				//  KWD
				document.getElementById("KWD_price_per_SQM222").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM222").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).KWD_Price_for_Window_Glass_per_Piece;
				document.getElementById("SALE_KWD_Price_for_Window_Glass_per_Piece222").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Window_Glass_per_Piece;
				document.getElementById("KWD_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).KWD_Price_for_Decorative_Window_Glass_Film_per_Piece;
				document.getElementById("SALE_KWD_Price_for_Decorative_Window_Glass_Film_per_Piece222").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Decorative_Window_Glass_Film_per_Piece;
		
				
				/* Wooden_Roman */
				
				document.getElementById("item_code23").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand23").innerHTML = results.rows.item(i).brand;
				document.getElementById("catalogue_name23").innerHTML = results.rows.item(i).catalogue_name;
				document.getElementById("Width23").innerHTML = results.rows.item(i).Width;
				document.getElementById("Minimum_Chargeable23").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("additional_notes23").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				document.getElementById("item_image231").src = image;
				document.getElementById("item_image232").src = image1;
				document.getElementById("item_image233").src = image2;
				document.getElementById("item_image234").src = image3; 
				
				//  AED
				document.getElementById("AED_price_per_SQM23").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM23").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).AED_price_with_Border_per_SQM;
				document.getElementById("SALE_AED_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_AED_price_with_Border_per_SQM;
				document.getElementById("AED_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).AED_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_AED_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_AED_price_with_Fabric_Lining_per_SQM;
				document.getElementById("AED_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).AED_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_AED_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).SALE_AED_price_with_Vensy_Rail_per_SQM;
				document.getElementById("AED_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).AED_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_AED_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_AED_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  SAR
				document.getElementById("SAR_price_per_SQM23").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM23").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).SAR_price_with_Border_per_SQM;
				document.getElementById("SALE_SAR_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_SAR_price_with_Border_per_SQM;
				document.getElementById("SAR_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_SAR_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_SAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SAR_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).SAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_SAR_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).SALE_SAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SAR_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).SAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_SAR_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_SAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM23").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM23").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).QAR_price_with_Border_per_SQM;
				document.getElementById("SALE_QAR_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_QAR_price_with_Border_per_SQM;
				document.getElementById("QAR_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).QAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_QAR_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_QAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("QAR_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).QAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_QAR_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).SALE_QAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("QAR_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).QAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_QAR_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_QAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM23").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM23").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).OMR_price_with_Border_per_SQM;
				document.getElementById("SALE_OMR_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_OMR_price_with_Border_per_SQM;
				document.getElementById("OMR_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).OMR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_OMR_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_OMR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("OMR_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).OMR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_OMR_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).SALE_OMR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("OMR_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).OMR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_OMR_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_OMR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM23").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM23").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).BHD_price_with_Border_per_SQM;
				document.getElementById("SALE_BHD_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_BHD_price_with_Border_per_SQM;
				document.getElementById("BHD_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).BHD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_BHD_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_BHD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("BHD_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).BHD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_BHD_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).SALE_BHD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("BHD_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).BHD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_BHD_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_BHD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM23").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM23").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).KWD_price_with_Border_per_SQM;
				document.getElementById("SALE_KWD_price_with_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_KWD_price_with_Border_per_SQM;
				document.getElementById("KWD_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).KWD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_KWD_price_with_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_KWD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("KWD_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).KWD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_KWD_price_with_Vensy_Rail_per_SQM23").innerHTML = results.rows.item(i).SALE_KWD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("KWD_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).KWD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_KWD_price_with_Vensy_Rail_and_Border_per_SQM23").innerHTML = results.rows.item(i).SALE_KWD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM23").innerHTML = results.rows.item(i).SALE_KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				
				//all currency
				
				//  AED
				document.getElementById("AED_price_per_SQM233").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM233").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).AED_price_with_Border_per_SQM;
				document.getElementById("SALE_AED_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_AED_price_with_Border_per_SQM;
				document.getElementById("AED_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).AED_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_AED_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_AED_price_with_Fabric_Lining_per_SQM;
				document.getElementById("AED_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).AED_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_AED_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).SALE_AED_price_with_Vensy_Rail_per_SQM;
				document.getElementById("AED_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).AED_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_AED_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_AED_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_AED_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  SAR
				document.getElementById("SAR_price_per_SQM233").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM233").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).SAR_price_with_Border_per_SQM;
				document.getElementById("SALE_SAR_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_SAR_price_with_Border_per_SQM;
				document.getElementById("SAR_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_SAR_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_SAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SAR_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).SAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_SAR_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).SALE_SAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SAR_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).SAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_SAR_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_SAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_SAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM233").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM233").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("QAR_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).QAR_price_with_Border_per_SQM;
				document.getElementById("SALE_QAR_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_QAR_price_with_Border_per_SQM;
				document.getElementById("QAR_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).QAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_QAR_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_QAR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("QAR_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).QAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_QAR_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).SALE_QAR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("QAR_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).QAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_QAR_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_QAR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_QAR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM233").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM233").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).OMR_price_with_Border_per_SQM;
				document.getElementById("SALE_OMR_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_OMR_price_with_Border_per_SQM;
				document.getElementById("OMR_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).OMR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_OMR_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_OMR_price_with_Fabric_Lining_per_SQM;
				document.getElementById("OMR_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).OMR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_OMR_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).SALE_OMR_price_with_Vensy_Rail_per_SQM;
				document.getElementById("OMR_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).OMR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_OMR_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_OMR_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_OMR_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM233").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM233").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).BHD_price_with_Border_per_SQM;
				document.getElementById("SALE_BHD_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_BHD_price_with_Border_per_SQM;
				document.getElementById("BHD_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).BHD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_BHD_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_BHD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("BHD_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).BHD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_BHD_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).SALE_BHD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("BHD_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).BHD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_BHD_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_BHD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_BHD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM233").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM233").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).KWD_price_with_Border_per_SQM;
				document.getElementById("SALE_KWD_price_with_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_KWD_price_with_Border_per_SQM;
				document.getElementById("KWD_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).KWD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("SALE_KWD_price_with_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_KWD_price_with_Fabric_Lining_per_SQM;
				document.getElementById("KWD_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).KWD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("SALE_KWD_price_with_Vensy_Rail_per_SQM233").innerHTML = results.rows.item(i).SALE_KWD_price_with_Vensy_Rail_per_SQM;
				document.getElementById("KWD_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).KWD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("SALE_KWD_price_with_Vensy_Rail_and_Border_per_SQM233").innerHTML = results.rows.item(i).SALE_KWD_price_with_Vensy_Rail_and_Border_per_SQM;
				document.getElementById("KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				document.getElementById("SALE_KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM233").innerHTML = results.rows.item(i).SALE_KWD_price_with_Vensy_Rail_and_Fabric_Lining_per_SQM;
				
				
				
				/* Awning start */
				
				document.getElementById("item_code24").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand24").innerHTML = results.rows.item(i).brand;
				document.getElementById("Type24").innerHTML = results.rows.item(i).Type;
				document.getElementById("Minimum_Chargeable24").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("Maximum_Width24").innerHTML = results.rows.item(i).Maximum_Width;
				document.getElementById("Maximum_Projection24").innerHTML = results.rows.item(i).Maximum_Projection;
				document.getElementById("Minimum_Projection24").innerHTML = results.rows.item(i).Minimum_Projection;
				document.getElementById("additional_notes24").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				document.getElementById("item_image241").src = image;
				document.getElementById("item_image242").src = image1;
				document.getElementById("item_image243").src = image2;
				document.getElementById("item_image244").src = image3; 
				
				
				//  AED
				document.getElementById("AED_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).AED_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_AED_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).SALE_AED_Price_for_Canopy_per_LMT;
				document.getElementById("AED_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).AED_Price_for_Levante_per_SQM;
				document.getElementById("SALE_AED_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).SALE_AED_Price_for_Levante_per_SQM;
				document.getElementById("AED_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).AED_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_AED_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).SALE_AED_Price_for_Arm_Type_per_SQM;
				document.getElementById("AED_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).AED_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_AED_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).SALE_AED_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("AED_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).AED_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_AED_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).SALE_AED_Price_for_Winter_Garden_per_SQM;
				document.getElementById("AED_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).AED_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_AED_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).SALE_AED_Price_for_Sky_Light_per_SQM;
				
				//  SAR
				
				document.getElementById("SAR_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).SAR_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_SAR_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Canopy_per_LMT;
				document.getElementById("SAR_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).SAR_Price_for_Levante_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Levante_per_SQM;
				document.getElementById("SAR_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).SAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SAR_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).SAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SAR_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).SAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SAR_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).SAR_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Sky_Light_per_SQM;
				//  QAR
				document.getElementById("QAR_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).QAR_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_QAR_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Canopy_per_LMT;
				document.getElementById("QAR_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).QAR_Price_for_Levante_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Levante_per_SQM;
				document.getElementById("QAR_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).QAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("QAR_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).QAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("QAR_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).QAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("QAR_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).QAR_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Sky_Light_per_SQM;
				//  OMR
				document.getElementById("OMR_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).OMR_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_OMR_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Canopy_per_LMT;
				document.getElementById("OMR_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).OMR_Price_for_Levante_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Levante_per_SQM;
				document.getElementById("OMR_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).OMR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Arm_Type_per_SQM;
				document.getElementById("OMR_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).OMR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("OMR_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).OMR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("OMR_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).OMR_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Sky_Light_per_SQM;
				//  BHD
				document.getElementById("BHD_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).BHD_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_BHD_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Canopy_per_LMT;
				document.getElementById("BHD_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).BHD_Price_for_Levante_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Levante_per_SQM;
				document.getElementById("BHD_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).BHD_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Arm_Type_per_SQM;
				document.getElementById("BHD_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).BHD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("BHD_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).BHD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("BHD_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).BHD_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Sky_Light_per_SQM;
				//  KWD
				document.getElementById("KWD_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).KWD_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_KWD_Price_for_Canopy_per_LMT24").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Canopy_per_LMT;
				document.getElementById("KWD_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).KWD_Price_for_Levante_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Levante_per_SQM24").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Levante_per_SQM;
				document.getElementById("KWD_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).KWD_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Arm_Type_per_SQM24").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Arm_Type_per_SQM;
				document.getElementById("KWD_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).KWD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Arm_Type_Cassette_type_per_SQM24").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("KWD_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).KWD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Winter_Garden_per_SQM24").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("KWD_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).KWD_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Sky_Light_per_SQM24").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Sky_Light_per_SQM;
				
				//all currency
				
				//  AED
				document.getElementById("AED_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).AED_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_AED_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).SALE_AED_Price_for_Canopy_per_LMT;
				document.getElementById("AED_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).AED_Price_for_Levante_per_SQM;
				document.getElementById("SALE_AED_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).SALE_AED_Price_for_Levante_per_SQM;
				document.getElementById("AED_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).AED_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_AED_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).SALE_AED_Price_for_Arm_Type_per_SQM;
				document.getElementById("AED_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).AED_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_AED_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).SALE_AED_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("AED_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).AED_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_AED_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).SALE_AED_Price_for_Winter_Garden_per_SQM;
				document.getElementById("AED_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).AED_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_AED_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).SALE_AED_Price_for_Sky_Light_per_SQM;
				//  SAR
				document.getElementById("SAR_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).SAR_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_SAR_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Canopy_per_LMT;
				document.getElementById("SAR_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).SAR_Price_for_Levante_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Levante_per_SQM;
				document.getElementById("SAR_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).SAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SAR_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).SAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SAR_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).SAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SAR_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).SAR_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_SAR_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).SALE_SAR_Price_for_Sky_Light_per_SQM;
				//  QAR
				document.getElementById("QAR_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).QAR_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_QAR_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Canopy_per_LMT;
				document.getElementById("QAR_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).QAR_Price_for_Levante_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Levante_per_SQM;
				document.getElementById("QAR_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).QAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Arm_Type_per_SQM;
				document.getElementById("QAR_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).QAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("QAR_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).QAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("QAR_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).QAR_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_QAR_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).SALE_QAR_Price_for_Sky_Light_per_SQM;
				//  OMR
				document.getElementById("OMR_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).OMR_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_OMR_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Canopy_per_LMT;
				document.getElementById("OMR_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).OMR_Price_for_Levante_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Levante_per_SQM;
				document.getElementById("OMR_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).OMR_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Arm_Type_per_SQM;
				document.getElementById("OMR_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).OMR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("OMR_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).OMR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Winter_Garden_per_SQM;
				document.getElementById("OMR_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).OMR_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_OMR_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).SALE_OMR_Price_for_Sky_Light_per_SQM;
				//  BHD
				document.getElementById("BHD_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).BHD_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_BHD_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Canopy_per_LMT;
				document.getElementById("BHD_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).BHD_Price_for_Levante_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Levante_per_SQM;
				document.getElementById("BHD_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).BHD_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Arm_Type_per_SQM;
				document.getElementById("BHD_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).BHD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("BHD_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).BHD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("BHD_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).BHD_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_BHD_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).SALE_BHD_Price_for_Sky_Light_per_SQM;
				//  KWD
				document.getElementById("KWD_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).KWD_Price_for_Canopy_per_LMT;
				document.getElementById("SALE_KWD_Price_for_Canopy_per_LMT244").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Canopy_per_LMT;
				document.getElementById("KWD_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).KWD_Price_for_Levante_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Levante_per_SQM244").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Levante_per_SQM;
				document.getElementById("KWD_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).KWD_Price_for_Arm_Type_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Arm_Type_per_SQM244").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Arm_Type_per_SQM;
				document.getElementById("KWD_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).KWD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Arm_Type_Cassette_type_per_SQM244").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Arm_Type_Cassette_type_per_SQM;
				document.getElementById("KWD_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).KWD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Winter_Garden_per_SQM244").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Winter_Garden_per_SQM;
				document.getElementById("KWD_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).KWD_Price_for_Sky_Light_per_SQM;
				document.getElementById("SALE_KWD_Price_for_Sky_Light_per_SQM244").innerHTML = results.rows.item(i).SALE_KWD_Price_for_Sky_Light_per_SQM;
				
				/* Awning end */
				
				/* Combi_Shades start*/
				
				document.getElementById("item_code25").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand25").innerHTML = results.rows.item(i).brand;
				document.getElementById("catalogue_name25").innerHTML = results.rows.item(i).catalogue_name;
				document.getElementById("Width25").innerHTML = results.rows.item(i).Width;
				document.getElementById("Minimum_Chargeable25").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("additional_notes25").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				document.getElementById("item_image251").src = image;
				document.getElementById("item_image252").src = image1;
				document.getElementById("item_image253").src = image2;
				document.getElementById("item_image254").src = image3; 
				
				//  AED
				document.getElementById("AED_price_per_SQM25").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM25").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).AED_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_AED_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).SALE_AED_Price_with_Cassete_LOUVO_per_SQM;
				//  SAR
				document.getElementById("SAR_price_per_SQM25").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM25").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).SAR_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_SAR_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Cassete_LOUVO_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM25").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM25").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).QAR_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_QAR_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Cassete_LOUVO_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM25").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM25").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).OMR_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_OMR_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Cassete_LOUVO_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM25").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM25").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).BHD_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_BHD_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Cassete_LOUVO_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM25").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM25").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).KWD_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_KWD_Price_with_Cassete_LOUVO_per_SQM25").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Cassete_LOUVO_per_SQM;
				
				//all currency
				
				//  AED
				document.getElementById("AED_price_per_SQM255").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM255").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).AED_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_AED_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).SALE_AED_Price_with_Cassete_LOUVO_per_SQM;
				//  SAR
				document.getElementById("SAR_price_per_SQM255").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM255").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).SAR_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_SAR_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Cassete_LOUVO_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM255").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM255").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).QAR_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_QAR_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Cassete_LOUVO_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM255").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM255").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).OMR_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_OMR_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Cassete_LOUVO_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM255").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM255").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).BHD_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_BHD_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Cassete_LOUVO_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM255").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM255").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).KWD_Price_with_Cassete_LOUVO_per_SQM;
				document.getElementById("SALE_KWD_Price_with_Cassete_LOUVO_per_SQM255").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Cassete_LOUVO_per_SQM;
				
				/* Combi_Shades end */
				
				
								
				/* Wallpaper start */
												
				document.getElementById("item_code26").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand26").innerHTML = results.rows.item(i).brand;
				document.getElementById("Roll_width").innerHTML = results.rows.item(i).Roll_width;
				document.getElementById("Roll_height").innerHTML = results.rows.item(i).Roll_height;
				document.getElementById("Repeat").innerHTML = results.rows.item(i).Repeat;
				document.getElementById("Minimum_Chargeable26").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("additional_notes26").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				
				document.getElementById("item_image261").src = image;
				document.getElementById("item_image262").src = image1;
				document.getElementById("item_image263").src = image2;
				document.getElementById("item_image264").src = image3; 
				
				// AED
				
				document.getElementById("AED_price_per_SQM26").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM26").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_per_Roll").innerHTML = results.rows.item(i).AED_Price_per_Roll;
				document.getElementById("SALE_AED_Price_per_Roll").innerHTML = results.rows.item(i).SALE_AED_Price_per_Roll;
				document.getElementById("AED_Price_per_Set").innerHTML = results.rows.item(i).AED_Price_per_Set;
				document.getElementById("SALE_AED_Price_per_Set").innerHTML = results.rows.item(i).SALE_AED_Price_per_Set;
				document.getElementById("AED_Price_for_fixing_charge").innerHTML = results.rows.item(i).AED_Price_for_fixing_charge;
				document.getElementById("SALE_AED_Price_for_fixing_charge").innerHTML = results.rows.item(i).SALE_AED_Price_for_fixing_charge;
				// SAR
				document.getElementById("SAR_price_per_SQM26").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM26").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_per_Roll").innerHTML = results.rows.item(i).SAR_Price_per_Roll;
				document.getElementById("SALE_SAR_Price_per_Roll").innerHTML = results.rows.item(i).SALE_SAR_Price_per_Roll;
				document.getElementById("SAR_Price_per_Set").innerHTML = results.rows.item(i).SAR_Price_per_Set;
				document.getElementById("SALE_SAR_Price_per_Set").innerHTML = results.rows.item(i).SALE_SAR_Price_per_Set;
				document.getElementById("SAR_Price_for_fixing_charge").innerHTML = results.rows.item(i).SAR_Price_for_fixing_charge;
				document.getElementById("SALE_SAR_Price_for_fixing_charge").innerHTML = results.rows.item(i).SALE_SAR_Price_for_fixing_charge;
				// QAR
				document.getElementById("QAR_price_per_SQM26").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM26").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_per_Roll").innerHTML = results.rows.item(i).QAR_Price_per_Roll;
				document.getElementById("SALE_QAR_Price_per_Roll").innerHTML = results.rows.item(i).SALE_QAR_Price_per_Roll;
				document.getElementById("QAR_Price_per_Set").innerHTML = results.rows.item(i).QAR_Price_per_Set;
				document.getElementById("SALE_QAR_Price_per_Set").innerHTML = results.rows.item(i).SALE_QAR_Price_per_Set;
				document.getElementById("QAR_Price_for_fixing_charge").innerHTML = results.rows.item(i).QAR_Price_for_fixing_charge;
				document.getElementById("SALE_QAR_Price_for_fixing_charge").innerHTML = results.rows.item(i).SALE_QAR_Price_for_fixing_charge;
				// OMR
				document.getElementById("OMR_price_per_SQM26").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM26").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_per_Roll").innerHTML = results.rows.item(i).OMR_Price_per_Roll;
				document.getElementById("SALE_OMR_Price_per_Roll").innerHTML = results.rows.item(i).SALE_OMR_Price_per_Roll;
				document.getElementById("OMR_Price_per_Set").innerHTML = results.rows.item(i).OMR_Price_per_Set;
				document.getElementById("SALE_OMR_Price_per_Set").innerHTML = results.rows.item(i).SALE_OMR_Price_per_Set;
				document.getElementById("OMR_Price_for_fixing_charge").innerHTML = results.rows.item(i).OMR_Price_for_fixing_charge;
				document.getElementById("SALE_OMR_Price_for_fixing_charge").innerHTML = results.rows.item(i).SALE_OMR_Price_for_fixing_charge;
				// BHD
				document.getElementById("BHD_price_per_SQM26").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM26").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_per_Roll").innerHTML = results.rows.item(i).BHD_Price_per_Roll;
				document.getElementById("SALE_BHD_Price_per_Roll").innerHTML = results.rows.item(i).SALE_BHD_Price_per_Roll;
				document.getElementById("BHD_Price_per_Set").innerHTML = results.rows.item(i).BHD_Price_per_Set;
				document.getElementById("SALE_BHD_Price_per_Set").innerHTML = results.rows.item(i).SALE_BHD_Price_per_Set;
				document.getElementById("BHD_Price_for_fixing_charge").innerHTML = results.rows.item(i).BHD_Price_for_fixing_charge;
				document.getElementById("SALE_BHD_Price_for_fixing_charge").innerHTML = results.rows.item(i).SALE_BHD_Price_for_fixing_charge;
				//KWD
				document.getElementById("KWD_price_per_SQM26").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM26").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_per_Roll").innerHTML = results.rows.item(i).KWD_Price_per_Roll;
				document.getElementById("SALE_KWD_Price_per_Roll").innerHTML = results.rows.item(i).SALE_KWD_Price_per_Roll;
				document.getElementById("KWD_Price_per_Set").innerHTML = results.rows.item(i).KWD_Price_per_Set;
				document.getElementById("SALE_KWD_Price_per_Set").innerHTML = results.rows.item(i).SALE_KWD_Price_per_Set;
				document.getElementById("KWD_Price_for_fixing_charge").innerHTML = results.rows.item(i).KWD_Price_for_fixing_charge;
				document.getElementById("SALE_KWD_Price_for_fixing_charge").innerHTML = results.rows.item(i).SALE_KWD_Price_for_fixing_charge;
				
				
				// All Currency
				
				// AED
				
				document.getElementById("AED_price_per_SQM266").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM266").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_per_Roll1").innerHTML = results.rows.item(i).AED_Price_per_Roll;
				document.getElementById("SALE_AED_Price_per_Roll1").innerHTML = results.rows.item(i).SALE_AED_Price_per_Roll;
				document.getElementById("AED_Price_per_Set1").innerHTML = results.rows.item(i).AED_Price_per_Set;
				document.getElementById("SALE_AED_Price_per_Set1").innerHTML = results.rows.item(i).SALE_AED_Price_per_Set;
				document.getElementById("AED_Price_for_fixing_charge1").innerHTML = results.rows.item(i).AED_Price_for_fixing_charge;
				document.getElementById("SALE_AED_Price_for_fixing_charge1").innerHTML = results.rows.item(i).SALE_AED_Price_for_fixing_charge;
				// SAR
				document.getElementById("SAR_price_per_SQM266").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM266").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_per_Roll1").innerHTML = results.rows.item(i).SAR_Price_per_Roll;
				document.getElementById("SALE_SAR_Price_per_Roll1").innerHTML = results.rows.item(i).SALE_SAR_Price_per_Roll;
				document.getElementById("SAR_Price_per_Set1").innerHTML = results.rows.item(i).SAR_Price_per_Set;
				document.getElementById("SALE_SAR_Price_per_Set1").innerHTML = results.rows.item(i).SALE_SAR_Price_per_Set;
				document.getElementById("SAR_Price_for_fixing_charge1").innerHTML = results.rows.item(i).SAR_Price_for_fixing_charge;
				document.getElementById("SALE_SAR_Price_for_fixing_charge1").innerHTML = results.rows.item(i).SALE_SAR_Price_for_fixing_charge;
				// QAR
				document.getElementById("QAR_price_per_SQM266").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM266").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_per_Roll1").innerHTML = results.rows.item(i).QAR_Price_per_Roll;
				document.getElementById("SALE_QAR_Price_per_Roll1").innerHTML = results.rows.item(i).SALE_QAR_Price_per_Roll;
				document.getElementById("QAR_Price_per_Set1").innerHTML = results.rows.item(i).QAR_Price_per_Set;
				document.getElementById("SALE_QAR_Price_per_Set1").innerHTML = results.rows.item(i).SALE_QAR_Price_per_Set;
				document.getElementById("QAR_Price_for_fixing_charge1").innerHTML = results.rows.item(i).QAR_Price_for_fixing_charge;
				document.getElementById("SALE_QAR_Price_for_fixing_charge1").innerHTML = results.rows.item(i).SALE_QAR_Price_for_fixing_charge;
				// OMR
				document.getElementById("OMR_price_per_SQM266").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM266").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_per_Roll1").innerHTML = results.rows.item(i).OMR_Price_per_Roll;
				document.getElementById("SALE_OMR_Price_per_Roll1").innerHTML = results.rows.item(i).SALE_OMR_Price_per_Roll;
				document.getElementById("OMR_Price_per_Set1").innerHTML = results.rows.item(i).OMR_Price_per_Set;
				document.getElementById("SALE_OMR_Price_per_Set1").innerHTML = results.rows.item(i).SALE_OMR_Price_per_Set;
				document.getElementById("OMR_Price_for_fixing_charge1").innerHTML = results.rows.item(i).OMR_Price_for_fixing_charge;
				document.getElementById("SALE_OMR_Price_for_fixing_charge1").innerHTML = results.rows.item(i).SALE_OMR_Price_for_fixing_charge;
				// BHD
				document.getElementById("BHD_price_per_SQM266").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM266").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_per_Roll1").innerHTML = results.rows.item(i).BHD_Price_per_Roll;
				document.getElementById("SALE_BHD_Price_per_Roll1").innerHTML = results.rows.item(i).SALE_BHD_Price_per_Roll;
				document.getElementById("BHD_Price_per_Set1").innerHTML = results.rows.item(i).BHD_Price_per_Set;
				document.getElementById("SALE_BHD_Price_per_Set1").innerHTML = results.rows.item(i).SALE_BHD_Price_per_Set;
				document.getElementById("BHD_Price_for_fixing_charge1").innerHTML = results.rows.item(i).BHD_Price_for_fixing_charge;
				document.getElementById("SALE_BHD_Price_for_fixing_charge1").innerHTML = results.rows.item(i).SALE_BHD_Price_for_fixing_charge;
				//KWD
				document.getElementById("KWD_price_per_SQM266").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM266").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_per_Roll1").innerHTML = results.rows.item(i).KWD_Price_per_Roll;
				document.getElementById("SALE_KWD_Price_per_Roll1").innerHTML = results.rows.item(i).SALE_KWD_Price_per_Roll;
				document.getElementById("KWD_Price_per_Set1").innerHTML = results.rows.item(i).KWD_Price_per_Set;
				document.getElementById("SALE_KWD_Price_per_Set1").innerHTML = results.rows.item(i).SALE_KWD_Price_per_Set;
				document.getElementById("KWD_Price_for_fixing_charge1").innerHTML = results.rows.item(i).KWD_Price_for_fixing_charge;
				document.getElementById("SALE_KWD_Price_for_fixing_charge1").innerHTML = results.rows.item(i).SALE_KWD_Price_for_fixing_charge;
				
				
				
			/* Wallpaper end */

			/* Vertical Blinds start */
			
				document.getElementById("item_code27").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand27").innerHTML = results.rows.item(i).brand;
				document.getElementById("catalogue_name27").innerHTML = results.rows.item(i).catalogue_name;
				document.getElementById("Minimum_Chargeable27").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("additional_notes27").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				document.getElementById("item_image281").src = image;
				document.getElementById("item_image282").src = image1;
				document.getElementById("item_image283").src = image2;
				document.getElementById("item_image284").src = image3; 
				
				// AED
				
				document.getElementById("AED_price_per_SQM27").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM27").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				// SAR
				document.getElementById("SAR_price_per_SQM27").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM27").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				// QAR
				document.getElementById("QAR_price_per_SQM27").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM27").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				// OMR
				document.getElementById("OMR_price_per_SQM27").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM27").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				// BHD
				document.getElementById("BHD_price_per_SQM27").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM27").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				//KWD
				document.getElementById("KWD_price_per_SQM27").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM27").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				
				
				// All Currency
				
				// AED
				
				document.getElementById("AED_price_per_SQM267").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM267").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				// SAR
				document.getElementById("SAR_price_per_SQM267").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM267").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				// QAR
				document.getElementById("QAR_price_per_SQM267").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM267").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				// OMR
				document.getElementById("OMR_price_per_SQM267").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM267").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				// BHD
				document.getElementById("BHD_price_per_SQM267").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM267").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				//KWD
				document.getElementById("KWD_price_per_SQM267").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM267").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
			
			/* Vertical Blinds ends */
			
			/* Venetian start */
			
				document.getElementById("item_code28").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand28").innerHTML = results.rows.item(i).brand;
				document.getElementById("catalogue_name28").innerHTML = results.rows.item(i).catalogue_name;
				document.getElementById("Minimum_Chargeable28").innerHTML = results.rows.item(i).Minimum_Chargeable;
				document.getElementById("additional_notes28").innerHTML = results.rows.item(i).additional_notes;
				
				// images
				
				document.getElementById("item_image281").src = image;
				document.getElementById("item_image282").src = image1;
				document.getElementById("item_image283").src = image2;
				document.getElementById("item_image284").src = image3; 
				
				
				//  AED
				document.getElementById("AED_price_per_SQM28").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM28").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_AED_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).SALE_AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("AED_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).AED_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_AED_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).SALE_AED_Price_with_Guide_Rope_per_SQM;
				
				//  SAR
				document.getElementById("SAR_price_per_SQM28").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM28").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_SAR_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SAR_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).SAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_SAR_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Guide_Rope_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM28").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM28").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_QAR_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("QAR_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).QAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_QAR_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Guide_Rope_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM28").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM28").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_OMR_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("OMR_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).OMR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_OMR_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Guide_Rope_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM28").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM28").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_BHD_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("BHD_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).BHD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_BHD_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Guide_Rope_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM28").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM28").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_KWD_Price_with_Mono_Command_Ball_Chain_System28").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("KWD_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).KWD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_KWD_Price_with_Guide_Rope_per_SQM28").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Guide_Rope_per_SQM;
				
				//all currency
				
				//  AED
				document.getElementById("AED_price_per_SQM268").innerHTML = results.rows.item(i).AED_price_per_SQM;
				document.getElementById("SALE_AED_price_per_SQM268").innerHTML = results.rows.item(i).SALE_AED_price_per_SQM;
				document.getElementById("AED_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_AED_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).SALE_AED_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("AED_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).AED_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_AED_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).SALE_AED_Price_with_Guide_Rope_per_SQM;
				//  SAR
				document.getElementById("SAR_price_per_SQM268").innerHTML = results.rows.item(i).SAR_price_per_SQM;
				document.getElementById("SALE_SAR_price_per_SQM268").innerHTML = results.rows.item(i).SALE_SAR_price_per_SQM;
				document.getElementById("SAR_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_SAR_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SAR_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).SAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_SAR_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).SALE_SAR_Price_with_Guide_Rope_per_SQM;
				//  QAR
				document.getElementById("QAR_price_per_SQM268").innerHTML = results.rows.item(i).QAR_price_per_SQM;
				document.getElementById("SALE_QAR_price_per_SQM268").innerHTML = results.rows.item(i).SALE_QAR_price_per_SQM;
				document.getElementById("QAR_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_QAR_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("QAR_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).QAR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_QAR_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).SALE_QAR_Price_with_Guide_Rope_per_SQM;
				//  OMR
				document.getElementById("OMR_price_per_SQM268").innerHTML = results.rows.item(i).OMR_price_per_SQM;
				document.getElementById("SALE_OMR_price_per_SQM268").innerHTML = results.rows.item(i).SALE_OMR_price_per_SQM;
				document.getElementById("OMR_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_OMR_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("OMR_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).OMR_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_OMR_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).SALE_OMR_Price_with_Guide_Rope_per_SQM;
				//  BHD
				document.getElementById("BHD_price_per_SQM268").innerHTML = results.rows.item(i).BHD_price_per_SQM;
				document.getElementById("SALE_BHD_price_per_SQM268").innerHTML = results.rows.item(i).SALE_BHD_price_per_SQM;
				document.getElementById("BHD_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_BHD_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("BHD_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).BHD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_BHD_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).SALE_BHD_Price_with_Guide_Rope_per_SQM;
				//  KWD
				document.getElementById("KWD_price_per_SQM268").innerHTML = results.rows.item(i).KWD_price_per_SQM;
				document.getElementById("SALE_KWD_price_per_SQM268").innerHTML = results.rows.item(i).SALE_KWD_price_per_SQM;
				document.getElementById("KWD_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("SALE_KWD_Price_with_Mono_Command_Ball_Chain_System268").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Mono_Command_Ball_Chain_System;
				document.getElementById("KWD_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).KWD_Price_with_Guide_Rope_per_SQM;
				document.getElementById("SALE_KWD_Price_with_Guide_Rope_per_SQM268").innerHTML = results.rows.item(i).SALE_KWD_Price_with_Guide_Rope_per_SQM;
			
							/* Venetian ends */
							
							
							/* Fujikawa Harmony start */
			//	alert("fuji-"+results.rows.item(i).item_code);
				document.getElementById("item_code29").innerHTML = results.rows.item(i).item_code;
				document.getElementById("brand29").innerHTML = results.rows.item(i).brand;
				document.getElementById("catalogue_name29").innerHTML = results.rows.item(i).catalogue_name;
				document.getElementById("Width29").innerHTML = results.rows.item(i).Width;
				document.getElementById("Minimum_Chargeable29").innerHTML = results.rows.item(i).Minimum_Chargeable;
			//	alert("fuji-"+results.rows.item(i).Minimum_Chargeable);
				document.getElementById("additional_notes29").innerHTML = results.rows.item(i).additional_notes;
			//	alert("fuji-"+results.rows.item(i).additional_notes);
				// images
				
			/*	document.getElementById("item_image291").src = image;
				document.getElementById("item_image292").src = image1;
				document.getElementById("item_image293").src = image2;
				document.getElementById("item_image294").src = image3; */
				
			//	alert("AED-"+results.rows.item(i).AED_Premium_Price_per_SQM);
				//  AED
				document.getElementById("AED_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).AED_Premium_Price_per_SQM;
				document.getElementById("SALE_AED_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_AED_Premium_Price_per_SQM;
				document.getElementById("AED_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).AED_Classic_Price_per_SQM;
				document.getElementById("SALE_AED_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_AED_Classic_Price_per_SQM;
				document.getElementById("AED_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).AED_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_AED_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_AED_Premium_Dealer_Price_per_SQM;
				document.getElementById("AED_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).AED_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_AED_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_AED_Classic_Dealer_Price_per_SQM;
				
				//  SAR
				document.getElementById("SAR_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).SAR_Premium_Price_per_SQM;
				document.getElementById("SALE_SAR_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_SAR_Premium_Price_per_SQM;
				document.getElementById("SAR_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).SAR_Classic_Price_per_SQM;
				document.getElementById("SALE_SAR_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_SAR_Classic_Price_per_SQM;
				document.getElementById("SAR_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_SAR_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_SAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SAR_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SAR_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_SAR_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_SAR_Classic_Dealer_Price_per_SQM;
				//  QAR
				document.getElementById("QAR_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).QAR_Premium_Price_per_SQM;
				document.getElementById("SALE_QAR_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_QAR_Premium_Price_per_SQM;
				document.getElementById("QAR_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).QAR_Classic_Price_per_SQM;
				document.getElementById("SALE_QAR_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_QAR_Classic_Price_per_SQM;
				document.getElementById("QAR_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).QAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_QAR_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_QAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("QAR_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).QAR_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_QAR_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_QAR_Classic_Dealer_Price_per_SQM;
				//  OMR
				document.getElementById("OMR_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).OMR_Premium_Price_per_SQM;
				document.getElementById("SALE_OMR_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_OMR_Premium_Price_per_SQM;
				document.getElementById("OMR_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).OMR_Classic_Price_per_SQM;
				document.getElementById("SALE_OMR_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_OMR_Classic_Price_per_SQM;
				document.getElementById("OMR_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).OMR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_OMR_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_OMR_Premium_Dealer_Price_per_SQM;
				document.getElementById("OMR_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).OMR_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_OMR_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_OMR_Classic_Dealer_Price_per_SQM;
				//  BHD
				document.getElementById("BHD_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).BHD_Premium_Price_per_SQM;
				document.getElementById("SALE_BHD_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_BHD_Premium_Price_per_SQM;
				document.getElementById("BHD_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).BHD_Classic_Price_per_SQM;
				document.getElementById("SALE_BHD_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_BHD_Classic_Price_per_SQM;
				document.getElementById("BHD_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).BHD_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_BHD_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_BHD_Premium_Dealer_Price_per_SQM;
				document.getElementById("BHD_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).BHD_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_BHD_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_BHD_Classic_Dealer_Price_per_SQM;
				//  KWD
				document.getElementById("KWD_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).KWD_Premium_Price_per_SQM;
				document.getElementById("SALE_KWD_Premium_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_KWD_Premium_Price_per_SQM;
				document.getElementById("KWD_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).KWD_Classic_Price_per_SQM;
				document.getElementById("SALE_KWD_Classic_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_KWD_Classic_Price_per_SQM;
				document.getElementById("KWD_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).KWD_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_KWD_Premium_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_KWD_Premium_Dealer_Price_per_SQM;
				document.getElementById("KWD_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).KWD_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_KWD_Classic_Dealer_Price_per_SQM29").innerHTML = results.rows.item(i).SALE_KWD_Classic_Dealer_Price_per_SQM;
				
				//all currency
				
				//  AED
				
				document.getElementById("AED_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).AED_Premium_Price_per_SQM;
				document.getElementById("SALE_AED_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_Premium_Price_per_SQM;
				document.getElementById("AED_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).AED_Classic_Price_per_SQM;
				document.getElementById("SALE_AED_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_Classic_Price_per_SQM;
				document.getElementById("AED_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).AED_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_AED_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_Premium_Dealer_Price_per_SQM;
				document.getElementById("AED_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).AED_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_AED_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_AED_Classic_Dealer_Price_per_SQM;
				
				//  SAR
				
				document.getElementById("SAR_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).SAR_Premium_Price_per_SQM;
				document.getElementById("SALE_SAR_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_Premium_Price_per_SQM;
				document.getElementById("SAR_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).SAR_Classic_Price_per_SQM;
				document.getElementById("SALE_SAR_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_Classic_Price_per_SQM;
				document.getElementById("SAR_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_SAR_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SAR_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SAR_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_SAR_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_SAR_Classic_Dealer_Price_per_SQM;
				
				//  QAR
				
				document.getElementById("QAR_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).QAR_Premium_Price_per_SQM;
				document.getElementById("SALE_QAR_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_Premium_Price_per_SQM;
				document.getElementById("QAR_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).QAR_Classic_Price_per_SQM;
				document.getElementById("SALE_QAR_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_Classic_Price_per_SQM;
				document.getElementById("QAR_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).QAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_QAR_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_Premium_Dealer_Price_per_SQM;
				document.getElementById("QAR_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).QAR_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_QAR_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_QAR_Classic_Dealer_Price_per_SQM;
				
				//  OMR
				
				document.getElementById("OMR_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).OMR_Premium_Price_per_SQM;
				document.getElementById("SALE_OMR_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_Premium_Price_per_SQM;
				document.getElementById("OMR_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).OMR_Classic_Price_per_SQM;
				document.getElementById("SALE_OMR_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_Classic_Price_per_SQM;
				document.getElementById("OMR_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).OMR_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_OMR_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_Premium_Dealer_Price_per_SQM;
				document.getElementById("OMR_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).OMR_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_OMR_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_OMR_Classic_Dealer_Price_per_SQM;
				
				//  BHD
				
				document.getElementById("BHD_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).BHD_Premium_Price_per_SQM;
				document.getElementById("SALE_BHD_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_Premium_Price_per_SQM;
				document.getElementById("BHD_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).BHD_Classic_Price_per_SQM;
				document.getElementById("SALE_BHD_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_Classic_Price_per_SQM;
				document.getElementById("BHD_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).BHD_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_BHD_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_Premium_Dealer_Price_per_SQM;
				document.getElementById("BHD_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).BHD_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_BHD_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_BHD_Classic_Dealer_Price_per_SQM;
				
				//  KWD
				
				document.getElementById("KWD_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).KWD_Premium_Price_per_SQM;
				document.getElementById("SALE_KWD_Premium_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_Premium_Price_per_SQM;
				document.getElementById("KWD_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).KWD_Classic_Price_per_SQM;
				document.getElementById("SALE_KWD_Classic_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_Classic_Price_per_SQM;
				document.getElementById("KWD_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).KWD_Premium_Dealer_Price_per_SQM;
				document.getElementById("SALE_KWD_Premium_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_Premium_Dealer_Price_per_SQM;
				document.getElementById("KWD_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).KWD_Classic_Dealer_Price_per_SQM;
				document.getElementById("SALE_KWD_Classic_Dealer_Price_per_SQM1").innerHTML = results.rows.item(i).SALE_KWD_Classic_Dealer_Price_per_SQM;
			
							/* Fujikawa Harmony ends */

								
						/*End additional_data */			
							
						}
			}
				// Transaction success callback
				function successCB() {
						var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100*100*1024);
						db.transaction(queryDB, errorCB);
				}
				// PhoneGap is ready
				function onDeviceReady() {
						var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100*100*1024);
						db.transaction(successCB, errorCB);
				}
				function errorCB(err) {
				//	alert('errror');
				 //   alert("Error processing SQL: "+err.code);
				}
				//fabric seperation
				var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100*100*1024);
				db.transaction(function (tx){
						tx.executeSql('SELECT * FROM productlist where item_code = ? collate NOCASE', [QRcode], function (tx, results) {
								var len = results.rows.length;
								var fabric = results.rows.item(0).fabric;
								var result=fabric.split(':');
								fb_key = result[0];
								fb_percentage = result[1];
								arr_fb_key = fb_key.split(',');
								arr_fb_percentage = fb_percentage.split(',');
								key_length = arr_fb_key.length;
								var i=0;
								while (i<key_length) {
										fab_key = arr_fb_key[i];
										tx.executeSql('SELECT * FROM fabrics where id = ?',[fab_key], function (tx, results1) {
												fabric_name = results1.rows.item(0).fabric_name;
												fabric_key = results1.rows.item(0).id;
												document.getElementById(fabric_key).innerHTML = fabric_name;
										});
										var newrow='<tr><td id='+fab_key+'></td><td data-title="" >'+arr_fb_percentage[i]+'%</td></tr>';
										$('#fabric_add > tbody > tr:last').after(newrow);
										i++;
								}
						});
				});
				db.transaction(function (tx){
						tx.executeSql('SELECT * FROM productlist where item_code = ? collate NOCASE', [QRcode], function (tx, results) {
								var product_possible = results.rows.item(0).product_possible;
								arr_pro_key = product_possible.split(',');
								var len = arr_pro_key.length;
								for(var i=0;i<len;i++){
										pro_key = arr_pro_key[i];
										tx.executeSql('SELECT * FROM products_possible where pos_pdt_id = ?',[pro_key], function (tx, results) {
												product_pos_name = results.rows.item(0).pos_pdt_name;
												var newrow1 = '<tr><td data-title="">'+product_pos_name+'</td></tr>';
												$('#product_pos_add > tbody > tr:last').after(newrow1);
										});
								}
						});
				});
				
				
				