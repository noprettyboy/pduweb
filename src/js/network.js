(function() {

  EL.Network = function() {
    // Variables Declaration
    var drpNetworkInterface         = $('#drpNetworkInterface');
    var drpAuthentication           = $('#drpAuthentication');
    var chkForceAPBSSID             = $('#chkForceAPBSSID');
    var tabNetworkConfiguration     = $('#tabNetworkConfiguration');
    var drpIPAutoconfiguration      = $('#drpIPAutoconfiguration');
    var drpIPAutoconfigurationIPv6  = $('#drpIPAutoconfigurationIPv6');

    var drpIPAutoconfigurationVal,
        txtIPAddressIPV4,
        txtNetmaskIPV4,
        txtGatewayIPV4;

    var oldVal = {};

    var $txDNSCHK = $("#txDNSCHK"),
        $txPrimaryDNSServerIPV4 = $("#txPrimaryDNSServerIPV4"),
        $txtSecondaryDNSServerIPV4 = $("#txtSecondaryDNSServerIPV4"),
        $txtDNSSuffixIPv4 = $("#txtDNSSuffixIPv4"),
        $enableDNS = $("#enableDNS"),
        $txtIPAddressIPV4 = $("#txtIPAddressIPV4"),
        $txtNetmaskIPV4 = $("#txtNetmaskIPV4"),
        $txtGatewayIPV4 = $("#txtGatewayIPV4");

    // Change Events for IPV4 Tab
    drpIPAutoconfiguration.change(function () {
      if (drpIPAutoconfiguration.val() == '0') {
        $('#ipv4Static').show();
        //$enableDNS.hide();
        //remvoe the disable
        //$txPrimaryDNSServerIPV4.removeAttr("disabled");
        //$txtSecondaryDNSServerIPV4.removeAttr("disabled");
        //$txtDNSSuffixIPv4.removeAttr("disabled");

        //$txtIPAddressIPV4.rules("add", { required : true });
        //$txtNetmaskIPV4.rules("add", { required : true });
        //$txtGatewayIPV4.rules("add", { required : true });

      }else if (drpIPAutoconfiguration.val() == '1') {
        $('#ipv4Static').hide();
        //$enableDNS.show();
        //reset the disable fields
        //$txDNSCHK.change();

        //$txtIPAddressIPV4.rules( "remove", "required" );
        //$txtNetmaskIPV4.rules( "remove", "required" );
        //$txtGatewayIPV4.rules( "remove", "required" );
      }
    });

    $txDNSCHK.change(function() {
      if ($txDNSCHK.is(":checked")) {
        $txPrimaryDNSServerIPV4.removeAttr("disabled");
        $txtSecondaryDNSServerIPV4.removeAttr("disabled");
        $txtDNSSuffixIPv4.removeAttr("disabled");
      } else {
        $txPrimaryDNSServerIPV4.attr("disabled", true);
        $txtSecondaryDNSServerIPV4.attr("disabled", true);
        $txtDNSSuffixIPv4.attr("disabled", true);
      }
    });

    //Getting the Device Information from the server in JSON format
    $.ajax({
      url: 'xhrnetworkget.jsp',
      type: "post", data: EL.Auth.getTocken(),
      dataType: "json",
      success: function(data) {
        $('#currState').html(data.currentstate);

        oldVal = data;

        drpIPAutoconfigurationVal = data.ipautoconfiguration;
        txtIPAddressIPV4 = data.ipaddress;
        txtNetmaskIPV4 = data.netmask;
        txtGatewayIPV4 = data.gateway;

        $('#txtIPAddressIPV4').val(txtIPAddressIPV4);
        $('#txtNetmaskIPV4').val(txtNetmaskIPV4);
        $('#txtGatewayIPV4').val(txtGatewayIPV4);

        $txDNSCHK
          .attr("checked", data.dnschk ? true : false)
          .change();

        //drpIPAutoconfiguration
        //  .val(drpIPAutoconfigurationVal)
        //  .change();
        drpIPAutoconfiguration[0].value = drpIPAutoconfigurationVal;
        drpIPAutoconfiguration.change();

        $txPrimaryDNSServerIPV4.val(data.dns1);
        $txtSecondaryDNSServerIPV4.val(data.dns2);
        $txtDNSSuffixIPv4.val(data.dnssuffix);

      }
    });

    tabNetworkConfiguration.tabs();

    $("#configurationChangedDialog").dialog({
      // title : '<div class="dicon"><img src="images/16x16/chartorg.gif" alt=icon></img></div> '+' Configuration Changed',
      title: '<div class="icon-network"></div> '+' Configuration Changed',
      resizable: false,
      width: 285, 
      height: 96,
      modal: true,
      autoOpen: false,
      closeOnEscape: false,
      open: function(event, ui) {
        $(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        //$(this).closest('.ui-dialog').find('.ui-dialog-buttonpane').hide();
      },
      close: false
    });

    $('#drpNetworkInterface').attr('disabled', true).addClass('disableBg');
    $('input[name="ipProtocol"]').attr('disabled', true).addClass('disableBg');
    $('input[name="dnsResolver"]').attr('disabled', true).addClass('disableBg');
    $('#drpSpeedAtNetwork').attr('disabled', true).addClass('disableBg');
    $('#drpDuplexAtNetwork').attr('disabled', true).addClass('disableBg');

    drpAuthentication.change(function () {
      if (drpAuthentication.val() == 'noAuthentication') {
        $('#psk').css('display', 'none');
        $('#eap-peap').css('display', 'none');
      }else if (drpAuthentication.val() == 'psk') {
        $('#psk').css('display', 'block');
        $('#eap-peap').css('display', 'none');
      } else {
        $('#psk').css('display', 'none');
        $('#eap-peap').css('display', 'block');
      }
    });

    // Calling Change Events
    $('input[name=ipProtocol]').change();

    drpAuthentication.change();
    // IPv4 Settings tab functionalities 
    chkForceAPBSSID.change(function() {
      if (chkForceAPBSSID.attr('checked')) {  
        $('#txtBSSID').attr('disabled', false).removeClass('disableBg');
      } else {
        $('#txtBSSID').attr('disabled', true).addClass('disableBg');
      }
    });
    drpIPAutoconfiguration.change();

    chkForceAPBSSID.change();
    // IPv6 Settings tab functionalities 
    drpIPAutoconfigurationIPv6.change(function () {
      resetTextBoxBorder();
      if (drpIPAutoconfigurationIPv6.val() == 'static') {
        $('#ipv6Static').css('display', 'block');
        $('#ipv6Automatic').css('display', 'none');
      }else if (drpIPAutoconfigurationIPv6.val() == 'automatic') {
        $('#ipv6Static').css('display', 'none');
        $('#ipv6Automatic').css('display', 'block');
      }
    });
    drpIPAutoconfigurationIPv6.change();

    $("#tabNetworkConfiguration").mouseover(function() {
      generateTooltips();
    });

    var changed = EL.Network.changed = function() {

      /*
      console.log(oldVal);
      console.log(drpIPAutoconfiguration.val() == oldVal.ipautoconfiguration);
      console.log($txtIPAddressIPV4.val() == oldVal.ipaddress);
      console.log($txtNetmaskIPV4.val() == oldVal.netmask);
      console.log(parseInt($txDNSCHK.val()) == oldVal.dnschk);
      console.log($txPrimaryDNSServerIPV4.val() == oldVal.dns1);
      console.log($txtSecondaryDNSServerIPV4.val() == oldVal.dns2);
      console.log($txtDNSSuffixIPv4.val() == oldVal.dnssuffix);
      */


      if (
        parseInt(drpIPAutoconfiguration.val()) == oldVal.ipautoconfiguration &&
        $txtIPAddressIPV4.val() == oldVal.ipaddress &&
        $txtNetmaskIPV4.val() == oldVal.netmask &&
        $txtGatewayIPV4.val() == oldVal.gateway &&
        $txDNSCHK.is(":checked") == (oldVal.dnschk == 1) &&
        $txPrimaryDNSServerIPV4.val() == oldVal.dns1 &&
        $txtSecondaryDNSServerIPV4.val() == oldVal.dns2 &&
        $txtDNSSuffixIPv4.val() == oldVal.dnssuffix
      ) {
        return false
      } else {
        return true 
      }
    };

    //Changed sth that need to restart
    var changedIP = function() {
      return drpIPAutoconfigurationVal != drpIPAutoconfiguration.val() ||
        ( drpIPAutoconfiguration.val() == "0" &&
           ( txtIPAddressIPV4 !=  $txtIPAddressIPV4.val()
             || txtNetmaskIPV4 != $txtNetmaskIPV4.val()
             || txtGatewayIPV4 != $txtGatewayIPV4.val()
           )
        );
    };

    var submitHandler = function() {
      var saveTocken = {
        "ipautoconfiguration": parseInt(drpIPAutoconfiguration.val()),
        "ipaddress": $txtIPAddressIPV4.val(),
        "netmask": $txtNetmaskIPV4.val(),
        "gateway": $txtGatewayIPV4.val(),
        "dnschk": $txDNSCHK.attr("checked") ? 1 : 0,
        "dns1": $txPrimaryDNSServerIPV4.val(),
        "dns2": $txtSecondaryDNSServerIPV4.val(),
        "dnssuffix": $txtDNSSuffixIPv4.val()
      };

      $.ajax({
        url: 'xhrnetworkset.jsp',
        type: "post", data: JSON.stringify($.extend(saveTocken,EL.Auth.getJSON())),
        dataType: "json",
        success: function(data) {
          if (EL.UpdateStatus(data)) {
            changedIP() && EL.ResetDevice.reboot(30);

            EL.Master.removeDialog();
          }
        }
      });
    };


    // validate the contact form
    $("#frnetwork").validate({
      rules: {
        txtIPAddressIPV4: {
          required: {
            depends: function(element) {
              return drpIPAutoconfiguration.val() == "0"
            }
          },
          ipv4: true
        },
        txtNetmaskIPV4:  {ipv4: true},
        txtGatewayIPV4: {ipv4: true},
        txPrimaryDNSServerIPV4: {ipv4: true},
        txSecondaryDNSServerIPV4: {ipv4: true},
        txtDNSSuffixIPv4: {maxlength:32}
      },
      submitHandler: function(form) {
        if (changed()) {
          changedIP()
            ? EL.Dialog.confirm(MODEL.netsvr.change, submitHandler)
            : submitHandler();
        } else {
          EL.Master.removeDialog();
        }
      }
    });


    EL.Privilege.setButton([$("#btnMainSubmit")], 0x00000040);


  };

}());