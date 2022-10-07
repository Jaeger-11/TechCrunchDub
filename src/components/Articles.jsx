import {data} from '../data/homeData';
import Article from './Article';
import Tesla from '../assets/Tesla.webp';
import KimK from '../assets/KimK.webp';
import mario from '../assets/mario.webp';

const single = {
  header: "The Mario movie trailer is as cursed as we hoped",
  content: "Nintendo shared the first trailer for the anticipated “The Super Mario Bros. Movie,” an animated adventure featuring some deeply meme-worthy casting. With Chris Pratt as Mario and Jack ...",
  author: "Amanda Silberling",
  time: "9:30 PM GMT+1",
  image: mario,
  date: "September 30,2022"
}

const Articles = () => {
  return (
    <div className="latest">
        <h3>The Latest</h3>
        <section>
            {data.map((article) => {
                return (<Article  article={article}/>)
            })}
        </section>

        <div className='advert'>
          <h1 className='logo'>TC</h1>
          <div className='event'>
            <h3>TechCrunch Disrupt 2022</h3>
            <p>Oct 18-20</p>
          </div>
          <h2 className='title'>Discover the latest innovations and insights along with 10K startup founders and investors.</h2>
          <h3 className='notice'>2 Weeks Left Before Prices Increase</h3>
        </div>

        <Article article={single} /> 

    </div>
  )
}

export default Articles;