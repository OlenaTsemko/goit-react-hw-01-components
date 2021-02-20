import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ title }) => (
  <div className={styles.header}>
    <h1 className={styles.headerTitle}>{title}</h1>
  </div>
);

Header.propTypes = {
  children: PropTypes.string,
};

export default Header;
