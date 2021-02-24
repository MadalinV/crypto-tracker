import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";

function App() {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
			)
			.then(res => {
				setCoins(res.data);
				console.log(res.data);
			})
			.catch(error => console.log(error));
	}, []);

	const handleChange = e => {
		setSearch(e.target.value);
	};

	const filteredCoins = coins.filter(coin =>
		coin.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="coin-app">
      <h1 className="coin-text">Currency Tracker</h1>
			<div className="coin-search">
				<form>
					<input
						type="text"
						className="coin-input"
						placeholder="Search..."
						onChange={handleChange}
					/>
				</form>
			</div>

			<div className="coin-content">
				{filteredCoins.map(coin => {
					return (
						<Coin
							key={coin.id}
							name={coin.name}
							image={coin.image}
							symbol={coin.symbol}
							volume={coin.total_volume}
							price={coin.current_price}
							priceLow={coin.low_24h}
							priceHigh={coin.high_24h}
							priceChange={
								Math.round(
									coin.price_change_percentage_24h * 100
								) / 100
							}
							priceChange1H={
								Math.round(
									coin.price_change_percentage_1h_in_currency *
										100
								) / 100
							}
							priceChange7D={
								Math.round(
									coin.price_change_percentage_7d_in_currency *
										100
								) / 100
							}
							marketcap={coin.market_cap}
							marketcapChangeP={coin.market_cap_change_percentage_24h.toFixed(
								2
							)}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
