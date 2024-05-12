import logo from './logo.svg';
import './App.css';
import PoolList from './Pools.js';
import Chain from './Chain.js';
function App() {
	
	
	const chainList = () => {
		return(
			PoolList.map(i => 
				<div className="OuterBox" key = {i.id}>
					<Chain  type={i.type} chain={i.chain} fbomb={i.fbomb} dex ={i.dex} dexToken={i.dexToken} pools = {i.pool} rpc={i.rpc} refPool = {i.refPool}/>
				</div>
			)
		);
	};
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo}  alt="logo" />
    	<label> Farms on Chains </label>
      </header>
      <div className="main">
       {chainList()}
      </div>
    </div>
  );
}

export default App;
