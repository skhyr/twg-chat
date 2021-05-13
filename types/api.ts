type RoomsType = {
    rooms: SingleRoomType[],
    user: UserType, 
}

type SingleRoomType = {
    id: string,
    name: string, 
    roomPic: string,
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

export { RoomsType, SingleRoomType, UserType, ID }