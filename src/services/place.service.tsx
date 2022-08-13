import { PLACES } from "../consts/queries"
import { client } from "../helpers/apollo"

        export class PlacesService {
            static places=async()=>{
                try {
                    const result=await client.query({
                        query:PLACES,
                    });
                    console.log("resulta:",result);
                    return result.data.places;
                } catch (e) {
                    console.log(e)
                }
            }
             
            }