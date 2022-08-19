import SectionCategory from "./parts/SectionCategory";
import SectionEntry from "./parts/SectionEntry";
import SectionHero from "./parts/SectionHero";

const ComponentBlogDetail = ({ slug }) => {
  return (
    <>
      <SectionHero />
      <SectionEntry slug={slug} />
      {/* <SectionCategory /> */}
    </>
  );
};

export default ComponentBlogDetail;
