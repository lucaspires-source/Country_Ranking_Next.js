import Layout from "../components/Layout/Layout";
import SearchInput from "../components/SearchInput/SearchInput";

export default function Home({countries}) {
  console.log(countries)
  return (
    <>
      <Layout>
        <div>Found {countries.length} Countries </div>
        
      </Layout>

      <SearchInput/>
    </>  
  )
}

export const getStaticProps = async () =>{
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return{
    props:{
        countries,
    },
  };
};