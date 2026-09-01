import {Colors} from './colors';

export enum Stack {
    // Languages
    go,
    typescript,
    javascript,
    php,
    dart,
    python,
    java,
    solidity,
    rust,
    move,

    // frameworks
    react,
    nextjs,
    vue,
    vuetify,
    nuxtjs,
    reactnative,
    flutter,
    node,
    express,
    nestjs,
    wordpress,
    laravel,
    graphql,
    ethers,
    web3,
    hardhat,
    anchor,

    // Cloud
    aws,
    gcp,

    // Databases
    mongo,
    postgres,
    redis,
    mysql,
    supabase,
    typeorm,
    prisma,

    // Tools
    docker,
    kubernetes,
    terraform,
}

export const WorkStack = [
    Stack.go,
    Stack.typescript,
    Stack.javascript,
    Stack.node,
    Stack.php,
    Stack.dart,
    Stack.python,
    Stack.solidity,
    Stack.rust,
    Stack.move,
    Stack.react,
    Stack.nextjs,
    Stack.vue,
    Stack.vuetify,
    Stack.nuxtjs,
    Stack.reactnative,
    Stack.flutter,
    Stack.express,
    Stack.nestjs,
    Stack.wordpress,
    Stack.laravel,
    Stack.graphql,
    Stack.ethers,
    Stack.web3,
    Stack.aws,
    Stack.gcp,
    Stack.mongo,
    Stack.postgres,
    Stack.supabase,
    Stack.typeorm,
    Stack.prisma,
    Stack.redis,
    Stack.mysql,
    Stack.docker,
    Stack.kubernetes,
    Stack.terraform,
];

type StackInfoMap = {
    value: string;
    color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
    [Stack.go]: {
        value: 'Go',
        color: Colors.go,
    },
    [Stack.typescript]: {
        value: 'TypeScript',
        color: Colors.typescript,
    },
    [Stack.javascript]: {
        value: 'JavaScript',
        color: Colors.javascript,
    },
    [Stack.node]: {
        value: 'Node',
        color: Colors.node,
    },
    [Stack.php]: {
        value: 'Php',
        color: Colors.php,
    },
    [Stack.dart]: {
        value: 'Dart',
        color: Colors.dart,
    },
    [Stack.python]: {
        value: 'Python',
        color: Colors.python,
    },
    [Stack.java]: {
        value: 'Java',
        color: Colors.java,
    },
    [Stack.solidity]: {
        value: 'Solidity',
        color: Colors.solidity,
    },
    [Stack.rust]: {
        value: 'Rust',
        color: Colors.rust,
    },
    [Stack.move]: {
        value: 'Rust',
        color: Colors.move,
    },
    [Stack.react]: {
        value: 'React',
        color: Colors.react,
    },
    [Stack.nextjs]: {
        value: 'Nextjs',
        color: Colors.nextjs,
    },
    [Stack.vue]: {
        value: 'Vue',
        color: Colors.vue,
    },
    [Stack.vuetify]: {
        value: 'Vuetify',
        color: Colors.vuetify,
    },
    [Stack.nuxtjs]: {
        value: 'Nuxtjs',
        color: Colors.nuxtjs,
    },
    [Stack.reactnative]: {
        value: 'React Native',
        color: Colors.reactnative,
    },
    [Stack.flutter]: {
        value: 'Flutter',
        color: Colors.flutter,
    },
    [Stack.express]: {
        value: 'Express',
        color: Colors.express,
    },
    [Stack.nestjs]: {
        value: 'Nestjs',
        color: Colors.nestjs,
    },
    [Stack.wordpress]: {
        value: 'Wordpress',
        color: Colors.wordpress,
    },
    [Stack.laravel]: {
        value: 'Laravel',
        color: Colors.laravel,
    },
    [Stack.graphql]: {
        value: 'Graphql',
        color: Colors.graphql,
    },
    [Stack.ethers]: {
        value: 'Ethers',
        color: Colors.ethers,
    },
    [Stack.web3]: {
        value: 'Web3',
        color: Colors.web3,
    },
    [Stack.hardhat]: {
        value: 'Hardhat',
        color: Colors.hardhat,
    },
    [Stack.anchor]: {
        value: 'Anchor',
        color: Colors.anchor,
    },
    [Stack.aws]: {
        value: 'AWS',
        color: Colors.aws,
    },
    [Stack.gcp]: {
        value: 'Google Cloud',
        color: Colors.gcp,
    },
    [Stack.mongo]: {
        value: 'MongoDB',
        color: Colors.mongo,
    },
    [Stack.postgres]: {
        value: 'Postgres',
        color: Colors.postgres,
    },
    [Stack.supabase]: {
        value: 'Supabase',
        color: Colors.supabase,
    },
    [Stack.typeorm]: {
        value: 'TypeORM',
        color: Colors.typeorm,
    },
    [Stack.prisma]: {
        value: 'Prisma',
        color: Colors.prisma,
    },
    [Stack.redis]: {
        value: 'Redis',
        color: Colors.redis,
    },
    [Stack.mysql]: {
        value: 'Mysql',
        color: Colors.mysql,
    },
    [Stack.docker]: {
        value: 'Docker',
        color: Colors.docker,
    },
    [Stack.kubernetes]: {
        value: 'Kubernetes',
        color: Colors.kubernetes,
    },
    [Stack.terraform]: {
        value: 'Terraform',
        color: Colors.terraform,
    },
};
