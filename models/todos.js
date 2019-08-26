const todos = [
  {todo: 'JavaScript'},
  {todo: 'HTML'},
  {todo: 'CSS'},
  {todo: 'TWIG'},
];

module.exports = {
  getOne,
  getAll,
  create,
  deleteOne,
  update,
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

function update(id, todo) {
todos[id] = todo;
}