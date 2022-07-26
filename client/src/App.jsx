// main libraries
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component
import Signup from './components/Auths/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auths/Login/Login';
import SnackBars from './components/Utils/SnackBars';
import Polls from './components/Polls/Polls';
// import CreatePoll from './components/CreatePoll/CreatePoll';
// import CreateWork from './components/CreateWork/CreateWork';
import CreateCompetition from './components/CreateCompetition/CreateCompetition';
import Vote from './components/Vote/Vote';
import FileCropper from './components/FileCropper/FileCropper';

// css
import './App.css';

// ac
import { loadMe } from './actionCreators/auth';
import { createAlert } from './actionCreators/alerts';

function App(props) {
  useEffect(() => {
    const jwtToken = localStorage.getItem('lampost token');
    if (jwtToken) {
      props.loadMe(jwtToken);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('after login')) {
      props.createAlert('Logged in successfully!', 'success');
      localStorage.removeItem('after login');
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('after signup')) {
      props.createAlert('Welcome to Lampost!', 'success');
      localStorage.removeItem('after signup');
    }
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Signup />
      <Login />
      <FileCropper />
      {/* <CreatePoll /> */}
      {/* <CreateWork /> */}
      <CreateCompetition />
      <SnackBars />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Vote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default connect(null, { loadMe, createAlert })(App);
