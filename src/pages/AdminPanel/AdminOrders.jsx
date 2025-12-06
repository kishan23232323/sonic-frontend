import React, { useState, useEffect } from "react";
import styles from "./AdminOrders.module.css";
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoImageOutline,
  IoChevronDown,
  IoChevronUp,
} from "react-icons/io5";

import {
  adminApproveOrder,
  adminRejectOrder,
  adminGetAllOrders,
} from "../../services/P2Pservices/p2papi";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const data = await adminGetAllOrders();
      setOrders(data || []);
    } catch (err) {
      console.error("Failed to load orders", err);
    }
  };

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleApprove = async (id) => {
    await adminApproveOrder(id);
    loadOrders();
  };

  const handleReject = async (id) => {
    await adminRejectOrder(id);
    loadOrders();
  };

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.heading}>P2P Admin Panel</h1>

      <div className={styles.tableWrapper}>
        {orders.map((order) => (
          <div key={order._id} className={styles.orderCard}>
            
            <div className={styles.orderRow}>
              <div>
                <p className={styles.orderType}>
                  {order.type === "BUY" ? "🟢 BUY ORDER" : "🔴 SELL ORDER"}
                </p>
                <p className={styles.orderSub}>
                  {order.usdtAmount} USDT • {order.fiatAmount}{" "}
                  {order.currency || ""}
                </p>
              </div>

              <span
                className={`${styles.statusBadge} ${
                  styles[order.status.toLowerCase()]
                }`}
              >
                {order.status}
              </span>

              <button
                className={styles.expandBtn}
                onClick={() => toggleExpand(order._id)}
              >
                {expanded === order._id ? (
                  <IoChevronUp size={22} />
                ) : (
                  <IoChevronDown size={22} />
                )}
              </button>
            </div>

            {/* EXPANDED VIEW */}
            {expanded === order._id && (
              <div className={styles.detailsBox}>
                {/* PAYMENT METHOD */}
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Payment Method</span>
                  <span className={styles.detailValue}>
                    {order.paymentMethod}
                  </span>
                </div>

                {/* BUY ORDERS → Admin Payment Details */}
                {order.type === "BUY" && (
                  <div className={styles.detailBlock}>
                     <span className={styles.detailLabel}>User Wallet Address</span>
                    <div className={styles.valueBox}>
                    {order.usdtWalletAddress || "Not Provided"}
                    </div>
                    <span className={styles.detailLabel}>
                      Admin Payment Details
                    </span>
                    <div className={styles.paymentCard}>
                      {order.paymentMethod === "UPI" && (
                        <p>
                          <strong>UPI ID:</strong>{" "}
                          {order.receiverDetails?.upiId}
                        </p>
                      )}

                      {order.paymentMethod === "PAYPAL" && (
                        <p>
                          <strong>PayPal Email:</strong>{" "}
                          {order.receiverDetails?.paypalId}
                        </p>
                      )}

                      {order.paymentMethod === "BANK" && (
                        <>
                          <p>
                            <strong>Account Holder:</strong>{" "}
                            {order.receiverDetails?.bankHolderName}
                          </p>
                          <p>
                            <strong>Account No:</strong>{" "}
                            {order.receiverDetails?.bankAccountNumber}
                          </p>
                          <p>
                            <strong>IFSC/SWIFT:</strong>{" "}
                            {order.receiverDetails?.bankSwiftCode}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}

{/* SELL → USER PAYMENT DETAILS */}
{order.type === "SELL" && (
  <div className={styles.detailBlock}>
    <span className={styles.detailLabel}>User Payment Details</span>

    <div className={styles.paymentCard}>
      {order.paymentMethod === "UPI" && (
        <p><strong>UPI ID:</strong> {order.receiverDetails?.upiId}</p>
      )}

      {order.paymentMethod === "PAYPAL" && (
        <p><strong>PayPal:</strong> {order.receiverDetails?.paypalId}</p>
      )}

      {order.paymentMethod === "BANK" && (
        <>
          <p><strong>Account Holder:</strong> {order.receiverDetails?.bankHolderName}</p>
          <p><strong>Account No:</strong> {order.receiverDetails?.bankAccountNumber}</p>
          <p><strong>IFSC/SWIFT:</strong> {order.receiverDetails?.bankSwiftCode}</p>
        </>
      )}
    </div>
  </div>
)}


                {/* TXN HASH */}
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Transaction Hash</span>
                  <span className={styles.detailValueGray}>
                    {order.txnHash || "Not Provided"}
                  </span>
                </div>

                {/* PROOF IMAGE */}
                <div className={styles.detailRow}>
                  <span className={styles.detailLabel}>Payment Proof</span>
                  {order.proofImage ? (
                    <button
                      className={styles.viewImgBtn}
                      onClick={() => setPreviewImg(order.proofImage)}
                    >
                      <IoImageOutline size={20} /> View Proof
                    </button>
                  ) : (
                    <span className={styles.detailValueGray}>
                      No proof uploaded
                    </span>
                  )}
                </div>

                {/* APPROVE / REJECT */}
                {order.status === "AWAITING_CONFIRMATION" && (
                  <div className={styles.actionRow}>
                    <button
                      className={styles.approveBtn}
                      onClick={() => handleApprove(order._id)}
                    >
                      <IoCheckmarkCircleOutline size={22} /> Approve
                    </button>

                    <button
                      className={styles.rejectBtn}
                      onClick={() => handleReject(order._id)}
                    >
                      <IoCloseCircleOutline size={22} /> Reject
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* IMAGE PREVIEW */}
      {previewImg && (
        <div
          className={styles.modalOverlay}
          onClick={() => setPreviewImg(null)}
        >
          <img src={previewImg} className={styles.modalImage} />
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
