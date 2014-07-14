/*
Custom validate rules
*/
(function() {

  $.validator.addMethod("ipv4", 
    function(value, element) {                  
    return this.optional(element) || /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i.test(value);
  }, function() { return VALID.ipv4 });

  $.validator.addMethod("ipv6", 
    function(value, element) {            
      return this.optional(element) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(value);
  }, function() { return VALID.ipv6 });

  $.validator.addMethod("nowhitespaces", 
    function(value, element){
      return this.optional(element) || /^\S+$/i.test(value);
  }, function() { return VALID.nowhite });

  $.validator.addMethod("customDate", 
    function (value, element){
      return this.optional(element) || /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/i.test(value);
  }, function() { return VALID.customdate });

  //For password
  $.validator.addMethod("lowerChar", function(value, element) {
    return /[a-z]/.test(value);
  }, function() { return VALID.lowchar });

  $.validator.addMethod("upperChar", function(value, element) {
    return /[A-Z]/.test(value);
  }, function() { return VALID.uppchar });

  $.validator.addMethod("numberChar", function(value, element) {
    return /\d/.test(value);
  }, function() { return VALID.numchar });

  $.validator.addMethod("specialChar", function(value, element) {
    return /[^\w]/.test(value);
  }, function() { return VALID.spechar });

  $.validator.addMethod("notEqualTo", function(value, element, params) {
    return value != $(params).val();
  }, function() { return VALID.diffval });

  $.validator.addMethod("greaterThan", function(value, element, params) {
    return Number(value) >= Number($(params).val());
  }, function() { return VALID.greater });

})();