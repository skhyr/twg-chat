type RoomsType = {
    rooms: SingleRoomType[],
    user: UserType, 
}

type SingleRoomType = {
    id: string,
    name: string, 
    roomPic: string,
}

type RoomType = {
    id: String,
    messages: Message[],
    name: String,
    roomPic: String,
    user: UserType
}

type Message = {
    body: string,
    id: ID,
    intertedAt: string,
    user: UserType,
}

type UserType = {
    email: string,
    firstName: string,
    id: ID,
    lastName: string,
    profilePic: string,
    role: string,
}

type ID = string;

export { RoomsType, SingleRoomType, UserType, ID, RoomType, Message }