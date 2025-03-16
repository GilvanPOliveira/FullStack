import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props); 
    this.state = { // tempo do relógio
      minutes: 0,
      seconds: 30,
      isTimeUp: false,
    };
    this.timerID = null; // adiciona uma variável para manter o ID do timer
  }

  componentDidUpdate(prevProps, prevState) {
    // verifica se o tempo chegou a zero
    if (!prevState.isTimeUp && this.state.isTimeUp) {
      if (this.props.onTimeUp) {
        this.props.onTimeUp(); // chama a função quando o tempo acabar
      }
    }
  }
  
  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      this.stopTimer(); // parar o timer quando o tempo acabar
      this.setState({ isTimeUp: true });
    } else {
      if (this.state.seconds === 0) {
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 59,
        });
      } else {
        this.setState({ seconds: this.state.seconds - 1 });
      }
    }
  }

  resetClock() { // reset do relogio com o tempo dele
    this.stopTimer(); // parar o timer
    this.setState({
      minutes: 0,
      seconds: 30,
      isTimeUp: false,
    });
    this.startTimer(); // iniciar o timer novamente
  }

  render() {
    const { minutes, seconds, isTimeUp } = this.state;
    return (
      <div>
        <p>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
      </div>
    );
  }
}

export default Clock;
