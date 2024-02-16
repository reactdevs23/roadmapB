import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Icon1 from "./images/Icon1";

import Icon2 from "./images/Icon2";

import Icon4 from "./images/Icon4";
import Icon5 from "./images/Icon5";
import Icon6 from "./images/Icon6";
import Icon7 from "./images/Icon7";
import Icon8 from "./images/Icon8";
import Icon9 from "./images/Icon9";
import Icon10 from "./images/Icon10";
import Icon11 from "./images/Icon11";
import Icon12 from "./images/Icon12";
import Icon3 from "./images/Icon3";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Poppins', sans-serif",
    mainBg: "#fff",
    heading: "STRATEGY",
    headingColor: "#155EEF",
    title: "Product Vision Roadmap",
    titleColor: "#000",

    lineColor: "#F4F5F7",

    data: [
      {
        icon: <Icon1 color="#344054" />,
        bg: "#FFC400",
        border: "12px solid #FFF3CC",
        info: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon2 color="#344054" />,
        bg: "#F38744",
        border: "12px solid #EEDAD0",
        info: "Dorem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon3 color="#344054" />,
        bg: "#FF692E",
        border: "12px solid #FDDFD3",
        info: "Corem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon4 color="#344054" />,
        bg: "#FFC400",
        border: "12px solid #FEE2E0",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon5 color="#344054" />,
        bg: "#9B8AFB",
        border: "12px solid #EBE8FE",
        info: "Borem ipsum dolor sit amet, consectetur adipiscing elit. ",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon6 color="#344054" />,
        bg: "#E478FA",
        border: "12px solid #FAE4FE",
        info: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon7 color="#344054" />,
        bg: "#F670C7",
        border: "12px solid #FDE2F4",
        info: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon8 color="#344054" />,
        bg: "#FD6F8E",
        border: "12px solid #FFE2E8",
        info: "Morem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon9 color="#344054" />,
        bg: "#8098F9",
        border: "12px solid #E6EAFE",
        info: "Porem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon10 color="#344054" />,
        bg: "#84CAFF",
        border: "12px solid #E6F4FF",
        info: "Yorem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon11 color="#344054" />,
        bg: "#7CD4FD",
        border: "12px solid #E5F6FF",
        info: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        infoColor: "#1d2939",
      },
      {
        icon: <Icon12 color="#344054" />,
        bg: "#2CE",
        border: "12px solid #D3F5FC",
        info: "Borem ipsum dolor sit amet, consectetur adipiscing elit.",
        infoColor: "#1d2939",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
