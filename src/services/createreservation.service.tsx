import { NEWRESERVATION, UPDATERESERVATION } from "../consts/mutation"
import { RESERVATIONS } from "../consts/queries"
import { client } from "../helpers/apollo"

export class CreateReservationService{
    static newReservation=async ( userID: any,statut: any,code: any,placeID: any )=>{
        try {
            const result=await client.mutate({
                mutation:NEWRESERVATION,
                variables:{userID,statut,code,placeID}
            })
            return result.data.newReservation
        } catch (e) {
            console.log(e)
        }
    }
    }

