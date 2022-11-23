import React from 'react';
import './Coin.scss';

const Coin = ({name, image, symbol, price, volume, marketcap, priceChange}) => {
  return (
    <>
    <div className="coin__container">
      <div className="coin__container-row">
        <div className="coin__container-image">
          <img src={image} alt="" />
          <h1>{name}</h1>
          <p>{symbol}</p>
        </div>

        <div className="coin__container-data">
          <p className="price">${price}</p>
          <p className="volume">{volume.toLocaleString()}</p>

          {priceChange < 0 ? (<p className='percent red'>{priceChange.toFixed(2)}%</p>) : (<p className='percent green'>{priceChange.toFixed(2)}%</p>)}
          
          <p className="marketcap">MC: {marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Coin