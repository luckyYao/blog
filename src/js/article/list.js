import demo20170828 from './demo/20170828.md';
import demo20170829 from './demo/20170829.md';
import demo20170911 from './demo/20170911.md';
import css20170831 from './css/20170831.md';
import css20170906 from './css/20170906.md';
import css20170923 from './css/20170923.md';
import css20171010 from './css/20171010.md';
// import life20170905 from './life/20170905.md';
// import bible20170910 from './bible/20170910.md';

export const articles = {
  'css20171010': {
    title: "深入探究弹性布局",
    info: "使用flex踩到一个坑，引起的一系列反应。",
    date: "2017-10-10 4:30AM",
    content: css20171010
  },
  'demo20170923': {
    title: "BFC",
    info: "深入挖掘布局的本质，之前遇到样式问题就想办法解决而不求其原因，总有一种被CSS牵着鼻子👃走的感觉。现在开始，我要反击了！！！",
    date: "2017-09-23 10:30AM",
    content: css20170923
  },
  'demo20170911': {
    title: "HTML页面转图片",
    info: "把页面的一部分DOM结构转成图片，并下载下来。",
    date: "2017-09-11 8:00PM",
    content: demo20170911
  },
  // 'bible20170910': {
  //   title: "《启示录6-7章》听道笔记：耶稣的主权和世界的苦难",
  //   info: "我看见羔羊揭开七印中第一印的时候。。。。羔羊解开第七印的时候，天上寂静约有二刻。",
  //   date: "2017-09-10 9:00PM",
  //   content: bible20170910
  // },
  // 'life20170905': {
  //   title: "读书：《理家理心》《过犹不及》《但愿婚前我知道》",
  //   info: "用心探索，一系列书籍实践，不单是整理生活空间更是整理生命空间。",
  //   date: "2017-09-05 9:00AM",
  //   content: life20170905
  // },
  'css20170906': {
    title: "CSS命名与CSS文件管理",
    info: "之前写CSS命名上很乱，这个问题困扰我很久。类名如何规划？CSS文件如何整理？这是困扰我很久的写样式问题，这篇文章将回答这两个问题，注意，这只是众多方法中我打算尝试的一种方法，好与不好，等我用完再说。",
    date: "2017-09-06 9:00AM",
    content: css20170906
  },
  'css20170831': {
    title: "深入探究vertical-align和line-height",
    info: "花了两天时间（抽空）研究了下vertical-align和line-height这两个本以为已经熟练掌握了的css属性，发现之前用的css好像都是假的😆。",
    date: "2017-08-31 7:00PM",
    content: css20170831
  },
  'demo20170829': {
    title: "Demo：纯css做比赛对战图",
    info: "响应式，目前兼容至Chrome",
    date: "2017-08-29 8:00PM",
    content: demo20170829
  },
  'demo20170828': {
    title: "如何使用MarkDown写博客",
    info: "简单说明本博客系统使用MD写文档的实践经验，同时写文档过程中实际用到的MD语法做简要记录",
    date: "2017-08-28 9:00PM",
    content: demo20170828
  }
}

export const articleList = (id) => {
  return articles[id].content;
}