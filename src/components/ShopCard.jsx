// import React from "react";
// import CardItem from "./CardItem";
// import SingleImageCard from "./SingleImageCard";

// function ShopCard() {
//   const cardItems = [
//     {
//       title: "Shop deals in fashion",
//       items: [
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg",
//           label: "jeans @ $50",
//         },
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg",
//           label: "Tops @ $25",
//         },
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg",
//           label: "Dress @ $30",
//         },
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg",
//           label: "Shoes @ $50",
//         },
//       ],
//     },

//     {
//       title: "Fashion trends you like",
//       items: [
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_2_x1._SY116_CB595261253_.jpg",
//           label: "Dresses",
//         },
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_3_x1._SY116_CB595261253_.jpg",
//           label: "Knits",
//         },
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x1._SY116_CB595261253_.jpg",
//           label: "Jackets",
//         },
//         {
//           img: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x1._SY116_CB595261253_.jpg",
//           label: "Jewelery",
//         },
//       ],
//     },
//   ];
//   const singleImage = [
//     {
//       title: "Toys under $25",
//       img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
//     },
//     {
//       title: "Beauty Steals under $25",
//       img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg",
//     },
//   ];
//   return (
//     <>
//       <div className="row">
//         <div className="col-md-3">
//           {cardItems.map((cardItem, index) => (
//             <CardItem
//               key={index}
//               title={cardItem.title}
//               items={cardItem.items}
//             />
//           ))}
//         </div>
//         <div className="col-md-3">
//           {singleImage.map((cardItem,index)=>(
//             <SingleImageCard
//             key={index}
//             title={cardItem.title}
//             items={cardItem.items}/>
//           ))}
//         </div>
//         <div className="col-md-3">
//         {cardItems.map((cardItem, index) => (
//             <CardItem
//               key={index}
//               title={cardItem.title}
//               items={cardItem.items}
//             />
//           ))}
//         </div>
//         <div className="col-md-3">
//         {singleImage.map((cardItem,index)=>(
//             <SingleImageCard
//             key={index}
//             title={cardItem.title}
//             items={cardItem.items}/>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ShopCard;

import React from "react";
import CardItem from "./CardItem";
import SingleImageCard from "./SingleImageCard";

function ShopCard() {
  const cardItems = [
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

  const singleImage = [
    {
      title: "Toys under $25",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg",
    },
    {
      title: "Beauty Steals under $25",
      img: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg",
    },
  ];

  return (
    <>
      <div className="row mt-4">
        <div className="col-md-3">
          {cardItems.map((cardItem, index) => (
            <CardItem className="mt-3"
              key={index}
              title={cardItem.title}
              items={cardItem.items}
            />
          ))}
        </div>
        <div className="col-md-3">
          {singleImage.map((cardItem, index) => (
            <SingleImageCard
              key={index}
              title={cardItem.title}
              items={[cardItem]} 
            />
          ))}
        </div>
        <div className="col-md-3">
          {cardItems.map((cardItem, index) => (
            <CardItem
              key={index}
              title={cardItem.title}
              items={cardItem.items}
            />
          ))}
        </div>
        <div className="col-md-3">
          {singleImage.map((cardItem, index) => (
            <SingleImageCard
              key={index}
              title={cardItem.title}
              items={[cardItem]} 
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopCard;
