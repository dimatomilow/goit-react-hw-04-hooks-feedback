
import {useState} from 'react'
import Feedback from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notifications from './Notifications/Notifications'

import Container from "./Styled/Container";
import GlobalStyle from "./Styled/GlobalStyled";

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const[bad,setBad]=useState(0)

  const hendleIncrementGood = (e) => {
      const{name}=e.target

      switch (name) {
        case 'good':
          setGood(state => state + 1)
          break;
        case 'neutral':
          setNeutral(state => state + 1)
          break;
        case 'bad':
          setBad(state => state + 1)
          break;

        default:
          break;
      }
    }


  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const totalFeedback = countTotalFeedback();


   const countPositiveFeedbackPercentage  = () =>(Math.round(
      100 * good / totalFeedback - neutral
    ));


      return (
        <>
          <GlobalStyle />
          <Container>
          <Section title={'Please leave feedback'}>
              <Feedback good={good} neutral={neutral} bad={bad} onLeaveFeedback={ hendleIncrementGood} />
                  </Section>
                  <Section title={'Statistics'}>
                       {totalFeedback>0? <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback } positivePercentage={countPositiveFeedbackPercentage()}/>:<Notifications message={'There is no feedback'} />}

                 </Section>
            </Container>
            </>
        );
    };






