import { gql } from "@apollo/client"
import { RoomsType } from '../types/api'

export const GET_ROOMS = gql`
{
    usersRooms{
        user{
            email
            firstName
            lastName
            id
            role
        }
        rooms{
            id
            name
        }
    }
}
`

export type GET_ROOMS_TYPE = { usersRooms: Partial<RoomsType> } | undefined;