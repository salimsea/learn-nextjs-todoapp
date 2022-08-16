import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import {
  LogoCi,
  LogoCsharp,
  LogoHtml5,
  LogoJquery,
  LogoReact,
  ProjectDummy1,
  ProjectDummy2,
  ProjectDummy8,
  SertifikatDicoding,
  SertifikatGoogleAnalisAkademi,
  SertifikatGoogleAnalisBeginner,
  SertifikatGoogleDigitalGarage,
  SertifikatPinjul,
  SertifikatEBsiNetwork,
  UserProfileDummy,
  ProjectDummy14,
} from "assets";
import Image from "next/image";
import Slider from "react-slick";

const SectionSkill = ({ styles }) => {
  return (
    <section className={styles["skill"]}>
      <div className="container">
        <h3 data-aos="fade-right">Skills</h3>
        <div className="mt-5">
          <Slider
            slidesPerRow={5}
            responsive={[
              {
                breakpoint: 801,
                settings: {
                  slidesPerRow: 2,
                },
              },
            ]}
          >
            <div>
              <div className={styles["card-skill"]} data-aos="fade-up">
                <Image
                  src={LogoHtml5}
                  width={100}
                  height={100}
                  className={`${styles["img-fluid"]}`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-skill"]} data-aos="fade-up">
                <Image
                  src={LogoJquery}
                  width={100}
                  height={100}
                  className={`${styles["img-fluid"]}`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-skill"]} data-aos="fade-up">
                <Image
                  src={LogoCsharp}
                  width={100}
                  height={100}
                  className={`${styles["img-fluid"]}`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-skill"]} data-aos="fade-up">
                <Image
                  src={LogoReact}
                  width={100}
                  height={100}
                  className={`${styles["img-fluid"]}`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-skill"]} data-aos="fade-up">
                <Image
                  src={LogoCi}
                  width={100}
                  height={100}
                  className={`${styles["img-fluid"]}`}
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SectionSkill;
