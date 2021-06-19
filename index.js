const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.static("build"));

morgan.token("ob", function (request, response) {
  console.log("ob", request.body);
  return `${JSON.stringify(request.body)}`;
});

app.use(morgan(":method :url :status :response-time :req[header] :ob"));

let persons = [
  {
    name: "Arto Hellas",
    number: "456789",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "1212121212",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/info", (request, response) => {
  const date = new Date(Date.now());
  response.send(
    `<p> Phonebook has info for ${persons.length} people </p> <p> ${date}</p>`
  );
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end();
});

const generateId = () => {
  const maxID = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0;
  return maxID + 1;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  console.log(body);

  if (!body.name) {
    return response.status(400).json({
      error: "name is missing",
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }

  if (persons.some((person) => person.name === body.name)) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }

  let person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);

  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
