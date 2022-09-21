var items = {"brief": "煌解决了敌人并与阿米娅汇合，跟在阿米娅身边的干员灰喉似乎与她有过节。\n另一边，陈与诗怀雅则是久违的并肩作战。\n", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] 第一关（后）\n[Dialog]\n[Character]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Character]\n[Background(image=\"bg_building_3\",screenadapt=\"coverall\")]\n[PlayMusic(intro=\"$darkness02_intro\", key=\"$darkness02_loop\", volume=0.8, crossfade=1.5, delay=0.5)]\n[Blocker(a=0,fadetime=2,block=true)]\n[Delay(time=1)]\n[Character(name=\"char_017_homura_3#4\")]\n[name=\"煌\"]  哈......\n[name=\"煌\"]  还好在废城好好准备运动了一下。你们这点人连饭渣都算不上，别说小菜了。\n[Character(name=\"char_1002_nsabr_1\")]\n[CameraShake(duration=0.5, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"整合运动成员\"]  你！罗德岛这种感染者的败类，就这样帮着龙门坑害同胞？！\n[name=\"整合运动成员\"]  把我们留给龙门是不是就不会脏自己的手？虚伪！感染者的耻辱！\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=1)]\n[name=\"煌\"]  啊？\n[name=\"煌\"]  被按在地上揍了两拳还有多余力气放狠话，真行啊。\n[name=\"煌\"]  不过你又搞错了。\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=2)]\n[CameraShake(duration=0.5, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"整合运动成员\"]  唔！\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=1)]\n[name=\"煌\"]  喘不过气了？是不是感觉连肺都要烧起来了？\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=2)]\n[name=\"整合运动成员\"]  呃，呃......\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=1)]\n[name=\"煌\"]  先是鼻腔，然后是气管，最后是胸腔。我的这根手指，只要再这么轻轻一动......\n[name=\"煌\"]  高温气流就会立即窜进你的身体，膨胀，点燃你的器官，从你的毛孔里喷出来。\n[name=\"煌\"]  其实龙门还可能饶你们一命。我真要动手的话——\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=2)]\n[CameraShake(duration=0.5, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"整合运动成员\"]  哈，哈......唔！呃！\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=1)]\n[name=\"煌\"]  你们一个都活不了。\n[Character(name=\"char_017_homura_3#9\",name2=\"char_1002_nsabr_1\",focus=2)]\n[name=\"整合运动成员\"]  不不不不要！放，放开我！救命！！\n[Character(name=\"char_017_homura_3#8\",name2=\"char_1002_nsabr_1\",focus=1)]\n[name=\"煌\"]  行啦，我不会做那么过火的。\n[Character(name=\"char_017_homura_3#8\")]\n[name=\"煌\"]  警员！过来。交给你处理了。\n[name=\"煌\"]  对了，乌萨斯人，刚才那不叫动手。那是顺手。\n[Character(name=\"char_017_homura_3#7\")]\n[name=\"煌\"]  啊，终于来了。\n[name=\"煌\"]  Dr.{@nickname}，这边！\n[Dialog]\n[Character]\n[Delay(time=1)]\n[Decision(options=\"刚才那招太漂亮了！;......;闹得还真大啊。\",values=\"1;2;3\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_017_homura_3#8\")]\n[name=\"煌\"]  哈，小意思。\n[name=\"煌\"]  下次让你看点更厉害的，那招“在不弄断骨头的情况下把手臂反折九十度”怎么样？\n[Predicate(references=\"2\")]\n[Character(name=\"char_017_homura_3#4\")]\n[name=\"煌\"]  噫，你怎么那种表情......\n[name=\"煌\"]  你在罗德岛也有段时间了吧，难道没见过几个会打架的人吗？\n[name=\"煌\"]  跟他们比起来，我算心慈手软的了。\n[Predicate(references=\"3\")]\n[Character(name=\"char_017_homura_3#4\")]\n[name=\"煌\"]  那肯定，你看我像那种藏着捏着干活的人吗？\n[name=\"煌\"]  要是能把他们吓破胆，不过多久其他人就会不攻自破了。\n[name=\"煌\"]  而且不把场面弄大点，不觉得对不起自己累出的一身汗吗？\n[Predicate(references=\"1;2;3\")]\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_walk_n\")]\n[Character(name=\"char_002_amiya_1#3\",fadetime=1,block=true)]\n[Delay(time=1)]\n[name=\"阿米娅\"]  别给博士灌输这些呀......\n[Character(name=\"char_002_amiya_1#3\",name2=\"char_017_homura_3#7\",focus=2)]\n[CameraShake(duration=0.5, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"煌\"]  小兔子！！\n[Character(name=\"char_002_amiya_1#5\",name2=\"char_017_homura_3#7\",focus=1)]\n[name=\"阿米娅\"]  也别一见面就把我抱起来啊！！\n[Character(name=\"char_002_amiya_1#5\",name2=\"char_017_homura_3#7\",focus=2)]\n[name=\"煌\"]  怎么会有这么软的脸蛋......怎么会！别挣扎嘛，让我再多摸摸，又不会少块肉！\n[Character(name=\"char_002_amiya_1#5\",name2=\"char_017_homura_3#7\",focus=1)]\n[name=\"阿米娅\"]  煌......憋嗫叻筷厅吓！\n[Character(name=\"char_002_amiya_1#5\",name2=\"char_017_homura_3#7\",focus=2)]\n[name=\"煌\"]  哎。\n[Dialog]\n[Character]\n[Character(name=\"char_002_amiya_1#5\")]\n[name=\"阿米娅\"]  我们才分别行动不到一个小时，你这是什么反应啊！严肃点！\n[Character(name=\"char_002_amiya_1#5\",name2=\"char_017_homura_3#7\",focus=2)]\n[name=\"煌\"]  真是不可爱的小孩。\n[Character(name=\"char_002_amiya_1#7\",name2=\"char_017_homura_3#7\",focus=1)]\n[name=\"阿米娅\"]  ......\n[name=\"阿米娅\"]  我受够了......！\n[CameraShake(duration=0.5, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Character(name=\"char_002_amiya_1#7\",name2=\"char_017_homura_3#10\",focus=2)]\n[name=\"煌\"]  不，别，我只是在开玩笑！可别再往我脑袋里塞些什么奇怪的情绪了，那种惩罚吃一次都嫌多了！\n[Character(name=\"char_002_amiya_1#7\",name2=\"char_017_homura_3#5\",focus=2)]\n[name=\"煌\"]  等等。\n[name=\"煌\"]  你身边那位？\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_walk_n\")]\n[Character(name=\"char_367_swllow_1\",fadetime=1,block=true)]\n[Delay(time=1)]\n[name=\"灰喉\"]  你好，我是......\n[Character(name=\"char_017_homura_3#5\",name2=\"char_367_swllow_1\",focus=1)]\n[name=\"煌\"]  我知道你是谁。\n[name=\"煌\"]  下次你再对我们感染者同胞说那种话，我会撕掉你半张脸。\n[Character(name=\"char_002_amiya_1#4\",name2=\"char_017_homura_3#5\",focus=1)]\n[name=\"阿米娅\"]  煌！\n[Character(name=\"char_002_amiya_1#4\",name2=\"char_017_homura_3#5\",focus=2)]\n[name=\"煌\"]  对不起，阿米娅。\n[name=\"煌\"]  但我还是要警告她，而且绝不会改口。\n[Character(name=\"char_367_swllow_1#3\")]\n[name=\"灰喉\"]  ......\n[Character(name=\"char_002_amiya_1#4\",name2=\"char_017_homura_3#5\",focus=2)]\n[name=\"煌\"]  先走了。下处目标点会合。\n[Character]\n[Dialog]\n[PlaySound(key=\"$rungeneral\", volume=0.9)]\n[Delay(time=3)]\n[Character(name=\"char_002_amiya_1#1\",name2=\"char_367_swllow_1\",focus=1)]\n[name=\"阿米娅\"]  灰喉，煌她可能误会了你。\n[Character(name=\"char_002_amiya_1#1\",name2=\"char_367_swllow_1#3\",focus=2)]\n[name=\"灰喉\"]  不要紧。毕竟我真的说过那些话。\n[Character(name=\"char_002_amiya_1#1\",name2=\"char_367_swllow_1#3\",focus=1)]\n[name=\"阿米娅\"]  她没理由用那时的事情去批评现在的你。\n[Character(name=\"char_002_amiya_1#1\",name2=\"char_367_swllow_1\",focus=2)]\n[name=\"灰喉\"]  谁知道呢，我真的改变看法了吗？我自己也不知道。\n[Character(name=\"char_002_amiya_1#4\",name2=\"char_367_swllow_1\",focus=1)]\n[name=\"阿米娅\"]  ......\n[Decision(options=\"所以你更要做些什么了。;......;那你现在参与行动，真的好吗？\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"char_367_swllow_1\")]\n[name=\"灰喉\"]  我就是因为想做些什么才来的，不管那位煌干员怎么说，怎么做。\n[Character(name=\"char_002_amiya_1#4\",name2=\"char_367_swllow_1\",focus=1)]\n[name=\"阿米娅\"]  欸......\n[Dialog]\n[Character]\n[Decision(options=\"（阿米娅......）\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_002_amiya_1#1\")]\n[name=\"阿米娅\"]  （嗯......作为非感染者，罗德岛现在的处境可能会让灰喉她感到迷茫。）\n[name=\"阿米娅\"]  （这次行动，也许能让她做出决定......无论是离开还是留下。）\n[name=\"阿米娅\"]  （但她习惯了服从命令，很少表露自己的想法，有时候也会口出惊人......）\n[name=\"阿米娅\"]  （她的情感里没有恶意。她只是需要机会认清自己。）\n[name=\"阿米娅\"]  （不过她的实力非常可靠，博士你可以信任她。虽然我们不一定能帮到她，但她一定能帮到你。）\n[Character(name=\"char_002_amiya_1#6\")]\n[name=\"阿米娅\"]  咦......嘉维尔去哪了？\n[Decision(options=\"按捺不住冲动，去殴打敌人了？;......;她可能想造成些不必要的破坏。\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"char_002_amiya_1#5\")]\n[name=\"阿米娅\"]  这，不好了！\n[name=\"阿米娅\"]  不对，是谁向博士你这么评价她的，有些过分，虽然事实也确实如此......\n[name=\"阿米娅\"]  但我们确实不能在这个时间点出差错。赶快去下个巡逻点向她发送联络信号吧。\n[name=\"阿米娅\"]  即使她的行动都在规划之内，但没人监督的话，还是会造成很可怕的后果......\n[Decision(options=\"其他的小队呢？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_002_amiya_1#1\")]\n[name=\"阿米娅\"]  其他小队有精英干员们代为指挥，他们也会向我们报告战况的，放心吧。\n[name=\"阿米娅\"]  现在，我们已经处于联合作战中最关键的一环。这会是龙门决定性的一战。\n[Decision(options=\"陈警司呢？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=0.6, block=true)]\n[Image(image=\"avg_6_21\",x=0, y=0, xScale=1.1, yScale=1.1, fadetime=0)]\n[Blocker(a=0, fadetime=0.6, block=false)]\n[Character]\n[name=\"阿米娅\"]  她有自己的指挥任务。\n[name=\"阿米娅\"]  依照我们和近卫局的规划，作为特别督查组的组长，陈警司将带领近卫局的精锐部队，尽可能地阻挡整合运动的进攻性力量。\n[name=\"阿米娅\"]  一方面，她要“引导”整合运动主要部队的行动方向，逼迫他们前往指定位置；另一方面，她也要尽力阻止其他整合运动小队进入贫民区。\n[Image(image=\"avg_6_22\",x=0, y=0, xScale=1.1, yScale=1.1, fadetime=1)]\n[name=\"阿米娅\"]  而罗德岛会沿各个巡逻点前进，在行进过程中帮助近卫局其他队伍消灭残余的整合运动，促使整合运动放弃战斗。\n[name=\"阿米娅\"]  最后，我们会到达预定地点，贫民区和近卫局一同击溃整合运动的主力部队。\n[name=\"阿米娅\"]  在这种规模的行动中，罗德岛能做的不多，但我们会尽力完成合约内容。\n[name=\"阿米娅\"]  至于一些我们和近卫局之间的合作问题......Dr.{@nickname}，我保证会给罗德岛的各位一个答复。\n[name=\"阿米娅\"]  不过博士，有件事，也许只有你能做到。\n[Dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=0.6, block=true)]\n[Image(fadetime=0)]\n[Blocker(a=0, fadetime=0.6, block=false)]\n[Decision(options=\"交给我了！;......;我是不是该表现的严肃点？\", values=\"1;2;3\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_002_amiya_1#2\")]\n[name=\"阿米娅\"]  嘿嘿，嗯，\n[name=\"阿米娅\"]  嗯......不过，也不是那种强求你去努力表现自己的事。\n[Predicate(references=\"2\")]\n[Character(name=\"char_002_amiya_1#1\")]\n[name=\"阿米娅\"]  欸......别不说话呀！\n[name=\"阿米娅\"]  那，那我说了？\n[name=\"阿米娅\"]  好歹表个态呀博士......！\n[Predicate(references=\"3\")]\n[Character(name=\"char_002_amiya_1#5\")]\n[name=\"阿米娅\"]  不用，不用啦！\n[name=\"阿米娅\"]  这件事可能也不能太严肃哦！\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"char_002_amiya_1#1\")]\n[name=\"阿米娅\"]  ......我会联系煌，让她保护你。会合前这一小段时间，也麻烦你，照看一下煌。\n[Decision(options=\"照看她？你是不是对我有什么误会？;......;这是我第一次知道我甚至有能力保护精英干员。\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"char_002_amiya_1#3\")]\n[name=\"阿米娅\"] 啊......不是说武力上的！是说心理上的那种照看。\n[name=\"阿米娅\"]  有些时候，罗德岛必须与感染者作战。\n[name=\"阿米娅\"]  尤其是现在。我们和龙门间的合作已经出现了一些隔阂。\n[name=\"阿米娅\"]  虽然煌是罗德岛赖以生存的精英作战干员之一，心理要素却也会在一定程度上影响她的发挥。\n[name=\"阿米娅\"]  正因为她坚定地站在我们这边，感染者的遭遇才更有可能左右她的情感状态。\n[name=\"阿米娅\"]  趁这个机会，博士也可以好好了解下她。\n[name=\"阿米娅\"]  和她多说些感谢的话，比如说，“谢谢你在废城救了我们”之类的，她会很受用的！\n[Decision(options=\"我知道了！;......;真有这个必要吗？\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"char_002_amiya_1#2\")]\n[name=\"阿米娅\"]  我绝对相信博士你的能力！去啦，快去吧！\n[Dialog]\n[Character]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Character]\n[Background(image=\"bg_uptown_2\",screenadapt=\"coverall\")]\n[Blocker(a=0,fadetime=2,block=true)]\n[Delay(time=1)]\n[Character(name=\"char_308_swire_1#5\",fadetime=1,block=true)]\n[Delay(time=1)]\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[name=\"诗怀雅\"]  他们的主力部队正在和我们的其他队伍交战！\n[name=\"诗怀雅\"]  我们会比整合运动更快到达目标地点，加入包围网的组建！\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=2)]\n[name=\"陈\"]  和他们这么说，“但现在，我们首先要消灭其他还没和主力部队汇合的整合运动。”\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=1)]\n[name=\"诗怀雅\"]  好，没问题！\n[name=\"诗怀雅\"]  就按刚才通讯里陈警司说得那样做！通讯完毕！\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[Dialog]\n[Character]\n[Delay(time=1)]\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=1)]\n[name=\"诗怀雅\"]  我们有多久没并肩作战过了？\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=2)]\n[name=\"陈\"]  现在也不叫“并肩作战”。这该叫“不得已的合作”。你是怎么从废城回来的？\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=1)]\n[name=\"诗怀雅\"]  我当然有自己的机动配给啦，否则怎么去救罗德岛？你是不是在闹别扭啊，一副气鼓鼓的样子。\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=2)]\n[name=\"陈\"]  嗯，让我想想。\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=1)]\n[name=\"诗怀雅\"]  居然还要搜肠刮肚找理由，你这明显是没事找事......\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=2)]\n[name=\"陈\"]  啊，对。背着我营救罗德岛这件事，你可以私下里告知我。\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=1)]\n[name=\"诗怀雅\"]  你是觉得脸上无光，还是觉得自己被蒙在鼓里了？\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=2)]\n[name=\"陈\"]  都有。\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=1)]\n[name=\"诗怀雅\"]  ......怎么回事，你什么时候变这么坦诚了？我以前认识的陈警官，嘴上可是要绕好几圈——\n[Character(name=\"char_308_swire_1#5\",name2=\"char_010_chen_1#1\",focus=2)]\n[name=\"陈\"]  来了！\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_soldiersrun\",volume=0.5)]\n[Character(name=\"char_1002_nsabr_1\",name2=\"char_1002_nsabr_1\",fadetime=1,block=true)]\n[Delay(time=2)]\n[Character(name=\"char_308_swire_1#6\")]\n[name=\"诗怀雅\"]  近卫局防御小队，举盾！放心，就和之前无数次战斗一样，你们的身后，永远会有队友撑住你们！顶好！\n[Character(name=\"char_010_chen_1#2\")]\n[name=\"陈\"]  十步！\n[Character(name=\"char_308_swire_1#6\")]\n[name=\"诗怀雅\"]  弩队，上弦！\n[Character(name=\"char_1002_nsabr_1\",name2=\"char_1002_nsabr_1\")]\n[name=\"整合运动成员\"]  这段路也被封锁了？不行......我们没地方可去了！只能从这里走！\n[name=\"整合运动成员\"]  别怕，我们冲过去！跟我上！\n[Character(name=\"char_010_chen_1#2\")]\n[name=\"陈\"]  五步！\n[Character(name=\"char_308_swire_1#6\")]\n[name=\"诗怀雅\"]  攻击手，就位！\n[Character]\n[name=\"整合运动成员\"]  冲散他们！\n[Character(name=\"char_010_chen_1#2\")]\n[name=\"陈\"]  ——现在！\n[Character(name=\"char_308_swire_1#6\")]\n[name=\"诗怀雅\"]  批次一弩手，射击！\n[Character(name=\"char_010_chen_1#2\")]\n[name=\"陈\"]  长枪队，长枪起！\n[name=\"陈\"]  不许哪怕一个整合运动逃出龙门！\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=3, block=true)]\n[Character]\n[stopmusic(fadetime=2)]\n[Background(image=\"bg_lungmen_o\", width=1, height=1, screenadapt=\"coverall\")]\n[Blocker(a=0, fadetime=3, block=true)]\n[Dialog]\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[Character(name=\"char_2005_weiyw_1\")]\n[name=\"魏彦吾\"]  你们已经就位了？\n[name=\"魏彦吾\"]  对，没错。\n[name=\"魏彦吾\"]  我知道。只是，近卫局有他们该做的事，你们有你们该做的，这不算越俎代庖。\n[name=\"魏彦吾\"]  确实。林舸瑞是很反对。\n[name=\"魏彦吾\"]  但这件事，由不得他！\n[name=\"魏彦吾\"]  ......\n[name=\"魏彦吾\"]  各方的意见我都收到了。我们没有选择余地，这也是无奈之举。\n[name=\"魏彦吾\"]  舸瑞的女儿会联络你们。此后三周以内，绝不要联系我，一切信息交她保管。\n[name=\"魏彦吾\"]  就交给你们了。不用担心身后，我会一直看着你们。\n[name=\"魏彦吾\"]  ......不必再用这个称呼。往事只是往事，我与往事再无瓜葛。\n[name=\"魏彦吾\"]  嗯，望龙门长治久安。\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character]\n[Background]\n[Blocker(a=0, fadetime=3, block=true)]\n[name=\"？？？\"]  老魏，我们是那个......你们怎么说来着，结义兄弟？\n[name=\"？？？\"]  所以，她和我女儿，拜托你了。\n[name=\"？？？\"]  哎，感觉和你说这些是多此一举。你总不能连自己的妹妹也照顾不好吧？\n[name=\"？？？\"]  女儿的名字我已经取好了，就叫......\n[name=\"？？？\"]  ......塔露拉。\n[name=\"？？？\"]  别太放在心上。我全明白。\n[name=\"？？？\"]  我全都明白。\n[Dialog]\n[Delay(time=0.5)]\n[Blocker(a=1,r=0, g=0, b=0, fadetime=2, block=true)]"}// 定义数据出口
module.exports = {dataList_story: items}