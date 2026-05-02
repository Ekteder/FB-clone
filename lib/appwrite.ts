import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1') // Set your Appwrite endpoint
    .setProject('69f64ff5003b736c0f44'); // Set your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
