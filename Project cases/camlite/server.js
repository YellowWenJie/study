require('dotenv').config();
const jwt = require('jsonwebtoken');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares)

const port = process.env.API_PORT || 3001;

const SECRET_KEY = '123456789';
const expiresIn = '1h';

// Create a token from a payload
function createToken(payload) {
  return jwt.sign( payload, SECRET_KEY, {expiresIn})
}

// Verify the token
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({email, password}){
  // find record with matching password
  const found = router.db.get( 'users').find( { email, password }).value()
  return found;
}

function isAuthorized(req) {
  const token = req.header.authorization;
  return verifyToken(token);
}

server.use(jsonServer.bodyParser)

server.use('/login', (req, res) => {
  console.log( req.body);
  const found = isAuthenticated( req.body);
  console.log( found);
  // find user
  if (found) {
    // create token
    res.send({
      token: createToken({email: found.email, password: found.password }),
      // add user data WITHOUT password
      user: { ...found, password: undefined }
    });
  } else {
    res.sendStatus(401)
  }

});


server.use((req, res, next) => {
  if (isAuthorized(req)) { // add your authorization logic here
    next() // continue to JSON Server router
  } else {
    res.sendStatus(401)
  }
})


server.use(router)
server.listen(port, () => {
  console.log(`JSON Server is running on ${port}`)
})
