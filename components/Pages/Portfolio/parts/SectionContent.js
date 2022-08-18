import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import {
  LogoCi,
  LogoCsharp,
  LogoHtml5,
  LogoJquery,
  LogoReact,
  ProjectDummy1,
  ProjectDummy10,
  ProjectDummy11,
  ProjectDummy12,
  ProjectDummy13,
  ProjectDummy14,
  ProjectDummy2,
  ProjectDummy3,
  ProjectDummy4,
  ProjectDummy5,
  ProjectDummy7,
  ProjectDummy8,
  ProjectDummy9,
} from "assets";
import Image from "next/image";
import { FcAndroidOs, FcGlobe } from "react-icons/fc";
import styles from "styles/Portfolio.module.scss";

const jsonProduct = [
  {
    image: ProjectDummy14,
    type: "Mobile Apps",
    title: "Infrastruktur Pemerintahan - BNPP",
    description:
      "Applications make it easier to see Government Sarpras Data in Border Areas, you can see it on playstore, visit now: https://play.google.com/store/apps/details?id=com.bnppapp",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy1,
    type: "Mobile Apps",
    title: "AT SMILE",
    description:
      "This is an educational application to view subjects, online learning, mutabaah, and online bill payment, you can see it on playstore, visit now: https://play.google.com/store/apps/details?id=com.sekolahattaufiq.siswa",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy2,
    type: "Web Apps",
    title: "PRODUCTLY",
    description:
      "This is a landing page application, the result of my learning in doing slicing pages from figma to the web, visit now: https://seal-project1.netlify.app/",
    tech: [LogoHtml5, LogoJquery],
  },
  {
    image: ProjectDummy3,
    type: "Mobile Apps",
    title: "MAPS DIRECTION",
    description:
      "This is a saluler application to find distances with a map, this is also my learning application, you can see it here: https://play.google.com/store/apps/details?id=com.maps.direction",
    tech: [LogoReact],
  },
  {
    image: ProjectDummy4,
    type: "Web Apps",
    title: "ONE DATA MUBA",
    description:
      "This is a landing page application, the result of my learning in doing slicing pages from figma to the web, visit now: https://seal-project2.netlify.app/",
    tech: [LogoHtml5, LogoJquery],
  },
  {
    image: ProjectDummy5,
    type: "Web Apps",
    title: "REDESIGN NETFLIX",
    description:
      "This is a landing page application, the result of my learning in doing slicing pages from figma to the web, visit now: https://seal-project3.netlify.app/",
    tech: [LogoHtml5, LogoJquery],
  },
  {
    image: ProjectDummy7,
    type: "Web Apps",
    title: "SCHOOL ATTAUFIQ",
    description:
      "This is a school website application to provide information to visitors, you can see here https://sekolahattaufiq.id/",
    tech: [LogoHtml5, LogoJquery, LogoCsharp],
  },
  {
    image: ProjectDummy8,
    type: "Web Apps",
    title: "ONE DATA SIGI",
    description:
      "This is a website application for one sigi district data, collects all information in the sigi area, and is integrated into one indonesian data, you can see it here: http://sigione.swg.co.id/",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy9,
    type: "Web Apps",
    title: "DROPSHIPEDIA WEB",
    description:
      "This is a website application to sell goods by dropship, you can visit it here: https://dropshipedia.id",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy10,
    type: "Mobile Apps",
    title: "DROPSHIPEDIA MOBILE",
    description:
      "This is a mobile application for selling goods by dropship, you can visit it here: not available",
    tech: [LogoReact, LogoCsharp],
  },
  {
    image: ProjectDummy11,
    type: "Web Apps",
    title: "CHATINGAN",
    description:
      "This is a learning application using websocket (socket.io) and php, you can visit my project here: https://github.com/salimsea/chatingan-php-socket_io",
    tech: [LogoCi, LogoJquery],
  },
  {
    image: ProjectDummy12,
    type: "Mobile Apps",
    title: "QURANQU",
    description:
      "This is a mobile app for reading quran, this app is made using php and react native, you can see my project here : https://github.com/salimsea/quran-qu",
    tech: [LogoReact, LogoCi],
  },
  {
    image: ProjectDummy13,
    type: "Web Apps",
    title: "NGAJISKUY",
    description:
      "This is a landing page application, the result of my learning in slicing pages from figma to the web. the design was made by ASRIL MOCHAMMAD, see the figma design here: https://dribbble.com/shots/17577547-Belajar-Ngaji-Landing-Page-Freebies and if you want to see the web demo visit here: https://seal-project5.netlify.app/",
    tech: [LogoHtml5, LogoJquery],
  },
];

const SectionContent = () => {
  const [dataModal, setDataModal] = useState(null);
  const [modal, setModal] = useState(false);
  const showModal = () => setModal(!modal);
  const modalDetail = (v) => {
    setDataModal(v);
    showModal();
  };
  return (
    <>
      <section className={styles["project"]}>
        <div className="container">
          <div className="row">
            {jsonProduct.map((v, i) => {
              return (
                <ItemProduct
                  key={i}
                  image={v.image}
                  type={v.type}
                  title={v.title}
                  onModal={() => modalDetail(v)}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Modal centered size="xl" isOpen={modal} toggle={showModal}>
        <ModalBody className={styles["preview"]}>
          <div className={`row ${styles["card-detail"]}`}>
            <div className="col-md-7 d-flex align-items-center justify-content-center">
              <div className={styles["img-card"]}>
                <Image
                  width={500}
                  height={300}
                  src={dataModal?.image}
                  className={styles["img-apps"]}
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="py-3">
                <span className={styles["text-platform"]}>
                  {dataModal?.type === "Mobile Apps" ? (
                    <FcAndroidOs
                      size={20}
                      style={{ marginTop: -5, marginRight: 5 }}
                    />
                  ) : (
                    <FcGlobe
                      size={20}
                      style={{ marginTop: -5, marginRight: 5 }}
                    />
                  )}
                  {dataModal?.type}
                </span>
                <h1>{dataModal?.title}</h1>
                <span className={styles["text-stack"]}>Use : </span>
                <div className="mt-2">
                  {dataModal?.tech.map((v, i) => {
                    return (
                      <Image
                        key={i}
                        width={60}
                        height={60}
                        src={v}
                        className={styles["img-stack"]}
                      />
                    );
                  })}
                </div>
                <div className="mt-3">
                  <p>{dataModal?.description}</p>
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button
                    type="button"
                    className="btn btn-costum-primary-outline mx-1 px-4"
                    onClick={() =>
                      (window.location =
                        "https://api.whatsapp.com/send/?phone=6282112235774&text=Assalamualaikum+Warahmatullahi+Wabarakatuh&app_absent=0")
                    }
                  >
                    CONTACT ME
                  </button>
                  <button
                    type="button"
                    className="btn btn-costum-secondary mx-1 px-4"
                    onClick={showModal}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

const ItemProduct = ({ image, type, title, onModal }) => {
  return (
    <div className="col-md-4" data-aos="flip-left">
      <div className={styles["card-project"]}>
        <Image
          width={"430"}
          height={230}
          src={image}
          className={styles["img-project"]}
          alt=""
        />
        <div className={`row ${styles["bg-primary"]} py-3 mx-0 px-2`}>
          <div className="col-md-8 text-left">
            <span>
              {type === "Mobile Apps" ? (
                <FcAndroidOs
                  size={15}
                  style={{ marginTop: -5, marginRight: 5 }}
                />
              ) : (
                <FcGlobe size={15} style={{ marginTop: -5, marginRight: 5 }} />
              )}
              {type}
            </span>
            <h3>{title}</h3>
          </div>
          <div className="col-md-4 align-self-center text-end">
            <button type="button" className="btn btn-primary" onClick={onModal}>
              DETAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
