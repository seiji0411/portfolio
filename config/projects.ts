import {Maybe, Tuple} from '../types';
import {Stack} from './stack';

export type Deployment = {
    web?: string;
    android?: string;
    ios?: string;
    token?: string
};

export interface SubProject {
    title: string;
    description: string;
    repository: Maybe<string>;
    deployment: Deployment;
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
    title: string;
    slug: string;
    website: string;
    banner: string;
    description: string;
    shortDescription?: string;
    development: string;
    repository: Maybe<string>;
    stack: Stack[];
    dimensions?: Tuple<number>; // Tuple of [height, width]
    screenshots: string[];
    deployment: Deployment;
    subProjects: SubProject[];
}

export const projects: Project[] = [
    {
        title: 'CatheonGamingCenter',
        slug: 'catheon_center',
        banner: '/static/projects/catheon_center/banner.png',
        website: 'https://app.catheongaming.com',
        description:
            'NFT marketplace of CatheonGaming. Built with Nextjs, Nestjs, Superbase and TypeORM. Hosted on AWS. \n Developed sub systems for nft-minting and nft-breeding, token-staking. \n' +
            'This dapp was built by about 8 members and I worked as a EVM blockchain developer.',
        shortDescription:
            'NFT marketplace on Polygon and Solana',
        repository: null,
        stack: [
            Stack.react,
            Stack.nextjs,
            Stack.node,
            Stack.nestjs,
            Stack.typescript,
            Stack.supabase,
            Stack.typeorm,
            Stack.solidity,
            Stack.web3,
            Stack.aws,
        ],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_center%2FScreenshot%202023-07-07%20123153.png?alt=media&token=6754f579-700e-4476-ba0f-701ad4d24afb',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_center%2FScreenshot%202023-07-07%20123334.png?alt=media&token=7a1ef21b-9042-4762-a29a-fda8061e3e0e',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_center%2FScreenshot%202023-07-07%20123428.png?alt=media&token=e9bbe8c6-66cf-4e00-b4e0-dba254d1720f',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_center%2FScreenshot%202023-07-07%20123516.png?alt=media&token=9638d780-421e-4228-8b38-58e4420faa81',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_center%2FScreenshot%202023-07-07%20123623.png?alt=media&token=dd3b3ba3-4d53-461f-9257-146371f4966d',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_center%2FScreenshot%202023-07-07%20123750.png?alt=media&token=4515d53f-0310-424f-8725-a8f27b9e4e30',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_center%2FScreenshot%202023-07-07%20123840.png?alt=media&token=4aa9d36b-5664-457c-9a41-6fa7751c43f4',
        ],
        development: 'As a full-stack & blockchain developer, built solidity smart contracts (market, nft, auction) for marketplace and integrated front-end pages with smart contracts and backend endpoints by web3. \n' +
            'Experienced the scrum agile method and CI/CD, code review on frontend & backend side.',
        deployment: {
            web: 'https://app.catheongaming.com',
        },
        subProjects: [
            {
                title: 'Onigiri Game NFT Mint Dapp',
                repository: null,
                description: 'Mint game NFTs by the special schedule. Developed NFT smart contracts by using merkle-tree and built mint DApps with ethers.js.',
                deployment: {},
            },
            {
                title: 'Elteria Game NFT breeding Dapp',
                repository: null,
                description: 'Developed breeding smart contracts and built DApp with Reactjs, integrated with smart contract by using ethers.js',
                deployment: {},
            }
        ],
    },
    {
        title: 'CatheonGaming Token Bridge',
        slug: 'catheon_bridge',
        banner: '/static/projects/catheon_bridge/banner.png',
        website: 'https://swap.catheongaming.com',
        description:
            'Token bridge of CatheonGaming from Solana to Polygon. CatheonGaming has Solchicks token on Solana and has Catheon token on Polygon. This dapp allow users to swap from solchicks to catheon token. \n' +
            'Built with Nextjs, Nestjs and Supabase. Hosted on AWS.',
        shortDescription:
            'NFT marketplace on Polygon and Solana',
        repository: null,
        stack: [
            Stack.react,
            Stack.nextjs,
            Stack.node,
            Stack.nestjs,
            Stack.typescript,
            Stack.supabase,
            Stack.typeorm,
            Stack.solidity,
            Stack.web3,
            Stack.aws,
        ],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_bridge%2FScreenshot%202023-07-07%20125131.png?alt=media&token=dc3b8626-5ac9-46f2-95b1-828ea1f4ace7',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_bridge%2FScreenshot%202023-07-07%20125240.png?alt=media&token=ad551084-8365-49c4-829d-469be342f5bf',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcatheon_bridge%2FScreenshot%202023-07-07%20125248.png?alt=media&token=b8aad88c-d800-450d-b5ce-f839beb06317',
        ],
        development: 'As a full-stack & blockchain developer, I built smart contracts for bridge on Polygon network by using Signature and built front-end pages and integrated front-end pages with smart contracts by web3 library and built backend endpoints',
        deployment: {
            web: 'https://app.catheongaming.com',
        },
        subProjects: []
    },
    {
        title: 'Theia.finance',
        slug: 'theia',
        website: 'https://theia.club/',
        banner: '/static/projects/theia/banner.png',
        description:
            'Decentralized Financial Protocol. Theia is a startup company and have 8~12 members. Theia.finance has the self DeFi algorithm about crowdfunding and built smart contracts and dapps by this algorithm. Theia suggested the governance algorithm about the Web3 community and implemented with NFTs. \n Smart contracts were built with solidity and rust, deployed on Ethereum mainnet and Near testnet. Dapp was built with reactjs and hosted on the Google Cloud. Backend was built with Express and using Postgres as Database.',
        repository: null,
        stack: [Stack.solidity, Stack.hardhat, Stack.rust, Stack.react, Stack.express, Stack.gcp, Stack.web3, Stack.postgres],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftheia%2Ftheia_screenshot.png?alt=media&token=9c5caf29-5f50-470a-bf8a-5228f737f7af',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftheia%2Ftheia_bonding_curve.jpg?alt=media&token=ab94f28c-06ce-4282-b98e-a378578e0ca5',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftheia%2Ftheia_modify_func_getBuyPrice_getSellPrice_calculateBuyPT_calculateSellPT_ibuy.jpg?alt=media&token=19125ffb-935f-42d7-b298-be64257a52a3',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftheia%2Ftheia_pcr_timeline.png?alt=media&token=926ed89b-1b93-411d-9e96-c0a021133270',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftheia%2Ftheia_product_tab_create.jpg?alt=media&token=9b84a9a6-59ad-42d1-b20a-e9461a641251',
        ],
        deployment: {
            web: 'https://app.theia.club/',
        },
        development: 'As a smart contract developer, I Built the crowdfunding smart contracts with Solidity, Rust languages for EVM and NEAR networks. Built NFT tokens for Theia governance token and deployed on Ethereum mainnet. \nAttended in the frontend side and built web3-auth with metamask, walletconnect and tokenproof. \n Also attended in the backend side built apis for frontend side.',
        subProjects: [
            {
                title: 'Crowdfunding smart contract with Solidity for EVM networks',
                repository: null,
                description:
                    'By using the bonding curve algorithm, the users perform the crowdfunding to the special projects with the special stable coin. After finishing crowdfunding, the project token was provided to investors by the invest amount\n. Project owner create the project and deploy the project token, set the funding amount, period, stable coin. \n The smart contract was designed by the Diamond structure (EIP2535). ',
                deployment: {},
            },
            {
                title: 'NFT escrow smart contract with Rust on Near network',
                repository: 'https://github.com/Theia-Protocol/nft_escrow_sc_near',
                description:
                    'It is almost same with EVM crowdfunding algorithm, but it is using NFT too as funding token. Built the unit tests for the every case of DeFi algorithm and deployed on NEAR testnet, tested successfully.',
                deployment: {},
            },
            {
                title: 'Governance project',
                repository: null,
                description: "This project is including the main three parts - smart contract, sdk, backend-api. I built all three parts with Solidity, express, typescript and ethers. \nAbout the user`s votes for the proposals, the project stored these as the signature format in database, when processing the proposals, these votes are verified on smart contract by EIP712 (Type-Data Signature). After passing the proposals, these proposals are executed by anyone and will receive the revenue.",
                deployment: {},
            },
        ],
    },
    {
        title: 'Crypto Trading Bots on Polygon and Arbitrum',
        slug: 'tradingbot',
        website: null,
        banner: '/static/projects/tradingbot/banner.png',
        description:
            'Running the cryptocurrency Trading Bots on Polygon and Arbitrum networks. Built the DEX-arbitrage and CEX-DEX arbitrage bots and running now.',
        repository: null,
        stack: [Stack.solidity, Stack.go, Stack.typescript, Stack.node],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftradingbot%2FScreenshot%202023-06-27%20135952.png?alt=media&token=ded2e9a3-9d8d-44a1-99ff-c188ce5e0847',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftradingbot%2FScreenshot%202023-06-26%20082102.png?alt=media&token=e4f26b1f-a60b-4bc8-951c-0f9f716f4dd6',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ftradingbot%2FScreenshot%202023-06-26%20082336.png?alt=media&token=9132722f-6f6b-4b1f-b4ad-db97962be3ef',
        ],
        deployment: {},
        development: 'As a developer, I early hope to build my bot by myself. Before six months ago, I found the DEX-Arbitrage bot`s transaction on the transaction explorer. I was very surprised in bot`s action, after that, I started to study about crypto bots. \n After a week, I started to develop the DEX arbitrage bot on Polygon network. Studied the DEXs deployed on Polygon such as Quickswap(V2, V3), Uniswap(V2, V3), Balancer, DoDoSwap, Curve, KyberSwap(DMM, Classic, Elastic) and so on. \n And I studied about MEV services on Polygon network. Customized the Polygon node core codes (bor) and inserted my bot codes in polygon node, and installed node on linux server. By customizing node code, I got the deep-understanding about Go-Ethereum core. \n\n' +
            'After finishing the polygon DEX arbitrage, I moved to the Arbitrum network. Also I customized arbitrum node (nitro) and inserted bot code in node. I continued to study about bots and found the CEX-DEX arbitrage bots, built CEX-DEX bots too. \n\n All my bots were built with golang, And in DEX-Arbitrage, I used the flashloan and I built the smart contracts and deployed on networks by myself.',
        subProjects: [],
    },
    {
        title: 'Sellersket Price',
        slug: 'sellersket_price',
        banner: '/static/projects/sellersket_price/banner.png',
        website: 'https://sellersket-price.com',
        description:
            'This is the real-time Amazon product price-control system for Amazon sellers, and it increases the sales of competitive products, help the sellers to sell more products quickly with the proper price. \n This system was built with Laravel + Vue and hosted on AWS Cloud.',
        shortDescription:
            'React-time Amazon product price-control system for Amazon sellers',
        repository: null,
        stack: [
            Stack.php,
            Stack.laravel,
            Stack.vue,
            Stack.vuetify,
            Stack.mysql,
            Stack.node,
            Stack.aws,
        ],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fsellersket_price%2FScreenshot%202023-06-15%20054926.png?alt=media&token=cd277130-bebe-4e3d-ba0a-8a58615caf68',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fsellersket_price%2FImage%2072.png?alt=media&token=9cd27bd4-73df-459f-9890-a0e921b6f8fa',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fsellersket_price%2FImage%202.png?alt=media&token=7b880ab5-2852-4771-9ad7-ac6f03b50c0c',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fsellersket_price%2FImage%205.png?alt=media&token=1b3349d3-e0fe-4a49-a519-51df0e052f13',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fsellersket_price%2FImage%206.png?alt=media&token=cc9cfecb-58c3-4da1-93d8-1afb6e19e8f4',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fsellersket_price%2FImage%207.png?alt=media&token=d9f95b17-1101-462a-bc46-a1a65437eeb8',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fsellersket_price%2FImage%2071.png?alt=media&token=6448a846-e259-4ef7-a9c3-3a368bb0f698',
        ],
        development: 'As a full-stack developer, built front-end pages with vuejs and vuetify and created backend endpoints with Laravel + mysql(DB). \n For fetching the prices of competitive products in real time, installed background schedules and get the price data of products by using Amazon MWS api endpoints. \n Because the price real-time data is too big, built lambda functions on Amazon SQS, so filtered the subscription data and submitted filtered data to backend api endpoint, and store the changed price data. \nAmazon DynamoDB was used in order to filter data in lambda functions. For storing Amazon product`s asset information, used Amazon S3 Storage.',
        deployment: {
            web: 'https://sellersket-price.com',
        },
        subProjects: [
            {
                title: 'Data Duplication Filter Lambda function',
                repository: 'https://github.com/kjeih/Lambda_Send_To_FIFO',
                description: 'Receive the Amazon MWS subscription data and filter the data by Amazon product ASIN info and send data to next channel one by one.',
                deployment: {},
            },
            {
                title: 'FIFO SQS Polling Lambda function',
                repository: 'https://github.com/kjeih/Lambda_FIFO_SQS_Polling',
                description: 'Check the duplication of data by using FIFO SQS. Used the AWS DynamoDB for storing past and filtered data. Finally send the filtered data to API backend endpoint',
                deployment: {},
            }
        ],
    },
    {
        title: 'Omula',
        slug: 'omula',
        banner: '/static/projects/omula/banner.png',
        website: 'https://omula.com',
        description: `This system is the event posting system of Omula Beauty Fashion Vocational School in Fukuoka. Posting the several events such as open-campus, interview preparation seminar, individual consultation, power festival and so on, \n This system was build with PHP-Wordpress.`,
        shortDescription:
            'Event posting system of Omula Beauty Fashion Vocational School in Fukuoka',
        repository: null,
        stack: [
            Stack.php,
            Stack.wordpress,
            Stack.mysql,
            Stack.aws,
        ],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2FImage%201.png?alt=media&token=d119b058-1932-4025-a7f4-2c013b17f561',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2FImage%203.png?alt=media&token=fe09294d-fd07-4eb5-8528-046f622e46e3',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2Fomula_1.png?alt=media&token=87aa0f3b-8e50-4cb6-8ed1-69b1a5be72ff',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2Fomula_2.png?alt=media&token=06db4dc1-3ede-4e27-9b7c-335a9829d87e',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2Fomula_3.png?alt=media&token=77573d38-6793-4f75-8343-1703ea09ae28',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2Fw_1.png?alt=media&token=962cc5e1-78de-40de-8eac-8388a6f4d66b',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2Fw_2.png?alt=media&token=0260102e-5c92-4ba5-b576-9498c8adf3e4',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fomula%2Fw_3.png?alt=media&token=0d1d0971-b56b-4c17-9414-22dd81ae2a6f'
        ],
        deployment: {
            web: 'https://omula.com',
        },
        development: 'As a full-stack developer, built frontend pages by figma design based on the special theme. And created a plugin in order to insert, edit and delete the several kinds of events for posting',
        subProjects: [
            {
                title: 'Custom Event(Post) Wordpress plugin',
                repository: 'https://github.com/kjeih/OpenCampus',
                description: 'Create or edit, delete custom omula`s event(Custom Wordpress Post) and managed these such as attendance list, active/inactive, start & end date and so on',
                deployment: {},
            }
        ],
    },
    {
        title: 'MasterPiece',
        slug: 'masterpiece',
        website: 'https://www.m-piece.com',
        banner: '/static/projects/masterpiece/banner.png',
        description:
            'Business process outsourcing system of Masterpiece Group, Inc. Built real-time facebook post monitoring system as subsystem of this project. \n Built with vue + laravel, implemented the web socket communication between vue-frontend and laravel-backend by using Laravel Echo, so communicating the facebook posts and monitoring these in real time.',
        repository: null,
        stack: [
            Stack.php,
            Stack.laravel,
            Stack.vue,
            Stack.vuetify,
            Stack.mysql,
            Stack.aws,
        ],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmasterpiece%2Fmonitoring_1.png?alt=media&token=81e70073-30b9-494d-883e-4c8ae81e934d',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmasterpiece%2Fmonitoring_2.png?alt=media&token=236f8674-60fd-46c8-b789-04e7cdbbf3a1',
        ],
        deployment: {
            web: 'https://www.m-piece.com',
        },
        development: 'As a full stack developer, built backend api endpoints and web-socket broadcast channels on Laravel framework. Built front-end pages for monitoring posts with vue + vuetify and built the real-time communication channels with server side. \n All users connected to this system can be communicated in real-time and receive the updated data at the same time, can see the other`s actions.',
        subProjects: [],
    },
    {
        title: 'VIP Billionaires',
        slug: 'vip_billionaires',
        banner: '/static/projects/vip_billionaires/banner.png',
        website: 'https://www.vipbillionaires.com',
        description: `This is the E-commerce site, having ios & android mobile apps. The site was built with wordpress, and mobile apps were built with ReactNative. Admin dashboard was built with Reactjs. As a database and backend, this system is using the firebase`,
        repository: 'https://github.com/kjeih/vip-billionaires',
        stack: [
            Stack.php,
            Stack.wordpress,
            Stack.mysql,
            Stack.mongo,
            Stack.reactnative,
            Stack.gcp,
        ],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fvipbillionaires%2FScreenshot%202023-06-26%20081101.png?alt=media&token=74caec77-b557-4ec0-b1b2-d33b8ca3cc2c',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fvipbillionaires%2FScreenshot%202023-06-26%20235716.png?alt=media&token=9d443fc7-7dc1-4113-aeac-d8893882a356',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fvipbillionaires%2FScreenshot%202021-11-01%20at%204.37.16%20PM.png?alt=media&token=1dd565a0-28b2-4f88-88f1-fe04c6728d2d',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fvipbillionaires%2FScreenshot%202023-06-26%20235556.png?alt=media&token=2bcccecd-4052-4170-b35e-77aabd7221e0',
        ],
        deployment: {
            web: 'https://www.vipbillionaires.com',
            ios: 'https://apps.apple.com/us/app/vip-billionaires-social-chat/id1076103571',
            android: 'https://play.google.com/store/apps/details?id=com.zed.vipbillionaires',
        },
        development: 'As a mobile developer, built ios & android mobile apps with ReactNative, and built admin dashboard with Reactjs. Mobile app has the functionalities - chatting, e-commerce and posting. I used firebase in this app.',
        subProjects: [],
    },
    {
        title: 'GetHalal',
        slug: 'gethalal',
        banner: '/static/projects/gethalal/banner.png',
        description:
            'This is the WooCommerce site built by wordpress for selling vegetables and meat. I met this client on Upwork. I started to work with him from the task of developing small plugin. \n After, the client requested to build the whole web site and mobile apps with the new design .',
        repository: 'https://github.com/kjeih/gethalal_theme',
        stack: [Stack.php, Stack.wordpress, Stack.mysql, Stack.javascript],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fgethalal%2Fw_4.png?alt=media&token=6e036136-4298-49f9-9c97-834efe8f5596',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fgethalal%2Fw_5.png?alt=media&token=398822e3-eb21-4e10-a547-f6bed200a072',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fgethalal%2Fw_6.png?alt=media&token=5f0ea954-2a43-434f-b311-ce8c864f11cb',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fgethalal%2Fw_7.png?alt=media&token=040406d8-ed5a-4136-a4f7-7e9cdaf78cb3',
        ],
        deployment: {
            web: 'https://gethalal.com',
        },
        website: 'https://gethalal.com',
        development: 'I built the E-commerce theme by the figma design and developed the plugins for calculating and analyzing the e-commerce sales. I built the mobile apps for MVP and that was passed through MVP successfully',
        subProjects: [
            {
                title: 'MVP Gethalal mobile app',
                repository: 'https://github.com/kjeih/gethalal_app',
                description:
                    "Built with ReactNative and passed MVP successfully",
                deployment: {},
            },
            {
                title: 'Gethalal Mailer',
                repository: 'https://github.com/kjeih/gethalal-mailer',
                description:
                    "Calculating and analyzing the e-commerce sales and notify the some information to admin with e-mail or whatsapp notification",
                deployment: {},
            }
        ],
    },
    {
        title: 'Luthorr',
        slug: 'luthorr',
        banner: '/static/projects/luthorr/banner.png',
        description:
            'This is the E-commerce site built with vue + laravel. I met the client on Upwork. He requested the ecommerce-site with vue + laravel. This site was hosted on AWS cloud.',
        repository: 'https://github.com/kjeih/luthorr_web',
        stack: [Stack.vue, Stack.vuetify, Stack.laravel, Stack.mysql, Stack.aws],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fluthorr%2Fluthorr_1.png?alt=media&token=9dd56692-8254-4b53-b497-6cab9a7f7da3',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fluthorr%2Fluthorr_2.png?alt=media&token=aee47ff0-1ff1-4638-a333-b480598adb8f',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fluthorr%2FImage%208.png?alt=media&token=88aea82a-668f-48f1-aaa2-e5d56948d9d7',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fluthorr%2FImage%209.png?alt=media&token=d0ce5fd0-c38d-4a04-8c0b-44f8e445a645',
        ],
        deployment: {
            web: 'https://luthorr.com',
        },
        website: 'https://luthorr.com',
        development: 'As a fullstack developer, I built front-end pages with vuejs and vuetify, implemented the E-commerce functionalities, created backend endpoints and implemented the payments such as stripe and paypal',
        subProjects: [],
    },
    // {
    //     title: 'ShareSlate',
    //     slug: 'shareslate',
    //     banner: '/static/projects/shareslate/banner.png',
    //     description: 'Share Slate is a comprehensive platform for socializing with people at a completely different exposure level. I met the client on Upwork. He requested to develop the social chat web-pages and mobile apps',
    //     repository: 'https://github.com/kjeih/ShareSlate_Server',
    //     stack: [Stack.react, Stack.node, Stack.reactnative, Stack.mongo, Stack.java, Stack.aws],
    //     dimensions: [460, 210],
    //     screenshots: [
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    //     ],
    //     deployment: {
    //         web: 'https://www.shareslate.com',
    //     },
    //     website: 'https://www.shareslate.com',
    //     development: 'As a fullstack & mobile developer, I built the social chat web-pages and mobile apps by forking from RocketChat. The front-end was built with reactjs and backend was built with meteor framework. Mobile apps were built with ReactNative. \n Also I customized the small project - Guacamole-client',
    //     subProjects: [
    //         {
    //             title: 'Shareslate mobile app',
    //             repository: 'https://github.com/kjeih/ShareSlate_ReactNative',
    //             description:
    //                 "Built with ReactNative and passed MVP successfully",
    //             deployment: {},
    //         },
    //         {
    //             title: 'Guacamole client',
    //             repository: 'https://github.com/kjeih/Guacamole_client',
    //             description:
    //                 "Customized the guacamole client by the ShareSlate project`s requirements",
    //             deployment: {},
    //         }
    //     ],
    // },
    {
        title: 'Hankyu',
        slug: 'hankyu',
        banner: '/static/projects/hankyu/banner.png',
        description: 'Hankyu is the large scale Japan Traveling Service Web Site. This system is posting the most trend travel points and their positions, services. This project was built with native PHP language. I met the client on Linkedin.',
        repository: 'https://github.com/kjeih/hankyu',
        stack: [Stack.javascript, Stack.php],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhankyu%2FScreenshot%202023-06-27%20080626.png?alt=media&token=e6e4a1d1-6120-4067-bb5e-71e49f2c2741',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhankyu%2FScreenshot%202023-06-27%20080516.png?alt=media&token=47a75ea7-a83a-49e0-9236-a92921dccb05',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhankyu%2FScreenshot%202023-06-27%20080454.png?alt=media&token=c95bb948-8040-4a2e-accf-f33ea6454c3e',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhankyu%2FScreenshot%202023-06-27%20080418.png?alt=media&token=a139f678-eed9-4310-80ec-0ef0472cb10d',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhankyu%2FScreenshot%202023-06-27%20080350.png?alt=media&token=95c38d64-5f23-4086-a404-f55c8618c7a1',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhankyu%2FScreenshot%202023-06-27%20080709.png?alt=media&token=d7fc127e-6b5b-43be-8b85-b7bed8725d36',
        ],
        deployment: {
            web: 'https://www.hankyu-travel.com/',
        },
        website: 'https://www.hankyu-travel.com/',
        development: 'I built the web-pages with native php and javascript, html by the new design. Analyzed the traveling trend data with csv file format and posting on front-end pages by the location. Required the high-skill html and javascript coding. ',
        subProjects: [],
    },
    {
        title: 'Cinema Draft',
        slug: 'cinema_draft',
        website: 'https://www.cinemadraft.co',
        repository: 'https://github.com/CinemadraftLLC',
        banner: '/static/projects/cinemadraft/banner.png',
        description:
            'Decentralized Exchange of CinemaDraft Service. This was published on Binance Smart Chain. Built the dapp with react, Nextjs and ethersjs. Including the functionalities - swap, liquidity, farming, presale, staking, auction and launchpad. \n This protocol was forked from PancakeSwapV2',
        stack: [
            Stack.solidity,
            Stack.react,
            Stack.nextjs,
            Stack.typescript,
            Stack.node,
            Stack.nuxtjs,
            Stack.ethers,
            Stack.aws,
        ],
        dimensions: [360, 640],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcd3d%2Fcd3d_banner.png?alt=media&token=4c666de6-3338-462e-81c9-2631d96b43fd',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcd3d%2Fcd3d.png?alt=media&token=c05c1784-5e3f-4563-9a2e-fb6f37bc0b15',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcd3d%2FScreenshot%202021-12-23%20102147.png?alt=media&token=61f2198a-f5f0-4a71-820b-486c93bc71ff',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcd3d%2FScreenshot%202021-12-23%20102115.png?alt=media&token=c70548c5-b67e-4031-91ad-56e7a07a450a',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fcd3d%2FScreenshot%202021-12-23%20102044.png?alt=media&token=8bfa392d-0d46-4594-a720-65806b23b714',
        ],
        deployment: {
            web: 'https://cd3d.app/',
        },
        development: 'I built DEX by forking from PancakeSwapV2, and deployed on BSC. Built the smart contracts for farming, staking, presale, auction, launchpad with Solidity and deployed on BSC testnet, ready to deploy on BSC. \n Dapp was built with reactjs, Nextjs and ethers by the figma design, having the pages for swapping, liquidity, farming, staking, launchpad',
        subProjects: [
            {
                title: 'CinemaDraft DEX SDK',
                repository: 'https://github.com/kjeih/CD3D_DEX_Contracts',
                description: 'CD3D DEX`s Core Contracts. Forked from PancakeswapV2 and customized.',
                deployment: {},
            },
            {
                title: 'CinemaDraft DEX SDK',
                repository: 'https://github.com/CinemadraftLLC/CD3D_DEX_Sdk',
                description: 'Forked from PancakeSwapV2 SDK and customized. Built with typescript',
                deployment: {},
            },
            {
                title: 'CinemaDraft DEX Frontend',
                repository: 'https://github.com/CinemadraftLLC/CD3D_DEX_Frontend',
                description: 'Migrated the smart contracts by using ethers. Completed the functionalities - swap, liquidity, farming, staking, auction.',
                deployment: {},
            }
        ],
    },
    {
        title: 'エアレペルソナ',
        slug: 'airlexchat',
        banner: '/static/projects/airlexchat/banner.png',
        description:
            'AirlexChat is the large scale Japan social chat system. This is forked from RocketChat. Backend was built with Meteor framework, frontend - React, mobile apps - ReactNative. I met the client on Japan freelancer site.',
        repository: 'https://github.com/kjeih/airlexchat',
        stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo, Stack.aws],
        dimensions: [450, 210],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fairlexchat%2FAirlexChat%20(1).JPEG?alt=media&token=a5119537-13de-4897-8418-b8083ec83f5e',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fairlexchat%2FAirlexChat%20(2).JPEG?alt=media&token=f19dae1b-37f8-48de-b21b-eb14d8b01055',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fairlexchat%2FAirlexChat%20(3).JPEG?alt=media&token=025e76ff-6fc1-4670-b4ce-f968c7ab8f0b',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fairlexchat%2FAirlexChat%20(4).JPEG?alt=media&token=49b726c5-376b-44bc-af5c-0a34016e0e54',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fairlexchat%2FAirlexChat%20(5).JPEG?alt=media&token=b88ceaaa-3c9b-462d-b735-35a16f0463aa',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fairlexchat%2FAirlexChat%20(6).JPEG?alt=media&token=1b2eb133-25e6-4543-8b4a-f24050aeaf3f',
        ],
        deployment: {
            web: 'https://airlex.co.jp',
        },
        website: 'https://airlex.co.jp',
        development: 'As a project manager, I designed the whole project and managed the development of website, admin-dashboard, mobile apps. For 4 years, I managed and maintained this project. \n In mobile app, implemented the WebRTC video/voice call, p2p-encryption messaging, voice-chat, group-chat, push-notification, Apple & Google pay. \n\n This app service was stopped in March 2023.',
        subProjects: [],
    },
    {
        title: 'Funtivity',
        slug: 'funtivity',
        banner: '/static/projects/funtivity/banner.png',
        description:
            'Social Posting App. The app enables user to meet other people to do activities such as but not limited to watching or playing sports, fitness, food & beverage, movies, music & art, health & beauty and outdoor activities including camping, hiking, fishing, yoga, etc.',
        repository: 'https://github.com/kjeih/funtivity',
        stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
        dimensions: [430, 250],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ffuntivity%2Ffuntivity%20(6).png?alt=media&token=24f8084b-8ab9-4bde-8e5a-9c45360d2f28',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ffuntivity%2Ffuntivity%20(1).png?alt=media&token=10e73466-c74d-4303-8c1c-5006ee54de9e',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ffuntivity%2Ffuntivity%20(2).png?alt=media&token=59ae0d6a-6d5e-487c-add9-4b2780f5aec1',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ffuntivity%2Ffuntivity%20(3).png?alt=media&token=b81423de-f213-4db9-ac68-e3bee5dcd522',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ffuntivity%2Ffuntivity%20(4).png?alt=media&token=32e72033-b2e0-447a-951c-5a70a22d1815',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Ffuntivity%2Ffuntivity%20(5).png?alt=media&token=c05e8b87-16b3-497f-a556-2315dbfa510b',
        ],
        deployment: {
            android: 'https://play.google.com/store/apps/details?id=com.brainyapps.funtivity',
        },
        website: 'https://play.google.com/store/apps/details?id=com.brainyapps.funtivity',
        development: 'I built with ReactNative and used Firebase. App has the functionalities - chatting, posting, meeting.',
        subProjects: [],
    },
    {
        title: 'DealLocker',
        slug: 'deallocker',
        banner: '/static/projects/deallocker/banner.png',
        description: 'Deal Locker is a one-stop solution and platform to see promotions, deals and discounts from stores, determine redemption period and redeem for future purchases. Fill your items cart and access a final breakdown of items with a Final Bill before confirming a purchase. Choose from multiple shipping options available once the default courier is inaccessible.',
        repository: 'https://github.com/kjeih/deallocker',
        stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
        dimensions: [450, 210],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fdeallocker%2FDealLocker%20(1).png?alt=media&token=8a2cecfc-32b6-42b4-b600-7d22f2e67e7b',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fdeallocker%2FDealLocker%20(2).png?alt=media&token=477ff6aa-f87f-4c3a-8f27-cb7d82a57c41',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fdeallocker%2FDealLocker%20(3).png?alt=media&token=31b6a7aa-401a-4697-bb0a-2a40ae7ddc3b',
        ],
        deployment: {
            android: 'https://play.google.com/store/apps/details?id=com.brainyapps.deallocker',
        },
        website: 'https://play.google.com/store/apps/details?id=com.brainyapps.deallocker',
        development: 'I built with ReactNative and used Firebase. App has the functionalities - e-commerce, real-time location tracking, Apple Pay, Google Pay',
        subProjects: [],
    },
    {
        title: 'Hunters Loop',
        slug: 'huntersloop',
        banner: '/static/projects/huntersloop/banner.png',
        description:
            'Social posting app for hunters. Operators and guides can advertise businesses, set up business profiles and go PRO level to enhance heir features within the app. It also has a messaging function that is used for communication between the User and Establishment.',
        repository: 'https://github.com/kjeih/HuntersLoop',
        stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
        dimensions: [430, 250],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhuntersloop%2Fhuntersloop%20(1).png?alt=media&token=26450b6b-7d12-40ee-aedc-2c9ff8b4b9aa',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhuntersloop%2Fhuntersloop%20(2).png?alt=media&token=9387934f-3e09-419a-a51f-d2d1f831502d',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhuntersloop%2Fhuntersloop%20(3).png?alt=media&token=1fa5613d-2209-4d0c-9ef3-9097f28d3176',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhuntersloop%2Fhuntersloop%20(4).png?alt=media&token=f8117547-ead2-4667-8bc5-98ffe974ed70',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhuntersloop%2Fhuntersloop%20(5).png?alt=media&token=efea46d4-32ec-4fa3-9d6d-526bee14c99f',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhuntersloop%2Fhuntersloop%20(6).png?alt=media&token=93a314e1-8a2e-44e1-83b2-b60b41e331b2',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fhuntersloop%2Fhuntersloop%20(7).png?alt=media&token=290085c1-8a76-4d52-b7e5-1cdbca11d031',
        ],
        deployment: {
            android: 'https://play.google.com/store/apps/details?id=com.brainyapps.hunters',
        },
        website: 'https://play.google.com/store/apps/details?id=com.brainyapps.hunters',
        development: 'I built this app with ReactNative and used Firebase. As backend side, I used nodejs. App has the functionalities - Posting, Map, Chatting',
        subProjects: [],
    },
    {
        title: 'Ressista',
        slug: 'ressista',
        banner: '/static/projects/ressista/banner.png',
        description:
            'Ressita is the social posting app. This allows users to discuss, address and improve as well as help others with their Mental health.',
        repository: 'https://github.com/kjeih/Ressista',
        stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
        dimensions: [430, 250],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fressista%2FOnboard%205.png?alt=media&token=d0a51a02-255f-46e9-a08e-c33ed78c9c3f',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fressista%2FOnboard_1%5B1%5D.png?alt=media&token=adc1dd8b-5836-4abb-99e1-29558caa7559',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fressista%2FOnboard%202.png?alt=media&token=2b743e46-6f9a-43d2-a5f8-1c045e8d3fab',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fressista%2FOnboard%203.png?alt=media&token=49a261c6-95c0-4adf-b9e6-370008239a99',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fressista%2FOnboard%204.png?alt=media&token=da78f48f-1349-47d4-8663-b2240f8d1aa6',
        ],
        deployment: {
            ios: 'https://apps.apple.com/us/app/ressista/id1531118849',
        },
        website: 'https://apps.apple.com/us/app/ressista/id1531118849',
        development: 'Ressista was built with ReactNative and Firebase. App has the following functionalities - Posting, Chatting, Comment',
        subProjects: [],
    },
    {
        title: 'eFarganyu',
        slug: 'efarganyu',
        banner: '/static/projects/efarganyu/banner.png',
        description:
            'As a Music app, This is the light and simple music streaming app for all your Music needs. eFarganyu offers you free, unlimited online access to all your favourite religious songs and music on low size, low memory mobile phones. Now there is no need to download songs, just play lite MP3 and music on eFarganyu App.',
        repository: 'https://github.com/kjeih/eFarganyu',
        stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
        dimensions: [430, 250],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-07-31%20at%2016.40.07.png?alt=media&token=6275edf9-cd39-4099-be2d-0e017bfbe7db',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-07-31%20at%2016.39.44.png?alt=media&token=0500a4c3-1156-4a52-951f-77fdb5b68df1',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-07-31%20at%2016.39.38.png?alt=media&token=44cefede-1ffc-4855-a9b0-e26ad4382eea',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-07-31%20at%2016.39.34.png?alt=media&token=81cb018f-37e9-4cb8-811c-c36b25455028',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-07-31%20at%2016.41.03.png?alt=media&token=102073b6-4340-4419-b26d-568547b9233f',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-07-31%20at%2016.41.06.png?alt=media&token=297e78c3-a48c-4801-b1d9-4af3b64f794a',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%2011%20Pro%20Max%20-%202020-07-31%20at%2016.41.15.png?alt=media&token=3e2a0b3e-d246-474c-b4c1-0834a0d168de',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fefarganyu%2FSimulator%20Screen%20Shot%20-%20iPhone%207%20Plus%20-%202020-07-31%20at%2016.05.53.png?alt=media&token=af24d50d-daeb-44a1-9e28-55da26133dd9',
        ],
        deployment: {
            android: 'https://play.google.com/store/apps/details?id=com.efarganyu',
            ios: 'https://apps.apple.com/us/app/efarganyu/id1522411767',
        },
        website: 'https://apps.apple.com/us/app/efarganyu/id1522411767',
        development: 'This app was built with ReactNative. This app is providing free music and playing, downloading',
        subProjects: [],
    },
    // {
    //     title: 'JTSBoard',
    //     slug: 'jtsboard',
    //     banner: '/static/projects/jtsboard/banner.png',
    //     description:
    //         'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
    //     repository: 'https://github.com/kjeih/efarganyu',
    //     stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    //     dimensions: [460, 210],
    //     screenshots: [
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    //     ],
    //     deployment: {
    //         android: 'https://play.google.com/store/apps/details?id=com.kcards',
    //         ios: 'https://apps.apple.com/us/app/efarganyu/id1522411767',
    //     },
    //     website: 'https://apps.apple.com/us/app/efarganyu/id1522411767',
    //     development: '',
    //     subProjects: [],
    // },
    {
        title: 'MagelNail',
        slug: 'magelnail',
        banner: '/static/projects/magelnail/banner.png',
        description:
            'As a chat app, this allows users to communicate about nail.',
        repository: 'https://github.com/kjeih/MagelNail',
        stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
        dimensions: [500, 250],
        screenshots: [
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmagelnail%2FFirst%20Screen%20%E2%80%93%201.png?alt=media&token=a8e7b530-ab89-4be9-9811-d9cf5b7bb976',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmagelnail%2FSide%20Menu%20screen.png?alt=media&token=dbc2e5ab-65e5-4a14-85b2-0ce0fc134caf',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmagelnail%2FUser%20Screen%20%E2%80%93%20Comments%20seen.png?alt=media&token=d72a01e7-8a7b-4439-953c-4a226ece833d',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmagelnail%2FProfile%20screen.png?alt=media&token=c561d86d-a02f-4c43-ab91-30893ccbf60d',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmagelnail%2FNEW%20POST.png?alt=media&token=21367930-2d1f-4f15-be20-0964a92078af',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmagelnail%2FFeed%20page.png?alt=media&token=dd28138b-673b-4d50-9f6d-a4bd268ae8d0',
            'https://firebasestorage.googleapis.com/v0/b/hosokawaportfolio.appspot.com/o/new_portfolios%2Fprojects%2Fmagelnail%2FChat%20Screen.png?alt=media&token=14ac27b3-d25a-4fa9-862a-ebe8da0370a2',
        ],
        deployment: {
            android: 'https://play.google.com/store/apps/details?id=magelnail.zed.com',
            ios: 'https://apps.apple.com/us/app/magel-nail/id1591068950',
        },
        website: 'https://apps.apple.com/us/app/magel-nail/id1591068950',
        development: 'Built with ReactNative and Firebase.',
        subProjects: [],
    },
    // {
    //     title: 'KyabaNet',
    //     slug: 'kyabanet',
    //     banner: '/static/projects/kyabanet/banner.png',
    //     description:
    //         'KCards is your one-stop replacement for paper cards. KCards help you to easily share your cards with other users and get real-time analytics on the shared cards.',
    //     repository: 'https://github.com/kjeih/KyabaNet',
    //     stack: [Stack.react, Stack.reactnative, Stack.node, Stack.mongo],
    //     dimensions: [460, 210],
    //     screenshots: [
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-1.png?alt=media&token=5de462e1-7368-49fd-843f-abd4cccb3317',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-2.png?alt=media&token=30061b0b-5bed-47d5-bf43-16c44cf076e0',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-3.png?alt=media&token=350180a1-f559-45e7-b887-dafd2cf9eb78',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-4.png?alt=media&token=574212b2-cf17-4e11-b8c0-a3a81473aeec',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-5.png?alt=media&token=ecff0737-b3b5-45cc-8d85-97b684f9c4b7',
    //         'https://firebasestorage.googleapis.com/v0/b/portfolio-8fa71.appspot.com/o/projects%2Fkcards%2Fscreenshots%2Fscreenshot-6.png?alt=media&token=b49f3f8e-6596-47ab-b3e6-872f5f67d7fe',
    //     ],
    //     deployment: {
    //         android: 'https://play.google.com/store/apps/details?id=com.kcards',
    //         ios: 'https://apps.apple.com/us/app/efarganyu/id1522411767',
    //     },
    //     website: 'https://apps.apple.com/us/app/efarganyu/id1522411767',
    //     development: '',
    //     subProjects: [],
    // }
];
