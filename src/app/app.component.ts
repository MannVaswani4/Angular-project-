import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy.users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?:string;
  // name = ""
  get selectedUser(){
    console.log(1,this.selectedUserId)
    return this.users.find((user)=>user.name === this.selectedUserId)!;
  }
  onSelectUser(id:string){
    this.selectedUserId = id
  }
}
