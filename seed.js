const db = require('./server/db');
const Todo = require('./server/db/models').Todo;

const todos = [
    {
       task:'mow the lawn',
       due: new Date().getDate,
       completed: 'incomplete',
       place: 'home'
    },
    {
        task:'go to the store',
        due: new Date().getDate,
        completed: 'incomplete',
        place: 'town'
    },
    {
        task:'dust the mantle',
        due: new Date().getDate,
        completed: 'incomplete',
        place: 'living room'
    },
    {
        task:'buy a present for sally',
        due: new Date().getDate,
        completed: 'complete',
        place: 'mall'
    }
]

const seed = () =>
    Promise.all(todos.map(todo =>
        Todo.create(todo))
)

const main = () => {
    console.log('Syncing db...');
    db.sync({ force: true })
      .then(() => {
        console.log('Seeding databse...');
        return seed();
      })
      .catch(err => {
        console.log('Error while seeding');
        console.log(err.stack);
      })
      .then(() => {
        db.close();
        return null;
      });
  };
  
main();
