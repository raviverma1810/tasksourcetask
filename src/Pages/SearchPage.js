import React from "react";
import { Container } from "reactstrap";
import FilterSection from "../Components/FilterSection/FilterSection";
import SearchResultSection from "../Components/SearchResultSection/SearchResultSection";

export default function SearchPage() {
  return (
    <Container>
      <FilterSection />
      <SearchResultSection />
    </Container>
  );
}
