
const getAll = require('./getAll');
const { v4: uuidv4 } = require('uuid');
const updateContacts = require('./updateContacts')


async function add(name, email, phone) {
    const id = uuidv4();
    const newContact = {
        id,
        name,
        email,
        phone,
    };
    const contacts = await getAll();
    contacts.push(newContact);
    updateContacts(contacts);
    return newContact;

}

module.exports = add;