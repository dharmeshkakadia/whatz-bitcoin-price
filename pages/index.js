const Index = ({price}) => (  
  <div>
    <form id="price" method="get" action="/price" class="form-inline">
          <input id="symbol" type="text" placeholder="BTC/ETH/...etc" name="symbol"></input>
          <button>Get Price</button>
    </form>
  </div>
)

export default Index