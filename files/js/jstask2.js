$('#btnRun2').click(function() {

	$.ajax({
		url: "files/php/getOcean.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#selLat2').val(),
			lng: $('#selLng2').val()
		},
		success: function(result) {

			console.log(result);

			if (result.status.name == "ok") {

				$('#txtDistance2').html(result['data']['distance']);
				$('#txtGeonameID').html(result['data']['geonameId']);
				$('#txtOceanName').html(result['data']['name']);

			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			// your error code
		}
	}); 


});