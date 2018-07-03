
	
$('.device-image').on('click', function(){  
	alert('click');
	var m = []
	var testFolder;

	testFolder = './' + this.id + '/';
	console.log(testFolder);
	console.log(m);
	
	var url = window.location.href;     // Returns full URL
	console.log(url)
	var params = url.split('?');
	console.log('params= ' + params);
	var url = params[0]
	console.log('url = ' + url);
	var folder = params[1]
	console.log('folder= ' + folder);
	if(folder){
		testFolder = folder+'/'
		console.log('param is:'+ testFolder)
	}

	getpathstr = url + 'readfigures/'+testFolder;
	console.log(url)


	$.ajax({
	     async: false,
	     type: 'GET',
	     url: getpathstr,
	     success: function(data) {
	          //callback

	          var ashu = data;
	          console.log('ashu = ' + ashu);
	          m = ashu;
	          ashu = [];
	          
	     }
	});

	$('.carousel-inner').html('');
	$('.carousel-indicators').html('');
	$('#carouselExampleIndicators').carousel();
	
	console.log(m.length);
  	for(var i=0 ; i<m.length ; i++) {
  		var filename = url+testFolder+m[i]
  		console.log('filename is:'+filename)
  		$('<li data-target="#carouselExampleIndicators" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators');
		$('<div class="carousel-item"><img src="'+filename+'"></div>').appendTo('.carousel-inner');
	//	$('.carousel-inner').innerHTML = '<div class="item"><img src="'+filename+'"><div class="carousel-caption"></div>   </div>';
	    
	//	$('.carousel-indicators').innerHTML = '<li data-target="#carousel-example-generic" data-slide-to="'+i+'"></li>';
	}
	
   

	$('.carousel-item').eq(0).addClass('active');
	$('.carousel-indicators > li').eq(0).addClass('active');
	
});