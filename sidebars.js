/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  guides: [
    "guides/en/how_to_use_cfx_faucet"
  ],

  docs: [
    {
      type: "category",
      label: "Learn About Conflux",
      items: [
        { type: "doc", id: "introduction/en/conflux_overview" },
        {
          type: "doc",
          id: "introduction/en/conflux_basics",
        },
        {
          type: 'doc',
          label: 'Internal Contracts',
          id: "conflux-rust/internal_contract/internal_contract",
          // type: 'link',
          // href: 'https://github.com/Conflux-Chain/conflux-rust/tree/master/internal_contract#readme'
        },
        // {
        //   type: "doc",
        //   id: "internal_contract",
        // },
        {
          type: "doc",
          id: 'introduction/en/conflux_papers',
        }
      ],
    },
    {
      type: "category",
      label: "Run Conflux Node",
      items: [
        { type: "doc", id: "conflux-doc/docs/installation" },
        { type: "doc", id: "conflux-doc/docs/get_started" },
        {
          type: "doc",
          id: "conflux-doc/docs/independent_chain",
        },
        {
          type: "doc",
          id: "conflux-doc/docs/light_node",
        },
      ],
    },
    {
      type: "category",
      label: "Sending Transaction",
      items: [
        {
          type: "doc",
          id: "conflux-doc/docs/send_transaction",
        },
      ],
    },
    {
      type: "category",
      label: "Smart Contract",
      items: [
        {
          type: "doc",
          id: "contract/en/contract_introduce",
        },
      ],
    },
    {
      type: "category",
      label: "SDKs and Tools",
      items: [
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_rpcs",
        },
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_sdks",
        },
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_tools",
        },
      ],
    },
    {
      type: 'link',
      label: 'ConfluxPortal Docs',
      href: 'https://conflux-portal-docs.conflux-chain.org/docs/portal/introduction/'
    },
    {
      type: 'link',
      label: 'Changelog',
      href: 'https://github.com/Conflux-Chain/conflux-rust/blob/master/changelogs/CHANGELOG-1.1.x.md'
    }
  ],

  api: [
    { type: "doc", id: "conflux-doc/docs/json_rpc" },
    { type: "doc", id: "conflux-doc/docs/pubsub" },
    { type: "doc", id: "conflux-doc/docs/cli_sub_commands" },
    { type: "doc", id: "apis/en/node_config_example" },
    {
      type: 'link',
      label: 'CIPs',
      href: 'https://github.com/conflux-chain/cips'
    }
  ],
};
