const contactsOperations = require('./contacts/index');
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();



const invokeAction = async ({ action, id, name, email, phone }) => {

  switch (action) {
    case "getAll":
          const contacts = await contactsOperations.getAll();
          console.log(contacts);

      break;

    case "getById":
          const contact = await contactsOperations.getById(id);
          if (!contact) {
              throw new Error(`Contact with id${id} not found`)
            
          }
          console.log(contact);
      break;

    case "add":
          const newContact = await contactsOperations.add(name, email, phone);
          console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsOperations.remove(id);
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

