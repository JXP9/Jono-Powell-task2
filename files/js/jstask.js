$('#btnRun').click(function() {

	$.ajax({
		url: "files/php/getCountryCode.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLat').val(),
			lng: $('#selLng').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtLanguages').html(result['data']['languages']);
				$('#txtDistance').html(result['data']['distance']);
				$('#txtCountryCode').html(result['data']['countryCode']);
				$('#txtCountryName').html(result['data']['countryName']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});
