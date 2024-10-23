import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Set your Appwrite endpoint
    .setProject('6717b7760008ae8b649f'); // Set your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
