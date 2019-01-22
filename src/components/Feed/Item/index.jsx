import React from 'react';

const Item = ({ date, link, title }) => {
  let articleDate = new Date(date);
  articleDate = `${articleDate.getMonth()+1}/${articleDate.getDate()}/${articleDate.getFullYear()}`

  return (
    <li className='item'>
      <span className='title'>
        <a href={ link } rel='noopener noreferrer' target='_blank'>
          { title }
        </a>
      </span>
      {date !== 'null' && <span className='date'>{ articleDate }</span>}
    </li>
  );
};

Item.displayName = 'Item';
export default Item;
