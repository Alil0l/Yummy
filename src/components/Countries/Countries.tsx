import { useContext } from "react";
import { AppContext } from "../../AppContext";
import Spinner from "../Helpers/Spinner/Spinner";
import "./Countries.css";

export default function Countries() {
  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext must be used within an AppProvider");
  }
  const { data } = appContext;

  if (!data) return <Spinner />;
  const {
    countriesData: { meals },
  } = data;

  return (
    <div className="country">
      {meals.map((country: { strArea: string }) => {
        return <Country key={country.strArea} country={country} />;
      })}
    </div>
  );
}

function Country({ country }: Country) {
  const flag = getCountryCode(country.strArea);
  return (
    <div className="country-card">
      <div className="img">
        <img src={`https://flagcdn.com/w160/${flag}.png`} alt={flag} />
      </div>
      <h1>
        {country.strArea == "Unknown" ? "Free Palastine" : country.strArea}
      </h1>
    </div>
  );
}

//  to transform from nationality to country code
const countryCodes: { [key: string]: string } = {
  American: "us",
  British: "gb",
  Canadian: "ca",
  Chinese: "cn",
  Croatian: "hr",
  Dutch: "nl",
  Egyptian: "eg",
  Filipino: "ph",
  French: "fr",
  Greek: "gr",
  Indian: "in",
  Irish: "ie",
  Italian: "it",
  Jamaican: "jm",
  Japanese: "jp",
  Kenyan: "ke",
  Malaysian: "my",
  Mexican: "mx",
  Moroccan: "ma",
  Polish: "pl",
  Portuguese: "pt",
  Russian: "ru",
  Spanish: "es",
  Thai: "th",
  Tunisian: "tn",
  Turkish: "tr",
  Ukrainian: "ua",
  Unknown: "ps",
  Vietnamese: "vn",
};

function getCountryCode(country: string): string {
  return countryCodes[country] || "Free Palastine";
}

interface Countries {
  strArea: string;
}
type Country = {
  country: {
    strArea: string;
  };
};
