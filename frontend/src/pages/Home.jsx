import React, { useEffect, useState } from "react";
import hero from "../assets/hero.webp";
import sam from "../assets/sam.webp";
import erain from "../assets/erain.webp";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import c from "../c.js";
import Hero from "../components/Hero.jsx";
import BlogList from "../components/BlogList.jsx";
import Pagination from "../components/Pagination.jsx";
import Carousel from "../components/Carousel.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("ASC");
  const [limit, setLimit] = useState(4);
  const [search, setSearch] = useState("li");

  let carouselCounter = 0;

  function updateCard(data) {
    setBlogs(data.data.query);
    setPagination(data.data.pagination);
  }

  useEffect(() => {
    dispatch(
      request({
        method: "GET",
        url: `${c.baseUrl}/apis/pub/blog/posts?q=${search}&limit=${limit}&page=${page}&sort=${order}`,
        isLoader: true,
        // isOk: true,
        callback: updateCard,
      })
    );
  }, [page, order, limit, search]);

  const slides = [
    { src: hero, alt: "hero" },
    { src: sam, alt: "sam" },
    { src: erain, alt: "erain" },
  ];

  return (
    <main>
      {/* hero carousel */}
      <Hero
        subtitle={"Best site there is right here."}
        content={slides}
        isCarousel={true}
      />
      {/* hero img */}
      {/* <Hero
        subtitle={"Best site there is right here."}
        content={{ src: hero, alt: "hero" }}
        isCarousel={false}
      /> */}
      {/* carousel */}
      <section>
        <div className="s p1 c">
          <div className="g2">
            <div className="hm">
              <Carousel slides={slides} id={2} />
            </div>
            <div className="vf">
              <h2>Hactiv blog</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac congue libero. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Vestibulum eleifend
                nibh sit amet urna iaculis, quis tincidunt urna pretium.
                Praesent molestie arcu at mauris tincidunt ornare. Phasellus
                tincidunt auctor turpis, sit amet luctus tellus ultrices ut.
                Fusce lorem risus, tristique et est sed, laoreet elementum
                tortor. Vestibulum imperdiet leo sed est mattis lobortis.
                Integer fringilla sagittis gravida. Nunc diam neque, ultricies
                nec enim elementum, imperdiet dictum urna. Fusce ornare
                consectetur leo at elementum.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* carousel */}
      <section className="grey">
        <div className="s p1 c">
          <div className="g2">
            <div className="vf">
              <h2>Hactiv blog</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                ac congue libero. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Vestibulum eleifend
                nibh sit amet urna iaculis, quis tincidunt urna pretium.
                Praesent molestie arcu at mauris tincidunt ornare. Phasellus
                tincidunt auctor turpis, sit amet luctus tellus ultrices ut.
                Fusce lorem risus, tristique et est sed, laoreet elementum
                tortor. Vestibulum imperdiet leo sed est mattis lobortis.
                Integer fringilla sagittis gravida. Nunc diam neque, ultricies
                nec enim elementum, imperdiet dictum urna. Fusce ornare
                consectetur leo at elementum.
              </p>
            </div>
            <div className="hm">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* blog list */}
      <section className="c p1 vf s">
        <h2>Blog list</h2>
        {/* pagination */}
        <div className="hf wf">
          <Pagination
            currentPage={pagination.currentPage}
            totalPage={pagination.totalPage}
            setPage={setPage}
          />
          {/* order limit search */}
          <form className="mla hf alt">
            {/* order */}
            <label htmlFor="order" className="vf ng">
              Sort by
              <select
                id="order"
                name="order"
                onChange={(e) => {
                  setOrder(e.target.value);
                }}
              >
                <option value="ASC">Asc</option>
                <option value="DESC">Desc</option>
              </select>
            </label>
            {/* limit */}
            <label htmlFor="limit" className="vf ng">
              Show
              <select
                id="limit"
                name="limit"
                onChange={(e) => {
                  setLimit(e.target.value);
                }}
              >
                <option value="4">4 items</option>
                <option value="5">5 items</option>
                <option value="6">6 items</option>
                <option value="7">7 items</option>
                <option value="8">8 items</option>
                <option value="9">9 items</option>
                <option value="10">10 items</option>
                <option value="11">11 items</option>
                <option value="12">12 items</option>
              </select>
            </label>
            {/* search */}
            <label htmlFor="search">
              Search by title
              <input
                type="text"
                id="search"
                name="search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </label>
          </form>
        </div>
        {/* list */}
        <BlogList
          blogs={blogs}
          currentPage={pagination.currentPage}
          totalPage={pagination.totalPage}
          totalRows={pagination.totalRows}
        />
      </section>
    </main>
  );
}
