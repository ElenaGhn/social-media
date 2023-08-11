import {Component, } from '@angular/core';

@Component({
  selector: 'app-content-feed',
  templateUrl: './content-feed.component.html',
  styleUrls: ['./content-feed.component.scss']
})
export class ContentFeedComponent {

  image = 0;


  imageUrl: string [] = [
    'https://www.tuxedo-cat.co.uk/wp-content/uploads/2016/12/shutterstock_138013388.jpg',
    'https://media.istockphoto.com/id/1336021035/photo/black-and-white-color-cat-looking-at-camera-curiosity.webp?b=1&s=170667a&w=0&k=20&c=_z9Uj-G_QzE-mxqd4-mSRFYFTwB3UEi6g_hLySo_s2Y=',
    'https://hellobark.com/wp-content/uploads/domestic-cats.jpg',
    'https://www.hepper.com/wp-content/uploads/2021/07/Tuxedo-Ragamuffin-Cat_Kill_Baal_Shutterstock.jpg'
  ];



  addItem(url: string) {
    if (this.isImageJPG(url)) {
      this.imageUrl.push(url);
    } else {
      alert('The URL entered is not an image of type JPG!');
    }
  }

  isImageJPG(url: string): boolean {
    return url.toLowerCase().endsWith('.jpg') || url.toLowerCase().endsWith('.jpeg');
  }
}
