import React from 'react';
import Answer from './Answer';
import Question from './Question';
import './style.css';
import VeronikaImg from '../img/Veronika_profile.jpg';

const Onas = () => {
  return (
    <div className="onas">
      <div className="manicka">
        <h2>Jitka Hladká</h2>
        <img className="profile-img" id="jitka-img" src="" alt="Jitka Hladká" />
        <Question text="Povolání?" />
        <Answer text="blabla" />
        <Question text="Co tě přimělo přihlásit se do Digitální akademie?" />
        <Answer text="blabla" />
        <Question text="Proč Máničky a soudruzi?" />
        <Answer text="blabla" />
        <Question text="Co tě nabíjí?" />
        <Answer text="blabla" />
        <Question text="Co tě vybíjí?" />
        <Answer text="blabla" />
        <Question text="Kdybys musela emigrovat, kam by to bylo a proč?" />
        <Answer text="blabla" />
        <Question text="Kofola nebo Coca-Cola?" />
        <Answer text="blabla" />
        <Question text="Jitka ve třech slovech:" />
        <Answer text="blabla" />
      </div>
      <div className="manicka manicka--bottom">
        <img
          className="profile-img"
          id="veronika-img"
          src={VeronikaImg}
          alt="Veronika Sesay"
        />
        <h2>Veronika Sesay</h2>
        <Question text="Povolání?" />
        <Answer text="blabla" />
        <Question text="Co tě přimělo přihlásit se do Digitální akademie?" />
        <Answer text="blabla" />
        <Question text="Proč Máničky a soudruzi?" />
        <Answer text="blabla" />
        <Question text="Co tě nabíjí?" />
        <Answer text="blabla" />
        <Question text="Co tě vybíjí?" />
        <Answer text="blabla" />
        <Question text="Kdybys musela emigrovat, kam by to bylo a proč?" />
        <Answer text="blabla" />
        <Question text="Kofola nebo Coca-Cola?" />
        <Answer text="blabla" />
        <Question text="Veronika ve třech slovech:" />
        <Answer text="blabla" />
      </div>
    </div>
  );
};

export default Onas;
