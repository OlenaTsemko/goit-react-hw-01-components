import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>

    <ul className="stat-list">
      {stats.map(item => (
        <StatisticsItem
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  </section>
);

export default Statistics;
