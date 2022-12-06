import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";

import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Services } from "./components/Services";
import { Partners } from "./components/Partners";
import { Customers } from "./components/Customers";
import { Contact } from "./components/Contact";
import { News } from "./components/News";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Header/>
      <Banner/>
      <Services/>
      <Partners/>
      <Customers/>
      <Contact/>
      <News/>
      <Footer/>
    </ThemeProvider>
  )
}
