import React, { useState } from "react";
import styles from "./P2P.module.css";
import { Link } from "react-router-dom";
import { GrCircleInformation } from "react-icons/gr";
import {
  IoChevronDownOutline,
  IoCloseSharp,
  IoCopyOutline,
  IoAddCircleOutline,
} from "react-icons/io5";

// Main P2P Trading Component
const P2P = ({ mode = "sell" }) => {
  return (
    <div className={styles.container}>
      <P2PHeader />
      <P2PToggle activeMode={mode} />
      <CountrySelector />
      {mode === "sell" ? <SellSection /> : <BuySection />}
    </div>
  );
};

// P2P Header Component
const P2PHeader = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>P2P Trading</h1>
      <button className={styles.infoButton}>
        <GrCircleInformation size={20} />
      </button>
    </div>
  );
};

// Toggle between Buy/Sell
const P2PToggle = ({ activeMode }) => {
  return (
    <div className={styles.toggleContainer}>
      <Link to={"/p2p/sell"} className={styles.linkBtn}>
        <button
          className={`${styles.toggleButton} ${
            activeMode === "sell" ? styles.sellActive : ""
          }`}
        >
          Sell
        </button>
      </Link>
      <Link to={"/p2p/buy"} className={styles.linkBtn}>
        <button
          className={`${styles.toggleButton} ${
            activeMode === "buy" ? styles.buyActive : ""
          }`}
        >
          Buy
        </button>
      </Link>
    </div>
  );
};

// Country/Region Selector
const CountrySelector = () => {
  return (
    <div className={styles.countrySelector}>
      <input
        type="text"
        placeholder="Country / Region"
        className={styles.countryInput}
      />
      <button className={styles.dropdownButton}>
        <IoChevronDownOutline size={28} />
      </button>
    </div>
  );
};

// Sell Section Component
const SellSection = () => {
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(false);
  const [expandedPayment, setExpandedPayment] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Payment Method");

  const togglePaymentExpansion = () => {
    setIsPaymentExpanded(!isPaymentExpanded);
  };

  const togglePaymentOption = (option) => {
    setExpandedPayment(expandedPayment === option ? null : option);
  };

  const selectPaymentMethod = (method, displayName) => {
    setSelectedPaymentMethod(displayName);
    setExpandedPayment(method);
  };

  console.log(selectPaymentMethod);

  return (
    <div className={styles.tradingSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Sell USDT</h2>
        <button className={styles.closeButton}>
          <IoCloseSharp size={25} />
        </button>
      </div>

      <div className={styles.sectionContent}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>USDT to Sell</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter amount"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>You Will Receive (INR / USD)</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Who Will Receive"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Payment</label>
          <div className={styles.paymentMethodContainer}>
            <button
              className={styles.paymentMethodButton}
              onClick={togglePaymentExpansion}
            >
              <span>{selectedPaymentMethod}</span>
              <IoChevronDownOutline
                size={25}
                style={{
                  transform: isPaymentExpanded
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            </button>

            {isPaymentExpanded && (
              <div className={styles.paymentDropdown}>
                {/* UPI Option */}
                <div
                  className={`${styles.paymentOption} ${
                    expandedPayment === "upi" ? styles.activeDropdown : ""
                  }`}
                >
                  <button
                    className={styles.paymentOptionHeader}
                    onClick={() => selectPaymentMethod("upi", "UPI")}
                  >
                    <span>UPI</span>
                    <IoChevronDownOutline
                      size={20}
                      style={{
                        transform:
                          expandedPayment === "upi"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {expandedPayment === "upi" && (
                    <div className={styles.paymentOptionContent}>
                      <label className={styles.paymentLabel}>
                        Enter UPI ID
                      </label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="jhonsmith@oksbi"
                      />
                    </div>
                  )}
                </div>

                {/* PayPal Option */}
                <div
                  className={`${styles.paymentOption} ${
                    expandedPayment === "paypal" ? styles.activeDropdown : ""
                  }`}
                >
                  <button
                    className={styles.paymentOptionHeader}
                    onClick={() => selectPaymentMethod("paypal", "PayPal")}
                  >
                    <span>PayPal</span>
                    <IoChevronDownOutline
                      size={20}
                      style={{
                        transform:
                          expandedPayment === "paypal"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {expandedPayment === "paypal" && (
                    <div className={styles.paymentOptionContent}>
                      <label className={styles.paymentLabel}>
                        Enter PayPal ID
                      </label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  )}
                </div>

                {/* Bank Transfer Option */}
                <div
                  className={`${styles.paymentOption} ${
                    expandedPayment === "bank" ? styles.activeDropdown : ""
                  }`}
                >
                  <button
                    className={styles.paymentOptionHeader}
                    onClick={() => selectPaymentMethod("bank", "Bank Transfer")}
                  >
                    <span>Bank Transfer</span>
                    <IoChevronDownOutline
                      size={20}
                      style={{
                        transform:
                          expandedPayment === "bank"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {expandedPayment === "bank" && (
                    <div className={styles.paymentOptionContent}>
                      <label className={styles.paymentLabel}>
                        Account Name
                      </label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="John Smith"
                      />
                      <label className={styles.paymentLabel}>Card Number</label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="1234 5678 9012 3456"
                      />
                      <div className={styles.cardDetailsRow}>
                        <div className={styles.cardDetailItem}>
                          <label className={styles.paymentLabel}>
                            Expire Date
                          </label>
                          <input
                            type="text"
                            className={styles.paymentInput}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className={styles.cardDetailItem}>
                          <label className={styles.paymentLabel}>CVV</label>
                          <input
                            type="text"
                            className={styles.paymentInput}
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.walletSection}>
          <h3 className={styles.walletTitle}>
            Send USDT to this wallet Address
          </h3>
          <div className={styles.networkInfo}>
            <span className={styles.networkLabel}>Network:</span>
            <span className={styles.networkValue}>TRC20</span>
          </div>
          <div className={styles.addressContainer}>
            <span className={styles.address}>TMVISk3n7hDxx9N9RqA99sC4C49</span>
            <button className={styles.copyButton}>
              <IoCopyOutline size={18} />
            </button>
          </div>
          <p className={styles.warning}>
            Only send USDT to this address. Sending another coin or token to
            this address may result in the loss of your deposit
          </p>
        </div>

        <div className={styles.uploadSection}>
          <button className={styles.uploadButton}>
            <IoAddCircleOutline size={30} />
          </button>
          <div className={styles.uploadText}>
            <p className={styles.uploadTitle}>Upload proof if required</p>
            <p className={styles.uploadSubtitle}>JPG / PNG supported</p>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton}>Cancel</button>
          <button className={styles.confirmButton}>Confirm Sell</button>
        </div>
      </div>
    </div>
  );
};

// Buy Section Component
const BuySection = () => {
  const [isPaymentExpanded, setIsPaymentExpanded] = useState(false);
  const [expandedPayment, setExpandedPayment] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Payment Method");

  const togglePaymentExpansion = () => {
    setIsPaymentExpanded(!isPaymentExpanded);
  };

  const togglePaymentOption = (option) => {
    setExpandedPayment(expandedPayment === option ? null : option);
  };

  const selectPaymentMethod = (method, displayName) => {
    setSelectedPaymentMethod(displayName);
    setExpandedPayment(method);
  };

  return (
    <div className={styles.tradingSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Buy USDT</h2>
        <button className={styles.closeButton}>
          <IoCloseSharp size={25} />
        </button>
      </div>

      <div className={styles.sectionContent}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Amount to Pay (INR / USD)</label>
          <input
            type="text"
            className={styles.input}
            placeholder="Enter amount"
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>You Will Get (USDT)</label>
          <input type="text" className={styles.input} placeholder="" />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>Payment</label>
          <div className={styles.paymentMethodContainer}>
            <button
              className={styles.paymentMethodButton}
              onClick={togglePaymentExpansion}
            >
              <span>{selectedPaymentMethod}</span>
              <IoChevronDownOutline
                size={25}
                style={{
                  transform: isPaymentExpanded
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              />
            </button>

            {isPaymentExpanded && (
              <div className={styles.paymentDropdown}>
                {/* UPI Option */}
                <div className={styles.paymentOption}>
                  <button
                    className={styles.paymentOptionHeader}
                    onClick={() => selectPaymentMethod("upi", "UPI")}
                  >
                    <span>UPI</span>
                    <IoChevronDownOutline
                      size={20}
                      style={{
                        transform:
                          expandedPayment === "upi"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {expandedPayment === "upi" && (
                    <div className={styles.paymentOptionContent}>
                      <label className={styles.paymentLabel}>
                        Enter UPI ID
                      </label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="jhonsmith@oksbi"
                      />
                    </div>
                  )}
                </div>

                {/* PayPal Option */}
                <div className={styles.paymentOption}>
                  <button
                    className={styles.paymentOptionHeader}
                    onClick={() => selectPaymentMethod("paypal", "PayPal")}
                  >
                    <span>PayPal</span>
                    <IoChevronDownOutline
                      size={20}
                      style={{
                        transform:
                          expandedPayment === "paypal"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {expandedPayment === "paypal" && (
                    <div className={styles.paymentOptionContent}>
                      <label className={styles.paymentLabel}>
                        Enter PayPal ID
                      </label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  )}
                </div>

                {/* Bank Transfer Option */}
                <div className={styles.paymentOption}>
                  <button
                    className={styles.paymentOptionHeader}
                    onClick={() => selectPaymentMethod("bank", "Bank Transfer")}
                  >
                    <span>Bank Transfer</span>
                    <IoChevronDownOutline
                      size={20}
                      style={{
                        transform:
                          expandedPayment === "bank"
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </button>
                  {expandedPayment === "bank" && (
                    <div className={styles.paymentOptionContent}>
                      <label className={styles.paymentLabel}>
                        Account Name
                      </label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="John Smith"
                      />
                      <label className={styles.paymentLabel}>Card Number</label>
                      <input
                        type="text"
                        className={styles.paymentInput}
                        placeholder="1234 5678 9012 3456"
                      />
                      <div className={styles.cardDetailsRow}>
                        <div className={styles.cardDetailItem}>
                          <label className={styles.paymentLabel}>
                            Expire Date
                          </label>
                          <input
                            type="text"
                            className={styles.paymentInput}
                            placeholder="MM/YY"
                          />
                        </div>
                        <div className={styles.cardDetailItem}>
                          <label className={styles.paymentLabel}>CVV</label>
                          <input
                            type="text"
                            className={styles.paymentInput}
                            placeholder="123"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.uploadSection}>
          <button className={styles.uploadButton}>
            <IoAddCircleOutline size={30} />
          </button>
          <div className={styles.uploadText}>
            <p className={styles.uploadTitle}>Upload Payment Screenshot</p>
            <p className={styles.uploadSubtitle}>JPG / PNG supported</p>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button className={styles.cancelButton}>Cancel</button>
          <button className={styles.confirmButton}>Confirm Buy</button>
        </div>
      </div>
    </div>
  );
};

export default P2P;
