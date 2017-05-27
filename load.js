function load(id) {
  var myAjax = new Ajax.Request(
         'getusersem.php',
         {
          method: 'post',
          asynchronous: false,
          parameters: "id=" + id,
          onComplete: function(response) {
            loadsem(id,response);
          },
          onFailure: showAlert
       });
}
function loadsem(id, sem) {
  var myAjax = new Ajax.Request(
         'loadsem.php',
         {
          method: 'post',
          asynchronous: true,
          parameters: "id=" + id + "&" + "sem=" + sem.responseText,
          onComplete: complete,
          onFailure: showAlert
       });
}
function showAlert(MyRequest) {
   alert("Operacja nie powiodła się");
}
function complete(response){
  var lista = document.getElementById("idlista");
  var wyniki = response.responseText.split("\n");
  lista.innerHTML='';
  for(i=0; i < wyniki.length; i++){
     var przedmiot = '<div class="przedmiot" onclick="#" >'+ wyniki[i] + '</div>';
     lista.innerHTML += przedmiot;
   }
}
