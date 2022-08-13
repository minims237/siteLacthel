import { atom } from "recoil";

export const associationIdState=atom({
  key:"association-id",
  default:""
})
export const reservationsState=atom({
    key:"reservations-state",
    default:[{
      id:"",
      statut:false,
      code:"",
      place:{
          numero:""
      } 
    }]
  })
