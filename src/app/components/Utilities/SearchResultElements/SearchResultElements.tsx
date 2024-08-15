"use client"
import { useEffect } from "react"
import Utilities from "../Utilities"
import styles from './SearchResultElements.module.css'
import services from "@/app/services/services"
export default function SearchResultElements(results: any, setShowDetails: any, setProductDetails: any, access_token: any, addThisIndex: any, elementsInWishList: any, query: any, removeThisIndex: any) {
    window.scrollTo(0,0)
    let response: JSX.Element[] = []
    let keys = results ? Object.keys(results) : []
    //console.log(results['message'])
    if (results['message'] == "No more relevant products") {
        response = [<div>Looks like we have no relevant products, hang on to us soon we will be adding more products</div>]
    } else {
        for (let result of keys) {
            let product = results[result]
            // console.log(product)
            response.push(
                <div
                    className={styles.productWrapper}
                    onClick={() => {
                        services.clicked(access_token, product["id"])
                        setProductDetails(product)
                    }

                    } key={result}
                >
                    {product != null ? Utilities.SearchResultElement(product["id"], product["brand"], product["product_title"], product["price"], 0, 0, product["image"], product["description"], access_token, setShowDetails, product["price_available"], product["wishlist_flag"], product["additional_images"], addThisIndex, elementsInWishList, result, query, removeThisIndex, product["product_id"], product['currency']) : <></>}
                </div>
            )

        }
    }
    return <div className={`${styles.searchresultelements}`}>{response}</div>
}