import {client} from '../helpers/apollo';
import { LOGIN, USERS } from '../consts/queries';

export class LoginService {
  static login = async (numero: any,mdp:any) => {
    try {
      const result = await client.query({
        query: LOGIN,
        variables: {numero,mdp},
      });
      console.log(result);
      return result.data.login;
    } catch (e) {
      console.log(e);
    }
}
}

export class UsersService {
  static users=async()=>{
      try {
          const result=await client.query({
              query:USERS,
          });
          console.log("resulta:",result);
          return result.data.users;
      } catch (e) {
          console.log(e)
      }
  }
   
  }