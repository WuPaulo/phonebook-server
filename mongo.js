const mongoose = require("mongoose");
const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const url = `mongodb+srv://325208627:${password}@cluster0.j8rnq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const noteSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Note = mongoose.model("Note", noteSchema);

if (process.argv.length == 3) {
  Note.find({}).then((result) => {
    result
      .forEach((note) => {
        console.log(note);
      })
      .mongoose.connection.close();
  });
}

if (process.argv.length > 3) {
  const note = new Note({
    name: name,
    number: number,
  });
  note.save().then((result) => {
    console.log("note saved!");
    mongoose.connection.close();
  });
}
