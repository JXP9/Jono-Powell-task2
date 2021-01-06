$('#btnRun3').click(function() {

	$.ajax({
		url: "files/php/getTimeZone.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLat3').val(),
			lng: $('#selLng3').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtCountryName2').html(result['data']['countryName']);
				$('#txtTimeZoneID').html(result['data']['timezoneId']);
				$('#txtSunrise').html(result['data']['sunrise']);
				$('#txtSunset').html(result['data']['sunset']);
				$('#txtTime').html(result['data']['time']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});