import React from "react";
import { IntlProvider } from "react-intl";
import { ThemeProvider } from "styled-components";
import { theme } from "styles";
import translations from "translations";
import "styles/globals.css";
import "styles/style.css";

import axios from "axios";

function MyApp({
  Component,
  pageProps,
  headerApi,
  footerApi,
  contactData,
  contactPopupData,
}) {
  const lang = "en";
  return (
    <ThemeProvider theme={theme}>
      <IntlProvider locale={lang} messages={translations[lang]}>
        <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async () => {
  try {
    const { data: headerApi } = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/header`
    );

    const { data: footerApi } = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/footer`
    );
    const { data: contactData } = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-us`
    );
    const { data: contactPopupData } = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/modal-popup-contactus`
    );
    return {
      headerApi,
      footerApi,
      contactData,
      contactPopupData,
    };
  } catch (e) {}
  return {};
};

export default MyApp;
