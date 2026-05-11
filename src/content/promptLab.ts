export type PromptLabEntry = {
  slug: string;
  title: string;
  kicker: string;
  href: string;
  imageSrc?: string;
  imageAlt: string;
  imageFit?: "contain" | "cover";
  promptPreview: string;
  promptDetail?: string;
  tags: string[];
  accent: "portrait" | "product" | "campaign" | "space";
};

export const promptLabEntries: PromptLabEntry[] = [
  {
    slug: "palm-reading-analysis",
    title: "Palm Reading Analysis",
    kicker: "Editorial Analysis Prompt",
    href: "/projects?promptLab=palm-reading-analysis",
    imageSrc: "/prompt-lab/手相分析图.png",
    imageAlt: "Minimal palm reading analysis editorial poster",
    imageFit: "contain",
    promptPreview:
      "极简风手相指南设计 / 左侧手掌线稿与右侧结构化解读并排 / 纤细黑线标注主要掌纹与引导线 / 米白浅灰背景搭配高端杂志式网格排版 / 理性克制的信息分析质感",
    promptDetail: `极简风手相指南设计风格，画面比例【画面比例】，主题【主题】。

=== 主视觉画面 ===
以提供的手部照片为参考，绘制简约干净的手掌线稿插画。
所有主要掌纹简化为纤细利落的黑色线条，包含【掌纹名称】（例：感情线、智慧线、生命线、命运线、太阳线）。
整体风格极简几何、精致高级，无阴影渐变或仅做极淡渐变处理。

=== 图示与文字标注 ===
用纤细标注线和柔和引导线对手掌插画进行注解：
每条主线配有【掌纹标签】
采用细引线搭配精致小巧的优雅字体
版面干净留白均衡，无多余杂乱元素

=== 信息板块 ===
总览概述
板块标题：「【总览标题】」
简短描述：「【概述文案】」
纹路解析
逐条罗列关键掌纹并结构化解读：
每项搭配小图标，附带 2–3 行精炼解说文字。

=== 个人解析 ===
根据掌相特征生成个性化解读：
基本信息：【基础信息】
性格与天赋：【性格天赋解读】
事业与财富：【事业财运解读】
感情与人际：【感情人际解读】

=== 附加板块 ===
健康提示：【健康建议】
开运建议：【运势贴士】
总结：【总结文案】

=== 版式构图 ===
左侧：手掌纹路图示
右侧：文字解读内容
底部：总结信息区块

=== 色彩与背景 ===
背景色：【背景颜色】
单色系配色（黑、灰 + 极淡点缀色）

=== 画质参数标签 ===
8K 分辨率、极致细节、极简设计、矢量线稿、高端杂志排版、超高清晰度、字体工整简约、构图雅致协调。`,
    tags: ["#手相分析"],
    accent: "portrait"
  },
  {
    slug: "kawaii-sticker-infographic",
    title: "Kawaii Sticker Infographic",
    kicker: "Cute Illustration Prompt",
    href: "/projects?promptLab=kawaii-sticker-infographic",
    imageSrc: "/prompt-lab/可爱卡哇伊贴纸风.png",
    imageAlt: "Cute kawaii sticker style educational infographic",
    imageFit: "contain",
    promptPreview:
      "可爱贴纸风教育信息图解 / 泡泡圆润字体与高光覆膜贴纸质感 / 丝带弧线连接多步骤内容 / 所有元素带白色描边与轻微浮空投影 / 糖果色系构成明亮活泼的日系 Kawaii 氛围",
    promptDetail: `可爱贴纸风教育信息图解，【画面比例】，讲解【主题】。

=== 标题样式 ===
「【主标题】」采用膨润泡泡风 / 圆润卡通字体
字体颜色：【标题颜色】
质感：贴纸高光覆膜效果，外加加粗白色描边

=== 场景与版式布局 ===
构图样式：【布局类型】
背景：奶白色底或柔和马卡龙纹样（波点、条纹、格纹），整体明亮活泼。

=== 主体内容 ===
【步骤 1】视觉元素：【视觉元素描述 1】
表现形式：萌系 Q 版人物 / 拟人化物件（带笑脸表情）
文字标注：将【标注文字 1】置于对话框或圆角标签内
【步骤 2】视觉元素：【视觉元素描述 2】
动作 / 状态：【行为或状态】
文字标注：【标注文字 2】
衔接样式：【箭头 / 连线样式】
（例：柔美粉色丝带 / 虚线飞行轨迹 / 彩虹弧线 / 爱心串链）

=== 视觉画风 ===
绘画质感：矢量插画，全套贴纸风格（所有元素加粗白边），柔和渐变阴影。
画面表现：二维扁平画风，贴纸带轻微立体浮空投影，有微微凸起感。
配色：糖果色系（亮粉、淡紫、薄荷绿、蜜桃色、天蓝色），甜美鲜亮。

=== 装饰元素 ===
星光闪片、闪烁星星、悬浮爱心、带表情云朵、草莓、小花、蝴蝶结。

=== 整体氛围 ===
超可爱、元气活泼、甜美治愈、童趣俏皮、少女心满满，纯正日系 Kawaii 萌系美学。

=== 画质规格 ===
高品质矢量插画，白色轮廓干净利落、色彩鲜亮饱和、角色造型软萌可爱。`,
    tags: ["#可爱", "#卡哇伊", "#糖果色"],
    accent: "campaign"
  },
  {
    slug: "street-view-ar-annotation",
    title: "Street View AR Annotation",
    kicker: "AR Overlay Prompt",
    href: "/projects?promptLab=street-view-ar-annotation",
    imageSrc: "/prompt-lab/街景 AR 标注图.png",
    imageAlt: "Realistic street view photo with AR style landmark annotations",
    imageFit: "contain",
    promptPreview:
      "真实街景实拍照片 / 地标位置叠加 AR 风格信息标注 / 细指引线精准连接建筑与标签 / 磨砂玻璃卡片搭配白色文字与小图标 / 简约现代的空间导览界面感",
    promptDetail: `生成【地标建筑名称】真实写实的街景实拍照片，也可直接使用已上传图片。

在图片上叠加 AR 风格信息标注；每个标注都用细指引线从文字标签连接到对应地标位置。
采用简约现代的 AR 界面设计，搭配磨砂玻璃质感卡片、白色文字及小巧功能图标。`,
    tags: ["#AR标注"],
    accent: "space"
  },
  {
    slug: "realistic-handwritten-notes",
    title: "Realistic Handwritten Notes",
    kicker: "Academic Prompt",
    href: "/projects?promptLab=realistic-handwritten-notes",
    imageSrc: "/prompt-lab/真实感手写笔记.png",
    imageAlt: "Realistic handwritten math notes style visual",
    imageFit: "contain",
    promptPreview:
      "手写数学笔记风格 / 横线笔记纸上的蓝墨公式与红色重点标注 / 分板块推导步骤与图像并置 / 真实纸张纹理折痕与自然光阴影 / 学术严谨又具课堂刷题氛围",
    promptDetail: `手写数学笔记风格，画面比例【画面比例】，主题【主题】。

=== 数学内容 ===
横线笔记本纸上，主公式用蓝色墨水书写、红色重点标注；包含推导步骤与图示图像。

=== 排版与结构 ===
内容分板块排布，设有【章节标题 1】【章节标题 2】【章节标题 3】等标题；
附带【注释类型】批注以及【例题表达式】。

=== 视觉细节 ===
蓝色手写字体，搭配红色下划线与指引箭头；字迹工整线条干净，纸面自带轻微纹理阴影、自然光照射效果，带有真实纸张折痕褶皱。

=== 风格与氛围 ===
学术严谨调性、教学学习场景感，字迹清晰易读、数学符号规范标准。

=== 附加元素 ===
绘制【函数名】随【变量名】变化的函数图像，含坐标轴标注、坐标点、渐近线形态；标注【特殊情况】及收敛条件。

=== 画质标签 ===
极致细节、对焦清晰、无噪点、数学符号精准无误、专业学术版式呈现。`,
    tags: ["#手写", "#笔记", "#蓝黑红配色", "#学术风", "#公式排版", "#重点标注", "#线稿"],
    accent: "space"
  },
  {
    slug: "phone-shot-screen-photo",
    title: "Phone Shot Screen Photo",
    kicker: "Realism Prompt",
    href: "/projects?promptLab=phone-shot-screen-photo",
    imageSrc: "/prompt-lab/手机拍摄的屏幕真实感图片.png",
    imageAlt: "Phone-shot realistic monitor screen photograph",
    imageFit: "contain",
    promptPreview:
      "写实手机摄影风格 / 略带斜角手持构图与镜头畸变 / 屏幕像素纹理与轻微摩尔纹 / 灰尘指纹反光强化真实感 / 桌面杂物与柔和室内光共同塑造办公现场氛围",
    promptDetail: `写实手机摄影风格，画面比例【ASPECT_RATIO】，主题【TOPIC】。

=== 主场景 ===
手机实拍电脑显示器照片，略带斜角视角、自然手持构图，带有轻微镜头畸变。

=== 显示器画面 ===
屏幕显示【SCREEN_CONTENT】，高清呈现，亮度与对比度真实自然。
屏幕细节清晰可见，包含轻微像素纹理、拍摄显示屏产生的细微摩尔纹。

=== 屏幕表面细节 ===
屏幕表面可见细微灰尘颗粒、淡淡指纹印记与轻微污渍；
屏幕反射出【REFLECTION_CONTENT】。

=== 桌面工作环境 ===
显示器前方桌面摆放【DESK_OBJECTS】；
摆放状态自然随性、略带凌乱。

=== 手机成像特征 ===
带轻微画面噪点、自然景深、柔化虚化过渡、轻微动态模糊；
带有轻微眩光、屏幕高光泛光、微弱色差畸变。

=== 光影与氛围 ===
室内环境柔光照明，阴影柔和；光源包含【LIGHT_SOURCES】。

=== 画质标签 ===
8K 分辨率、极致细节、照片级写实、原片直出风格、电影感光影、高动态范围、保留自然瑕疵、真实材质纹理、浅景深虚化。`,
    tags: ["#真实感", "#手机拍摄"],
    accent: "space"
  },
  {
    slug: "douyin-live-screenshot",
    title: "Douyin Live Screenshot",
    kicker: "Live Commerce Prompt",
    href: "/projects?promptLab=douyin-live-screenshot",
    imageSrc: "/prompt-lab/抖音直播画面截图.png",
    imageAlt: "Douyin live commerce mobile screenshot style visual",
    imageFit: "contain",
    promptPreview:
      "竖版抖音带货直播截图 / 完整直播界面 UI 蒙版 / 红橙渐变促销卡与优惠价强化 / 弹幕礼物热度互动层叠 / 手机端磨砂底栏 / 高饱和商业带货截图质感",
    promptDetail: `=== 主场景 ===
竖版手机抖音带货直播截图画面，人物【主播形象描述】立于室内，正对镜头展示商品。居中构图，适配手机移动端观看比例。

=== 直播界面 UI 蒙版 ===
完整抖音国内版直播界面全套 UI 覆盖，包含：
左上角：主播个人信息栏，含头像、用户名「【用户名】」、粉丝数「【粉丝数量】」，以及红色关注按钮。
右上角：在线观看人数「【观看人数】」，搭配圆形观众小头像阵列。
上方标签栏：带有直播中、人气榜、带货榜第 1 名等同款标识徽章。

=== 价格促销弹窗卡片 ===
原价：「【原价】」
优惠价：「【优惠价】」
促销标签：「【折扣标签】」
横幅文案：直播间限时特惠

=== 互动元素 ===
实时弹幕评论：【评论内容】
礼物特效提示：「【用户】送出小心心 ×66」
热度 / 点赞指标标识

=== 底部功能栏 ===
输入框提示文字：说点什么...
功能图标：表情、购物袋、礼物礼盒、点赞按钮

=== 镜头与渲染风格 ===
整体还原真实手机截图质感，UI 界面极致清晰，人物画面适度柔化。

=== 画质参数标签 ===
8K 分辨率、细节拉满、照片级写实、手机 UI 界面设计、商业广告风格、超高清晰度、色彩饱满、字体边缘锐利。`,
    tags: ["#直播"],
    accent: "product"
  },
  {
    slug: "realistic-food-poster",
    title: "Realistic Food Poster",
    kicker: "Commercial Poster Prompt",
    href: "/projects?promptLab=realistic-food-poster",
    imageSrc: "/prompt-lab/写实风格的食品广告海报设计.png",
    imageAlt: "Realistic commercial food advertising poster design",
    imageFit: "contain",
    promptPreview:
      "写实美食商业海报设计 / 以原始食物图为基底精修优化 / 暖调高对比光影与油亮高光 / 居中构图突出主菜 / 标题卖点促销区一体化编排 / 橙红金色强化食欲氛围",
    promptDetail: `写实美食商业海报设计风格，画面比例【ASPECT_RATIO】，主题【TOPIC】。

=== 主视觉画面 ===
以提供的美食原图为基底，进行精修优化。提升画面饱和度、光泽感与食材纹理细节，让食物看起来更诱人、汁水饱满。

=== 构图与版式 ===
居中构图，美食主体置于餐盘 / 餐台正中心、视觉突出。
背景风格为【BACKGROUND_STYLE】，强化明暗对比，突出美食主体。

=== 标题文字 ===
主标题：「【MAIN_TITLE】」
副标题：「【SUBTITLE】」
宣传标语：「【TAGLINE】」

=== 产品卖点 ===
主视觉下方添加 3–4 个卖点图标标签：
【FEATURE_1】、【FEATURE_2】、【FEATURE_3】、【FEATURE_4】

=== 促销专区 ===
优惠文案：「【PROMO_TEXT】」
活动时间：「【PROMO_TIME】」
标签角标：「【PROMO_BADGE】」

=== 标注贴纸装饰 ===
印章式徽章：「【BADGE_TEXT】」
高亮气泡文案：「【HIGHLIGHT_TEXT】」

=== 底部信息栏 ===
品牌口号：「【BRAND_SLOGAN】」
联系电话：「【PHONE】」
二维码区域：「【QR_DESCRIPTION】」

=== 光影与视觉风格 ===
暖调高对比度光影，极致凸显食材肌理质感。

=== 画质参数标签 ===
8K 分辨率、超精细细节、照片级写实、商业美食摄影、广告海报设计、高对比度、电影感打光、主体对焦清晰。`,
    tags: ["#海报"],
    accent: "product"
  },
  {
    slug: "minimal-doodle-edu-illustration",
    title: "Minimal Doodle Edu Illustration",
    kicker: "Illustration Prompt",
    href: "/projects?promptLab=minimal-doodle-edu-illustration",
    imageSrc: "/prompt-lab/简约手绘涂鸦风插画.png",
    imageAlt: "Minimal hand-drawn doodle style educational infographic illustration",
    imageFit: "contain",
    promptPreview:
      "极简手绘涂鸦风教育信息图解 / 粗体手写马克笔标题 + 纸张墨痕肌理 / 纯白纸张与淡彩网格背景 / 钢笔描边搭配水彩淡彩 / 箭头与小涂鸦组织知识流程",
    promptDetail: `极简手绘涂鸦风教育信息图解，【画面比例】，用于讲解【主题内容】。

=== 标题样式 ===
主标题「【主标题】」采用粗体随性手写马克笔字体，包裹在手绘对话框、横幅或云朵造型框内。
字体颜色：【标题颜色】
质感：纸张墨痕肌理

=== 场景与版式布局 ===
构图形式：【布局类型】
背景：纯白纸张底色、细点状网格或淡笔记本横线，高亮度、平光无阴影

=== 主体内容 ===
【步骤 1】视觉画面：【视觉元素描述 1】
【步骤 2】视觉画面：【视觉元素描述 2】
衔接样式：【箭头样式】

=== 视觉画风 ===
钢笔描边、马克笔 / 水彩淡彩填色，二维扁平插画，速写本扫描质感。
配色以白色背景为主，搭配柔和马卡龙淡色。

=== 装饰元素 ===
星光、灯泡、感叹号、波浪线、圆点、和纸胶带肌理、回形针。

=== 整体氛围 ===
亲切易懂、条理清晰、可爱治愈、通俗易懂。

=== 画质要求 ===
高品质二维矢量插画，线条干净、文字清晰可读、版面视觉均衡。`,
    tags: ["#手绘", "#淡彩", "#涂鸦", "#知识科普", "#可爱线稿"],
    accent: "space"
  },
  {
    slug: "chiikawa-edu-illustration",
    title: "Chiikawa Edu Illustration",
    kicker: "Character IP Prompt",
    href: "/projects?promptLab=chiikawa-edu-illustration",
    imageSrc: "/prompt-lab/吉伊卡哇风格科普插画.png",
    imageAlt: "Chiikawa style educational infographic illustration",
    imageFit: "contain",
    promptPreview:
      "吉伊卡哇官方漫画风格教育插画 / 柔和粉色圆润标题 / 奶油浅渐变背景过渡主题色 / 吉伊卡哇与兔兔角色分工 / 可爱边框知识气泡 / 兼具科普与萌感的信息布局",
    promptDetail: `吉伊卡哇（ちいかわ）官方漫画风格教育插画，【画面比例】，用于讲解【主题内容】。

=== 标题部分 ===
以柔和粉色（#FFB7C5）圆润字体呈现：「【主标题】」

=== 场景与版式布局 ===
布局类型：【布局样式】
背景：奶油浅渐变底色（#FFF8E7）过渡至【主题色】，搭配简约【装饰元素】

=== 主体内容 ===
使用吉伊卡哇官方经典角色：吉伊卡哇 / 八字眉小猫咪 / 兔兔
【内容板块 1】角色：【角色名称】
【内容板块 2】沿用以上相同格式

=== 核心知识点 ===
【数量】个带可爱边框的悬浮信息气泡框

=== 吉伊卡哇画风规范 ===
圆润身形、闪亮大眼、粉色腮红、小巧四肢、Q 版超萌头身比例、柔和线条画风。

=== 整体氛围 ===
【情绪基调】、【科普教育目标】，可爱风格且兼具知识科普性。`,
    tags: ["#吉伊卡哇", "#可爱", "#漫画", "#知识科普"],
    accent: "campaign"
  },
  {
    slug: "shin-chan-edu-illustration",
    title: "Shin-chan Edu Illustration",
    kicker: "Character IP Prompt",
    href: "/projects?promptLab=shin-chan-edu-illustration",
    imageSrc: "/prompt-lab/蜡笔小新搞怪涂鸦风格科普插画.png",
    imageAlt: "Crayon Shin-chan style infographic timeline illustration",
    imageFit: "contain",
    promptPreview:
      "蜡笔小新动画风格教育插图 / 解释[主题] / 标题手绘马克笔字体 / 布局类型按内容逻辑切换 / 小新角色分工 / 粗糙蜡笔纹理信息框",
    promptDetail: `蜡笔小新搞怪涂鸦风格科普插画：

蜡笔小新动画风格的教育插图，[画面比例]，解释[主题]。

=== 标题 ===
"[主标题]" 采用俏皮的手绘马克笔字体，色彩鲜艳

=== 场景与布局 ===
布局：[布局类型]
背景：简单的粉彩形状、"歪歪扭扭"的手绘风景，细节极简

=== 主要内容 ===
使用不同的官方蜡笔小新角色，如野原新之助（小新）、野原向日葵、小白狗

=== 关键概念 ===
[数量]个带有粗糙蜡笔纹理边框的浮动信息框

=== 小新风格 ===
独特的"抖动"不均匀轮廓，无复杂阴影的平涂色彩，变形的角色比例（土豆头），简单的几何背景，标志性的粗眉毛风格。

=== 情绪 ===
[情感基调]，[教育目的]，幽默，放松且带点调皮。`,
    tags: ["#蜡笔小新", "#手绘涂鸦", "#搞怪幽默", "#扁平化", "#粗糙线条"],
    accent: "campaign"
  },
  
];
