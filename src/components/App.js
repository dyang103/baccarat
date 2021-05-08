import './App.css';
import React from 'react';
import Deck from './deck';
import Quotes from './quotes';
import Jokes from './jokes';
import Ghibli from './ghibli';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Baccarat Card Game
        </h1>
        <h2>
          Rules
        </h2>
        <p>
          Baccarat is a random gambling card game where the user places bets between the bank and the player. 
          Each round, the dealer will draw either 2-3 cards for both the bank and the player. The cards 2-9 retain their number 
          value, ace has a value of 1, and the cards 10 and face cards have values of 0. The values of the cards on the bank
          and player side are added together, and if the value is greater than 10 then the tens digit is dropped.
          The goal of the game is to correctly predict which side will have a value closer to 9, or if they will tie. 
          Correctly guessing which side wins will add the betted value to the score, while losing will subtract it.
          Correctly guessing a tie will net a score of 8 times the amount bet.
        </p>
        <p>
          Get in the right mindset with this inspirational quote!
        </p>
        <p>
          {this.props.quote}
        </p>
        <p>
          Or perhaps you'd like a joke instead
        </p>
        <p>
          {this.props.joke}
        </p>
        <p>
          {this.props.punchline}
        </p>
        <p>
          Need a movie to watch tonight?
        </p>
        <p>
          How about {this.props.ghibli}
        </p>
      </div>
    );
  }
}

class Bets extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div onChange = {this.props.betClick}>
          <p>Place your bets!</p>
          <label htmlFor = "player">Player</label>
          <input type = "radio" name = "bet" value = "player" id = "player" />
          <label htmlFor = "bank">Bank</label>
          <input type = "radio" name = "bet" value = "bank" id = "bank" />
          <label htmlFor = "tie">Tie</label>
          <input type = "radio" name = "bet" value = "tie" id = "tie" />
        </div>
        <div onChange = {this.props.amountClick}>
          <p>Change Bet Amount</p>
          <label htmlFor = "zero">0</label>
          <input type = "radio" name = "amount" value = "zero" id = "zero" />
          <label htmlFor = "twentyfive">25</label>
          <input type = "radio" name = "amount" value = "twentyfive" id = "twentyfive" />
          <label htmlFor = "fifty">50</label>
          <input type = "radio" name = "amount" value = "fifty" id = "fifty" />
          <label htmlFor = "onehundred">100</label>
          <input type = "radio" name = "amount" value = "onehundred" id = "onehundred" />
        </div>
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return (
      <div>
        <img src = {this.props.card.img} alt = "Card"/>
      </div>
    );
  }
}

class Bank extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>
        <table>
          <caption>
            Bank
          </caption>
          <tbody>
            <tr>
              <td>
                <Card card = {this.props.cards.first}/>
              </td>
              <td>
                <Card card = {this.props.cards.second}/>
              </td>
              {this.props.third ? 
                <td>
                  <Card card = {this.props.cards.fifth}/>
                </td> : null}
            </tr>
          </tbody>
        </table>
        <p>Bank Value : {this.props.val}</p>
      </div>
    );
  }

}

class Player extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <div>
        <table>
          <caption>
            Player
          </caption>
          <tbody>
            <tr>
              <td>
                <Card card = {this.props.cards.third}/>
              </td>
              <td>
                <Card card = {this.props.cards.fourth}/>
              </td>
              {this.props.third ? 
                <td>
                  <Card card = {this.props.cards.sixth}/>
                </td> : null}
            </tr>
          </tbody>
        </table>
        <p>Player Value : {this.props.val}</p>
      </div>
    );
  }

}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.values = {
      'ACE' : 1,
      '2' : 2,
      '3' : 3,
      '4' : 4,
      '5' : 5,
      '6' : 6,
      '7' : 7,
      '8' : 8,
      '9' : 9,
      '10' : 0,
      'JACK' : 0,
      'QUEEN' : 0,
      'KING' : 0,
    }
    this.state = {
      deckid : '',
      cards : {
        first : {
          value : 0,
          img : '',
        },
        second : {
          value : 0,
          img : '',
        },
        third : {
          value : 0,
          img : '',
        },
        fourth : {
          value : 0,
          img : '',
        },
        fifth : {
          value : 0,
          img : '',
        },
      },
      player : 0,
      bank : 0,
      playerWin : false,
      bankWin : false,
      tie : false,
      playerBet : false,
      bankBet : false,
      tieBet : false,
      bet : 0,
      score : 0,
      playerThird : false,
      bankThird : false,
      quote : '',
      joke : '',
      punchline : '',
      ghibli : [],
      movie : '',
    };

    this.getDeck = this.getDeck.bind(this);
    this.getCards = this.getCards.bind(this);
    this.onClickPlay = this.onClickPlay.bind(this);
    this.getPlayerVal = this.getPlayerVal.bind(this);
    this.getBankVal = this.getBankVal.bind(this);
    this.betClick = this.betClick.bind(this);
    this.amountClick = this.amountClick.bind(this);
    this.getQuote = this.getQuote.bind(this);
    this.getJoke = this.getJoke.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.getFilm = this.getFilm.bind(this);
  }

  async getQuote() {
    let data = await Quotes.getQuote();
    this.setState({quote : data.data.quotes[0].text});
  }

  async getMovies() {
    let data = await Ghibli.getMovie();
    this.setState({ghibli : data.data});
  }

  getFilm() {
    this.setState({movie : this.state.ghibli[Math.floor(Math.random() * 21)].title})
  }

  async getJoke() {
    let data = await Jokes.getJoke();
    this.setState({
      joke : data.data.setup,
      punchline : data.data.punchline,
    });
  }

  async getDeck() {
    let data = await Deck.getDeck();
    this.setState({deckid : data.data.deck_id});
  }

  async getCards() {
    let data = await Deck.draw(this.state.deckid, 6);
    this.setState({cards : {
      first : {
        value : this.values[data.data.cards[0].value],
        img : data.data.cards[0].image,
      },
      second : {
        value : this.values[data.data.cards[1].value],
        img : data.data.cards[1].image,
      },
      third : {
        value : this.values[data.data.cards[2].value],
        img : data.data.cards[2].image,
      },
      fourth : {
        value : this.values[data.data.cards[3].value],
        img : data.data.cards[3].image,
      },
      fifth : {
        value : this.values[data.data.cards[4].value],
        img : data.data.cards[4].image,
      },
      sixth : {
        value : this.values[data.data.cards[5].value],
        img : data.data.cards[5].image,
      },
    }});
  }

  getPlayerVal() {
    let val = this.state.cards.third.value + this.state.cards.fourth.value;
    if (val >= 10) {
      val = val % 10;
    }
    if (val <= 5) {
      val += this.state.cards.sixth.value;
      if (val >= 10) {
        val = val % 10;
      }
      this.setState({
        player : val,
        playerThird : true,
      });
    } else {
      this.setState({
        player : val,
        playerThird : false,
      })
    }
  }

  getBankVal() {
    let val = this.state.cards.first.value + this.state.cards.second.value;
    if (val >= 10) {
      val = val % 10;
    };
    if (!this.state.playerThird) {
      if (val <= 5) {
        val += this.state.cards.fifth.value;
        if (val >= 10) {
          val = val % 10;
        };
        this.setState({
          bank : val,
          bankThird : true,
        });
      } else {
        this.setState({
          bank : val,
          bankThird : false,
        });
      }
    } else {
      if (val <= 2) {
        val += this.state.cards.fifth.value;
        if (val >= 10) {
          val = val % 10;
        };
        this.setState({
          bank : val,
          bankThird : true,
        });
      } else if (val === 3 && this.state.cards.sixth.value !== 8) {
        val += this.state.cards.fifth.value;
        if (val >= 10) {
          val = val % 10;
        };
        this.setState({
          bank : val,
          bankThird : true,
        });
      } else if (val === 4 && (this.state.cards.sixth.value <= 1 || this.state.cards.sixth.value >= 8)) {
        val += this.state.cards.fifth.value;
        if (val >= 10) {
          val = val % 10;
        };
        this.setState({
          bank : val,
          bankThird : true,
        });
      } else if (val === 5 && (this.state.cards.sixth.value <= 3 || this.state.cards.sixth.value >= 8)) {
        val += this.state.cards.fifth.value;
        if (val >= 10) {
          val = val % 10;
        };
        this.setState({
          bank : val,
          bankThird : true,
        });
      } else if (val === 6 && (this.state.cards.sixth.value <= 5 || this.state.cards.sixth.value >= 8)) {
        val += this.state.cards.fifth.value;
        if (val >= 10) {
          val = val % 10;
        };
        this.setState({
          bank : val,
          bankThird : true,
        });
      } else {
        this.setState({
          bank : val,
          bankThird : false,
        });
      }
    }
  }

  getWinner() {
    let score = this.state.score;
    if (this.state.player === this.state.bank) {
      if (this.state.tieBet) {
        score += 8 * this.state.bet;
      } else {
        score -= this.state.bet;
      }
      this.setState({
        playerWin : false,
        bankWin : false,
        tie : true,
        score : score,
      });
    } else if (this.state.player > this.state.bank) {
      if (this.state.playerBet) {
        score += this.state.bet;
      } else {
        score -= this.state.bet;
      }
      this.setState({
        playerWin : true,
        bankWin : false,
        tie : false,
        score : score,
      });
    } else {
      if (this.state.bankBet) {
        score += this.state.bet;
      } else {
        score -= this.state.bet;
      }
      this.setState({
        playerWin : false,
        bankWin : true,
        tie : false,
        score : score,
      });
    }
  }
  
  betClick(e) {
    if (e.target.value === "player") {
      this.setState({
        playerBet : true,
        bankBet : false,
        tieBet : false,
      });
    } else if (e.target.value === "bank") {
      this.setState({
        playerBet : false,
        bankBet : true,
        tieBet : false,
      });
    } else {
      this.setState({
        playerbet : false,
        bankBet : false,
        tieBet : true,
      });
    }
  }

  amountClick(e) {
    if (e.target.value === "zero") {
      this.setState({
        bet : 0,
      });
    } else if (e.target.value === "twentyfive") {
      this.setState({
        bet : 25,
      });
    } else if (e.target.value === "fifty") {
      this.setState({
        bet : 50,
      });
    } else {
      this.setState({
        bet : 100,
      });
    }
  }

  async onClickPlay(e) {
    await this.getDeck();
    await this.getCards();
    await this.getQuote();
    await this.getJoke();
    this.getFilm();
    this.getPlayerVal();
    this.getBankVal();
    this.getWinner();
  }

  async componentDidMount() {
    await this.getDeck();
    await this.getCards();
    await this.getQuote();
    await this.getJoke();
    await this.getMovies();
    this.getFilm();
  }


  render() {
    return (
      <div>
        <Header quote = {this.state.quote} joke = {this.state.joke} punchline = {this.state.punchline} ghibli = {this.state.movie} />
        <button onClick = {this.onClickPlay}>Play</button>
        <Bets betClick = {this.betClick} amountClick = {this.amountClick}/>
        <p>Score : {this.state.score}</p>
        {this.state.playerWin ? <p>The player has won this round</p> : null}
        {this.state.bankWin ? <p>The bank has won this round</p> : null}
        {this.state.tie ? <p>There was a tie this round</p> : null}
        <Bank cards = {this.state.cards} third = {this.state.bankThird} val = {this.state.bank}/>
        <Player cards = {this.state.cards} third = {this.state.playerThird} val = {this.state.player}/>
      </div>
    );
  }
}

export default App;
