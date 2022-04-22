(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(190)),o={id:"hydra_overview",title:"Overview",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/overview.md",keywords:["CIPs"]},c={unversionedId:"v2-hardfork/hydra_overview",id:"v2-hardfork/hydra_overview",isDocsHomePage:!1,title:"Overview",description:"In the Hydra hardfork (v2.0) Conflux will introduce serveral big upgrades through 8 CIPs (Conflux improvement proposal).",source:"@site/docs/v2-hardfork/overview.md",sourceDirName:"v2-hardfork",slug:"/v2-hardfork/hydra_overview",permalink:"/v2-hardfork/hydra_overview",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/overview.md",version:"current",frontMatter:{id:"hydra_overview",title:"Overview",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/v2-hardfork/overview.md",keywords:["CIPs"]},sidebar:"docs",previous:{title:"Public RPCs endpoints",permalink:"/sdks-and-tools/en/conflux_rpcs"},next:{title:"PoS Overview",permalink:"/v2-hardfork/pos_overview"}},l=[{value:"PoS",id:"pos",children:[]},{value:"Conflux eSpace",id:"conflux-espace",children:[]},{value:"New Added InternalContracts",id:"new-added-internalcontracts",children:[]},{value:"RPC changes",id:"rpc-changes",children:[]},{value:"Conflux-rust config file",id:"conflux-rust-config-file",children:[]},{value:"Mainnet Upgrade schedule",id:"mainnet-upgrade-schedule",children:[]},{value:"Testnet Upgrade schedule",id:"testnet-upgrade-schedule",children:[]},{value:"Upgrade CIP list",id:"upgrade-cip-list",children:[{value:"CIP-43",id:"cip-43",children:[]},{value:"CIP-64",id:"cip-64",children:[]},{value:"CIP-71",id:"cip-71",children:[]},{value:"CIP-76",id:"cip-76",children:[]},{value:"CIP-78",id:"cip-78",children:[]},{value:"CIP-86",id:"cip-86",children:[]},{value:"CIP-90",id:"cip-90",children:[]},{value:"CIP-92",id:"cip-92",children:[]}]}],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the Hydra hardfork (v2.0) Conflux will introduce serveral big upgrades through 8 CIPs (Conflux improvement proposal)."),Object(i.b)("h3",{id:"pos"},"PoS"),Object(i.b)("p",null,"Through ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md"},"CIP-43")," Hydra has introduced a PoS system to improve the finality of the whole Network. CFX holders can stake their CFX to PoS to protect high-value transactions and also earn CFX rewards of participating the PoS. For detail information about PoS check:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/v2-hardfork/pos_overview"},"PoS Overview")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/v2-hardfork/why_pos"},"Why PoS")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/v2-hardfork/pos_faqs"},"PoS FAQs"))),Object(i.b)("h3",{id:"conflux-espace"},"Conflux eSpace"),Object(i.b)("p",null,"The CIP-90 has introduced a new fully EVM-compatible space. The new space is called eSpace, and the current space is called Core Space. The eSpace follows the same rule as EVM and supports eth rpc like eth_getBalance, so the tools (web3.js, ethers.js, hardhat, truffle and so on) from ethereum ecosystem can be used on Conflux directly. Check ",Object(i.b)("a",{parentName:"p",href:"/conflux-doc/docs/EVM-Space/intro_of_evm_space"},"eSpace documentation")," for more info."),Object(i.b)("h3",{id:"new-added-internalcontracts"},"New Added InternalContracts"),Object(i.b)("p",null,"Hydra hardfork has intoduced three ",Object(i.b)("a",{parentName:"p",href:"/v2-hardfork/new_introduced_contracts"},"new InternalContracts"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ConfluxContext")," (CIP-64)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PoSRegister")," (CIP-43)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CrossSpaceCall")," (CIP-90)")),Object(i.b)("h3",{id:"rpc-changes"},"RPC changes"),Object(i.b)("h4",{id:"cfx-namespace-rpc-change"},"cfx namespace RPC change"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"New added methods: ",Object(i.b)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_getposrewardbyepoch"},Object(i.b)("inlineCode",{parentName:"a"},"cfx_getPoSRewardByEpoch")),", ",Object(i.b)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_openedmethodgroups"},Object(i.b)("inlineCode",{parentName:"a"},"cfx_openedMethodGroups")),", ",Object(i.b)("a",{parentName:"li",href:"/conflux-doc/docs/json_rpc#cfx_getposeconomics"},Object(i.b)("inlineCode",{parentName:"a"},"cfx_getPoSEconomics")),"."),Object(i.b)("li",{parentName:"ul"},"New added EpochNumber tag: ",Object(i.b)("inlineCode",{parentName:"li"},"latest_finalized")," indicating latest finalized (by PoS) epoch."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"cfx_getStatus")," reponse have two new field: ",Object(i.b)("inlineCode",{parentName:"li"},"latestFinalized"),", ",Object(i.b)("inlineCode",{parentName:"li"},"ethereumSpaceChainId")),Object(i.b)("li",{parentName:"ul"},"Block header new added field: ",Object(i.b)("inlineCode",{parentName:"li"},"posReference")," which is the latest pos blockHash when the PoW block is mined."),Object(i.b)("li",{parentName:"ul"},"Block header's ",Object(i.b)("inlineCode",{parentName:"li"},"custom")," field's type has changed from array of ",Object(i.b)("inlineCode",{parentName:"li"},"number array")," to array of ",Object(i.b)("inlineCode",{parentName:"li"},"hex string"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'// before\ncustom: [[1, 2]]\n// after \ncustom: ["0x12"]\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note: CIP-90 will break some block field's verifiability for example: hash")),Object(i.b)("h4",{id:"trace-rpc-breaking-change"},"trace RPC breaking change"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"trace")," RPC methods have some ",Object(i.b)("a",{parentName:"li",href:"/conflux-doc/docs/RPCs/trace_rpc#v20-trace-breaking-change"},"big changes"))),Object(i.b)("h4",{id:"new-added-namespace"},"New added namespace"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/conflux-doc/docs/RPCs/txpool_rpc"},Object(i.b)("inlineCode",{parentName:"a"},"txpool"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/conflux-doc/docs/RPCs/pos_rpc"},Object(i.b)("inlineCode",{parentName:"a"},"pos")))),Object(i.b)("h4",{id:"espace-eth-rpc"},"eSpace eth RPC"),Object(i.b)("p",null,"The eSpace has introduced the ",Object(i.b)("inlineCode",{parentName:"p"},"eth")," namespace RPC, check the ",Object(i.b)("a",{parentName:"p",href:"/conflux-doc/docs/EVM-Space/evm_space_rpc_compatibility"},"RPC compatibility doc")," for details"),Object(i.b)("h3",{id:"conflux-rust-config-file"},"Conflux-rust config file"),Object(i.b)("p",null,"The mainnet config file has been renamed from ",Object(i.b)("inlineCode",{parentName:"p"},"tethys.toml")," to ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.toml"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"bootnodes")," has changed and several options are added:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jsonrpc_http_eth_port = 8545")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"jsonrpc_ws_eth_port = 8546")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'public_evm_rpc_apis = "evm"')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"evm_chain_id = 1030"))),Object(i.b)("h2",{id:"mainnet-upgrade-schedule"},"Mainnet Upgrade schedule"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Conflux client program need to be updated before ",Object(i.b)("inlineCode",{parentName:"li"},"Epoch Number reaches 36935000")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Block Number reaches 92060600")," (around 10:00 Feb.23th, 2022(GMT+8))"),Object(i.b)("li",{parentName:"ol"},"The PoS registration start at ",Object(i.b)("inlineCode",{parentName:"li"},"Block Number 92060600")," (around Feb.23th at 12:00)"),Object(i.b)("li",{parentName:"ol"},"The PoS registration close at ",Object(i.b)("inlineCode",{parentName:"li"},"Block Number 92751800")," (around Feb.25th at 12:00)"),Object(i.b)("li",{parentName:"ol"},"The deadline for adding pos_config is before ",Object(i.b)("inlineCode",{parentName:"li"},"Epoch Number reaches 37400000")," (around Feb.28th 12:00). Hardfork upgrade completed at this time.")),Object(i.b)("h2",{id:"testnet-upgrade-schedule"},"Testnet Upgrade schedule"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Conflux client program need to be updated before ",Object(i.b)("inlineCode",{parentName:"li"},"Epoch Number reaches 55095000")," or ",Object(i.b)("inlineCode",{parentName:"li"},"Block Number reaches 68845000")," (around 10:00 Dec.9th, 2021(GMT+8))"),Object(i.b)("li",{parentName:"ol"},"The PoS registration start at ",Object(i.b)("inlineCode",{parentName:"li"},"Block Number 68845000")," (around Dec.9th at 10:00)"),Object(i.b)("li",{parentName:"ol"},"The PoS registration close at ",Object(i.b)("inlineCode",{parentName:"li"},"Block Number 69245000")," (around Dec.11 at 18:00)"),Object(i.b)("li",{parentName:"ol"},"The deadline for adding pos_config is before ",Object(i.b)("inlineCode",{parentName:"li"},"Epoch Number reaches 55665000")," (around Dec.13th 15:00). Hardfork upgrade completed at this time.")),Object(i.b)("p",null,"For detail infomation check ",Object(i.b)("a",{parentName:"p",href:"https://forum.conflux.fun/t/conflux-v2-0-0-testnet-hardfork-upgrade-announcement/12556"},"Conflux v2.0.0-testnet Hardfork Upgrade Announcement")),Object(i.b)("h2",{id:"upgrade-cip-list"},"Upgrade CIP list"),Object(i.b)("p",null,"The following is a brief introduction of these CIPs."),Object(i.b)("h3",{id:"cip-43"},"CIP-43"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-43.md")),Object(i.b)("p",null,"In this CIP, we propose introducing finality to the Conflux chain via voting among staked CFX holders. This will increase the confidence of high-value transactions happening on Conflux in the future and protect Conflux against potential 51% attacks from PoW."),Object(i.b)("h3",{id:"cip-64"},"CIP-64"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-64.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-64.md")),Object(i.b)("p",null,"Currently, transactions on Conflux have no direct access to the number of the epoch they are executed in. To maintain EVM compatibility, this CIP introduces a new internal contract that makes this information available to contracts."),Object(i.b)("h3",{id:"cip-71"},"CIP-71"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-71.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-71.md")),Object(i.b)("p",null,"Fully disable the anti-reentrancy for their contract."),Object(i.b)("h3",{id:"cip-76"},"CIP-76"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-76.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-76.md")),Object(i.b)("p",null,"We should remove VM-related constraints in syncing blocks, like requiring the transactions to have enough gas limit."),Object(i.b)("h3",{id:"cip-78"},"CIP-78"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-78.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-78.md")),Object(i.b)("p",null,"Fix incorrect fields in transaction receipt."),Object(i.b)("h3",{id:"cip-86"},"CIP-86"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-86.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-86.md")),Object(i.b)("p",null,"Reduce the period of difficulty adjustment and apply the simple moving average method."),Object(i.b)("h3",{id:"cip-90"},"CIP-90"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-90.md")),Object(i.b)("p",null,"This CIP aims to introduce a new fully EVM-compatible space. The new space is called ",Object(i.b)("inlineCode",{parentName:"p"},"eSpace"),", and the current space is called ",Object(i.b)("inlineCode",{parentName:"p"},"Core")," Space. The eSpace follows the same rule as EVM and supports eth rpc like ",Object(i.b)("inlineCode",{parentName:"p"},"eth_getBalance"),", so the tools from ethereum economics can be used on Conflux directly."),Object(i.b)("h3",{id:"cip-92"},"CIP-92"),Object(i.b)("p",null,"Detail link: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-92.md"},"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-92.md")),Object(i.b)("p",null,"Enable Blake2F builtin function in ",Object(i.b)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-152.md"},"EIP-152"),"."))}p.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(o,".").concat(u)]||d[u]||s[u]||i;return n?r.a.createElement(h,c(c({ref:t},b),{},{components:n})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);