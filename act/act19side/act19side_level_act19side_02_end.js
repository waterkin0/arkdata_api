var items = {"brief": "神秘生物极难击退，众人束手无策，此时多萝西主动联络，将众人引至基地内部。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[stopmusic]\n[Dialog]\n[Background(image=\"29_g8_alley_n\",screenadapt=\"showall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$darkness01_intro\", key=\"$darkness01_loop\", volume=0.7)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]......\n[name=\"Mechanist\"]我得承认，我没想到。\n[Dialog]\n[Character(name=\"avg_npc_521_1#1$1\",focus=-1)]\n[Decision(options=\"我也没想到。;直到我看到塞雷娅动手......\", values=\"1;2\")]\n[Predicate(references=\"1;2\")]\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]你们放心，我也并不想再进一次监狱。\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]那这现场处理起来就容易多了。\n[name=\"Mechanist\"]毕竟，我是个机械师，拆解一具机械花不了多少时间。\n[name=\"Mechanist\"]不过......你是怎么知道它里面是空心的？\n[Character(name=\"avg_npc_532_1#10$1\")]\n[name=\"塞雷娅\"]我和这批动力甲交手过几次。\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]你也被它们追杀过？\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]算是吧。\n[Dialog]\n[Character(name=\"avg_npc_532_1#1$1\",focus=-1)]\n[Decision(options=\"它们不是塞雷娅的对手。;......;反过来还差不多......\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]既然它们出现在这里，那说明有人并不希望我们追查缪尔赛思的下落。\n[name=\"Mechanist\"]这个人会是谁？\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]有多种可能性。\n[name=\"塞雷娅\"]我与缪尔赛思联络不多，只知道她在失踪前正在参与某项由莱茵生命主导的秘密实验。\n[name=\"塞雷娅\"]考虑到我早已离开莱茵，她向我透露上述信息已经违反保密协议。\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]莱茵防卫科会出动尖端武器干掉泄密的员工吗？\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]......\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]我知道了，这也是保密条款。\n[name=\"Mechanist\"]罗德岛真是良心企业，是吧，Dr.{@nickname}？\n[Dialog]\n[Character(name=\"avg_npc_521_1#1$1\", focus=-1)]\n[Decision(options=\"罗德岛不仅仅是一家企业。;......;要不然也招募不到你们。\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]缪尔赛思不是莱茵生命的普通员工。\n[name=\"塞雷娅\"]能将她逼至绝境，对方的专业程度不亚于我。\n[name=\"塞雷娅\"]这种型号的动力甲大约在半年前出现在了某些雇佣兵团体中。\n[name=\"塞雷娅\"]它所使用的防御材料与装配武器都并不出彩，整体性能与五年前的军方量产动力甲相当。\n[Character(name=\"avg_npc_532_1#10$1\")]\n[name=\"塞雷娅\"]只有一点很特殊——它对使用者没有要求。\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]没有要求......是多低的要求？\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]任何生理指标能维持一般运动状态的个体都能满足要求。\n[name=\"塞雷娅\"]我可以，Mechanist先生可以，博士也可以。\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]......\n[Dialog]\n[Character(name=\"avg_npc_521_1#1$1\",focus=-1)]\n[Decision(options=\"那是够低的了。;......;我还真想试试。\", values=\"1;2;3\")]\n[Predicate(references=\"3\")]\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]你不会喜欢这感觉的，博士，我向你保证。\n[Dialog]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]以前能穿动力甲的都是精锐士兵。\n[name=\"Mechanist\"]能控制那大玩意儿在战场上长时间搏杀，而不是蹦几下就淹死在自己的呕吐物里——真不是未经训练的人能做到的。\n[name=\"Mechanist\"]你问问坚雷就知道了。她说她当时只穿过一次就满脑子想着退役。\n[name=\"Mechanist\"]我相信几年时间足够让那帮人把技术迭代几十次了，而且雇佣兵里本来就不乏退役士兵......\n[name=\"Mechanist\"]但谁都能穿？\n[name=\"Mechanist\"]这搞不好是能颠覆战争方式的发明。\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]目前类似的动力甲流到外面的数量极少，可见这项技术还只是在原型阶段。\n[Character(name=\"avg_npc_532_1#10$1\")]\n[name=\"塞雷娅\"]我正在追查它的来源。和其他许多实验性武器一样，要获得线索并不容易。\n[Dialog]\n[Character(name=\"avg_npc_532_1#10$1\",focus=-1)]\n[Decision(options=\"哥伦比亚的雇佣兵这么有钱？;这动力甲技术非常先进吧？\", values=\"1;2\")]\n[Predicate(references=\"1;2\")]\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]雇佣兵们未必是客户。\n[name=\"Mechanist\"]在下这批订单的人眼里，雇佣兵跟这新型动力甲没有区别——\n[Character(name=\"avg_npc_532_1#10$1\")]\n[name=\"塞雷娅\"]——都只是实验品而已。\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]移动城市投影的边缘往往也是文明法则是否适用的分界线。\n[name=\"塞雷娅\"]这些活跃在荒地上的雇佣兵，和那些拓荒者一样，都是最方便的实验对象。\n[name=\"塞雷娅\"]即使实验失败了，他们被消耗掉了，也很少有人去追究他们的下落。\n[name=\"塞雷娅\"]而且很快，又会有下一批实验品被补充进来。\n[Dialog]\n[Character(name=\"avg_npc_532_1#1$1\",focus=-1)]\n[Decision(options=\"没人反对？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]反对缺乏意义。\n[name=\"塞雷娅\"]雇佣兵们很清楚，手里拿着的新型武器可能会爆炸，但也可能比对手的武器威力更强。\n[Character(name=\"avg_npc_532_1#10$1\")]\n[name=\"塞雷娅\"]在法律上，这些你情我愿的交易都是接近合规的。\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]......\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]Mechanist先生，你有什么新发现吗？\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]不对劲......\n[name=\"Mechanist\"]从刚刚开始，我就觉得哪里不对劲。\n[name=\"Mechanist\"]这动力甲里面没有人——为什么我没有一眼看出来？\n[name=\"Mechanist\"]不管是有雇佣兵在远处使用无线电遥控，还是设置了自动程序，都会有明显的模式规律。\n[Dialog]\n[Character(name=\"avg_npc_521_1#1$1\",focus=-1)]\n[Decision(options=\"就像可露希尔的无人机。;就像Lancet-2和Castle-3。\", values=\"1;2\")]\n[Predicate(references=\"1;2\")]\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]显然，它们都不会这么灵活。\n[name=\"Mechanist\"]在罗德岛研发的新一代武器当中，自动化程度最高的也远远无法骗过我的眼睛——你让我相信那帮被军队豢养的蠢笨机械师能做到？\n[Dialog]\n[Character(name=\"avg_npc_532_1#10$1\")]\n[Delay(time=0.7)]\n[Character(name=\"avg_npc_532_1#1$1\")]\n[delay(time=0.7)]\n[characteraction(name=\"middle\",type=\"move\",ypos=-50,fadetime=0.51)]\n[Delay(time=0.51)]\n[name=\"塞雷娅\"]——\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$fightgeneral\", volume=1)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Dialog]\n[delay(time=0.8)]\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]你在做什么？\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]切断动力甲的“神经中枢”。\n[Character(name=\"avg_npc_521_1#1$1\")]\n[name=\"Mechanist\"]这些导管里淌出来了......银色的液体。\n[name=\"Mechanist\"]这是什么物质？\n[Character(name=\"avg_npc_532_1#1$1\")]\n[name=\"塞雷娅\"]或许它就是上述问题的答案。\n[Dialog]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"29_g1_outdoorbase\",screenadapt=\"showall\")]\n[Delay(time=1)]\n[PlayMusic(intro=\"$chasing_intro\", key=\"$chasing_loop\", volume=0.7)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\t\n[playsound(key=\"$rungeneral\")]\n[Character(name=\"avg_npc_535_1#11$1\",name2=\"avg_108_silent_1#6$1\",fadetime=1.5)]\n[delay(time=2)]\n[Character(name=\"avg_npc_535_1#11$1\",name2=\"avg_108_silent_1#6$1\",focus=1)]\n[name=\"桑尼\"]逃出来了......吗？\n[Character(name=\"avg_npc_535_1#11$1\",name2=\"avg_108_silent_1#6$1\",focus=2)]\n[name=\"赫默\"]呼......我......我很久没跑这么快了......\n[name=\"赫默\"]那到底是......\n[Dialog]\n[character]\n[character(name=\"avg_npc_533_1$1\",fadetime=0.7)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[delay(time=0.71)]\n[name=\"形状奇特的物体\"]——\n[character(name=\"avg_135_halo_1#7$1\")]\n[name=\"埃琳娜\"]它追出来了？！\n[character(name=\"avg_npc_535_1#11$1\")]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"桑尼\"]趴下！\n[Dialog]\n[character(name=\"avg_135_halo_1#7$1\")]\n[Delay(time=0.51)]\n[characteraction(name=\"middle\",type=\"move\",ypos=-70,fadetime=0.7)]\n[character(fadetime=0.8)]\n[Delay(time=1)]\n[character(name=\"avg_npc_533_1$1\",fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=400,ypos=40,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=-600,ypos=-70,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=300,ypos=60,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=-450,ypos=30,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=350,ypos=30,fadetime=0.7)]\n[delay(time=0.71)]\n[character]\n[delay(time=1)]\n[Character(name=\"avg_108_silent_1#6$1\")]\n[name=\"赫默\"]这不是刚才那个......\n[Dialog]\n[character]\n[character(name=\"avg_npc_533_1#1$1\",name2=\"avg_npc_533_1#1$1\",fadetime=0.7)]\n[Delay(time=1.5)]\n[character(name=\"avg_npc_535_1#11$1\",name2=\"avg_108_silent_1#5$1\",focus=2)]\n[name=\"赫默\"]至少有十多个，甚至更多，它们围住了居住区。\n[character(name=\"avg_npc_535_1#11$1\",name2=\"avg_108_silent_1#5$1\",focus=1)]\n[name=\"桑尼\"]它们......变多了。\n[character(name=\"avg_npc_535_1#11$1\",name2=\"avg_135_halo_1#6$1\",focus=2)]\n[name=\"埃琳娜\"]变多了？你见过这种物体？你说清楚些！\n[character(name=\"avg_npc_535_1#11$1\",name2=\"avg_135_halo_1#6$1\",focus=1)]\n[name=\"桑尼\"]......乌比卡博士，该说清楚的不是你吗？\n[character(name=\"avg_npc_535_1#11$1\",name2=\"avg_135_halo_1#6$1\",focus=2)]\n[name=\"埃琳娜\"]你在胡言乱语什么......？\n[character(name=\"avg_108_silent_1#4$1\")]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"赫默\"]躲开——！\n[Dialog]\n[character(name=\"avg_npc_535_1#11$1\",name2=\"avg_135_halo_1#7$1\")]\n[Delay(time=0.51)]\n[characteraction(name=\"right\",type=\"move\",xpos=200,fadetime=0.7)]\n[characteraction(name=\"left\",type=\"move\",xpos=-200,fadetime=0.7)]\n[character(fadetime=0.9)]\n[Delay(time=1.3)]\n[character(name=\"avg_npc_533_1$1\",fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=300,ypos=-40,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=-200,ypos=-70,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=400,ypos=60,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=-350,ypos=30,fadetime=0.7)]\n[delay(time=0.71)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=250,ypos=30,fadetime=0.7)]\n[delay(time=0.71)]\n[character]\n[delay(time=1)]\n[character(name=\"avg_135_halo_1#6$1\")]\n[name=\"埃琳娜\"]——这东西移动得太快了！\n[name=\"埃琳娜\"]一旦被撞到的话后果不堪设想——我们是不是该回到室内？\n[character(name=\"avg_npc_535_1#11$1\")]\n[name=\"桑尼\"]最好不要这么做。\n[character(name=\"avg_135_halo_1#7$1\")]\n[name=\"埃琳娜\"]为什么？\n[Dialog]\n[character]\n[Delay(time=0.51)]\n[character(name=\"avg_npc_533_1$1\",fadetime=0.7)]\n[Delay(time=0.7)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"middle\",type=\"move\",xpos=300,fadetime=0.6)]\n[Character(fadetime=0.9)]\n[Delay(time=0.7)]\n[CameraShake(duration=1, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$a_bat_buildingshaking_1\")]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=1, block=true)]\n[delay(time=2.5)]\n[character(name=\"avg_108_silent_1#5$1\")]\n[name=\"赫默\"]那是......我们待的那间屋子......\n[Dialog]\n[character]\n在看不见的巨大力量的冲击下，拓荒者的小屋剧烈地摇晃着，并不算太牢靠的门窗纷纷开裂。\n几乎在同一时间，原本盘旋在半空的奇特物体都涌向了那间屋子。\n银色的液体飞快地渗进门窗的裂痕中，就如同闻到血腥味的微小生物前赴后继地钻进猎物的伤口里。\n而下一瞬间，令在场的科学家们都无法理解的事情发生了。\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#9$1\",focus=2)]\n[name=\"埃琳娜\"]那间屋子是不是......消失了？\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#9$1\",focus=1)]\n[name=\"赫默\"]不，不是消失了——它被分解了。\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#7$1\",focus=2)]\n[name=\"埃琳娜\"]分解？\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#7$1\",focus=1)]\n[name=\"赫默\"]看到空中那些......漂浮着的东西了吗？\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#3$1\",focus=2)]\n[name=\"埃琳娜\"]你是说，它们原本是屋子的一部分？\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#3$1\",focus=1)]\n[name=\"赫默\"]它们恐怕是屋子的全部。\n[Dialog]\n[character]\n[delay(time=0.51)]\n[CameraShake(duration=1.5, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$a_bat_buildingshaking_2\")]\n[Delay(tinme=2)]\n话音刚落，静止在空中的碎片纷纷落了下来。\n巨响、烟尘、满地残渣，就像被强行停止的时钟重新转动，本该存在的一切也都回来了。\n[Dialog]\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#7$1\",focus=2)]\n[name=\"埃琳娜\"]我......我是不是中了某种精神控制类的源石技艺？\n[name=\"埃琳娜\"]否则的话，我看到的一切怎么会都......不符合我所熟知的物理规则。\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#7$1\",focus=1)]\n[name=\"赫默\"]......是那些银色液体干的。\n[character(name=\"avg_108_silent_1#10$1\",name2=\"avg_135_halo_1#7$1\",focus=1)]\n[name=\"赫默\"]它们......分散成了无数细小的个体，拆解并带走了原本属于那间屋子的一部分......\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#7$1\",focus=1)]\n[name=\"赫默\"]然后它们重新聚合。\n[character(name=\"avg_108_silent_1#6$1\",name2=\"avg_135_halo_1#3$1\",focus=2)]\n[name=\"埃琳娜\"]就像有几十只看不见的......手？\n[character(name=\"avg_npc_535_1#11$1\")]\n[name=\"桑尼\"]女士们，你们仿佛在谈论某种幽灵......\n[character(name=\"avg_108_silent_1#5$1\",name2=\"avg_135_halo_1#3$1\",focus=1)]\n[name=\"赫默\"]等等，白面鸮——\n[character(name=\"avg_108_silent_1#5$1\",name2=\"avg_135_halo_1#7$1\",focus=2)]\n[name=\"埃琳娜\"]完了，刚刚乔伊丝还在屋子里！\n[name=\"埃琳娜\"]她该不会也被......\n[Dialog]\n[character]\n[playsound(key=\"$d_gen_walk_n\")]\n[character(name=\"char_empty\",name2=\"char_empty\",fadetime=0.5)]\n[delay(time=0.51)]\n[characteraction(name=\"left\", type=\"move\", xpos=100, fadetime=0.3, block=true)]\n[characteraction(name=\"right\", type=\"move\", xpos=-100, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"right\", type=\"move\", xpos=0, fadetime=1, block=false)]\n[characteraction(name=\"left\", type=\"move\", xpos=0, fadetime=1, block=false)]\n[character(name=\"avg_128_plosis_1#8$1\",name2=\"avg_npc_534_1#1$1\",fadetime=1.2)]\n[delay(time=2)]\n[character(name=\"avg_128_plosis_1#8$1\",name2=\"avg_npc_534_1#1$1\",focus=2)]\n[name=\"拓荒队成员\"]咳......咳咳......\n[character(name=\"avg_npc_535_1#7$1\")]\n[name=\"桑尼\"]迈尔！你也逃出来了？\n[character(name=\"avg_npc_534_1#1$1\")]\n[name=\"拓荒队成员\"]领、领队......我把......摩尔医生......带出来了......\n[character(name=\"avg_128_plosis_1#8$1\")]\n[name=\"白面鸮\"]......\n[character(name=\"avg_135_halo_1#7$1\")]\n[name=\"埃琳娜\"]乔伊丝！\n[character(name=\"avg_npc_534_1#1$1\")]\n[name=\"拓荒队成员\"]还、还好......她没事......\n[Dialog]\n[characteraction(name=\"middle\", type=\"move\", ypos=-40, fadetime=1)]\n[character(fadetime=0.7)]\n[PlaySound(key=\"$bodyfalldown1\")]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true)]\n[delay(time=1.5)]\n[character(name=\"avg_108_silent_1#6$1\")]\n[name=\"赫默\"]......他的伤势不算重，但是体力接近透支，急需休息。\n[character(name=\"avg_npc_535_1#11$1\")]\n[name=\"桑尼\"]我们不能留在这个地方。整个拓荒者居住区都不再安全。\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Character(name=\"avg_npc_527_1#1$1\",name2=\"avg_npc_528_1#1$1\")]\n[Background(image=\"29_g2_edgeofbase\",screenadapt=\"showall\")]\n[Delay(time=1)]\n[PlayMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.7)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\t\n[Character(name=\"avg_npc_527_1#1$1\",name2=\"avg_npc_528_1#1$1\",focus=1)]\n[name=\"玛丽\"]你都看到了吗？\n[Character(name=\"avg_npc_527_1#1$1\",name2=\"avg_npc_528_1#1$1\",focus=2)]\n[name=\"莱茵防卫科成员\"]我不知道您指的是什么。\n[Character(name=\"avg_npc_527_1#5$1\",name2=\"avg_npc_528_1#1$1\",focus=1)]\n[name=\"玛丽\"]别跟我装傻，刚才那震动你没感觉到？\n[name=\"玛丽\"]那些飘来飘去的是什么新型号的无人机吗？你们莱茵自己研发的？该死！\n[Character(name=\"avg_npc_527_1#5$1\",name2=\"avg_npc_528_1#1$1\",focus=2)]\n[name=\"莱茵防卫科成员\"]我只能向您保证，我们没有违反您的命令对基地采取任何行动。\n[Character(name=\"avg_npc_527_1#1$1\",name2=\"avg_npc_528_1#1$1\",focus=1)]\n[name=\"玛丽\"]你老大叫什么来着？斐尔迪南是吧？\n[Character(name=\"avg_npc_527_1#1$1\",name2=\"avg_npc_528_1#1$1\",focus=2)]\n[name=\"莱茵防卫科成员\"]斐尔迪南·克鲁尼先生是莱茵生命能量科的主任。\n[Character(name=\"avg_npc_527_1#5$1\",name2=\"avg_npc_528_1#1$1\",focus=1)]\n[name=\"玛丽\"]我才不管你们公司是什么架构。\n[name=\"玛丽\"]给我通讯器，我要跟他通话。\n[Character(name=\"avg_npc_527_1#5$1\",name2=\"avg_npc_528_1#1$1\",focus=2)]\n[name=\"莱茵防卫科成员\"]斐尔迪南主任非常忙碌......\n[Character(name=\"avg_npc_527_1#5$1\",name2=\"avg_npc_528_1#1$1\",focus=1)]\n[CameraShake(duration=0.8, xstrength=50, ystrength=50, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"玛丽\"]那麻烦你给他发一条消息——\n[name=\"玛丽\"]问问他知不知道自己有多混蛋！\n[Dialog]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"29_g9_headquarter\",screenadapt=\"showall\")]\n[Delay(time=1)]\n[PlayMusic(intro=\"$m_dia_street_intro\", key=\"$m_dia_street_loop\", volume=0.7)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\t\n[character(name=\"avg_npc_529_1#1$1\")]\n[name=\"莱茵实验员\"]主任，有您的消息，是从基地监控站发过来的。\n[character(name=\"avg_npc_522_1#1$1\")]\n[name=\"斐尔迪南\"]......\n[character(name=\"avg_npc_522_1#2$1\")]\n[name=\"斐尔迪南\"]呵呵......\n[character(name=\"avg_npc_529_1#1$1\")]\n[name=\"莱茵实验员\"]还有，您的儿子似乎也有事找您，是否接通通讯？\n[character(name=\"avg_npc_522_1#2$1\")]\n[name=\"斐尔迪南\"]老规矩，跟他说我很忙。\n[character(name=\"avg_npc_522_1#1$1\")]\n[name=\"斐尔迪南\"]对了，把埃琳娜最近一次报告的内容转到我的终端上。\n[character(name=\"avg_npc_529_1#1$1\")]\n[name=\"莱茵实验员\"]好的，斐尔迪南主任。\n[character(name=\"avg_npc_522_1#1$1\")]\n[name=\"斐尔迪南\"]我说过很多次了吧？别再叫我主任。\n[character(name=\"avg_npc_529_1#1$1\")]\n[name=\"莱茵实验员\"]啊！对不起，斐尔迪南先生。\n[character(name=\"avg_npc_522_1#1$1\")]\n[name=\"斐尔迪南\"]说到埃琳娜......\n[name=\"斐尔迪南\"]你和她关系还不错吧。\n[name=\"斐尔迪南\"]替我想一想，她会喜欢什么样的礼物？\n[Dialog]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"29_g2_edgeofbase\",screenadapt=\"showall\")]\n[Delay(time=1)]\n[PlayMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.7)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\t\n[character(name=\"avg_135_halo_1#3$1\")]\n[name=\"埃琳娜\"]......奥利维亚。\n[character(name=\"avg_108_silent_1#8$1\")]\n[name=\"赫默\"]抱歉，我忙着治疗受伤的拓荒者......\n[character(name=\"avg_108_silent_1#7$1\")]\n[name=\"赫默\"]你有没有受伤？\n[character(name=\"avg_135_halo_1#3$1\")]\n[name=\"埃琳娜\"]我......还好。\n[name=\"埃琳娜\"]我没有你的外勤经验，但顾好自己还是做得到的。\n[name=\"埃琳娜\"]可是......我们难道不应该赶紧撤离吗？\n[name=\"埃琳娜\"]现在基地乱作一团......拓荒者自顾不暇。这是我们逃出去的好时机。\n[name=\"埃琳娜\"]主任肯定收到了消息，他会派人来接我们。\n[name=\"埃琳娜\"]等我们和防卫科的同事会合，就一定能解除基地的威胁，救出多萝西......\n[character(name=\"avg_108_silent_1#7$1\")]\n[name=\"赫默\"]或许你是对的。\n[character(name=\"avg_135_halo_1#4$1\")]\n[name=\"埃琳娜\"]或许？\n[character(name=\"avg_108_silent_1#7$1\")]\n[name=\"赫默\"]但是我做不到。我没法抛下他们不管。\n[name=\"赫默\"]你看到了......他们刚刚同样没有抛下乔伊丝。\n[character(name=\"avg_npc_535_1#11$1\")]\n[name=\"桑尼\"]赫默医生，这里又有几个人受伤！\n[character(name=\"avg_108_silent_1#4$1\")]\n[name=\"赫默\"]无人机——！\n[character(name=\"avg_npc_535_1#11$1\")]\n[name=\"桑尼\"]再这样下去，我们撑不了多久。\n[character(name=\"avg_npc_535_1#8$1\")]\n[name=\"桑尼\"]所有攻击手段我都试过了，没用。那些怪物既不会受伤，也无法被破坏。\n[name=\"桑尼\"]我们甚至......无处躲藏。\n[character(name=\"avg_npc_534_1#1$1\")]\n[name=\"拓荒队成员\"]领队，你跟她们说这些做什么？\n[name=\"拓荒队成员\"]她们说不定正高兴着呢！\n[name=\"拓荒队成员\"]我们头顶上这些就是警察和大公司派出来的神秘武器！他们想要我们永远走不出这个基地——\n[character(name=\"avg_npc_535_1#8$1\")]\n[name=\"桑尼\"]萨姆，先别说这些。\n[Dialog]\n[character]\n[Delay(time=0.51)]\n[playsound(key=\"$rungeneral\")]\n[character(name=\"avg_1027_greyy2_1#6$2\",fadetime=1.5)]\n[delay(time=2)]\n[character(name=\"avg_1027_greyy2_1#6$2\")]\n[name=\"格雷伊\"]咳咳......\n[character(name=\"avg_1027_greyy2_1#6$2\")]\n[name=\"格雷伊\"]各位，我......我有一个猜想......\n[character(name=\"avg_108_silent_1#5$1\")]\n[name=\"赫默\"]格雷伊......你有什么办法吗？\n[character(name=\"avg_1027_greyy2_1#6$2\")]\n[name=\"格雷伊\"]呼......呼......咳咳咳......\n[character(name=\"avg_108_silent_1#6$1\")]\n[name=\"赫默\"]别急，你跑太快了，小心弄伤你自己。\n[character(name=\"avg_1027_greyy2_1#7$2\")]\n[name=\"格雷伊\"]我观察到，那些物体好像会追着光和人声走。\n[name=\"格雷伊\"]你们看......\n[Dialog]\n[PlaySound(key=\"$e_atk_magic_m\", volume=1)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[Delay(time=0.51)]\n[character]\n[character(name=\"avg_npc_533_1$1\",name2=\"avg_npc_533_1$1\",fadetime=0.7)]\n[Delay(time=0.71)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[Delay(time=0.51)]\n[PlaySound(key=\"$d_avg_liquidmetalfly\", volume=1)]\n[characteraction(name=\"right\", type=\"move\", xpos=300, fadetime=0.9,block=false)]\n[characteraction(name=\"left\", type=\"move\", xpos=300, fadetime=0.9,block=false)]\n[character(fadetime=1.2)]\n[Delay(time=1.5)]\n[character(name=\"avg_108_silent_1#5$1\")]\n[name=\"赫默\"]......它们追着你的法术光球飞远了。\n[character(name=\"avg_1027_greyy2_1#5$2\")]\n[name=\"格雷伊\"]哈......只是暂时的。\n[name=\"格雷伊\"]我的法术还做不到骗它们更久。\n[character(name=\"avg_108_silent_1#2$1\")]\n[name=\"赫默\"]你尽力了，而且做得很好。\n[character(name=\"avg_108_silent_1#8$1\")]\n[name=\"赫默\"]趋光性吗......你提供了一个有趣的思路。\n[character(name=\"avg_108_silent_1#2$1\")]\n[name=\"赫默\"]格雷伊，你能帮助疏散附近的拓荒者吗？他们信任你。\n[name=\"赫默\"]请让他们躲在暗处不要出声。\n[character(name=\"avg_1027_greyy2_1#9$2\")]\n[name=\"格雷伊\"]嗯，我知道该怎么做。\n[name=\"格雷伊\"]类似的工作我跟着前辈们做过很多次了......\n[character(name=\"avg_1027_greyy2_1#6$2\")]\n[name=\"格雷伊\"]赫默医生，您和埃琳娜小姐也请小心。\n[dialog]\n[playsound(key=\"$rungeneral\")]\n[character(fadetime=1.5)]\n[delay(time=2)] \n[Character(name=\"avg_108_silent_1#2$1\",name2=\"avg_135_halo_1#3$1\",focus=2)]\n[name=\"埃琳娜\"]那我们呢？\n[Character(name=\"avg_108_silent_1#7$1\",name2=\"avg_135_halo_1#3$1\",focus=1)]\n[name=\"赫默\"]弄出点动静来。越大越好，起码要掩盖掉其他人的脚步声。\n[Character(name=\"avg_npc_535_1#1$1\")]\n[name=\"桑尼\"]......好。\n[name=\"桑尼\"]萨姆，再叫五六个人过来，拿上最能制造噪音的工具。\n[Character(name=\"avg_npc_534_1#1$1\")]\n[name=\"拓荒队成员\"]你真准备听他们的？\n[Character(name=\"avg_npc_535_1#1$1\")]\n[name=\"桑尼\"]你有更好的主意吗？\n[Character(name=\"avg_npc_534_1#1$1\")]\n[name=\"拓荒队成员\"]......你说了算，头儿。\n[Character(name=\"avg_108_silent_1#7$1\",name2=\"avg_135_halo_1#3$1\",focus=1)]\n[name=\"赫默\"]把所有银色物体都引到我们这边来。\n[Character(name=\"avg_108_silent_1#7$1\",name2=\"avg_135_halo_1#3$1\",focus=2)]\n[name=\"埃琳娜\"]让我们来充当诱饵——然后呢？\n[Character(name=\"avg_108_silent_1#8$1\",name2=\"avg_135_halo_1#3$1\",focus=1)]\n[name=\"赫默\"]先尽量拖延......\n[character]\n[name=\"温柔的女声\"]然后来实验区。\n[Character(name=\"avg_npc_535_1#7$1\")]\n[name=\"桑尼\"]这声音......\n[Character(name=\"avg_135_halo_1#7$1\")]\n[name=\"埃琳娜\"]多萝西？！\n[character]\n[name=\"温柔的女声\"]是的，是我，埃琳娜。\n[name=\"温柔的女声\"]我改装了一下实验室的扩音设备——希望没吓到你们。\n[Character(name=\"avg_135_halo_1#3$1\")]\n[name=\"埃琳娜\"]你没事吧？\n[character]\n[name=\"温柔的女声\"]我很安全，请不必为我担心。\n[name=\"温柔的女声\"]实验区的建筑更结实，也能为大家抵挡威胁。\n[name=\"温柔的女声\"]各位——无论是拓荒队的朋友们，还是莱茵的同事们，实验区的大门将为你们打开。\n[Dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}