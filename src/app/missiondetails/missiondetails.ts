import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChangeDetectorRef } from '@angular/core';
import { Spacexapi } from '../network/spacexapi';
import { Mission } from '../models/mission';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-missiondetails',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink, MatDivider],
  templateUrl: './missiondetails.html',
  styleUrl: './missiondetails.css',
})

export class Missiondetails implements OnInit {

  mission: Mission | undefined;

  constructor(
    private route: ActivatedRoute,
    private spacexApi: Spacexapi,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.spacexApi.getMission(id).subscribe({
      
      next: (data) => {
        this.mission = data;
        this.cdr.detectChanges();
      },
      
      error: (err) => {
        console.error('Error loading mission:', err);
      }
    });
  }
}
