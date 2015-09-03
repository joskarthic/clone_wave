var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 100 * 1024 * 1024);
db.transaction(function (tx){
    tx.executeSql('SELECT * FROM productlist', [], function (tx, results) {
        var len1 = results.rows.length;
        //alert("productlist row length"+len1);
        localStorage.setItem("productlist_count", len1);
    });
});
db.transaction(function (tx){
    tx.executeSql('SELECT * FROM users', [], function (tx, results) {
        var len2 = results.rows.length;
      //  alert("user row length"+len2);
        localStorage.setItem("users_count", len2);
    });
});
db.transaction(function (tx){
    tx.executeSql('SELECT * FROM fabrics', [], function (tx, results) {
        var len3 = results.rows.length;
       // alert("fabrics row length"+len3);
        localStorage.setItem("fabrics_count", len3);
    });
});
db.transaction(function (tx){
    tx.executeSql('SELECT * FROM products_possible', [], function (tx, results) {
        var len4 = results.rows.length;
        //alert("products_possible row length"+len4);
        localStorage.setItem("products_possible_count", len4);
    });
});
db.transaction(function (tx){
    tx.executeSql('SELECT * FROM show_room', [], function (tx, results) {
        var len5 = results.rows.length;
       // alert("show_room row length"+len5);
        localStorage.setItem("show_room_count", len5);
        
    });
});