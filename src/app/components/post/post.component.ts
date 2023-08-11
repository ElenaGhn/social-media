import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  comments: string[] = [];
  liked: boolean = false;

  showCommentLabel: boolean = false;

  commentText: string = '';

  showShareWindow: boolean;

  @Input() imageUrl: string;


  likeEvent() {
    this.liked = !this.liked;
  }

  toggleComment() {
    this.showCommentLabel = !this.showCommentLabel;
    this.commentText = ''; // Clear the input text when toggling the comment label
  }

  addComment() {
    if (this.commentText.trim() !== '') {
      this.comments.push(this.commentText);
      // Handle adding the comment here (you can use this.commentText)
      this.commentText = ''; // Clear the input text after adding the comment
    }
  }

  CommentCloseButton() {
    this.showCommentLabel = false;
  }

  deleteAddedComment(index: number) {
   this.comments.splice(index, 1);
  }

  toggleShare(event?: MouseEvent){
    this.showShareWindow = true;
    if (event) {
      event.stopPropagation();
    }
  }

  closeDiv(event?: MouseEvent) {
    this.showShareWindow = false;
    if (event) {
      event.stopPropagation();
    }
  }

  ngOnInit(): void {
    this.showShareWindow = false;
  }
}



///// Fragen


///// maybe fenster for comment with a close button?
/////
