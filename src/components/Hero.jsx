import { herodata } from "../data/homeData";
// import heroImage from "../assets/markhero.webp";
import overwatch from "../assets/overwatch.webp";

const Hero = () => {
  return (
    <div className="hero">

        <section className="hero-main">
          <h2> Overwatch 2 launch marred by ongoing DDoS attacks </h2>  
          <p>Taylor Hatmaker</p>
          <div>
            <img src={overwatch} alt="hero" />
          </div>
        </section>
        <section className="hero-articles">
          {herodata.map((item) => {
            const { header, author } = item;
            return(
              <article>
                <h2 className="header">{header}</h2>
                <p>{author}</p>
              </article>
            )
          })}
        </section>
    </div>
  )
}

export default Hero