import React from 'react';
import './App.css';
import LikeButton from './componants/LikeButton';
import ClickablePicture from './componants/ClickablePicture';
import IdCard from './componants/IdCard';

function App(props) {
  return (
    <div className="App">
      <h4>Iteration 1</h4>
      <h3>IdCard</h3>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <h4>Iteration 8</h4>
      <h3>LikeButton</h3>
      <LikeButton />

      <h4>Iteration 9</h4>
      <h3>ClickablePicture</h3>
      <ClickablePicture
        img="/img/persons/maxence.png"
        clickedImg="/img/persons/maxence-glasses.png"
      />
    </div>
  );
}

export default App;
