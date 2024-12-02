import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe], // Add DatePipe here
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css'],
})
export class ActivityListComponent implements OnInit {
  noteTypes = ['Message', 'Phone', 'Coffee', 'Beer', 'Meeting Note'];
  notes: any[] = [];
  newNote = { text: '', type: '', user: 'User123', email: '' }; // Include email field
  getIconClass(type: string): string {
    switch (type) {
      case 'Message':
        return 'fas fa-envelope'; // Icon for Message
      case 'Phone':
        return 'fas fa-phone'; // Icon for Phone
      case 'Coffee':
        return 'fas fa-coffee'; // Icon for Coffee
      case 'Beer':
        return 'fas fa-beer'; // Icon for Beer
      case 'Meeting Note':
        return 'fas fa-handshake'; // Icon for Meeting Note
      default:
        return 'fas fa-sticky-note'; // Default Icon
    }
  }
  
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notesService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  addNote(): void {
    if (this.newNote.text && this.newNote.type && this.newNote.email) {
      this.notesService.addNote(this.newNote).subscribe((note) => {
        this.notes.unshift(note);
        this.newNote.text = '';
        this.newNote.type = '';
        this.newNote.email = ''; // Clear the email field
      });
    }
  }

  deleteNote(note: any): void {
    this.notesService.deleteNote(note._id).subscribe(() => {
      this.notes = this.notes.filter((n) => n._id !== note._id);
    });
  }
}
