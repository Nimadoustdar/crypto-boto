
import TableRow from "./TableRow";

import styles  from "./CoinTables.module.css"

import { RotatingLines } from "react-loader-spinner";
const CoinTables = ({ coins, isLoading ,setChart}) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
       <RotatingLines strokeColor="#3874ff" strokeWidth="2"/>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th>coin</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} setChart={setChart} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CoinTables;
