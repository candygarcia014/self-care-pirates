let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/comments", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let commentsSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    comments: [
      {
        title: "Beards on a budget",
        body: "Example of comment about beards and the products to use... ",
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        title: "Yoga for cool guys",
        body: "Example of comment super long comment fnewoinfaienfaikefdnaikefnaiekrnfviaedrnvfjaerfjuerjuerfvjuernfvjukerfveujrfdvbaujedrfvnikfdrnaedolrnf ",
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        title: "Pets and things",
        body: "Pet comment... ",
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        title: "Tomorrow is Friday ",
        body: "Hello this is ca comment example ... ",
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        title: "Resistance bands for things ... ",
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        title: "Meditation",
        body: "Example of comment about meditation benefits for all ... ",
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        title: "Cooking and stuff ",
        body: "This is a seed for the comments ... ",
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        title: "Zoom calls for all",
        body: "Zoom is crashing all the time. Fun stuff....  ",
      }
    ]
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        title: "Coding is fun",
        body: "Super helful comment is displayed here ",
      }
    ]
  }
];

db.Comments.deleteMany({})
  .then(() => db.Comments.collection.insertMany(commentsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
