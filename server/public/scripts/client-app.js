
$(document).ready(function(){
 $('#zoo-submit').on('click', PostZoo);

function appendDom() {
  var zooAnimal= {
  'animal' : 'fish',
  'number' : 23
}
  $('#animal-form').append('<div>' + zooAnimal.animal + zooAnimal.number + '</div>');
}

function getZoo() {
$.ajax({
    type: 'GET',
    url: '/zoo',
    // data: zoo,
    success: function (zooAnimal) {

      },
    error: function (response) {
        console.log('GET /books fail. No books could be retrieved!');
      },
    });
}


function PostZoo(e){
   e.preventDefault();
    $.ajax({
    type: 'POST',
    url: '/',
    success: function(animal) {
    appendDom();
    },
    error: function(response) {
      console.log('this have an error');
    }
  });
}


function randNum(random) {
$.ajax({
  type: 'GET',
  url: '/random',
  success: function(random) {
    console.log(random);
    appendDom();


  },
  error: function(response) {
    console.log('error');
  }
});
}

});// end of $doc 

















