import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
     client = new Client();
     account;

     constructor(){
          this.client
               .setEndpoint(config.appwriteEndpoints)
               .setProject(config.appwriteProjectId);
          this.account = new Account(this.client);
     }

     async createAccount({email,password,name}){
         try {
               const userAccount = await this.account.create(ID.unique(),email,password,name);

               if(userAccount){
                    // call method
                    alert("Successfully Account Created!")
                    return this.login({email,password});
               }else{
                    return userAccount;
               }

         } catch (error) {
               throw error;
         } 
     } 

     async login({email, password}) {
          try {
               alert("Account Login!");
              return await this.account.createEmailPasswordSession(email, password);
          } catch (error) {
              throw error;
          //     console.log("Appwrite service :: login :: error",error);
          }
      }

     async getCurrentUser(){
          try {
              return await this.account.get(); 
          } catch (error) {
               // throw error;
               // console.log("Appwrite service :: getCurrentUser :: error",error);
          }
          return null;
     }

     async logout(){
          try {
               alert("Are you sure? Logout!");
              return await this.account.deleteSessions(); 
          } catch (error) {
               throw(error)
               // console.log("Appwrite service :: logout :: error",error);
          }
     }
}

const authService = new AuthService();

export default authService

