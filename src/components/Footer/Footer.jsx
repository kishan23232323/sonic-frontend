import React, { useState } from "react";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.brandSection}>
        <h2 className={styles.logo}>
          <Link
            to={"/"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span>Sonic</span> Exchange
          </Link>
        </h2>
      </div>
      <div className={styles.footerContent}>
        {/*  Newsletter */}

        {/* Helpful Links */}
        <div className={styles.linksSection}>
          <h3>Helpful Links</h3>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/sonic-insentive">Sonic Insentive</Link>
            </li>
            <li>
              <Link to="/airdrop">Airdrop</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div className={styles.socialsSection}>
          <h3>Socials</h3>
          <ul>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.socialIcon} /> LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className={styles.socialIcon} /> Twitter
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.socialIcon} /> Instagram
              </a>
            </li>

            <li>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord className={styles.socialIcon} /> Discord
              </a>
            </li>

            <li>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className={styles.socialIcon} /> Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2025 Sonic Exchange | Powered by Web3</p>
      </div>
    </footer>
  );
};

export default Footer;
