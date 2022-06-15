import { Head, Html, Main, NextScript } from "next/document";
import {
  BlueVerticalGradient,
  PinkVerticalGradient,
  PrimaryHorizontalGradient,
  PurpleVerticalGradient,
} from "../components/svgs-gradients";

const MyDocument = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
      <PrimaryHorizontalGradient />
    </body>
  </Html>
);

export default MyDocument;
