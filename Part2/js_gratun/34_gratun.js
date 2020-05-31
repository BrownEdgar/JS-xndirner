/*էջի վրա սարքել էլեկտրոնային փոստի գրանցման ֆորմա և «ուղարկել» կոճակ:
ջավասքրիփթով ստուգել, արդյո՞ք օգտատիրոջ գրածը էլ.փոստ է չպիտի անցնի նաև դատարկ թողնված դաշտը
պիտի անցնեն միայն այն տողերը որոնք պարունակում են @ – նշանը
նաև օգտատիրոջը զգուշացնել սխալի մասին*/
$(function(){

  $('#btn').on("click", function(e){
    e.preventDefault();
    let $mySpan = $(".feadback") ;
    $mySpan.css({
      'padding': "3px"
    })
    let text = "Поле не может быть пустым";
    let text2 = "Поле должен содержать @";
    let val = $("#passId").val();
    if(val == undefined || val == ""){
      $mySpan.text(text).fadeOut(5000);
    }else if(val.indexOf("@") == -1){
      $mySpan.delay(200).text(text2);
    }else{
      $mySpan.delay(200).addClass("ok").text(" it's ok")
    }

    console.log("val:",val);
  })
 
})