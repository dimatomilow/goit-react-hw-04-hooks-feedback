import { Button } from "./FeedbackOptionsStyles";

const Feedback = ({good, neutral, bad,onLeaveFeedback}) => {
    return (
        <div>
                <Button  type='button' name={'good'} value={good} onClick={onLeaveFeedback}>{good}</Button>
                <Button  type='button'name={'neutral'} value={neutral} onClick={onLeaveFeedback}>{neutral}</Button>
                <Button  type='button'name={'bad'} value={bad} onClick={onLeaveFeedback}>{bad}</Button>

       </div>
    );
}

export default Feedback;