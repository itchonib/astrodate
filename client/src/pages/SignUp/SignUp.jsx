import React, { useState, useContext } from 'react';
import './SignUp.css';
import Loader from '../../components/Loader';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { schema } from './schema';
import Start from './Parts/Start';
import Stepper from './Stepper';

const SignUp = ({ history }) => {
  const { gender, setCurrentUser } = useContext(AppContext);
  const [activeSchema, setActiveSchema] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState('');

  const handleChange = (e) => {
    setUserData({ gender, ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextForm = activeSchema?.next;

    if (
      new Date().getTime() - new Date(userData.birthday).getTime() <
      568025136000
    ) {
      alert('Sorry you have to be 18 years or older to join');
      return;
    }

    if (nextForm) {
      setActiveSchema(schema[nextForm]);
      return;
    }

    if (userData.password !== userData.password_confirm) {
      alert('password do not match');
      return;
    }
    try {
      setIsLoading(true);
      const response = await axios.post('/api', userData);
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data.user);
    } catch (error) {
      alert(error);
      console.log('SignUp Error: ', error);
    } finally {
      setIsLoading(false);
      history.push('/preferences');
    }
    setActiveSchema(null);
  };

  const initForm = (_) => {
    setActiveSchema(schema.one);
  };

  if (isLoading) return <Loader />;

  return (
    <div className={'main-holder-sign-up'}>
      <p className={'title-su'}> Astrodate </p>
      <form onSubmit={handleSubmit} className={'start'}>
        {/* 
        <p className={'sub-title-su'}> LET'S GET STARTED! </p>
        <ActiveForm handleChange={handleChange} userData={userData} />
        <br />
        <button className={'sub-button-su'} type="submit">
          {' '}
          {activeSchema.next ? 'Next' : 'Submit'}{' '}
        </button> */}

        <Stepper
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          userData={userData}
        />
      </form>
    </div>
  );
};

export default SignUp;
