import React from "react";
import CoinRow from './CoinRow';

const TableCoins =  ({coins, search}) => {
    const titles = ['#', 'Coin', 'Price', 'Price Change', '24h Volume'];

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            { coins.length > 0 ?
            (<table className="table table-dark mt-4 table-hover">
                <thead>
                    <tr>
                        {titles.map((title, i) => (
                            <th key={i}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredCoins.map((coin, index) => (
                        <CoinRow coin={coin} key={index} index={index + 1} />
                    ))}
                </tbody>
            </table>)
             :(<div className="d-flex justify-content-center">
                    <div className="spinner-border text-white m-4" style={{width: "2rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TableCoins;