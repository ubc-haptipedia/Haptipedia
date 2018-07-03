

	console.log('Filters');

	//Filters 

	var idArray = [];
	var NumOfDevices = 33;
	var NumOfFilters = 4;
	var idDoF = [];
	var idPT = [];
	var idDT = [];
	var idMech = [];

	$('#f10').on('click', function(){
		
		
	});
	

	
	// On change of checkbox
	
	
	$(".checkbox").on("click",function(d){


		for(var i=0; i<NumOfDevices; i++)
		{
			// Fetching ID of of elements
			idArray[i] = document.getElementsByClassName('point')[i].id;
			//Fetching DoF from ID
			idDoF[i] = idArray[i].substring(2,3);
			//Fetching Product Type from ID
			idPT[i] = idArray[i].substring(3,4);
			//Fetching DoF Type from ID
			idDT[i] = idArray[i].substring(4,5);
			//Fetching Mechanism from ID
			idMech[i] = idArray[i].substring(5,6);
		}
	

		// Defining Matrix of devices (rows) and filters (columns)

		var matrix = [];

		var H = NumOfDevices;
		var W = NumOfFilters;

		for(var i=0; i<H; i++){
			matrix[i] = [];
			for(var j=0; j<W; j++)
			{
				matrix[i][j] = 0;
			}
		}


		//Filter for Number of DoF

		var x1=0;
		var checked1 = [];

		
		for(var i=1; i<7; i++){

			var y = parseInt($('#f1' + i).val());

			if($('#f1' + i).is(':checked')){

				
				checked1[x1] = y;
				x1++;
				
	

			}

		}
		
		
		for(var i=0; i<NumOfDevices; i++){

			

			for(var j=0; j<checked1.length; j++){

					if(idDoF[i] == checked1[j]){

						//console.log(classArray[j]);
						matrix[i][0]=1;
						
					

					}

					 

			}
			

		}


		// End of Filter for Number of DoF



    	// Filter for Product Type

		var x2=0;
		var checked2 = [];

		for(var i=1; i<3; i++){

			var y = $('#f2' + i).val();

			

			if($('#f2' + i).is(':checked')){

				
				checked2[x2] = y;
				x2++;
				
				
	

			}

		} 
		
		for(var i=0; i<NumOfDevices; i++){

			

			for(var j=0; j<checked2.length; j++){

				if(idPT[i] == checked2[j]){

					//console.log(classArray[j]);
					matrix[i][1]=1;
					
				

				}

				 

			}

			

			

		}



		// End of Filter for Product Type


    	// Filter for DoF Type

		var x3=0;
		var checked3 = [];

		for(var i=1; i<5; i++){

			var y = $('#f3' + i).val();

			

			if($('#f3' + i).is(':checked')){

				
				checked3[x3] = y;
				x3++;
				
				
	

			}

		} 
		
		for(var i=0; i<NumOfDevices; i++){

			

			for(var j=0; j<checked3.length; j++){

				if(idDT[i] == checked3[j]){

					//console.log(classArray[j]);
					matrix[i][2]=1;
					
				

				}

				 

			}

			

			

		}


		// End of Filter for DoFType

		// Filter for Mechanism

		var x4=0;
		var checked4 = [];

		for(var i=1; i<6; i++){

			var y = $('#f4' + i).val();

			

			if($('#f4' + i).is(':checked')){

				
				checked4[x4] = y;
				x4++;
				
				
	

			}

		} 
		
		for(var i=0; i<NumOfDevices; i++){

			

			for(var j=0; j<checked4.length; j++){

				if(idMech[i] == checked4[j]){

					//console.log(classArray[j]);
					matrix[i][3]=1;
					
				

				}

				 

			}

			

			

		}



		// End of Filter for Mechanism

		// Final Filter
		
		for(var i=0; i<NumOfDevices; i++){

			var flag = 0;

			for(var j=0; j<W; j++){

				if(matrix[i][j] == 0){
					flag = 1;
				}

			}

			if(flag == 1){

				
				$('.point').eq(i).hide();
				$('.point2').eq(i).hide();
				$('.point3').eq(i).hide();
				$('.point4').eq(i).hide();
				$('.point5').eq(i).hide();
				$('.point61').eq(i).hide();
				$('.point62').eq(i).hide();
				$('.point63').eq(i).hide();
				$('.point64').eq(i).hide();
				$('.point65').eq(i).hide();
				$('.point66').eq(i).hide();

				


			}

			else {

				$('.point').eq(i).show();
				$('.point2').eq(i).show();
				$('.point3').eq(i).show();
				$('.point4').eq(i).show();
				$('.point5').eq(i).show();
				$('.point61').eq(i).show();
				$('.point62').eq(i).show();
				$('.point63').eq(i).show();
				$('.point64').eq(i).show();
				$('.point65').eq(i).show();
				$('.point66').eq(i).show();

			}	


		}

	});

	// End of All Filters







