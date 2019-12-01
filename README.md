<<<<<<< HEAD
# Gateway API for obsidium app

Importante configurar o `.env`

* Importante clonar todos os microsserviços

#### Docker com todos os microserviços

[https://github.com/rodolfopeixoto/obsidium-docker-compose-nodejs](https://github.com/rodolfopeixoto/obsidium-docker-compose-nodejs)

Efetuar os testes

```
http://localhost:8080/users ou http://localhost:8080/stories
```
=======
#Gateway API for obsidium app


```
//Proxy request
// app.get('/users', verifyJWT, (request, response, next) => {
//   userServiceProxy(request, response, next);
// });

// app.post('/login', (request, response, next) => {
//   if(request.body.user === 'luiz' && request.body.password === '123'){
//     //auth ok
//     const id = 1 // id que vem do banco 
//     var token = jwt.sign({ id }, process.env.SECRET, {
//       expiresIn: 600 // 10min
//     });
//     response.status(200).send({ auth: true, token: token })
//   }
//   response.status(500).send('LLogin inválido');
// });


// app.get('/logout', function(request, response) {
//   res.status(200).send({ auth: false, token: null });
// });


// function verifyJWT(req, res, next){
//   var token = req.headers['x-access-token'];
//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(token, process.env.SECRET, function(err, decoded) {
//     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
//     // se tudo estiver ok, salva no request para uso posterior
//     req.userId = decoded.id;
//     next();
//   });
// }
```
>>>>>>> Remove nodemodules and change files
