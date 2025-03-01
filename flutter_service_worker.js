'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3da1ec1b55b22b2693926b684a7fc914",
".git/config": "66aca733c8bc32a020f781be0fb38ca9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "61dbfb85582d3d945581929a38dfd685",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b172e40addcc12a08ddb55c364309bd",
".git/logs/refs/heads/master": "2b172e40addcc12a08ddb55c364309bd",
".git/logs/refs/remotes/origin/HEAD": "974a9e4163228add88ba0673523b9320",
".git/logs/refs/remotes/origin/master": "535b00c4912fd23583305ccc2dc4ee97",
".git/objects/00/7c8dd8663890000143c4ed15830d8e87be445f": "c268c4392f8433bd1646a3e7551fce71",
".git/objects/01/7784d5706f1928be0f2c312d5792e2f2472ebe": "54715ded66667a519100ebc2af361efc",
".git/objects/03/7460f8cb81e6c784d70848d8ec1e4489c2a1fe": "54da454d9e222a5f4ad3b235febb6e3b",
".git/objects/03/94636893e69e6955c697d778fac514eefdb174": "5fe3fdf30632aededc9f42b92b64e89c",
".git/objects/06/2b8577e7c23de2ee85f15f0fd9cdee0e074bf1": "a76a48fa5ab5eda9dc2666c201b0c153",
".git/objects/06/f9b195641a552dda3e51c942c4850a4f9d5982": "ef135f7b2b7daaafe6158bbca3745726",
".git/objects/0b/403dd809f76649af37296d022b31ac5d2e4389": "23faa9808e87d33fe6f0aaf99ee0f636",
".git/objects/0b/9026203a93ec65b3d5fe0517bea015b575d692": "d74c0616816e22204a46e7e071179ba5",
".git/objects/0d/18da6a8befded5b7d38ef0e989d8055e55ef26": "b75a02391f1855fb7ef3d8c006572e20",
".git/objects/0d/30fa36993296923712ca68c0d5655c308bcff8": "0e4e3b76900b261145cc48ee9937ceb7",
".git/objects/0d/6afbae005d3b153e38b941954554e99e3980e2": "3e0eb392fdfefe52ee45f2cfc9e738c6",
".git/objects/0d/b1cda00a5e80801588badd544cfd16eca84963": "88650c067fb98d823cf09cd3a6ae9ae7",
".git/objects/0e/61410bc130c24bac1779632e4e48af04915232": "4d37748a6bac133103c3e03f160e80ee",
".git/objects/11/60ed5068eaf5441fb0f1ded56ad98f09304b95": "b216e058583d09c80b25031f35624699",
".git/objects/13/6ae00662cffdb0064d7bc2add7532bed974cc5": "37106743196387a615e39167eebfe29d",
".git/objects/15/8ff318554509edca2b8b1feb2abc8c0d77a8f9": "41886f7aece8d26f7f534d8e4824a862",
".git/objects/16/c616ef176eedc6f012ff464e87edb8a14b8b3a": "1c2c303d3ee79a19d539d6753f459d30",
".git/objects/1b/50027e7440b6cbc3c2081331103edccb82bcb7": "814cedcba7f92d40d04318ced711a26d",
".git/objects/1c/f73373050f704f1ebaade1e6e1c597f49ddb5c": "9d8da716135d5bb0e1227050c9d992e4",
".git/objects/22/7e713225472e920c2a8e2107cc192e1c265590": "463c274672c15a1701c6bb623260abfc",
".git/objects/28/05e294debd75f718732456a4a67bc03d9e996b": "06c6c3533aebc19a2c0e520c9b7a5035",
".git/objects/28/8225a61eb3a905d297b3702e326b4c7589ea2a": "4bf25b9959a5c2cf89a4d0dc73a0643c",
".git/objects/29/37dcf93ddf5b5f1c60ab665fa3f668b948f166": "a30a15d2fc8aad86b45713bfcaa60e24",
".git/objects/29/4f1b884f584b67ccefdc8bded8960a89be0204": "2d6314e4166b9f49aea89f282fc22013",
".git/objects/2f/1ea6b8467a87d2d6c4b992a1b9f9fbcb91324f": "846a88e1aa97a88bd40d88f3e74ce69a",
".git/objects/2f/bfd451791e0c9e4c546e56cdda7c361ce7f8de": "b6a80ba8d01a1e0674dbeceb6d22a1c5",
".git/objects/2f/d325521a395dde91d3a5919776450c89d1b941": "72d9301f81e5c98d315a81f24e37364f",
".git/objects/30/11a2f9125ff4c9183825418be15f25a582d369": "3606bc9276070ae76dd78e3cc77f1d0c",
".git/objects/30/5451fac92070538679935d77be29fce71704c5": "f63faa44eb8060869adf09e571a018f2",
".git/objects/36/16eebf36139b52d392b529bbfeb37ded83ea9d": "5e08b729af4f91be311535a280539055",
".git/objects/36/5a2134da17efcd7a9f527e04778de34d346200": "6d8dd804fcb0beedf55d5cf71d746e55",
".git/objects/36/d79a7e39b11a0172fcd48c14cf2cd69289affb": "00f065528c134ede02ff11a9129d0eb8",
".git/objects/37/5d9e3f71225a5dfb29d58fb4ab3c41727693b5": "55478873b7dd7e7d71b41d7a9c346189",
".git/objects/37/cb3e8c712cdedbf4cb0e555ae1fe0fb7982f73": "be7260a7d9bfe8334997c80f074a6639",
".git/objects/3a/8ef66d8781673708754531e4b3de12e56f888e": "c498ee4a11504f2828c31384535948ac",
".git/objects/3a/d22f5d644907a996ff591caf22d2784803c0fe": "a3f07e368c9e9f5260b1bad950dd532e",
".git/objects/3c/3c5c4acba4b1268366eef434ef009bf288a812": "b3d189cfbb05afb36bc1dcb9eca4273d",
".git/objects/3d/6f7098b420e9c0a024fa4ebbe8333d0417a9ff": "7a95badb49914b654e8a1960881cb15e",
".git/objects/40/a314d628c4649c2537662d82ea523ea30a4067": "bac468f34fc33f45d409c8dadda25216",
".git/objects/46/bc6a762fa4b14bc59b3467315e920b449e85c3": "1a4b1bee1444db61892697db8a7a3c05",
".git/objects/49/bc287dcb0f78a0661c398ef87cf5f89117120d": "9914e333d3af2d82125a74a059276414",
".git/objects/4a/c7a959e1a96313a3da85ea5466c71a7517ac56": "0aec4080e1908d9ce7217ebdfcb7042b",
".git/objects/4b/f7d11d9426f176b25bb12b67c6b5f882b6987e": "fe237bf913d0d678ca8807db08299c0e",
".git/objects/4d/2a226d4bf51b6b5acf79f3bde950e90b585fb6": "6951dc3cb0abe4611f0ed12c907a3248",
".git/objects/50/0c7bb47be7d9a3d6fb085a3a60d15a4d708d3c": "a145cdefea335a655f0f3bf6f50c1e25",
".git/objects/50/8f6d00e7aa6bc39faa7e79c95022ea4cb9af2b": "57cd552f944f8bf4d9041417dc7d8e65",
".git/objects/50/93e6af5290a25fbbcd73988c33230d28e4fd33": "a0789d9096a3a886e2ac95f3a6a67eea",
".git/objects/54/49d2e98edea754f13705303c96ee1fffd20176": "b2137562e99c0ace05c1f6926493bb28",
".git/objects/54/cc65ba148bfcc2612b1989dbaaa023e7956bef": "e90b769b6384fba5453fa0219ba70648",
".git/objects/54/dced09de0a84935354afe4162ab4e045af236c": "53517cdceb0bf62bb9f2ba9b1eb539fe",
".git/objects/55/98a218d5c09ca56fd8f4b6d3e3fe4e72cefc14": "5c867fc34567bd6adebafdd75b8d778e",
".git/objects/56/5fbf4971fe6dba3f0edaad810c4963a2c2bc5e": "07ef18a897c756739513551b7f577310",
".git/objects/58/cb6502a710d697123805ad347a6ff40941122f": "9475b6f4942e45699b337092d24f4625",
".git/objects/59/2dc9ac055955fa96e1a395df246893df2f1b76": "d3095be2c12ca98e1f1587ce75f151ac",
".git/objects/59/80d7bd0a591bb11157e5c1669d16b654ab7f21": "19beb3cbc205ba1a4ef5f8bb23facebc",
".git/objects/5c/bce4c421514e6f6228e687177926018c2372c3": "9271335ea1b04fad2f8ac3c1c34d4a9f",
".git/objects/5d/ea7f0e467eee502959ba6364a342ba6c8ca316": "6b4b3dc8b15806ae9cf8fcecf91b32a6",
".git/objects/64/2f79bcea645cb58dde412f0ee3f094828f0261": "892f8ab04fe27baca2b88662ad6cd633",
".git/objects/64/44d24d15783e72f6dd07fb97aefed7b092d511": "be9341f9559f69f6495ac4ed4891c8ba",
".git/objects/64/4f9e42ef10d05fb84d423a6969fc6855dfafe9": "a667cdcb7231ddbe0e27af9acbb0b0b9",
".git/objects/64/84394c1957b338098a3ba42cfc26f3f660d8b2": "98eba1907cacbc506759319c730b0fee",
".git/objects/64/8b458e253bf21bc91e395b04be6b9699f7a759": "20f713e7139935ae0ddaa6abad8d48aa",
".git/objects/65/d0ccd70f9551e51c6ebbb9d01f1a99f98af8dd": "6f748e696baf7e642204a7887614163e",
".git/objects/68/1de36a9664f31a3985c515036a2ea2d0bfb657": "b03b25fd7dfb2f001f8fce06be05ad8f",
".git/objects/68/2568559801cb2e95c38a5879bad73e60f5f2e6": "15bfe94cbc1efd80e007c29cafd40376",
".git/objects/6b/8ad0d4548512ef462d78403e95e703a13a0d75": "574f505329253898fc520f3602a1ac31",
".git/objects/6b/fb493856c035eb46d67963011710484a7b2750": "d20fee980205cded14d54a6db9022d17",
".git/objects/6c/e4ce75b09013bc421eeb5aae0987d38b31cd6e": "ae55f7af3ba24cac1045fae3ef374223",
".git/objects/6f/b437fbba2c7007b8d9b8f05eba7b418664d449": "8750868eff0e2dab1b24bb474ab737f9",
".git/objects/72/bdcbb5fdd8014d8f38307e9a722b695e35b008": "45774245e644038b081a106a2eefb522",
".git/objects/74/35b47ba956dccbd66aa07137e702f00058760c": "f17982094d24e0ca910745853d22477a",
".git/objects/74/e3c37afa6cf31299a33e7f180882f2e3ebc792": "3e961a70a483fa4481a8dbd111dbc983",
".git/objects/76/01f9e48246d2ab3b6b3f9c296ca3421c9b319d": "03ae712ede65bfd345fe06a0e19d4f66",
".git/objects/77/3c22de855d52aa36e9781285ac0d4df2a2fa04": "04965cff58ec97b5934077a40e637e8e",
".git/objects/79/1efb7761df20976611566a47e8e32dc7a07cff": "8d8746d5634e224806ab5d13f08e617f",
".git/objects/79/a5a1604af610a6cec92ba01c77b24d11a475c8": "e730639e358d58a76f33bdae819e950d",
".git/objects/7b/ca0a9e336e345ea8f0450e5caa2023b23d3d33": "e3e7dbbfabdcd8f3df0303816c62bdf8",
".git/objects/7c/45e8d20562cd78e43ad5f6c12863ca647eae02": "a34034a185b5bad12dcb10d0cfeb4b28",
".git/objects/84/4fec63db314f993bd5d07ad2113e92a00a9ad0": "aaa2d74c2e68d1cb7c61cd7f1e66d3e9",
".git/objects/85/096e0a30850de2abac8338828e4e59f5715f70": "4aaf714661fbfb2685bee9f699db5494",
".git/objects/85/b7968c54d9d640122937e2093893cc6cfa7fd7": "b8973575553b4fa8fdeefba4f3ccf3a0",
".git/objects/88/b69227acd3b63ed812b24056226631d07db8a1": "227ea1d5b1864ae83b93c8e9e496ddda",
".git/objects/8b/054fc5d0c7ad99f4ad39ae07a3c4f66aabce1e": "905f007eebb7333644fcdffd16ad364d",
".git/objects/8b/ab024aa13de207667089ea6f5b5d0ebf681283": "adda71eeb789ebeef7fa0b7190859a38",
".git/objects/8c/b3d5f2153c8fb52bb1c03cd50b8f6e06ea7c66": "194e74d7cd32491e6880d64f99a3d3d7",
".git/objects/8d/21e3f38a4bea89cc5d3cc69049220000fb332d": "976e66bf631200befee647f475101fdf",
".git/objects/8f/5b93257afd3f56737f2761a7ef95a0f5698ed0": "3d6ed7e9e578beff40349e5f03de904d",
".git/objects/8f/96e24638f5dd0aa39668653c20aac4700a5d14": "f2ecf277cad69a01c0ef55ec2fa60134",
".git/objects/90/0b04bd88a8a47d8d813fcbb616f3f3757db70a": "61b59ba171388c65ff5b27e8d8d72333",
".git/objects/90/23d4d17815b2c83786277c49b030df34178f02": "1c87abec716c51632e84f081300913a9",
".git/objects/90/36e125d2c8dcba2578c8a45920f23479b939e8": "6f75ee8a5f0d22b9d3e239df1013a566",
".git/objects/91/3957eb34e648b3a7dbc0a7e3782612be9b2c6b": "bbe3a3fd37a32106e7a4dcc98a332e26",
".git/objects/91/6e37fcb554214a44e7723ef6b0d4368c4daf4b": "5db40c66933fb5305de358d4364f545f",
".git/objects/92/c5251bc03555c18937f52ed393b73a39b25a91": "53705d542c4b882dfc1b7b9c9e05f184",
".git/objects/93/b7914f1fd9f5cb57935e2b26abb7459cadf781": "7cc8d95773e2b4be112517fa3f3ebdcc",
".git/objects/95/11793434309eb703477a0d7f88e3682d58c674": "2aa78d83b5b00b48df0107b1dcebe6b4",
".git/objects/95/bb13b7ba7543247b0ad922da508a9afdf3f197": "add7dc702205babf6885e442dee61523",
".git/objects/99/f43a5f0a3c69eef245478a5e2f2164b66d879d": "7d430cbba67f5ab7663c138b66f6d52f",
".git/objects/9c/1ae7a4ef678b6dc26cf2f99bad5e93971e996e": "99372307d9244821ce6eb623b0e2842f",
".git/objects/9c/41859d340836a57cd61e663139ff65dc25f243": "7f74df7fc04cc0b345a0552bd6e6ed96",
".git/objects/9f/515f966e3109371afaf9fb04f37319612a7eef": "12b50b72c4ea5a1ee8c2c2a9825e3efd",
".git/objects/a0/01c4fb44b763253e3e555009cdec492160a458": "e4478566fa6d399f71f4132c9857d976",
".git/objects/a0/241209e7c14be271c9b12d16a5c6a23829d0e3": "024a89a326a7b92adea7f4eb99481eca",
".git/objects/a1/781b0ce6c7be14c5fd8d7d363a1cc9e33c70c8": "96dbbb9e8ab059615ad0084fb88d9fe0",
".git/objects/a1/ce6011e1cd3d81f5203c247b5386a063c4a38e": "35746b52588e3e5f57c3044581f2bf50",
".git/objects/a2/b5a7bfd944d68e99233dcfb7df6dc3d8c10e41": "98ee3f4aaa03dff046f304d6bcadc9dd",
".git/objects/a7/c1973951da4962b2e678815b80458755b8404a": "1c31269522c2ae3ca399fa4534b98048",
".git/objects/a8/cd438771ece9e784fa0340816438adb52ccf9f": "fe94cf2c4ce7f6ce8b46343c09cc5676",
".git/objects/aa/3c246b80e4cd35590935bd278abe542cd1fe41": "8b61a93e8bb45df99a5ce63143adeaa1",
".git/objects/aa/b7d16624fe5069c2d71f25eab3851d110e2415": "9ad02c0c3ff7359341e5b74ab075aed7",
".git/objects/ac/5e97b0bc04ff0f71ad03a132f39009886f9b7a": "28c5acae6245d4da6dcfb8a950dd83a2",
".git/objects/ae/07f3826d18219723ef15c546c7eb6f47e77a21": "abd3871574fc8232c9eaf5b10538b68b",
".git/objects/af/2f8051a97b791b04aca3cb46c813e57d3fcb82": "a57080d6ac1f7edef09ec24dfb9aa069",
".git/objects/b0/385bb516038d6d345fdcdc27998cb1f75221aa": "7d002af79fff1a6c933267425fc8a33c",
".git/objects/b0/bb7b7ad7b1c3fdcb21dec88af5136c48b05a3d": "0cb6a39687feff8dff35614bd1ecfcaa",
".git/objects/b3/830c01a2f900f51fb23e216120b423121944d9": "5239b2ff1157348fd89e3c20982a83c9",
".git/objects/b4/15bdb54346405aad809e0c89884eb6667d03c2": "e82593a6ef225869eba40c382e7452b9",
".git/objects/b5/3eff60232ff7778b0c4f652f756fb2d1b5b173": "17faa79773539be17697dd818838f255",
".git/objects/b5/e0a4e8b5790f844552af9e113dbcf7b927a8d3": "3cbf0cecaa42383ed2806d0a3ab17746",
".git/objects/b6/b12455d50e5af51da87b0ed078fd228048a23a": "f5acbda401d7aa6721a442c943653d82",
".git/objects/b6/beaa1bf8d5da4665f3ff0b30a61b28cb1973e7": "0b85216a0a950db6844a31fa67e68139",
".git/objects/b7/f278bfd746259aa40b9cd37f909e6d00e399be": "8a7b7658fff99b28f581ab21cb3b7d1a",
".git/objects/b9/91e4ff84d373be2a2ef3710407edc3659b2a0c": "1e8007deb7205ce6f1d6fecb6ac5ba18",
".git/objects/bb/8b645f80c7a3907682781c732608e46ad9448e": "bf2ee43992965c9d28e77983dc9fec7b",
".git/objects/bc/f8144df8bfbfc4596dcb1f676e2b19d6992c1b": "7092183cea799aec0e742feb9f3e4eb4",
".git/objects/be/b99d618890b6bd67d2c6248de8501fa39cf3fe": "5a4d85637e7ecda36671aecabe88121f",
".git/objects/c1/9ed867604b799ccd6821fa99d81d5173d07ab9": "8f321c820851f06ad401eda9e7cbed00",
".git/objects/c1/a7ab4c955d8f4ba0f1599217dd4502223f8441": "b466c641521aa70c5ec248a1cd8bc49f",
".git/objects/c2/5da42734f7698037c2ac106ec1f86c23074a97": "0aafa50c8d3329107271bf55b9aab32e",
".git/objects/c4/6ae1e0f573910761727542da776ac5a05d8286": "8764a243972fe67e45d2abb64eef4d7a",
".git/objects/c7/3c04ce0ca177a44e3506e649b4a5f52f47282d": "62226d9db99aa4310641a2653ba05816",
".git/objects/cb/3f95ce871a18c7b04d65dd45f68e284385fcc1": "de7784b7318ef83aa1b2e467a92a1994",
".git/objects/cc/36dd2c4de6e04bc3ac02d64ce275931e19c8d7": "c629d342ea387033490dfc1323a0f6ed",
".git/objects/cd/fe66c998d5b823f02132b6bc3cc879d1c3c17a": "b3ec0d07e73498c8a2cdad3dbfe695c8",
".git/objects/cf/e750ad23257c8d6452c80834d7090c50865917": "d28461085b1d9d8213c245a444577bfd",
".git/objects/d3/36b97788cf3719fdce7cfa6bce2bd62d0579a5": "30912e7410c772e665f8dbf250adc907",
".git/objects/d4/6f5675db5bedfb07d2533ddacbf5ff35e398fe": "b3ecd33c667f6bb117ce6dd6b0adf1dc",
".git/objects/d7/910952841e78d719c631f21283fcadde47fec5": "2b6c14734621dc62bc1fcfb130ae482c",
".git/objects/da/20b8772aee94ad0e837ffae56d32650a1a5005": "09813e5ab6f897dd796540fe072f188a",
".git/objects/db/86509976c503978b7e9b9a9bd8482e317e984e": "d4bbe2ec33926a92b7946f68950f0c5b",
".git/objects/dc/b4cd63818bf001c403cf911e4fc8ecb16750a5": "18366a236b3c6ae6dc602db91a02d108",
".git/objects/dd/29d7b892da9e0907dfd0899fe3efb8fba1785c": "e7a300f69d031539ad657c4e43bd04fa",
".git/objects/e0/c03037d4fc6f2f2c731036ed1e88b8206e0aeb": "6ffd312d0ec7496aa408699aad46a874",
".git/objects/e3/d0a30989afe0ada7bff974837d303e8ceb194f": "f98d6c89a05e97c496066c4a1cfc4c32",
".git/objects/e5/f1575a0e0785fecdfb2c86cc5029a4a699713a": "91dae4438a4b4ece4db48d7710480f4f",
".git/objects/e7/534489be13fa626266a54b94671fdfd167020a": "7a84c1cb9819b82529390f5b1e55b6f6",
".git/objects/e8/50d4cd5920bb13bc5a28d93241aa7bf5e6d2a6": "3e77676f78da87633bbb58c5834b0fbc",
".git/objects/e8/ef7a5a57b8d33a7f7201a0c5e44cead91c836a": "045e39face2858cde25d2bc2f59e62d4",
".git/objects/e9/2cf847ff5a6f546231ca57a72bfc36ef89a289": "a54fe28a3770f4fa7ff4e7f1b7a4c2c5",
".git/objects/e9/748f36cb24f79d8ec80a05c1ca4944468aac1a": "7841af30372fb3e47ecb1a68f7bed7e7",
".git/objects/ec/8ea9af15085e3eb458e417467206f07655fc72": "94b3c557b4e7b66f81f1742ae47c3286",
".git/objects/ef/bf904b7e6cf666b049a1149c7241cca55028e7": "97d44e7c6ae87bbf7ea9667167dfeda9",
".git/objects/f0/2f7b6795b3c332c486aa4c941f6af409a6a965": "c8fc463b6f75d9f75297f6a29efeeb98",
".git/objects/f5/ada835b64d9724ac08df6a2cc292c70fb1ef95": "1a794279d2214eb95400cdaede49e949",
".git/objects/f6/47f0195ff47587b15e61218599fce9099de85f": "536d24ed80ba1949eb52fa2ceaa77541",
".git/objects/f9/00cd73f3e08ed8792d68bb2010245f40a390ec": "a9cf8b5bd06499dc5af837bb1b1e21ae",
".git/objects/fd/fa9f062a29bc69d37c36d035940751429917b5": "5f7478c678a0a570d32f42bc75d62192",
".git/objects/pack/pack-a5afc8a58b027b23ebc10366e71d3dbcdc168912.idx": "f26a27d59ed2899c9c2f8877a11a92f5",
".git/objects/pack/pack-a5afc8a58b027b23ebc10366e71d3dbcdc168912.pack": "f52fa2460f2d9c156137ad207605e6c7",
".git/objects/pack/pack-a5afc8a58b027b23ebc10366e71d3dbcdc168912.rev": "8c3752c509c297a608ecceb9c396e172",
".git/packed-refs": "b1c5767061c0c8422f6ad226e8f12d74",
".git/refs/heads/master": "d8ee1c2e7b8e7b5d996d3d71c4790973",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d8ee1c2e7b8e7b5d996d3d71c4790973",
"assets/AssetManifest.bin": "a29e172d27de48de02c176a50eb50015",
"assets/AssetManifest.bin.json": "e1d3eeaa71f406249d43899eb38544a7",
"assets/AssetManifest.json": "1f0cf2328f8a99580128c4cf4ae755b4",
"assets/assets/augments/ammo_mods/brain_rot/br_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/brain_rot/br_explosive.webp": "1eedd80214be09d2f2e381e7a3c7ba0d",
"assets/assets/augments/ammo_mods/brain_rot/br_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/brain_rot/br_haste.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/brain_rot/br_logo.webp": "00c29070835ac84fd07905d729cad59f",
"assets/assets/augments/ammo_mods/brain_rot/br_pheromone.webp": "8423014b6e4d07da956b579dfdbb883d",
"assets/assets/augments/ammo_mods/brain_rot/br_plague.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_freezer_burn.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_frozen_stiff.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_ice_cloud.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_liquid_nitrogen.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/cryo_freeze/cf_logo.webp": "c9b55dbbbe6fca151bad99076f11ab5e",
"assets/assets/augments/ammo_mods/dead_wire/dw_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/dead_wire/dw_chain_lightning.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/ammo_mods/dead_wire/dw_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/dead_wire/dw_haste.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/dead_wire/dw_high_voltage.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/ammo_mods/dead_wire/dw_lightning_strike.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/ammo_mods/dead_wire/dw_logo.webp": "ad5bfa88063025b82504e1c3779d9276",
"assets/assets/augments/ammo_mods/light_mend/lm_antibiotic.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/ammo_mods/light_mend/lm_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/light_mend/lm_dual_action.webp": "0a6775f2bcfaa0cef91055da3453d628",
"assets/assets/augments/ammo_mods/light_mend/lm_express_remedy.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/ammo_mods/light_mend/lm_extra_strength.webp": "c65f5c46057d554164c5034bf658150f",
"assets/assets/augments/ammo_mods/light_mend/lm_logo.webp": "75649a219b1bdc438ff308c78f9968e1",
"assets/assets/augments/ammo_mods/light_mend/lm_longer_life.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/napalm_burst/nb_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/napalm_burst/nb_contact_burn.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/ammo_mods/napalm_burst/nb_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/ammo_mods/napalm_burst/nb_firebomb.webp": "a1db3d737488423b163e3f6b61fff579",
"assets/assets/augments/ammo_mods/napalm_burst/nb_incendiary.webp": "19938dcafb6cd2e7241286beb54c08f2",
"assets/assets/augments/ammo_mods/napalm_burst/nb_logo.webp": "4861556f512c99ada9d484f30a1647a6",
"assets/assets/augments/ammo_mods/napalm_burst/nb_thermite.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/ammo_mods/shadow_rift/sr_big_game.webp": "99acb1bb13dcb39a34f777fa335b94b4",
"assets/assets/augments/ammo_mods/shadow_rift/sr_explosive_rain.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/ammo_mods/shadow_rift/sr_haste.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/ammo_mods/shadow_rift/sr_logo.webp": "5c3e868fd6420bd98318025f96206e06",
"assets/assets/augments/ammo_mods/shadow_rift/sr_supermassive.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/ammo_mods/shadow_rift/sr_targeted.webp": "3bc393af6ccb79d082c3d4d719269539",
"assets/assets/augments/ammo_mods/shadow_rift/sr_topple_danger.webp": "588385ff9b3822d000d07b4c8d317e87",
"assets/assets/augments/field_upgrades/aether_shroud/as_burst_dash.webp": "824edba891bf7002d3968d88abf93e8c",
"assets/assets/augments/field_upgrades/aether_shroud/as_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/field_upgrades/aether_shroud/as_extra_charge.webp": "c59489a7e7c956a31b82c67f0f42fbd6",
"assets/assets/augments/field_upgrades/aether_shroud/as_group_shroud.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/field_upgrades/aether_shroud/as_instant_reload.webp": "674c48edfa0eb206bf80e8abef0aed31",
"assets/assets/augments/field_upgrades/aether_shroud/as_logo.webp": "af016f91ca42b79aa0c2be0e4c24a238",
"assets/assets/augments/field_upgrades/aether_shroud/as_void_sheath.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/field_upgrades/dark_flare/df_broad_beam.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/field_upgrades/dark_flare/df_dark_pact.webp": "0a6775f2bcfaa0cef91055da3453d628",
"assets/assets/augments/field_upgrades/dark_flare/df_extension.webp": "62c903dee29b5cb76b3e1b5293001636",
"assets/assets/augments/field_upgrades/dark_flare/df_extra_charge.webp": "c59489a7e7c956a31b82c67f0f42fbd6",
"assets/assets/augments/field_upgrades/dark_flare/df_heavy_shadow.webp": "23cde21c61035037df06a623d0a74913",
"assets/assets/augments/field_upgrades/dark_flare/df_logo.webp": "51bdb434754efdae51ffac39e0c44c2f",
"assets/assets/augments/field_upgrades/dark_flare/df_supernova.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/field_upgrades/energy_mine/em_carousel.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/field_upgrades/energy_mine/em_extra_charge.webp": "c59489a7e7c956a31b82c67f0f42fbd6",
"assets/assets/augments/field_upgrades/energy_mine/em_frequency_boost.webp": "28d7bddac1bcdd64fe8d63e0aeac7720",
"assets/assets/augments/field_upgrades/energy_mine/em_logo.webp": "5e5d9734c984ac858f839935df4d7829",
"assets/assets/augments/field_upgrades/energy_mine/em_scatter.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/field_upgrades/energy_mine/em_siren.webp": "6463936af63ae6c91a7fa6ca5b3bb767",
"assets/assets/augments/field_upgrades/energy_mine/em_turret.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_extension.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_frenzy_fire.webp": "41e6f49bb238104964ca4fe78af77ed6",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_logo.webp": "1eae50bded18d8a0f0b09b46e0215480",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_phalanx.webp": "72b4f92240151f738fff9b5c1a7ec791",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_rally.webp": "1bd6c51dda71c795dca8162158a95f04",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_repair_boost.webp": "933a5cafa0c5c46a72d0107f8d7c1e8c",
"assets/assets/augments/field_upgrades/frenzied_guard/fg_retribution.webp": "8521619a929df0eac97412802a200c7d",
"assets/assets/augments/field_upgrades/healing_aura/ha_enduring_radiance.webp": "62c903dee29b5cb76b3e1b5293001636",
"assets/assets/augments/field_upgrades/healing_aura/ha_inner_strength.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/field_upgrades/healing_aura/ha_logo.webp": "7f448abc06c973385c8ab9aa8927819c",
"assets/assets/augments/field_upgrades/healing_aura/ha_persistence.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/field_upgrades/healing_aura/ha_protection.webp": "c81664b7283aefef7a0a848ab3137be4",
"assets/assets/augments/field_upgrades/healing_aura/ha_resilience.webp": "0a6775f2bcfaa0cef91055da3453d628",
"assets/assets/augments/field_upgrades/healing_aura/ha_stoic_presence.webp": "81d8c209916f6b52b67d9a8f772fe572",
"assets/assets/augments/field_upgrades/tesla_storm/ts_lithium_charged.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/field_upgrades/tesla_storm/ts_logo.webp": "3304391bcafd6cc34c7c91e87d7de9f0",
"assets/assets/augments/field_upgrades/tesla_storm/ts_overclocked.webp": "89f78882a5480bd34ca83d207447d273",
"assets/assets/augments/field_upgrades/tesla_storm/ts_power_grid.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/field_upgrades/tesla_storm/ts_shockwave.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/field_upgrades/tesla_storm/ts_static_discharge.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/field_upgrades/tesla_storm/ts_transformer.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_again.webp": "1930f98f44d3e4acd503dc9244ae1bb0",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_break.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_draw.webp": "29c0caa604dbb80daea744df26a8d9cd",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_first.webp": "1930f98f44d3e4acd503dc9244ae1bb0",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_head.webp": "d4e2092a2f0e2f319288f5dfa776fb58",
"assets/assets/augments/perks/deadshot_daiquiri/dd_dead_set.webp": "9d8db49380f4f5a4f839126dfcc1f6a6",
"assets/assets/augments/perks/deadshot_daiquiri/dd_logo.webp": "c4bb5ab347e199a00743d15d17a8a9af",
"assets/assets/augments/perks/deadshot_daiquiri/dd_square_logo.webp": "de9e6454cf94e50b128c3d2e701625be",
"assets/assets/augments/perks/death_perception/dp_birds_eye_view.webp": "89f78882a5480bd34ca83d207447d273",
"assets/assets/augments/perks/death_perception/dp_critical_eye.webp": "1930f98f44d3e4acd503dc9244ae1bb0",
"assets/assets/augments/perks/death_perception/dp_death_stare.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/perks/death_perception/dp_extra_charge.webp": "19938dcafb6cd2e7241286beb54c08f2",
"assets/assets/augments/perks/death_perception/dp_further_insight.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/perks/death_perception/dp_logo.webp": "b69f1273ceb1ab3c286bdb48a278e996",
"assets/assets/augments/perks/death_perception/dp_square_logo.webp": "eceb0e2c20d9c70eaf11d5b791f3c0fa",
"assets/assets/augments/perks/death_perception/dp_treasure_hunter.webp": "8bd9a7a376ae3999a611f901d239842a",
"assets/assets/augments/perks/elemental_pop/ep_chill_berry.webp": "8353494793feb28753e41299558ca074",
"assets/assets/augments/perks/elemental_pop/ep_citrus_focus.webp": "e95a368253cd213cdcf47127b6cee061",
"assets/assets/augments/perks/elemental_pop/ep_electric_cherry.webp": "594a06f798ce57681f58059ee3e29e3c",
"assets/assets/augments/perks/elemental_pop/ep_imperil_peach.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/perks/elemental_pop/ep_logo.webp": "e9ffd8a542f5124c319358049d679b61",
"assets/assets/augments/perks/elemental_pop/ep_pineapple_blast.webp": "39aa67f11392acbc5732635b93d90174",
"assets/assets/augments/perks/elemental_pop/ep_square_logo.webp": "89d75d72dcda90605be2c2c62efc1336",
"assets/assets/augments/perks/elemental_pop/ep_vulnera_bean.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/jugger-nog/jn_durable_plates.webp": "ccfe4a0249ab1b27b707c8cc29dd22df",
"assets/assets/augments/perks/jugger-nog/jn_hardened_plates.webp": "1fd5beeea17edd6c22fdd6fcbb8d926e",
"assets/assets/augments/perks/jugger-nog/jn_logo.webp": "34cdc077379a5391ab5570d485373585",
"assets/assets/augments/perks/jugger-nog/jn_probiotic.webp": "dffd634c37bdfe6c9e353e53a795cf19",
"assets/assets/augments/perks/jugger-nog/jn_reactive_armor.webp": "431641e06fe99979bca7c17aa46bb077",
"assets/assets/augments/perks/jugger-nog/jn_retaliation.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/jugger-nog/jn_square_logo.webp": "7277d54b9cdf01f91a277fbd16ae2fbf",
"assets/assets/augments/perks/jugger-nog/jn_turtle_shell.webp": "6f5a8d2114d33b64443a93b4753919d7",
"assets/assets/augments/perks/melee_macchiato/mm_expresso.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/perks/melee_macchiato/mm_hidden_impact.webp": "674c48edfa0eb206bf80e8abef0aed31",
"assets/assets/augments/perks/melee_macchiato/mm_logo.webp": "af3608779ae5ebafa61e63dc1b5138a1",
"assets/assets/augments/perks/melee_macchiato/mm_square_logo.webp": "61948b11e4374a83fcc2dda1f081a04e",
"assets/assets/augments/perks/melee_macchiato/mm_stick_n_move.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/melee_macchiato/mm_strength_training.webp": "a51e9789f876151584329f5cb8861cce",
"assets/assets/augments/perks/melee_macchiato/mm_triple_shot.webp": "588385ff9b3822d000d07b4c8d317e87",
"assets/assets/augments/perks/melee_macchiato/mm_vampiric_extraction.webp": "41f915a2a048191f5d889675ff032344",
"assets/assets/augments/perks/phd_flopper/pf_dr_ram.webp": "8ac6aa1a3986941296a409266e1e7302",
"assets/assets/augments/perks/phd_flopper/pf_environmentalist.webp": "802b6bd4e567f4bf05f6975f10d960ed",
"assets/assets/augments/perks/phd_flopper/pf_eod_technician.webp": "0bf6daf698d2bd2c88a7035c7e9a658d",
"assets/assets/augments/perks/phd_flopper/pf_gravity_md.webp": "6d7a91bf188908323ae2c2616623e318",
"assets/assets/augments/perks/phd_flopper/pf_logo.webp": "42fb170b2a4e262223c4fd50f1bc54b5",
"assets/assets/augments/perks/phd_flopper/pf_phd_slider.webp": "fa97d830ac772b7fa2637f8907e122f7",
"assets/assets/augments/perks/phd_flopper/pf_square_logo.webp": "24690ccf8f486dd0c90dee44b2def012",
"assets/assets/augments/perks/phd_flopper/pf_tribologist.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/quick_revive/qr_dying_wish.webp": "44e7f568db5d67d526cc89b5973d65e5",
"assets/assets/augments/perks/quick_revive/qr_emt.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/perks/quick_revive/qr_equivalent_exchange.webp": "b2ec5c7c7b8a4f7d49afe90adb9f2a63",
"assets/assets/augments/perks/quick_revive/qr_karmic_return.webp": "8f5a336d56d45d2420fbaf7f67905ff1",
"assets/assets/augments/perks/quick_revive/qr_logo.webp": "a2011a357d5ebba3e837f99f01ed6f1e",
"assets/assets/augments/perks/quick_revive/qr_slow_death.webp": "0d3c75d9d4f40319abda4dbf2eb90392",
"assets/assets/augments/perks/quick_revive/qr_square_logo.webp": "0da28064728de66b70aba744750eab58",
"assets/assets/augments/perks/quick_revive/qr_swift_recovery.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/speed_cola/sc_classic_formula.webp": "a5adbfcf13b1147f928af23443119def",
"assets/assets/augments/perks/speed_cola/sc_fast_pitcher.webp": "a0b5bd0568ee14e1bd9555146c0c4b35",
"assets/assets/augments/perks/speed_cola/sc_logo.webp": "08e1da8cadc0d7874c24a1371fa5a05b",
"assets/assets/augments/perks/speed_cola/sc_phantom_reload.webp": "7d2b623643364d139e7619c85c71e225",
"assets/assets/augments/perks/speed_cola/sc_quick_swap.webp": "22162ded7317d801b8f07cf25671a61d",
"assets/assets/augments/perks/speed_cola/sc_speedy_roulette.webp": "89f78882a5480bd34ca83d207447d273",
"assets/assets/augments/perks/speed_cola/sc_square_logo.webp": "c4ea8647562e9430cf4bb0a54c6d7d93",
"assets/assets/augments/perks/speed_cola/sc_supercharged.webp": "8bd9a7a376ae3999a611f901d239842a",
"assets/assets/augments/perks/stamin-up/su_dasher.webp": "084b3c609c6a64226dc02bf49b0e2530",
"assets/assets/augments/perks/stamin-up/su_free_faller.webp": "1d3aa4a42a6a1ae74acf661040ccfda7",
"assets/assets/augments/perks/stamin-up/su_hard_target.webp": "b011e3b02e83985085113daf342fbad7",
"assets/assets/augments/perks/stamin-up/su_hot_foot.webp": "289a09d71761217bc9b211cd281e58d6",
"assets/assets/augments/perks/stamin-up/su_logo.webp": "1dd79f236d12ce9b675e79090bda2ae7",
"assets/assets/augments/perks/stamin-up/su_quarterback.webp": "c0ee11706719e5c331889bf9f0837703",
"assets/assets/augments/perks/stamin-up/su_square_logo.webp": "96f3b0c69c416e3db1cb7e5018371a66",
"assets/assets/augments/perks/stamin-up/su_stalker.webp": "0e01950c18402909d4018b7454b1fbf9",
"assets/assets/augments/perks/vulture_aid/va_carrion_luggage.webp": "0bf6daf698d2bd2c88a7035c7e9a658d",
"assets/assets/augments/perks/vulture_aid/va_condors_reach.webp": "2a5f15a9cfa26948329a3a3ef81106bc",
"assets/assets/augments/perks/vulture_aid/va_fetid_upgr-aid.webp": "41e6f49bb238104964ca4fe78af77ed6",
"assets/assets/augments/perks/vulture_aid/va_logo.webp": "6152e03bf59c1866849ab60284cfbcad",
"assets/assets/augments/perks/vulture_aid/va_parting_gift.webp": "8bd9a7a376ae3999a611f901d239842a",
"assets/assets/augments/perks/vulture_aid/va_picky_eater.webp": "209ec103e1344d4a190d27a59887eb75",
"assets/assets/augments/perks/vulture_aid/va_smell_of_death.webp": "e95a368253cd213cdcf47127b6cee061",
"assets/assets/augments/perks/vulture_aid/va_square_logo.webp": "13983b7fc97eb8b38f870dfa22eb2716",
"assets/assets/citadelle/book_symbols/cardinal_eye.webp": "19b390d07a9289fefdfd38d237cc3ab6",
"assets/assets/citadelle/book_symbols/cardinal_eye_trap.webp": "e1624e5a96c9ecbe0468f35d8d93a69b",
"assets/assets/citadelle/book_symbols/circle_eye.webp": "05a2b76f670368d6bf3c96bc2cea3edf",
"assets/assets/citadelle/book_symbols/circle_eye_trap.webp": "32701017ddfc8ad82bd5002782b53acd",
"assets/assets/citadelle/book_symbols/only_eye.webp": "33238b1958c0414beaedfbc51ee7b4ea",
"assets/assets/citadelle/book_symbols/only_eye_trap.webp": "921e678669ec44a15b12c3954d4093c7",
"assets/assets/citadelle/book_symbols/star_eye.webp": "66d8724d0eee3bbf315d766feeba5c69",
"assets/assets/citadelle/book_symbols/star_eye_trap.webp": "7ebd1fd74ca3f36376474e7cd30650c6",
"assets/assets/citadelle/book_symbols/trap_skip.png": "f5c130ac7ac9bb04c7c59bd1475259b1",
"assets/assets/citadelle/raven_sword/air.webp": "2afd0eec0453379c56d16ddca1386d86",
"assets/assets/citadelle/raven_sword/aquarius.webp": "1787b1ef41348332ec02c9bcfb7145d6",
"assets/assets/citadelle/raven_sword/aries.webp": "84ec7b3177582095356112026e88fb66",
"assets/assets/citadelle/raven_sword/bird1.webp": "291f1adca0f693813856e4b8edfbb82d",
"assets/assets/citadelle/raven_sword/cancer.webp": "56ead5c516134adde939a4ecca3c173a",
"assets/assets/citadelle/raven_sword/capricorn.webp": "86c3003b9563da63b866124750cfbe64",
"assets/assets/citadelle/raven_sword/earth.webp": "028d76a49fa56164be7ff2009cacb1f8",
"assets/assets/citadelle/raven_sword/fire.webp": "c461b7ae39201ae7a4908fe966fc33be",
"assets/assets/citadelle/raven_sword/fish1.webp": "0e62313530e476d593bc36e930002d9d",
"assets/assets/citadelle/raven_sword/gemini.webp": "d7990d1e8646f9596ce976be0bc1b581",
"assets/assets/citadelle/raven_sword/horn1.webp": "24ef8192c1cf77d322825241d8423dea",
"assets/assets/citadelle/raven_sword/jaw1.webp": "8185561db3d9243294bbbc05b0325694",
"assets/assets/citadelle/raven_sword/leo.webp": "9332f21fe7f97cadf23295937ed7b164",
"assets/assets/citadelle/raven_sword/libra.webp": "1aa61b7ad8b8c647041e463fea0c1460",
"assets/assets/citadelle/raven_sword/pisces.webp": "79ffe71663ca99f3996b4b8825e1da17",
"assets/assets/citadelle/raven_sword/sagittarius.webp": "545ad1e985a518b1b1c402b70b85d897",
"assets/assets/citadelle/raven_sword/scorpio.webp": "7c15a3e0e868182997ebcb9d69d8d542",
"assets/assets/citadelle/raven_sword/scorpion1.webp": "1550055e681fa33a4e2e783c18285dd2",
"assets/assets/citadelle/raven_sword/taurus.webp": "9066723d98ebb894fe4dca6720f91b82",
"assets/assets/citadelle/raven_sword/virgo.webp": "f397636ce0be5a2589ccdd38c4080433",
"assets/assets/citadelle/raven_sword/water.webp": "ef550b816c2b4b7b7b87822f926c4c5d",
"assets/assets/citadelle/wall_symbols/aries.webp": "934f4942ef8bcedb4fc151472d45b01e",
"assets/assets/citadelle/wall_symbols/circle.webp": "6b5bff66e6b88b4509f06a41cd080985",
"assets/assets/citadelle/wall_symbols/circle_halved.webp": "92415e4ab6d7be44d9363ebf67a88ceb",
"assets/assets/citadelle/wall_symbols/circle_in_circle.webp": "21b4eed2796a9685cc48512dee069687",
"assets/assets/citadelle/wall_symbols/circle_lasso.webp": "4f4a170c282b4c967fef5ffc77379d32",
"assets/assets/citadelle/wall_symbols/circle_pronged.webp": "d18e1bde46da5fd674fff219ec056e2a",
"assets/assets/citadelle/wall_symbols/circle_quarters.webp": "e22113d7ffe9d863100d00ccfe4b426b",
"assets/assets/citadelle/wall_symbols/circle_three.webp": "6a213146627b021552fd71941208b5f8",
"assets/assets/citadelle/wall_symbols/circle_trio.webp": "35319a5dc7984e91ac8b0e63205c4733",
"assets/assets/citadelle/wall_symbols/female.webp": "488f8d1934993098b5e2ea8f0e0a05c4",
"assets/assets/citadelle/wall_symbols/fourteen.webp": "e72088314e211fafcffd62875d1a9604",
"assets/assets/citadelle/wall_symbols/goalposts.webp": "61b1786a4a5a329b612b8f6e7b02b8e6",
"assets/assets/citadelle/wall_symbols/helmet.webp": "105bc47a6a1baaba0bd758b94c2fa8c5",
"assets/assets/citadelle/wall_symbols/key.webp": "11b332ed853009400c9dcc693ee32078",
"assets/assets/citadelle/wall_symbols/lectern.webp": "7319c70d9b8bd27a5464746b47946c0f",
"assets/assets/citadelle/wall_symbols/male.webp": "5d68c76046bd2867ea827fcab007f7ff",
"assets/assets/citadelle/wall_symbols/powerline.webp": "2cceb296ded12e4e8a8797dfb98a13aa",
"assets/assets/citadelle/wall_symbols/triangle.webp": "220764de24521d7b37a13141733ac332",
"assets/assets/citadelle/wall_symbols/triangle_kite.webp": "5762cc970290b7ca87117b7ff9873cdb",
"assets/assets/citadelle/wall_symbols/trident.webp": "d401222629d0b7ff1752f5d41e04773f",
"assets/assets/other/husky_rescue.png": "e541cca708ea39a070553c3f5845fd0d",
"assets/assets/terminus/algebra/0.webp": "fffbdc1f400ed66b490147373ea5cf26",
"assets/assets/terminus/algebra/10.webp": "0ba22723eacedca249130cba04aef4ee",
"assets/assets/terminus/algebra/11.webp": "0f64f7bbed64b97837e1557df747c929",
"assets/assets/terminus/algebra/20.webp": "817273a7835255cc3399f8985cdd9954",
"assets/assets/terminus/algebra/21.webp": "81d9272c8471afbb91d60caacd05a296",
"assets/assets/terminus/algebra/22.webp": "a91961690d806a45fc9aac48ddf3589b",
"assets/assets/terminus/algebra/equations.jpeg": "d919d3bed0a4574c13e19f18f10477b4",
"assets/assets/terminus/algebra/terminus_algebra_0.png": "9af762d973c726958f5a7a081c8613e8",
"assets/assets/terminus/algebra/terminus_algebra_10.png": "f8da4a0769dcdc22b762a6044681446f",
"assets/assets/terminus/algebra/terminus_algebra_11.png": "b41b79dc92bc3f8b6a58f223ab4f0004",
"assets/assets/terminus/algebra/terminus_algebra_20.png": "92a28adffeeb82c604b80e2f8091c8ce",
"assets/assets/terminus/algebra/terminus_algebra_21.png": "abe6b89905144f7d221ba9ed154a8b09",
"assets/assets/terminus/algebra/terminus_algebra_22.png": "214074ce7e4db0e9afeffade92b4bfbd",
"assets/assets/tomb/staff_symbols/0.webp": "a9ded0b15626bb72c74bfd6ce7366cbe",
"assets/assets/tomb/staff_symbols/1.webp": "cd587d59cf0225fcf4fd2ee6ae04041d",
"assets/assets/tomb/staff_symbols/2.webp": "541b1b1af8d51ef78b6bc711d10f0046",
"assets/assets/tomb/staff_symbols/3.webp": "ba9b1a6ab6511ecfb7824fbc84436775",
"assets/assets/tomb/staff_symbols/4.webp": "8166bf7d0c0defa88f91aa58c3800cdd",
"assets/assets/tomb/staff_symbols/5.webp": "543877d5fdf09db2cc6a8fefc07dbd9c",
"assets/assets/tomb/staff_symbols/6.webp": "cbf4c8ff893eb23048a37872f8e0a4aa",
"assets/assets/tomb/staff_symbols/7.webp": "c540323d46b3a4492c1b06ded00395eb",
"assets/assets/tomb/staff_symbols/symbols.webp": "357ad3534c1195ba1112a70d6c5082bd",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "49f2d7c3b17cb5d18fafbd4b0456590f",
"assets/NOTICES": "233ecdcf8df96c4460745eec8ef5bdf1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "37011d72e3b738b19555e3e4141c4c04",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "24724ce37771f194f77916326522062c",
"/": "24724ce37771f194f77916326522062c",
"main.dart.js": "0f6ae70c5cd2fa5359fe89dc41eeccc9",
"manifest.json": "ae0789498e713657cdaaa9cfa0500c1f",
"version.json": "867f2efe52491afc06ba7b3b91cbc24f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
