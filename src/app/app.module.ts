import { ExportService } from './services/export-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StorageService } from './services/storage-service';
import { NoteFilterPipe } from './filters/note.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NoteFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [StorageService, ExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
