$(function () {

    $('form').on('submit', function (e) {

      e.preventDefault();

      var name = $('#name').val();
      var business = $('#business').val();
      var email = $('#email').val();
      var phone = $('#phone').val();
      
      $.ajax({ 
            url: "https://api.mlab.com/api/1/databases/wakandahomecoming/collections/addSponsor?apiKey=nxM8VkSxhB_X7UZVYieiDNQqnHfDpGer",
          data: JSON.stringify({
                    "Name" : name,
                  "Business" : business,
                  "Email" : email,
                  "Phone" : phone }),
          type: "POST",
          contentType: "application/json",
          success: function(msg) {
               console.log( msg );
               $('#emailResponse').html('<p>Thank you '+name+'. Your email has been sent!</p>');
          } 
       }); 
       
       $.ajax({
        type: 'post',
        url: 'http://blackpanthersolitseattle.com/cgi-bin/sponsors.php',
        data: $('form').serialize(),
        success: function (result) {
            console.log(result);
            $('#emailResponse').html(result.message);
        }
      });
      
    });

  });