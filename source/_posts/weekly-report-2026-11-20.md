---
title: "科技周刊 #420｜GitHub 周榜 & 本周热点（2026-11-20）"
date: 2026-11-20 12:00:00
tags: [科技周刊, 周报]
categories: 科技周刊
---

> 本期由定时任务自动汇总，数据截止 2026-11-20 12:00（北京时间）。GitHub 部分因第三方周榜站本周未更新（仍停留在 11-13 的窗口），改用 GhTrends 每日 star-velocity 榜单（取自 GitHub 官方 stargazers/history 端点）按日累加估算，缺榜日期不计，因此数值是**下限**。阮一峰周刊对应第 420 期《最分心的一年》。

## 一、GitHub 本周热门 · 方向相关 Top

本周主线很清楚：**给 AI 编码代理用的「技能包」继续批量冒头，但重心从「会写」转向「会看懂、会重建」**；同时一批本地自托管的基础设施项目在涨。

| 排名 | 项目 | 语言 | 本周 +Star | 看点 |
| --- | --- | --- | --- | --- |
| 1 | morluto/rea | TypeScript | 约 8,000 | 把 agent 指向任意应用（原生二进制、JS/Electron、.NET、网站）让它逆向解释功能，结论附证据与边界，纯本地分析 |
| 2 | GoogleChrome/modern-web-guidance | 技能包（无主语言） | 约 5,600 | Chrome、Edge、Firefox、MDN 四家联合维护的 web 平台技能包，覆盖 view transitions、container queries、Popover API、内置 AI；同源仓库 modern-web-guidance-src 另增约 1,200 |
| 3 | BaaRai/ARTEX | Go | 约 5,500 | 自托管、LLM 驱动的渗透测试平台：planner 拆意图、worker 跑真实工具，每条发现都保留请求/响应证据；单 Go 二进制内嵌 Next.js 界面 |
| 4 | Ebony-Vinyl/dsh-our-free-model | JavaScript | 约 5,500 | DeepSeek Harness 插件，装上就能选 DeepSeek V4.1 Flash、Kimi K3 等免费前沿模型，无需登录或 key，本地还开 OpenAI 兼容中继 |
| 5 | erkamyaman/rust-anything | Rust | 约 4,100 | 先录下 TS/Python/Go/Java 现有程序的行为，再让 agent 逐块改写成 Rust，用回放录像校验一致性；宣称快 3–20 倍且结果相同 |
| 6 | elementalsouls/Claude-BugHunter | Python | 约 3,600 | 把 681 份公开 HackerOne 报告蒸馏成 24 类漏洞的检测模式，83 个 Claude Code 技能按主题加载，仅限授权测试 |
| 7 | storytold/craft-anything | Rust | 约 3,600 | 净室重建引擎：先用真实检查工具研究网站/应用/游戏，再让你的 agent 用指定技术栈重写，314 个工具兼具 CLI 与 MCP |
| 8 | libracoder/kiri | Rust | 约 3,100 | Docker Desktop / OrbStack 的 Rust 替代，兼容 Docker Engine API（docker CLI、Compose、buildx 照常），容器约 2.5ms 启动，每个容器自带本地 HTTPS 域名，一条命令起单节点 k8s |
| 9 | RoutineMiku/apkstart | JavaScript | 约 2,900 | Windows 上双击 APK 即装即用，每个应用独占可缩放原生窗口，进开始菜单搜索，与 Android 共享目录同步 |
| 10 | pingdotgg/t3code | TypeScript | 约 2,600 | T3 团队做的「编码 agent 控制面」，一个界面同时驱动 Claude Code、Codex、Cursor、OpenCode 等，手机/网页/Electron 三端 |
| 11 | google-research/paper-orchestra | Python | 约 2,200 | 谷歌云 AI 研究的多 agent 论文流水线：想法、实验日志、笔记一路产出可投稿的 LaTeX 稿 |
| 12 | mdiri-ai/SoduWork | JavaScript | 约 2,000 | 自托管团队请求引擎：一次任务由一个 harness 执行、另一个模型的不同 harness 逐条评审验收标准，最后由提出者签核 |
| 13 | obra/superpowers | Shell | 约 2,000 | 给多步编码任务加「可检查的检查点」：需求→计划→实现→测试→评审，避免 agent 一口气改出一大坨代码 |
| 14 | dream-num/univer | TypeScript | 约 2,000 | 可嵌入的 Office SDK（表格/文档/幻灯片），Canvas 渲染 + 独立公式引擎，同一套 Facade API 在浏览器和 headless Node 里跑，方便 agent 改真实文件 |
| 15 | nexu-io/openmotion | TypeScript | 约 1,600 | 开源 agentic 视频工作室，上传参考视频即由 agent 重建成可编辑时间线动效，导出各平台尺寸 MP4（需 Node 22.18+） |
| 16 | ccch1mneyyy/dsh-Go | Dart | 约 1,600 | 非官方 Android 客户端，把 Ubuntu + Node 环境装进 App，DSH 直接在手机上跑，免 root、免 Termux |
| 17 | ag-ui-protocol/ag-ui | TypeScript | 673 | Agent 与前端应用之间的开放事件流协议，1.0 规范已冻结为 JSON Schema，附带 TS/Python/.NET SDK，可统一流式 token、工具调用、Human-in-the-loop |

**弱相关 / 已过滤**：`krisgfx9/Wireless-Device-Battery-Monitor`（C++，约 1,900）是 Win 任务栏显示无线外设电量的 350KB 小工具，纯桌面便利性，与前端方向基本无关；`stablyai/orca`（约 620）用独立 Git worktree 并行跑多个编码 agent 对比结果，属弱相关工具，可留意；`gylive/google-ultra` 通过 Play Billing 漏洞薅 Google One AI Ultra 免费试用，属灰色玩法，不推荐；`boykopovar/AnyPS5`、`Bodila51/gtavi-claudecode` 均为游戏相关，归入文末速览。

### 本周热点主题归纳

1. **技能包开始「垂直领域化」**：上周是通用 Agent Skills 扎堆，这周出现明显分工——web 平台（modern-web-guidance）、安全审计（Claude-BugHunter）、编码流程（superpowers）。对前端来说，浏览器四家联合出面维护技能包是个信号：平台的「现代写法」正在被写成 agent 的默认知识。
2. **Agent 从「生成代码」转向「理解既有代码」**：rea、craft-anything、rust-anything 三件套都是让 agent 去读懂一个没有源码（或语言不对）的东西，再解释或重建。配套能力是「证据 + 录像回放」，说明社区开始在意 agent 结论的可验证性。
3. **自托管与本地运行时回暖**：kiri（容器）、ARTEX（渗透测试）、SoduWork（团队请求）都强调「跑在我自己的机器上」、单二进制、无需云账号。
4. **编码 agent 的编排层成型**：t3code、orca、SoduWork 分别在「统一入口」、「并行对比」、「验收签核」三个方向做编排，说明多 agent 的痛点已经从「能不能跑」变成「怎么管」。

## 二、阮一峰周刊 · 第 420 期《最分心的一年》

**头条：AI 让事情变简单，但不会让时间变多**

作者引用了 Hugging Face 布道师 Alejandro AO 的年度回顾：2026 是他「最分心的一年」——手上同时有 4 到 10 个 Agent 在推进 3 到 4 个项目，每天消耗数百万 token，「同时进行多个项目比以往任何时候都更容易」。但结果是每个项目都浅尝辄止：那些看起来「一小时就能搞定」的小点子，最后吃掉的时间远超预期，而他真正想做的大事被一再推迟。

结论很硬：**你的目标不是去做很多事情，而是做成最重要的事情**。AI 越发达，越需要主动做减法、划优先级，把最多时间压在最重要的一两件事上。

**与方向相关的文章**

- **多智能体系统的三种模式**：管道式（一步移交下一步）、编排式（编排器统一指挥）、白板式（各 agent 自主读写共享白板）。对照本周榜单里的 t3code / orca，可以当成选型框架看。
- **检查空格有多难**：Unicode 里空白字符有多种表示，文章给了 Python、Java、JavaScript 里过滤全部空白字符的正确写法。踩过 `\s` 只匹配 ASCII 空白的坑可以直接看。
- **闭源模型占据主导地位**：美国模型厂商对低端档降价后，几乎每个价位上闭源模型性价比都更好——和本周 dsh 插件「免费前沿模型」的流行是同一枚硬币的两面。
- **个人如何定制芯片**：wafer.space 接受个人流片订单，最小 1000 片、单片最低 2 美元。

**工具 · 方向相关精选**

- `sgrep`：grep 的语义版替代，按意思搜而不是按字面搜。
- `Srcbook`：面向 TypeScript/JavaScript 的网页互动式笔记本，类似 Jupyter 但给前端用。
- `XJY Editor`：纯静态网页应用，用表格形式可视化编辑 XML / KML / JSON / YAML。
- `Photoshot`：基于浏览器的开源图片编辑器。
- `Arke`：开源 Windows 资源管理器替代品，读取、排序、缩略图、搜索都不在 UI 线程上，巨大文件夹或网络断线不卡窗口。
- `Tomoru`：捕获电脑或指定应用的声音，实时识别并显示双语悬浮字幕。
- `crFiles`：跨平台文件管理器，内置 Android Quick Share 协议。
- `Netdata`：开源仪表板，一处显示所有服务器与服务状态，适合自托管玩家。
- `13ft`：自搭建的付费墙绕过工具（需自己部署）。
- `netboot.xyz`：把 Windows/Linux/BSD 安装文件做进一个启动盘。

**资源**

- **周刊导航站**：网友把 17,382 条周刊条目做成可检索的库，找旧文神器。
- **浏览器工程（Web Browser Engineering）**：免费英文电子书，用几千行 Python 演示怎么造一个浏览器——想搞懂渲染、布局、事件循环值得读。
- **Lean Init IDE**：浏览器里的 Lean 4 练习环境，自带中英双语入门课，从基础逻辑讲到插入排序的形式化验证。
- **tinybrain**：从零做中文为主的小模型，数据清洗、分词器、预训练、SFT、蒸馏、强化学习每步都用 PyTorch 写出来。

**言论**

- 哈佛研究团队：**AI 编码把软件开发的瓶颈从「写代码」转移到了「代码审查」**。
- Armin Ronacher：AI 并没有增加需要软件的人数，也没有增加维护人员，它主要增加的是**代码量和项目数量**，其中一些有益，但常常分散了本应共享的资源。
- 软件职位头衔谱系：Linux 系统管理工程师 → SRE → DevOps → 平台工程（Platform Engineer），活没大变，名字一直在变——对做职业规划的人是个提醒。
- Iconfactory 共同创始人：靠图标设计谋生的公司，AI 出现后客户越来越少，「真的担心已经进入倒计时」。

## 三、本周方向无关速览

- **《GTA6》本周发售**，好评如潮，玩家震惊于它的写实主义：街景、事故、索赔、贿赂一条龙，几乎是把美国都市生活直接搬进游戏。
- **西班牙首次发现梁龙化石**，此前认为这种恐龙只生活在北美，佐证 1.5 亿年前西欧与北美之间存在陆地通道。
- **杂项**：美国两男子把沙发绑在电动滑板车上造「沙发车」上路被拦；一位数学家做出 24 面、一套 5 个共 120 个不同数字的骰子，让连续掷出重复结果几乎不可能。
