import { useAPR, useLpValue } from './useAbi.js';
import Item from './Item.js';
function Pool ({ type,chain,fbomb,dexToken,pool,rpc,cr }) {
	const {lpvalue} = useLpValue(fbomb, pool,rpc,cr)
	const {apr} = useAPR(type,dexToken,fbomb, pool,rpc,cr,lpvalue)
	return (
	
	<div className="Container">
		<div className="RowItem" ><Item  text={pool.t} /></div>

		<div className="RowItemR"><Item text={apr?apr+"%":"0%"} /></div>
	</div>
	
	);
}
export default Pool;
