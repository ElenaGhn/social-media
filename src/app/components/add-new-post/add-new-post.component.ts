import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent {

  newUrl: string = '';

  @Output() addNewUrl = new EventEmitter<string>();



  addNewItem() {
    if (this.newUrl.trim() !== '') {
      this.addNewUrl.emit(this.newUrl);
      this.newUrl = '';
    }
  }

}

