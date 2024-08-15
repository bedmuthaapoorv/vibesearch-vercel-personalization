"use client";
import Utilities from "../Utilities/Utilities";
import styles from "./SearchResults.module.css";
import Components from "@/app/Components";
import { useEffect, useState } from "react";
import services from "@/app/services/services";
import { usePathname, useSearchParams } from "next/navigation";
import { Metadata } from "next";
import Lottie from "react-lottie";
import Resources from "@/app/resources/resources";
import RightMenu from "../RightMenu/RightMenu";
export const metadata: Metadata = {
  title: "VIBE search",
};

export default function SearchResults() {
  let [searchResults, setSearchResults] = useState<any>({});
  let [currentPage, setCurrentPage] = useState(1);
  let [userDetails, setUserDetails] = useState({});
  let [accessData, setAccessData] = useState<any>(null);
  let [openMenu, setOpenMenu] = useState<boolean>(false);
  let [showDetails, setShowDetails] = useState<boolean>(false);
  let [productDetails, setProductDetails] = useState<any>(false);
  let [dataFetched, setDatafetched] = useState<boolean>(false);
  let [noMoreResults, setNoMoreResults] = useState<boolean>(false)
  let [elementsInWishList, setElementsInWishList] = useState<any>(
    new Set<string>()
  );
  let [showNextPage, setShowNextPage] = useState<boolean>(false);
  let [secondQuery, setSecondQuery] = useState<any>("");
  let searchParams = useSearchParams();
  let [query, setQuery] = useState<any>("");
  const pathname = usePathname();
  
  let [openFilter, setOpenFilter] = useState(false);
  let [selectedBrands, setSelectedBrands] = useState(
    new Set()
  );
  let [scrollLock, setScrollLock] = useState(false);
  useEffect(() => {
    window.scroll(0, 0);
}, [pathname]);
  useEffect(() => {
    // setSearchResults({})
    // setCurrentPage(1)
    // console.log('first effect')
    services.getAccessToken(setAccessData).then((accessData) => {
      console.log(accessData);
      if (accessData && accessData["data"] && accessData["data"]["session"]) {
        // Make sure accessData is not null before calling vibeIt
        setQuery(searchParams.get("query"));
        if (query == "wishlist") {
          services
            .getWishlist(
              accessData["data"]["session"]["access_token"],
              setSearchResults
            )
            .then(() => {
              setDatafetched(true);
            });
        } else {
          let input1: any = "";
          let input2: any = "";
          if (query == "emptyEntry") {
            if (secondQuery) {
              input1 = secondQuery;
            }
          } else {
            input1 = query;
          }
          services
            .vibeIt(
              input1,
              input2,
              `${currentPage}`,
              "20",
              setSearchResults,
              accessData["data"]["session"]["access_token"],
              searchResults,
              Array.from(selectedBrands),
              setNoMoreResults
            )
            .then(() => {
              if (!secondQuery) {
                localStorage ? localStorage.removeItem("image-file") : "";
              }
              setDatafetched(true);
            });
        }
      }
    });
    localStorage ? setSecondQuery(localStorage.getItem("image-file")) : "";
    setTimeout(() => {
      services.getUserDetails(setUserDetails);
    }, 1000);
  }, []);
  useEffect(() => {
    setSearchResults({});
    setCurrentPage(1);
  }, [selectedBrands]);

  useEffect(() => {
    if (accessData && accessData["data"] && accessData["data"]["session"]) {
      // Make sure accessData is not null before calling vibeIt
      if (query == "wishlist") {
        services
          .getWishlist(
            accessData["data"]["session"]["access_token"],
            setSearchResults
          )
          .then(() => {
            setDatafetched(true);
          });
      } else {
        let input1: any = "";
        let input2: any = "";
        if (query == "emptyEntry") {
          if (secondQuery) {
            input1 = secondQuery;
          }
        } else {
          input1 = query;
        }
        services
          .vibeIt(
            input1,
            input2,
            `${currentPage}`,
            "20",
            setSearchResults,
            accessData["data"]["session"]["access_token"],
            searchResults,
            Array.from(selectedBrands),
            setNoMoreResults
          )
          .then(() => {
            if (!secondQuery) {
              localStorage ? localStorage.removeItem("image-file") : "";
            }
            setDatafetched(true);
          });
      }
    }
  }, [query, secondQuery, selectedBrands]); // This effect depends on temp, currentPage, and accessData.
  useEffect(() => {
    let keys = Object.keys(searchResults);
    let set = new Set([...elementsInWishList]);
    for (let key of keys) {
      let product = searchResults[key];
      product && product["wishlist_flag"] == 1 ? set.add(key) : "";
      query == "wishlist" ? set.add(key) : "";
    }
    setElementsInWishList(set);
  }, [dataFetched]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Resources.loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  function addThisIndex(index: any) {
    let set = new Set([...elementsInWishList]);
    index ? set.add(index) : "";
    setElementsInWishList(set);
  }
  function removeThisIndex(index: any) {
    let set = new Set([...elementsInWishList]);
    index ? set.delete(index) : "";
    setElementsInWishList(set);
  }
  function wishlistLoading() {
    let wishListQuotes = [
      "Start building your dream closet! Use VIBE Search to discover amazing products and add them to your wishlist.",
      "Wishlist is empty? Time to unleash your inner style hunter! Search for your perfect vibe and save your favorites.",
      "Ready to curate your dream wardrobe? Start searching for products and save them here for easy reference.",
      "Keep track of your desires! Add products to your wishlist for future purchases or sharing with friends.",
    ];
    return (
      <div
        className={`${styles.SearchResults__loading}`}
        suppressHydrationWarning
      >
        {wishListQuotes[Math.floor(Math.random() * wishListQuotes.length)]}
      </div>
    );
  }
  function loading() {
    let items = [
      "Unleashing your vibe! We're searching millions of products to find your perfect match.",
      "Think it, find it! Describe your style or upload a pic, and let VIBE do the magic.",
      "Designer dreams or high-street finds? VIBE curates from your favorite brands.",
      "Get ready to be amazed! We're hunting down the perfect pieces just for you.",
      "Hold onto your hats! Your ultimate style discovery is just moments away.",
      "Shhh... we're working our fashion magic! Get ready to refresh your wardrobe.",
    ];

    return (
      <div
        className={`${styles.SearchResults__loading}`}
        suppressHydrationWarning
      >
        <Lottie options={defaultOptions} height={200} width={200}></Lottie>
        {items[Math.floor(Math.random() * items.length)]}
      </div>
    );
  }
  async function addNewContent() {
    if (scrollLock) return;
    setScrollLock(true);
    setFetchingNewData(true);

    let input1: any = "";
    let input2: any = "";
    if (query == "emptyEntry") {
      if (secondQuery) {
        input1 = secondQuery;
      }
    } else {
      input1 = query;
    }
    await services
      .vibeIt(
        input1,
        input2,
        `${currentPage + 1}`,
        "20",
        setSearchResults,
        accessData["data"]["session"]["access_token"],
        searchResults,
        Array.from(selectedBrands),
        setNoMoreResults
      )
      .then(() => {
        if (!secondQuery) {
          localStorage ? localStorage.removeItem("image-file") : "";
        }
        setScrollLock(false);
        setCurrentPage(currentPage + 1);
      });
    setFetchingNewData(false);
  }
  let [fetchingNewData, setFetchingNewData] = useState<Boolean>(false);
  useEffect(() => {
    let keys = Object.keys(searchResults);
    let set = new Set([...elementsInWishList]);
    for (let key of keys) {
      let product = searchResults[key];
      product && product["wishlist_flag"] == 1 ? set.add(key) : "";
      query == "wishlist" ? set.add(key) : "";
    }
    setElementsInWishList(set);
  }, [searchResults]);
  return (
    <div className={`${styles.SearchResults__ParentContainer}`}>
      {Utilities.LeftMenu(openMenu, query, setOpenMenu)}
      <RightMenu
        openFilter={openFilter}
        setOpenFilter={setOpenFilter}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      ></RightMenu>
      <div
        className={`${styles.SearchResults__container}`}
        style={{
          zIndex: openMenu || showDetails || openFilter ? -1 : 0,
          opacity: openMenu || showDetails || openFilter ? 0.7 : 1,
        }}
      >
        <div
          className={`${styles.SearchResults}`}
          onClick={() => {
            if (openMenu) setOpenMenu(false);
          }}
        >
          {Utilities.HomeScreenHeader(
            setOpenMenu,
            userDetails,
            setShowDetails,
            false,
            setOpenFilter
          )}
          {
            <div className={`${styles.SearchResults__searchBox}`}>
              {Utilities.SearchBox(
                typeof query == "string" && query != "emptyEntry"
                  ? query
                  : "What are you looking for?",
                openMenu,
                query,
                setQuery,
                setCurrentPage,
                setSearchResults
              )}
            </div>
          }
          <div
            className={`${styles.SearchResults__wrapper}`}
            onScroll={(event) => {
              let obj: any = event.target;
              if (obj.scrollTop >= obj.scrollHeight - obj.offsetHeight - 10) {
                query != "wishlist" && !noMoreResults ? addNewContent() : "";
              }
            }}
          >
            {dataFetched &&
            accessData &&
            accessData["data"] &&
            accessData["data"]["session"] &&
            !searchResults["message"] ? (
              Utilities.SearchResultsElements(
                searchResults,
                setShowDetails,
                setProductDetails,
                accessData["data"]["session"]["access_token"],
                addThisIndex,
                elementsInWishList,
                query,
                removeThisIndex
              )
            ) : dataFetched && noMoreResults ? (
              <div className={`${styles.SearchResults__loading}`}>
                No more relevant products
              </div>
            ) : (
              loading()
            )}
            {dataFetched && searchResults.length == 0 ? (
              <div className={`${styles.SearchResults__loading}`}>
                {wishlistLoading()}
              </div>
            ) : (
              ""
            )}
            {fetchingNewData ? loading() : ""}
          </div>
        </div>
      </div>
      <div>
        {accessData && accessData["data"] && accessData["data"]["session"]
          ? Components.ProductPage(
              query ? query : "",
              productDetails["image"],
              productDetails["product_title"],
              productDetails["price"],
              productDetails["product_url"],
              setShowDetails,
              productDetails["id"],
              accessData["data"]["session"]["access_token"],
              showDetails,
              productDetails["description"],
              productDetails["brand"],
              productDetails["price_availaible"],
              productDetails["additional_description"],
              productDetails["additional_images"],
              productDetails["currency"]
            )
          : ""}
      </div>
    </div>
  );
}
