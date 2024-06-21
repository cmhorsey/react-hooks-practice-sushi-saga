import React, { useState, useEffect } from "react"
import SushiContainer from "./SushiContainer"
import Table from "./Table"

const API = "http://localhost:3001/sushis"

function App() {
  const [sushiList, setAllSushi] = useState([])
  //set all sushi
  //initial fetch
  //pass to sushi to sushi container

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

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} />
      <Table />
    </div>
  )
}

export default App
