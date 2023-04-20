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
          After graduating from Northwestern University in the spring of 2022, I accepted a claims position within Country Financial. The experience I gained through this opportunity helped me realize I wanted to find a job that utilized my mathematical and analytical skills. I enrolled in a 12- week Coding Bootcamp through Northwestern, which I completed in April 2023. I am now searching for a job where I can continue to develop and grow these skills.
          </p>
        </div>
    </div>
  );
}
