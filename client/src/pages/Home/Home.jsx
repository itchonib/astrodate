import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import Logo from '../../components/Logo';

const Home = () => {
  return (
    <div className={'homecontainer'}>
      <h1 className={'hometitle'}> AstroDate </h1>
      <Logo height={'7.625em'} width={'10.625em'} />
      <p className={'hometag-line'}>Find Love in the Stars!</p>
      <p className={'homehelp-text'}>
        {' '}
        By signing up for Astrodate, you agree to our Terms of Service . Learn
        how we process your data in our Privacy Policy and Cookies Policy.{' '}
      </p>
      <button className={'sign-in-button'} type="submit">
        {' '}
        <Link className={'create-link'} to="/signup">
          {' '}
          Create Free Acount
        </Link>
      </button>
      <Link className={'signin-link'} to="/login">
        {' '}
        Sign In{' '}
      </Link>
    </div>
  );
};

export default Home;
