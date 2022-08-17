import SectionContent from "./parts/SectionContent";
import styles from "styles/Portfolio.module.scss";

const ComponentPortfolio = () => {
  return (
    <>
      <section className={styles["hero"]}>
        <div className="container text-center" data-aos="zoom-in">
          <h1>Portfolio</h1>
          <p className="mt-3">
            This is a portfolio page to display the results of the products that
            I have made
          </p>
        </div>
      </section>
      <SectionContent />
    </>
  );
};

export default ComponentPortfolio;
