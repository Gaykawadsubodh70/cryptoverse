import React from "react";
import axios from "axios";
import {Row, Col, Card } from "antd";
import { useState, useEffect } from "react";


import moment from "moment";


const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

const News = ({ simplified }) => {
  const [Cnews, SetCNews] = useState("");
  
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "Cryptocurrency",
      count: `${simplified ? 5 : 12}`,
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "df180f2ce4mshd108070f8d01213p1522d5jsnd580ed6a5ab1",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };
  const fetchNews = () => {
    axios
      .request(options)
      .then(function(response) {
        SetCNews(response.data.value);
        console.log(response.data.value);
        console.log(typeof Cnews);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchNews();
  }, []);

  let Crytonews = Object.values(Cnews);
  return (
    <Row gutter={[24, 24]}>
        {Crytonews.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <h3 className="news-Title">{news.name}</h3>
                <img src={news.image.thumbnail.contentUrl} alt={demoImage} />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
               {/* <img className ="avatar"src={news.provider[0].image.thumbnail.contentUrl}/> */}
                  <p className="provider-name">{news.provider[0].name}</p>
                </div>
                <p>
                  {moment(news.datePublish)
                    .startOf("ss")
                    .fromNow()}
                </p>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
