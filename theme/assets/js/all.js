//slider
	$(document).ready(function(){
		$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			accessibility:false,
			adaptiveHeight:true,
			draggable:true,
			arrows: true,
			dots:false,
			centerMode: true,
			nextArrow: document.getElementsByClassName('slick-next'),
			prevArrow: document.getElementsByClassName('slick-previous'),

		});
	});
//end slider
//datapicker
	var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
	var start = $('#startDate').datepicker({
		uiLibrary: 'bootstrap4',
		iconsLibrary: 'fontawesome',
		format: 'dd/mm/yyyy',
		minDate: today,
		keyboardNavigation: false,
		maxDate: function () {
			return $('#endDate').val();
		}
	});
	$('#endDate').datepicker({
		uiLibrary: 'bootstrap4',
		iconsLibrary: 'fontawesome',
		format: 'dd/mm/yyyy',
		minDate: function () {
			return $('#startDate').val();
		}
	});
//end datapicker
//validation
//two email
$("#email").on("keyup", function() {
	var _this = $('#email');
	var _email = $('#email').val();
	var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var valid = re.test(_email);
	if(valid){
	$('.two-after').css("display","block");
	} else {
	$('.two-after').css("display","none");
	}
});
//theree destino
$("#desde-donde-partes").change( function() {
	if ($(this).val() == 'option') {
		$('.three-after').css("display","none");
	}
	else {
		$('.three-after').css("display","block");
	}
});

//four destino
$("#para-donde-quieres-ir").change( function() {
	if ($(this).val() == 'option') {
		$('.four-after').css("display","none");
	}
	else {
		$('.four-after').css("display","block");
	}
});

//
$( function() {

	$("#viaje").change( function() {
		if ($(this).val() === "Solo") {
			$(".mobile .solo").css("display", "block");
			$(".mobile .pareja").css("display", "none");
			$(".mobile .amigos").css("display", "none");
			$(".mobile .familia").css("display", "none");
		}else if ($(this).val() === "Pareja") {
			$(".mobile .solo").css("display", "none");
			$(".mobile .pareja").css("display", "block");
			$(".mobile .amigos").css("display", "none");
			$(".mobile .familia").css("display", "none");
		}
		else if ($(this).val() === "Familia") {
			$(".mobile .solo").css("display", "none");
			$(".mobile .pareja").css("display", "none");
			$(".mobile .amigos").css("display", "none");
			$(".mobile .familia").css("display", "block");
		}
		else if ($(this).val() === "Amigos") {
			$(".mobile .solo").css("display", "none");
			$(".mobile .pareja").css("display", "none");
			$(".mobile .amigos").css("display", "block");
			$(".mobile .familia").css("display", "none");
		}
	});
});

//five startDate
 $('#startDate').change(function() { 
     	var StartDate = $('#startDate').val();
          if(StartDate == '')
          {
              $('.five-after').css("display","none");
          } else{
              $('.five-after').css("display","block");
          }
 });

 //six endDate
  $('#endDate').change(function() { 
      	var EndDate = $('#endDate').val();
           if(EndDate == '')
           {
               $('.six-after').css("display","none");
           } else{
               $('.six-after').css("display","block");
           }
  });

  //seven seven-after-destock"
  $(".seven").find('.img-viaje').click(function () {	 
  	var viaje = $('input:radio[name=viaje]:checked').val();
  	if (viaje =='') {
  		('.seven-after-destock').css("display","none");
  	}else{
  		$('.seven-after-destock').css("display","block");
  	}
  });
   $(".seven").find('.destock h5').click(function () {	 
  	var viaje = $('input:radio[name=viaje]:checked').val();
  	if (viaje =='') {
  		$('.seven-after-destock').css("display","none");
  	}else{
  		$('.seven-after-destock').css("display","block");
  	}
  });

   // eight
   //five startDate
    $('#conocer').change(function() { 
        	var conocer = $('#conocer').val();
             if(conocer == 'option')
             {
                 $('.eight-after').css("display","none");
             } else{
                 $('.eight-after').css("display","block");
             }
    });

//nine-after
$(".nine").on('click', '.custom-control-label',function() {                  
  var serviciosDos = $('input:checkbox[name=servicios]:checked').val();
  if (serviciosDos == '') {
  	$('.nine-after').css("display","none");
  	alert('entro en el 1');
  }else{
  	$('.nine-after').css("display","block");
  }
});
$('.nine-after').click(function() {
   alert(serviciosDos);
});
//end validation
//RD station
var form = $('#conversion-form');
var inputNombre = form.find('input[name="nombre"]');
var inputEmail = form.find('input[name="email"]');
var selectDesdeDondePartes = form.find('select[name="desde-donde-partes"]');
var selectParaDondequieresIr = form.find('select[name="para-donde-quieres-ir"]');
var inputStartDate = form.find('input[name="startDate"]');
var inputEndDate = form.find('input[name="endDate"]');
var inputEndDate = form.find('input[name="endDate"]');

var radioSolo = form.find('#solo');
var radioPareja = form.find('#pareja');
var radioFamilia = form.find('#Familia');
var radioAmigos = form.find('#amigos');
var selectConocer = form.find('select[name="conocer"]');

var checkboxHospedaje = form.find('#hospedaje');
var checkboxAlimentacion = form.find('#alimentacion');
var checkboxTrasladoCompartido = form.find('#traslado-compartido');
var checkboxTrasladoPrivado = form.find('#traslado-privado');
var checkboxTours = form.find('#tours');
var checkboxTiquetes = form.find('#tiquetes');
var checkboxSegurosDeviaje = form.find('#seguros-de-viaje');
var checkboxLugaresDeInteres = form.find('#lugares-de-interes');
var checkboxActividadesgratuitas = form.find('#actividades-gratuitas');



var inputToken = form.find('input[name="token_rdstation"]');
var inputIdentificador = form.find('input[name="identificador"]');

form.on('submit', function(ev) {
var data_array = [
    { name: 'nome', value: inputNombre.val() },
    { name: 'email', value: inputEmail.val() },
    { name: 'Desde donde partes', value: selectDesdeDondePartes.val() },
    { name: 'Para donde quieres ir', value: selectParaDondequieresIr.val() },
    { name: 'Cuando te quieres ir', value: inputStartDate.val() },
    { name: 'Cuando te vas a regresar', value: inputEndDate.val() },

    { name: 'Con quienes viajas', value: radioSolo.val() },
    { name: 'Con quienes viajas', value: radioPareja.val() },
    { name: 'Con quienes viajas', value: radioFamilia },
    { name: 'Con quienes viajas', value: radioAmigos.val() },
    
    { name: 'Que tipo de viajero te consideras', value: selectConocer.val() },

    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxHospedaje.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxAlimentacion.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxTrasladoCompartido.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxTrasladoPrivado.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxTours.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxTiquetes.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxSegurosDeviaje.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxLugaresDeInteres.val() },
    { name: 'Que servicios quieres que incluya tu paquete', value: checkboxActividadesgratuitas.val() },


    { name: 'token_rdstation', value: inputToken.val() },
    { name: 'identificador', value: inputIdentificador.val()  },
  ];

  RdIntegration.post(data_array);
});
//end RD station