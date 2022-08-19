import React, { useEffect } from "react";
import Image from "next/image";
import styles from "styles/Blog.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";
import { getDataBlog } from "redux/action/blogAction";

const SectionEntry = ({ slug }) => {
  const { dataBlog, dataBlogs } = useSelector((state) => state.blog);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getDataBlog(slug));
  // }, [dispatch]);
  return (
    <section className={styles["blog"]}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className={styles["card-detail-content"]}>
              {!dataBlog.error && (
                <>
                  <center>
                    <h2>{dataBlog.items.item?.title}</h2>
                    <p>
                      Published : {dataBlog.items.item?.created} <br />
                      {dataBlog.items.item?.created !==
                        dataBlog.items.item?.updated && (
                        <>
                          <IoTimeOutline
                            size={15}
                            style={{ marginTop: -3, marginRight: 5 }}
                          />
                          Updated : {dataBlog.items.item?.updated}
                        </>
                      )}
                    </p>
                  </center>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: dataBlog.items.item?.postContent,
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className={styles["card-recent-post"]}>
              <h3>Recent Post</h3>
              <div className="mt-3">
                {!dataBlog.error &&
                  dataBlog.items?.recentPost?.map((v, i) => {
                    return (
                      i < 5 && (
                        <div key={i} className={`row ${styles["item-card"]}`}>
                          <div className="col align-self-center">
                            <Image
                              width={400}
                              height={250}
                              src={v.thumbnail}
                              className={styles["img-recentpost"]}
                              alt=""
                            />
                          </div>
                          <div className="col">
                            <small>{v.updated}</small>
                            <Link href={`${v.slug}`}>
                              <h6>{v.titleSmall}</h6>
                            </Link>
                            <p>{v.postContentSmall}</p>
                          </div>
                        </div>
                      )
                    );
                  })}
              </div>
            </div>
            <div className={styles["card-category-post"]}>
              <h3>Category</h3>
              <div className="mt-3">
                <ul>
                  {!dataBlogs.error &&
                    dataBlogs.items?.category?.map((v, i) => {
                      return (
                        <li key={i}>
                          <div className="bulet--small"></div>
                          {v}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionEntry;
