const todos = [
];

module.exports = {
  getOne,
  getAll,
  create,
  deleteOne,
};

function getOne(id){
  return todos[id];
}

function getAll(){
  return todos;
}

function create(todo){
  todos.push(todo);
}

function deleteOne(id){
  todos.splice(id,1);
}