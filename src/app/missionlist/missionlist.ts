import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Spacexapi } from '../network/spacexapi';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  imports: [],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css',
})
export class Missionlist implements OnInit {

  missions: Mission[] = [];

  constructor(private spacexApi: Spacexapi) {}

  ngOnInit(): void {

    this.spacexApi.getMissions().subscribe((data) => {

      this.missions = data;
    });
  }
}
