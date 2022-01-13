import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsusbcribeFromAuth = null;

  componentDidMount = () => {
    this.unsusbcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user,
      })
      console.log(user);
    })
  }
  
  componentWillUnmount = () => {
    this.unsusbcribeFromAuth();
  }

  render () {
    const { currentUser } = this.state;
    return (
      <div>
        <Header
          currentUser={currentUser}
        />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
