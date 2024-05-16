import React from 'react';
import './products2.css';

const Products2 = (props) => {
    const {details} = props;
    console.log(props);
  return (
    <div>

<figure style={{justifyContent:'center'}} class="snip1418"><img src={details?.image} alt="sample85"/>
  <div class="add-to-cart"> <i class="ion-android-add"></i><span>Add to Cart</span></div>
  <figcaption>
    <h3>{details?.name}</h3>
    <p>All this modern technology just makes people try to do everything at once.</p>
    <div class="price">
      <s>$24.00</s>$19.00
    </div>
  </figcaption><a href="#"></a>
</figure>
    </div>
  )
}

export default Products2