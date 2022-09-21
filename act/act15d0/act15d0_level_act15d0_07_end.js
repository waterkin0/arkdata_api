var items = {"brief": "罗宾的设伏险些成功，不过塔最终还是被启动。在轰鸣声中，塔轰然沉底，而在黑暗中，安东尼与罗宾展开了一小段对话。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] \n[Dialog]\n[stopmusic]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[Background(image=\"bg_prison_corridor\",screenadapt=\"coverall\")]\n[Character(name=\"avg_npc_135#1\",name2=\"char_empty\")]\n[delay(time=1)]\n[playMusic(intro=\"$farce_intro\", key=\"$farce_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[characteraction(name=\"left\", type=\"move\", xpos=-70, fadetime=0.5, block=true)]\n[delay(time=0.55)]\n[characteraction(name=\"left\", type=\"move\", xpos=140, fadetime=0.7, block=true)]\n[delay(time=0.75)]\n[characteraction(name=\"left\", type=\"move\", xpos=-70, fadetime=0.5, block=true)]\n[delay(time=1)]\n[Character(name=\"avg_npc_135#4\",name2=\"char_empty\",focus=1)]\n[name=\"巴顿\"]啧，见鬼了，钥匙卡到底哪里去了......\n[Character(name=\"avg_npc_135#2\",name2=\"char_empty\",focus=1)]\n[name=\"巴顿\"]难道是上厕所的时候被我冲掉了？\n[dialog]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[Character(name=\"avg_npc_135#2\",name2=\"avg_npc_134\",enter2=\"right\",fadetime=1)]\n[delay(time=0.51)]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\")]\n[characteraction(name=\"left\", type=\"jump\", xpos=-20, power=70, times=1, fadetime=0.3)]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\",focus=2)]\n[name=\"狱警A\"]巴顿老大，怎么了？\n[delay(time=1)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[characteraction(name=\"left\", type=\"move\", xpos=150,fadetime=0.3)]\n[characteraction(name=\"right\", type=\"jump\", xpos=50, power=80, times=1, fadetime=0.3)]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\",focus=1)]\n[name=\"巴顿\"]少管闲事！\n[dialog]\n[delay(title_test=0.51)]\n[characteraction(name=\"right\", type=\"move\", xpos=70,fadetime=1,block=true)]\n[delay(time=1.1)]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\",focus=2)]\n[name=\"狱警A\"]是，是！\n[dialog]\n[CameraShake(duration=0.5, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\")]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[characteraction(name=\"right\", type=\"exit\", direction=\"right\")]\n[delay(time=1)]\n[Character]\n[delay(time=0.7)]\n[Character(name=\"char_empty\",name2=\"avg_npc_136#1\",blackstart2=0.14,blackend2=0.4)]\n[delay(time=0.51)]\n[Character(name=\"avg_npc_134\",enter=\"left\",name2=\"avg_npc_136#1\",blackstart2=0.14,blackend2=0.4,fadetime=1)]\n[delay(time=1)]\n[CameraShake(duration=0.5, xstrength=10, ystrength=10, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Character(name=\"avg_npc_134\",name2=\"avg_npc_136#1\",blackstart2=0.14,blackend2=0.4,focus=1)]\n[name=\"狱警A\"]啧，神气什么......\n[Character(name=\"avg_npc_134\",name2=\"avg_npc_136#4\",blackstart2=0.14,blackend2=0.4,focus=2)]\n[name=\"狱警B\"]或许......又是谁触了他的霉头。\n[Character(name=\"avg_npc_134\",name2=\"avg_npc_136#4\",blackstart2=0.14,blackend2=0.4,focus=1)]\n[name=\"狱警A\"]嘿，我猜是安东尼。\n[name=\"狱警A\"]也不知道是怎么回事，好像有人要对他下手。\n[name=\"狱警A\"]巴顿不是天天吹我们监狱多么好多么完善，这下他肯定难受死了。\n[Character(name=\"avg_npc_134\",name2=\"avg_npc_136#1\",blackstart2=0.14,blackend2=0.4,focus=2)]\n[name=\"狱警B\"]我们也是狱警。\n[Character(name=\"avg_npc_134\",name2=\"avg_npc_136#1\",blackstart2=0.14,blackend2=0.4,focus=1)]\n[name=\"狱警A\"]哎，我不是高兴有人刺杀，我就是看到他不爽就挺爽的。\n[name=\"狱警A\"]而且说白了，咱们这些年，看伦道尔和巴顿做的龌龊事还少吗？\n[name=\"狱警A\"]要我说啊，伦道尔绝对知道这些刺客哪儿来的，他就是收了钱懒得管。\n[Character(name=\"avg_npc_134\",name2=\"avg_npc_136#4\",blackstart2=0.14,blackend2=0.4,focus=2)]\n[name=\"狱警B\"]......或许吧。\n[Dialog]\n[Delay(time=1)]\n[stopmusic(fadetime=2)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character]\n[Background(image=\"bg_prison_commandroom\",screenadapt=\"coverall\")]\n[playMusic(intro=\"$stranger_intro\", key=\"$stranger_loop\", volume=0.4)]\n[delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[Dialog]\n[Character(name=\"char_264_Mountain_1#5\")]\n[delay(time=1)]\n[PlaySound(key=\"$fightgeneral\", volume=1)]\n[CameraShake(duration=1, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Character(name=\"char_451_robin#6\")]\n[name=\"罗宾\"]咕......\n[dialog]\n[characteraction(name=\"middle\", type=\"move\", ypos=-40,fadetime=0.6, block=true)]\n[PlaySound(key=\"$bodyfalldown1\", volume=1)]\n[CameraShake(duration=0.6, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Delay(time=0.6)]\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#6\",focus=2)]\n[name=\"安东尼\"]别动，罗宾。\n[name=\"安东尼\"]不要逼我杀你。\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]......\n[Character(name=\"char_214_kafka_1#2\")]\n[name=\"卡夫卡\"]唔，真没想到，我居然没发现罗宾你是内奸。\n[name=\"卡夫卡\"]说不定你有干这行的天赋呢。\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#4\",focus=2)]\n[name=\"安东尼\"]等等，你手里拿的是什么？\n[Character(name=\"char_214_kafka_1#2\")]\n[name=\"卡夫卡\"]那是炸药的开关？！\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#4\",focus=2)]\n[name=\"安东尼\"]卡夫卡，快去启动塔下沉的机关！\n[dialog]\n[Character]\n[delay(time=1)]\n[Character(name=\"char_451_robin#3\")]\n[PlaySound(key=\"$tokenset\", volume=1)]\n[delay(time=1)]\n[Character]\n[CameraShake(duration=1.5, xstrength=40, ystrength=40, vibrato=40, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=1)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=0.6,delay=0.2)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=0.2,delay=0.4)]\n[delay(time=2)]\n[Character(name=\"char_214_kafka_1#2\")]\n[CameraShake(duration=1, xstrength=10, ystrength=10, vibrato=10, randomness=90, fadeout=true, block=false)]\n[name=\"卡夫卡\"]呜哇！烧起来了！\n[Character(name=\"char_264_Mountain_1#4\")]\n[name=\"安东尼\"]快！\n[dialog]\n[Character(name=\"char_214_kafka_1#5\")]\n[delay(time=0.51)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-100, fadetime=0.5, block=true)]\n[name=\"卡夫卡\"]我都要忘了是哪个了！\n[characteraction(name=\"middle\", type=\"move\", xpos=200, fadetime=0.5, block=true)]\n[name=\"卡夫卡\"]而且这些感觉都不能用了啊！\n[characteraction(name=\"middle\", type=\"move\", xpos=-100, fadetime=0.5, block=true)]\n[name=\"卡夫卡\"]啊，我找到了，应该是这个按钮！\n[name=\"卡夫卡\"]拜托了，千万要能用啊！\n[CameraShake(duration=1, xstrength=10, ystrength=10, vibrato=10, randomness=90, fadeout=true, block=false)]\n[name=\"卡夫卡\"]我按！\n[dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Character]\n[CameraShake(duration=3, xstrength=10, ystrength=10, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Image(image=\"avg_ac15_6\",xScale=1, yScale=1, fadetime=0)]\n[Blocker(a=0, fadetime=1, block=true)]\n[delay(time=1)]\n[name=\"卡夫卡\"]怎么感觉没怎么动，难道真的是坏了？！\n[name=\"安东尼\"]罗宾，为什么你要这么做？\n[name=\"罗宾\"]我......\n[dialog]\n[delay(time=0.51)]\n[PlaySound(key=\"$sheildimpact\", volume=1)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[delay(time=0.65)]\n[CameraShake(duration=500, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=false, block=false)]\n[delay(time=0.7)]\n[name=\"卡夫卡\"]动了！\n[dialog]\n[delay(time=1)]\n[musicvolume(volume=0.15,fadetime=1)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[image]\n[CameraShake(stop=true)]\n[Character(name=\"avg_npc_135#2\",name2=\"char_empty\")]\n[characteraction(name=\"left\", type=\"move\", xpos=300, ypos=-60,fadetime=0.9, block=true)]\n[Background(image=\"bg_prison_corridor\",xscale=1.4,yscale=1.4,y=40)]\n[delay(time=1)]\n[characteraction(name=\"left\", type=\"jump\", xpos=-75, ypos=15, power=20, times=1, fadetime=0.9,block=false)]\n[BackgroundTween(yFrom=40,yTo=20,duration=0.7,else=\"OutSine\", block=false)]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=1, block=true)]\n[characteraction(name=\"left\", type=\"jump\", xpos=-75,  ypos=15,power=20, times=1, fadetime=0.9,block=false)]\n[BackgroundTween(yFrom=20,yTo=0,duration=0.7,else=\"OutSine\", block=false)]\n[delay(time=1)]\n[characteraction(name=\"left\", type=\"jump\", xpos=-75, ypos=15, power=20, times=1, fadetime=0.9,block=false)]\n[BackgroundTween(yFrom=0,yTo=-20,duration=0.7,else=\"OutSine\", block=false)]\n[delay(time=1)]\n[characteraction(name=\"left\", type=\"jump\", xpos=-75, ypos=15, power=20, times=1, fadetime=0.9,block=false)]\n[BackgroundTween(yFrom=-20,yTo=-40,duration=0.7,else=\"inSine\", block=false)]\n[delay(time=1.2)]\n[Character(name=\"avg_npc_135#4\",name2=\"char_empty\")]\n[CameraShake(duration=0.5, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"巴顿\"]*哥伦比亚俚语*\n[dialog]\n[delay(time=0.6)]\n[Character(name=\"avg_npc_135#2\",name2=\"char_empty\")]\n[name=\"巴顿\"]算了，上次去顶楼都不知道是什么时候了。\n[name=\"巴顿\"]下次跟伦道尔大哥说一声补一张好了。\n[name=\"巴顿\"]啧。\n[dialog]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[Character(name=\"avg_npc_135#2\",name2=\"avg_npc_134\",enter2=\"right\",fadetime=1)]\n[delay(time=1)]\n[Character(name=\"avg_npc_135#2\",name2=\"avg_npc_134\",focus=2)]\n[name=\"狱警A\"]巴顿老大，你......\n[dialog]\n[CameraShake(duration=0.5, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\",focus=1)]\n[characteraction(name=\"right\", type=\"move\", xpos=40,ypos=-20,fadetime=0.3,block=false)]\n[name=\"巴顿\"]嗯？\n[delay(time=0.51)]\n[dialog]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\",focus=2)]\n[name=\"狱警A\"]您要干嘛？\n[delay(time=1.2)]\n[dialog]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[characteraction(name=\"left\", type=\"move\", xpos=20,ypos=-20,fadetime=0.3)]\n[characteraction(name=\"right\", type=\"jump\", xpos=80,ypos=-20, power=80, times=0.5, fadetime=0.4)]\n[name=\"巴顿\"]我上去看看那些渣滓打扫得怎么样！\n[delay(time=0.6)]\n[dialog]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\")]\n[musicvolume(volume=0.4,fadetime=1)]\n[PlaySound(key=\"$sheildimpact\", volume=1)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[delay(time=0.65)]\n[CameraShake(duration=500, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=false, block=false)]\n[PlaySound(key=\"$alarmenter\",channel=\"bgs\", volume=1,block=false,loop=true)]\n[Blocker(a=0.4, r=255,g=0,b=0, fadetime=0.7, block=true)]\n[Blocker(a=0, r=255,g=0,b=0, fadetime=0.7, block=true)]\n[Blocker(a=0.4, r=255,g=0,b=0, fadetime=0.7, block=true)]\n[Blocker(a=0, r=255,g=0,b=0, fadetime=0.7, block=true)]\n[Blocker(a=0.4, r=255,g=0,b=0, fadetime=0.7, block=false)]\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\",focus=2)]\n[name=\"狱警A\"]怎......怎么了？！\n[Character(name=\"avg_npc_135#4\",name2=\"avg_npc_134\",focus=1)]\n[Blocker(a=0, r=0,g=0,b=0, fadetime=0, block=true)]\n[name=\"巴顿\"]什么东西，怎么回事？！\n[dialog]\n[delay(time=0.51)]\n[Blocker(a=1, r=0,g=0,b=0, fadetime=0.6, block=true)]\n[Image(image=\"avg_ac15_6_2\",xScale=1.3, yScale=1.3,y=100)]\n[BackgroundTween( yFrom=100,yTo=-100, duration=30, block=false)]\n[CameraShake(duration=500, xstrength=20, ystrength=20, vibrato=30, randomness=90, fadeout=false, block=false)]\n[Blocker(a=0, r=0,g=0,b=0, fadetime=0.6, block=true)]\n[delay(time=1)]\n[name=\"安东尼\"]抓紧身边的东西，卡夫卡！\n[name=\"卡夫卡\"]安东尼，那边，罗宾要被甩进电梯里去了！\n[name=\"安东尼\"]......\n[name=\"安东尼\"]抓紧我了，罗宾！\n[name=\"罗宾\"]为什么......\n[name=\"安东尼\"]现在不是说话的时候！\n[name=\"安东尼\"]咬紧牙根，别咬到舌头！\n[dialog]\n[stopsound(channel=\"bgs\")]\n[CameraShake(duration=3, xstrength=50, ystrength=50, vibrato=60, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=1)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=1,delay=0.05)]\n[PlaySound(key=\"$d_gen_explo_n\", volume=1,delay=0.1)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0.1, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.1, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0.1, block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.1, block=true)]\n[delay(time=0.5)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[stopmusic]\n[Background(image=\"bg_black\",screenadapt=\"coverall\")]\n[image]\n[delay(time=4)]\n[Character(name=\"char_214_kafka_1#5\")]\n[Blocker(a=0.6, r=0, g=0, b=0, fadetime=2, block=true)]\n[delay(time=1.5)]\n[name=\"卡夫卡\"]安东尼，你和罗宾没事吧。\n[dialog]\n[Character]\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#6\",fadetime=2)]\n[delay(time=2)]\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#6\",focus=2)]\n[name=\"安东尼\"]我没事，罗宾在我怀里。\n[name=\"安东尼\"]看来整个监狱的电力系统都瘫痪了，这里一片漆黑。\n[name=\"安东尼\"]这对我们来说算是一个机会。\n[Character(name=\"char_214_kafka_1#4\")]\n[name=\"卡夫卡\"]嗯。\n[name=\"卡夫卡\"]我刚才感觉塔直接往下硬穿了一层。\n[name=\"卡夫卡\"]我们现在应该在地下二层左右，距离医务室还有些距离呢。\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#1\",focus=2)]\n[name=\"安东尼\"]嗯，趁狱警们还没反应过来，走吧。\n[dialog]\n[delay(time=1)]\n[playMusic(intro=\"$m_dia_street_intro\", key=\"$m_dia_street_loop\", volume=0.4)]\n[name=\"安东尼\"]罗宾，你没事吧？\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]......\n[name=\"罗宾\"]我......我没事真的是好事吗？\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=2)]\n[name=\"安东尼\"]是好事。\n[name=\"安东尼\"]你可以不必这么在意这件事。\n[name=\"安东尼\"]毕竟我早就说过，“你依然可以尝试刺杀我”。\n[name=\"安东尼\"]而如果你认为你做的事情是一种背叛，那我可以告诉你——\n[name=\"安东尼\"]我们之间的关系恐怕也没有好到可以讨论信赖关系的时候。\n[Character(name=\"char_214_kafka_1#2\")]\n[name=\"卡夫卡\"]诶，我也不算吗？\n[Character(name=\"char_264_Mountain_1#5\")]\n[name=\"安东尼\"]不算。\n[Character(name=\"char_214_kafka_1#2\")]\n[name=\"卡夫卡\"]诶，安东尼你好无情哦。\n[Character(name=\"char_264_Mountain_1#5\")]\n[name=\"安东尼\"]恐怕对刚认识几个月的人就完全信任才是有问题的。\n[name=\"安东尼\"]当然，我确实会有些失望，但也仅此而已。\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=2)]\n[name=\"安东尼\"]但我依然好奇，你和我们相处的时间中表现出的那些情感并不是演戏，这我能够看得出来。\n[name=\"安东尼\"]是什么促使你做出这样的选择，罗宾？\n[Character(name=\"char_451_robin#6\")]\n[name=\"罗宾\"]......\n[dialog]\n[delay(time=1)]\n[name=\"罗宾\"]我的父亲，他能赚很多钱，也对我很好，是我引以为豪的父亲。\n[name=\"罗宾\"]但是有一天，他的公司忽然倒闭了。\n[name=\"罗宾\"]在那之后，他再也没有成功过。\n[name=\"罗宾\"]于是他变了，他开始酗酒，开始变得易怒，开始痛恨身边的一切。\n[name=\"罗宾\"]母亲因此离开了他，他也背了许多债，最后，他因为肝脏问题和许多我根本看不懂的并发症住进了医院。\n[name=\"罗宾\"]母亲一直也劝我跟她一起生活。\n[name=\"罗宾\"]但我始终记得父亲过去对我的好。\n[name=\"罗宾\"]我想要为他做些什么，所以我放弃了许多过去的爱好，尝试做了许多工作，但父亲的医药费实在是太贵了。\n[name=\"罗宾\"]直到有一天，有一个人找上我说，他可以给我许多钱，只要我帮他杀一个人。\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=2)]\n[name=\"安东尼\"]那个人就是我。\n[name=\"安东尼\"]原来如此，我无法许诺你任何东西，所以你做了这个选择。\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]不，他其实就在监狱里假扮成狱警观察着你，他叫杰斯顿。\n[name=\"罗宾\"]你邀请我后，他找到我，告诉我——\n[name=\"罗宾\"]是西蒙家族最后的反扑让我父亲的公司覆灭的。\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#6\",focus=2)]\n[name=\"安东尼\"]......居然有这样的事。\n[name=\"安东尼\"]这样的话，恐怕我非但不应该责怪你，还应该向你道歉。\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]不，你不要道歉，我不是想说这个。\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]不是这样的，安东尼。\n[name=\"罗宾\"]我其实也觉得这样是错的，这样是不好的。\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]但是我放弃了。\n[name=\"罗宾\"]我不知道不这样做我该怎么做，我不知道。\n[musicvolume(volume=0, fadetime=1)]\n[Character(name=\"char_451_robin#6\")]\n[name=\"罗宾\"]我好累啊，母亲要我做出选择，父亲要我做出选择，生活要我做出选择，杰斯顿要我做出选择，你也要我做出选择。\n[CameraShake(duration=0.5, xstrength=15, ystrength=15, vibrato=30, randomness=90, fadeout=true, block=true)]\n[name=\"罗宾\"]我不想做选择，我不想判断每一件事是对是错，是好是坏，我不想。\n[CameraShake(duration=0.3, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=true)]\n[name=\"罗宾\"]我好累啊，为什么啊！\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=2)]\n[name=\"安东尼\"]但是，你不能把选择权交给别人，罗宾。\n[name=\"安东尼\"]你必须自己去思考每一件事，去做出每一个选择，并为每一个选择负责。\n[name=\"安东尼\"]否则的话，你是无法主宰自己的命运的。\n[name=\"安东尼\"]这是我在这座监狱的几年生活中学到的最重要的事情。\n[name=\"安东尼\"]力量很重要，智慧也很重要，但最重要的，是勇气，是为自己的选择买单的勇气。\n[name=\"安东尼\"]我也会恐惧自己出错，但我不能就此逃避选择。\n[name=\"安东尼\"]我曾经以为我无人可以依靠是因为没有找到依靠的对象，但后来我发现，这样的对象并不存在。\n[name=\"安东尼\"]我们只能依靠自己。\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]......\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#6\",focus=2)]\n[name=\"安东尼\"]我为我没有及时发现你的痛苦而感到抱歉，罗宾。\n[name=\"安东尼\"]我也再次向你强调，你做的事确实险些破坏了我的越狱计划，因此我不会轻易说我原谅你。\n[name=\"安东尼\"]但是站在一个曾经同样经历过与你类似痛苦的人的立场上，我希望你可以暂时忘记这件事。\n[name=\"安东尼\"]你必须重新审视自己，去思考，你究竟想要做什么事。\n[musicvolume(volume=0.4, fadetime=1)]\n[Character(name=\"char_451_robin#6\")]\n[name=\"罗宾\"]我究竟......想要做什么事......\n[dialog]\n[delay(time=0.7)]\n[Character(name=\"char_451_robin#6\",name2=\"char_264_Mountain_1#5\",focus=2)]\n[name=\"安东尼\"]前面就是杜玛的房间了，你可以慢慢想。\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#5\",focus=1)]\n[name=\"罗宾\"]......虽然你可能不相信我的话，但是，杰斯顿已经从我这里知道了你们全部的越狱计划，他一定在哪里等着你。\n[Character(name=\"char_451_robin#3\",name2=\"char_264_Mountain_1#5\",focus=2)]\n[name=\"安东尼\"]我知道了。\n[stopmusic(fadetime=1)]\n[Character]\n[name=\"？？？\"]不，不用担心找不到我，我就在这里等着你们。\n[delay(time=1)]\n[Character(name=\"char_264_Mountain_1#6\")]\n[name=\"安东尼\"]？！\n[Character(name=\"char_451_robin#2\")]\n[name=\"罗宾\"]是杜玛的房间里传来的！\n[Character(name=\"char_264_Mountain_1#6\")]\n[name=\"安东尼\"]难道说......！\n[dialog]\n[Dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=false)]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[PlaySound(key=\"$rungeneral\", volume=0.7,delay=0.4)]\n[PlaySound(key=\"$rungeneral\", volume=0.5,delay=0.6)]\n[Character(fadetime=1)]\n[delay(time=4)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}