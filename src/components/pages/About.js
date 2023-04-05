import React from 'react';
import Me from '../..//images/Me.jpg'

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
        <div><img alt="Self Portrait of Me" class="smallProject" src={Me}></img></div>
        <br></br>
        <div class="aboutPara">
          <p class="center">
          I began my coding career in freelance. I personally went out looking for local or smaller client bases needing a website or software development. In my spare time, I continued to develop a new phone app that would revolutionize handheld gaming. Once I launched it to the App Store, it was such a hit that Google reached out to me to come on as partner and work in their department.
          </p>
          <p class="center">
          I worked at Google for almost a decade before wanting to do something more with my talents. I have since jumped on Board at NASA with their Open Source Software Department. The people here are the most experienced developers in the world. I work with them on programming machinery to send to space and take accurate pictures of the universe beyond us. As a hobby, I also help the world become a better place by speeding up and putting anti-scamming Software on Ticketmaster, following the Taylor Swift fiasco.
          </p>
        </div>
    </div>
  );
}
