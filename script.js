$(document).ready(function(){
  // Ici .click permet d'activer au clic une fonction qui va afficher(show()) le texte ('#text')
  $('#show').click(function(){
      $('#text').show();
  });
  //Ici .click permet d'activer au clic une fonction qui va masquer(hide()) le texte ('#text')
  $('#hide').click(function(){
      $('#text').hide();
  });
});
