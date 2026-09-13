/* 栏目页的分类筛选：点击分类按钮，只显示该分类下的文章。
   地址栏会同步成 ?category=xxx，刷新或分享链接后仍保持筛选状态。 */
(function () {
  'use strict';

  var box = document.querySelector('[data-section-filter]');
  if (!box) return;

  var list = document.getElementById('posts');
  if (!list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('li.post_item'));
  var chips = Array.prototype.slice.call(box.querySelectorAll('[data-category]'));
  var empty = document.querySelector('.section_categories_empty');
  if (!items.length || !chips.length) return;

  function clean(value) {
    return (value || '').trim();
  }

  function apply(category, syncUrl) {
    category = clean(category);
    var shown = 0;

    items.forEach(function (item) {
      var cats = (item.getAttribute('data-categories') || '').split('|').map(clean);
      var match = !category || cats.indexOf(category) !== -1;
      item.style.display = match ? '' : 'none';
      if (match) shown += 1;
    });

    chips.forEach(function (chip) {
      chip.classList.toggle('is-active', clean(chip.getAttribute('data-category')) === category);
    });

    if (empty) empty.style.display = shown ? 'none' : '';

    if (syncUrl !== false) {
      var url = window.location.pathname + (category ? '?category=' + encodeURIComponent(category) : '');
      window.history.replaceState(null, '', url);
    }
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function (event) {
      event.preventDefault();
      apply(chip.getAttribute('data-category'), true);
      var top = list.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: top < 0 ? 0 : top, behavior: 'smooth' });
    });
  });

  var initial = null;
  try {
    initial = new URLSearchParams(window.location.search).get('category');
  } catch (e) {
    initial = null;
  }
  if (initial) apply(initial, false);
})();
