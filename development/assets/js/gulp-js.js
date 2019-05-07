//slider
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    accessibility:false,
    adaptiveHeight:true,
    draggable:false,
    arrows: true,
    dots:false,
    centerMode: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
    swipe: false,
    nextArrow: document.getElementsByClassName('slick-next'),
    prevArrow: document.getElementsByClassName('slick-previous'),
   
  });
});
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

//three

identifications(8,10);
$("#tipo-identification").change( function() {
  $('#identification').val('');
  $('#identification-p').val('');
  $('#identification').removeAttr('maxlength');
  $('.three-after').css("display","none");
  if ($(this).val() == 'tarjeta pasaporte') {
    $('#identification').css("display","block");
    $('#identification-p').css("display","none");
    identificationsDos(8,10);
    
  }
  else if (($(this).val() == 'tarjeta de identidad') || ($(this).val() == 'registro civil')) {
    $('#identification').attr('maxlength','10');
    identifications(8,10);
  }

  else if ($(this).val() == 'cédula de extranjería') {
    $('#identification').attr('maxlength','7');
    identifications(5,7);  }

  else if ($(this).val() == 'cédula de ciudadanía') {
    $('#identification').attr('maxlength','10');
    identifications(8,10);
  }
});

function identifications(min,max){
  $('#identification').css("display","block");
  $('#identification-p').css("display","none");
  $("#identification").on("keyup", function() {
    let identification = this.value = (this.value + '').replace(/[^0-9]/g, '');
    if((identification.length >= min) && (identification.length <= max)){
    $('.three-after').css("display","block");
    } else {
    $('.three-after').css("display","none");
    }  
  });
};

function identificationsDos(min,max){
  $('#identification').css("display","none");
  $('#identification-p').css("display","block");
  $("#identification-p").on("keyup", function() {
    let identification = this.value = $('#identification-p').val();
    if((identification.length >= min) && (identification.length <= max)){
    $('.three-after').css("display","block");
    $('#identification').val(identification);
    } else {
    $('.three-after').css("display","none");
    }  
  });
};

//four destino
$("#desde-donde-partes").change( function() {
  if ($(this).val() == 'option') {
    $('.four-after').css("display","none");
  }
  else {
    $('.four-after').css("display","block");
  }
});

//five destino
$("#para-donde-quieres-ir").change( function() {
  if ($(this).val() == 'option') {
    $('.five-after').css("display","none");
  }
  else {
    $('.five-after').css("display","block");
  }
});

//whatsapp
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // estamos desde un movil o tablet
    document.getElementById('ws-destock').className = 'ws-hidden';
  document.getElementById('ws-mobile').className = 'ws-show';
}else{
  document.getElementById('ws-destock').className = 'ws-show';
  document.getElementById('ws-mobile').className = 'ws-hidden';
}

//
$( function(){
$('#solo').attr('checked',true);
  $("#viaje").change( function() {
    if ($(this).val() === "Solo") {
      $('#solo').attr('checked',true);
      $(".mobile .solo").css("display", "block");
      $(".mobile .pareja").css("display", "none");
      $(".mobile .amigos").css("display", "none");
      $(".mobile .familia").css("display", "none");
      $(".mobile .solo").css("display", "block");
    }else if ($(this).val() === "Pareja") {
      $('#pareja').attr('checked',true);
      $(".mobile .solo").css("display", "none");
      $(".mobile .pareja").css("display", "block");
      $(".mobile .amigos").css("display", "none");
      $(".mobile .familia").css("display", "none");
    }
    else if ($(this).val() === "Familia") {
      $('#familia').attr('checked',true);
      $(".mobile .solo").css("display", "none");
      $(".mobile .pareja").css("display", "none");
      $(".mobile .amigos").css("display", "none");
      $(".mobile .familia").css("display", "block");
    }
    else if ($(this).val() === "Amigos") {
      $('#amigos').attr('checked',true);
      $(".mobile .solo").css("display", "none");
      $(".mobile .pareja").css("display", "none");
      $(".mobile .amigos").css("display", "block");
      $(".mobile .familia").css("display", "none");
    }
  });
});

//six startDate
 $('#startDate').change(function() { 
      var StartDate = $('#startDate').val();
          if(StartDate == '')
          {
              $('.six-after').css("display","none");
          } else{
              $('.six-after').css("display","block");
          }
 });

 //seven endDate
  $('#endDate').change(function() { 
        var EndDate = $('#endDate').val();
           if(EndDate == '')
           {
               $('.seven-after').css("display","none");
           } else{
               $('.seven-after').css("display","block");
           }
  });

  //eight eight-after-destock"
  $(".eight").find('.img-viaje').click(function () {   
    var viaje = $('input:radio[name=viaje]:checked').val();
    if (viaje =='') {
      ('.eight-after-destock').css("display","none");
    }else{
      $('.eight-after-destock').css("display","block");
    }
  });
   $(".eight").find('.destock h5').click(function () {   
    var viaje = $('input:radio[name=viaje]:checked').val();
    if (viaje =='') {
      $('.eight-after-destock').css("display","none");
    }else{
      $('.eight-after-destock').css("display","block");
    }
  });

   // nine
   //six startDate
    $('#conocer').change(function() { 
          var conocer = $('#conocer').val();
             if(conocer == 'option')
             {
                 $('.nine-after').css("display","none");
             } else{
                 $('.nine-after').css("display","block");
             }
    });

//nine-after
$(".ten").on('click', '.custom-control-label',function() {                  
  var serviciosDos = $('input:checkbox[name=servicios]:checked').val();
  if (serviciosDos == '') {
    $('.ten-after').css("display","none");
  }else{
    $('.ten-after').css("display","block");
  }
});


//end validation
//RD station
var form = $('#conversion-form');
var inputNombre = form.find('input[name="nombre"]');
var inputEmail = form.find('input[name="email"]');
var inputIdentification = form.find('input[name="identification"]');
var selectDesdeDondePartes = form.find('select[name="desde-donde-partes"]');
var selectParaDondequieresIr = form.find('select[name="para-donde-quieres-ir"]');
var selectTipoIdentification = form.find('select[name="tipo-identification"]');
var inputStartDate = form.find('input[name="startDate"]');
var inputEndDate = form.find('input[name="endDate"]');



var selectConocer = form.find('select[name="conocer"]');


var inputToken = form.find('input[name="token_rdstation"]');
var inputIdentificador = form.find('input[name="identificador"]');
var selected = [];    
form.on('submit', function(ev) {
  $("input:checkbox:checked").each(function() {
        if (this.checked) {
          // agregas cada elemento.
          selected.push($(this).val());
        }
      });
var data_array = [
    { name: 'nome', value: inputNombre.val() },
    { name: 'email', value: inputEmail.val() },
    { name: 'Identificación N', value: inputIdentification.val() },
    { name: 'Desde donde partes', value: selectDesdeDondePartes.val() },
    { name: 'Para donde quieres ir', value: selectParaDondequieresIr.val() },
    { name: 'Identificación tipo', value: selectTipoIdentification.val() },
    { name: 'Cuando te quieres ir', value: inputStartDate.val() },
    { name: 'Cuando te vas a regresar', value: inputEndDate.val() },

    { name: 'Con quienes viajas', value:  form.find('input:radio[name=viaje]:checked').val() },
    
    { name: 'Que tipo de viajero te consideras', value: selectConocer.val() },

    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[0]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[1]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[2]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[3]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[4]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[5]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[6]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[7]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[8]},
    { name: "Que servicios quieres que incluya tu paquete[]", value: selected[9]},
    


    { name: 'token_rdstation', value: inputToken.val() },
    { name: 'identificador', value: inputIdentificador.val()  },
  ];

  RdIntegration.post(data_array);
});
//end RD statio