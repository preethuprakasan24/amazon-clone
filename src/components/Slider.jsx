import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CardItem from "./CardItem";
import "./Slider.css";

function Slider() {
  const cardItems = [
    {
      title: "Gaming accessories",
      items: [
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
          label: "Headsets",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
          label: "Keyboards",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
          label: "Mouse",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
          label: "Chair",
        },
      ],
    },
    {
      title: "Shop deals in fashion",
      items: [
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg",
          label: "jeans @ $50",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg",
          label: "Tops @ $25",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg",
          label: "Dress @ $30",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg",
          label: "Shoes @ $50",
        },
      ],
    },
    {
      title: "Refresh your space",
      items: [
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg",
          label: "Dining",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg",
          label: "Home",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg",
          label: "Kitchen",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg",
          label: "Beauty",
        },
      ],
    },
    {
      title: "Fashion trends you like",
      items: [
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg",
          label: "Dresses",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg",
          label: "Knits",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg",
          label: "Jackets",
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg",
          label: "Jewelery",
        },
      ],
    },
  ];

  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Prime24/3000x1200_industry_V1._CB570152530_.jpg"
          alt="First slide"
          className="d-block w-100"
        />
        <div className="d-flex justify-content-center carousel-card-container ms-2 me-2">
          {cardItems.map((cardItem, index) => (
            <CardItem
              key={index}
              title={cardItem.title}
              items={cardItem.items}
            />
          ))}
        </div>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
          alt="Second slide"
          className="d-block w-100"
        />
        <div className="d-flex justify-content-center carousel-card-container">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg"
          alt="Third slide"
          className="d-block w-100"
        />
        <div className="d-flex justify-content-center carousel-card-container">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;
