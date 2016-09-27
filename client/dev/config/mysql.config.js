var mysql      = require('mysql');

if(process.env.NODE_ENV && process.env.NODE_ENV === "dev") {
	var pool = mysql.createPool({
	  host     : '127.0.0.1',
	  user     : 'root',
	  password : '123456',
	  database : 'NewABTest'
	});

}else{
	var pool = mysql.createPool({
	  host     : '127.0.0.1',
	  user     : 'root',
	  password : 'rock4me',
	  database : 'ABTest'
	});
}


module.exports = pool;