import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ date, description, link, showDesc, title }) => {
  let articleDate = new Date(date);
  articleDate = `${ articleDate.getMonth()+1 } / ${ articleDate.getDate() } / ${ articleDate.getFullYear() }`

  return (
    <li className='item'>
      <span className='title'>
        <a href={ link } rel='noopener noreferrer' target='_blank'>
          { title }
        </a>
      </span>
      { showDesc && description !== null &&
        <span className='description' dangerouslySetInnerHTML={{ __html: description }} />
      }
      { date !== 'null' &&
        <span className='date'>{ articleDate }</span>
      }
    </li>
  );
};

Item.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  showDesc: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

Item.displayName = 'Item';
export default Item;
