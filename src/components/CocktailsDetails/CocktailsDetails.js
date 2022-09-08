import React from 'react';
import PropTypes from 'prop-types';
import styles from './CocktailsDetails.module.css';

const CocktailsDetails = (props) => (
  <div className={styles.CocktailsDetails}>
    <h3 className="text-light">{props.cocktail.name}</h3>
          <p>Ingredients:</p>
          <ul>
            <li>Alcohols:</li>
              <ul>
                {props.cocktail.alcohols.map((alcohol) => (
                  <li>{alcohol}</li>
                ))}
              </ul>
            <li>Juices:</li>
              <ul>
                {props.cocktail.juices.map((juice) => (
                  <li>{juice}</li>
                ))}
              </ul>
            <li>Garnish:</li>
              <ul>
                  <li>{props.cocktail.garnish}</li>
              </ul>
            <li>
                <button type="button" className="btn btn-secondary">Naruči</button>
            </li>
          </ul>
  </div>
);

CocktailsDetails.propTypes = {};

CocktailsDetails.defaultProps = {};

export default CocktailsDetails;