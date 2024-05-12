import style from './App.css'
import { useConvertRate } from './useAbi.js';
import Pool from './Pool.js';
function Chain ({ type,chain, rpc,dex,dexToken, fbomb, pools, refPool }) {
	let tokenIndex =0;
	if(dex=='Equalizer'){tokenIndex=1}else{tokenIndex=0}
	const {status, rate} = useConvertRate(refPool, rpc, tokenIndex)

	const viewPool = () => {
		return(
			pools.map(p => {
			
			return(
				<div className="Row" key = {p.t}>
					<Pool className="Row" type={type} chain={chain} dexToken={dexToken} fbomb={fbomb} pool={p} rpc={rpc} cr = {rate}/>
				</div>
			)}
			)
		);
	};
	return (
	<div className="Box">
		<div>
			<label>Chain: {chain} </label>
			<label> --- {dex} </label>
		</div>
		<div className="Box">
		{viewPool()}
		</div>
	</div>
	);
}
export default Chain;
