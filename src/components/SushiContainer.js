import React, { useState } from "react"
import MoreButton from "./MoreButton"
import Sushi from "./Sushi"

function SushiContainer({ sushiList, eatSushi, eatenSushis }) {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 4

  const handleMoreButtonClick = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage) % sushiList.length)
  }

  const displaySushi = sushiList
    .slice(startIndex, startIndex + itemsPerPage)
    .map((sushi) => {
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          isEaten={eatenSushis.includes(sushi.id)}
          eatSushi={eatSushi}
        />
      )
    })

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton handleClick={handleMoreButtonClick} />
    </div>
  )
}

export default SushiContainer
