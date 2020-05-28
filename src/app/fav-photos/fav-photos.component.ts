import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo Section';
  image1 = 'https://screenmusings.org/movie/blu-ray/Hero/images/Hero-272.jpg';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIiSCjFjg2v38mb_O2UROMKUkJJeTPMs6jbas2nwcqyP4sLwyk&usqp=CAU';
  image3 = 'https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1527192823331-Q6ZI2QDGRTQI5Y0QALZ0/ke17ZwdGBToddI8pDm48kBpiV9Y7ITPTlwOYCI_cgaIUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dshq0IZLe6nQkHkUnHBavr9sqwwuMPavG2yLPftpXG72ZDqXZYzu2fuaodM4POSZ4w/hero-2002-368.jpg?format=1500w';

  constructor() { }

  ngOnInit() {
  }

}