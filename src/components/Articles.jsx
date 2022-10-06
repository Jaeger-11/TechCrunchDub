import {data} from '../data/homeData';
import Article from './Article';

const Articles = () => {
  return (
    <div className="latest">
        <h3>The Latest</h3>
        <section>
            {data.map((article) => {
                return (<Article  article={article}/>)
            })}
        </section>
    </div>
  )
}

export default Articles;