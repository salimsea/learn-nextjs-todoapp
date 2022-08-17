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

const SectionCertificate = ({ styles }) => {
  return (
    <section className={styles["certificate"]}>
      <div className="container">
        <h3 data-aos="fade-right">Certificates</h3>
        <div className="mt-5">
          <Slider
            slidesPerRow={3}
            autoplay={false}
            infinite={true}
            speed={500}
            responsive={[
              {
                breakpoint: 801,
                settings: {
                  slidesPerRow: 1,
                },
              },
            ]}
          >
            <div>
              <div className={styles["card-certificate"]} data-aos="fade-up">
                <Image
                  src={SertifikatPinjul}
                  width={400}
                  height={300}
                  className={`${styles["img-fluid"]} py-3`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-certificate"]} data-aos="fade-up">
                <Image
                  src={SertifikatDicoding}
                  width={400}
                  height={300}
                  className={`${styles["img-fluid"]} py-3`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-certificate"]} data-aos="fade-up">
                <Image
                  src={SertifikatGoogleAnalisAkademi}
                  width={400}
                  height={300}
                  className={`${styles["img-fluid"]} py-3`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-certificate"]} data-aos="fade-up">
                <Image
                  src={SertifikatGoogleAnalisBeginner}
                  width={400}
                  height={300}
                  className={`${styles["img-fluid"]} py-3`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-certificate"]}>
                <Image
                  src={SertifikatGoogleDigitalGarage}
                  width={400}
                  height={300}
                  className={`${styles["img-fluid"]} py-3`}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className={styles["card-certificate"]}>
                <Image
                  src={SertifikatEBsiNetwork}
                  width={400}
                  height={300}
                  className={`${styles["img-fluid"]} py-3`}
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

export default SectionCertificate;
