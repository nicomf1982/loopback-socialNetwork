'use strict';

module.exports = function(app) {
  var User = app.models.User_;
  var Post = app.models.Post;
  var Comment = app.models.Comment;

  User.create ([{
  username: "luke",
  email: "luke@skywalker.com",
  password:"foo",
  avatar: "null",
  karma: 0,
  following: [
    "string"
  ],
  followers: [
    "string"
  ],
  lastLogin: new Date(),
  realm: "string",
  credentials: {},
  challenges: {},
  emailVerified: true,
  status: "string",
  created: new Date(),
  lastUpdated: new Date(),
},{
username: "han",
email: "han@solo.com",
password:"foo",
avatar: "null",
karma: 0,
following: [
  "string"
],
followers: [
  "string"
],
lastLogin: new Date(),
realm: "string",
credentials: {},
challenges: {},
emailVerified: true,
status: "string",
created: new Date(),
lastUpdated: new Date(),
},{
username: "leia",
email: "leia@organa.com",
password:"foo",
avatar: "null",
karma: 0,
following: [
  "string"
],
followers: [
  "string"
],
lastLogin: new Date(),
realm: "string",
credentials: {},
challenges: {},
emailVerified: true,
status: "string",
created: new Date(),
lastUpdated: new Date(),
}], (err, users) => {
  if (err) throw err;

  users[0].posts.create ([{
  "title": "Autos clasicos de ayer y hoy",
  "content": "la mayoria de los autos de hoy en dia.....",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "userId": 0
  // "userId": 0
},{
  "title": "Ejemplos resueltos de algebra",
  "content": "estos son ejemplos de espaciops vectoriales en R3",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "id": 0,
  // "userId": 0
},{
  "title": "POO , lo peor que le paso a la programacion?",
  "content": "Discutimos si la programacion orientada a objetos su un avance o un retroceso",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "id": 0,
  // "userId": 0
}], (err, post) => {
    if (err) throw err;
    // console.log(post);
    post[1].comments.create({
      "content": "jajajajja genial!",
      "numberOfLikes": 0,
      "numberOfDislikes": 0,
      "lastUpdate": new Date(),
      "userId": users[1].id
},  (err, comment) => {
  if (err) throw err;
})
  })


  users[1].posts.create ([{
  "title": "las 100 peliculas que hay que ver antes de morir",
  "content": "este es el top 100 segun IMDB de peli.....",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "userId": 0
  // "userId": 0
},{
  "title": "Nintendo 64, los mejores juegos",
  "content": "juego N~1:GoldenEye....",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "id": 0,
  // "userId": 0
},{
  "title": "Fotos re locas y Flasheras Rufian",
  "content": "imagenes, imagenes",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "id": 0,
  // "userId": 0
}], (err, post) => {
    if (err) throw err;
    // console.log(post);
    post[1].comments.create({
      "content": "geniales esos juegos",
      "numberOfLikes": 0,
      "numberOfDislikes": 0,
      "lastUpdate": new Date(),
      "userId": users[0].id
},  (err, comment) => {
  if (err) throw err;
})
  })


  users[2].posts.create ([{
  "title": "China prohibió llamar 'gordito' a Kim Jong-un en internet",
  "content": "Ho chi Min!...",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "userId": 0
  // "userId": 0
},{
  "title": "Cristianismo, Dios... etc?",
  "content": "Dios existe?, que es existir?....",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "id": 0,
  // "userId": 0
},{
  "title": "¿El fin de los tatuajes permanentes?Esta tinta dura un año",
  "content": "estos tatuajes son lo nuevo en....",
  "scorePost": 0,
  "numberOfViews": 0,
  "lastUpdate": new Date(),
  // "id": 0,
  // "userId": 0
}], (err, post) => {
    if (err) throw err;
    // console.log(post);
    post[2].comments.create({
      "content": "Geniales esos tattoos",
      "numberOfLikes": 0,
      "numberOfDislikes": 0,
      "lastUpdate": new Date(),
      "userId": users[0].id
},  (err, comment) => {
  if (err) throw err;
})
  })
  console.log(`> Users created: Email: ${users[0].email} | Password: foo`);
  console.log(`> Users created: Email: ${users[1].email} | Password: foo`);
  console.log(`> Users created: Email: ${users[2].email} | Password: foo`);
  console.log('> Post created');
  console.log('> comments created');
  })
};
