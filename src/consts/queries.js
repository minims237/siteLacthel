import gql from "graphql-tag";
export const USERS = gql`
query users{
    users{
        id
        numero
        reservations{
            code
            statut
            place{
                numero
            }
        }
    }
}
`;
export const PLACES = gql`
query places{
    places{
        id
        numero
    }
}
`;

export const RESERVATIONS = gql`
query reservations{
    reservations{
        id
        statut
        code 
        place{
            numero
        }
    }
}
`;
export const  LOGIN= gql`
    query login($numero:String!,$mdp:String!){
        login(numero:$numero,mdp:$mdp){
            id
            numero
        }
    }
`;




