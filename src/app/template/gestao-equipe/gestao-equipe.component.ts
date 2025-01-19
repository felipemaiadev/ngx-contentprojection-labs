import { Component, OnInit, signal} from '@angular/core';
import { Role } from '@template/models/entities/role.model';
import { User } from '@template/models/entities/user.model';
import { RoleService } from '@template/services/role.service';
import { UserService } from '@template/services/user.service';
import {forkJoin, Observable, switchMap, map, mergeMap, mergeAll} from 'rxjs';
// import  * as R from 'rambda';

@Component({
  selector: 'app-gestao-equipe',
  imports: [],
  templateUrl: './gestao-equipe.component.html',
  styleUrl: './gestao-equipe.component.css'
})
export class GestaoEquipeComponent implements OnInit {


  users$: Observable<Array<User> | null> = new Observable();
  roles$: Observable<Array<Role> | null> = new Observable();
  $users = signal<Array<User> | null>(null);
  $roles = signal<Array<Role> | null>(null);
  users?: Array<User>;
  roles?: Array<Role> = [];


//  @SkipSelf() private readonly  userService =  Inject(UserService);
//  @SkipSelf() private readonly roleService = Inject(RoleService);

  constructor(private userService: UserService,
              private readonly roleService: RoleService) {
  }


  ngOnInit(): void {

    forkJoin({
      users: this.userService.ListUsers(),
      roles: this.roleService.ListRoles(),
    })
    // this.userService.ListUsers().subscribe(users => this.users = users);
    // this.roleService.ListRoles().subscribe(roles => this.roles = roles);
  }



  getMergedConsults(): void
  {
    this.userService.ListUsers().pipe(
      // map((users: Array<User>)=> users.map(user => user)),
      mergeMap( ids => {
                this.users = ids;
                const idsMap = ids.map( user => user.UID );
                return this.roleService.ListFilterRoles(idsMap)
                  .pipe(
                        map((roles: Array<Role>)=> roles.map(role => {
                          return ({
                              UID: role.UID,
                              CLAIMS: role.CLAIMS,
                          })
                        }))
                      )
              }),
      map((response) => {
        return response.map(role => {
          return ({
              UID: role.UID,
              CLAIMS: role.CLAIMS,
              IsPostBack: true
            })
        })
      })
    ).subscribe((value ) => {
     const parsed =  this.users?.map((user: User, idx) => {
                console.log(value, user);
        }, value)
    });

  }

  onMeger()
  {
    const mapIdWithClaims = (x: Role) => x.id;
    // const claims = R.forEach(mapIdWithClaims, this.roles);


    // const result = R.mergeDeepRight({...this.users}, {...this.roles});
    // console.table(result);

    this.getMergedConsults()
  }



}
