var exp = require('express')
var app = exp()

app.use(exp.static('static'));
app.set('view engine','ejs');
var mongojs = require('mongojs')
var db=mongojs('mongodb://VishnuPriya:srikrishna3@ds121105.mlab.com:21105/nsedata',['historical_data'])
const nseHistoricalData = require("nse-historical-data");


var o = require('open')
// app.get('/openn',function(req,res){
// 	o("www.hackerrank.com")

// })
app.get('/',function(req,res){
	db.historical_data.find({},function(err,data){
		
		var indexArr=[];
		var obj=data[0]['2017-01-02'];
		for(var i=0;i<obj.length;i++){
			indexArr.push(obj[i]['Index Name'])
		}
		

		res.render('home',{"arr":indexArr});

	})
	
})
app.get('/test',function(req,res){
	var x={
		"2019-02-20":[{"indexName":"nifty","turnover":20000}],
		"2019-02-21":[{"indexName":"nifty50","turnover":30000}]
	}
	var s={
		"keyy":"value",
		"key":"value1"
	}
	console.log(x['2019-02-20'])
})
app.listen(3000)
