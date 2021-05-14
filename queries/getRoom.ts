import { gql } from "@apollo/client";
import { RoomType } from "../types/api";

export const GET_ROOM = gql`
  query Room($id: String!){
    room(id: $id) {
      name
      roomPic
      messages {
        body
        id
        insertedAt
        user{
          id
        }
      }
    }
  }
`;

export type GET_ROOM_TYPE = { room: Partial<RoomType> } | undefined;
