const getAll = require("./getAll");
const updateContacts = require('./updateContacts')


async function remove(id) {

    const contacts = await getAll();

    const index = contacts.findIndex(contact => contact.id === id);
    const removeContact = contacts.splice(index, 1);
    updateContacts(contacts);
    return removeContact;
}
module.exports = remove;