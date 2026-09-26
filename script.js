// Default/local projects data (fallback if Google Sheet fetch fails)
const projectsData = [
    {
        id: 1,
        title: "Into the Deep Robot",
        teamName: "Marlbots",
        teamNumber: "3526",
        program: "FTC",
        season: "24-25",
        country: "California",
        description: '',
        tags: ["Into the Deep"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/e572c65123251ef45b66f39e/w/f34b2f76e28714ad4e8fabda/e/53a251850136ccbe839f52d5?renderMode=0&uiState=68487e49a0494d1fc0b81a6f" }
        ]
    },
    {
        id: 2,
        title: "Centerstage Robot",
        teamName: "Marlbots",
        teamNumber: "3526",
        program: "FTC",
        season: "23-24",
        country: "California",
        description: '',
        tags: ["Centerstage"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/e90c60b27e433977608b9152/w/59237bb6890d87eb1fd8994c/e/752f3b7b2968df845d6e46fe?renderMode=0&uiState=68488124e97b2d1c16e4f9d9", icon: "fas fa-cube" }
        ]
    },
    {
        id: 3,
        title: "Powerplay Robot",
        teamName: "Marlbots",
        teamNumber: "3526",
        program: "FTC",
        season: "22-23",
        country: "California",
        description: ' ',
        tags: ["Powerplay"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/1da9466f4ce20e1dd363e947/w/5f345e29b57b59c6e597a831/e/56d6b5b9e0591e7cd6478ee9?renderMode=0&uiState=68487fe6738b5b327a021919", icon: "fas fa-cube" }
        ]
    },
    {
        id: 4,
        title: "Into the Deep Robot",
        teamName: "Asteria",
        teamNumber: "14917",
        program: "FTC",
        season: "24-25",
        country: "California",
        description: " ",
        tags: ["Into the Deep"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/170256185392c6aba00470ce/w/0cfbfe8478157d854f3f8a02/e/e6c65e2262ac2eac51b47f25", icon: "fas fa-cube" }
        ]
    },
    {
        id: 5,
        title: "Into the Deep Robot",
        teamName: "CosmicSpark",
        teamNumber: "16093",
        program: "FTC",
        season: "24-25",
        country: "Beijing, China",
        description: " ",
        tags: ["Into the Deep"],
        links: [
            { text: "OnShape CAD", url: "https://cad.onshape.com/documents/c32e62fa8f9af654031f9b3c/w/2eab644d6a609b795ce9a77a/e/536f9659549c434f5e0964c3", icon: "fas fa-cube" }
        ]
    },
    {
        id: 6,
        title: "Into the Deep Robot",
        teamName: "Bilorda",
        teamNumber: "28313",
        program: "FTC",
        season: "24-25",
        country: "Kazakhstan",
        description: " ",
        tags: ["Into the Deep"],
        links: [
            { text: "Google Drive", url: "https://drive.google.com/file/d/1o1S0sibZfOB8pSwWLc75GxJvxh2aKdH4/view?usp=sharing", icon: "fab fa-google-drive" }
        ]
    },
    {
        id: 7,
        title: "Into the Deep Robot",
        teamName: "Steam Wanderer",
        teamNumber: "9513",
        program: "FTC",
        season: "24-25",
        country: "Indonesia",
        description: " ",
        tags: ["Into the Deep"],
        links: [
            { text: "OnShape CAD", url: "https://cad.onshape.com/documents/a080e33adb86f752eda2db0d/w/fa722723c4ec84c3256b1a7b/e/c246c7b98c62703770172f31", icon: "fas fa-cube" }
        ]
    },
    {
        id: 8,
        title: "Into the Deep Robot",
        teamName: "Gear Gurus",
        teamNumber: "7832",
        program: "FTC",
        season: "24-25",
        country: "Romoland, California",
        description: "",
        tags: ["Into the Deep"],
        links: [
            { text: "Google Drive", url: "https://drive.google.com/drive/folders/18JVktEYcFQx-_DtrzhA60dKceSzz2HPM?usp=sharing", icon: "fab fa-google-drive" }
        ]
    },
    {
        id: 9,
        title: "Reefscape Robot",
        teamName: "FRC Gryffingear",
        teamNumber: "5012",
        program: "FTC",
        season: "24-25",
        country: "Palmdale, California",
        description: " ",
        tags: ["Reefscape"],
        links: [
            { text: "OnShape CAD", url: "https://cad.onshape.com/documents/f2823d606f50281ed95feaf6/w/f9ed0af4f276e511a5dd41fa/e/1d7fb63b33b3ae711826e788", icon: "fas fa-cube" }
        ]
    },
    {
        id: 10,
        title: "Into the Deep Robot",
        teamName: "MoVal Robotics",
        teamNumber: "17600",
        program: "FTC",
        season: "24-25",
        country: "Moreno Valley, CA",
        description: " ",
        tags: ["Into the Deep"],
        links: [
            { text: "OnShape CAD", url: "https://marlborough.onshape.com/documents/03dfa5ebab4f6179fdf0cd17/w/514335ceb8eced7fde7747f7/e/ef759f56c0a024601169fca2", icon: "fas fa-cube" }
        ]
    },
    {
        id: 11,
        title: "Ultimate Goal Robot",
        teamName: "Overlord of Nonsense",
        teamNumber: "17517",
        program: "FTC",
        season: "20-21",
        country: "Saint-Petersberg, Russia",
        description: " ",
        tags: ["Ultimate Goal"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/4nbEtTq", icon: "fas fa-cube" }
        ]
    },
    {
        id: 12,
        title: "Ultimate Goal Robot",
        teamName: "Aperture in Reasons",
        teamNumber: "18742",
        program: "FTC",
        season: "20-21",
        country: "Saint-Petersberg, Russia",
        description: " ",
        tags: ["Ultimate Goal"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/4prEBjc", icon: "fas fa-cube" }
        ]
    },
    {
        id: 13,
        title: "Freight Frenzy Robot",
        teamName: "Workshop of Eternal Nonsense",
        teamNumber: "17517",
        program: "FTC",
        season: "21-22",
        country: "Saint-Petersberg, Russia",
        description: " ",
        tags: ["Freight Frenzy"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/46py5ks", icon: "fas fa-cube" }
        ]
    },
    {
        id: 14,
        title: "Powerplay Robot",
        teamName: "Aperture in Reasons",
        teamNumber: "18742",
        program: "FTC",
        season: "22-23",
        country: "Saint-Petersberg, Russia",
        description: " ",
        tags: ["Powerplay"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/41UQUdI", icon: "fas fa-cube" }
        ]
    },
    {
        id: 15,
        title: "Into the Deep Robot",
        teamName: "Aperture in Reasons",
        teamNumber: "18742",
        program: "FTC",
        season: "24-25",
        country: "Saint-Petersberg, Russia",
        description: " ",
        tags: ["Into the deep"],
        links: [
            { text: "Fusion 360", url: "https://a360.co/3YGdFQV", icon: "fas fa-cube" }
        ]
    },
    {
        id: 16,
        title: 'Freight Frenzy Robot',
        teamName: 'Workshop of Eternal Nonsense',
        teamNumber: '17517',
        program: 'FTC',
        season: '21-22',
        country: 'Saint-Petersberg, Russia',
        description: '',
        tags: ['Freight Frenzy'],
        links: [
            { text: 'Fusion 360', url: 'https://a360.co/4n5Slyq', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 17,
        title: 'Powerplay Robot',
        teamName: 'Workshop of Eternal Nonsense',
        teamNumber: '17517',
        program: 'FTC',
        season: "22-23",
        country: 'Saint-Petersberg, Russia',
        description: ' ',
        tags: ["Powerplay"],
        links: [
            { text: 'Fusion 360', url: 'https://a360.co/3VOWA5w', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 18,
        title: 'Centerstage Robot',
        teamName: 'Workshop of Eternal Nonsense',
        teamNumber: '17517',
        program: 'FTC',
        season: '23-24',
        country: 'Saint-Petersberg, Russia',
        description: ' ',
        tags: ["Centerstage"],
        links: [
            { text: 'Fusion 360', url: 'https://a360.co/41WLbnJ', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 19,
        title: 'Centerstage Robot',
        teamName: 'Aperture in Reasons',
        teamNumber: '18742',
        program: 'FTC',
        season: '23-24',
        country: 'Saint-Petersberg, Russia',
        description: ' ',
        tags: ["Centerstage"],
        links: [
            { text: 'Fusion 360', url: 'https://a360.co/3JZ2EpD', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 20,
        title: 'Into the Deep Robot',
        teamName: 'Workshop of Eternal Nonsense',
        teamNumber: '17517',
        program: 'FTC',
        season: "24-25",
        country: 'Saint-Petersberg, Russia',
        description: ' ',
        tags: ['FTC', "24-25"],
        links: [
            { text: 'Fusion 360', url: 'https://a360.co/46EhmuJ', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 21,
        title: 'Into the Deep Robot',
        teamName: 'Jedison Knights',
        teamNumber: '23571',
        program: 'FTC',
        season: '24-25',
        country: 'Florida',
        description: ' ',
        tags: ["Into The Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/50800014c627fcc9703ba6ca/w/6febbbc7c904e9c144bd69cf/e/98db84c0e55934036605f1c4?renderMode=0&uiState=68cca7700ae616be1f3a3790', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 22,
        title: 'Centerstage Robot',
        teamName: 'Despicable Machine',
        teamNumber: '6200',
        program: 'FTC',
        season: '23-24',
        country: 'Illinois',
        description: ' ',
        tags: ["Centerstage"],
        links: [
            { text: 'Google Drive', url: 'https://drive.google.com/drive/folders/1djgmy-6gx8IAfvRVyzfnyhELNFy-Y1PH', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 23,
        title: 'Into the Deep Robot',
        teamName: 'Despicable Machine',
        teamNumber: '6200',
        program: 'FTC',
        season: '24-25',
        country: 'Illinois',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Google Drive', url: 'https://drive.google.com/drive/folders/1Jc2aDUr9MgoXgqtQy61NlD3kQQAGX1Ivv', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 24,
        title: 'Powerplay Robot',
        teamName: 'Despicable Machine',
        teamNumber: '200',
        program: 'FTC',
        season: '22-23',
        country: 'Illinois',
        description: ' ',
        tags: ["Powerplay"],
        links: [
            { text: 'Google Drive', url: 'https://drive.google.com/drive/folders/1YkzKEg-sL1i_bhEUy8mUvcaZLqrV_oW3', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 25,
        title: 'Into The Deep Robot',
        teamName: 'Crazy Artificial Intelligence',
        teamNumber: '16596',
        program: 'FTC',
        season: '24-25',
        country: 'Calgary, Alberta Canada',
        description: ' ',
        tags: ["Into The Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/4570fcde98bc87019e040efe/w/17c558c3762d3579531fa58a/e/b353788416e51b54df81bc31?renderMode=0&uiState=68f05547ac6d63ee024cb879', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 26,
        title: 'Into The Deep Robot',
        teamName: 'Caesar Circuitry',
        teamNumber: '24331',
        program: 'FTC',
        season: '24-25',
        country: 'Huntsville, Alabama',
        description: ' ',
        tags: ["Into The Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/cf533bb8c8240c95e41a2fee/w/2bb5a6848b6905cb05e5da11/e/d904bd552471b4afe760ec98', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 27,
        title: 'Into The Deep Robot',
        teamName: 'UFORCE',
        teamNumber: '23400',
        program: 'FTC',
        season: '24-25',
        country: 'Dubai, DU, United Arab Emirates',
        description: ' ',
        tags: ["Into The Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/cf533bb8c8240c95e41a2fee/w/2bb5a6848b6905cb05e5da11/e/d904bd552471b4afe760ec98', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 28,
        title: 'Into The Deep Robot',
        teamName: 'PML30 North Wind',
        teamNumber: '9746',
        program: 'FTC',
        season: '24-25',
        country: 'St. Petersburg, Russia',
        description: ' ',
        tags: ["Into The Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/e71101eaad919471b9efdb3c/w/c48921a11c5b7fdc33d7b7e5/e/703b9f8f90c51389619a4818', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 29,
        title: 'Centerstage Robot',
        teamName: 'CyLiis',
        teamNumber: '19043',
        program: 'FTC',
        season: '23-24',
        country: 'Iași, Romania',
        description: ' ',
        tags: ["Centerstage"],
        links: [
            { text: 'Fusion 360', url: 'https://gmail2376016.autodesk360.com/g/shares/SH286ddQT78850c0d8a45d7c47fcb0ba09ef', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 30,
        title: 'Centerstage Robot',
        teamName: 'hivemind',
        teamNumber: '23396',
        program: 'FTC',
        season: '23-24',
        country: 'Spring Hill, Tennessee',
        description: ' ',
        tags: ["Centerstage"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/fba422c04d9f259e36433b8c/w/661ed7aa8a40b6c0f5d26203/e/6205d0d7691937476f4d9a4c', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 31,
        title: 'Powerplay Robot',
        teamName: 'Peppers',
        teamNumber: '19044',
        program: 'FTC',
        season: '22-23',
        country: 'Iași, Romania',
        description: ' ',
        tags: ["Powerplay"],
        links: [
            { text: 'Fusion 360', url: 'https://gmail1122897.autodesk360.com/g/shares/SH512d4QTec90decfa6efd936cae403c1bdf', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 32,
        title: 'Freight Frenzy Robot',
        teamName: 'Almond Robotics',
        teamNumber: '12518',
        program: 'FTC',
        season: '22-23',
        country: 'Potomac, MD',
        description: ' ',
        tags: ["Freight Frenzy"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/ebe870041c6727c32e6a81e1/w/9e5b6fc4b42139b9df352731/e/ce77d17c2170332caa7262cc', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 33,
        title: 'Ultimate Goal Robot',
        teamName: 'Jankbot',
        teamNumber: '13648',
        program: 'FTC',
        season: '20-21',
        country: 'Duvall, Washington',
        description: ' ',
        tags: ["Ultimate Goal"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/ec03c5a1726117b5dd0ef434/v/26fc62a203f44bf75b45a13d/e/863dc892f987c32991536897', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 34,
        title: 'Ultimate Goal Robot',
        teamName: 'Beach Bots',
        teamNumber: '18253',
        program: 'FTC',
        season: '20-21',
        country: 'Santa Monica, California',
        description: ' ',
        tags: ["Ultimate Goal"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/c4258a3b5a1dbcdad41e21f5/w/4f7810069e9b16a173d2bf0a/e/f837c09187d1cca462aaeca2', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 35,
        title: 'Skystone Robot',
        teamName: 'Quantum Robotics',
        teamNumber: '14270',
        program: 'FTC',
        season: '19-20',
        country: 'Bucharest, Romania',
        description: ' ',
        tags: ["Skystone"],
        links: [
            { text: 'Fusion 360', url: 'https://myhub.autodesk360.com/ue2b699be/g/shares/SH56a43QTfd62c1cd968c54efb8b6d65921b', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 36,
        title: 'Rover Ruckus Robot',
        teamName: '(In)Formal Logic',
        teamNumber: '9872',
        program: 'FTC',
        season: '18-19',
        country: 'Harrisburg, Pennsylvania',
        description: ' ',
        tags: ["Rover Ruckus"],
        links: [
            { text: 'Fusion 360', url: 'https://myhub.autodesk360.com/ue2814ea3/g/shares/SH56a43QTfd62c1cd968250c04221a0d6400', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 37,
        title: 'Rover Ruckus Robot',
        teamName: 'Quantum Robotics',
        teamNumber: '14270',
        program: 'FTC',
        season: '18-19',
        country: 'Bucharest, Romania',
        description: ' ',
        tags: ["Rover Ruckus"],
        links: [
            { text: 'Fusion 360', url: 'https://myhub.autodesk360.com/ue2b699be/g/shares/SH56a43QTfd62c1cd968e7fc6e5b3808809c', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 38,
        title: 'Into The Deep Robot',
        teamName: 'Robo Kai',
        teamNumber: '17978',
        program: 'FTC',
        season: '24-25',
        country: 'Ohio',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Google Drive', url: 'https://drive.google.com/drive/folders/1gxJu5C4J5Z56zXodPUi-OxYn7YO8IOp9', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 39,
        title: 'Into The Deep Robot',
        teamName: 'Red Ring of Death',
        teamNumber: '22581',
        program: 'FTC',
        season: '24-25',
        country: 'Kennesaw, Georgia',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/37697f9e12c866601bb956d1/w/64bdcd69584e980a5359bec1/e/a254c83e3ab71d0f5b71068f?renderMode=0&uiState=67ba934697a9ca50fe2efc36', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 40,
        title: 'Into The Deep Robot',
        teamName: 'Seattle Solvers',
        teamNumber: '23511',
        program: 'FTC',
        season: '24-25',
        country: 'Sammamish, Washington',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/ae5ff79658ff2a51ece82558/w/1babafd80652d7e5216f214c/e/548f3b6bbedc29b9264b1a15', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 41,
        title: 'Into The Deep Robot',
        teamName: 'FRITS',
        teamNumber: '25209',
        program: 'FTC',
        season: '24-25',
        country: 'Hà Nội, HN, Vietnam',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/d66e428ea5bdfea5f78e1178/w/ea2c9af518345c418296094f/e/b2b467b7be8b145c6aa6992e', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 42,
        title: 'Into The Deep Robot',
        teamName: 'Wolves Robotics',
        teamNumber: '5189',
        program: 'FTC',
        season: '24-25',
        country: 'San Antonio, Texas,',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/8b9c71ef444b0ca656b77248/w/6408dc3be6975f56ecf4b94c/e/6fd499479be35b74682dfd6f', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 43,
        title: 'Into The Deep Robot',
        teamName: 'Quixilver',
        teamNumber: '8404',
        program: 'FTC',
        season: '24-25',
        country: 'San Jose, California,',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/84457a80136c5bcb36868f22/w/ce1629cfbf3e919954057377/e/11830431fc76c4a9509a3bce?renderMode=0&uiState=67ba94de4bbffc2d298d0adf', icon: 'fas fa-cube' }
        ]
    },
    {
        id: 44,
        title: 'Into The Deep Robot',
        teamName: 'Cotiere Robotics',
        teamNumber: '25012',
        program: 'FTC',
        season: '24-25',
        country: 'France',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Google Drive', url: 'https://drive.google.com/file/d/1a-VhdKkHIDGIoJ3HzPVR9U0VI04-S-uD/view', icon: 'fas fa-cube' }
        ]
    },   
    {
        id: 45,
        title: 'Decode Robot',
        teamName: 'Cotiere Robotics',
        teamNumber: '25012',
        program: 'FTC',
        season: '25-26',
        country: 'France',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Google Drive', url: 'https://drive.google.com/file/d/1DvmzXrwTwdSR4s2S0yO9oNmaqk0oBaFA/view', icon: 'fas fa-cube' }
              ]
        },
    {
         id: 46,
        title: 'Decode Robot',
        teamName: 'Ghost Robotics',
        teamNumber: '3565',
        program: 'FTC',
        season: '25-26',
        country: 'Westford, Massachusetts',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/7573300c60aec127cf587728/w/96f139eb25cbe55565a1fb2b/e/a7102a7ddccdcdd7951b32c4', icon: 'fas fa-cube' }
                ]
            },
    {
         id: 47,
        title: 'Decode Robot',
        teamName: 'OmicronX',
        teamNumber: '30099',
        program: 'FTC',
        season: '25-26',
        country: 'Irvine, California',
        description: ' ',
        tags: ["Into the Deep"],
        links: [
            { text: 'Onshape', url: 'https://cad.onshape.com/documents/c1e442ac6f370555984182d5/w/18917fa871bbc603bc7e6d36/e/ca72e1a1b4724fb84b28cdd3', icon: 'fas fa-cube' }
            ]
    }
    
];

// Google Sheet config (GViz JSON)
const GOOGLE_SHEET_ID = '1snp1ROWqbTpuxhxcNPTm7MDR_iuvI27wdZBAFR_GkDY';
const GOOGLE_GID = '0';
const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json&gid=${GOOGLE_GID}`;
const PLACEHOLDER_THUMBNAIL = 'https://www.cadsharp.com/wp-content/uploads/2023/09/Onshape-logo-outline.png';

let allProjects = [];

document.addEventListener('DOMContentLoaded', initializeProjects);

async function initializeProjects() {
    try {
        const fetched = await fetchProjectsFromSheet();
        if (Array.isArray(fetched) && fetched.length > 0) {
            allProjects = fetched;
        } else {
            allProjects = projectsData;
        }
    } catch (err) {
        allProjects = projectsData;
    }

    renderProjects(allProjects);
    setupProjectFilters();
}

async function fetchProjectsFromSheet() {
    const res = await fetch(GVIZ_URL, { cache: 'no-store' });
    const text = await res.text();
    const json = JSON.parse(text.replace(/^.*setResponse\(/, '').replace(/\);?\s*$/, ''));
    const table = json.table;
    if (!table || !table.rows) return [];

    const cols = table.cols.map(c => (c && c.label ? c.label.trim().toLowerCase() : ''));

    const getVal = (row, idx) => {
        const cell = row.c[idx];
        if (!cell) return '';
        if (cell.f) return String(cell.f);
        if (cell.v === null || cell.v === undefined) return '';
        return String(cell.v);
    };

    const idxTeamName = cols.indexOf('team name');
    const idxTeamNum = cols.indexOf('team #');
    const idxCountry = cols.findIndex(c => c.startsWith('country'));
    const idxCadLink = cols.findIndex(c => c.includes('cad file'));
    const idxSeason = cols.findIndex(c => c.startsWith('season'));
    const idxProgram = cols.indexOf('program');
    const idxDescription = cols.indexOf('description');
    const idxTags = cols.indexOf('tags');
    const idxThumb = cols.indexOf('thumbnail');

    const projects = [];
    table.rows.forEach((row, i) => {
        if (!row || !row.c) return;
        const teamName = idxTeamName >= 0 ? getVal(row, idxTeamName) : '';
        const teamNumber = idxTeamNum >= 0 ? getVal(row, idxTeamNum) : '';
        const country = idxCountry >= 0 ? getVal(row, idxCountry) : '';
        const cadLink = idxCadLink >= 0 ? getVal(row, idxCadLink) : '';
        const season = idxSeason >= 0 ? getVal(row, idxSeason) : '';
        const program = idxProgram >= 0 ? getVal(row, idxProgram) : 'FTC';
        const description = idxDescription >= 0 ? getVal(row, idxDescription) : '';
        const tagsRaw = idxTags >= 0 ? getVal(row, idxTags) : '';
        const thumbnail = idxThumb >= 0 ? getVal(row, idxThumb) : '';

        if (!teamName && !teamNumber && !cadLink) return;

        const links = cadLink
            ? [{ text: 'CAD Link', url: cadLink, icon: 'fas fa-cube' }]
            : [];
        const tags = tagsRaw
            ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean)
            : [];

        projects.push({
            id: i + 1,
            title: season ? `${season} Robot` : `${teamName || 'Team'} Robot`,
            teamName,
            teamNumber: String(teamNumber),
            program,
            season,
            country,
            description: description || `${program} robot from ${teamName || 'team'} ${teamNumber || ''}`.trim(),
            tags,
            links,
            thumbnail
        });
    });

    return projects;
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid');
    const noResults = document.getElementById('no-results');
    
    if (!projectsGrid) return;
    
    // Safely check if noResults element exists before modifying inline styles
    if (noResults) {
        noResults.style.display = projects.length === 0 ? 'block' : 'none';
    }
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = '';
        return;
    }
    
    projectsGrid.innerHTML = projects.map(project => {
        const links = project.links || [];
        const tags = project.tags || [];
        const primaryLink = (links[0] && links[0].url) ? links[0].url : '';
        const clickableClass = primaryLink ? ' clickable' : '';

        return `
        <div class="project-card${clickableClass}" ${primaryLink ? `data-link="${primaryLink}"` : ''}>
            <div class="project-thumb">
                <img
                      src="CAD${project.id}.jpg"
                      alt="${project.teamName || 'Project'} thumbnail"
                      loading="lazy"
                      onerror="this.src='${PLACEHOLDER_THUMBNAIL}'"
                />
            </div>
            <div class="project-header">
                <div>
                    <h3 class="project-title">${project.title || ''}</h3>
                    <p class="project-team">${project.teamName || ''} #${project.teamNumber || ''}</p>
                    ${project.country ? `<p class="project-location">${project.country}</p>` : ''}
                </div>
                <span class="project-season">${project.season || ''}</span>
            </div>
            <p class="project-description">${project.description || ''}</p>
            <div class="project-tags">
                <span class="project-tag program-tag">${project.program || ''}</span>
                <span class="project-tag season-tag">${project.season || ''}</span>
                ${tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                ${links.map(link => `
                    <a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">
                        ${link.icon ? `<i class="${link.icon}"></i>` : ''}
                        ${link.text || 'Open CAD'}
                    </a>
                `).join('')}
            </div>
        </div>
    `;}).join('');

    const cards = projectsGrid.querySelectorAll('.project-card.clickable');
    cards.forEach(card => {
        const href = card.getAttribute('data-link');
        if (!href) return;
        card.addEventListener('click', (e) => {
            if (e.target.closest('a')) return;
            window.open(href, '_blank', 'noopener');
        });
    });
}

function setupProjectFilters() {
    const teamNameFilter = document.getElementById('team-name-filter');
    const teamNumberFilter = document.getElementById('team-number-filter');
    const programFilter = document.getElementById('program-filter');
    const seasonFilter = document.getElementById('season-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');

    function applyFilters() {
        const nameVal = teamNameFilter ? teamNameFilter.value.toLowerCase().trim() : '';
        const numVal = teamNumberFilter ? teamNumberFilter.value.toLowerCase().trim() : '';
        const progVal = programFilter ? programFilter.value : '';
        const seasonVal = seasonFilter ? seasonFilter.value : '';

        const filtered = allProjects.filter(p => {
            const matchName = !nameVal || (p.teamName && p.teamName.toLowerCase().includes(nameVal));
            const matchNum = !numVal || (p.teamNumber && p.teamNumber.toLowerCase().includes(numVal));
            const matchProg = !progVal || progVal === 'all' || p.program === progVal;
            const matchSeason = !seasonVal || seasonVal === 'all' || p.season === seasonVal;
            return matchName && matchNum && matchProg && matchSeason;
        });

        renderProjects(filtered);
    }

    if (teamNameFilter) teamNameFilter.addEventListener('input', applyFilters);
    if (teamNumberFilter) teamNumberFilter.addEventListener('input', applyFilters);
    if (programFilter) programFilter.addEventListener('change', applyFilters);
    if (seasonFilter) seasonFilter.addEventListener('change', applyFilters);

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            if (teamNameFilter) teamNameFilter.value = '';
            if (teamNumberFilter) teamNumberFilter.value = '';
            if (programFilter) programFilter.value = 'all';
            if (seasonFilter) seasonFilter.value = 'all';
            renderProjects(allProjects);
        });
    }
}
