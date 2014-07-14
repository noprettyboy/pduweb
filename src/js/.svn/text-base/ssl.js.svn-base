(function(window,document) {

  var self = EL.SSL = {};

  self.init = function() {
    var tabSslCert = $('#tabSslCert');

    tabSslCert.tabs();  
    
    $('#btnDownloadKeySSL, #btnDownloadCertificateSSL').click(function () {
      window.open("data/auth_cert.pem","blank");
    });

    var keyup = $("#keyup");
    var selfsign = $("#selfSign");

    keyup.change(function() {
      if (keyup.attr('checked')) {
        $("#uploadkey").removeClass("selected");
        $("#keycreat").addClass("opacityElement");
        $('#btnCreateNewSSL').addClass("opacityElement");
        $('#contryIso,#stateProvince,#locality,#organization,#orgUnit,#commonName,#EmailAddress,#challenge,#confirmchallenge,#keyLength,#selfSign,#valDays, #btnCreateNewSSL').attr('disabled', true);
      } else {
        $("#uploadkey").addClass("selected");
        $("#keycreat").removeClass("opacityElement");
        $('#btnCreateNewSSL').removeClass("opacityElement");
        $('#contryIso,#valDays,#stateProvince,#locality,#organization,#orgUnit,#commonName,#EmailAddress,#challenge,#confirmchallenge,#keyLength,#selfSign, #btnCreateNewSSL').attr('disabled', false);
      }
    });

    // Change Function
    selfsign.change(function() {
      if (selfsign.attr('checked')) {
        $("#ss").addClass("selected");
        $("#ssn").removeClass("selected");
      } else {
        $("#ss").removeClass("selected");
        $("#ssn").addClass("selected");
      } 
    });

    $('#btnCreateNewSSL').click(function () {
        $("#frNewssl").submit();
    });
  
    //validation start      
    $("#new").mouseover(function() {
      generateTooltips();
    });

    $("#frNewssl").validate({
      rules: {
        contryIso: {required: true, minlength: 5, maxlength: 10},
        stateProvince: {required: true, minlength: 8, maxlength: 15},
        locality: {required: true, minlength: 5, maxlength: 10},
        organization: {required: true, minlength: 8, maxlength: 15},
        orgUnit: {required: true, minlength: 5, maxlength: 10},
        commonName: {required: true, minlength: 8, maxlength: 15},
        EmailAddress: {required: true,email:true},
        challenge: {required: true, minlength: 8, maxlength: 15},
        confirmchallenge: {required: true, minlength: 8, maxlength: 15, equalTo: "#challenge"},
        keyFile: {required: true, minlength: 8, maxlength: 15},
        certFile: {required: true, minlength: 8, maxlength: 15},
        valDays: {required: true, minlength: 1, maxlength: 30,number:true}
      },
      submitHandler: function(form) {
        return false;
      }
    });

  };

})(window, document);