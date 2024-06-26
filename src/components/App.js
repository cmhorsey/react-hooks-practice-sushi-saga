import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushiList, setAllSushi] = useState([])
  const [eatenSushis, setEatenSushis] = useState([])
  const [remainingMoney, setRemainingMoney] = useState(100)

  const getSushi = () => {
    fetch(API)
      .then((res) => res.json())
      .then((sushi) => {
        setAllSushi(sushi)
      })
  }

  useEffect(() => {
    getSushi()
  }, [])

  function handleEatSushi(sushi) {
    if (remainingMoney >= sushi.price && !eatenSushis.includes(sushi.id)) {
      setEatenSushis([...eatenSushis, sushi.id])
      setRemainingMoney(remainingMoney - sushi.price)
    }
  }

  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        eatSushi={handleEatSushi}
        eatenSushis={eatenSushis}
      />
      <Table
        remainingMoney={remainingMoney}
        plates={eatenSushis}
        setRemainingMoney={setRemainingMoney}
      />
    </div>
  )
}

export default App
