const express = require("express");
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('server is working');
});

app.get('/tasks', (req, res) => {
    res.send(tasks);
  });

  app.get('/tasks', (req, res) => {
    res.send(tasks);
  });

  app.post('/tasks', (req, res) => {
   let task=  req.body;
   tasks.push(task)
   res.send(tasks);
  });

  app.delete('/tasks/:id', (req, res) => {
    let id=  parseInt(req.params.id) ;
  tasks = tasks.filter(ele => ele.id !==id)
  res.send(tasks);
   });
  

app.listen(1712, () =>
  console.log('we are listening on port 1712!'),
);



tasks = [
{
  "id": 1,
  "title": "study"
}
,
{
    "id":2,
    "title":"clean"
  }
]