import React from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushiList }) {
  // const isEaten = false
  const displayAllSushi = sushiList.map((sushi) => {
    return <Sushi sushi={sushi} isEaten={false} />
  })
  return (
    <div className="belt">
      {displayAllSushi}
      <MoreButton />
    </div>
  )
}

export default SushiContainer
