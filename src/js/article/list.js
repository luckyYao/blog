import article20170828 from './article20170828.md';
import demo20170829 from './demo20170829.md';
import article20170831 from './article20170831.md';
// import article20170905 from './article20170905.md';
import article20170906 from './article20170906.md';
import article20170910 from './article20170910.md';

export const articles = {
  'article20170910': {
    title: "《启示录6-7章》听道笔记：耶稣的主权和世界的苦难",
    info: "我看见羔羊揭开七印中第一印的时候。。。。羔羊解开第七印的时候，天上寂静约有二刻。",
    date: "2017-09-10 9:00PM",
    content: article20170910
  },
  // 'article20170905': {
  //   title: "读书：《理家理心》《过犹不及》《但愿婚前我知道》",
  //   info: "用心探索，一系列书籍实践，不单是整理生活空间更是整理生命空间。",
  //   date: "2017-09-05 9:00AM",
  //   content: article20170905
  // },
  'article20170906': {
    title: "CSS命名与CSS文件管理",
    info: "之前写CSS命名上很乱，这个问题困扰我很久。类名如何规划？CSS文件如何整理？这是困扰我很久的写样式问题，这篇文章将回答这两个问题，注意，这只是众多方法中我打算尝试的一种方法，好与不好，等我用完再说。",
    date: "2017-09-06 9:00AM",
    content: article20170906
  },
  'article20170831': {
    title: "深入探究vertical-align和line-height",
    info: "花了两天时间（抽空）研究了下vertical-align和line-height这两个本以为已经熟练掌握了的css属性，发现之前用的css好像都是假的😆。",
    date: "2017-08-31 7:00PM",
    content: article20170831
  },
  'demo20170829': {
    title: "Demo：纯css做比赛对战图",
    info: "响应式，目前兼容至Chrome",
    date: "2017-08-29 8:00PM",
    content: demo20170829
  },
  'article20170828': {
    title: "如何使用MarkDown写博客",
    info: "简单说明本博客系统使用MD写文档的实践经验，同时写文档过程中实际用到的MD语法做简要记录",
    date: "2017-08-28 9:00PM",
    content: article20170828
  }
}

export const articleList = (id) => {
  return articles[id].content;
}