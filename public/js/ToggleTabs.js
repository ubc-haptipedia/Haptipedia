
$('.portability-def').hide();
$('.robustness-def').hide();
$('.fabricability-def').hide();
$('.obtainability-def').hide();
$('.repairability-def').hide();

console.log('ToggleTabs');

	$('.viz1').show();
	$('#tab1').addClass('tab-active');
	$('.viz2').hide();
	$('.viz3').hide();
	$('.viz4').hide();

	document.getElementById('tab1').addEventListener('click', function(){


		$('.viz1').show();
		$('#tab1').addClass('tab-active');
		$('.viz2').hide();
		$('#tab2').removeClass('tab-active');
		$('.viz3').hide();
		$('#tab3').removeClass('tab-active');
		$('.viz4').hide();
		$('#tab4').removeClass('tab-active');

	});

	document.getElementById('tab2').addEventListener('click', function(){


		$('.viz2').show();
		$('#tab2').addClass('tab-active');
		$('.viz1').hide();
		$('#tab1').removeClass('tab-active');
		$('.viz3').hide();
		$('#tab3').removeClass('tab-active');
		$('.viz4').hide();
		$('#tab4').removeClass('tab-active');

	});

	document.getElementById('tab3').addEventListener('click', function(){


		$('.viz3').show();
		$('#tab3').addClass('tab-active');
		$('.viz2').hide();
		$('#tab2').removeClass('tab-active');
		$('.viz1').hide();
		$('#tab1').removeClass('tab-active');
		$('.viz4').hide();
		$('#tab4').removeClass('tab-active');


	});

	document.getElementById('tab4').addEventListener('click', function(){


		$('.viz4').show();
		$('#tab4').addClass('tab-active');
		$('.viz2').hide();
		$('#tab2').removeClass('tab-active');
		$('.viz1').hide();
		$('#tab1').removeClass('tab-active');
		$('.viz3').hide();
		$('#tab3').removeClass('tab-active');


	});







