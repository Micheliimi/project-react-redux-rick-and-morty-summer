import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Cards from '../components/Cards';
import Header from '../components/Header';
import { fetchCharacters } from '../redux/actions';

const Mainpage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
};

export default Mainpage;
