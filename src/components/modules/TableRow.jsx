import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./CoinTables.module.css";
import { marketCart } from "../../services/cryptoApi";

const TableRow = ({ setChart, coin }) => {
  const {
    id,
    name,
    image,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  } = coin;
  const showChartHandler = async () => {
    try {
      const res = await fetch(marketCart(id));
      const json = await res.json();
      setChart({...json,coin});
    } catch (error) {
      setChart(null);
    }
  };
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showChartHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>

      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="chart" />
      </td>
    </tr>
  );
};

export default TableRow;
