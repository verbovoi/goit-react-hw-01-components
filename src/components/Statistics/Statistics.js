import "./Statistics.css";
import PropTypes from "prop-types";
import randomColor from "./randomColor";

export default function Statistics({ stats }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map((stat) => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percent">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

//PropTypes
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};
