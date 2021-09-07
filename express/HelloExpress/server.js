const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const users = [{
  firstName: 'Billy',
  lastName: 'Bob'
},
{
  firstName: 'Jilly',
  lastName: 'Job'
}]
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.json(users);
});
app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json(users[req.params.id]);
})

app.post("/api/users", (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.json({status:'ok'})
})

app.put("/api/users/:id", (req, res) => {
  const id = req.params.id
  users[id] = req.body;
  res.json({status:'ok'})
})

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.json({status: 'ok'})
})
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
