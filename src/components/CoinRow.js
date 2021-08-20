import React from 'react';

const CoinRow = ({coin, index}) => {
    return (
        <tr>
            <td className="text-muted">{index}</td>
            <td>
                <img src={coin.image} alt={coin.name} className="img-fluid me-4" style={{ width: "2rem" }}
                />
                <span>{coin.name}</span>
                <span className="text-muted text-uppercase ms-2">{coin.symbol}</span>
            </td>
            <td>{coin.current_price.toLocaleString()}€</td>

            <td
                className={
                    coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
                }
            >
                {coin.price_change_percentage_24h}%
            </td>

            <td>
                {coin.total_volume.toLocaleString()}€
            </td>
        </tr>
    )
};

export default CoinRow;