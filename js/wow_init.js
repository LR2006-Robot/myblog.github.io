document.addEventListener('DOMContentLoaded', function() {
  if (typeof WOW === 'undefined') {
    console.error('wow.min.js 未加载');
    return;
  }

  // 核心修正：animateClass 必须设为 animated
  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated', // 这一行是动画触发的关键，不能省略
    offset: 0,
    mobile: true,
    live: true
  });
  wow.init();

  console.log('wow.js 初始化完成，已绑定 animated 触发类');
});

// 兜底：强制给所有 wow 元素添加 animated 类（滚动触发时生效）
const wowElements = document.querySelectorAll('.wow');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target); // 只触发一次
    }
  });
}, { threshold: 0.1 });

wowElements.forEach(el => observer.observe(el));