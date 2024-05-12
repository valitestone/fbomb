const PoolList =  [
	{
		id: 0,
		chain: 'Fantom',
		rpc: 'https://rpc.ftm.tools',
		fbomb: '0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979',
		dexToken: '0x3Fd3A0c85B70754eFc07aC9Ac0cbBDCe664865A6',
		refPool: '0xB02A933c8Fa52cDfdc86b46c7180Ef025f9DFef4',
		pool: [{t: 'Fbomb/mFtm',
			p:'0x5c1390e5d44EEA3110b0b2375e73302aaC835B82',
			g:'0xb9A18C195874Ab4893B37d702708E652BA6E7054'},
			{t: 'Fbomb/wftm',
			p:'0x5EB26b5206C2948E115deD46462D22bDf5d0547f',
			g:'0x270f6F4B62e8c0D96cD37bb0077664E185FA1a0d'},
			{t: 'Fbomb/MCLB',
			p:'0x68ca64CABbB3d40dBB0de37101A8C0b701f66fD6',
			g:'0x68594d718350516928B09BaeB530162De66D2709'}
		
		
		
		]
		
	},
	{
		id: 1,
		chain: 'Base',
		rpc: 'https://mainnet.base.org',
		fbomb: '0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979',
		dexToken: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
		refPool: '0xbBf71AAD6E1F8D180D3B1D898528654c1d18b2fF',
		pool: [{t: 'Fbomb/WETH',
			p:'0x4F9Dc2229f2357B27C22db56cB39582c854Ad6d5',
			g:'0x76c48576822Cd955C320f5d5A163E738dbFEcc01'},
			{t: 'Fbomb/Aero',
			p:'0xbBf71AAD6E1F8D180D3B1D898528654c1d18b2fF',
			g:'0x12e45be50dd4f3bc430b65d399b1e3b90275661c'},
			{t: 'Fbomb/wstETH',
			p:'0xBd1F3d188de7eE07B1b323C0D26D6720CAfB8780',
			g:'0x56b13a025ee67fe7645cd4c09033673e3cb207ba'}
		
		
		
		]
		
	}
];
export default PoolList;
