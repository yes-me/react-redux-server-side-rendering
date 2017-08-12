import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeImg from "../Images/home-feature-img.jpg";
import shelby from "../Images/shelby.jpg"
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home main">
        <article className="col2-left">
          <h1>Both client and server make calls to load data from API server.</h1>
          <p>
            Twice a year we invest a small amount of mana in a large number of wizards (recently
            105).
          </p>
          <p>
            The wizards move to the Highlands of Scotland for 3 months, during which we work
            intensively with them to get the magic into the best possible shape and refine their
            pitch to patrons. Each cycle culminates in Demo Day, when the wizards present their
            magic to a carefully selected, invite-only audience.
          </p>
          <p>
            But WC doesn’t end on Demo Day. We and the WC alumni network continue to help mages for
            the life of their magic, and beyond.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live 
            the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large 
            language ocean. A small river named Duden flows by their place and supplies it with the necessary 
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic 
            life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the 
            far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, 
            wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her 
            seven versalia, put her initial into the belt and made herself on the way. When she reached the first 
            hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, 
            the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric 
            question ran over her cheek, then
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical 
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at 
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, 
            from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
            the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et 
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the 
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
            sit amet..", comes from a line in section 1.10.32.
          </p>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
            Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          
          </p>
        </article>
        <section className="col2-right">
          <figure>
            <img src={homeImg} />
          </figure>
          <figure>
            <img src={shelby} />
          </figure>
        </section>
      </div>
    );
  }
}

export default Home;
