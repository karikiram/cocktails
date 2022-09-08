import React from 'react';
import styles from './CocktailsCard.module.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import CocktailsDetails from '../CocktailsDetails/CocktailsDetails.js';

var data = require('../../data/cocktaildb.json');

const CocktailsCard = () => {
  return (
  <div className='slideContainer'>
    <div className={styles.CocktailsCard}>
      {data.map((cocktail, index) => (
        <Slide>
          {cocktail.images.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                {index.toString() === '0' && 
                  <div style={{'backgroundImage': `url(${slideImage})`,'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain'}}>
                    <CocktailsDetails cocktail={cocktail}/>
                  </div>
                }
                {index.toString() !== '0' && 
                  <div style={{'backgroundImage': `url(${slideImage})`,'backgroundRepeat': 'no-repeat', 'backgroundSize': 'contain', 'width': '100%', 'height': '0', 'paddingTop': '70%'}}>   
                  </div>
                }
              </div>
            ))}
          </Slide>
        ))}
    </div>
  </div>
  )
          };

CocktailsCard.propTypes = {};

CocktailsCard.defaultProps = {};

export default CocktailsCard;