$('.portability-def').hide();
	$('.robustness-def').hide();
	$('.fabricability-def').hide();
	$('.obtainability-def').hide();
	$('.repairability-def').hide();

window.onload = function(){
	


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