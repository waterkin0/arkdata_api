var items = {"brief": "一番战斗之后，号角等人被Misery救出。曼弗雷德转而追击蔓德拉。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[stopmusic]\n[Dialog]\n[Background(image=\"27_g10_lightinduarea_street_n\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[character(name=\"avg_npc_394_1#2$1\",fadetime=1.5)]\n[delay(time=2)]\n[name=\"阿米娅\"]好奇怪，博士，我们明明甩脱了之前的萨卡兹士兵......\n[dialog]\n[character(name=\"avg_npc_394_1#2$1\", focus=-1)]\n[Decision(options=\"但他们还在源源不断地过来。;就好像他们知道我们的位置。\", values=\"1;2\")]\n[Predicate(references=\"1;2\")]\n[character(name=\"avg_npc_394_1#5$1\")]\n[name=\"阿米娅\"]可露希尔，我们的通讯信号有没有被追踪？\n[character(name=\"avg_npc_411_1#5$1\")]\n[name=\"可露希尔\"]这不可能啊，阿米娅！我特地给信号发射器做了三重处理，要是那些萨卡兹有这技术，罗德岛号早就被特雷西斯攻破一百次了！\n[character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"]......博士，我相信可露希尔。\n[name=\"阿米娅\"]他们一定是用了什么别的方法......\n[character(name=\"avg_npc_402_1#1$1\")]\n[name=\"费斯特\"]阿米娅小姐，我们马上就到会合点了！\n[name=\"费斯特\"]只要和六队会合，我们就能和地下的接应部队取得联系，等回到地下以后，萨卡兹们就没法再追着我们......\n[character(name=\"avg_npc_407_1#2$1\")]\n[name=\"推进之王\"]......不，别走那条路。\n[character(name=\"avg_npc_402_1#11$1\")]\n[name=\"费斯特\"]啊？为什么......咦等等，推进之王小姐，你们怎么来了？\n[name=\"费斯特\"]你们不是在地下......\n[character(name=\"avg_npc_407_1#2$1\")]\n[name=\"推进之王\"]......\n[name=\"推进之王\"]六队的人......\n[character(name=\"avg_npc_402_1#2$1\")]\n[name=\"费斯特\"]六队怎么了？你怎么会是这副表情......呃，因陀罗小姐，你的手上有血？！\n[character(name=\"avg_155_tiger_1#2$1\")]\n[name=\"因陀罗\"]你们的战士，他们......都牺牲了。\n[character(name=\"avg_npc_402_1#2$1\")]\n[name=\"费斯特\"]这......这不可能！六队还在我们前面，他们为什么会遇上萨卡兹？\n[character(name=\"avg_npc_407_1#6$1\")]\n[name=\"推进之王\"]我们没有时间分析原因了。\n[name=\"推进之王\"]博士，六队的战士们......并不是死于我们见过的那些萨卡兹士兵的追击。\n[character(name=\"avg_npc_394_1#5$1\")]\n[name=\"阿米娅\"]你的意思是......\n[character(name=\"avg_155_tiger_1#2$1\", name2=\"avg_npc_407_1#1$1\", focus=2)]\n[name=\"推进之王\"]六队遇上的人，有着非常恐怖的源石技艺。他们死亡的现场......就好像屠杀一样。许多战士甚至连武器都没拔出来。\n[character(name=\"avg_155_tiger_1#5$1\", name2=\"avg_npc_407_1#1$1\", focus=1)]\n[name=\"因陀罗\"]那真的是源石技艺吗？\n[name=\"因陀罗\"]我不敢相信！\n[name=\"因陀罗\"]我看到有红色的虫子一样的东西撕裂了战士们的胸膛。维娜，你也看见了，那是真正的怪物！\n[character(name=\"avg_155_tiger_1#5$1\", name2=\"avg_npc_407_1#9$1\", focus=2)]\n[name=\"推进之王\"]......\n[character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"]......动手的不是普通萨卡兹。\n[name=\"阿米娅\"]我们必须换个方向。费斯特先生，有其他路可以走吗？\n[character(name=\"avg_npc_402_1#5$1\")]\n[name=\"费斯特\"]有。但那条路没有我们的人接应，一旦遇到萨卡兹士兵......\n[character(name=\"avg_npc_407_1#9$1\")]\n[name=\"推进之王\"]又会是一场苦战。\n[stopmusic(fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Character]\n[Background(image=\"27_g8_jail\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[CameraShake(duration=1, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$d_gen_explo_n\")]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=1, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[delay(time=2.5)]\n[character(name=\"avg_4039_horn_1#8$1\",fadetime=1.5)]\n[PlayMusic(intro=\"$exciting_intro\", key=\"$exciting_loop\", volume=0.4)]\n[delay(time=2)]\n[name=\"号角\"]找掩体！\n[character(name=\"avg_npc_413_1#1$1\")]\n[name=\"罗本\"]号角，这什么玩意儿？！\n[name=\"罗本\"]这萨卡兹朝我们丢过来的是炸弹吗？明明我们没人看见——\n[character(name=\"avg_4039_horn_1#8$1\")]\n[name=\"号角\"]......源石技艺。\n[name=\"号角\"]注意上空！\n[character(name=\"avg_npc_413_1#1$1\")]\n[name=\"罗本\"]我......我看到了......半空中一闪而过的血红色！\n[character(name=\"avg_4039_horn_1#8$1\")]\n[name=\"号角\"]后撤！\n[dialog]\n[CameraShake(duration=1, xstrength=50, ystrength=50, vibrato=60, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$p_atk_lasergun_n\", volume=1)]\n[PlaySound(key=\"$b_char_rockexplo\", volume=1)]\n[PlaySound(key=\"$d_avg_rockfall\", volume=0.6)]\n[delay(time=2)]\n[character(name=\"avg_npc_413_1#1$1\")]\n[name=\"罗本\"]这跟落雷一样的玩意儿，你说它是源石技艺？！\n[name=\"罗本\"]这些可怕的魔族佬......！\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]还不出来？\n[name=\"曼弗雷德\"]你说的战斗不是在地上滚来滚去吧，白狼？\n[dialog]\n[PlaySound(key=\"$e_atk_circleatk_h\", volume=0.6)]\n[Blocker(a=0.7, r=0.95, g=0.2, b=0.2, fadetime=0.1, block=true)]\n[PlaySound(key=\"$e_atk_circleatk_n\")]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[CameraShake(duration=0.4, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[character(name=\"avg_npc_413_1#1$1\")]\n[name=\"罗本\"]天上一次性出现了五道血光？\n[name=\"罗本\"]号角，我们根本没机会——\n[character(name=\"avg_4039_horn_1#2$1\")]\n[name=\"号角\"]不。\n[name=\"号角\"]源石技艺再强......他也只是一个人而已。\n[name=\"号角\"]过往的维多利亚，是如何一次次战胜萨卡兹的？\n[character(name=\"avg_npc_413_1#1$1\")]\n[name=\"罗本\"]你是想......\n[character(name=\"avg_4039_horn_1#7$1\")]\n[name=\"号角\"]我们还有多少弩弹？\n[name=\"号角\"]掩护我。\n[character(name=\"avg_npc_413_1#1$1\")]\n[name=\"罗本\"]好！\n[character(name=\"avg_npc_404_1#1$1\")]\n[name=\"曼弗雷德\"]微不足道的抵抗——\n[dialog]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.02, block=true)]\n[PlaySound(key=\"$d_sp_ballista\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.25, block=true)]\n[CameraShake(duration=0.4, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=true)]\n[delay(time=1)] \n[character]\n[character(name=\"avg_4039_horn_1#7$1\",fadetime=0.5)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-100, fadetime=0.5, block=true)]\n[name=\"号角\"]现在......就是机会。\n[dialog]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-200, fadetime=0.5, block=true)]\n[character(fadetime=0.5)]\n[delay(time=2)] \n[character(name=\"avg_npc_404_1#9$1\")]\n[name=\"曼弗雷德\"]想借着法术轰击的余波逃走？\n[name=\"曼弗雷德\"]我不会让你如愿。\n[Dialog]\n[PlaySound(key=\"$d_sp_ballista\", volume=1)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[delay(time=1)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.1, block=true)]\n[CameraShake(duration=2, xstrength=50, ystrength=50, vibrato=60, randomness=90, fadeout=true, block=false)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.1, block=true)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=1)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.1, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.1, block=true)]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[delay(time=1)]\n[name=\"曼弗雷德\"]——！\n[Dialog]\n[character]\n[delay(time=1)]\n[Dialog]\n[Character(name=\"char_empty\", name2=\"avg_npc_404_1#9$1\",focus=-1)]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[characteraction(name=\"left\", type=\"move\", xpos=-200, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"left\", type=\"move\", xpos=200, fadetime=1, block=false)]\n[Character(name=\"avg_4039_horn_1#7$1\", name2=\"avg_npc_404_1#9$1\",fadetime=0.7,focus=1)]\n[delay(time=1.5)]\n[name=\"号角\"]......我说过了，只要我的士兵们还在，我就不会逃走。\n[Dialog]\n[delay(time=1)]\n[characteraction(name=\"left\", type=\"jump\", xpos=200, power=0, times=1, fadetime=0.2, block=true)]\n[characteraction(name=\"right\", type=\"move\", xpos=80,ypos=0,power=60,times=1, fadetime=0.2,block=true)]\n[CameraShake(duration=0.5, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[PlaySound(key=\"$swordtsing2\", volume=0.9)]\n[CameraShake(duration=-1, xstrength=10, ystrength=10, vibrato=30, randomness=90, fadeout=false, block=false)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.05, block=true)]\n[Delay(time=1)]\n[Character(name=\"avg_4039_horn_1#7$1\", name2=\"avg_npc_404_1#9$1\",focus=2)]\n[name=\"曼弗雷德\"]你果然很不错，白狼。你竟然敢反过来冲向我。\n[name=\"曼弗雷德\"]很可惜......\n[Dialog]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=false)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[characteraction(name=\"right\", type=\"jump\", xpos=-80, power=0, times=1, fadetime=0.2, block=true)]\n[characteraction(name=\"left\", type=\"move\", xpos=-300, power=0, times=1, fadetime=0.2, block=true)]\n[CameraShake(duration=2, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[playsound(key=\"$d_avg_doorbreak\",volume=0.6)]\n[Delay(time=1)]\n[dialog]\n[PlaySound(key=\"$d_avg_runstop\", volume=1)]\n[character(name=\"avg_4039_horn_1#9$1\")]\n[CameraShake(duration=0.5, xstrength=15, ystrength=15, vibrato=20, randomness=70, fadeout=true, block=false)]\n[playsound(key=\"$d_avg_tinnitus\", volume=1)]\n[name=\"号角\"]——唔！\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]谁跟你说过，萨卡兹仅仅依靠源石技艺作战？\n[name=\"曼弗雷德\"]即使是只用剑——我也可以击败你们所有人。\n[character(name=\"avg_4039_horn_1#7$1\")]\n[name=\"号角\"]想赢我......也许不难......\n[name=\"号角\"]但想让我倒下，也不会......那么简单。\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]你很有勇气。\n[name=\"曼弗雷德\"]也多亏了你的勇气，我能更快地结束这场战斗——\n[dialog]\n[character(name=\"avg_4039_horn_1#8$1\")]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[character]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[PlaySound(key=\"$e_atk_magic_n\",volume=1)]\n[delay(time=0.51)]\n在长剑刺下的那一瞬间，曼弗雷德面前的士兵突然消失了。\n她就像溶解并渗透进了她背后的墙面里，连个涟漪都没留下。\n[character(name=\"avg_npc_404_1#6$1\")]\n[name=\"曼弗雷德\"]陌生的源石技艺......\n[MusicVolume(volume=0, fadetime=1)]\n[character(name=\"avg_npc_404_1#8$1\")]\n[name=\"曼弗雷德\"]警戒！\n[dialog]\n[characteraction(name=\"middle\", type=\"move\", xpos=-100, ypos=0,fadetime=0.05, isblock=true)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$e_atk_bldkgtpol_n\", volume=0.3)]\n[PlaySound(key=\"$d_avg_bldwhoosh\", channel=\"swd\",delay=0.1,volume=2)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Dialog]\n[delay(time=0.51)]\n[name=\"曼弗雷德\"]......凭空出现的短刀？\n[name=\"曼弗雷德\"]不，不是凭空出现......\n[dialog]\n[characteraction(name=\"middle\", type=\"move\", xpos=200, ypos=0,fadetime=0.05, isblock=true)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$d_avg_bldwhoosh\", volume=2)]\n[PlaySound(key=\"$p_imp_whip_h\", volume=1)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-100, ypos=0,fadetime=0.1, isblock=true)]\n[MusicVolume(volume=0.4, fadetime=1)]\n[character(name=\"avg_npc_404_1#8$1\",focus=-1)]\n[name=\"？？？\"]你的反应很快。\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]不够快的话，我的胸口恐怕就要多上一个血洞了。\n[dialog]\n[PlaySound(key=\"$e_atk_circleatk_h\", volume=0.6)]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.1, block=true)]\n[PlaySound(key=\"$e_atk_circleatk_n\")]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[CameraShake(duration=0.4, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]找到目标了！瞄准他！\n[name=\"萨卡兹战士\"]怎么回事？又消失了？\n[dialog]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$p_imp_whip_h\", volume=1)]\n[PlaySound(key=\"$p_imp_sword_n\",volume=1)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[delay(time=1)] \n[Character(name=\"avg_npc_419_1#1$1\")]\n[Dialog]\n[PlaySound(key=\"$bodyfalldown2\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", ypos=-300, fadetime=2,block=true)]\n[character(fadetime=0.5)]\n[delay(time=2)]\n[dialog]\n[character]\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]太、太快了！射不中！\n[name=\"萨卡兹战士\"]举盾，快举盾，*粗口*，他是不是会瞬移？\n[dialog]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$p_imp_whip_h\", volume=1)]\n[PlaySound(key=\"$p_imp_sword_n\",volume=1)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[delay(time=1)] \n[Character(name=\"avg_npc_419_1#1$1\")]\n[Dialog]\n[PlaySound(key=\"$bodyfalldown2\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", ypos=-300, fadetime=2,block=true)]\n[character(fadetime=0.5)]\n[delay(time=2)]\n[dialog]\n[character]\n[character(name=\"avg_npc_404_1#8$1\")]\n[name=\"曼弗雷德\"]瞬移？怎么会有这样的源石技艺......就连施术痕迹都侦测不到！\n[name=\"曼弗雷德\"]还是说......障眼法？\n[character(name=\"avg_npc_404_1#9$1\")]\n[name=\"曼弗雷德\"]不要被他愚弄！所有人，不管瞄不瞄得准，一起进攻！\n[name=\"曼弗雷德\"]只要敌人还在我们面前，他就别想逃脱！\n[dialog]\n[PlaySound(key=\"$e_atk_circleatk_h\", volume=0.6)]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.1, block=true)]\n[PlaySound(key=\"$e_atk_circleatk_n\")]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[CameraShake(duration=0.4, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[delay(time=1)]\n[name=\"曼弗雷德\"]打中......了吗？\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]将军，没有尸体。\n[name=\"萨卡兹战士\"]可是地面都烂了......敌人还能躲到哪里去？\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]......\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]将军，身后！\n[dialog]\n[character(name=\"avg_npc_404_1#2$1\")]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[name=\"曼弗雷德\"]只要你敢出来，我就能杀死你！\n[dialog]\n[stopmusic(fadetime=2)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[character]\n[delay(time=2)]\n[Background(image=\"bg_black\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[character(name=\"avg_npc_235\",blackstart=0.2, blackend=0.7, fadetime=1.5)]\n[delay(time=2)]\n[name=\"？？？\"]是吗？\n[Background(image=\"27_g8_jail\",screenadapt=\"coverall\",fadetime=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Delay(time=1)]\n[PlayMusic(intro=\"$tense_intro\", key=\"$tense_loop\", volume=0.4)]\n[name=\"？？？\"]曼弗雷德，你刚才的话说得很好，可惜......只说对了一半。\n[character(name=\"avg_npc_404_1#8$1\")]\n[name=\"曼弗雷德\"]一半？\n[character(name=\"avg_npc_235\",blackstart=0.2,blackend=0.7)]\n[name=\"？？？\"]萨卡兹并不仅仅依靠源石技艺——\n[name=\"？？？\"]——但萨卡兹也绝对不会只用刀剑战斗。\n[Dialog]\n[Character]\n[PlaySound(key=\"$e_atk_magic_m\",volume=1)]\n[Image(image=\"27_i21\",screenadapt=\"coverall\",xScaleFrom=1.1, yScaleFrom=1.1,  fadetime=3)]\n[Background]\n[CameraShake(duration=-1, xstrength=5, ystrength=5, vibrato=90, randomness=90, fadeout=false, block=false)]\n[ImageTween(xScaleFrom=1.1, yScaleFrom=1.1, xScaleTo=1, yScaleTo=1, duration=5, ease=\"OutBack\", fadetime=2, block=false)]\n[delay(time=2)]\n[PlaySound(key=\"$e_atk_magic_n\",volume=1)]\n[name=\"萨卡兹战士\"]啊啊啊！\n[name=\"萨卡兹战士\"]这地面软得不正常——空气会吞人！我、我的刀突然握不住了！\n[name=\"萨卡兹战士\"]将军，你也在下陷？！\n[Dialog]\n[character]\n[PlaySound(key=\"$e_atk_magic_m\",volume=1)]\n[Image(fadetime=2)]\n[delay(time=2)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Background(image=\"27_g8_jail\",screenadapt=\"coverall\")]\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]......都不要动，也不要慌乱。\n[name=\"曼弗雷德\"]短刀是他的法杖。这是源石技艺，也仅仅只是源石技艺。\n[character(name=\"avg_npc_235\",blackstart=0.2,blackend=0.7)]\n[name=\"？？？\"]你很冷静，这很好......你救了你部下的命。\n[name=\"？？？\"]但是......\n[dialog]\n[character(name=\"avg_npc_404_1#2$1\")]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$e_atk_bldkgtpol_n\", volume=0.3)]\n[PlaySound(key=\"$p_imp_sword_n\",volume=1)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[CameraShake(duration=-1, xstrength=5, ystrength=5, vibrato=90, randomness=90, fadeout=false, block=false)]\n[delay(time=0.51)]\n[name=\"曼弗雷德\"]......唔！\n[name=\"曼弗雷德\"]地面......快到胸口了......\n[name=\"曼弗雷德\"]剑......\n[character(name=\"avg_npc_235\",blackstart=0.2,blackend=0.7)]\n[name=\"？？？\"]以你的剑术，挡住我的攻击轻而易举。\n[name=\"？？？\"]可你越是使劲，就越快被地面吞噬。\n[name=\"？？？\"]你想要这种结局吗......这种自取灭亡的结局？\n[dialog]\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]呃......咳咳......\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]将军——\n[character(name=\"avg_npc_404_1#9$1\")]\n[name=\"曼弗雷德\"]都别过来！\n[character(name=\"avg_npc_235\",blackstart=0.2,blackend=0.7)]\n[name=\"？？？\"]或者，你可以和你的部下一样，停止一切动作。\n[character(name=\"avg_npc_404_1#9$1\")]\n[name=\"曼弗雷德\"]......你是想让我等着你捅穿我的心脏？\n[character(name=\"avg_npc_235\",blackstart=0.2,blackend=0.7)]\n[name=\"？？？\"]要杀死你，也不容易。\n[character(name=\"avg_npc_404_1#4$1\")]\n[name=\"曼弗雷德\"]咳咳......哈......\n[name=\"曼弗雷德\"]我知道了，你并不是真的想取我的性命。\n[name=\"曼弗雷德\"]没想到，除了阿斯卡纶，罗德岛还有一位顶尖的萨卡兹刺客。\n[character(name=\"avg_npc_235\",blackstart=0.2,blackend=0.7)]\n[name=\"？？？\"]我并非刺客。\n[name=\"？？？\"]没有必要的话，我并不想伤害任何一个萨卡兹。\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]但你却在帮助我们的敌人！\n[character(name=\"avg_npc_235\", blackstart=0.2, blackend=0.7)]\n[name=\"？？？\"]维多利亚人......是敌人吗？\n[name=\"？？？\"]我看到的是，一群伤痕累累的士兵，在自家的土地上，为了活下去而苦苦挣扎。\n[name=\"？？？\"]而你和特雷西斯，你们正在让萨卡兹变成所有人的敌人。\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]我以前就想过，有机会的话，我想跟你们谈一谈。\n[name=\"曼弗雷德\"]很遗憾，我们初次见面，就是在战场上——\n[name=\"曼弗雷德\"]——罗德岛的精英干员。\n[dialog]\n[PlaySound(key=\"$e_atk_circleatk_h\", volume=0.6)]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.1, block=true)]\n[PlaySound(key=\"$e_atk_circleatk_n\")]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[CameraShake(duration=0.4, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[name=\"曼弗雷德\"]......\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]又不见了？呃，地面恢复了正常！\n[character(name=\"avg_npc_404_1#9$1\")]\n[name=\"曼弗雷德\"]差一点点。\n[name=\"曼弗雷德\"]我几乎就要抓住他了。他的源石技艺很特别......他并不是在给我们的神经系统施加影响制造幻觉。\n[name=\"曼弗雷德\"]地面留下了能量转化的痕迹。难道说......\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]将军，他们都不见了！我是说，那些维多利亚士兵——\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]呵......他愿意配合我拖延时间，就是为了把那些重伤的士兵一个个地救出去吗？\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]那......那我们要不要追？\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]你觉得我们能追上吗？\n[name=\"曼弗雷德\"]我说了差一点点——但对于那种程度的术师而言，差一点就等于绝对会失败。\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]可恶！我们今天本来能在这里把那些反抗力量一锅端，结果又是雇佣兵反叛，又是被什么神秘术师阻拦！\n[character(name=\"avg_npc_404_1#1$1\")]\n[name=\"曼弗雷德\"]因为罗德岛......这就是罗德岛。\n[name=\"曼弗雷德\"]我们错过了把敌人一网打尽的机会，但他们的损失，难道又会少？\n[name=\"曼弗雷德\"]他们本来有藏在暗处的机会，如今却被迫一个个走到了台前。暴露力量对他们来说，已经是战术上的极大失利。\n[name=\"曼弗雷德\"]刺客，擅长空间幻术的术师，还有那位至今未曾露面的女妖......罗德岛的底牌，还剩下多少？\n[character(name=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]将军，你有计划了？\n[character(name=\"avg_npc_404_1#3$1\")]\n[name=\"曼弗雷德\"]......走吧。在对付罗德岛之前，我们先把不安分的小丑给收拾了。\n[dialog]\n[playsound(key=\"$d_gen_walk_n\")]\n[character(fadetime=1.5)]\n[delay(time=2)] \n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1.5, block=true)]\n[Background(image=\"27_g10_lightinduarea_street_n\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1.5, block=true)]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#1$1\", fadetime=1.5)]\n[delay(time=2)]\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#1$1\", focus=1)]\n[name=\"？？？\"]先到这里。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#4$1\", focus=2)]\n[name=\"号角\"]......这是厂区外面的街道？\n[name=\"号角\"]您......您用匕首划开了空间？\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#4$1\", focus=1)]\n[name=\"？？？\"]不要轻易相信你的感官。要误导你们的双眼，远比影响空间容易得多。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#5$1\", focus=2)]\n[name=\"号角\"]您......\n[name=\"号角\"]您救过我，而且不止这一次。我的眼睛或许不能告诉我最正确的答案，但我的感觉不会出错。\n[name=\"号角\"]您到底是谁？\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#5$1\", focus=1)]\n[name=\"？？？\"]Misery。我是罗德岛的Misery。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#5$1\", focus=2)]\n[name=\"号角\"]罗德岛？\n[name=\"号角\"]抱歉......\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#5$1\", focus=1)]\n[name=\"Misery\"]以后你会有机会从风笛那里得到完整的解释。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#4$1\", focus=2)]\n[name=\"号角\"]风笛？\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#4$1\", focus=1)]\n[name=\"Misery\"]她现在算我同事了。\n[name=\"Misery\"]而且......她还是我最好的朋友结交的最后一位朋友。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#6$1\", focus=2)]\n[name=\"号角\"]听起来我错过了很多信息。\n[name=\"号角\"]在我为风笛感到高兴之前，请容我再次向您与罗德岛致谢。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#6$1\", focus=1)]\n[name=\"Misery\"]先离开这里。以后我们很有可能还会见面。\n[name=\"Misery\"]曼弗雷德几乎追踪到了我的源石技艺的真相。他随时都可能追上来。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#2$1\", focus=2)]\n[name=\"号角\"]......不。我想，他此刻大概在忙着处理另一件事。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#2$1\", focus=1)]\n[name=\"Misery\"]你是说深池。\n[name=\"Misery\"]小丘郡的蔓德拉......她不可能离开这座厂房了。\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#5$1\", focus=2)]\n[name=\"号角\"]......\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#5$1\", focus=1)]\n[name=\"Misery\"]你是在惋惜自己无法亲手为战友复仇吗？\n[character(name=\"avg_npc_235\", name2=\"avg_4039_horn_1#2$1\", focus=2)]\n[name=\"号角\"]我......我只是觉得可悲。\n[name=\"号角\"]无论是为了站在这里，懊悔着错过杀死她的机会的我自己......\n[name=\"号角\"]还是为了早就无药可救的她。\n[stopmusic(fadetime=1)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1.5, block=true)]\n[Background(image=\"27_g8_jail\",screenadapt=\"coverall\")]\n[character(name=\"avg_npc_233_1#5\")]\n[PlayMusic(intro=\"$suspenseful_intro\", key=\"$suspenseful_loop\", volume=0.4)]\n[delay(time=1)] \n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[name=\"蔓德拉\"]奇怪，你跟他们说好了吧？他们怎么没在这里接应？\n[dialog]\n[character(name=\"avg_npc_244\")]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.02, block=true)]\n[PlaySound(key=\"$d_avg_arrow\")]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[CameraShake(duration=0.6, xstrength=5, ystrength=8, vibrato=30, randomness=90, block=true)]\n[name=\"深池士兵\"]我——呃！\n[dialog]\n[playsound(key=\"$bodyfalldown2\")]\n[character(fadetime=1.5)]\n[delay(time=2)] \n[character(name=\"avg_npc_233_1#7\")]\n[name=\"蔓德拉\"]怎么回事——\n[character(name=\"avg_npc_244\")]\n[name=\"深池士兵\"]萨卡兹！是萨卡兹！我们快跑——\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.02, block=true)]\n[PlaySound(key=\"$d_avg_arrow\")]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[CameraShake(duration=0.6, xstrength=5, ystrength=8, vibrato=30, randomness=90, block=true)]\n[dialog]\n[character(fadetime=1.5)]\n[playsound(key=\"$bodyfalldown2\")]\n[delay(time=2)] \n[character(name=\"avg_npc_233_1#8\")]\n[name=\"蔓德拉\"]......我们被发现了吗？\n[name=\"蔓德拉\"]不，不行，“间谍”，我们走——\n[name=\"蔓德拉\"]从那扇门出去，也就十米了对不对？只有十米，我们马上就能......\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]好......好的，跑......\n[character(name=\"avg_npc_233_1#8\")]\n[name=\"蔓德拉\"]就像过去一样，那时候是你拉着我，我们只要跑得够快，那些贵族小孩就追不上我们......\n[character(name=\"avg_npc_233_1#9\")]\n[name=\"蔓德拉\"]石像！挡住，挡住他们！\n[dialog]\n[playsound(key=\"$p_imp_blunt_h\")]\n[Blocker(a=1, r=0.95, g=0.95, b=0.95, fadetime=0.2, block=true)]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=0.6)]\n[delay(time=0.51)]\n[PlaySound(key=\"$d_avg_rockfall\", volume=1)]\n[CameraShake(duration=1, xstrength=50, ystrength=50, vibrato=60, randomness=90, fadeout=true, block=false)]\n[name=\"蔓德拉\"]混蛋！都这时候了，怎么连你们都靠不住？\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]蔓德拉......\n[character(name=\"avg_npc_233_1#8\")]\n[name=\"蔓德拉\"]怎么了？不是叫你先不要说话的吗？\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]我走不了了。你走吧。\n[character(name=\"avg_npc_233_1#8\")]\n[name=\"蔓德拉\"]你说什么......？我做了这么多，不都是为了......\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]......为了救我，还是为了去找领袖邀功？\n[character(name=\"avg_npc_233_1#7\")]\n[name=\"蔓德拉\"]这有区别吗？“间谍”，你说什么胡话？我们只剩下五米了，我们的人就在外面！\n[PlaySound(key=\"$d_avg_arrow_rain\", volume=0.5)]\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]他们不在了。\n[character(name=\"avg_npc_233_1#4\")]\n[name=\"蔓德拉\"]啊？\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]蔓德拉......领袖她......她早就抛弃了我......\n[dialog]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.02, block=true)]\n[PlaySound(key=\"$d_avg_arrow\")]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[CameraShake(duration=0.6, xstrength=5, ystrength=8, vibrato=30, randomness=90, block=true)]\n[delay(time=0.51)]\n[character(name=\"avg_npc_233_1#8\")]\n[name=\"蔓德拉\"]“间谍”！！！\n[name=\"蔓德拉\"]混蛋，混蛋——石头，快去，扎穿他们，扎穿那些萨卡兹！\n[dialog]\n[playsound(key=\"$p_imp_blunt_h\")]\n[Blocker(a=1, r=0.95, g=0.95, b=0.95, fadetime=0.2, block=true)]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[name=\"蔓德拉\"]“间谍”，你不会有事的，你只是挨了一箭，剩下三米，就算我扛着你——\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]......你走吧。\n[character(name=\"avg_npc_233_1#5\")]\n[name=\"蔓德拉\"]我......\n[character(name=\"avg_npc_421_1#1$1\")]\n[name=\"塔拉密探\"]要是走得掉的话......\n[name=\"塔拉密探\"]不要......不要去找领袖。\n[dialog]\n[playsound(key=\"$bodyfalldown2\")]\n[character(fadetime=1.5)]\n[delay(time=2)] \n[character(name=\"avg_npc_233_1#5\")]\n[name=\"蔓德拉\"]......死了？\n[name=\"蔓德拉\"]你怎么可以就这样简单地死了......我......\n[character(name=\"avg_npc_233_1#7\")]\n[name=\"蔓德拉\"]基里安，基里安......你个混账东西！我不许你死在这里，你给我起来，起来啊！\n[character(name=\"avg_npc_404_1#4$1\")]\n[name=\"曼弗雷德\"]不必着急。\n[name=\"曼弗雷德\"]你也活不了多久了，蔓德拉。你和你的塔拉老朋友，很快就能相聚。\n[character(name=\"avg_npc_233_1#8\")]\n[name=\"蔓德拉\"]......\n[character(name=\"avg_npc_233_1#7\")]\n[name=\"蔓德拉\"]哈......哈哈哈哈！\n[name=\"蔓德拉\"]曼弗雷德，你又欠了我十一条命。\n[name=\"蔓德拉\"]我好不容易......好不容易杀了那么多萨卡兹。\n[character(name=\"avg_npc_404_1#2$1\")]\n[name=\"曼弗雷德\"]......这就是为什么你必须死在这里。\n[dialog]\n[character]\n[delay(time=1)]\n[PlaySound(key=\"$d_gen_soldiersrun\", volume=1)]\n[Character(name=\"avg_npc_419_1#1$1\",enter=\"left\",name2=\"avg_npc_419_1#1$1\",enter2=\"right\",fadetime=1.5,block=true)]\n[Delay(time=2)]\n[character(name=\"avg_npc_233_1#8\")]\n[name=\"蔓德拉\"]真好......你们送上门来了。\n[name=\"蔓德拉\"]我要一个不剩地，把你们全部碾成泥。\n[Dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}