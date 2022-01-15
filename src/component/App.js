
import React from 'react'
import Feedback from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notifications from './Notifications/Notifications'

import Container from "./Styled/Container";
import GlobalStyle from "./Styled/GlobalStyled";

class App extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    hendleIncrement = (e) => {
        this.setState(prevState => ({ [e.target.value]: prevState[e.target.value] + 1 }));
    };

   countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
    countPositiveFeedbackPercentage  = () =>(Math.round(
      100 * this.state.good / this.countTotalFeedback() - this.state.neutral
    ));


    render() {
        const { good, neutral, bad,  } = this.state;
        const value = Object.keys(this.state)
      return (
        <>
          <GlobalStyle />
          <Container>
          <Section title={'Please leave feedback'}>
              <Feedback options={value} onLeaveFeedback={ this.hendleIncrement} />
                  </Section>
                  <Section title={'Statistics'}>
                       {this.countTotalFeedback()>0? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback() } positivePercentage={this.countPositiveFeedbackPercentage()}/>:<Notifications message={'There is no feedback'} />}

                 </Section>
            </Container>
            </>
        );
    };



}

export default App;
