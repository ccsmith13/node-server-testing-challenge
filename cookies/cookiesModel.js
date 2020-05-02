const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

// Returns all types of cookies in the database
function getAll() {
  return db('cookies');
}

// Gets a cookie by its id 
function findById(id) {
  return db('cookies').where({id}).first();
}

// Creates a new type of cookie
async function insert(cookie) {
  const [id] = await db('cookies').insert(cookie, 'id');
  return db('cookies').where({ id }).first();
}

// Deletes a cookie :(
function remove(id) {
  return db('cookies').where({id}).del()
  }

// Updates an existing cookie 
async function update(id, changedCookie) {
  return db('cookies').where({id}).update(changedCookie)
}

