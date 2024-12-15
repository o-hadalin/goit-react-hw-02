import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => {
  const { good, neutral, bad } = feedback;

  return (
    <div className={styles.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive feedback: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

export default Feedback;
