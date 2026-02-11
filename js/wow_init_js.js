// 等待页面加载完成后初始化wow.js
document.addEventListener('DOMContentLoaded', function() {
  // 初始化wow.js，配置与主题配置对应
  new WOW({
    boxClass: 'wow', // 对应动画元素的基础类名（无需修改）
    animateClass: 'animated', // 对应animate.css的核心类名（必须是animated）
    offset: 0, // 全局偏移（会被单个元素的offset覆盖）
    mobile: true, // 移动端是否启用（和配置文件保持一致）
    live: true // 动态加载元素也能触发动画
  }).init();
});