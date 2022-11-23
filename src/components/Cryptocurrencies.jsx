import React, {useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = () => {
  const [resData, setresData] = useState("");

  const { data, isFetching } = useGetCryptosQuery(10);
  useEffect(() => {
    if (data !== undefined) {
      setresData(data);
      console.log(data)
    }
  }, [isFetching]);
  
  let cryptos;
  if (resData !== undefined) {
    cryptos = resData.data && resData.data.coins;
    console.log(cryptos);
  }
  console.log(cryptos);
  if (isFetching) return <Loader />;
  if (cryptos !== undefined)
  return (
    <>
      <Row gutters={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link to={'/crypto/${currency.id}'}>
              <Card 
                title={'${currenty.rank}, ${currency.name}'}
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>MarketCap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {millify(currency.change)}</p>
                  </Card>
            </Link>

          </Col>
          
        ))}
      </Row>
    </>
  )
}

export default Cryptocurrencies