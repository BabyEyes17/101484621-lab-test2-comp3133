import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardAvatar, MatCardFooter  } from '@angular/material/card';
import { Spacexapi } from '../network/spacexapi';
import { Mission } from '../models/mission';
import { Missionfilter } from '../missionfilter/missionfilter';
import { ChangeDetectorRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-missionlist',
  imports: [CommonModule, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardAvatar, RouterLink, Missionfilter, MatIconModule, MatCardFooter],
  templateUrl: './missionlist.html',
  styleUrl: './missionlist.css',
})

export class Missionlist implements OnInit {

  missions: Mission[] = [];

  constructor(private spacexApi: Spacexapi, private cdr: ChangeDetectorRef) {}
  
  ngOnInit(): void {
    
    this.loadMissions();
  }

  loadMissions(): void {
    
    this.spacexApi.getMissions().subscribe({
      
      next: (data) => {
        
        console.log('Missions loaded:', data.length);
        this.missions = data;
        this.cdr.detectChanges();
      },
      
      error: (err) => {
        
        console.error('API Error:', err);
      }
    });
  }


  onYearFilter(year: string): void {
    
    // Search only if year is a 4-digit number or if it's empty
    if (year.length === 4 || year === '') {
      
      const yearAsNumber = year === '' ? null : +year;
      
      if (yearAsNumber) {
        
        this.spacexApi.getMissionsByYear(yearAsNumber).subscribe({
          
          next: (data) => {
            
            this.missions = data;
            this.cdr.detectChanges();
          }
        });
      } 
      
      else { this.loadMissions(); }
    }
  }
}
