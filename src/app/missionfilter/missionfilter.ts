import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-missionfilter',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './missionfilter.html',
  styleUrl: './missionfilter.css',
})

export class Missionfilter {

  selectedYear: string = '';

  @Output() yearSelected = new EventEmitter<string>();
  
  onFilter(value: any): void {
    const yearString = value ? value.toString() : '';
    this.yearSelected.emit(yearString);
  }

  onClear(): void {
    
    this.selectedYear = '';
    this.yearSelected.emit('');
  }
}
