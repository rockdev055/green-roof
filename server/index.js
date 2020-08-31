require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
// const fetch = require('node-fetch');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

// app.get('/api/users/', (req, res, next) => {
//   const userInfo = `
//     select *
//     from "users"
//     where "userId" = $1
//   `;
//   if (req.session.userId) {
//     const params = [req.session.userId];
//     db.query(userInfo, params)
//       .then(userData => {
//         res.status(200).json(userData.rows[0]);
//       })
//       .catch(err => console.error(err));
//   } else {
//     next(new ClientError('No user was logged in', 200));
//   }
// });

app.get('/api/signers', (req, res, next) => {
  const allSigners = `
      select *
      from "signers"
      `;
  db.query(allSigners)
    .then(signersData => {
      res.status(200).json(signersData.rows[0]);
    })
    .catch(err => console.error(err));
});

app.post('/api/signers', (req, res, next) => {
  const parsedName = req.body.signerName;
  const parsedEmail = req.body.signerEmail;

  const text = `insert into "singers" ("signerName", "signerEmail")
                values($1, $2)
                returning *`;
  const values = [parsedName, parsedEmail];

  db.query(text, values)
    .then(result => {
      const user = result.rows[0];
      req.session.userId = user.userId;
      res.json(user);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
      console.error(err);
    });
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
