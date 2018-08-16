import {Bar, Line, Scatter} from 'react-chartjs-2'
import axios from 'axios'

const url = 'https://api.coindesk.com/v1/bpi/historical/close.json'

const Index = ({price}) => (
  
  <div>
  <Line data={price}/>
  </div>
)

Index.getInitialProps = async ({ req }) => {
  let response = await axios.get(url)
  // console.log(response.data.bpi)
  var price = []
  var time = []
  Object.keys(response.data.bpi).map(function(k) {
    time.push(k)
    price.push(response.data.bpi[k])
  })
  const chartdata = { 
    labels: time,
    datasets: [
      {
        label: 'Bitcoin price in USD',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: price
      }
    ]
  }
  console.log(chartdata)

  return { price: chartdata}
}



export default Index