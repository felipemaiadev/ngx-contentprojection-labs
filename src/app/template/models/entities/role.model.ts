export type Role = {
    id: number,
    UID: number,
    CLAIMS:Array<Claim>
}

export type Claim = Record<string,Array<number>>;