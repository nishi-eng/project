
$('#myForm').on('submit', function(e){
   $('#myModal').modal('show');
   e.preventDefault();
});
 /**$(function(){
 
    $("#fname_error_message").hide();
    $("#email_error_message").hide();
    $("#phone_error_message").hide();
    $("#passward_error_message").hide();
     var error_fname = false; 
     var error_email = false; 
     var error_phone = false; 
     var error_passward = false; 
  
   }); 
     $("#username").focusout(function(){
      check_fname();
     });
     $("#mailid").focusout(function(){
      check_email();
     });
     $("#PhoneNo").focusout(function(){
      check_phone();
     });
     $("#passwardid").focusout(function(){
      check_passward();
     })

     function check_fname(){
     var pattern = /^[a-zA-Z]*$/;
     var fname = $("#username").val()
     if(pattern.test(fname) ){
      $("#fname_error_message").hide();
      $("#username").css("border-color","green");
     }
     else{
      $("#fname_error_message").html("only characters");
      $("#fname_error_message").show();
      $("#username").css("border-color","red");
      error_fname=true;
     }
     if(fname.length<=2 )
     {
      $("#fname_error_message").html("invalid name");
      $("#fname_error_message").show();
      $("#username").css("border-color","red");
      error_fname=true;
     }
   }
   function  check_email(){
    var pattern=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email=$("#mailid").val();
    if(pattern.test(email) && email!==''){
     $("#email_error_message").hide();
     $("#mailid").css("border-color","green");
    }
    else{
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      $("#mailid").css("border-color","red");
      error_email=true;
    }
     }
     function check_phone(){
     var phone=$("#PhoneNo").val();
     if(!isNaN(phone) && phone.length==10 ){
      $("#phone_error_message").hide();
      $("#PhoneNo").css("border-color","green");
     }
     else{
      $("#phone_error_message").html("Invalid phoneNo");
      $("#phone_error_message").show();
      $("#PhoneNo").css("border-color","red");
      error_phone=true;
     }
 }
 function check_passward(){
   var pass=$("#passwardid").val();
   if(pass.length>=5 && pass.length<=12){
      $("#passward_error_message").hide();
      $("#passwardid").css("border-color","green");
     }  
     else{
      $("#passward_error_message").html("Invalid Passward");
      $("#passward_error_message").show();
      $("#passwardid").css("border-color","red");
      error_passward=true;

     }
   }
  **/

  

   var student
$("#myForm").submit(function(){
 student={
      Username:$("#username").val(),
      mailid: $("#mailid").val(),
      PhoneNo: $("#PhoneNo").val(),
      passwardid :$("#passwardid").val()
   }
   console.log(student);  
   var str = "You Have Entered "+"<br>"
   + "Name: " + student.Username+"<br>"
   + " mailid: " +student.mailid +"<br>"+" PhoneNo:"+student.PhoneNo+"<br>" + "passwardid:"+student.passwardid+"<br>" ;
$("#modal_body").html(str);
});

$(document).ready(function(){
  $("#save_change").click(function(){
   
    $(".table tbody ").append(
      '<tr>'+
     '<td><input type="checkbox" id="select-all"></td>'+
        '<td>'+(student.Username)+'</td>'+
        '<td>'+(student.mailid)+'</td>'+
        '<td>'+(student.PhoneNo)+'</td>'+
        '<td>'+(student.passwardid)+'</td>'+
     '</tr>'
    );
   
  })
  
  })
 $("#select-all").click(function(){
  var isSelected=$(this).is(":checked");
  if(isSelected){
    $(".table tbody ").each(function(){
      $(this).find('input[type="checkbox"]').prop('checked',true);
    })
  }else{
    $(".table tbody  ").each(function(){
      $(this).find('input[type="checkbox"]').prop('checked',false);
    })
  }
  })

  $("#remove-row").click(function(){
    $(".table tbody tr").each(function(){
      var isChecked=$(this).find('input[type="checkbox"]').is(":checked");
      if(isChecked){
        $(this).remove();
      }
    })
  })
  $("#remove-row").click(function(){
    $(".table tbody tr").each(function(){
      var isChecked=$(this).find('input[type="checkbox"]').is(":checked");
      if(isChecked){
        $(this).$("td").find("student.Username")=$("#username").innerHTML;
      }
    })
  })
 

     

