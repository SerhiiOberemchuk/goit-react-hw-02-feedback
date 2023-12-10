import css from './Feedbackoptions.module.css';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.button_box}>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={css.option_buttons}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
