// /js/wow_init.js 完整代码
(function() {
  // 检查是否开启动画、是否为移动端（移动端禁用则不执行）
  if (typeof wowConfig !== 'undefined' && wowConfig.enable) {
    // 移动端判断
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (wowConfig.mobile || !isMobile) {
      // 初始化 WOW 实例
      const wow = new WOW({
        boxClass: 'wow', // 需要动画的元素的 class（核心，很多人漏加这个）
        animateClass: 'animated', // animate.css 的核心 class
        offset: wowConfig.animateitem.offset || 0, // 触发距离
        mobile: wowConfig.mobile || false, // 移动端是否启用
        live: true // 动态内容是否生效
      });
      wow.init();

      // 为配置的每个元素添加 wow class 和动画属性
      if (wowConfig.animateitem && wowConfig.animateitem.length) {
        wowConfig.animateitem.forEach(item => {
          const elements = document.querySelectorAll(`.${item.class}`);
          elements.forEach(el => {
            // 添加 wow 核心 class（必须！）
            el.classList.add('wow');
            // 添加 animate.css 的动画 class（注意去掉 animate_ 前缀）
            const animateClass = item.style.replace('animate_', '');
            el.classList.add(animateClass);
            // 设置自定义属性
            if (item.duration) el.style.animationDuration = item.duration;
            if (item.delay) el.style.animationDelay = item.delay;
            if (item.iteration) el.style.animationIterationCount = item.iteration;
          });
        });
      }
    }
  }
})();