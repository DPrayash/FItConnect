import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { User } from 'src/app/models/user.model';
import { GymService } from 'src/app/services/gym.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  constructor(
    private gs: GymService,
    private us: UserService
    ) {}
    isLoggedIn = true;
    user: User = new User()
    activity: Activity[]=[];

    ngOnInit(){
      this.getUserName();
    }

    getUserName() {
      if(this.isLoggedIn){
        this.us.getUserByEmail('username1@email.com').subscribe((data)=>{
          this.user.userName = data.userName;
          console.log(data.userName);
        })
      }
    }

getSlotInfo(){
  this.us.getUserActivityListByUserEmail('username1@email.com').subscribe((data)=>{
    this.activity = data;
    console.log(data);
  })
}
  
}
