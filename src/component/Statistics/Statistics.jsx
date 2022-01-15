import {Option} from './StatisticsStyled'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
<div>

                    <Option>Good:{good}</Option>
                    <Option>Neutral:{neutral}</Option>
                    <Option>Bad:{bad}</Option>
                    <Option>Total:{total}</Option>
                    <Option>Positive feedback:{positivePercentage}%</Option>
            </div>
    );
}

export default Statistics;