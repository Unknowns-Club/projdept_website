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

const reservedMembers: MemberInfo[] = [];

export const teamList = {
  studentCoaches,
  teamLeader,
  teamAssistLeaders,
  fullMembers,
  reservedMembers,
};
