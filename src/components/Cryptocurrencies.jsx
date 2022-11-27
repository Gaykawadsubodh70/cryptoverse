import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useState, useEffect } from "react";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [resData, setresData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    
    if (cryptoList !== undefined) {
      setresData(cryptoList.data.coins);

      const filterdata = cryptoList.data.coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setresData(filterdata);
    }
  }, [isFetching, searchTerm]);

  let cryptos = Object.values(resData);
  // console.log(typeof(cryptos))
  // Array.isArray(cryptos)?console.log('true'):console.log("false")
  //   console.log(cryptos)
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[30, 30]} className="crypto-card-conatiner">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.rank}.${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: {millify(currency.price)} $</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Change: {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
