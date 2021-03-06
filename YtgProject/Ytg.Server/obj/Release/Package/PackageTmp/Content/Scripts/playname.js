﻿var playTypeData = {
    /**五星*/
    "五星五星组合": "五星组合",
    "五星一帆风顺": "一帆风顺",
    "五星好事成双": "好事成双",
    "五星三星报喜": "三星报喜",
    "五星四季发财": "四季发财",
    /**四星*/
    "四星四星组合": "四星组合",
    /**后三*/
    "后三后三组合": "后三组合",
    /**前三*/
    "前三前三组合": "前三组合",
    /**定位胆*/
    "定位胆定位胆": "",
    /**不定位*/
    "不定位后三一码": "后三一码",
    "不定位前三一码": "前三一码",
    "不定位后三二码": "后三二码",
    "不定位前三二码": "前三二码",
    "不定位四星一码": "四星一码",
    "不定位四星二码": "四星二码",
    "不定位五星二码": "五星二码",
    "不定位五星三码": "五星三码",
    /**任选*/
    "任选二直选复式": "直选复式",
    "任选二直选单式": "直选单式",
    "任选二直选和值": "直选和值",
    "任选二组选复式": "组选复式",
    "任选二组选单式": "组选单式",
    "任选二组选和值": "组选和值",
    "任选三直选复式": "直选复式",
    "任选三直选单式": "直选单式",
    "任选三直选和值": "直选和值",
    "任选三组三复式": "组三复式",
    "任选三组三单式": "组三单式",
    "任选三组六复式": "组六复式",
    "任选三组六单式": "组六单式",
    "任选三混合组选": "混合组选",
    "任选三组选和值": "组选和值",
    "任选四直选复式": "直选复式",
    "任选四直选单式": "直选单式",
    "任选四组选24": "组选24",
    "任选四组选12": "组选12",
    "任选四组选6": "组选6",
    "任选四组选4": "组选4",
    /*大小单双*/
    "大小单双前二大小单双": "前二大小单双",
    "大小单双后二大小单双": "后二大小单双",
    "大小单双前三大小单双": "前三大小单双",
    "大小单双后三大小单双": "后三大小单双",
    "大小单双后三大小单双": "后三大小单双",
    /*11x5 三码**/
    "三码前三直选复式": "前三直选复式",
    "三码前三直选单式": "前三直选单式",
    "三码前三组选复式": "前三组选复式",
    "三码前三组选单式": "前三组选单式",
    /*11x5 二码**/
    "二码前二直选复式": "前二直选复式",
    "二码前二直选单式": "前二直选单式",
    "二码前二组选复式": "前二组选复式",
    "二码前二组选单式": "前二组选单式",
    /*11x5 不定位**/
    "不定位不定位": "不定位",
    /*11x5 趣味型**/
    "趣味型定单双": "定单双",
    "趣味型猜中位": "猜中位",
    /*11x5 任选复式**/
    "任选复式任选一中一": "任选一中一",
    "任选复式任选二中二": "任选二中二",
    "任选复式任选三中三": "任选三中三",
    "任选复式任选四中四": "任选四中四",
    "任选复式任选五中五": "任选五中五",
    "任选复式任选六中五": "任选六中五",
    "任选复式任选七中五": "任选七中五",
    "任选复式任选八中五": "任选八中五",
    /*11x5 任选单式**/
    "任选单式任选一中一": "任选一中一",
    "任选单式任选二中二": "任选二中二",
    "任选单式任选三中三": "任选三中三",
    "任选单式任选四中四": "任选四中四",
    "任选单式任选五中五": "任选五中五",
    "任选单式任选六中五": "任选六中五",
    "任选单式任选七中五": "任选七中五",
    "任选单式任选八中五": "任选八中五",
    /**福彩34  上海时时乐 二星（前二）直选复式*/
    "二星前二直选复式": "前二直选复式",
    "二星前二直选单式": "前二直选单式",
    "二星后二直选复式": "后二直选复式",
    "二星后二直选单式": "后二直选单式",
    "二星前二组选复式": "前二组选复式",
    "二星前二组选单式": "前二组选单式",
    "二星后二组选单式": "后二组选单式",
    "二星后二组选复式": "后二组选复式",
    "不定位一码不定位": "一码不定位",
    "不定位二码不定位": "二码不定位",
    /*k3**/
    "二同号单选标准选号": "二同号单选",
    "二同号单选手动输入": "二同号单选单式",
    "二同号复选标准选号": "二同号复选",
    "二不同号标准选号": "二不同号",
    "二不同号手动输入": "二不同号单式",
    "二不同号胆拖选号": "二不同号胆拖",
    "三连号通选标准选号": "三连号通选",
    "三不同号标准选号": "三不同号",
    "三不同号手动输入": "三不同号单式",
    "三不同号胆拖选号": "三不同号胆拖",
    "三不同号和值选号": "三不同号和值",
    "三同号单选标准选号": "三同号单选",
    "三同号通选标准选号": "三同号通选",
    "和值标准选号": "和值",
    /**排 3 5 */
    "三星排三直选复式": "排三直选复式",
    "三星排三直选单式": "排三直选单式",
    "三星排三直选和值": "排三直选和值",
    "三星排三组三复式": "排三组三复式",
    "三星排三组三单式": "排三组三单式",
    "三星排三组六复式": "排三组六复式",
    "三星排三组六单式": "排三组六单式",
    "三星排三混合组选": "排三混合组选",
    "三星排三组选和值": "排三组选和值",
    "二星前二排五直选复式": "前二排五直选复式",
    "二星前二排五直选单式": "前二排五直选单式",
    "二星后二排五直选复式": "后二排五直选复式",
    "二星后二排五直选单式": "后二排五直选单式",
    "二星前二排五组选复式": "前二排五组选复式",
    "二星前二排五组选单式": "前二排五组选单式",
    "二星后二排五组选复式": "后二排五组选复式",
    "二星后二排五组选单式": "后二排五组选单式",
};
