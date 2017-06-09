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
      likes: [],
      avatar: "../assets/images/avatar/stevie.jpg"
    },
    {
      user: "jenny",
      name: "Jenny Doe",
      body: "Jenny Doe is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: [],
      avatar: "../assets/images/avatar/jenny.jpg"
    },
    {
      user: "veronika",
      name: "Veronika Sanders",
      body: "Veronika is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      likes: ['jenny', 'stevie'],
      avatar: "../assets/images/avatar/veronika.jpg"
    }

  ];

  likedTweet = undefined;
  currentUser = 'stevie';

  constructor() { }

  ngOnInit() {
  }

  handleLikedTweetFromChildComponent(tweet){
    this.likedTweet = tweet;   
    if( this.isRetweetedByUser(tweet) ){
      this.findTweet(tweet).likes.push(this.currentUser);
    }
  }

  /**
   * Verify if the user already liked the tweet
   * @param tweet 
   */
  isRetweetedByUser(tweet){
    return this.findTweet(tweet).likes.findIndex(currUser => {
      return currUser == currUser
    }) == -1

  }

  /**
   * Find the tweeter user
   * @param tweet
   */
  findTweet(tweet){
    var index = this.tweets.findIndex(currTweet => {
      return currTweet.user == tweet.user;
    })
    return this.tweets[index];
  }

}
