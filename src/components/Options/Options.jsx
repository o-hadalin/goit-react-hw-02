import styles from './Options.module.css';

const Options = ({ updateFeedback }) => (
  <div className={styles.options}>
    <button className={styles.button} onClick={() => updateFeedback('good')}>
      Good
    </button>
    <button className={styles.button} onClick={() => updateFeedback('neutral')}>
      Neutral
    </button>
    <button className={styles.button} onClick={() => updateFeedback('bad')}>
      Bad
    </button>
  </div>
);

export default Options;
