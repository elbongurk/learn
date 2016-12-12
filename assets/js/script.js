---
layout: null
---

{% include_relative zepto.min.js %}

(function($, undefined) {
  $(function() {
    // Clear search on blur
    $("#site-search").on("blur", function() {
      $(this).val("");
    });
    // Submit newsletter form using AJAX
    $("#newsletter-form").on("submit", function(event) {
      var $form = $(this);
      var action = $form.attr("action");      
      var email = $form.find("input[type='email']").val();
      if (email.length > 0) {
        $.ajax({
          type: "POST",
          url: action,
          data: { email: email },
          headers: { "Accept": "application/javascript" },
          success: function() { $form.addClass("success"); },
          error: function() { $form.addClass("error"); }
        });
      }
      event.preventDefault();
    });
  });
})(window.Zepto);

