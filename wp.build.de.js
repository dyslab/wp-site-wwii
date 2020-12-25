const fileIDs = [
  {
    folder: 'js_de',
    id: 'de_army_tanki',
    title: 'Ⅰ号坦克'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankii',
    title: 'Ⅱ号坦克'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankiii',
    title: 'Ⅲ号坦克'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankiv',
    title: 'Ⅳ号坦克'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankv',
    title: 'Ⅴ号黑豹坦克'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankvi',
    title: 'Ⅵ号虎式（虎Ⅰ）坦克'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankvi_ii',
    title: 'Ⅵ号虎王（虎Ⅱ）坦克'
  },
  {
    folder: 'js_de',
    id: 'de_army_tank35',
    title: '35（t）坦克（捷克产）'
  },
  {
    folder: 'js_de',
    id: 'de_army_tank38',
    title: '38（t）坦克（捷克产）'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyeri',
    title: 'Ⅰ号47mm自行反坦克炮车（坦克歼击车）'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyermarder',
    title: '“黄鼠狼”反坦克炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyernashorn',
    title: '88mm“犀角”自行反坦克炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyeriv',
    title: 'Ⅳ号坦克歼击车'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyerjag',
    title: '“猎豹”重型坦克歼击车'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyertiger',
    title: '“猎虎”重型坦克歼击车'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyerelefant',
    title: '“费迪南德”/“象”式坦克歼击车'
  },
  {
    folder: 'js_de',
    id: 'de_army_tankdestroyerhetzer',
    title: '“追猎者”坦克歼击车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunIII',
    title: 'Ⅲ号自行突击炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunⅣ',
    title: 'Ⅳ号自行突击炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunWespe',
    title: '“黄蜂”105mm自行榴弹炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunHummel',
    title: '“野蜂”自行榴弹炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunBrummbar',
    title: '“灰熊”自行突击炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunSturmtiger',
    title: '“突击虎”臼炮自行炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunKarl',
    title: '“卡尔”重型臼炮自行炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunMobel',
    title: '“家具车”自行高射炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunWirbelwind',
    title: '“旋风”自行高射炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunOstwind',
    title: '“东风”自行高射炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunFlak38',
    title: '38（t）自行高射炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunFlakI',
    title: 'Ⅰ号自行高射炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2501',
    title: '250/1型半履带装甲运兵车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2511',
    title: '251/1型半履带装甲运兵车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25010',
    title: '250/10型半履带装甲炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25011',
    title: '250/11型半履带装甲炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25110',
    title: '251/10型半履带装甲炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25122',
    title: '251/22型半履带装甲炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2519',
    title: '251/9型半履带装甲炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2508',
    title: '250/8型半履带装甲炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2507&2512',
    title: '250/7、251/2型半履带装甲迫击炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2511&Kfz4',
    title: '251/1、Sd Kfz 4/1型半履带装甲火箭炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25117',
    title: '251/17型半履带装甲防空炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25121',
    title: '251/21型半履带装甲防空炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv71&72',
    title: 'Sd Kfz 7/1、7/2型半履带防空炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv104&105',
    title: 'Sd Kfz 10/4、10/5型半履带防空炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2509',
    title: '250/9型半履带装甲侦察车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2503',
    title: '250/3型半履带装甲通讯指挥车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2513',
    title: '251/3型半履带装甲通讯指挥车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2516',
    title: '251/6型半履带装甲指挥车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv253',
    title: '253型半履带装甲炮兵观测车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25xa',
    title: '250、251系列半履带装甲炮兵观测车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv252',
    title: '252型半履带装甲弹药运载车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2518',
    title: '251/8型半履带装甲救护车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv2514',
    title: '251/4型半履带装甲火炮牵引（弹药运载）车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25116',
    title: '251/16型半履带装甲喷火车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25157',
    title: '251/5、251/7型半履带装甲工兵车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25xl',
    title: '250/2、251/11、251/19型半履带装甲布线与线路交换车'
  },
  {
    folder: 'js_de',
    id: 'de_army_avhtv25120',
    title: '251/20型半履带装甲红外辅助投光车'
  },
  {
    folder: 'js_de',
    id: 'de_army_sdkfz67',
    title: 'Sdkfz6、Sdkfz7型半履带牵引车'
  },
  {
    folder: 'js_de',
    id: 'de_army_sdkfz11',
    title: 'Sdkfz 11型半履带车'
  },
  {
    folder: 'js_de',
    id: 'de_army_sdkfz2',
    title: 'Sdkfz 2型小型半履带车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav221&222',
    title: 'Sdkfz 221/222型4轮装甲侦察车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav223s',
    title: 'Sdkfz系列4轮装甲通讯车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav231&232',
    title: 'Sdkfz 231/232型6轮装甲车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav231',
    title: 'Sdkfz 231型轮式（8轮）装甲侦察车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav232',
    title: 'Sdkfz 232型轮式（8轮）装甲通讯车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav233',
    title: 'Sdkfz 233型轮式（8轮）装甲炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav234',
    title: 'Sdkfz 234型8轮重型装甲车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wav263',
    title: 'Sdkfz 263型8轮装甲通讯车'
  },
  {
    folder: 'js_de',
    id: 'de_army_wavADGZ',
    title: 'ADGZ型8轮重型装甲车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtOpel',
    title: '欧宝（闪电）军用卡车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtBenz',
    title: '奔驰军用卡车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtFord',
    title: '福特军用卡车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtOther',
    title: '其它品牌军用卡车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtsVW',
    title: '大众军用小车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtsHorch',
    title: '霍希军用小车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtsBenz',
    title: '奔驰军用小车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtsSteyr',
    title: '斯太尔军用小车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtsOther',
    title: '其它品牌军用小车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtmZDP',
    title: '春达普（Zϋndapp）军用摩托车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtmDKW&NSU',
    title: 'DKW和NSU军用摩托车'
  },
  {
    folder: 'js_de',
    id: 'de_army_mtmBMW',
    title: '宝马军用摩托车'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonPak3536',
    title: '37mm Pak35/36型反坦克炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonPak38',
    title: '50mm Pak38型反坦克炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon75at',
    title: '75mm反坦克炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon88at',
    title: '88mm反坦克炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonFlak30',
    title: '20mm Flak30型高射炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonFlak38',
    title: '20mm Flak38型高射炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon37aa',
    title: '37mm高射炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonFlak18',
    title: '88mm Flak18型高射炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonFlak36',
    title: '88mm Flak36/37/41型高射炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon88aa',
    title: '88mm高射炮防空作战篇'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonIG18',
    title: '75mm le.IG18型步兵炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonIG33',
    title: '150mm s.IG33型步兵炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonFH18',
    title: '105mm Ie FH18型榴弹炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonsFH18',
    title: '150mm s.FH18型榴弹炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon105K18',
    title: '105mm K18型加农炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon170K18',
    title: '170mm K18型加农炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannonMorser18',
    title: '210mm Mörser 18重型臼炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon41150',
    title: '41型150mm多管火箭炮'
  },
  {
    folder: 'js_de',
    id: 'de_army_cannon42210',
    title: '42型210mm多管火箭炮'
  },
  {
    folder: 'js_de',
    id: 'de_airforce',
    title: '空战武器'
  },
  {
    folder: 'js_de',
    id: 'de_army',
    title: '陆战武器'
  },
  {
    folder: 'js_de',
    id: 'de_navy',
    title: '海战武器'
  },
  {
    folder: 'js_de',
    id: 'de_shortcut',
    title: '快捷目录'
  }
];

module.exports = fileIDs;
