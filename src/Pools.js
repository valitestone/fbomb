const PoolList =  [
	{
		id: 0,
		chain: 'Fantom',
		rpc: 'https://rpc.ftm.tools',
		fbomb: '0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979',
		dex: 'Equalizer',
		type:2,
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
		dex: 'Aerodrome',
		type: 1,
		dexToken: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
		refPool: '0xbBf71AAD6E1F8D180D3B1D898528654c1d18b2fF',
		pool: [{t: 'Fbomb/WETH',
			p:'0x4F9Dc2229f2357B27C22db56cB39582c854Ad6d5',
			g:'0x76c48576822Cd955C320f5d5A163E738dbFEcc01'},
			{t: 'Fbomb/Aero  ',
			p:'0xbBf71AAD6E1F8D180D3B1D898528654c1d18b2fF',
			g:'0x12e45be50dd4f3bc430b65d399b1e3b90275661c'},
			{t: 'Fbomb/wstETH',
			p:'0xBd1F3d188de7eE07B1b323C0D26D6720CAfB8780',
			g:'0x56b13a025ee67fe7645cd4c09033673e3cb207ba'}
		
		
		
		]
		
	},
	{
		id: 4,
		chain: 'Base',
		rpc: 'https://mainnet.base.org',
		fbomb: '0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979',
		dex: 'Equalizer',
		type: 2,
		dexToken: '0x54016a4848a38f257B6E96331F7404073Fd9c32C',
		refPool: '0xa7802bbd9a6e38e0e209aa6f43a8ddd4d35c1111',
		pool: [{t: 'Fbomb/Scale',
			p:'0xa7802bbd9a6e38e0e209aa6f43a8ddd4d35c1111',
			g:'0xeB15e159359e898e9558d450fEB11aAa07D3643D'},
			
		
		]
		
	},
	{
		id: 2,
		chain: 'Arbitium',
		rpc: 'https://rpc.ankr.com/arbitrum',
		fbomb: '0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979',
		dex: 'Ramses',
		type: 2,
		dexToken: '0xAAA6C1E32C55A7Bfa8066A6FAE9b42650F262418',
		refPool: '0xe3e757bc5af026ae80095cdaace0b51a61f5e639',
		pool: [{t: 'Fbomb/WETH',
			p:'0xD46F8323E6E5540746E2df154cc1056907e89C7A',
			g:'0x288ecbaaedc9cdb15ca96ad35c3f9f1c4d171523'},
			{t: 'Fbomb/Ram  ',
			p:'0xe3e757bc5af026ae80095cdaace0b51a61f5e639',
			g:'0x0495d0D764207ac7743AeccfFb0Ef0E166800e98'},
			{t: 'Fbomb/MCLB',
			p:'0x0d41bcC40c0d2d7791FA6C7b02c7aB0929BA999C',
			g:'0x79549B437Ceb3dD35184209213795eB941D324aD'}
		
		
		
		]
		
	},
	{
		id: 3,
		chain: 'Optimism',
		rpc: 'https://optimism-rpc.publicnode.com',
		fbomb: '0x74ccbe53F77b08632ce0CB91D3A545bF6B8E0979',
		dex: 'Velodrome',
		type: 1,
		dexToken: '0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db',
		refPool: '0x0af32614EEa68B8D2232B9592FbdB6512ab6DA73',
		pool: [{t: 'Fbomb/WETH',
			p:'0x814e2d6E8f7477329BB6C196111A08464ABE11DD',
			g:'0x9f7Dc808aE9C08afF2bf71cb846B52236403e9A9'},
			{t: 'Fbomb/Velo  ',
			p:'0x0af32614EEa68B8D2232B9592FbdB6512ab6DA73',
			g:'0x80e79722F75e08d4D3EC5D138c03d9A59465b975'},
			{t: 'Fbomb/opxVelo  ',
			p:'0x71aa84275c7704D96c9cb29aAB38AC37eC320e3c',
			g:'0x9f79f5E3D260810281D9B1C67c2A0b7f8DdC2423'}
		
		
		
		]
		
	}
];
export default PoolList;
