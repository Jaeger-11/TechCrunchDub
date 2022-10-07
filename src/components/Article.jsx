import React from 'react'

const Article = ({article}) => {
    const { header, content, author, time, date, image } = article;
  return (
    <div className='content-container'>
        <article className='article'>
            <h2 className='header'>{header}</h2>
            <p>{author}</p>
            <p>{time} {date}</p>
        </article>
        <p className='content'>
            {content.substring(0,250)}...
        </p>
        <div className='image'>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Article;