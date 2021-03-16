import algoliasearch from "algoliasearch/lite";
import React, { useMemo } from "react";
import {
  InstantSearch,
  Hits,
  SearchBox,
  // Pagination,
  Configure,
} from "react-instantsearch-dom";

import { Hit } from "./components/Hit";
import "./styles.scss";

const appId = process.env.GATSBY_ALGOLIA_APP_ID;
const searchKey = process.env.GATSBY_ALGOLIA_SEARCH_KEY;
const indexName = process.env.ALGOLIA_INDEX_NAME;

function Search() {
  const searchClient = useMemo(() => algoliasearch(appId, searchKey), []);
  const perPage = 8;

  return (
    <div className="ais-InstantSearch">
      <h1>Search Algolia</h1>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <div>
          <Configure hitsPerPage={perPage} />
          <SearchBox />
          <Hits hitComponent={Hit} />
          {/* <Pagination /> */}
        </div>
      </InstantSearch>
    </div>
  );
}

export default Search;
