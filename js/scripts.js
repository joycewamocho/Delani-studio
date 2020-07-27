$(document).ready(function(){
 $(".design").click(function(){
   $(".hideMe1").show();
 })
 $(".development").click(function(){
   $(".hideMe2").show();
 })

 $(".product").click(function(){
   $(".hideMe3").Show();
 })
 $('.submit').click(function () {
         var Name = $('#mce-FNAME').val();
         var Email = $('#mce-EMAIL').val();
         var Message = $('#mce-MESSAGE');
         var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
         if (Name == '' || Email == '' || Message == '') {
             alert('Please make sure you have filled in the form correctly!');
         }
          else { alert(' Hi ' + Name + ' We have received your message. Thank you for reaching  us.');
           }
         })
})
