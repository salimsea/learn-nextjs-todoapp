import Aos from "aos";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import "styles/_base.scss";
import "styles/_globals.scss";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
