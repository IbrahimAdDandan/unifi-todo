# Unifi test

## before run
please rename `./config/environment.js` to `./config/environment.prod.js`
and set your environment variables in the file.

To run please execute
`npm install`
`npm run seed`
`npm start`

### End-points
for mysql: `host:port/api/v1/`
for mongo: `host:port/api/v2/`

### Another way to seed data
just send a get request to `host:port/data-seed/init`

to get the created user in MySQL just send a get request to: `host:port/data-seed/user2`

to get the created user in Mongo just send a get request to: `host:port/data-seed/user1`