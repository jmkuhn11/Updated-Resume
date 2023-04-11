import React from 'react';
import First from '../..//images/first.PNG'
import MR from '../..//images/Movie-Review.JPG'
import MVC from '../..//images/MVC-Tech-Blog.JPG'
import NT from '../..//images/Note-Taker.JPG'
import P1 from '../..//images/Project1-Pic1.PNG'
import P3 from '../..//images/Project3-Main.png'

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
        <section>
          <div>
              <br></br>
              <h3>First Assignment</h3>
              <a class="flush" href="https://jmkuhn11.github.io/Password-Generator-Ch3/">
              <img alt="Simple Password Generator" class="mediumProject" src={First}></img></a>
              <br></br>
              <button><a href="https://github.com/jmkuhn11/Password-Generator-Ch3">Github</a></button>
           </div>   
          <div>
              <br></br>    
              <h3>MVC Tech Blog</h3>
              <a class="flush" href="https://glacial-forest-62769.herokuapp.com/">
              <img alt="Online blog for users to interact" class="mediumProject" src={MVC}></img></a>
              <br></br>
              <button><a href="https://github.com/jmkuhn11/MVC-Tech-Blog">Github</a></button>
          </div>
          <div>
              <br></br>
              <h3>Note Taker</h3>
              <a class="flush" href="https://mysterious-springs-39941.herokuapp.com/">
              <img alt="Personal system for note taking" class="mediumProject" src={NT}></img></a>
              <br></br>
              <button><a href="https://github.com/jmkuhn11/Note-Taking-Generator">Github</a></button>
          </div>
          <div>
              <br></br>
              <h3>Open Library Selector</h3>
              <a class="flush" href="https://jmkuhn11.github.io/Open-Library/">
              <img alt="Book Search Engine Project" class="mediumProject" src={P1}></img></a>
              <br></br>
              <button><a href="https://github.com/jmkuhn11/Open-Library">Github</a></button>
          </div>
          <div>
              <br></br>
              <h3>Online Movie Review Platform</h3>
              <a class="flush" href="https://mighty-plains-34884.herokuapp.com">
              <img alt="Movie Search Engine Project" class="mediumProject" src={MR}></img></a>
              <br></br>
              <button><a href="https://github.com/dmanaglia/Social-Movie-Media">Github</a></button>
          </div>
          <div>
              <br></br>
              <h3>Gaming Geeks</h3>
              <a class="flush" href="https://blooming-lake-18705.herokuapp.com/">
              <img alt="Online Chatroom for Gamers" class="mediumProject" src={P3}></img></a>
              <br></br>
              <button><a href="https://github.com/irkag22/Gaming-Geeks">Github</a></button>
          </div>
          <div>-</div>
          <div>Thank you!</div>
          <div>Please checkout the footer for more of my work on Github.</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
          <div>-</div>
      </section>
    </div>
  );
}
