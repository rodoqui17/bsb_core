var ABI = [
	{
		"inputs": [],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "num",
				"type": "uint256"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

//var contract_address = "0x0790995c0AB47d34b2B0cCb605dDA1DBD31e7A2D";
var contract_address = "0x290B18B74F987c848Ad31CCD89f9bf429302D3f6";
exports.ABI = ABI;
exports.contract_address = contract_address;
