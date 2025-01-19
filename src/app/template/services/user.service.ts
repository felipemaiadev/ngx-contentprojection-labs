import { HttpClient } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/entities/user.model";

@Injectable({
    providedIn:"any"
})
export class UserService {


    constructor(private http: HttpClient) {
    }

    ListUsers():Observable<Array<User>>
    {
        return this.http.get<Array<User>>("http://localhost:3001/USERS")
        // https://jsonplaceholder.typicode.com/users
    }
}
