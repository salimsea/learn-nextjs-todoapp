import SectionHero from "./parts/SectionHero";
import SectionDescription from "./parts/SectionDescription";
import SectionProject from "./parts/SectionProject";
import SectionCertificate from "./parts/SectionCertificate";
import SectionSkill from "./parts/SectionSkill";
import styles from "styles/Home.module.scss";

const ComponentHome = () => {
  return (
    <>
      {/* section hero */}
      <SectionHero styles={styles} />

      {/* section description */}
      <SectionDescription styles={styles} />

      {/* section project */}
      <SectionProject styles={styles} />

      {/* section certificate */}
      <SectionCertificate styles={styles} />

      {/* section skill */}
      <SectionSkill styles={styles} />
    </>
  );
};

export default ComponentHome;
