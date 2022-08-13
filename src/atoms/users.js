import { atom } from "recoil";

export const userName = atom({
  key: "user-name",
  default: "",
});
export const userId = atom({
  key: "user-id",
  default: "cl3cmh69dz7d609996elzsw0w",
});
export const userE = atom({
  key: "user-ids",
  default: { id: "", numero: "", mdp: "", nom: "",   reservations:[{
    code:"",
    statut:false,
    place:{
      numero:""
    }
  }] },
});
export const choixState = atom({
  key: "choix-state",
  default: true,
});
export const usersState = atom({
  key: "users-state",
  default: [{
    id:"",
    numero:"",
    mdp:"",
    reservations:[{
      code:"",
      statut:false,
      place:{
        numero:""
      }
    }]
  }]
});