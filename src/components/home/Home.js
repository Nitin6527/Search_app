import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { data } from "../constants";
import Image1 from "../../assets/images/image1.jpg";
import "./home.css";

const Home = () => {
  const [content, setContent] = useState([]);
  const search = useSelector((state) => state?.commonReducer?.search);

  useEffect(() => {
    if (!search) {
      return setContent([]);
    }
    let newArray = data
      ?.filter((item) =>
        item?.body.toLowerCase().includes(search.toLowerCase())
      )
      .map((item) => {
        let newbody = item.body.replace(
          new RegExp(search, "gi"),
          (match) => `<mark>${match}</mark>`
        );
        return newbody;
      });
    return setContent(search ? newArray : []);
  }, [search]);

  return (
    <Layout>
      <div className="coverImage">
        <div className="cover_content">
          <h1>BlockChain</h1>
          <p>Decentralize the web.</p>
        </div>
      </div>
      <section className="section_one">
        <div className="content">
          <div>
            {content?.length
              ? content.map((item, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))
              : data.map((item, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                ))}
          </div>
        </div>
        <div className="">
          <img className="image1" src={Image1} alt="image1" />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
