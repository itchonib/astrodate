import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

const Start = (props) => {
  var items = [
    {
      name: 'Welcome',
      description:
        'First, we will ask you a short series of questions so that we can get to know you and find great matches for you'
    },
    {
      name: 'Now',
      description: `We will create your profile based on your answers to your onboarding questionaire. `
    },
    {
      name: 'Ready?',
      description: `Click the button to start filling out the form!`
    }
  ];

  return (
    <div className={'main-holder-sign-up'}>
      <p className={'title-su'}> Astrodate </p>
      <div className={'start-instructions'}>
        <h1> Welcome </h1>
        <p>
          {' '}
          First, we will ask you a short series of questions so that we can get
          to know you and find great matches for you. Then, we will create your
          profile based on your answers to your onboarding questionaire. Click
          the button to start filling out the form!{' '}
        </p>
        <button onClick={props.initForm} className={'start-button'}>
          Start!
        </button>
      </div>
    </div>
  );
};

export default Start;
