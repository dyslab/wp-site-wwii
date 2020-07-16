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
    title: '“突击虎”自行迫击炮车'
  },
  {
    folder: 'js_de',
    id: 'de_army_spgunKarl',
    title: '“卡尔”重型迫击炮车'
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
