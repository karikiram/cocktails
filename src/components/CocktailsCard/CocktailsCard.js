import React from 'react';
import styles from './CocktailsCard.module.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

var data = require('../../data/cocktaildb.json');

const CocktailsCard = () => (
  <div className={styles.CocktailsCard}>
    {data.map((cocktail, index) => (
      <Slide>
        <div className="row" style={{'backgroundImage': `url(${cocktail.images[0]})`, 'backgroundSize': 'contain'}}>
        
          <h3 className="text-light" key={index}>{cocktail.name}</h3>
          <p>Ingredients:</p>
          <ul>
            <li>Alcohols:</li>
              <ul>
                {cocktail.alcohols.map((alcohol, index) => (
                  <li>{alcohol}</li>
                ))}
              </ul>
            <li>Juices:</li>
              <ul>
                {cocktail.juices.map((juice, index) => (
                  <li>{juice}</li>
                ))}
              </ul>
            <li>Garnish:</li>
              <ul>
                  <li>{cocktail.garnish}</li>
              </ul>
            <li>
                <button type="button" className="btn btn-secondary">Naruči</button>
            </li>
          </ul>
        </div>
        </Slide>
      ))}
  </div>
);

CocktailsCard.propTypes = {};

CocktailsCard.defaultProps = {};

export default CocktailsCard;
