

document.addEventListener("DOMContentLoaded", function(event) {



var storeClickArray = [];
var storeClickArrayCount = [];
var flag = 0;
var storeClick = 0;
var tempDevice;
$('.data').on("click", function(e){
	if(e.metaKey || e.ctrlKey){
		
		var clickData = [];
		var deviceName = [];


		if(storeClick > 0){
			
			for(var i=0; i<storeClick; i++){
				
				if(String(d3.select(this).data().map(function(d){return d.Device})) == String(storeClickArray[i].data().map(function(d){return d.Device}))){
					
					flag = 1;
					tempDevice = i;

				}
			}

			if(flag != 1){

				storeClickArray[storeClick] = d3.select(this);
				storeClick++;
				flag = 0;

			}

			else {

				storeClickArray.splice(tempDevice,1);
				storeClick--;
				flag = 0;
			}

			
		}

		else{
			storeClickArray[storeClick] = d3.select(this);
			storeClick++;
			
		}





		d3.selectAll('.point')
			.style('opacity', 0.15);

		d3.selectAll('.point2')
			.style('opacity', 0.15);

		d3.selectAll('.point3')
			.style('opacity', 0.15);

		d3.selectAll('.point4')
			.style('opacity', 0.15);

		d3.selectAll('.point5')
			.style('opacity', 0.15);

		d3.selectAll('.point61')
			.style('opacity', 0.15);

		d3.selectAll('.point62')
			.style('opacity', 0.15);

		d3.selectAll('.point63')
			.style('opacity', 0.15);

		d3.selectAll('.point64')
			.style('opacity', 0.15);

		d3.selectAll('.point65')
			.style('opacity', 0.15);

		d3.selectAll('.point66')
			.style('opacity', 0.15);


		d3.selectAll('.point71')
			.style('opacity', 0.15);

		d3.selectAll('.point72')
			.style('opacity', 0.15);

		d3.selectAll('.point73')
			.style('opacity', 0.15);

		d3.selectAll('.point74')
			.style('opacity', 0.15);

		d3.selectAll('.point75')
			.style('opacity', 0.15);


		d3.selectAll('.point81')
			.style('opacity', 0.15);

		d3.selectAll('.point82')
			.style('opacity', 0.15);

		d3.selectAll('.point83')
			.style('opacity', 0.15);

		d3.selectAll('.point84')
			.style('opacity', 0.15);

		d3.selectAll('.point85')
			.style('opacity', 0.15);


		




		for(var i=0; i<storeClick; i++){
			
			

		clickData[i] = storeClickArray[i].data();


		clickData[i].forEach(function(d){
			deviceName[i] = d.Device;
		});



		//d3.selectAll('.data').filter(function(d){return d.Device == deviceName[i];}).style('opacity', 1);

		d3.selectAll('.point')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);


		d3.selectAll('.point2')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);


		d3.selectAll('.point3')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point4')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1); 

		d3.selectAll('.point5')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point61')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point62')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point63')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point64')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point65')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point66')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);


		d3.selectAll('.point71')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point72')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point73')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point74')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point75')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point81')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point82')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point83')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point84')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);

		d3.selectAll('.point85')
			.filter(function(d){return d.Device == deviceName[i];})
			.style('opacity', 1);
			

		}



	}

	else{

		  // Get the modal
		  var modal = document.getElementById('myModal');

		  // Get the button that opens the modal
		  

		  // Get the <span> element that closes the modal
		  var span = document.getElementsByClassName("close")[0];

		  // When the user clicks the button, open the modal 
		 
	      modal.style.display = "block";
		  

		  // When the user clicks on <span> (x), close the modal
		  span.onclick = function() {
		      modal.style.display = "none";
		  }

		  // When the user clicks anywhere outside of the modal, close it
		  window.onclick = function(event) {
		      if (event.target == modal) {
		          modal.style.display = "none";
		      }
		  }

		 $('.modal-header h2').html(String(d3.select(this).data().map(function(d){return d.Device})))

		var m = []
		var testFolder;
		
		testFolder = './' + String(d3.select(this).data().map(function(d){return d.Device})) + '/';
		console.log(testFolder);
		console.log(m);
		
		var url = window.location.href;     // Returns full URL
		console.log(url)
		var params = url.split('/');
		console.log('params= ' + params);
		var url = 'https://' + params[2] + '/'
		console.log('url = ' + url);
		/*var folder = params[1]
		console.log('folder= ' + folder);
		if(folder){
			testFolder = folder+'/'
			console.log('param is:'+ testFolder)
		}*/

		getpathstr = url + 'readfigures/'+testFolder;
		console.log(getpathstr)


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
	}

});





d3.select('#reset').on('click', function(){

	window.location.assign("https://haptipedia.herokuapp.com/");
	
	
});

d3.select('#undo').on('click', function(){

	alert('To be Added');
	
	
});

//Definitions

var mouseX;
	var mouseY;
	$(document).mousemove( function(e) {
	   // mouse coordinates
	   mouseX = e.pageX; 
	   mouseY = e.pageY - 150;

	});  

	//Portability

	$('.portability-label').on('mouseover', function(){

		$('.portability-def').show();
	})


	$('.portability-label').mousemove(function() {
	      $('.portability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.portability-label').on('mouseout', function(){

		$('.portability-def').hide();
	});

	//Robustness

	$('.robustness-label').on('mouseover', function(){

		$('.robustness-def').show();
	})


	$('.robustness-label').mousemove(function() {
	      $('.robustness-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.robustness-label').on('mouseout', function(){

		$('.robustness-def').hide();
	});


	//Fabricability

	$('.fabricability-label').on('mouseover', function(){

		$('.fabricability-def').show();
	})


	$('.fabricability-label').mousemove(function() {
	      $('.fabricability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.fabricability-label').on('mouseout', function(){

		$('.fabricability-def').hide();
	});

	//Obtainability

	$('.obtainability-label').on('mouseover', function(){

		$('.obtainability-def').show();
	})


	$('.obtainability-label').mousemove(function() {
	      $('.obtainability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.obtainability-label').on('mouseout', function(){

		$('.obtainability-def').hide();
	});

	//Repairability

	$('.repairability-label').on('mouseover', function(){

		$('.repairability-def').show();
	})


	$('.repairability-label').mousemove(function() {
	      $('.repairability-def').css({'top':mouseY,'left':mouseX + 30});   
	}); 


	$('.repairability-label').on('mouseout', function(){

		$('.repairability-def').hide();
	});


}
