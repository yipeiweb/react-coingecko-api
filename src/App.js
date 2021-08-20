import axios from 'axios';
import { useEffect, useState } from 'react';
import TableCoins from './components/TableCoins';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const getData = async () => {
    try {
      const res = await axios.get(url);
      setCoins(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData()
  },[]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-white">CoinMarket</h1>
          <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />
          <TableCoins coins={coins} search={search}/>
        </div>
      </div>
    </div>
  );
}

export default App;
