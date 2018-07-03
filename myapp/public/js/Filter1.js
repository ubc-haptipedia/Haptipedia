(function (win, doc) {
    'use strict';
    //Cut the mustard
    if (!doc.querySelector || !win.addEventListener) {
        return;
    }
    //create an object called checkAll
    var CheckAll = function(rootElement) {
        //create a variable for the markup container
        var markupContainer;
        //create a variable and store the class for the container of the checkAll markup
        var markupContainerSelector = '.js_CheckAll-container';
        //create a property and store the markup for the checkAll input
        var checkAllMarkup = '<label for="check-all" class="FormUnit-label"><input class="js_Check-all" type="checkbox" name="check-all" checked/> All</label>';
        //create a variable and store the check-all input class
        var checkAllSelector = '.js_Check-all';
        //create a variable to store selector for all checkboxes
        var allCheckboxesSelector = '.js_CheckAll-checkbox';
        //create a variable to store the markup
        var markup;
        //create a variable to store the checkAll button
        var checkAllButton;
        //create variable for all other checkboxes
        var allCheckboxes;
        //create a variable for one checkbox
        var checkbox;

        //create an init function
        this.init = function() {
            //get the markup of the checkbox container
            markupContainer = rootElement.querySelector(markupContainerSelector);
            //store the innerHTML of the markup container
            markup = markupContainer.innerHTML;
            //add the markup of the checkbox
            markup += checkAllMarkup;
            //update container with the new markup
            markupContainer.innerHTML = markup;
            //get the checkAll input
            checkAllButton = markupContainer.querySelector(checkAllSelector);
            //add an event listener to the 'All' button
            checkAllButton.addEventListener('click', All, false);
			
			//Get all the checkboxes apart from the 'All' checkbox
			allCheckboxes = rootElement.querySelectorAll(allCheckboxesSelector);
			//Get the number of checkboxes
            var total = allCheckboxes.length;
			//Loop through the checkboxes
            var i;
            for ( i = 0; i < total; i = i + 1 ) {
                checkbox = allCheckboxes[i];
				//add a click event listener which goes to the uncheckAll function
                checkbox.addEventListener('click', uncheckAll, false);
            }

            
        };
        //create a function to select all of the checkboxes
        var All = function(ev) {
            //store all checkboxes
            allCheckboxes = rootElement.querySelectorAll(allCheckboxesSelector);
            //store the length of the checkboxes array
            var total = allCheckboxes.length;
            //set a counter for the loop
            var i;
            //if this is checked
            if (this.checked) {
                //loop through each checkbox
                for ( i = 0; i < total; i = i + 1 ) {
                    checkbox = allCheckboxes[i];
                    checkbox.checked = true;
					//check each checkbox
                }
            } else {
                for ( i = 0; i < total; i = i + 1 ) {
                    checkbox = allCheckboxes[i];
                    checkbox.checked = false;
					//uncheck each checkbox
                }
            }

            //console.log(allCheckboxes);
        };
		
        //Uncheck the 'All' checkbox if one of the checkboxes is unticked
        var uncheckAll = function(ev) {
			//Get the 'All' checkbox
            checkAllButton = markupContainer.querySelector(checkAllSelector);
			//if a checkbox is not ticked, untick the 'All' checkbox
            if (!this.checked) {
                checkAllButton.checked = false;
            }

        }



        


    };

    


    //get all instances of checkAll on the page
    var checkAlls = doc.querySelectorAll('.js_CheckAll');
    //store total number of checkAll on the page
    var checkAllsTotal = checkAlls.length;
    //variable to store one of the checkAll
    var checkAll;
    //create a counter for the loop
    var i;
    //loop through each check-all group
    for ( i = 0; i < checkAllsTotal; i = i + 1 ) {
        //create a new object for each checkAll group
        checkAll = new CheckAll(checkAlls[i]);
        //start init
        checkAll.init();
        
    }

    //Filters 

    var idArray = [];
    var NumOfDevices = 45;
    var NumOfFilters = 5;
    var idDoF = [];
    var idPT = [];
    var idDT = [];
    var idMech = [];
    var idApp = [];

    $('.js_CheckAll').on('click',function(){
        console.log('clicked');
        
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
            //Fetching Application Tag from ID
            idApp[i] = idArray[i].substring(6,8);
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

            var y = parseInt($('#ID1' + i).val());

            if($('#ID1' + i).prop('checked')){

                console.log('ID1' + i + '= checked');
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

            var y = $('#ID2' + i).val();

            

            if($('#ID2' + i).prop('checked')){

                
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

            var y = $('#ID3' + i).val();

            

            if($('#ID3' + i).prop('checked')){

                
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

            var y = $('#ID4' + i).val();

            

            if($('#ID4' + i).prop('checked')){

                
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


        // Filter for Application Domain

        var x5=0;
        var checked5= [];

        for(var i=1; i<15; i++){

            var y = $('#ID5' + i).val();

            

            if($('#ID5' + i).prop('checked')){

                
                checked5[x5] = y;
                x5++;
                
                
    

            }

        } 
        console.log(typeof checked5[0]);
        console.log(typeof idApp[0]);
        for(var i=0; i<NumOfDevices; i++){

            

            for(var j=0; j<checked5.length; j++){

                if(idApp[i] == checked5[j]){

                    //console.log(classArray[j]);
                    matrix[i][4]=1;
                    
                

                }

                 

            }

            

            

        }



        // End of Filter for Application Domain



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

                $('.point71').eq(i).hide();
                $('.point72').eq(i).hide();
                $('.point73').eq(i).hide();
                $('.point74').eq(i).hide();
                $('.point75').eq(i).hide();
                $('.point76').eq(i).hide();

                $('.point81').eq(i).hide();
                $('.point82').eq(i).hide();
                $('.point83').eq(i).hide();
                $('.point84').eq(i).hide();
                $('.point85').eq(i).hide();
                $('.point86').eq(i).hide();

                


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

                $('.point71').eq(i).show();
                $('.point72').eq(i).show();
                $('.point73').eq(i).show();
                $('.point74').eq(i).show();
                $('.point75').eq(i).show();
                $('.point76').eq(i).show();

                $('.point81').eq(i).show();
                $('.point82').eq(i).show();
                $('.point83').eq(i).show();
                $('.point84').eq(i).show();
                $('.point85').eq(i).show();
                $('.point86').eq(i).show();

            }   


        }

    });


    
}(this, this.document));