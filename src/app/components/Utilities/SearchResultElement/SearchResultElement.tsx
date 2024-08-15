"use client";
import Resources from "@/app/resources/resources";
import styles from "./SearchResultElement.module.css";
import services from "@/app/services/services";
import { Carousel } from "antd";
export default function SearchResultElement(
  id: any,
  brand_name: any,
  product_title: any,
  price: any,
  ratings: any,
  noOfReviews: any,
  image: any,
  description: any,
  access_token: any,
  setShowDetails: any,
  priceAvailaible: any,
  inWishList: any,
  additional_images: any,
  addThisIndex: any,
  elementsInWishList: any,
  index: any,
  query: any,
  removeThisIndex: any,
  product_id: any,
  currency: any
) {
  let images = additional_images? [image]: [image];
  return (
    <div className={`${styles.searchResultElement__wrapper}`}>
      <img
        className={`${styles.searchResultElement__likeButton}`}
        src={
          !elementsInWishList.has(index)
            ? Resources.LikeIcon.src
            : Resources.LikedIcon.src
        }
        onClick={() => {
          let temp = null;
          // console.log(id)
          if (!elementsInWishList.has(index)) {
            let netId = id;
            if (query == "wishlist") {
              netId = product_id;
            }
            services.addToWishList(netId, access_token);
            temp = index;
            addThisIndex(temp);
          } else {
            let netId = id;
            if (query == "wishlist") {
              netId = product_id;
            }
            services.removeFromWishlist(netId, access_token);
            removeThisIndex(index);
          }
        }}
      ></img>
      <div
        className={`${styles.searchResultElement}`}
        onClick={() => setShowDetails(true)}
      >
        <Carousel dots={false} draggable infinite centerPadding="">
          {images.map((imgSrc: any, key: number) => {
            return (
              <div
                key={key}
                className={`${styles.searchResultElement__imageFlex}`}
              >
                <img
                  src={imgSrc}
                  className={`${styles.searchResultElement__image}`}
                ></img>
              </div>
            );
          })}
        </Carousel>
        <div className={`${styles.searchResultElement__content}`}>
          <div>
            <div className={`${styles.searchResultElement__brandname} cabin`}>
              {brand_name}
            </div>
            <div className={`${styles.searchResultElement__productTitle}`}>
              {product_title}
            </div>
          </div>
          <div className={`${styles.searchResultElement__price} cabin`}>
            {price
              ? currency + " " + price
              : "Visit website for price"}
          </div>
        </div>
      </div>
    </div>
  );
}
