import { useState } from "react";
import CountryTable from "../components/CountryTable/CountryTable";
import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";
export default function Home({ countries }) {
  const [keyword, setKeyWord] = useState("");

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyWord(e.target.value.toLowerCase());
  };
  return (

      <Layout>
        <div className={styles.inputContainer}>
          <div className={styles.input}>
            <SearchInput
              placeholder="Filter By Name, Region or Subregion"
              onChange={onInputChange}
          />
          </div>
        </div>
        <CountryTable countries={filteredCountries} />
      </Layout>

  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: {
      countries,
    },
  };
};
