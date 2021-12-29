import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// import Layout from "../components/Layout";
import { Provider } from "react-redux";

import { store } from "../redux/store";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgba(70, 130, 180)",
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
