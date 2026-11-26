/*!========================================================================
 *  hexo-theme-snippet: app.js v1.0.0
 * ======================================================================== */
window.onload = function () {
  var $body = document.body,
    $mnav = document.getElementById("mnav"), //获取导航三角图标
    $mainMenu = document.getElementById("main-menu"), //手机导航
    $process = document.getElementById("process"), //进度条
    $ajaxImgs = document.querySelectorAll(".img-ajax"), //图片懒加载
    $commentsCounter = document.getElementById("comments-count"),
    $gitcomment = document.getElementById("gitcomment"),
    $backToTop = document.getElementById("back-to-top"),
    $toc = document.getElementById("article-toc"),
    timer = null;

  //设备判断
  var isPC = true;
  (function (designPercent) {
    function params(u, p) {
      var m = new RegExp("(?:&|/?)" + p + "=([^&$]+)").exec(u);
      return m ? m[1] : "";
    }
    if (
      /iphone|ios|android|ipod/i.test(navigator.userAgent.toLowerCase()) ==
        true &&
      params(location.search, "from") != "mobile"
    ) {
      isPC = false;
    }
  })();

  //手机菜单导航
  if($mnav){
    $mnav.onclick = function () {
      var navOpen = $mainMenu.getAttribute("class");
      if (navOpen.indexOf("in") != "-1") {
        $mainMenu.setAttribute("class", "collapse navbar-collapse");
      } else {
        $mainMenu.setAttribute("class", "collapse navbar-collapse in");
      }
    };
  }

  //首页文章图片懒加载
  function imgsAjax($targetEles) {
    if (!$targetEles) return;
    var _length = $targetEles.length;
    if (_length > 0) {
      var scrollBottom = getScrollTop() + window.innerHeight;
      for (var i = 0; i < _length; i++) {
        (function (index) {
          var $this = $targetEles[index];
          var $this_offsetZero =
            $this.getBoundingClientRect().top +
            window.pageYOffset -
            document.documentElement.clientTop;
          if (
            scrollBottom >= $this_offsetZero &&
            $this.getAttribute("data-src") &&
            $this.getAttribute("data-src").length > 0
          ) {
            if ($this.nodeName.toLowerCase() === "img") {
              $this.src = $this.getAttribute("data-src");
              $this.style.display = "block";
            } else {
              var imgObj = new Image();
              imgObj.onload = function () {
                $this.innerHTML = "";
              };
              imgObj.src = $this.getAttribute("data-src");
              $this.style.backgroundImage =
                "url(" + $this.getAttribute("data-src") + ")";
            }
            $this.removeAttribute("data-src"); //为了优化，移除
          }
        })(i);
      }
    }
  }

  //获取滚动高度
  function getScrollTop() {
    return $body.scrollTop || document.documentElement.scrollTop;
  }
  //滚动回调
  var scrollCallback = function () {
    if ($process) {
      $process.style.width =
        (getScrollTop() / ($body.scrollHeight - window.innerHeight)) * 100 +
        "%";
    }
    isPC && getScrollTop() >= 300
      ? $backToTop.removeAttribute("class", "hide")
      : $backToTop.setAttribute("class", "hide");
    imgsAjax($ajaxImgs);
  };
  scrollCallback();

  //监听滚动事件
  window.addEventListener("scroll", function () {
    if ($toc) {
      var top = $toc.offsetTop;
      var left = $toc.offsetLeft;
      var width = $toc.offsetWidth;
      if (getScrollTop() <= top) {
        $toc.style = "";
      } else {
        $toc.style.position = "fixed";
        $toc.style.top = "5px";
        $toc.style.left = left + "px";
        $toc.style.width = width + "px";
      }
    }
    clearTimeout(timer);
    timer = setTimeout(function fn() {
      scrollCallback();
    }, 200);
  });

  //返回顶部
  $backToTop.onclick = function () {
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      var sTop = getScrollTop();
      if (sTop > 0) {
        $body.scrollTop = document.documentElement.scrollTop = sTop - 50;
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    });
  };
};

/* ============================================================
   2026-11 移动端 / 阅读体验修复 —— 1) 注入补充样式
   style.css 保持主题原样；修复样式单列在 css/read-fix.css，
   此处注入 <link>，因此无需改动任何 HTML 页面即可全站生效。
   ============================================================ */
(function () {
  if (document.getElementById("read-fix-css")) return;
  var s = document.currentScript;
  if (!s || !s.src) {
    var all = document.getElementsByTagName("script");
    for (var i = all.length - 1; i >= 0; i--) {
      if (/js\/app\.js/.test(all[i].src)) { s = all[i]; break; }
    }
  }
  if (!s || !s.src) return;
  var href = s.src.split("?")[0].replace(/js\/app\.js$/, "css/read-fix.css");
  var l = document.createElement("link");
  l.id = "read-fix-css";
  l.rel = "stylesheet";
  l.href = href;
  (document.head || document.documentElement).appendChild(l);
})();

/* ============================================================
   2026-11 移动端 / 阅读体验修复 —— 2) 表格卡片化 · 目录抽屉 · 标签去重 · 懒加载
   ============================================================ */
(function () {
  function run() {
    var mobile = window.matchMedia("(max-width: 767px)").matches;

    /* ---- 1. 宽表格在移动端卡片化 ---- */
    var tables = document.querySelectorAll(".post-content table");
    Array.prototype.forEach.call(tables, function (t) {
      if (t.closest && t.closest(".highlight")) return;
      if (!t.rows || !t.rows.length) return;
      var cols = t.rows[0].cells.length;
      if (cols >= 5) {
        t.classList.add("m-cards");
      } else if (cols === 4) {
        t.classList.add("m-fit");
      }
    });

    /* ---- 2. 分类与标签重复项去重 ---- */
    var catTexts = [];
    Array.prototype.forEach.call(document.querySelectorAll(".category-link"), function (a) {
      catTexts.push(a.textContent.trim());
    });
    Array.prototype.forEach.call(document.querySelectorAll(".tags-meta a"), function (a) {
      if (catTexts.indexOf(a.textContent.trim()) > -1) a.parentNode.removeChild(a);
    });

    /* ---- 3. 正文图片懒加载 ---- */
    Array.prototype.forEach.call(document.querySelectorAll(".post-content img"), function (img) {
      if (!img.getAttribute("loading")) {
        img.setAttribute("loading", "lazy");
        img.setAttribute("decoding", "async");
      }
    });

    /* ---- 4. 移动端文章目录抽屉 ---- */
    if (!mobile) return;
    var tocOl = document.querySelector("#article-toc ol.toc");
    if (!tocOl) return;
    var links = tocOl.querySelectorAll("a.toc-link");
    if (!links.length) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mtoc-btn";
    btn.setAttribute("aria-label", "文章目录");
    btn.innerHTML = "<span style=\"font-size:11px;line-height:1.15;display:block\">目录</span>";

    var mask = document.createElement("div");
    mask.className = "mtoc-mask";

    var panel = document.createElement("div");
    panel.className = "mtoc-panel";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "文章目录");

    var hd = document.createElement("div");
    hd.className = "mtoc-hd";
    hd.innerHTML = "<strong>文章目录</strong><span class=\"mtoc-close\">关闭</span>";

    var list = document.createElement("ol");
    list.className = "mtoc-list";
    Array.prototype.forEach.call(links, function (a) {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.href = a.getAttribute("href");
      link.textContent = a.textContent.trim();
      if (a.parentNode.classList.contains("toc-level-3")) link.className = "lv3";
      link.addEventListener("click", function () { close(); });
      li.appendChild(link);
      list.appendChild(li);
    });

    panel.appendChild(hd);
    panel.appendChild(list);
    document.body.appendChild(btn);
    document.body.appendChild(mask);
    document.body.appendChild(panel);

    function open() {
      panel.classList.add("open");
      mask.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function close() {
      panel.classList.remove("open");
      mask.classList.remove("open");
      document.body.style.overflow = "";
    }
    btn.addEventListener("click", open);
    mask.addEventListener("click", close);
    hd.querySelector(".mtoc-close").addEventListener("click", close);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
