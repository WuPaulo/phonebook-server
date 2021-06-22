require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const Person = require("./models/person");

app.use(express.json());

app.use(cors());
app.use(express.static("build"));

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(requestLogger);

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
  Person.find({}).then((result) => {
    response.json(result);
  });
});

app.get("/api/info", (request, response) => {
  const date = new Date(Date.now());
  Person.find({}).then((result) => {
    response.send(
      `<p> Phonebook has info for ${result.length} people </p> <p> ${date}</p>`
    );
  });
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});



app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;
  const person = {
    number: body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "name missing",
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "number missing",
    });
  }

  Person.find({}).then((persons) => {
    console.log("persons: ", persons);

    if (persons.some((person) => person.name === body.name)) {
      console.log("name must be unique");
      return response.status(400).json({
        error: "name must be unique",
      });
    }

    let person = new Person({
      name: body.name,
      number: body.number,
    });

    person.save().then((savedPerson) => {
      console.log("savedPerson", savedPerson);
      response.json(savedPerson);
    });
  });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};
//handle unknown endpoint
app.use(unknownEndpoint);

//error handler
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
