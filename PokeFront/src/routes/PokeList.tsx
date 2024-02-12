import PokeCard from "../components/PokeCard";
import { Link, useSearchParams } from "react-router-dom";
import CardPlaceHolder from "../components/CardPlaceHolder";
import Banner from "../components/Banner";
import ItemsPerPageSelector from "../components/ItemsPerPageSelector";
import "../css/pagination.css";

import { useGetPokemons } from "../hooks";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

function PokeList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") || 1);
  const [itemsPerPage, setItemsPerPage] = useState(
    searchParams.get("items_per_page") || 16
  );

  const { data, isLoading, refetch } = useGetPokemons(page, itemsPerPage);

  // Effect to refetch data when page or itemsPerPage changes
  useEffect(() => {
    // Update URL with current page and itemsPerPage
    setSearchParams(`?page=${page}&items_per_page=${itemsPerPage}`);
    refetch();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, itemsPerPage]);

  //Event Handlers


  function HandlePageChange(event: { selected: number }): void {
    setPage(event.selected + 1);
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
  };

  if (isLoading) {
    return (
      <>
        <div className="container text-center">
          <div style={{ marginBottom: "50px" }}>
            <Banner />
            <ItemsPerPageSelector
              onItemsPerPageChange={handleItemsPerPageChange}
            />
          </div>
          <CardPlaceHolder item={itemsPerPage} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container text-center">
        <div style={{ marginBottom: "50px" }}>
          <Banner />
          <ItemsPerPageSelector
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
        <div className="row ">
          {data?.pokemons.map((item, index) => (
            <div
              className="col"
              key={index}
            >
              <Link to={`/pokemon/${item.id}`}>{<PokeCard Pokemon={item} />}</Link>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <ReactPaginate
            containerClassName={
              "pagination pagination-lg justify-content-center"
            }
            pageClassName={"page-item"}
            activeClassName={"page-item active"}
            onPageChange={HandlePageChange}
            pageCount={data?.numPages!}
            breakLabel="..."
            previousLabel={
              <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                <AiFillLeftCircle />
              </IconContext.Provider>
            }
            nextLabel={
              <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                <AiFillRightCircle />
              </IconContext.Provider>
            }
          />
        </div>
      </div>
    </>
  );
}
export default PokeList;
