(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),h=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=h(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=h(n),b=a,p=d["".concat(r,".").concat(b)]||d[b]||u[b]||i;return n?o.a.createElement(p,c(c({ref:t},l),{},{components:n})):o.a.createElement(p,c({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/transaction-stages-8bcdab5873c9062a0705324908afa456.png"},68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return h}));var a=n(3),o=n(7),i=(n(0),n(190)),r={id:"transaction_stage",title:"Transaction Stages",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/transaction-state-explain.md",keywords:["transaction"]},c={unversionedId:"sending-tx/en/transaction_stage",id:"sending-tx/en/transaction_stage",isDocsHomePage:!1,title:"Transaction Stages",description:"Sending transactions is one of the most frequent operations in the blockchain world. The transactions go through multiple stages from the time they are constructed to the time they are finally confirmed on the chain. A good understanding of the stages of a transaction will help users and developers better identify problems with sending transactions and ultimately ensure that transactions are successfully confirmed.",source:"@site/docs/sending-tx/en/transaction-state-explain.md",sourceDirName:"sending-tx/en",slug:"/sending-tx/en/transaction_stage",permalink:"/sending-tx/en/transaction_stage",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/transaction-state-explain.md",version:"current",frontMatter:{id:"transaction_stage",title:"Transaction Stages",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/en/transaction-state-explain.md",keywords:["transaction"]},sidebar:"docs",previous:{title:"Transaction Explanation",permalink:"/sending-tx/en/transaction_explain"},next:{title:"Why Transaction is Pending?",permalink:"/sending-tx/en/why_tx_is_pending"}},s=[{value:"Detailed Explanation of the Transaction Stages",id:"detailed-explanation-of-the-transaction-stages",children:[{value:"Preparing transactions &amp; sending the account\u2018s private key and address",id:"preparing-transactions--sending-the-accounts-private-key-and-address",children:[]},{value:"Prepare the transaction metadata, sign, and encode it",id:"prepare-the-transaction-metadata-sign-and-encode-it",children:[]},{value:"Send RawTransaction to the node transaction pool",id:"send-rawtransaction-to-the-node-transaction-pool",children:[]},{value:"Packing transactions by miners",id:"packing-transactions-by-miners",children:[]},{value:"Delay block execution",id:"delay-block-execution",children:[]},{value:"Confirm the transaction after a certain number of Epochs",id:"confirm-the-transaction-after-a-certain-number-of-epochs",children:[]},{value:"Transaction finalized because of PoS chain",id:"transaction-finalized-because-of-pos-chain",children:[]}]},{value:"FAQ",id:"faq",children:[{value:"Why is the transaction failed to send?",id:"why-is-the-transaction-failed-to-send",children:[]},{value:"Why has the transaction not been executed on the chain?",id:"why-has-the-transaction-not-been-executed-on-the-chain",children:[]},{value:"Can a transaction be canceled or replaced?",id:"can-a-transaction-be-canceled-or-replaced",children:[]},{value:"How to speed up a transaction?",id:"how-to-speed-up-a-transaction",children:[]}]}],l={toc:s};function h(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sending transactions is one of the most frequent operations in the blockchain world. The transactions go through multiple stages from the time they are constructed to the time they are finally confirmed on the chain. A good understanding of the stages of a transaction will help users and developers better identify problems with sending transactions and ultimately ensure that transactions are successfully confirmed."),Object(i.b)("p",null,"Transactions go through the following stages from construction to confirmation."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Preparing the private key and address of the sender (from) of the transaction"),Object(i.b)("li",{parentName:"ol"},"Preparing the metadata of the transaction, assemble it, then sign it and encode it -> RawTransaction"),Object(i.b)("li",{parentName:"ol"},"Sending RawTransaction to fullnode via cfx_sendRawTransaction RPC method -> transaction is put into transaction pool"),Object(i.b)("li",{parentName:"ol"},"The transaction is packed into a block by a miner -> Minded in Block"),Object(i.b)("li",{parentName:"ol"},"Deferring 5 epochs -> Executed"),Object(i.b)("li",{parentName:"ol"},"Waiting for about 50 epochs -> Confirmed"),Object(i.b)("li",{parentName:"ol"},"Waiting to be referenced by PoS chain -> Finalized")),Object(i.b)("p",null,Object(i.b)("img",{alt:"image|347x500",src:n(207).default})," "),Object(i.b)("h2",{id:"detailed-explanation-of-the-transaction-stages"},"Detailed Explanation of the Transaction Stages"),Object(i.b)("h3",{id:"preparing-transactions--sending-the-accounts-private-key-and-address"},"Preparing transactions & sending the account\u2018s private key and address"),Object(i.b)("p",null,"All transactions sent need to be signed with a private key in order to be accepted and successfully executed by the blockchain. Therefore, before sending a transaction, you need to prepare the private key of the sender, which can be used to derive the address of the account."),Object(i.b)("p",null,"In addition, a certain CFX fee is required to send a transaction, so the sender's account needs to have some CFX in order to send the transaction successfully. The CFX of the testnet can be obtained through the faucet."),Object(i.b)("p",null,"There is one situation in the Conflux network that does not require the sender to pay the transaction fee."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The recipient of the transaction is a contract, and"),Object(i.b)("li",{parentName:"ol"},"Someone has sponsored the gas and storage of the contract, and"),Object(i.b)("li",{parentName:"ol"},"The address of the sender of the transaction is on the contract's gas whitelist (the whitelist can be fully opened so that everyone can be sponsored), and"),Object(i.b)("li",{parentName:"ol"},"The gas fee for the transaction is less than the maximum amount of gas sponsorship set by the contract sponsor")),Object(i.b)("p",null,"To learn more details about Conflux sponsorship, you can refer to the introduction of the SponsorWhitelistControl in the built-in contract."),Object(i.b)("h3",{id:"prepare-the-transaction-metadata-sign-and-encode-it"},"Prepare the transaction metadata, sign, and encode it"),Object(i.b)("p",null,"After preparing the private key for the sending account, you need to construct the transaction. The first step in constructing the transaction is to determine the meta information of the transaction according to the transaction details, including:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"to: the recipient of the transaction"),Object(i.b)("li",{parentName:"ul"},"nonce: the sequence number of the transaction"),Object(i.b)("li",{parentName:"ul"},"value: the transaction amount, valued in Drip"),Object(i.b)("li",{parentName:"ul"},"data: transaction data"),Object(i.b)("li",{parentName:"ul"},"chainId: the chain ID of the transaction execution"),Object(i.b)("li",{parentName:"ul"},"epochHeight: the height that the transaction execution targets"),Object(i.b)("li",{parentName:"ul"},"gas: maximum gas amount"),Object(i.b)("li",{parentName:"ul"},"gasPrice: the gas price"),Object(i.b)("li",{parentName:"ul"},"storageLimit: storage staking limit")),Object(i.b)("p",null,"If you want to know the meaning of each keyword of the transaction and how to specify it, please refer to ",Object(i.b)("a",{parentName:"p",href:"http://developer.confluxnetwork.org/sending-tx/en/transaction_explain/?accessToken=eyJhbGciOiJIUzI1NiIsImtpZCI6ImRlZmF1bHQiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhY2Nlc3NfcmVzb3VyY2UiLCJleHAiOjE2MzkzNjIyNTAsImciOiJrM3RkMzl3UmNydHZZNnlUIiwiaWF0IjoxNjM5MzYxOTUwLCJ1c2VySWQiOjUzMDEyMDA1fQ.OGlihO7cyqo_5UqcFlB8BGugCywJ_Sb3g95r2IwO4Gs"},"Conflux Transaction Explanation")),Object(i.b)("p",null,"After the meta-information is prepared, they need to be encoded in a fixed order by RLP encoding and generate the hash. Then the transaction signature is obtained from the secp256k1 signing operation by using the private key."),Object(i.b)("p",null,"Finally, the meta information and signature are combined for RLP encoding and converted to hex format to get the raw transaction (RawTransaction) that can be sent to the Conflux nodes."),Object(i.b)("p",null,"Usually, the wallet and SDK will automatically assemble, sign, and encode the transactions without manual processing."),Object(i.b)("h3",{id:"send-rawtransaction-to-the-node-transaction-pool"},"Send RawTransaction to the node transaction pool"),Object(i.b)("p",null,"The raw transaction is sent to the nodes via the full node's cfx_sendRawTransaction RPC method. The node will first check the transaction. If there is a problem with the constructed transaction, it will fail. Possible failures are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"set nonce incorrectly (reuse it or set a too large value)"),Object(i.b)("li",{parentName:"ol"},"set a too large value to gas, generally more than 1500w"),Object(i.b)("li",{parentName:"ol"},"created wrong signature"),Object(i.b)("li",{parentName:"ol"},"used a wrong chainId"),Object(i.b)("li",{parentName:"ol"},"set epochHeight more than 100,000 away from the current value"),Object(i.b)("li",{parentName:"ol"},"Other: the transaction pool is full")),Object(i.b)("p",null,"Note that this method does not check whether the sender's balance is sufficient to pay the transaction and the processing fee, and the transaction can be sent successfully even if the sender's account balance is insufficient."),Object(i.b)("p",null,"If the check passes, the transaction will be put into the node's transaction pool and the hash of the transaction will be returned."),Object(i.b)("p",null,"At this point, the transaction can be retrieved through the RPC method cfx_getTransactionByHash, but since the transaction has yet been packaged, fields related to the block information (blockHash) and the execution result (contractCreated, status, transactionIndex) of the transaction are empty."),Object(i.b)("p",null,"Since the transaction has not been executed, the receipt for the transaction has not been generated."),Object(i.b)("h3",{id:"packing-transactions-by-miners"},"Packing transactions by miners"),Object(i.b)("p",null,"Transactions in the transaction pool may have three states."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"nonce skipping"),Object(i.b)("li",{parentName:"ol"},"insufficient balance for transaction"),Object(i.b)("li",{parentName:"ol"},"ready to pack")),Object(i.b)("p",null,"Transactions in the first two states will be considered as pending in the pool and will not become ready to pack until all the nonces before this transaction nonce have been executed, or until the balance is sufficient."),Object(i.b)("p",null,"Transactions that fulfill the packing condition will be packed into blocks by miners in roughly the order of gasPrice, from highest to lowest."),Object(i.b)("h3",{id:"delay-block-execution"},"Delay block execution"),Object(i.b)("p",null,"The Conflux network has a block execution delaying mechanism, which means that after a block is packed, it will not be executed immediately, but be delayed by 5 Epochs before it is executed. The essence of block execution is that all transactions in the block are executed."),Object(i.b)("p",null,"The transaction information, obtained by the cfx_getTransactionByHash method after the transaction execution, contains the blockHash, status, and other keywords."),Object(i.b)("p",null,"At this point, you can also get the receipt of the transaction via the cfx_getTransactionReceipt method."),Object(i.b)("p",null,"The execution of a transaction won't be always successful. The status of the transaction can be determined by the status field of the transaction or the outcomeStatus field of the receipt."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"0 - execution succeeded"),Object(i.b)("li",{parentName:"ul"},"1 - execution failed"),Object(i.b)("li",{parentName:"ul"},"2 or null - the transaction is not executed and is skipped")),Object(i.b)("h3",{id:"confirm-the-transaction-after-a-certain-number-of-epochs"},"Confirm the transaction after a certain number of Epochs"),Object(i.b)("p",null,"That a transaction is executed does not mean that the status of the transaction will not change anymore. Due to the chain structure of blockchain, the blockchain may fork or shift the main chain due to the arrival or creation of new blocks, which may revert certain transactions."),Object(i.b)("p",null,"Usually, after the transaction blocks are packaged, the transaction cannot be finally confirmed until a certain number of new blocks are generated."),Object(i.b)("p",null,"In the Conflux network, you can compare the epochNumber in the transaction receipt with the latest confirmed epochNumber. If the latest confirmed epochNumber is larger, then the transaction is confirmed."),Object(i.b)("p",null,"You can use the cfx_epochNumber method and pass the latest_confirmed parameter, to get the latest confirmed EpochNumber"),Object(i.b)("h3",{id:"transaction-finalized-because-of-pos-chain"},"Transaction finalized because of PoS chain"),Object(i.b)("p",null,"From v1.2.0, Conflux has introduced a PoS finality mechanism to prevent 51% attacks, so that blocks will not be reverted in case of low hashing power."),Object(i.b)("p",null,"By introducing a separate PoS chain to finalize the PoW blocks, the state of all the blocks that are voted as finalized will reach finality."),Object(i.b)("p",null,"Starting from v1.2.0, a new tag latest_finalized will be introduced. You can use this tag to request the cfx_epochNumber method to get the latest epochNumber that has been finalized."),Object(i.b)("h2",{id:"faq"},"FAQ"),Object(i.b)("h3",{id:"why-is-the-transaction-failed-to-send"},"Why is the transaction failed to send?"),Object(i.b)("p",null,"If a transaction failed by calling the cfx_sendRawTransaction method, it is likely that there is a problem with the transaction construction and the meta-information of the transaction needs to be adjusted."),Object(i.b)("p",null,'If the error message returned is "txpool is full", you can wait for a moment and try to resend the transaction with a slightly higher gasPrice.'),Object(i.b)("h3",{id:"why-has-the-transaction-not-been-executed-on-the-chain"},"Why has the transaction not been executed on the chain?"),Object(i.b)("p",null,"After the transaction is successfully sent, but the transaction does not show as successfully executed on Conflux Scan, then the transaction is probably pending in the transaction pool. There are three possible cases:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The transaction does not use a continuous nonce: the nonce of the transaction needs to be set correctly"),Object(i.b)("li",{parentName:"ol"},"The balance of the sending account is insufficient: transfer to the sending account to get enough balance for the transaction"),Object(i.b)("li",{parentName:"ol"},"The network is congested: If the network is congested, miners will pack the transactions roughly in order of gasPrice from highest to lowest. You can speed up transaction execution by increasing the gasPrice of the transaction")),Object(i.b)("p",null,"You can use the cfx_getAccountPendingTransactions method to get the user's current Pending transactions and the reason for them."),Object(i.b)("h3",{id:"can-a-transaction-be-canceled-or-replaced"},"Can a transaction be canceled or replaced?"),Object(i.b)("p",null,"If a transaction has not been packed into a block and is in the transaction pool, it can be replaced by sending a new transaction with the same nonce and a higher gasPrice."),Object(i.b)("p",null,"Transactions cannot be canceled but can be replaced with a transaction of value 0. This is a way to reach the same result as canceling the transaction."),Object(i.b)("h3",{id:"how-to-speed-up-a-transaction"},"How to speed up a transaction?"),Object(i.b)("p",null,"If you want to speed up the execution of a transaction, you can increase the gasPrice of the transaction and resend it."))}h.isMDXComponent=!0}}]);