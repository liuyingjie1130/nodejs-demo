const TodoList=require('../models/todo-list.js');

var todo=new TodoList;

/*
todo.addItem('游泳',function(err){
 if(err){
   console.error(err);
   process.exit(100);
 }

});
*/
todo.getAll(function(err,items){
  if(err){
   console.error(err);
   process.exit(100);
  }
  console.log(items);
})

