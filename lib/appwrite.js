import { Client, Databases, Account } from 'appwrite';

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67069a7c003dab376baf');

export const account = new Account(client);
export const databases = new Databases(client);
