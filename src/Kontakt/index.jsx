import React from 'react';
import './style.css';
import JitkaImg from '../img/Jitka_profile.jpg';
import VeronikaImg from '../img/Veronika_profile.jpg';
import emailIcon from '../img/email_icon.png';
import phoneIcon from '../img/phone_icon.png';
import linkedInIcon from '../img/linkedin_icon.png';

const Kontakt = () => {
  return (
    <main>
      <h2>Kontakt</h2>
      <div className="contact">
        <div className="manicka">
          <img
            className="profile-img"
            id="jitka-img"
            src={JitkaImg}
            alt="Jitka Hladká"
          />
          <h3>Jitka Hladká</h3>
          <div className="contact__detail">
            <img className="icon" src={emailIcon} alt="e-mail icon" />
            <p>jitka.hladka@gmail.com</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={phoneIcon} alt="phone icon" />
            <p>+420...</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={linkedInIcon} alt="LinkedIn icon" />
            <p>
              <a href="https://linkedin.com/in/jitka-hladká-5a9b68228">
                Jitka Hladká
              </a>
            </p>
          </div>
        </div>
        <div className="manicka">
          <img
            className="profile-img"
            id="veronika-img"
            src={VeronikaImg}
            alt="Veronika Sesay"
          />
          <h3>Veronika Sesay</h3>
          <div className="contact__detail">
            <img className="icon" src={emailIcon} alt="e-mail icon" />
            <p>veronika.sesay@gmail.com</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={phoneIcon} alt="phone icon" />
            <p>+420 775 955 051</p>
          </div>
          <div className="contact__detail">
            <img className="icon" src={linkedInIcon} alt="LinkedIn icon" />
            <p>
              <a href="https://linkedin.com/in/veronika-sesay-cz">
                Veronika Sesay
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Kontakt;
