import React, { useEffect, useState } from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import millify from 'millify';
import {Cryptocurrencies,News} from "../components";


import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;
const Homepage = () => {
  const [resData, setresData] = useState("");

  const { data, isFetching } = useGetCryptosQuery(10);
  useEffect(() => {
    if (data !== undefined) {
      setresData(data);
      console.log(data)
    }
  }, [isFetching]);

  let globalStats;
  if (resData !== undefined) {
    globalStats = resData.data && resData.data.stats;
  }
 
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stacks
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={globalStats && millify(globalStats.total)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={globalStats && millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={globalStats && millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={globalStats && millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={globalStats && millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptocurriences in the world</Title>
        <Title level={3} className="show-more"> <Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crpyto News</Title>
        <Title level={3} className="show-more"> <Link to="/news">Show More</Link></Title>
      </div>
      <News/>
    </>
  );
};

export default Homepage;
