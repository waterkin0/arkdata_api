var items = {"brief": "“大水坑”拆除在即，众人在这里最后玩了个痛快。杜林人们期待着下一个地标的诞生，依娜姆也与嘉维尔讨论着阿卡胡拉的未来。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[stopmusic]\n[Dialog]\n[Background(image=\"30_g2_fountainlake\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$dignified_intro\", key=\"$dignified_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n[Character(name=\"avg_npc_566_1#1$1\")]\n[name=\"克罗绮·砖石\"]根据大家表决的结果，陪伴了我们半年多的“大水坑”即将完成它的历史使命。它会被爆破拆解，重新回归为工程材料。\n[Character(name=\"avg_npc_566_1#5$1\")]\n[name=\"克罗绮·砖石\"]市民们，这场稍微延长了一点的夏日狂欢恐怕即将结束了。\n[dialog]\n[character]\n[name=\"杜林人\"]呜呜呜，我会永远记得这段美好的时光。\n[name=\"杜林人\"]超级旋转大滑梯真是怎么玩都玩不够，居然就要和它告别了......\n[Character(name=\"avg_npc_566_1#3$1\")]\n[name=\"克罗绮·砖石\"]不过！取代“大水坑”的，会是更新的，更美的，更不一样的建筑！！毕竟这里可是际崖城，是最棒的建筑设计师们缔造的城市！\n[Character(name=\"avg_npc_566_1#6$1\")]\n[name=\"克罗绮·砖石\"]斯第奇·画布和卡奇·叙光是际崖城新生代里最引人瞩目的建筑设计师，他们会在未来的几个月里交出自己的设计方案......\n[Character(name=\"avg_npc_566_1#6$1\")]\n[name=\"克罗绮·砖石\"]到那时，又会是一场怎样的强者对决呢！\n[Character(name=\"avg_npc_566_1#2$1\")]\n[name=\"克罗绮·砖石\"]呼呼，简直让人想起几年前，他们初露锋芒的时候，围绕着穹顶的那场竞标大赛！\n[Character(name=\"avg_npc_566_1#3$1\")]\n[name=\"克罗绮·砖石\"]当年的穹顶之争没有胜利者，那么这次，谁会取得下一个际崖城地标的设计权呢？让我们——\n[dialog]\n[stopmusic(fadetime=1)]\n[delay(time=1)]\n[Character(name=\"avg_npc_566_1#7$1\")]\n[name=\"克罗绮·砖石\"]我先喝口水。\n[dialog]\n[characteraction(name=\"middle\", type=\"move\", ypos=-20, fadetime=0.3, isblock=true)]\n[characteraction(name=\"middle\", type=\"jump\", ypos=20, fadetime=0.3, isblock=true)]\n[playmusic(intro=\"$farce_intro\", key=\"$farce_loop\", volume=0.4)]\n[delay(time=0.51)]\n[Character(name=\"avg_npc_564_1#5$1\")]\n[name=\"耶奇·地心\"]克罗绮，你今天这个状态，不会是喝了酒来的吧？\n[Character(name=\"avg_npc_566_1#10$1\")]\n[name=\"克罗绮·砖石\"]暂时没有。\n[Character(name=\"avg_npc_564_1#1$1\")]\n[name=\"耶奇·地心\"]这风格可不像你啊。\n[Character(name=\"avg_npc_566_1#1$1\")]\n[name=\"克罗绮·砖石\"]依娜姆给我看的录像里，地上的比赛中有一个职位叫做主持人。\n[Character(name=\"avg_npc_566_1#1$1\")]\n[name=\"克罗绮·砖石\"]我打算拓展一下职业路径。\n[Character(name=\"avg_npc_566_1#3$1\")]\n[name=\"克罗绮·砖石\"]总之！建筑设计师们的设计虽然暂时还等不来，但是，市民们，这个夏天的尾巴可是稍纵即逝！\n[Character(name=\"avg_npc_566_1#3$1\")]\n[name=\"克罗绮·砖石\"]就让我们在滑梯消失前的最后时间里，去玩它个爽吧！\n[dialog]\n[character]\n[PlaySound(key=\"$d_avg_crwdcheerup\", volume=1)]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"杜林人\"]哦！！！！！\n[musicvolume(volume=0.2, fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character]\n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[musicvolume(volume=0.4, fadetime=1)]\n[Character(name=\"avg_npc_572_1#4$1\",enter=\"right\",fadetime=0.7)]\n[PlaySound(key=\"$runsand\",channel=\"run\")]\n[delay(time=0.8)]\n[stopsound(channel=\"run\")]\n[name=\"特米米\"]嘉维尔！\n[dialog]\n[characteraction(name=\"middle\", type=\"jump\",power=60, fadetime=0.7,times=3,block=true)]\n[characteraction(name=\"middle\", type=\"exit\",direction=\"left\",fadetime=1,block=false)]\n[character(fadetime=1)]\n[delay(time=0.51)]\n[Character(name=\"char_empty\")]\n[characteraction(name=\"middle\", type=\"move\", xpos=200, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-200, fadetime=1, block=false)]\n[PlaySound(key=\"$runsand\",channel=\"run\")]\n[Character(name=\"avg_1026_gvial2_1#1$1\",fadetime=0.7)]\n[delay(time=0.8)]\n[stopsound(channel=\"run\")]\n[name=\"嘉维尔\"]特米米，小心！你慢点！\n[dialog]\n[characteraction(name=\"middle\", type=\"jump\",power=60, fadetime=0.7,times=3,block=true)]\n[characteraction(name=\"middle\", type=\"exit\",direction=\"left\",fadetime=0.7,block=false)]\n[character(fadetime=1)]\n[delay(time=0.51)]\n[Dialog]\n[Character(name=\"avg_npc_572_1#4$1\", name2=\"char_empty\")]\n[name=\"特米米\"]之前你们在阿卡胡拉的大瀑布玩水，我听说了以后可是羡慕了好久呢！\n[name=\"特米米\"]嘿嘿，这次我也可以加入啦！\n[dialog]\n[characteraction(name=\"right\", type=\"move\", xpos=200, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"right\", type=\"move\", xpos=-200, fadetime=1, block=false)]\n[Character(name=\"avg_npc_572_1#4$1\", name2=\"avg_1026_gvial2_1#1$1\",fadetime=0.7)]\n[delay(time=2)]\n[Character(name=\"avg_npc_572_1#4$1\", name2=\"avg_1026_gvial2_1#5$1\",focus=2)]\n[name=\"嘉维尔\"]你这孩子。\n[Character(name=\"avg_npc_572_1#4$1\", name2=\"avg_1026_gvial2_1#10$1\",focus=2)]\n[name=\"嘉维尔\"]嗯？平常你都小心翼翼地藏着尾巴，这么一看，是不是又变粗了点？\n[Character(name=\"avg_npc_572_1#5$1\", name2=\"avg_1026_gvial2_1#10$1\",focus=1)]\n[name=\"特米米\"]欸？才没有！我来之前才刚用卷尺量过！已经好几个月没有变粗了！\n[Character(name=\"avg_npc_572_1#5$1\", name2=\"avg_1026_gvial2_1#3$1\",focus=2)]\n[name=\"嘉维尔\"]哦，看来真的很在意？\n[Character(name=\"avg_npc_572_1#3$1\", name2=\"avg_1026_gvial2_1#3$1\",focus=1)]\n[name=\"特米米\"]呜呜呜，看我的泼水攻击！\n[dialog]\n[characteraction(name=\"left\", type=\"move\", ypos=-150, fadetime=0.3, isblock=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[CameraShake(duration=1, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[Effect(name=\"$e_shuihua\", layer = 1,x=100,rox = 50, roy=80)]\n[PlaySound(key=\"$d_avg_jump_water\", volume=0.9)]\n[characteraction(name=\"left\", type=\"jump\", ypos=150, fadetime=0.3, block=true)]\n[characteraction(name=\"right\", type=\"move\", xpos=80, fadetime=0.3, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[characteraction(name=\"right\", type=\"jump\", xpos=-80, fadetime=0.3, block=true)]\n[delay(time=1)]\n[Character(name=\"avg_npc_572_1#3$1\", name2=\"avg_1026_gvial2_1#3$1\",focus=2)]\n[name=\"嘉维尔\"]很大胆嘛！来就来！\n[dialog]\n[PlaySound(key=\"$runsand\")]\n[character(fadetime=0.5)]\n[delay(time=1)]\n[Character(name=\"avg_4055_bgsnow_1#1$1\")]\n[name=\"阿芙朵嘉\"] 她们似乎比你更像杜林人呢，斯第奇。\n[Character(name=\"avg_4054_malist_1#1$1\")]\n[name=\"斯第奇·画布\"]你也未必知道什么叫“杜林人”，鲁珀。\n[Character(name=\"avg_4055_bgsnow_1#1$1\")]\n[name=\"阿芙朵嘉\"] 你好像有点紧张，在担心和卡奇的竞标吗？\n[Character(name=\"avg_4054_malist_1#8$1\")]\n[name=\"斯第奇·画布\"]担心他？笑话！我还没沦落到担心比不过卡奇的境地。不过是他的方案一向比较招外行人的喜欢罢了。\n[Character(name=\"avg_4054_malist_1#8$1\")]\n[name=\"斯第奇·画布\"]也有些人是比较看好我的方案的，或许我该拿出点不同的风格，好赢过那家伙。\n[Character(name=\"avg_4054_malist_1#5$1\")]\n[name=\"斯第奇·画布\"]要不然干脆......唉！现在还是别想了！\n[Character(name=\"avg_4054_malist_1#1$1\")]\n[name=\"斯第奇·画布\"]......说实话，如果不论美学，仅从可玩度上而言，这“大水坑”也还算凑合吧。\n[Character(name=\"avg_4055_bgsnow_1#1$1\")]\n[name=\"阿芙朵嘉\"] 原来你也会享受这些？\n[Character(name=\"avg_4054_malist_1#1$1\")]\n[name=\"斯第奇·画布\"]偶尔的话。\n[dialog]\n[character]\n[Character(name=\"char_empty\")]\n[PlaySound(key=\"$runsand\")]\n[characteraction(name=\"middle\", type=\"move\", xpos=200, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-200, fadetime=1, block=false)]\n[Character(name=\"avg_npc_567_1#1$1\",fadetime=0.7)]\n[delay(time=1.5)]\n[name=\"卡奇·叙光\"]斯第奇，你在这儿啊！\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]想不想感受下流速全开滑梯的威力？因为会对设备有损耗，平常可没这机会。\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]我刚和极境哥试了几次，那种速度感！\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]不过掉进水里的时候会有点疼，你要不要试试？\n[Character(name=\"avg_4054_malist_1#2$1\")]\n[name=\"斯第奇·画布\"]不用，我对这种玩法可没有一点兴趣......\n[dialog]\n[character]\n[name=\"极境\"]哟吼，小心！\n[dialog]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.1, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.1, block=true)]\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#14$1\")]\n[characteraction(name=\"right\", type=\"move\", xpos=1300 ,ypos=500,fadetime=0, isblock=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.2, block=true)]\n[characteraction(name=\"right\", type=\"move\", xpos=-1300,ypos=-500, fadetime=0.5, isblock=true)]\n[delay(time=0.1)]\n[CameraShake(duration=0.5, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Effect(name=\"$e_shuihua\", x=200,layer = 1)]\n[PlaySound(key=\"$d_avg_jump_water\", volume=0.9)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.05, block=true)]\n[dialog]\n[Delay(time=1)]\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#14$1\",focus=2)]\n[name=\"极境\"] 卡奇老弟，这冲击力，没的说！水花居然能溅这么高！\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#14$1\",focus=1)]\n[name=\"卡奇·叙光\"]我们要不试试换种玩法，比如说......比谁的水花小？\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#2$1\",focus=2)]\n[name=\"极境\"] 压水花？好思路！听起来不会那么疼了！\n[Character(name=\"avg_4054_malist_1#10$1\")]\n[name=\"斯第奇·画布\"]我的沙堡......\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#9$1\",focus=2)]\n[name=\"极境\"] （卡奇老弟，我们是不是惹祸了。）\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#9$1\",focus=1)]\n[name=\"卡奇·叙光\"]（呃，就算是斯第奇，也不至于为了沙堡生气吧？）\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#9$1\",focus=2)]\n[name=\"极境\"] （可他看起来就是生气了。）\n[Character(name=\"avg_npc_567_1#1$1\", name2=\"avg_npc_571_1#9$1\",focus=1)]\n[name=\"卡奇·叙光\"]（要不然我们......）\n[dialog]\n[characteraction(name=\"left\", type=\"exit\", direction=\"right\",fadetime=0.5,block=true)]\n[characteraction(name=\"right\", type=\"exit\", direction=\"right\",fadetime=0.7,block=true)]\n[character(fadetime=1)]\n[PlaySound(key=\"$d_avg_slip\")]\n[delay(time=0.8)]\n[Character(name=\"avg_4054_malist_1#3$1\")]\n[name=\"斯第奇·画布\"]就这么跑了？你们两个，给我回来！！\n[dialog]\n[characteraction(name=\"middle\", type=\"exit\", direction=\"right\",fadetime=0.3,block=true)]\n[character(fadetime=0)]\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#1$1\",fadetime=0.7)]\n[delay(time=1)]\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#1$1\",focus=1)]\n[name=\"依娜姆\"]嗯，情绪调动相当不错。\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#8$1\",focus=2)]\n[name=\"克罗绮·砖石\"]这都是我学习的成果，感谢这些录像带。\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#8$1\",focus=1)]\n[name=\"依娜姆\"]接下来，我们可以用一系列的比赛，维持住“竞赛”这个概念的热潮，再借着几个月后卡奇和斯第奇的竞标，把气氛推到最高点。\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#8$1\",focus=2)]\n[name=\"克罗绮·砖石\"]我们是不是可以印发一批小纸片，让观众们可以借此表达自己对某一方的支持，最后如果猜对了会有点奖品之类的。\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#8$1\",focus=1)]\n[name=\"依娜姆\"]我们管这东西叫奖券，克罗绮你真是无师自通。地上的商人们可是把这东西当做自己敛财的手段呢。\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#2$1\",focus=2)]\n[name=\"克罗绮·砖石\"]杜林人对这样赚钱可没兴趣......不如让输的那一方承包胜利者一个月的酒吧！\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#5$1\",focus=2)]\n[name=\"克罗绮·砖石\"]唔，刺激一点承包两个月也行。这个可以由投票决定。\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#10$1\",focus=2)]\n[name=\"克罗绮·砖石\"]然后关于输几个月酒的竞猜或许也能再发一批奖券......\n[Character(name=\"avg_npc_075\", name2=\"avg_npc_566_1#10$1\",focus=1)]\n[name=\"依娜姆\"]......我开始担心际崖城市民的未来了。\n[musicvolume(volume=0.2, fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character]\n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[musicvolume(volume=0.4, fadetime=1)]\n[Character(name=\"avg_1026_gvial2_1#7$1\")]\n[name=\"嘉维尔\"]唔，这种其实没派上什么用场的感觉真是难得。\n[Character(name=\"char_416_zumama_1#1\")]\n[name=\"森蚺\"]怎么？你一定得揍些什么才满意？\n[Character(name=\"avg_1026_gvial2_1#7$1\")]\n[name=\"嘉维尔\"]也不是。\n[Character(name=\"avg_1026_gvial2_1#10$1\")]\n[name=\"嘉维尔\"]不过，如果顺利的话，阿卡胡拉能收获些杜林的技术，这就不算白回来一趟了。\n[Character(name=\"avg_npc_572_1#1$1\")]\n[name=\"特米米\"]嘉维尔虽然很早就离开了家，但其实还蛮关心阿卡胡拉的吧！\n[Character(name=\"avg_1026_gvial2_1#10$1\")]\n[name=\"嘉维尔\"]嗯，就算看过了各种各样的地方，还是雨林里最让我安心。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]那你会回来吗？\n[Character(name=\"avg_1026_gvial2_1#10$1\")]\n[name=\"嘉维尔\"]暂时还没这个打算。我在罗德岛上还有病人呢。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]相当多提亚卡乌希望你回去，你甚至可以考虑成为王酋。\n[Character(name=\"avg_1026_gvial2_1#7$1\")]\n[name=\"嘉维尔\"]他们还希望地上会直接长蕉果。这片大地总不会遂了每个人的愿。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]嘉维尔，你来担任阿卡胡拉的王酋是最合适的，只有你才能镇住所有提亚卡乌。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]所有人都在期待着你的回归。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]而如果你实在不愿意，那么，最后结果可能会变成萨尔贡宫廷派一个王酋来管理阿卡胡拉。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]到时候，阿卡胡拉一定不会再像如今这么自由。\n[Character(name=\"avg_1026_gvial2_1#3$1\")]\n[name=\"嘉维尔\"]依娜姆，不是还有你这个大酋长吗？\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]......不，有些事情我是没办法做的。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]我可以想办法帮大家从外面倒一点破烂回来。但真正能够把提亚卡乌紧紧拧成一条藤蔓的，不会是我。\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]依娜姆，我也并不是在逃避责任。\n[Character(name=\"avg_1026_gvial2_1#2$1\")]\n[name=\"嘉维尔\"]只是，我还没想好怎么做。\n[Character(name=\"char_416_zumama_1#5\")]\n[name=\"森蚺\"]嘉维尔居然在“想”，真难得。\n[Character(name=\"avg_1026_gvial2_1#8$1\")]\n[name=\"嘉维尔\"]喂，祖玛玛，想打架吗！\n[Character(name=\"char_416_zumama_1#5\")]\n[name=\"森蚺\"]我的意思是，嘉维尔一般都是做了再去想。\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]关于我自己，或许可以。但如果关于这么多提亚卡乌......\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]该结束的总会结束，不是吗，就像是这大滑梯一样，拆掉，然后会建新的。\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]其实我刚才没听见你们在聊什么啦，我只是想说，朋友们，趁它还没消失，我来给你们拍张合照吧。\n[dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[character]\n[background]\n[stopmusic(fadetime=1)]\n[delay(time=1)]\n[playMusic(intro=\"$holiday_intro\", key=\"$holiday_loop\", volume=0.4)]\n[PlaySound(key=\"$d_avg_summercicada\",volume=0.7, loop=true, channel=\"slide\")]\n[Image(image=\"30_i04\", xScaleFrom=1.5, yScaleFrom=1.5,x=-450, y=-200)]\n[stopsound(channel=\"slide\", fadetime=3)]\n[ImageTween(image=\"30_i04\", fadetime=1, xScaleFrom=1.5, yScaleFrom=1.5, xScaleTo=1.4, yScaleTo=1.4,xFrom=-450, yFrom=-200, xTo=-400, yTo=-50,duration=10)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n[Character(name=\"avg_1026_gvial2_1#10$1\")]\n[name=\"嘉维尔\"]哈哈，也好，复杂的东西暂时放到一边。\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]眼下先要尽兴！\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]特米米，你也笑起来！\n[Image(image=\"30_i04\",fadetime=1, xScaleFrom=1.5, yScaleFrom=1.5,x=400, y=100)]\n[ImageTween(image=\"30_i04\", fadetime=1, xScaleFrom=1.5, yScaleFrom=1.5, xScaleTo=1.4, yScaleTo=1.4,xFrom=400, yFrom=100, xTo=350, yTo=200, duration=10)]\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]看来你们已经学会杜林人的哲学了。\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]毕竟休个假可不容易，怎么能浪费呢！\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]说得好，我该敬你一杯！想尝尝浆果番茄酒吗？我请。\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]不，这个还是算了。\n[dialog]\n[character]\n[Image(image=\"30_i04\", fadetime=1)]\n[delay(time=1)]\n[playsound(key=\"$skill_flash\")]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.2, block=true)]\n[Image(image=\"30_i04\")]\n[ImageTween(image=\"30_i04\", xScaleFrom=1, yScaleFrom=1, xScaleTo=0.8, yScaleTo=0.8)]\n[imagerotate(angle=-4,fadetime=0.2,block = false)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n[musicvolume(volume=0.2, fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[image]\n[Character]\n[Delay(time=1)]\n[Background(image=\"30_g2_fountainlake\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[musicvolume(volume=0.4, fadetime=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\t\n[Blocker(a=0.5, r=0, g=0, b=0, fadetime=0.5, block=true)]\n[Subtitle(text=\"用于拆除的炸药已经布置完毕，助理机器人也通通做好了准备。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"这座带给了大家无数欢乐的大滑梯即将消失。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"但是夏天总要结束，之后一定还会有更浓的快乐。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"每个际崖城的市民都是这么相信着的。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"五、四、三、二、一。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[subtitle]\n[stopmusic(fadetime=1)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[CameraShake(duration=-1, xstrength=10, ystrength=0, vibrato=15, randomness=20,fadeout=true)]\n[delay(time=1)]\n[Background(image=\"bg_black\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)] \n[delay(time=1)]\n[CameraShake(duration=1, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=0.4)]\n[PlaySound(key=\"$d_avg_run_water\", volume=0.6)]\n[PlaySound(key=\"$d_avg_walk_water\", volume=0.6)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.05, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=1, block=true)]\n[delay(time=2)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\t\n[Blocker(a=0.5, r=0, g=0, b=0, fadetime=0.5, block=true)]\n[Subtitle(text=\"爆炸声并没有人们想象的大，大滑梯只是开始缓慢地崩解。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[Subtitle(text=\"如果用一些修辞的话，可以说是溶化在了水中。\", x=300, y=370, alignment=\"center\", size=24, delay=0.04, width=700)]\n[subtitle]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"30_g3_fountainlake_ruins\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$storyendjp_intro\", key=\"$storyendjp_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\n[Character(name=\"avg_npc_571_1#3$1\")]\n[name=\"极境\"] 嗯，消失得很轻盈。\n[Character(name=\"avg_4054_malist_1#1$1\")]\n[name=\"斯第奇·画布\"]我还以为你会喝得烂醉如泥，然后错过目睹这玩意被炸掉的美好景色。\n[Character(name=\"avg_npc_571_1#4$1\")]\n[name=\"极境\"] 哈哈，我只是比较擅长享受。\n[Character(name=\"avg_npc_571_1#10$1\")]\n[name=\"极境\"] 但是，在这种时候，我更倾向于保持清醒。\n[Character(name=\"avg_npc_571_1#10$1\")]\n[name=\"极境\"] 这是我对正在消逝之物最基本的尊重。\n[Character(name=\"avg_4054_malist_1#2$1\")]\n[name=\"斯第奇·画布\"]哇哦，难道你其实是个深藏不露的聪明人？这种人设就算是在际崖城的图书馆藏书中也算是烂俗了。\n[Character(name=\"avg_npc_571_1#5$1\")]\n[name=\"极境\"] 你这小子！\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]斯第奇。\n[Character(name=\"avg_4054_malist_1#1$1\")]\n[name=\"斯第奇·画布\"]......卡奇。\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]接下来就是要动真格的了，我们公平竞争，各凭本事吧。\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]不介意的话，握个手？\n[Character(name=\"avg_4054_malist_1#1$1\")]\n[name=\"斯第奇·画布\"]......好吧，出于对另一位际崖城公民最基本的尊重。\n[Character(name=\"avg_npc_571_1#2$1\")]\n[name=\"极境\"] 我说，你们是不是其实关系蛮好的？\n[Character(name=\"avg_4054_malist_1#6$1\")]\n[name=\"斯第奇·画布\"]你用哪只眼睛看出来的？\n[stopmusic(fadetime=1)]\n[Dialog]\n[character]\n[Character(name=\"char_empty\")]\n[characteraction(name=\"middle\", type=\"move\", xpos=-500, fadetime=0.3, block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"middle\", type=\"move\", xpos=50, fadetime=0.5, block=false)]\n[delay(time=0.7)]\n[characteraction(name=\"middle\", type=\"move\", xpos=475, fadetime=1, block=false)]\n[Character(name=\"avg_npc_566_1#1$1\",fadetime=0.7)]\n[delay(time=1.5)]\n[playmusic(intro=\"$farce_intro\", key=\"$farce_loop\", volume=0.4)]\n[Character(name=\"avg_npc_566_1#1$1\")]\n[name=\"克罗绮·砖石\"]接下来就是要动真格的了！\n[Character(name=\"avg_4054_malist_1#6$1\",fadetime=0)]\n[name=\"斯第奇·画布\"]......克罗绮什么时候又喝上了？\n[Character(name=\"avg_npc_566_1#9$1\")]\n[name=\"克罗绮·砖石\"]预热的预热，前奏的前奏，际崖城大竞技系列第一季！\n[Character(name=\"avg_npc_566_1#3$1\")]\n[name=\"克罗绮·砖石\"]恰卡恰卡恰卡恰卡——咚咚！游泳大赛！\n[Character(name=\"avg_npc_566_1#9$1\")]\n[name=\"克罗绮·砖石\"]几位，有没有兴趣？\n[Dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=2)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}