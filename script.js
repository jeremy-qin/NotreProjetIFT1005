/*  zzzzzZZZzzz
    |/
|\__/,|   (`\
|_ _  |.--.) )   bon été!!!!  reposez-vous bien les pilotes! ^-^
( T   )     /
(((^_(((/(((_/
*/
// mettre vos fonctions et variables  que vous voulez ici :-)

function faireDisparaitre() {
    /* votre code pour le faux loading ici!*/
}


//NE RIEN MODIFIER EN DESSOUS DE CETTE LIGNE!!
function attendreAvantDeDisparaitre() {
          setTimeout(function () {
            faireDisparaitre();

          },
          JSON.parse(data)[0].showFakeLoading == 0? 0: 5000);

}
attendreAvantDeDisparaitre();


/* montrer le toast quand on load la page */
window.onload = (event) => {
  var toastLiveExample = document.getElementById('liveToast')
  var toast = new bootstrap.Toast(toastLiveExample)
  
  toast.show()
}
