import React from 'react'

const ActionButtons = () => {
    return (

        <div className="payment-buttons">
            <div className="receipt-actions">
                <button className="btn add-btn">
                    Add <span>＋</span>
                </button>
                <button className="btn abort-btn">
                    Abort <span>✖</span>
                </button>
            </div>
            <div className="receipt-actions">
                <button className="btn kot-btns">
                    KOT <span>⏸</span>
                </button>
                <button className="btn proceed-btn">
                    Proceed <span>→</span>
                </button>
            </div>
        </div>
    )
}

export default ActionButtons