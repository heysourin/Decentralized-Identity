import { Provider } from "@self.id/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider client={{ ceramic: "testnet-clay" }}>
      <Component {...pageProps} />
    </Provider>
  );
}
