const express = require('express')
const app = express()
var fs = require('fs');
var path = require('path');

app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/readfigures/:deviceid', function (req, res) {  
  var files = fs.readdirSync('./public/'+req.params.deviceid); 

  var EXTENSION = '.png';
  var targetFiles = files.filter(function(file) {
  	return path.extname(file) === EXTENSION;
  });

  res.send(targetFiles);
})

app.get('/readvideo/:deviceid', function (req, res) {
	var files = fs.readdirSync('./public/'+req.params.deviceid); 

  	var EXTENSION = '.mp4';
 	var targetFiles = files.filter(function(file) {
  		return path.extname(file) === EXTENSION;
  	});

  	if(targetFiles.length>0)
  		data='yes'
  	else
  		data = 'no'

  	res.send(data);
})


app.get('/readmetadata/:deviceid', function (req, res) {
	var data={};
	var filename = './public/'+req.params.deviceid;
	data['abstract']= fs.readFileSync(filename+'/Abstract.txt', 'utf-8');
	// data['title'] = fs.readFileSync(filename+'/Title.txt', 'utf-8');
	// data['authors'] = fs.readFileSync(filename+'/Authors.txt', 'utf-8');
	// data['doi'] = fs.readFileSync(filename+'/doi.txt', 'utf-8');
	// , function(err, content) {
	//         if (err) {
	//           onError(err);
	//           return;
	//         }
	//         m= content
	//         res.send(content)
	//         // onFileContent(filename, content);
	//       });



	// function readFiles(dirname, onFileContent, onError) {
	//   fs.readdirSync(dirname, function(err, filenames) {
	//     if (err) {
	//       onError(err);
	//       return;
	//     }

	//     var EXTENSION = '.txt';
	//  	var targetFiles = files.filter(function(file) {
	//   		return path.extname(file) === EXTENSION;
	//   	});

	//     targetFiles.forEach(function(filename) {
	//       fs.readFile(dirname + filename, 'utf-8', function(err, content) {
	//         if (err) {
	//           onError(err);
	//           return;
	//         }
	//         onFileContent(filename, content);
	//       });
	//     });
	//   });
	// }

	// var data = {};
	// readFiles('dirname/', function(filename, content) {
	//   data[filename] = content;
	// }, function(err) {
	//   throw err;
	// });

  // var files = fs.readdirSync('./public/'+req.params.deviceid); 

  // var EXTENSION = '.txt';
  // var targetFiles = files.filter(function(file) {
  // 	return path.extname(file) === EXTENSION;
  // });



  // filenames.forEach(function(filename) {
  //     fs.readFile(dirname + filename, 'utf-8', function(err, content) {
  //       if (err) {
  //         onError(err);
  //         return;
  //       }
  //       onFileContent(filename, content);
  //     });
  //   });

  res.send(data);
})
// app.get('/readfigures/:deviceid',(req,res) => var files = fs.readdirSync('/public/'+req.params.deviceid); res.send(files))


app.listen(5000, () => console.log('Example app listening on port 3000!'))










