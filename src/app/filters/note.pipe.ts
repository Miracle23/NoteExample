import { Note } from './../models/Note';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'notefilter',
    pure: false
})
export class NoteFilterPipe implements PipeTransform {
    transform(items: Note[], filter: number): Note[] {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter((item: Note) => this.applyFilter(item, filter));
    }

    applyFilter(note: Note, filter: number): boolean {
        if (filter == 1) {
            if (note.warning != true || note.archived == true) {
                return false;
            }
            return true;
        }
        else if (filter == 2){
            if (note.archived == false) {
                return false;
            }
            return true;
        }
        else {
            if (note.archived == true) {
                return false;
            }
            return true;
        }
    }
}