import React, { Component } from 'react'

class Deck extends Component {
  state = {
    deckOfCards: [],
    valueOfCard: [
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
      'Bane',
      'Heart',
      'Lord'
    ],
    suitOfCard: ['Kings', 'Crooks', 'Coin', 'Beasts', 'Spaids']
  }

   buildDeck = () => {
    for (let cardValue = 0; cardValue < this.state.valueOfCard.length; cardValue++) {
      console.log(cardValue)
      for (let cardSuit = 0; cardSuit < this.state.suitOfCard.length; cardSuit++) {
        console.log(cardSuit)
  
        let cardText = this.state.valueOfCard[cardValue] + ' of ' + this.state.suitOfCard[cardSuit]
  
        console.log(cardText)
        
        this.setState ({
          deckOfCards: this.state.deckOfCards.concat(cardText)
        })
      }
      console.log(this.state.deckOfCards)
    }
  
  
  
    render() {
      return (
      <>
        <main>
          <h1 class="hello-world" />
          <section id="draw">
            <p>Click to draw a card</p>
          </section>
          <ul />
        </main>
      </>
    )
  }
}

export default Deck


