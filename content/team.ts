interface MemberInfo {
    clazz: string;
    name: string;
}

const studentCoaches: MemberInfo[] = [
    {name: "盖永瑞", clazz: "微机2108"},
    {name: "闫志涛", clazz: "微机2107"},
];

const teamLeader: MemberInfo = {
    name: "韩玉坤",
    clazz: "物联2202",
};

const teamAssistLeaders: MemberInfo[] = [
    {name: "杨博宇", clazz: "计科2205"},
    {name: "王泽旭", clazz: "微机2306"},
    {name: "车丽钠", clazz: "微机2305"},
    {name: "张博伦", clazz: "微机2310"},
];

const fullMembers: MemberInfo[] = [
    {name: "刘来熙", clazz: "计科2205"},
    {name: "刘帅", clazz: "计科2204"},
    {name: "赵鸿博", clazz: "智能2202"},
    {name: "于若男", clazz: "微机2304"},
    {name: "张宏达", clazz: "微机2309"},
    {name: "徐观昌", clazz: "微机2303"},
    {name: "曾艺豪", clazz: "微机2306"},
    {name: "潘玉凤", clazz: "微机2306"},
    {name: "赵羽诗", clazz: "微机2302"},
];

const reservedMembers: MemberInfo[] = [];

const retiredMembers: MemberInfo[] = [
    {name: "李俊翔", clazz: "微机2102"},
    {name: "陈玟杏", clazz: "微机2103"},
    {name: "黎俊威", clazz: "微机2111"},
    {name: "张晓斌", clazz: "微机2107"},
]

export const teamList = {
    studentCoaches,
    teamLeader,
    teamAssistLeaders,
    fullMembers,
    reservedMembers,
    retiredMembers
};
