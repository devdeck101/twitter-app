import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [
    {
      user: "stevie",
      name: "Stevie Gray",
      body: "Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      avatar: "../assets/images/avatar/stevie.jpg"
    },
    {
      user: "jenny",
      name: "Jenny Doe",
      body: "Jenny Doe is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      avatar: "../assets/images/avatar/jenny.jpg"
    },
    {
      user: "veronika",
      name: "Veronika Sanders",
      body: "Veronika is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      avatar: "../assets/images/avatar/veronika.jpg"
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
