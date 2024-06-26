console.log('Run: Usuarios')
/*
 #############################################################################
 #                 Begin : Delete User                                       #
 #############################################################################
*/

/** URLS */
var dominioBase    = "//localhost/"
var urlBaseApi     = dominioBase + "server/2023/Dr-systems/Drsystems-API/index.php/"

$(function(){

    /*##### C #####*/
    usuariosNew()
    /*##### R #####*/
    usuariosViewJqxhr()
    /*##### U #####*/
    usuariosUpdate()
    /*##### D #####*/
    usuariosDelete()

    btnRefresh()
    checkOnlyOne()
})

/*##### C #####*/
//------------------------------------------------->
function usuariosNew(){
    console.log('Run: Usuarios New 1')
    $("#btnGneUser").on( "click", function(){
        usuariosNewJqxhr()
    })
}
function usuariosNewJqxhr(){
    console.log('Run: Usuarios New 2')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'user/userNew',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },"data": {
        "user"        : $("#nuusername").val(),
        "permissions" : 'user',
        "email"       : $("#nuemail").val(),
        "password"    : $("#nupassword").val(),
        "first"       : $("#nufirstName").val(),
        "second"      : $("#nulastName").val(),
        "tel"         : $("#nuPhone").val(),
        "puesto"      : 'dr'
        }
    }

    var jqxhr = $.ajax(settings)
    .done(function (data){
        console.info('Run: reload alluser')
        usuariosViewJqxhr()
         usuariosNewCls()
    })
    .fail(function(jqXHR,textStatus,errorThrown){
        console.info('Run: error alluser')
        xhrError(jqXHR, textStatus , errorThrown);
    })
    .always(function(){
        console.info('Run: allways alluser')        
    })

    console.warn(jqxhr)
}
function usuariosNewCls(){
    console.log('Run: Usuarios New 3')
        $("#newModal").removeAttr("class","show")
        $("#newModal").attr("style","")
        $("#newModal").attr("class","modal fade")
        $("#newModal").attr("role","")
        $( ".modal-backdrop" ).remove();
}
//------------------------------------------------->

/*##### R #####*/
//------------------------------------------------->
function usuariosViewJqxhr(){
  var settings = {
    url: urlBaseApi + "user/userView",
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: "Basic cm9vdDphZG1pbg==",
    },
  };
  var jqxhr = $.getJSON(settings)
    .done(function (data) {
      $("#allUser").empty();
      //--->
      $.each(data, function (i, val) {

        if(val.user == "admin"){
            a = "<td></td>" 
        }else{
            a = "<td><input type=\"checkbox\" name=\"\" value=\"" + val.id_advance + "\"></td>" 
        }
            $("#allUser")
            .fadeIn(3000)
            .append(
                "<tr>" +
                "<td class=\"" + val.id_advance + " id\">" + val.id           + "</td>" +
                "<td ><span class=\"" + val.id_advance + " first\">" + val.firstname + "</span> <span class=\"" + val.id_advance + " second\">" + val.secondname + "</span></td>" +
                "<td class=\"" + val.id_advance + " user\">" + val.user       + "</td>" +
                "<td class=\"" + val.id_advance + " email\">" + val.email     + "</td>" +
                "<td class=\"" + val.id_advance + " nophone\">" + val.telefono+ "</td>" +
                a +
                "</tr>"
            )
        
      });
      //--->
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.info("Run: error alluser");
      xhrError(jqXHR, textStatus, errorThrown);
    })
    .always(function () {
      console.info("Run: allways alluser");
    });

  console.warn(jqxhr);
}
//------------------------------------------------->

/*##### U #####*/
//------------------------------------------------->
function usuariosUpdate(){
    console.log('Run: Usuarios New 1')
    $("#btnUpdateUser").on( "click", function(){
        updateUsuariosJqxhr()
    })
}
function updateUsuariosJqxhr(){
     
    console.log('Run: Usuarios New 2')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'user/userUpdate',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },
        "data": {
        "id_advance"  : $("#id_advance").val(),
        "user"        : $("#uuusername").val(),
        "permissions" : 'user',
        "email"       : $("#uuemail").val(),
        "password"    : $("#uupassword").val(),
        "first"       : $("#uufirstName").val(),
        "second"      : $("#uulastName").val(),
        "tel"         : $("#uuPhone").val(),
        "puesto"      : 'dr'
        }
    }

    var jqxhr = $.ajax(settings)
    .done(function (data){
        console.info('Run: reload alluser')
        usuariosViewJqxhr()
        usuariosUpdateCls()
    })
    .fail(function(jqXHR,textStatus,errorThrown){
        console.info('Run: error alluser')
        xhrError(jqXHR, textStatus , errorThrown);
    })
    .always(function(){
        console.info('Run: allways alluser')        
    })
    
    console.warn(jqxhr)
}
function usuariosUpdateCls(){
    console.log('Run: Usuarios New 3')
        $("#updateModal").removeAttr("class","show")
        $("#updateModal").attr("style","")
        $("#updateModal").attr("class","modal fade")
        $("#updateModal").attr("role","")
        $( ".modal-backdrop" ).remove();
}
//------------------------------------------------->

/*##### D #####*/
//------------------------------------------------->
function usuariosDelete(){
    console.log('Run: Usuarios Delete 1')
    $("#btnDeleteUser").on( "click", function(){
        usuariosDeleteJqxhr()
    })
}
function usuariosDeleteJqxhr(){

    console.log('Run: Usuarios New 2')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'user/userDelete',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },
        "data": {
        "id_advance"  : $("#id_advance").val()
        }
    }

    var jqxhr = $.ajax(settings)
    .done(function (data){
        console.info('Run: reload alluser')
        usuariosViewJqxhr()
        usuariosDeleteCls()
    })
    .fail(function(jqXHR,textStatus,errorThrown){
        console.info('Run: error alluser')
        xhrError(jqXHR, textStatus , errorThrown);
    })
    .always(function(){
        console.info('Run: allways alluser')        
    })
    
    console.warn(jqxhr)
}
function usuariosDeleteCls(){
    console.log('Run: Usuarios Delete 3')
        $("#deleteModal").removeAttr("class","show")
        $("#deleteModal").attr("style","")
        $("#deleteModal").attr("class","modal fade")
        $("#deleteModal").attr("role","")
        $( ".modal-backdrop" ).remove();
}
//------------------------------------------------->
function btnRefresh(){
    console.log('Run: btnRefresh')
    $("#btnRefresh").on( "click", function(){
        usuariosViewJqxhr()
    })
}

function checkOnlyOne(){
    $(document).on('click', 'input[type="checkbox"]', function() {
        x = $('input[type="checkbox"]').not(this).prop('checked', false);
  
        let y = $(this).val();
  
        $("#id_advance").val(y)

        //--------------------->
        if ($('input[type="checkbox"]').is(':checked')){
            $("#uufirstName").val($("." + y + ".first").html())
            $("#uulastName").val( $("." + y + ".second").html())
            $("#uuusername").val($("." + y + ".user").html())
            $("#uupassword").val("*********")
            $("#uuemail").val($("." + y + ".email").html())
            $("#uuPhone").val($("." + y + ".nophone").html())

            $(".duFnText").html($("." + y + ".first").html())
            $(".duSnText").html($("." + y + ".second").html())
            $(".duUnText").html($("." + y + ".user").html())
            /*
          $("#user-resume,#user-update,#user-delete").attr("disabled",false)
          $("#iduserupdate").val($(this).attr("id"))
            */
          
          //readeClientesOne($('input[name="idX"]:checked').attr("id"))
  
        } else {
            clearAll()
            /*
          $("#user-resume,#user-update,#user-delete").attr("disabled",true)
          $("#iduserupdate").val(0)
          */
        }
        //--------------------->
    })
  }
function clearAll(){
$("#id_advance").val("")
$("#nufirstName,#nulastName,#nuusername,#nupassword,#nuemail,#nuPhone").val("")
$("#uufirstName,#uulastName,#uuusername,#uupassword,#uuemail,#uuPhone").val("")
$(".duFnText , .duSnText , .duUnText").html("")
}