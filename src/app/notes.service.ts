import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private apiUrl = 'https://activitybackend-production.up.railway.app/api/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addNote(note: { text: string; type: string; user: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, note);
  }

  deleteNote(noteId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${noteId}`);
  }
}
