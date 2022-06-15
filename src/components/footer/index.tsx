import styles from "./styles.module.scss";

import { AiFillHeart } from "react-icons/ai";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.left}>
      Copyright © 2017 <span>Bootstrap Dash.</span> All rights reserved.
    </div>
    <div className={styles.right}>
      Handcrafted with
      <AiFillHeart className={styles.heart} />
      <svg width="0" height="0" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="pink-vertical-gradient"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#fcc3ad" />

            <stop offset="0.2" stopColor="#feb6a3" />

            <stop offset="0.4" stopColor="#ffa99c" />

            <stop offset="0.6000000000000001" stopColor="#ff9b97" />

            <stop offset="0.8" stopColor="#ff8d95" />

            <stop offset="1" stopColor="#fe7e96" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </footer>
);

export default Footer;
