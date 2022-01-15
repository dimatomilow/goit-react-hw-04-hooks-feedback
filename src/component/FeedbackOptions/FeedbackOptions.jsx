import { Button } from "./FeedbackOptionsStyles";

const Feedback = ({options,onLeaveFeedback}) => {
    return (
        <div>
             {
            options.map(option =>
                (<Button key={option} type='button' value={option} onClick={onLeaveFeedback}>{option}</Button>)
            )
        }
       </div>
    );
}

export default Feedback;