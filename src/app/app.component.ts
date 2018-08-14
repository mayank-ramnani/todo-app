import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = this.getTodosFromStorage( 'work_list' ).split(';');
  new_item = '';
  add_item = function() {
    if (this.new_item.trim() !== '') {
      this.items.push(this.new_item);
      this.saveTodosToStorage( 'work_list' );
      this.new_item = '';
    }
  };
  remove_item = function(index) {
    this.items.splice(index, 1);
    this.saveTodosToStorage( 'work_list' );
  };

  saveTodosToStorage( list_name ) {
    if (!localStorage.getItem( list_name )) {
      console.log('creating list');
    }
    localStorage.setItem(list_name, this.items.join(';'));
  }
  getTodosFromStorage( list_name ) {
    if ( localStorage.getItem( list_name ) ) {
      return localStorage.getItem( list_name );
    } else {
      return '';
    }
  }
}
