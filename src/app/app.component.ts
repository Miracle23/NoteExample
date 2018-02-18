import { ExportService } from './services/export-service';
import { Note } from './models/Note';
import { Component } from '@angular/core';
import { StorageService } from './services/storage-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = [new Note()];

  constructor(private storageService: StorageService, private exportService: ExportService) {
    let notesCheck;
    notesCheck = this.storageService.read<Array<Note>>('notes');
    if(notesCheck){
      this.notes = notesCheck;
    }
    console.log(notesCheck);
  }

  addNote(){
    let newNote;
    newNote = new Note();
    newNote.createdOn = new Date();
    newNote.text = '';
    newNote.edit = true;
    this.notes.push(newNote);
    newNote = {};
  };

  delete(i) {
    var r = confirm("Are you sure you want to delete this note?");
    if (r == true) {
      this.notes.splice(i, 1);
    }

      this.update();
  };

  update() {
    this.storageService.write("notes", this.notes);
  };

  download() {
    this.exportService.downloadCSV("notesexport.csv",this.notes);
  }
}
