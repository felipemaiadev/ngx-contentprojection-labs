import { Component, OnInit, signal} from '@angular/core';
import { Role } from '@template/models/entities/role.model';
import { User } from '@template/models/entities/user.model';
import { RoleService } from '@template/services/role.service';
import { UserService } from '@template/services/user.service';
import {forkJoin, Observable, switchMap, map} from 'rxjs';
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
      map((users: Array<User>)=> users.map(user => user.UID)),
      switchMap( ids => {
            return this.roleService.ListFilterRoles(ids)
      }),

    ).subscribe((value: any) => console.log(value));
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
