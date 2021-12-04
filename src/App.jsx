import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Coin from './components/Coin'


function App() {

  const [coins, setCoins] = useState([])
  const [searchText, setSearchText] = useState('')

  const fetchCoins = async ()=>{
    await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
    .then(response => {
      setCoins(response.data)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(response => {
      //do some cleanup
    })
  }


useEffect(()=>{
  fetchCoins()
},[])


const handleSearchText = (e)=>{
  e.preventDefault()
  setSearchText(e.target.value)
}

const filteredCoins = coins.filter(coin =>
   coin.name.toLowerCase().includes(searchText.toLowerCase()))



  return (
    <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Search a Currency</h1>
          <form>
              <input type="text" name="" id="" className="coin-input" onChange={handleSearchText} placeholder="search"/>
          </form>
        </div>

        {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}




    </div>
  );
}

export default App;
