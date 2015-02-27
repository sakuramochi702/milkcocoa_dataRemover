//var milkcocoa = new MilkCocoa("https://{your-app-id}.mlkcca.com/");
/* your-app-id にアプリ作成時に発行される"io-"から始まるapp-idを記入します */
//var ds = milkcocoa.dataStore("{your-dataStore}");

var milkcocoa = new MilkCocoa("https://io-ri6ltx43y.mlkcca.com");
var ds = milkcocoa.dataStore("mao");

function clickEvent(){
	var query = ds.query();
	query.sort("asc").limit(10);
	query.done(function(data) {
		data.forEach(function(value) {
			ds.remove(value.id);
		});
	});
	alert("削除しました");
}

