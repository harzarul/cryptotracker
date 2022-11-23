import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.scss';
import Coin from './components/Coin';


const App = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then( response => {
            setCoins(response.data)
        })
        .catch(error => console.log(error));
    },[]);

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
    <div className="app__crypto">
        <div className="app__crypto-search">
            <h1>Stalk Your Currency</h1>

            <form>
                <input type="text" onChange={handleChange} placeholder='Search' />
            </form>
        </div>

        {filteredCoins.map(coin => {
            return(
                <Coin
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    volume={coin.total_volume}
                    marketcap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}/>
            )
        })}
    </div>
    </>
  )
}

export default App