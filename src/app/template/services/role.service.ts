import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Role } from "@template/models/entities/role.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"any"
})
export class RoleService {


    constructor(private http: HttpClient) {
    }

    ListRoles():Observable<Array<Role>>
    {
        return this.http.get<Array<Role>>("http://localhost:3000/ROLES");
        // https://jsonplaceholder.typicode.com/users
    }

    ListFilterRoles(ids: Array<number>):Observable<Array<Role>>
    {
      console.log(ids);
      return this.http.get<Array<Role>>("http://localhost:3000/ROLES",{
        params: {filter: ids}
      });
      // https://jsonplaceholder.typicode.com/users
    }

}
