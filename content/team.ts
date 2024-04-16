interface MemberInfo {
  clazz: string;
  name: string;
}

const studentCoaches: MemberInfo[] = [
  { name: "李子豪", clazz: "微机2004" },
  { name: "霍欣彤", clazz: "软件2003" },
];

const teamLeader: MemberInfo = {
  name: "陈玟杏",
  clazz: "计科2104",
};

const teamAssistLeaders: MemberInfo[] = [
  { name: "韩玉坤", clazz: "物联2202" },
  { name: "杨博宇", clazz: "计科2205" },
];

const fullMembers: MemberInfo[] = [
  { name: "李俊翔", clazz: "微机2102" },
  { name: "刘来熙", clazz: "计科2205" },
];

const reservedMembers: MemberInfo[] = [
  { name: "何济宏", clazz: "计科2204" },
  { name: "梁思琪", clazz: "计科2205" },
  { name: "林思宇", clazz: "微机2310" },
  { name: "王佳", clazz: "行政2302" },
  { name: "徐观昌", clazz: "微机2303" },
  { name: "沙峻", clazz: "微机2310" },
  { name: "张博伦", clazz: "微机2310" },
  { name: "车丽钠", clazz: "微机2305" },
  { name: "陈帅", clazz: "微机2305" },
  { name: "赵羽诗", clazz: "微机2302" },
  { name: "王泽旭", clazz: "微机2306" },
  { name: "赵鸿博", clazz: "智能2202" },
  { name: "鲁思雨", clazz: "数据2302" },
  { name: "冯美琪", clazz: "软件2201" },
  { name: "曾艺豪", clazz: "微机2306" },
  { name: "刘帅", clazz: "计科2204" },
  { name: "潘玉凤", clazz: "微机2306" },
  { name: "宋伟枫", clazz: "微机2306" },
  { name: "于若男", clazz: "微机2304" },
  { name: "尚钰哲", clazz: "微机2309" },
  { name: "张连博", clazz: "工二2302" },
  { name: "张宏达", clazz: "微机2309" },
];

export const teamList = {
  studentCoaches,
  teamLeader,
  teamAssistLeaders,
  fullMembers,
  reservedMembers,
};
