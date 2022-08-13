import { DELETERESERVATION, NEWRESERVATION, UPDATERESERVATION } from "../consts/mutation"
import { RESERVATIONS } from "../consts/queries"
import { client } from "../helpers/apollo"

    export class updateReservationService{
        static updateReservation=async ( 
            id: any,statut: any
            )=>{
            try {
                const result=await client.mutate({
                    mutation:UPDATERESERVATION,
                    variables:{id,statut}
                })
                return result.data.updateReservation
            } catch (e) {
                console.log(e)
            }
        }
        }

        export class ReservationsService {
            static reservations=async()=>{
                try {
                    const result=await client.query({
                        query:RESERVATIONS,
                    });
                    console.log("resulta:",result);
                    return result.data.reservations;
                } catch (e) {
                    console.log(e)
                }
            }
             
            }

            
    export class DeleteReservationService{
        static DeleteReservation=async ( 
            id: any
            )=>{
            try {
                const result=await client.mutate({
                    mutation:DELETERESERVATION,
                    variables:{id}
                })
                return result.data.DeleteReservation
            } catch (e) {
                console.log(e)
            }
        }
        }
