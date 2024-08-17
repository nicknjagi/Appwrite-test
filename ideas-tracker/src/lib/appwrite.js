import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("66b9eb3800259b2eec39"); // Replace with your project ID

    export const account = new Account(client);
    export const databases = new Databases(client);
