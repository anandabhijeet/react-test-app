import React, { useState, useEffect } from "react";
import BannerCard from "../components/BannerCard";
import BodyCardList from "../components/BodyCardList";
import Navbar from "../components/Navbar";
import axios from "axios";

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [bannerData, setBannerData] = useState({});
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
      );
      let newData = res.data.results;
      setItems(newData);
      console.log("data-item", items[0]);
      setBannerData(newData[0]);
      console.log("data", newData[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar />
      <BannerCard bannerData={bannerData} />
      <BodyCardList dataList={items} setBannerData={setBannerData} />
    </div>
  );
};

export default HomePage;
