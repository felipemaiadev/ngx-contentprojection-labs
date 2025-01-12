export type User = {
        UID: number,
        name: string,
        gender: string,
        age: number,
        address: Address
}

export type Address = {
    state: string,
    city: string
}