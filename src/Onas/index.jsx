import React from 'react';
import Answer from './Answer';
import Question from './Question';
import './style.css';
import VeronikaImg from '../img/Veronika_profile.jpg';
import JitkaImg from '../img/Jitka_profile.jpg';

const Onas = () => {
  return (
    <>
      <h2>O nás</h2>
      <div className="onas">
        <div className="manicka">
          <img
            className="profile-img"
            id="jitka-img"
            src={JitkaImg}
            alt="Jitka Hladká"
          />
          <h3>Jitka Hladká</h3>

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
        <div className="manicka">
          <img
            className="profile-img"
            id="veronika-img"
            src={VeronikaImg}
            alt="Veronika Sesay"
          />
          <h3>Veronika Sesay</h3>

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
    </>
  );
};

export default Onas;
