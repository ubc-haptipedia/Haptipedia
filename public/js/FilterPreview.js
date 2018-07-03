$('.js_CheckAll-checkbox').on('mouseover', function(){

	var getID;
	var getValue;
	var NumOfDevices = 45;

	getID = parseInt(this.id.substring(2,3));
	//console.log(getID);
	getValue = $('#' + this.id).val();
	//console.log(getValue);

	$('.data').attr('opacity', 0.15);
	
	
	if(getID != 5){
		for(var i=0; i<NumOfDevices; i++){

			if($('.point').eq(i).attr('id').substring(getID+1, getID+2) == getValue){
				//console.log(i);
				$('.point').eq(i).attr('opacity', 1);
				$('.point2').eq(i).attr('opacity', 1);
				$('.point3').eq(i).attr('opacity', 1);
				$('.point4').eq(i).attr('opacity', 1);
				$('.point5').eq(i).attr('opacity', 1);
				$('.point61').eq(i).attr('opacity', 1);
				$('.point62').eq(i).attr('opacity', 1);
				$('.point63').eq(i).attr('opacity', 1);
				$('.point64').eq(i).attr('opacity', 1);
				$('.point65').eq(i).attr('opacity', 1);
				$('.point66').eq(i).attr('opacity', 1);

				$('.point71').eq(i).attr('opacity', 1);
				$('.point72').eq(i).attr('opacity', 1);
				$('.point73').eq(i).attr('opacity', 1);
				$('.point74').eq(i).attr('opacity', 1);
				$('.point75').eq(i).attr('opacity', 1);
				$('.point76').eq(i).attr('opacity', 1);

				$('.point81').eq(i).attr('opacity', 1);
				$('.point82').eq(i).attr('opacity', 1);
				$('.point83').eq(i).attr('opacity', 1);
				$('.point84').eq(i).attr('opacity', 1);
				$('.point85').eq(i).attr('opacity', 1);
				$('.point86').eq(i).attr('opacity', 1);

			}

		}
	}

	else{

		for(var i=0; i<NumOfDevices; i++){

			if($('.point').eq(i).attr('id').substring(getID+1, getID+3) == getValue){
				//console.log(i);
				$('.point').eq(i).attr('opacity', 1);
				$('.point2').eq(i).attr('opacity', 1);
				$('.point3').eq(i).attr('opacity', 1);
				$('.point4').eq(i).attr('opacity', 1);
				$('.point5').eq(i).attr('opacity', 1);
				$('.point61').eq(i).attr('opacity', 1);
				$('.point62').eq(i).attr('opacity', 1);
				$('.point63').eq(i).attr('opacity', 1);
				$('.point64').eq(i).attr('opacity', 1);
				$('.point65').eq(i).attr('opacity', 1);
				$('.point66').eq(i).attr('opacity', 1);

				$('.point71').eq(i).attr('opacity', 1);
				$('.point72').eq(i).attr('opacity', 1);
				$('.point73').eq(i).attr('opacity', 1);
				$('.point74').eq(i).attr('opacity', 1);
				$('.point75').eq(i).attr('opacity', 1);
				$('.point76').eq(i).attr('opacity', 1);

				$('.point81').eq(i).attr('opacity', 1);
				$('.point82').eq(i).attr('opacity', 1);
				$('.point83').eq(i).attr('opacity', 1);
				$('.point84').eq(i).attr('opacity', 1);
				$('.point85').eq(i).attr('opacity', 1);
				$('.point86').eq(i).attr('opacity', 1);

			}

		}

	}

	
	



});

$('.js_CheckAll-checkbox').on('mouseout', function(){


	console.log('mouseout');

	$('.data').attr('opacity', 1);
	

});