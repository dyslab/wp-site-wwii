const fileIDs = [
    {
      folder: 'js_us',
      id: 'us_army_tankm2',
      title: 'M2轻型/中型坦克'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankm3',
      title: 'M3轻型坦克'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankm5',
      title: 'M5轻型坦克'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankm24',
      title: 'M24轻型坦克'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankm3m',
      title: 'M3中型坦克'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankm4',
      title: 'M4中型坦克'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankm26',
      title: 'M26重型坦克'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankdestroyerm10',
      title: 'M10坦克歼击车'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankdestroyerm18',
      title: 'M18坦克歼击车'
    },
    {
      folder: 'js_us',
      id: 'us_army_tankdestroyerm36',
      title: 'M36坦克歼击车'
    },
    {
      folder: 'js_us',
      id: 'us_army_spgunM7',
      title: 'M7自行火炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_spgunM12',
      title: 'M12自行火炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_spgunT34',
      title: 'T34“希神”自行火箭炮车'
    },
    {
      folder: 'js_us',
      id: 'us_army_avhtvM2',
      title: 'M2半履带装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_avhtvM3',
      title: 'M3半履带装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_avhtvM15&M16',
      title: 'M15/M16半履带装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_avhtvT19&T30',
      title: 'T19/T30半履带装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_wavM3',
      title: 'M3四轮装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_wavM8',
      title: 'M8六轮装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_wavM20',
      title: 'M20通用轮式装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_mtMB',
      title: '威利MB吉普车'
    },
    {
      folder: 'js_us',
      id: 'us_army_mtCCKW',
      title: '通用CCKW型军用卡车'
    },
    {
      folder: 'js_us',
      id: 'us_army_mtStudebacker',
      title: '斯多德贝克US6型军用卡车'
    },
    {
      folder: 'js_us',
      id: 'us_army_mtGMC353',
      title: '通用DUKW353型轮式水陆两栖运输车'
    },
    {
      folder: 'js_us',
      id: 'us_army_mtRedBall',
      title: '“红球特快”行动中的其它军用汽车'
    },
    {
      folder: 'js_us',
      id: 'us_army_lvt1',
      title: 'LVT1两栖装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_lvt2',
      title: 'LVT2两栖装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_lvt3',
      title: 'LVT3两栖装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_lvt4',
      title: 'LVT4两栖装甲车'
    },
    {
      folder: 'js_us',
      id: 'us_army_cannonM175mm',
      title: 'M1式75mm榴弹炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_cannonM2105mm',
      title: 'M2式105mm榴弹炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_cannonHowitzer155mm',
      title: '美军155mm榴弹炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_cannonM1240mm',
      title: 'M1式240mm榴弹炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_cannonM59',
      title: 'M59加农炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_cannonMortar',
      title: '美军迫击炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_cannonSAT',
      title: '美军小口径反坦克炮'
    },
    {
      folder: 'js_us',
      id: 'us_army_iwM1903Rifle',
      title: 'M1903“斯普林菲尔德”步枪'
    },
    {
      folder: 'js_us',
      id: 'us_army_iwM1Rifle',
      title: 'M1“加兰德”半自动步枪'
    },
    {
      folder: 'js_us',
      id: 'us_army_iwM1917HMG',
      title: 'M1917型重机枪'
    },
    {
      folder: 'js_us',
      id: 'us_army_iwM1919HMG',
      title: 'M1919型重机枪'
    },
    {
      folder: 'js_us',
      id: 'us_army_iwM2HMG',
      title: 'M2型重机枪'
    },
    {
      folder: 'js_us',
      id: 'us_army_iwBazooka',
      title: '“巴祖卡”火箭发射筒'
    },
    {
      folder: 'js_us',
      id: 'us_army_iwFlamethrower',
      title: '美军火焰喷射器'
    },
    {
      folder: 'js_us',
      id: 'us_army',
      title: '陆战武器'
    },
    {
      folder: 'js_us',
      id: 'us_shortcut',
      title: '快捷目录'
    }
  ];

  module.exports = fileIDs;
