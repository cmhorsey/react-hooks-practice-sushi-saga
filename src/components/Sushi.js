import React from "react"

function Sushi({ sushi, isEaten, eatSushi }) {
  const { name, img_url, price } = sushi

  function handleSushiClick() {
    eatSushi(sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {isEaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
