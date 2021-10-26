import React from 'react';
import Cart from './Cart';

function App(){
    let details=
    [
{
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"Fancy Product",
        rating:"⭐⭐⭐",
        price:"$40.00 - $80.00",
        footer:'View options'
},
{
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"Special Item",
        rating:"⭐⭐⭐⭐⭐",
        price:"$20.00-$18.00",
        footer:'Add to cart'
},
{
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"Sale Item",
        rating:"⭐⭐⭐⭐",
        price:"$50.00-$25.00",
        footer:"Add to cart"
},
{
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"Popular Item",
        rating:"⭐⭐⭐",
        price:"$40.00",
        footer:'Add to cart'
  },
  {
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"sale item",
        rating:"⭐⭐",
        price:"$50.00-$25.00",
        footer:'Add to cart'
},
{
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"Fancy Product",
        rating:"⭐⭐⭐⭐",
        price:"$120.00 - $280.00",
        footer:'View options'
},
{
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"Special Item",
        rating:"⭐⭐⭐",
        price:"$20.00-$18.00",
        footer:'Add to cart'
},
{
        image:'https://dummyimage.com/450x300/dee2e6/6c757d.jpg',
        title:"Popular Item",
        rating:"⭐⭐⭐⭐",
        price:"$40.00",
        footer:'Add to cart'
}];
return(
  <div>
      <header>
          <Cart jsonCard={details}/>
      </header>
  </div>
)}
export default App;
