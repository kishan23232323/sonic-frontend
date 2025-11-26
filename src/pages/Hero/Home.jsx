import React from "react";
import styles from "./Home.module.css";

const cardInfo = [
  {
    imageSrc: "/heroCardImages/instantMultiChainSwaps.png",
    title: "Instant Multi-Chain Swaps",
    subtext:
      "Swap tokens across Ethereum, BNB, Polygon and more — powered by Rubic.",
  },
  {
    imageSrc: "/heroCardImages/Over80Blockchains.png",
    title: "Over 80+ Blockchains",
    subtext:
      "Sonic Exchange supports 80+ blockchains and 16,000+ tokens — all in one place.",
  },
  {
    imageSrc: "/heroCardImages/earnAirdrops.png",
    title: "Earn Airdrops",
    subtext:
      "Get rewarded for swapping across multiple chains with automated airdrops.",
  },
  {
    imageSrc: "/heroCardImages/secure.png",
    title: "Secure & Non-Custodial",
    subtext:
      "Your assets stay in your wallet. Fast, safe cross-chain swaps powered by Rubic.",
  },
];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.heroSection}>
        <div className={styles.content}>
          <h1>Next-Gen Cross-Chain Swapping. One Platform. Every Chain.</h1>
          <p className={styles.subtext}>
            Swap, trade, and earn across 80+ blockchains all from one
            decentralized platform.
          </p>
          <div className={styles.buttons}>
            <button className={styles.start}>Start&nbsp;Swapping</button>
            <button className={styles.airdrop}>Join&nbsp;Airdrop</button>
          </div>
        </div>
        <div className={styles.cardsGrid}>
          {cardInfo.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.imageSrc} alt={card.title} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
