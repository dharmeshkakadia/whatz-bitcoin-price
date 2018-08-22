import React from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2';

const url = 'https://min-api.cryptocompare.com/data/histoday?tsym=USD&limit=10&fsym='

const Price = ({price}) => (
  <div>
    <Line data={price}/>
  </div>
)

Price.getInitialProps = async ({ query: { symbol } }) => {
  symbol = symbol.trim().toUpperCase()
  let response = await axios.get(url+symbol)
  // console.log(response.data)
  var price = []
  var time = []
  response.data.Data.forEach(element => {
    time.push(new Date(element.time*1000))
    price.push(element.close)
  });

  const chartdata = { 
      labels: time,
      datasets: [
        {
          label: symbol + ' price in USD (at close)',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: price
        }
      ]
    }
  return {price: chartdata}
}

export default Price