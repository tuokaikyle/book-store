import { BookLists } from "../features/booklists/BookLists";
import * as React from "react";
import { Banner } from "../components/Banner";
import { showSearchResults } from "../features/searchBar/searchBarSlice";
import { CarouselAds } from "../components/CarouselAds";
import { Reviews } from "../components/Reviews";
import { useEffect, useState } from "react";

export const Home = (props) => {
  const { search, bookLists, categoryLists, dispatch } = props;
  const handleBlur = () => {
    dispatch(showSearchResults([]));
  };

  // const [data, setData] = useState(null);

  // useEffect(async () => {
  //   const res = await fetch("/api");
  //   console.log(res);
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  // console.log(data);

  return (
    <div onClick={handleBlur}>
      <Banner search={search} bookLists={bookLists} dispatch={dispatch} />
      <BookLists bookLists={bookLists} dispatch={dispatch} />
      {/* <p>{data}</p> */}
      <Reviews />
      <CarouselAds />
    </div>
  );
};
