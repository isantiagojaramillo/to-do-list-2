import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>Tasks Lists</h1>
        <button className='header__button'>
            Do not show complete tasks
            <FontAwesomeIcon icon={faEyeSlash} className='header__icon-button' />
        </button>
    </header>
  )
}
