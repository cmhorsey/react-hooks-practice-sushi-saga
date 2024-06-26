import React from "react"
import Wallet from "./Wallet"

function Table({ plates = [], remainingMoney, setRemainingMoney }) {
  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ))

  return (
    <>
      <h1 className="remaining">You have: ${remainingMoney} remaining!</h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
        <Wallet
          remainingMoney={remainingMoney}
          setRemainingMoney={setRemainingMoney}
        />
      </div>
    </>
  )
}

export default Table
