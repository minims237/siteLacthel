import gql from "graphql-tag";
export const NEWRESERVATION= gql`
  mutation newReservation(
    $userID: String!
    $statut: Boolean!
    $code: String!
    $placeID: String!
  ) {
    newReservation(
      userID: $userID
      statut: $statut
      code: $code
      placeID: $placeID
    ) {
      id
      code
    }
  }
`;


export const UPDATERESERVATION = gql`
  mutation updateReservation(
       $id:String!
        $statut:Boolean!
  ) {
    updateReservation(id:$id,statut: $statut){
      statut
    }
  }
`;

export const DELETERESERVATION = gql`
  mutation DeleteReservation(
       $id:String!
  ) {
    DeleteReservation(id:$id)
  }
`;