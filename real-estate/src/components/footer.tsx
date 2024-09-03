// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css'; // Import CSS module for scoped styles

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 wow fadeIn" data-wow-duration="1s" data-wow-delay="0.25s">
            <p>
              © Copyright 2021 Space Dynamic Co. All Rights Reserved.
              <br />
              Design: <a rel="nofollow" href="https://templatemo.com" target="_blank" rel="noopener noreferrer">TemplateMo</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
