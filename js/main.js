$(document).ready(function() {
  var toDos = [
    {id: Math.floor(Math.random()*100), name: 'Groceries', date: 'asap', status: 'Complete'},
    {id: Math.floor(Math.random()*100), name: 'GYM', date: 'asap', status: 'Complete'},
    {id: Math.floor(Math.random()*100), name: 'Learn code', date: 'asap', status: 'Complete'},
    {id: Math.floor(Math.random()*100), name: 'Laundry', date: 'asap', status: 'Complete'},
    {id: Math.floor(Math.random()*100), name: 'nap', date: 'asap', status: 'Complete'},
    {id: Math.floor(Math.random()*100), name: 'do exercisms', date: 'asap', status: 'Complete'},
  ];
  var cTodos = [];

function htmlMaker(todo, buttonId){
  var html = '<tr><td>' + todo.name + '</td><td>' + todo.date + '</td><td>' + todo.status + '</td><td><button ';
  html += buttonId? 'id="' + todo.id : '';
  html += '" class= "btn btn-primary completed"> COMPLETE </button></td></tr>';
  return(html);
}
  function displayToDos() {
    if(toDos.length > 0){
      toDos.forEach(function(item){
        $('#tdbody').append(htmlMaker(item, true));
      });
    }
  }

  displayToDos();

  function moveToCompleted(todo) {
    $('#tdcomplete').append(htmlMaker(todo, false));

    }

  function markCompleted() {
    $(this).closest('tr').remove();
    var id = $(this).attr('id');
    var completedTodos = toDos.filter(function (item) {
      return item.id == id;
    });
    console.log(completedTodos);
    cTodos.push(completedTodos[0]);
    toDos = toDos.filter(function (item) {
      return item.id != id;
    });
    moveToCompleted(completedTodos[0]);
    console.log(toDos);
    console.log(cTodos);
  }

  $('#newtodo').submit(function (e) {
    console.log('Adding ToDo');
    e.preventDefault();
    var name = $('#name').val();
    var date = $('#date').val();
    console.log(name, date);
    var id = Math.floor(Math.random()*100);
    var todo = {name: name, date:date, id:id, status: 'Completed'};
    toDos.push(todo);
    $('#tdbody').append(htmlMaker(todo, true));
    $('.completed').on('click', markCompleted);
  });

  $('.completed').on('click', markCompleted);
});
