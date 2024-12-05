import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

const UpdateContacts = (contacts) =>
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

export default UpdateContacts;