import React, { useState } from "react"

function Wallet({ handleAddMoney, remainingMoney, setRemainingMoney }) {
  const [addMoney, setAddMoney] = useState(0)

  function handleInputChange(event) {
    setAddMoney(event.target.value)
  }

  function handleAddMoney(event) {
    event.preventDefault()

    const newBudget = parseInt(addMoney) + remainingMoney
    setRemainingMoney(newBudget)
    setAddMoney("")
  }

  return (
    <div>
      <form onSubmit={handleAddMoney}>
        <input
          type="number"
          name="budget"
          step="1"
          placeholder="Add money to wallet..."
          value={addMoney}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Wallet
