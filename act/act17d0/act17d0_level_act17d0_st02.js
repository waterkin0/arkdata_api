var items = {"brief": "领主长子的反叛被扑灭，但是一位感染者为此牺牲，彩虹小队在他的墓前缅怀友人。长泉镇依然一片混乱，战斗尚未结束。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[stopmusic]\n[Dialog]\n[Background(image=\"bg_desert_1\")]\n[Delay(time=1)]\n[PlayMusic(intro=\"$loneliness_intro\", key=\"$loneliness_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n[name=\"感染者老人\"]（萨尔贡语）......他已归去，抛弃世间琐事。\n[name=\"感染者老人\"]（萨尔贡语）我们痛心疾首，只因命运不曾公正。\n[name=\"感染者老人\"]（萨尔贡语）但毋需悲伤，只因他脱离了现实的苦难。\n[name=\"感染者老人\"]（萨尔贡语）我们应当为他高歌，他最终回归了大地。\n[name=\"感染者老人\"]（萨尔贡语）他的亲友，他所爱之人，都不应留下泪水。\n[name=\"感染者老人\"]（萨尔贡语）死亡是大地的仁慈，我们本是万物的子嗣。\n[name=\"感染者老人\"]（萨尔贡语）......让一切化为尘土。\n[name=\"感染者老人\"]（萨尔贡语）......让一切归于荒野。\n[name=\"感染者老人\"]（萨尔贡语）......我们也终将归去。\n[dialog]\n[character]\n[delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=0.6, r=0, g=0, b=0, fadetime=0.5, block=true)]\n[Subtitle(text=\"在枯木的阴影下，立着一块粗糙打磨的石碑，石碑不光滑的表面上雕刻着几行字。\", x=300, y=370, alignment=\"left\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"“这里长眠着我们的朋友，米亚罗。”\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"“他是一位感染者。他是一位医生。”\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"“他是个好人。”\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[subtitle]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.5, block=true)]\n[delay(time=1)]\n[character(name2=\"char_456_ash_1#8\")]\n[name=\"灰烬\"]......\n[Dialog]\n[Character(name=\"char_empty\", name2=\"char_456_ash_1#8\")]\n[PlaySound(key=\"$d_gen_walk_n\", volume=1)]\n[characteraction(name=\"left\", type=\"move\", xpos=-200, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"left\", type=\"move\", xpos=200, fadetime=1, block=false)]\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",fadetime=0.7)]\n[delay(time=1.5)]\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=1)]\n[name=\"战车\"]你还好吗？\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[name=\"灰烬\"]......我很难说。\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]我听那位蜥蜴老爷子说，在这个国家，只有身份显赫的人才会举办葬礼。\n[name=\"战车\"]大部分普通人死了就死了，他们会被家人简单地埋葬在荒地上，没有墓碑，也没有悼念。\n[name=\"战车\"]大多数生活在巨型平台——移动城市上的人会把死者的骨灰埋在城市的必经之路上，因为城市的空间非常宝贵，极少有安置死者的空间。\n[name=\"战车\"]那些普通的聚落里也少见墓地这种东西，一场要命的灾害席卷而过，就没人找得到逝去的人埋在哪儿了。\n[name=\"战车\"]萨尔贡几乎没有宗教，这里的大部分人不太相信死亡之后的世界，他们认为死者会回归大地，成为这个世界的一部分。\n[name=\"战车\"]就这个角度来说，这种文化透着坦诚和朴实，我还挺喜欢的。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[name=\"灰烬\"]米亚罗的墓，以后也会消失不见?\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=1)]\n[name=\"战车\"]或许吧，但是我们为他举办了葬礼，这很重要。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[name=\"灰烬\"]我不是很能接受。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=1)]\n[name=\"战车\"]为什么？\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[name=\"灰烬\"]在目睹了那样的事情之后，我很难接受他的结局。\n[name=\"灰烬\"]我们或许也有责任，亚历山大。\n[name=\"灰烬\"]如果没有米亚罗，之前近半年来艰苦跋涉的我们会在这里遭遇更多艰辛。\n[name=\"灰烬\"]我一直在想，如果我们当时动作再快一点呢？如果我们强硬一点，坚持要和那些病人们一起行动呢？\n[name=\"灰烬\"]如果我们......\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=1)]\n[name=\"战车\"]我建议你放弃这种思考方式。\n[name=\"战车\"]米亚罗做出了自己的选择，这不是你的错。\n[name=\"战车\"]那个大个子姑娘尝试尽职尽责，作为一个生长在这种文化和制度下的贵族，她愿意庇护那些病人，无疑也是高尚的行为。\n[name=\"战车\"]按照那几位罗德岛干员的说法，米亚罗病得很重。\n[name=\"战车\"]对他来说，每天早上太阳是伴随着死亡一起升起的。\n[name=\"战车\"]像他那样的病情能够坚持到现在已经是奇迹了。\n[name=\"战车\"]这就是他们的生活，我们能做的事情不多。\n[Character(name=\"char_456_ash_1#8\")]\n[name=\"灰烬\"]但是我们真的做对了吗？\n[delay(time=1)]\n[name=\"灰烬\"]我们想当然地对他们伸出了援手，我们想当然地“帮助”了他们。\n[name=\"灰烬\"]我不知道我为什么会如此自信，觉得我能够“帮助”他们。\n[name=\"灰烬\"]我们和这些病人生活在一起。\n[name=\"灰烬\"]但是我们根本不了解感染者，我们想当然地把“矿石病”当做略带感染性的癌症，当做我们熟悉的那些无法治愈的绝症。\n[name=\"灰烬\"]但是这根本不是一种疾病......这是灾难。\n[name=\"灰烬\"]我们对此一无所知，却尝试拯救他们。\n[dialog]\n[character]\n[delay(time=1)]\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]你不该无端指责自己，科恩。\n[name=\"战车\"]这样没有意义。\n[name=\"战车\"]我理解你现在的心情。\n[name=\"战车\"]但是你不能否定我们做的事情。\n[name=\"战车\"]还记得我在屋顶上的无所事事吗？我有大把大把的时间。\n[name=\"战车\"]我坐在那里，看着米亚罗的诊所，看着居住在这里的人。\n[name=\"战车\"]以异世界来客的身份，我见证着这个世界。\n[name=\"战车\"]我不是个敏锐的人，但是即便如此我也能看到很多事情，那些不堪的，残忍的事情。\n[name=\"战车\"]有一天晚上，一个镇民在夜色的掩护下，从另一个居民的家里抬出来一件包裹。\n[name=\"战车\"]那是一个用麻袋扎得严严实实的，一人高的包裹。\n[character(name=\"char_456_ash_1#8\")]\n[name=\"灰烬\"]......\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]我看到他们把麻袋抬上了板车，一路沿着小镇的边缘走向戈壁滩，消失在南边的那块巨石后面。\n[name=\"战车\"]我看到了好几次同样的事情。过去三周里大概有过两次。在我没看到的地方，一定还发生过更多。\n[character(name=\"char_456_ash_1#8\")]\n[name=\"灰烬\"]你之前从来没有说过这件事。\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]我不想说，我觉得没有必要。\n[name=\"战车\"]你说得没错，我们是外人，不是这个国家的居民。就像我刚才的描述，我们对他们而言甚至是异世界人。\n[name=\"战车\"]我不了解他们。他们的历史、他们的文化、他们的生活，他们的喜怒哀乐，我都不了解。\n[name=\"战车\"]我没有权利对我不了解的东西指指点点，他们无论做什么都有他们的理由。\n[name=\"战车\"]事情本该如此。\n[name=\"战车\"]但是后来有一天晚上，也许是我的好奇心击败了我的理智，我沿着那条路，走到了他们埋藏麻袋的巨石后面。\n[name=\"战车\"]我看到沙土之下闪烁着光芒，我看到闪耀的粉尘从沙砾中升腾，最终消散在空气中。\n[name=\"战车\"]在夜色中，那些粉尘如此耀眼。\n[name=\"战车\"]麻袋里装着什么，我当然知道。那些粉尘是什么，我多半也能猜到。\n[name=\"战车\"]当然，现在我们都知道那些粉尘是什么了。\n[name=\"战车\"]那家抬出麻袋的屋子，门口经常坐着一个老妇人。那天晚上之后，那位老妇人再也没有出现。\n[name=\"战车\"]库兹每天都和这些镇民待在一起，他一定也知道。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[name=\"灰烬\"]（叹气）\n[name=\"灰烬\"]你之前编了个什么借口......人人都像是受过防化学战训练？懂得保护口鼻？这理由真烂。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=1)]\n[name=\"战车\"]因为我见过原因。\n[dialog]\n[delay(time=1)]\n[dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Character]\n[Image(image=\"avg_ac17_9\",screenadapt=\"coverall\", fadetime=0)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[name=\"战车\"]你刚才问我“我们真的做对了吗？”\n[name=\"战车\"]答案很简单，我们帮助他们，只是因为我们的道德与良知。\n[name=\"战车\"]生老病死是不可阻挡的事情，无论是这个世界还是我们的世界。\n[name=\"战车\"]就算是没有这种“矿石病”，这些穷困的人们要面对的痛苦也不会减少。\n[name=\"战车\"]就算是没有这种病，战争、苛税、自然灾害依然会带走那些可怜人。\n[name=\"战车\"]看看他们的领主，看看这个镇子，他们活在什么样的社会里？\n[name=\"战车\"]这种样貌的封建在我们熟悉的地球里已经早就落后于时代，但这是他们的现实。\n[name=\"战车\"]按我们的标准，他们不算是活在一个文明的世界里。\n[name=\"战车\"]这些年我见识过的混账事情够多了，科恩。你知道我指的是什么。\n[name=\"战车\"]这世界烂透了，但是我们并非什么都做不到。\n[name=\"战车\"]不要否定善行，道德和良知永远不会错。\n[dialog]\n[delay(time=1)]\n[name=\"灰烬\"]......唉。\n[name=\"灰烬\"]你是对的，亚历山大。\n[name=\"灰烬\"]忘掉我的蠢话吧，我应该是太累了。\n[name=\"战车\"]你确实太久没休息了。\n[name=\"战车\"]我们都累了。\n[dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Character(name=\"char_459_tachak_1\")]\n[Image]\n[delay(time=0.6)]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=2, block=true)]\n[name=\"战车\"]有人来了。\n[dialog]\n[character]\n[delay(time=1)]\n[character(name=\"avg_npc_159_1#1\")]\n[name=\"皮加尔\"]......\n[name=\"皮加尔\"]......\n[name=\"皮加尔\"]......抱歉......\n[name=\"皮加尔\"]我不知道该说点什么，这全部都是我的责任。\n[character(name=\"avg_npc_159_1#2\")]\n[name=\"皮加尔\"]全都是因为我的冲动和愚钝。\n[dialog]\n[delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=0.6, r=0, g=0, b=0, fadetime=0.5, block=true)]\n[Subtitle(text=\"高大的瑞柏巴握着一块金色印章，她用力握着，注入了自己的信念。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"坚固的臂甲上浮现出奇妙的蓝色纹路，金色的印章融化了，从她的手中滴落，洒在了粗糙打磨的石碑上。\", x=300, y=370, alignment=\"left\", size=24, delay=0.04, width=700)]\n[subtitle]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.5, block=true)]\n[delay(time=1)]\n[Character(name=\"char_456_ash_1#5\")]\n[name=\"灰烬\"]源石技艺......\n[character(name=\"avg_npc_159_1#1\")]\n[name=\"皮加尔\"]这是王酋赐予我父亲的功勋金牌，他是王酋最强的战士之一，长泉镇就是他军功的赏赐。\n[name=\"皮加尔\"]我的父亲强大、仁慈、正直。\n[name=\"皮加尔\"]从我小时候，他就一直说。\n[name=\"皮加尔\"]图拉家族建立在矿工的血肉之上。\n[name=\"皮加尔\"]那些年，依靠挖掘地下的源石，我的父亲获得了很多财富。\n[name=\"皮加尔\"]但是随之而来的就是矿石病的蔓延。一开始还只有矿工......但是后来这种病就在镇子里扩散开了。\n[name=\"皮加尔\"]在浅层源石挖掘完毕之后，父亲关闭了源石矿场，禁止深层的挖掘。\n[name=\"皮加尔\"]他建立了感染者社区，派人保护他们。他无法心安理得地坐在源石病人的尸体上数金币。\n[name=\"皮加尔\"]他一直希望我和德鲁奇能做得更好。\n[name=\"皮加尔\"]我不知道德鲁奇在哥伦比亚留学的时候到底接触了什么，我只是看着他变得越来越阴险。\n[name=\"皮加尔\"]直到父亲把他赶出家门的时候，我才意识到那个人已经不是我的兄弟了。\n[dialog]\n[delay(time=1)]\n[character(name=\"avg_npc_159_1#2\")]\n[name=\"皮加尔\"]但我也让父亲失望了。\n[name=\"皮加尔\"]我不配继承他的功勋和基业。\n[name=\"皮加尔\"]我不配。\n[name=\"皮加尔\"]我空有一身武力，却什么都没能做到。我没有保护好长泉，没有保护好我父亲的领民。我甚至没能杀了德鲁奇，让他就这么跑了。\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]支持德鲁奇的这群人，都是些什么人？\n[character(name=\"avg_npc_159_1#1\")]\n[name=\"皮加尔\"]我不是很了解他们，我只知道他们来自一个叫做沃尔沃特科钦斯基的哥伦比亚组织。\n[name=\"皮加尔\"]这不是我第一次和那些哥伦比亚人打交道......\n[name=\"皮加尔\"]他们贪婪、可恶，只想着怎么从镇子下面挖出更多的石头，完全不在乎镇子里的人要怎么生活。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#6\",focus=1)]\n[name=\"战车\"]这故事听着可有点耳熟。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#6\",focus=2)]\n[name=\"灰烬\"]......哼。 \n[dialog]\n[character]\n[delay(time=1)]\n[character(name=\"avg_npc_159_1#1\")]\n[name=\"皮加尔\"]我的父亲常说，如果只是成为一个战士，那么仅凭力量是守护不了家园的。\n[name=\"皮加尔\"]战士可以击败战士，但是暴力无法对抗真正的邪恶。\n[name=\"皮加尔\"]......我一直不曾明白，父亲所谓的“真正的邪恶”是什么。\n[name=\"皮加尔\"]我一直以为德鲁奇已经变成了邪恶。\n[character(name=\"avg_npc_159_1#2\")]\n[name=\"皮加尔\"]......但是我现在才明白，德鲁奇只是邪恶的丝缕毫毛，就已经将我击败。\n[dialog]\n[character]\n[delay(time=1)]\n[Character(name=\"char_459_tachak_1\",name2=\"avg_npc_159_1#1\",focus=1)]\n[name=\"战车\"]有些时候并不是拼了命就能解决问题。\n[name=\"战车\"]接下来你打算怎么办？\n[Character(name=\"char_459_tachak_1\",name2=\"avg_npc_159_1#1\",focus=2)]\n[name=\"皮加尔\"]我不知道，德鲁奇跑了，他的雇佣兵也分崩离析了。\n[name=\"皮加尔\"]但是他留下了这一地怪物，长泉已经不适合居住了......\n[name=\"皮加尔\"]至少目前，我还得守住我的家，镇子里的幸存者都在那边了。\n[Character(name=\"char_459_tachak_1\",name2=\"avg_npc_159_1#1\",focus=1)]\n[name=\"战车\"]你家的房子可以住这么多人？\n[Character(name=\"char_459_tachak_1\",name2=\"avg_npc_159_1#1\",focus=2)]\n[name=\"皮加尔\"]......大宅的地下有一个避难所，可以容纳很多人，但是食物和饮水都不太够。\n[name=\"皮加尔\"]不好意思，我不该和你们抱怨这些。\n[name=\"皮加尔\"]我其实是来道谢的，谢谢你们这段时间里一直在保护长泉的居民。\n[character(name=\"char_456_ash_1#5\")]\n[name=\"灰烬\"]不用这么客气。\n[character(name=\"avg_npc_159_1#1\")]\n[name=\"皮加尔\"]我......我还有事要做，失陪了。\n[Dialog]\n[delay(time=0.7)]\n[PlaySound(key=\"$d_gen_walk_n\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-300, fadetime=2,block=false)]\n[Character(fadetime=0.5)]\n[delay(time=2)]\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#5\",focus=2)]\n[name=\"灰烬\"]......\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#5\",focus=1)]\n[name=\"战车\"]她是个好人，很难想象那个恶棍是她的兄弟。\n[dialog]\n[character]\n[delay(time=1)]\n[Character(name=\"char_empty\")]\n[PlaySound(key=\"$d_gen_walk_n\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", xpos=200, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-200, fadetime=1, block=false)]\n[Character(name=\"avg_npc_155_1#1\",fadetime=0.7)]\n[delay(time=2)]\n[name=\"芙兰卡\"]科恩小姐，你们还在这。\n[name=\"芙兰卡\"]我来的不是时候？\n[character(name=\"char_456_ash_1#5\")]\n[name=\"灰烬\"]啊，没关系，我们本来也准备走了。\n[Character(name=\"avg_npc_155_1#3\")]\n[name=\"芙兰卡\"]这是那些感染者给我的，这个盒子是米亚罗医生的......遗物。\n[name=\"芙兰卡\"]感染者们商量了之后，认为还是交给你们比较好。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[name=\"灰烬\"]......\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=1)]\n[name=\"战车\"]打开看看吧。\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[name=\"灰烬\"]这合适吗？\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=1)]\n[name=\"战车\"]没什么不合适的，他是我们的朋友。\n[dialog]\n[delay(time=1)]\n[Character(name=\"char_459_tachak_1\", name2=\"char_456_ash_1#8\",focus=2)]\n[playsound(key=\"$dooropenquite\")]\n[dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Character]\n[Image(image=\"avg_ac17_10\",xScale=1.1,yScale=1.1, fadetime=0)]\n[ImageTween(xFrom=30, xTo=-30, duration=25, block=false)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[name=\"战车\"]里面是什么？\n[name=\"灰烬\"]一张地图，还有一本书。\n[name=\"芙兰卡\"]这是萨尔贡语版本的《哥伦比亚城市旅行指南》。\n[name=\"芙兰卡\"]这张地图......这张地图看起来有点年头了，我看看......\n[name=\"芙兰卡\"]嗯......这个区域应该是提卡伦多，哥伦比亚的边境城市，我去过那里。\n[name=\"战车\"]这叠东西是钱？\n[name=\"芙兰卡\"]这个是哥伦比亚金券......米亚罗医生居然还存了一笔钱。\n[name=\"灰烬\"]我记得他说过，有一天会离开这里，去那个叫哥伦比亚的地方。\n[name=\"战车\"]“成为一个真的医生”。\n[name=\"灰烬\"]明明时日无多，他还是规划了自己的生活。\n[dialog]\n[delay(time=1)]\n[name=\"芙兰卡\"]稍等，这里还有一张便条，我看看。\n[dialog]\n[playsound(key=\"$g_card_10cardsrelease\")]\n[delay(time=1)]\n[name=\"芙兰卡\"]......嗯......\n[name=\"灰烬\"]上面写着什么？\n[name=\"芙兰卡\"]......需要我念出来吗？\n[name=\"灰烬\"]念吧。\n[dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Character(name=\"avg_npc_155_1#1\")]\n[Image]\n[delay(time=0.6)]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=2, block=true)]\n[name=\"芙兰卡\"]“如果你看到了这张纸条，感谢你帮我收拾这些东西。”\n[name=\"芙兰卡\"]“把钱分给其他人吧，我肯定用不到了。”\n[name=\"芙兰卡\"]“盒子不要丢了，这是我母亲留下的。”\n[name=\"芙兰卡\"]“虽然我不知道你是谁，我的朋友。”\n[name=\"芙兰卡\"]“但我希望你的生活能够一帆风顺。”\n[name=\"芙兰卡\"]“——米亚罗”\n[dialog]\n[character]\n[delay(time=1)]\n[Character(name=\"char_456_ash_1#8\")]\n[name=\"灰烬\"]......我应该用什么表情......什么心情来面对他留下的善事和遗产？\n[Character(name=\"avg_npc_155_1#3\")]\n[name=\"芙兰卡\"]米亚罗医生是个很坚强的人。\n[name=\"芙兰卡\"]梦想对感染者来说是奢侈的，就像是易碎的宝石。\n[name=\"芙兰卡\"]就算是在哥伦比亚，城市里的感染者也会被分区管制，大多数人一辈子都很难走出收治区。\n[name=\"芙兰卡\"]绝大多数时候，染上了矿石病就等同于被宣判了死刑......死缓。\n[name=\"芙兰卡\"]现实会逼迫你放弃自己的梦想，放弃自己的生活，最终放弃自己的生命。\n[name=\"芙兰卡\"]很难有人在痛苦的现实面前，依然对自己的生活充满希望。\n[name=\"芙兰卡\"]是什么一直在支持他的信念呢？\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]像米亚罗这样的人，不该这么活着，然后就这么死了。\n[Dialog]\n[delay(time=0.7)]\n[stopmusic(fadetime=1)]\n[PlaySound(key=\"$d_gen_walk_n\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-300, fadetime=2,block=false)]\n[Character(fadetime=0.5)]\n[delay(time=2)]\n[Character(name=\"char_456_ash_1#7\")]\n[name=\"灰烬\"]等等，你要去哪？\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]去找那个大个子姑娘。\n[Character(name=\"char_456_ash_1#7\")]\n[name=\"灰烬\"]你要干什么？\n[Character(name=\"char_459_tachak_1\")]\n[name=\"战车\"]我要和她谈谈，我有个计划。\n[Dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}