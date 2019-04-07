import { Product, ProductFunction } from './product';

export const FEATURED_PRODUCTS: Product[] = [
    {
        id: 'blzy',
        name: '云南七子饼茶 - 布朗紫印',
        longName: '中茶牌云南七子饼茶 - 布朗紫印 普洱茶 (熟茶)',
        productNumber: 'YTPA12BC0046',
        ingredient: '云南大叶种晒青茶叶',
        type: '普洱茶 (熟茶)',
        price: 399.99,
        volume: '357g (1饼)',
        origin: '中国 - 云南省 - 昆明市',
        producer: '云南中茶茶业有限公司',
        highlight: null,
        description: '这是一款纯料普洱熟茶, 饼型圆整大气, 饼面条索完整, 色泽红褐, 金毫显露。其原料来自单一产区, 单一茶树品种, 这在熟茶产品中并不多见, 旨在更好地体现出该茶区的茶叶特点, 带给您至臻至纯的饮茶感受。',
        productFunction: [
            {
                summary: '安神',
                detail: '普洱熟茶是可以在睡前喝的安神茶, 而且无论年龄大小都可以睡前饮用。'
            },
            {
                summary: '降脂、减肥降压、抗动脉硬化',
                detail: '长期饮用普洱茶能使胆固醇及甘油脂减少, 所以长期饮用普洱茶有治疗肥胖症的功用。饮用普洱茶能引起人的血管舒张、血压下降、心率减慢和脑部血流量减少等生理效应, 对高血压和脑动脉硬化患者有良好的治疗作用。'
            },
            {
                summary: '防癌、抗癌',
                detail: '科学家通过大量的人群比较, 证明饮茶人群的癌症发病率较低。而普洱茶含有多种丰富的抗癌微量元素, 普洱茶杀癌细胞的作用强烈。'
            },
            {
                summary: '养胃、护胃',
                detail: '在适宜的浓度下, 饮用平和的普洱茶对肠胃不产生刺激作用, 黏稠、甘滑、醇厚的普洱茶进入人体肠胃形成的膜附着于胃的表层, 对胃产生有益的保护层, 长期饮用可起到养胃、护胃作用。'
            },
            {
                summary: '消炎、杀菌、治痢',
                detail: '医药界研究及临床实验证明, 云南普洱茶有抑菌作用, 浓茶汁日服10次, 可以治疗细菌性痢疾, 这与云南大叶种茶内含丰富的茶多酚直接相关。'
            },
            {
                summary: '抗衰老',
                detail: '茶叶中的儿茶素类化合物具有抗衰老的作用。云南大叶种茶所含儿茶素, 总量高于其他茶树品种, 抗衰老作用优于其他茶类, 丰富的茶多酚帮助肌肤抵抗衰老。'
            },
            {
                summary: '生津止渴、消暑、解毒、通便',
                detail: '普洱茶能够调节肠胃, 使肠胃恢复正常功能, 解决因便秘引起的痘痘以及口臭问题。'
            }
        ]
    },
    {
        id: 'kls',
        name: '困鹿山 - 极品古树春尖',
        longName: '困鹿山 - 极品古树春尖 纯手工普洱茶 (生茶)',
        productNumber: null,
        ingredient: '极品古树春尖',
        type: '普洱茶 (生茶)',
        price: 499.99,
        volume: '200g (1饼)',
        origin: '中国 - 云南省 - 普洱市',
        producer: '困鹿山古茶园私人订制',
        highlight: '口感滑, 回甘好, 香气浓郁',
        description: '困鹿山普洱茶香型独特, 在云南三大茶区中独有此茶能称得一个"雅"字。茶香清雅、高锐、持久, 韵长, 是"普洱茶"中的一秀, 历来是贡茶的首选。'
            + '新茶入口微苦化甘转甜, 口感香、甘、甜相混而生, 丰富沉厚, 喉韵甘润持久, 气蕴上扬而沉实, 无愧皇家茶园称号而问鼎普洱茶界。',
        productFunction: [
            {
                summary: '降脂、提神、降压、减肥',
                detail: '生普洱茶功效主要可以清理肠道, 有降脂、提神、降压和减肥功效。生茶的活性成份较多, 因此易失眠者、感冒发热者、胃溃疡患者、孕妇不宜饮用。'
            },
            {
                summary: '降血脂、降血压、预防心血管疾病',
                detail: '饮茶可以降低人体血液中有害胆固醇的含量、而增加有益胆固醇含量、有降低血压的功效。同时可以降低血液的粘度、抗血小板凝集, 因此对预防心血管疾病(如脑血栓、冠心病等)有效。'
                    + '如据在荷兰进行的流行病学调查结果, 饮茶多的人群患冠心病的危险性可降低45%。'
            },
            {
                summary: '防辐射',
                detail: '据广东中山大学何国藩等用普洱茶进行的研究结果表明, 饮用2%普洱茶可以解除用钴60辐射引起的伤害。'
            },
            {
                summary: '提高免疫性',
                detail: '人体的免疫性反映了对疾病的抵抗力。人体的免疫性可分为血液免疫和肠道免疫。饮茶可以增加血液中白血球和淋巴细胞的数量、提高血液免疫性。'
                    + '在美国报告茶叶中的茶氧酸在人体中可以使血液免疫细胞对外界侵袭产生抵御反应。除了血液免疫外, 饮茶还可以增加肠道中的有益细菌(如双歧杆菌)数量, 减少有害细菌的数量, 从而提高肠道免疫。'
            },
            {
                summary: '杀菌、抗病毒',
                detail: '饮茶对杀灭肠道疾病菌有持久的效果。在俄罗斯提倡腹泻病人饮浓茶汁进行治疗。日本和美国科学家证明茶叶中的EGCG对流感病毒有强的抑制作用, 阻止病毒粘附在细胞上。'
                    + '在前几年流行的"非典"时期, 世界卫生组织(WHO)和我国台湾省的专家建议喝茶可以阻止冠状病毒的入侵。'
            }
        ]
    }
];

export const HOT_PRODUCTS: Product[] = [
    {
        id: '7581_zpdp',
        name: '7581臻品袋泡',
        longName: '中茶牌普洱茶 - 7581臻品袋泡 (熟茶)',
        productNumber: 'YTPA12DP009',
        ingredient: '云南大叶种晒青茶叶',
        type: '普洱茶 (熟茶)',
        price: 255.99,
        volume: '300g (2g/袋 - 25袋/小盒 - 6小盒/中盒)',
        origin: '中国 - 云南省 - 昆明市',
        producer: '云南中茶茶业有限公司',
        highlight: '三年陈化, 陈醇甘润, 经典传承',
        description: '7581是普洱茶历史上第一款由人工渥堆发酵而成的普洱熟茶, 为云南中茶赢得了"熟茶发酵工艺首创者"的美誉。它不仅"主宰了整个80年代到90年代的熟砖系统", 而且到现在, 也是很多普洱茶茶友品茗的首选。'
            + '2015年云南中茶公司为适应市场需求, 臻选原料精心拼配首度研发7581袋泡熟茶, 该茶汤色红亮, 醇厚润糯, 经久耐泡, 香纯甘甜, 外观精美, 简洁方便。',
        productFunction: [
            {
                summary: '安神',
                detail: '普洱熟茶是可以在睡前喝的安神茶, 而且无论年龄大小都可以睡前饮用。'
            },
            {
                summary: '降脂、减肥降压、抗动脉硬化',
                detail: '长期饮用普洱茶能使胆固醇及甘油脂减少, 所以长期饮用普洱茶有治疗肥胖症的功用。饮用普洱茶能引起人的血管舒张、血压下降、心率减慢和脑部血流量减少等生理效应, 对高血压和脑动脉硬化患者有良好的治疗作用。'
            },
            {
                summary: '防癌、抗癌',
                detail: '科学家通过大量的人群比较, 证明饮茶人群的癌症发病率较低。而普洱茶含有多种丰富的抗癌微量元素, 普洱茶杀癌细胞的作用强烈。'
            },
            {
                summary: '养胃、护胃',
                detail: '在适宜的浓度下, 饮用平和的普洱茶对肠胃不产生刺激作用, 黏稠、甘滑、醇厚的普洱茶进入人体肠胃形成的膜附着于胃的表层, 对胃产生有益的保护层, 长期饮用可起到养胃、护胃作用。'
            },
            {
                summary: '消炎、杀菌、治痢',
                detail: '医药界研究及临床实验证明, 云南普洱茶有抑菌作用, 浓茶汁日服10次, 可以治疗细菌性痢疾, 这与云南大叶种茶内含丰富的茶多酚直接相关。'
            },
            {
                summary: '抗衰老',
                detail: '茶叶中的儿茶素类化合物具有抗衰老的作用。云南大叶种茶所含儿茶素, 总量高于其他茶树品种, 抗衰老作用优于其他茶类, 丰富的茶多酚帮助肌肤抵抗衰老。'
            },
            {
                summary: '生津止渴、消暑、解毒、通便',
                detail: '普洱茶能够调节肠胃, 使肠胃恢复正常功能, 解决因便秘引起的痘痘以及口臭问题。'
            }
        ]
    },
    {
        id: 'jygb',
        name: '金元贡饼',
        longName: '中茶牌普洱茶 - 金元贡饼 普洱茶 (熟茶)',
        productNumber: 'YTPA12TC0016',
        ingredient: '云南大叶种晒青茶叶',
        type: '普洱茶 (熟茶)',
        price: 35.99,
        volume: '80g (8g × 10饼)',
        origin: '中国 - 云南省 - 昆明市',
        producer: '云南中茶茶业有限公司',
        description: '该茶臻选云南西双版纳勐海境内高海拔云南大叶种茶菁, 适度发酵, 采用创新工艺压制, 饼形圆润规整, 精致小巧, 饼面条索紧实, 红褐显毫。甜香显露, 汤色红浓, 滋味尚浓厚回味甜醇。'
            + '每饼8克的小饼采用独立包装, 品饮便捷, 10小饼每盒的纸盒包装精致环保, 高端雅致。是您商务、休闲、旅行、工作的尚佳伴侣, 与您共享美好时光。',
        highlight: '甘甜醇润, 精致小巧, 高端雅致, 轻便简约',
        productFunction: [
            {
                summary: '降脂、减肥降压、抗动脉硬化',
                detail: '长期饮用普洱茶能使胆固醇及甘油脂减少, 所以长期饮用普洱茶有治疗肥胖症的功用。饮用普洱茶能引起人的血管舒张、血压下降、心率减慢和脑部血流量减少等生理效应, 对高血压和脑动脉硬化患者有良好的治疗作用。'
            },
            {
                summary: '防癌、抗癌',
                detail: '科学家通过大量的人群比较, 证明饮茶人群的癌症发病率较低。而普洱茶含有多种丰富的抗癌微量元素, 普洱茶杀癌细胞的作用强烈。'
            },
            {
                summary: '养胃、护胃',
                detail: '在适宜的浓度下, 饮用平和的普洱茶对肠胃不产生刺激作用, 黏稠、甘滑、醇厚的普洱茶进入人体肠胃形成的膜附着于胃的表层, 对胃产生有益的保护层, 长期饮用可起到养胃、护胃作用。'
            },
            {
                summary: '消炎、杀菌、治痢',
                detail: '医药界研究及临床实验证明, 云南普洱茶有抑菌作用, 浓茶汁日服10次, 可以治疗细菌性痢疾, 这与云南大叶种茶内含丰富的茶多酚直接相关。'
            },
            {
                summary: '生津止渴、消暑、解毒、通便',
                detail: '普洱茶能够调节肠胃, 使肠胃恢复正常功能, 解决因便秘引起的痘痘以及口臭问题。'
            }
        ]
    },
    {
        id: 'qbj',
        name: '巧白金',
        longName: '巧白金 - 巧克力状白茶',
        productNumber: '5701',
        ingredient: '白茶',
        type: '巧克力状白茶',
        price: 29.99,
        volume: '180g (60g × 3)',
        origin: '中国 - 福建省 - 福州市',
        producer: '福建茶叶进出口有限责任公司',
        description: '精选自白茶原产地福鼎、政和1000多米高山地区的福鼎大毫、政和大白优质一芽一叶、一芽二叶原料, 秉承传统白茶制作工艺, 结合公司后加工及独到拼配技术, 经资深茶师精心调配而成。香气清鲜显毫香, 滋味醇厚清爽, 汤色浅黄明亮, 实为白茶之典范。',
        highlight: '新颖巧克力状, 简约方便。驱寒退热, 保肝明目。',
        productFunction: [
            {
                summary: '驱寒滋养',
                detail: '在冬天, 尤其是当下气候处于低湿状态, 人体长期处于这样的环境当中, 难免会遭受湿寒入侵体内。温和的老白茶是极佳的御寒、驱寒的饮品。'
            },
            {
                summary: '退热消炎',
                detail: '白茶在加工过程中吸热少, 具有祛湿退热之功效, 在福鼎民间一直流传着白茶的茶水用来消毒、消炎和杀菌。陈年的白毫银针可用作麻疹患儿的退烧药, 其退烧效果比抗生素更好, 古人称其为麻疹圣药。'
            },
            {
                summary: '保肝护肝',
                detail: '白茶片富含的二氢杨梅素等黄酮类天然物质可以保护肝脏, 加速乙醇代谢产物乙醛迅速分解, 变成无毒物质, 降低对肝细胞的损害。'
                    + '另一方面, 二氢杨梅素能够改善肝细胞损伤引起的血清乳酸脱氢酶活力增加, 抑制肝性M细胞胶原纤维的形成, 从而起到保肝护肝的作用, 大幅度降低乙醇对肝脏的损伤, 使肝脏正常状态迅速得到恢复。'
                    + '同时, 二氢杨梅素起效迅速, 并且作用持久, 是保肝护肝, 解酒醒酒的良品。'
            },
            {
                summary: '明目',
                detail: '白茶存放时间越长, 其药用价值更高。白茶中还含有丰富的维生素A原, 它被人体吸收后, 能迅速转化为维生素A, 维生素A能合成视紫红质, 能使眼睛在暗光下看东西更清楚, 可预防夜盲症与干眼病。'
                    + '同时白茶还有防辐射物质, 对人体的造血机能有显著的保护作用, 能减少电视辐射的危害。'
            },
            {
                summary: '抗癌症',
                detail: '在我们日常烹饪过程中, 糖、氨基酸等物质很容易转变成具有致癌作用的杂环胺类化合物, 研究结果表明白茶对多种杂环胺类致癌诱变剂的抑制效果非常显著。'
                    + '舒林酸与白茶结合使用还影响β-连环蛋白(β-catenin)的表达, 阻断致癌物质的形成, 从而对癌症起到化学预防的作用。并降低非甾体抗癌药物(NSAIDs)毒副作用等效果。'
            },
            {
                summary: '降血糖血脂、减肥',
                detail: '白茶特殊的加工工艺较好地保留了人体所必需而其它茶类含量较少的活性酶, 长期饮用白茶可以显著提高人体内脂蛋白脂肪酶活性, 促进脂肪分解代谢, 有效控制胰岛素分泌量, 延缓葡萄糖的吸收, 分解体内多余的糖分, 促进血糖平衡。'
                    + '同时促进胰液分泌, 使血糖来路减少, 去路增加。'
            }
        ]
    },
    {
        id: 'blhc',
        name: '宝莉花茶',
        longName: '宝莉花茶 (茉莉花六堡茶)',
        productNumber: null,
        ingredient: '六堡茶 茉莉花',
        type: '茉莉花六堡茶',
        price: 45.99,
        volume: '120g (5g × 24袋)',
        origin: '中国 - 广西梧州市',
        producer: '梧州中茶茶业有限公司',
        description: '宝莉花茶是精选陈年六堡茶, 和新鲜的茉莉鲜花, 采用科学的窨制工艺加工而成, 兼具六堡茶"红浓陈醇"和茉莉花香特点。'
            + '该茶外形紧结显毫, 香气浓郁鲜灵, 茶汤晶莹剔透似琥珀色, 口感醇滑, 齿颊留香, 叶底匀嫩红亮, 经久耐泡。'
            + '适合不宜饮用绿茶、清香铁观音、普洱生茶之类人群, 是常坐在电脑前白领阶层人士首选饮品, 特别适合爱美的女士们饮用。',
        highlight: '茶性温和, 帮助消化, 健胃养神, 美容养颜',
        productFunction: [
            {
                summary: '膳食营养',
                detail: '黑茶中含有较丰富的营养成份, 最主要的是维生素和矿物质, 另外还有蛋白质、氨基酸、糖类物质等。'
                    + '对主食牛、羊肉和奶酪, 饮食中缺少蔬菜和水果的西北地区的居民而言, 长期饮用湖南黑茶, 是他们人体必需矿物质和各种维生素的重要来源, 有生命之茶之说。'
            },
            {
                summary: '助消化解油',
                detail: '黑茶中的咖啡碱、维生素、氨基酸、磷脂等有助于人体消化, 调节脂肪代谢, 咖啡碱的刺激作用更能提高胃液的分泌量, 从而增进食欲, 帮助消化。'
                    + '日本学者通过科学检验已证明, 黑茶具有很强的解油腻、消食等功能, 这也是肉食民族特别喜欢这种茶的原因。'
                    + '中国西北少数民族人民的食物结构是牛、羊肉和奶酪, 故有"宁可三日无食, 不可一日无茶"之说, 这与茶叶能"去肥腻"、"解荤腥"的功效有很大关系。'
                    + '另外, 黑茶还能改善肠道微生物环境, 具有顺肠胃的功能。中国民间有利用老黑茶治疗腹胀、痢疾、不消食的传统。'
            },
            {
                summary: '降脂减肥',
                detail: '血脂含量高, 会使得脂质在血管壁上沉积, 因而引起动脉粥状硬化和形成血栓。'
                    + '黑茶具有良好的降解脂肪、抗血凝、促纤维蛋白原溶解作用和显著抑制血小板聚集, 还能使血管壁松弛, 增加血管有效直径, 从而抑制主动脉及冠状动脉内壁粥样硬化斑块的形成, 达到降压、软化血管, 防治心血管疾病的目的。'
                    + '黑茶中含量丰富的茶多糖具有降低血脂和血液中过氧化物活性的作用。'
                    + '中国人民解放军总医院于1990年5月至1991年5月对某干休所155名老干部中的55名高血脂患者, 经连续服用黑茶180天(每日3克)的情况进行观察, 其中50例饮用黑茶的, 血脂含量和血中过氧化物活性明显下降。'
            },
            {
                summary: '抗氧化',
                detail: '有关衰老的自由基理论认为, 在正常生理条件下, 人体内的自由基不断产生, 也不断被清除, 处于平衡状态。'
                    + '黑茶中不仅含有丰富的抗氧化物质如儿茶素类、茶色素、黄酮类、维生素C、维生素E、D一胡萝卜素等, 而且含有大量的具抗氧化作用的微量元素如锌、锰、铜(SOD的构成元素)和硒(GSHPX的构成元素)等。'
                    + '黑茶中的儿茶素、茶黄素、茶氨酸和茶多糖, 尤其是含量较多的复杂类黄酮等都具有清除自由基的功能, 因而具有抗氧化、延缓细胞衰老的作用。'
            },
            {
                summary: '抗癌',
                detail: '癌症是当前世界上引起人类死亡率极高的疾病之一。自20世纪70年代后期, 世界各国的科学家先后发现茶叶或茶叶提取物对多种癌症的发生具有抑制作用。'
                    + '湖南农业大学采用现代药物筛选的尖端技术高通量筛选技术对黑茶进行肿瘤细胞模型SGC7901的高通量筛选研究, 证明黑茶对肿瘤细胞具有明显的抑制作用。'
            },
            {
                summary: '降血压',
                detail: '黑茶具有降血压的作用早有报道。日本报道, 黑茶中特有的氨基酸茶氨酸能通过活化多巴胺能神经元, 起到抑制血压升高的作用。此处, 还发现黑茶中的咖啡碱和儿茶素类能使血管壁松弛, 增加血管的有效直径, 通过血管舒张而使血压下降。'
                    + '中国楼福庆等发现茶色素具有显著的抗凝、促进纤溶、防止血小板黏附聚集, 抑制动脉平滑肌细胞增生的作用, 还能显著降低高脂动物血清中甘油三酯、低密度脂蛋白, 提高血清中高密度脂蛋白, 并对ACE酶具有显著抑制作用, 具有降压效果。'
            },
            {
                summary: '降血糖',
                detail: '黑茶中的茶多糖复合物是降血糖的主要成分。茶多糖复合物通常称为茶多糖, 是一类组成成分复杂且变化较大的混合物。'
                    + '对几种茶类的茶多糖含量测定的结果表明, 黑茶的茶多糖含量最高, 且其组分活性也比其它茶类要强, 这是因为在发酵茶中, 由于糖苷酶、蛋白酶、水解酶的作用, '
                    + '而形成了相对长度较短的糖链和肽链的缘故, 短肽链较长肽链更易被吸收, 且生物活性更强, 这可能就是发酵茶尤其是黑茶茶多糖降血糖效果优于其它茶类的原因之一。'
            },
            {
                summary: '杀菌消炎',
                detail: '黑茶汤色的主要组成成分是茶黄素和茶红素。研究表明, 茶黄素不仅是一种有效的自由基清除剂和抗氧化剂, 还对肉毒芽杆菌、肠类杆菌、金黄色葡萄球菌、荚膜杆菌、蜡样芽孢杆菌有明显的抗菌作用。'
                    + '此外, 茶黄素对流感病毒的侵袭和轮状病毒和肠病毒的感染有一定的抑制作用。'
            },
            {
                summary: '利尿解毒',
                detail: '黑茶中咖啡碱的利尿功能是通过肾促进尿液中水的滤出率来实现的。同时, 咖啡碱对膀胱的刺激作用既能协助利尿, 又有助于醒酒, 解除酒毒。'
                    + '同时, 黑茶中的茶多酚不但能使烟草的尼古丁发生沉淀, 并随小便排出体外, 而且还能清除烟气中的自由基, 降低烟气对人体的毒害作用。对于重金属毒物, 茶多酚有很强的吸附作用, 因而多饮茶还可缓解重金属的毒害作用。'
            }
        ]
    }
];

export const PUERH_FUNCTIONS: ProductFunction[] = [
    {
        summary: '安神',
        detail: '普洱熟茶是可以在睡前喝的安神茶, 而且无论年龄大小都可以睡前饮用。'
    },
    {
        summary: '降脂、减肥降压、抗动脉硬化',
        detail: '长期饮用普洱茶能使胆固醇及甘油脂减少, 所以长期饮用普洱茶有治疗肥胖症的功用。饮用普洱茶能引起人的血管舒张、血压下降、心率减慢和脑部血流量减少等生理效应, 对高血压和脑动脉硬化患者有良好的治疗作用。'
    },
    {
        summary: '防癌、抗癌',
        detail: '科学家通过大量的人群比较, 证明饮茶人群的癌症发病率较低。而普洱茶含有多种丰富的抗癌微量元素, 普洱茶杀癌细胞的作用强烈。'
    },
    {
        summary: '养胃、护胃',
        detail: '在适宜的浓度下, 饮用平和的普洱茶对肠胃不产生刺激作用, 黏稠、甘滑、醇厚的普洱茶进入人体肠胃形成的膜附着于胃的表层, 对胃产生有益的保护层, 长期饮用可起到养胃、护胃作用。'
    },
    {
        summary: '消炎、杀菌、治痢',
        detail: '医药界研究及临床实验证明, 云南普洱茶有抑菌作用, 浓茶汁日服10次, 可以治疗细菌性痢疾, 这与云南大叶种茶内含丰富的茶多酚直接相关。'
    },
    {
        summary: '抗衰老',
        detail: '茶叶中的儿茶素类化合物具有抗衰老的作用。云南大叶种茶所含儿茶素, 总量高于其他茶树品种, 抗衰老作用优于其他茶类, 丰富的茶多酚帮助肌肤抵抗衰老。'
    },
    {
        summary: '生津止渴、消暑、解毒、通便',
        detail: '普洱茶能够调节肠胃, 使肠胃恢复正常功能, 解决因便秘引起的痘痘以及口臭问题。'
    }
];
