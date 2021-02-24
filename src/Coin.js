import React from "react";
import "./Coin.css";

function Coin({
	name,
	image,
	symbol,
	price,
	volume,
	priceChange,
	priceChange1H,
	priceChange7D,
	marketcap,
	priceHigh,
	priceLow,

	marketcapChangeP,
}) {
	return (
		<div className="coin-container">
			<div className="coin-row">
				<div className="coin">
					<img src={image} alt="crypto" />
					<div className="coin-name">
						<h1 >{name}</h1>
						<p className="coin-symbol">{symbol}</p>
					</div>
				</div>
				<hr/>
				<div className="coin-data">
					<div className="coin-data-box">
						<p className="coin-title ">Lowest Price<br/><span>24h</span></p>
						<p className="coin-price color-b">
							{priceLow.toLocaleString()} €
						</p>
					</div>
					<div className="coin-data-box">
						<p className="coin-title ">Current Price</p>
						<p className="coin-price color-c">
							{price.toLocaleString()} €
						</p>
					</div>
					<div className="coin-data-box">
						<p className="coin-title ">Highest Price<br/><span>24h</span></p>
						<p className="coin-price color-d">
							{priceHigh.toLocaleString()} €
						</p>
					</div>
					
					<div className="coin-data-box">
						<p className="coin-title ">Price<br/><span>1h</span></p>
						{priceChange1H < 0 ? (
							<p className=" coin-price color-b">
								{priceChange1H} %
							</p>
						) : (
							<p className=" coin-price color-d">
								+{priceChange1H} %
							</p>
						)}
					</div>
					<div className="coin-data-box">
						<p className="coin-title ">Price<br/><span>24h</span></p>
						{priceChange < 0 ? (
							<p className="coin-price color-b">
								{priceChange} %
							</p>
						) : (
							<p className=" coin-price color-d">
								+{priceChange} %
							</p>
						)}
					</div>
					<div className="coin-data-box">
						<p className="coin-title ">Price<br/><span>7days</span></p>
						{priceChange7D < 0 ? (
							<p className=" coin-price color-b">
								{priceChange7D} %
							</p>
						) : (
							<p className=" coin-price color-d">
								+{priceChange7D} %
							</p>
						)}
					</div>
					
					<div className="coin-data-box">
						<p className="coin-title">Volume<br/><span>24h</span></p>
						<p className="coin-volume coin-price color-c">
							{Number(volume).toLocaleString()} €
						</p>
					</div>
					<div className="coin-data-box">
						<p className="coin-title ">Market Cap</p>
						<p className="coin-marketcap coin-price color-d">
							{marketcap.toLocaleString()} €
						</p>
					</div>
					<div className="coin-data-box">
						<p className="coin-title ">Market Cap<br/><span>24h</span></p>
						<div className=" ">
							{marketcapChangeP < 0 ? (
								<p className="coin-marketcap coin-price color-b">
									{marketcapChangeP.toLocaleString()} %
								</p>
							) : (
								<p className="coin-marketcap coin-price color-d">
									+{marketcapChangeP.toLocaleString()} %
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Coin;
