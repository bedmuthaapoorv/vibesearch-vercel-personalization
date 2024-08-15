"use client";
import Link from "next/link";
import styles from "./SearchBox.module.css";
import Resources from "@/app/resources/resources";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox(placeholder: string = "What are you looking for?", openMenu: any, query: any, setQuery: any=null, setPage:any=null, setSearchResults:any=null) {
  let [fileImg, setFile] = useState<any>(null);
  let [fileInputElement, setFileInput] = useState<any>(null);
  let [searchQuery, setSearchQuery] = useState<string>("");
  useEffect(() => {
    setFileInput(document.getElementById("searchBox__fileInput"));
  }, []);
  const router = useRouter();
  const handleSearch = () => {
    localStorage && searchQuery != "" ? localStorage.setItem("vibesearch-history", localStorage.getItem("vibesearch-history") + "," + searchQuery) : ""
    setQuery? setQuery(searchQuery) :''
    setPage? setPage(1):''
    setSearchResults? setSearchResults({}):''
    window.scrollTo(0,0)
    router.push(`/components/SearchResults?query=${searchQuery}`);
  };
  return (
    <>
      {
        query!='wishlist'?
        <div className={`${styles.searchBox}`}>
          <div className={`${styles.searchBox__leftContainer}`} style={{
            background: openMenu ? "rgba(255,255,255,.5)" : "#E7E7E7"
          }}>
            <Link
              onClick={() => {
                localStorage && searchQuery != "" ? localStorage.setItem("vibesearch-history", localStorage.getItem("vibesearch-history") + "," + searchQuery) : console.log("")
              }}
              href={"SearchResults?query=" + (searchQuery != "" ? searchQuery : "emptyEntry")}>
              <img
                className={`${styles.searchBox__go}`}
                src={Resources.sendButton.src}
              ></img>
            </Link>
            <input
              type="text"
              id="searchBox__search"
              placeholder={placeholder == "entryEmpty" ? "What are you looking for?" : placeholder}
              className={`${styles.searchBox__search} cabin`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              style={
                {
                  textOverflow:"ellipsis",
                  opacity: openMenu ? 0 : 1
                }
              }
            />
          </div>
          <div className={`${styles.searchBox__rightContainer}`} style={{
            opacity: openMenu ? 0.7 : 1
          }}>
            <input
              type="file"
              accept="image/*"
              className={`${styles.searchBox__fileInput}`}
              id="searchBox__fileInput"
              onChange={(event: any) => {
                const file = event.target.files[0];

                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event: any) => {
                    const base64String: any = event.target.result as string;
                    setFile(base64String)
                    //console.log(base64String);
                    let temp: any = base64String.split(";")
                    temp = temp[1].split(",")

                    // You can do whatever you want with the base64String here
                    localStorage.setItem("image-file", temp[1]);
                    router.push(`/components/SearchResults?imageSearch=${temp[1].slice(-5)}&query=emptyEntry`);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <img
              className={`${styles.searchBox__cameraImage}`}
              src={Resources.Camera.src}
              onClick={() => {
                fileInputElement
                  ? fileInputElement.click()
                  : ""
              }}
            ></img>
          </div>
        </div>
        :<></>
      }
    </>
  );
}

