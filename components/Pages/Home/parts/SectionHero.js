import React from "react";

const SectionHero = ({ styles }) => {
  return (
    <section className={styles["hero"]}>
      <div className="container" data-aos="fade-down">
        <div className="d-flex align-items-center">
          <span className={`${styles.garis} d-none d-sm-block`}></span>
          <h1>
            Fullstack <span>Developer</span>
          </h1>
        </div>
        <p>
          I’am a front-end designer & back-end developer <br />
          From Indonesia 🇮🇩
        </p>
      </div>
    </section>
  );
};

export default SectionHero;
