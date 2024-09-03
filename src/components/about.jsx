import React from 'react'
import Star from '../assets/swar.png'
import './about.css'
import Foo from '../assets/car1.jpg'


const About = () => {
  return (
    <div className='about' style={{backgroundImage:`url(${Star})`,height:"100%",width:"100%"}}>
        <h2 className="card-title">About Star Wars</h2>
        <div className="car my-3">
            
           
            <p className="card-text">Star Wars is a multi-genre mythology and multimedia franchise created by George Lucas in 1976. Comprising movies, novels, comics, video games, toys, and numerous television series, the Star Wars franchise employs archetypal motifs common to religions, classical mythology, and political climax, as well as musical motifs of those same aspects.</p>
            <p className="card-text">As one of the foremost examples of the space opera subgenre of science fiction, Star Wars has become part of mainstream popular culture, as well as being one of the highest-grossing series of all time.
            In 2012, The Walt Disney Company bought the rights to the franchise from George Lucas for 4.05 billion dollars. Since then, Disney has split off Star Wars into two main categories, those being Star Wars Legends and Star Wars Canon, with Canon being the "official" story of the franchise.</p>
            <p className="card-text">The catalyst of the multimedia franchise was the release of its mainline story, officially known as the Skywalker Saga; a collection of 9 films released from the years 1977 to 2019, with the first and last release of Star Wars: Episode IV A New Hope and Star Wars: Episode IX The Rise of Skywalker, respectively. Despite the saga's ending, the franchise still continues strong, mainly due to the success of Disney+ original television series, both live-action, such as The Mandalorian, and animated, such as Star Wars: The Bad Batch, as well as publishing projects such as Star Wars: The High Republic.</p>
            <p className="card-text">The Star Wars story has been presented in a series of American films, which have spawned a large quantity of books and other media. The films and novels employ common science-fiction motifs.</p>
        </div>
    </div>
  )
}

export default About