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
          <Answer text="Event manažerka" />
          <Question text="Co tě přimělo přihlásit se do Digitální akademie?" />
          <Answer text="Chtěla bych změnit obor a najít si kreativnější práci." />
          <Question text="Proč Máničky a soudruzi?" />
          <Answer text="Moderní historie mě baví a myslím, že projekty tohoto typu mají smysl. Velmi často se setkávám s názorem, že historie je ve škole vlastně taková nadstavba, vždyť to vlastně k ničemu pořádně není... S tím nesouhlasím a chtěla bych tedy vytvořit něco, co dětem zábavnou formou tu historii přiblíží a může pomoct tento pohled změnit." />
          <Question text="Co tě nabíjí?" />
          <Answer text="Ruční práce všeho druhu, přátelé a rodina, cestování, vaření a pečení." />
          <Question text="Co tě vybíjí?" />
          <Answer text="Administrativní činnosti a setkání s blbcem." />
          <Question text="Kdybys musela emigrovat, kam by to bylo a proč?" />
          <Answer text="Určitě někam do anglofonního světa, taková Austrálie by nemusela být špatná, pláže, teplo, relax...😎 " />
          <Question text="Kofola nebo Coca-Cola?" />
          <Answer text="Určitě Kofola." />
          <Question text="Veronika ve třech slovech:" />
          <Answer text="Třeba tři V: výřečná, vtipná, veselá." />
        </div>
      </div>
    </>
  );
};

export default Onas;
