const getAll = require('./getAll');


async function getById(id) {
    const contacts = await getAll();
    const contact = contacts.find(contact => contact.id === id);
    
    if (!contact) {
        return null;
    }

    return contact;
};
module.exports = getById;