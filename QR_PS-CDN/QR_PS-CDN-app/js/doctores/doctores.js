console.log('Run: Doctores')
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
    doctoresNew()
    /*##### R #####*/
    doctoresViewJqxhr()
    /*##### U #####*/
    doctoresUpdate()
    /*##### D #####*/
    doctoresDelete()

    btnRefresh()
    checkOnlyOne()
})

/*##### C #####*/
//------------------------------------------------->
function doctoresNew(){
    console.log('Run: pacientes New 1')
    $("#btnGneUser").on( "click", function(){
        doctoresNewJqxhr()
    })
}
function doctoresNewJqxhr(){
    console.log('Run: Usuarios New 2')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'doctores/doctoresNew',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },"data": {
        "user"        : $("#nuusername").val(),
        "permissions" : 'pacientes',
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
        doctoresViewJqxhr()
        doctoresNewCls()
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
function doctoresNewCls(){
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
function doctoresViewJqxhr(){
  var settings = {
    url: urlBaseApi + "doctores/doctoresView",
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
        if(data == "null"){

            $("#allUser")
            .fadeIn(3000)
            .append("<tr><td>no hay pacientes</td></tr>")
            
            }else{

                $.each(data, function (i, val){

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
                            "<td class=\"" + val.id_advance + " email\">" + val.email     + "</td>" +
                            "<td class=\"" + val.id_advance + " nophone\">" + val.telefono+ "</td>" +
                            a +
                            "</tr>"
                        )

                })
                        
            }
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
function doctoresUpdate(){
    console.log('Run: Usuarios New 1')
    $("#btnUpdateDoctores").on( "click", function(){
        updateDoctoresJqxhr()
    })
}
function updateDoctoresJqxhr(){
     
    console.log('Run: Usuarios New 2')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'doctores/doctoresUpdate',
        "method"      : "POST",
        "headers": {
        "xr8-api-key" : "ewf45r4435trge",
        "content-type" : "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
        },
        "data": {
        "id_advance"  : $("#id_advance").val(),
        "permissions" : 'paciente',
        "email"       : $("#uuemail").val(),
        "first"       : $("#uufirstName").val(),
        "second"      : $("#uulastName").val(),
        "tel"         : $("#uuPhone").val(),
        "puesto"      : 'drpacientes'
        }
    }

    var jqxhr = $.ajax(settings)
    .done(function (data){
        console.info('Run: reload alluser')
        doctoresViewJqxhr()
        doctoresUpdateCls()
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
function doctoresUpdateCls(){
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
function doctoresDelete(){
    console.log('Run: Usuarios Delete 1')
    $("#btnDeleteUser").on( "click", function(){
        doctoresDeleteJqxhr()
    })
}
function doctoresDeleteJqxhr(){

    console.log('Run: Usuarios New 2')
    var settings = {
        "async"       : true,
        "crossDomain" : true,
        "url"         : urlBaseApi + 'doctores/doctoresDelete',
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
        doctoresViewJqxhr()
        doctoresDeleteCls()
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
function doctoresDeleteCls(){
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
        doctoresViewJqxhr()
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