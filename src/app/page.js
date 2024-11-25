

import Image from "next/image";
import styles from "./page.module.css";
import StudentList from "./StudentList";
import LimitedCounter from "./LimitedCounter";
import AverageCalculator from "./AverageCalculator";
import SurveySimulator from "./SurveySimulator";
import ShoppingCart from "./ShoppingCart";
import LoguinForm from "./LoguinForm";
import ImageGallery from "./ImageGallery";
import MultiCounter from "./MultiCounter";
import UserTable from "./UserTable";
import GuessTheNumber from "./GuessTheNumber";
import ThemeSelector from "./ThemeSelector";
import LiveValidationForm from "./LiveValidationForm";
import SurveySimulator2 from "./SuerveySimulator2";
import TextCarrousel from "./TextCarrousel";

export default function Home() {
  return (
    <>
      {/*<StudentList/>
      <LimitedCounter/>
      <AverageCalculator/>
      <SurveySimulator/>
      <ShoppingCart/>
      <LoguinForm/>
      <ImageGallery/>
      <MultiCounter/>
      <UserTable/>
      <GuessTheNumber/>
      <ThemeSelector/>
      <LiveValidationForm/>
      <SurveySimulator2/>*/}
      <TextCarrousel prop={[
    {
      id: 1,
      text: "Testo 1",
    },
    {
      id: 2,
      text: "Testo 2",
    },
    {
      id: 3,
      text: "Testo 3",
    },
    {
      id: 4,
      text: "Testo 4",
    },
    {
      id: 5,
      text: "Testo 5",
    },
  ]}/>
    </>
  );
}
