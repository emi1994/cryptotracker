import React from 'react'
import './Coins.css'
export const Coins = ({image, symbol, price, volume, name, priceChange, marketcap}) => {
    return (
        <div className="wrapper">
            <div className="coins-container">
                <div className="coin-row">
                    <div className="coin">
                        <img src={image} alt={name} />
                        <h1>{name}</h1>
                        <p className="coin-symbol">{symbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">${price}</p>
                        <p className="coin-volume">$ {volume.toLocaleString()}</p>
                        {priceChange < 0 ? 
                        (<p className="coin=percent red">{priceChange.toFixed(2)}%</p>)
                        :
                        (<p className="coin=percent green">{priceChange.toFixed(2)}%</p>)
                        }
                        <p className="coin-marketcap">
                            Mkt Cap: ${marketcap.toLocaleString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coins
