import { Component, computed, signal, Input, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';
import { type User} from './user.model'
import { CardComponent } from '../shared/card/card.component';

// const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)

// type User = {
//   id: string;
//   name: string,
//   avatar: string
// }



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex])

  // get imagePath(){
  //   return 'assets/users/'+this.selectedUser().avatar
  // }

  //signal
  // imagePath = computed(()=>"assets/users/"+ this.selectedUser().avatar)

  // @Input({required:true}) id!:string
  // @Input({required: true}) avatar!:string
  // @Input({required: true}) name!:string

  @Input({required:true}) user!: User
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();
  get imagePath(){
      return 'assets/users/'+this.user.avatar;
    }

  // imagePath = computed(()=>{
  //   return 'assets/users/'+this.avatar();
  // })
  onSelectUser(){
    // console.log("connect")
    // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    this.select.emit(this.user.name);
  }
}
