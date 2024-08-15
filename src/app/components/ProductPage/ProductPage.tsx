"use client";
import Resources from "@/app/resources/resources";
import styles from "./ProductPage.module.css";
import Link from "next/link";
import services from "@/app/services/services";
import { access } from "fs";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Carousel } from "antd";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

export default function ProductPage(
  query: string,
  image: any,
  name: String,
  price: any,
  url: any,
  setShowDetails: any,
  id: any,
  access_token: any,
  showDetails: any,
  description: any,
  brand: any,
  priceAvailable: any,
  additionalDesc: any,
  additional_images: any,
  currency: any
) {
  //console.log(additional_images)
  let images: any[] = [];
  images = additional_images ? [image, ...additional_images] : [image];
  return (
    <motion.div
      animate={{
        y: showDetails ? -608 : 0,
      }}
      transition={{
        delay: 1,
      }}
    >
      <div
        style={{
          display: showDetails ? "inherit" : "none",
        }}
      >
        <div className={`${styles.productPage}`}>
          <div className={`${styles.productPage__upper}`}>
            <img
              className={`${styles.header__backArrow}`}
              src={Resources.backArrow.src}
              onClick={() => {
                setShowDetails(false);
              }}
            ></img>
            <Carousel draggable autoplay dots={true}>
              {images.map((image_url: any, key: number) => {
                return (
                  <div
                    key={key}
                    className={`${styles.productPage__productImageFlex}`}
                  >
                    <img
                      className={`${styles.productPage__productImages}`}
                      src={image_url}
                    ></img>
                  </div>
                );
              })}
            </Carousel>
            <div className={`${styles.productPage__productDetails}`}>
              <div
                className={`${styles.productDetail__productBrand} cabin fontWeight600`}
              >
                {brand}
              </div>
              <div
                className={`${styles.productDetail__productName} cabin fontWeight600`}
              >
                {name}
              </div>
              <div className={`${styles.productDetail__productPrice} cabin`}>
                {price != null
                  ? currency + " " + price
                  : "Visit website for price"}
              </div>
              <div className={`${styles.productDetail__desc} cabin`}>
                {description}
              </div>
              <div className={`${styles.productDetail__desc} cabin`}>
                {additionalDesc}
              </div>
            </div>
          </div>
          <div className={`${styles.productPage__footer}`}>
            <Link href={url ? url : ""} target="_blank">
              <div
                className={`${styles.footer__viewProductButton} blackButton`}
                onClick={() => {
                  services.redirect(access_token, id);
                }}
              >
                View Product Page
              </div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
