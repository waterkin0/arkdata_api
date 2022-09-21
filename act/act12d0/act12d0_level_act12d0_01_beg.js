var items = {"brief": "前往嘉维尔家乡的途中，飞行器遭到了不明攻击。\n嘉维尔与刻俄柏将博士唤醒，三人一同前往飞行器的坠落点，却发现飞行器被围住了。\n", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] \n[stopmusic]\n[Dialog]\n[Delay(time=1)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_black\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[playMusic(intro=\"$darkness01_intro\", key=\"$darkness01_loop\", volume=0.4)]\n[Delay(time=1)]\n这里有你想要的一切。\n你所渴望的片刻安宁、没有战争的大地、母亲的怀抱。\n你的意识无限扩张，你挣脱了枷锁，你自由了。\n[Dialog]\n[delay(time=1)]\n[Decision(options=\"什么是自由？;我自由了！\", values=\"1;2\")]\n[Predicate(references=\"1\")]\n通常意义上，自由是一种相对的状态，它意味着没有束缚，但这么说着的人往往依然被他的肉体所束缚。\n但你真正的自由了。\n[Predicate(references=\"2\")]\n没错，我亲爱的朋友，你永远地、永永远远地自由了。\n[Predicate(references=\"1;2\")]\n你如同时间长河中的一颗顽石，它将会带走你的责任、宿命、欲望、联系，但唯有你自身，你将永远地存在于这里。\n你不拥有任何东西，任何东西也不拥有你。\n[Decision(options=\"没有比这更棒的事了！;责任、宿命、欲望、联系......\", values=\"1;2\")]\n[Predicate(references=\"1\")]\n你理解了一切，现在的你正在与某个未知的存在对话，你应当敬畏，献上你最纯洁的血。\n或者，你只是单纯因为冲击而陷入了昏迷状态，在跟臆想中的自己进行一场毫无意义的对话。\n[Decision(options=\"我要在这里建立我的王国！;不，我反悔了，我更喜欢痛苦。\", values=\"3;4\")]\n[Predicate(references=\"3\")]\n绝妙的选择，我的国王，这里比大地更广阔，你可以在这里建立一切你想要的东西。\n那么首先，先来建立一个国家吧，国家的名字就叫存在国怎么样？\n建立在虚无之上的国家将永远屹立不倒——\n哦不，该死，我们的伟业看起来要在此中断了。\n如同窗帘间射入的一道光，强烈的酸痛感瞬间占据了你的所有意识。\n[Predicate(references=\"4\")]\n你喜欢痛苦，你喜欢付出，你喜欢主动投身火焰，你喜欢让自己受伤。\n聪明人总是想要一场恰到好处的失败，一些可以及时止损的失去，他们认为这样可以最有效地让自己成长。\n不要自大，我的虚无部书记。\n那么，首先，先给你来一些你最喜欢的痛苦吧——\n从你的全身各处的肌肉上，传来了极度酸痛的感觉。\n[Predicate(references=\"2\")]\n士兵，你承受了无数痛苦，见证了无数失败，其中让你愉快的事寥寥无几。\n而让你走到这一步的就是它们。它们是毒药，它们是枷锁，它们让你不得安宁。\n有些事情已经无法挽回，而有的事情无需你来承担。\n[Decision(options=\"你说得对，我该休息了。;不，有人在等我。\",values=\"5;6\")]\n[Predicate(references=\"5\")]\n好的，亲爱的，这就对了。\n放轻松，我来为你唱一首摇篮曲，你将永久地睡去，不受一丝侵扰。\n哦，但是，就在你要入睡时，一种强烈的感觉突然向你袭来——这是痛楚！\n[Predicate(references=\"6\")]\n哦，是的，我承认，那是些好孩子。\n但你有没有想过，没有你他们也能够前进，你并不对他们负责。\n你的责任、你的宿命、你的欲望、你与他们的联系，一切只是你的妄想？\n......好吧，我知道你已经决定，那么，给你一个惊喜吧，没错，就是你最喜欢的痛苦！\n从你的全身各处的肌肉上，传来了极度酸痛的感觉。\n[Predicate(references=\"3;4;5;6\")]\n随之而来的，是一个遥远但是熟悉的声音。\n[name=\"？？？\"]  ......士，博士！\n阿米娅？不，不是，这个声音比阿米娅更加成熟。\n[name=\"？？？\"]  躺这么久了还不醒，真麻烦。\n[Dialog]\n[PlaySound(key=\"$fightgeneral\")]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[PlaySound(key=\"$fightgeneral\")]\n[CameraShake(duration=0.2, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true)]\n[Delay(time=0.55)]\n[PlaySound(key=\"$fightgeneral\")]\n[CameraShake(duration=0.7, xstrength=10, ystrength=12, vibrato=30, randomness=120, fadeout=true, block=true)]\n......和暴力。\n你感觉到可能是自己脸颊的部位受到了几次冲击，看来对方还有言出必行的优良品质。\n[name=\"？？？\"]  怎么办，这都不醒，反正阿米娅不在，把博士抓起来来几圈大风车试试好了。\n[name=\"？？？\"]  大风车？好玩吗，我也要玩！\n对方似乎要采用过激手段了，而且插进来的这个声音，带着一丝纯真。\n纯真这项美好的特质在这种情境下的含义是，她是认真的。\n[Decision(options=\"不，我要回去！;睁开双眼\",values=\"1;2\")]\n[Predicate(references=\"1\")]\n哦，很遗憾，有些旅行不是由你的意志决定的，你已经失去了踏上这次旅行的机会。\n不过不要紧张，机会还有很多。现在，让我们睁开双眼......\n[Predicate(references=\"2\")]\n[Predicate(references=\"1;2\")]\n[PlayMusic(intro=\"$darkness01_intro\", key=\"$darkness01_loop\", volume=0.8, crossfade=1, delay=0.5)]\n[Blocker(a=1, r=0,g=0, b=0, block=true)]\n[Background(image=\"bg_desert_1\",x=-100, y=-50,xScale=1.3, yScale=1.3, fadetime=2)]\n[Image(image=\"ac12_1\",x=0,y=0,xScale=1, yScale=1)]\n[Dialog]\n[Blocker(a=0.7, r=0, g=0, b=0,fadetime=0.8, block=true)]\n[Blocker(a=1, r=0, g=0, b=0,fadetime=0.2, block=true)]\n[Blocker(a=0, r=0, g=0, b=0,fadetime=2,block=false)]\n[Delay(time=1)]\n[Delay(time=2)]\n[name=\"刻俄柏\"]  嘉维尔，大风车应该怎么玩呀？\n[name=\"嘉维尔\"]  所谓大风车，就是你要把对方的腿或者手抓起来，然后开始旋转起来。\n[name=\"嘉维尔\"]  等到你觉得差不多了就把他丢出去。\n[name=\"刻俄柏\"]  听起来好好玩！我可以试试吗！\n[name=\"嘉维尔\"]  可以啊，我来接住博士就是了......嗯？\n[name=\"嘉维尔\"]  博士，你终于醒了。\n[CameraShake(duration=0.5, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"刻俄柏\"]  啊，博士醒了！\n[name=\"嘉维尔\"]  小刻，别一下子就跳到博士身上去，博士被你这么一压说不定又要昏过去了。\n[name=\"刻俄柏\"]  哦，对不起，博士！\n[Dialog]\n[character]\n[stopmusic(fadetime=2)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[image]\n[Background(image=\"bg_desert_1\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=3, block=true)]\n[PlayMusic(intro=\"$farce_intro\", key=\"$farce_loop\", volume=0.8, crossfade=1, delay=0.5)]\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",fadetime=2,block=true)]\n[delay(time=2)]\n[Decision(options=\"你们没事吧？;......;刚刚你是不是扇我了？\",values=\"1;2;3\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",focus=1)]\n[name=\"嘉维尔\"]  没事，这点高度，小意思。\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",focus=2)]\n[name=\"刻俄柏\"]  我也没事！\n[Predicate(references=\"2\")]\n[Character(name=\"char_187_ccheal_1#3\")]\n[name=\"嘉维尔\"]  喂，不是吧博士，你难道又摔失忆了？\n[Decision(options=\"我失忆了。;姐姐，你是谁？\",values=\"4;5\")]\n[Predicate(references=\"4\")]\n[Character(name=\"char_187_ccheal_1\")]\n[name=\"嘉维尔\"]  博士，你别忘了，我是医生。\n[Predicate(references=\"5\")]\n[Character(name=\"char_187_ccheal_1#3\")]\n[name=\"嘉维尔\"]  还会开玩笑，看起来没有大事。\n[Predicate(references=\"3\")]\n[Character(name=\"char_187_ccheal_1#3\")]\n[name=\"嘉维尔\"]  扇了。\n[Predicate(references=\"1;3;4;5\")]\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",focus=1)]\n[name=\"嘉维尔\"]  总之，博士，我来简单说明一下情况吧。\n[name=\"嘉维尔\"]  总而言之，我们坠机了。\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",focus=2)]\n[name=\"刻俄柏\"]  从很高的地方摔了下来！咻——！碰！这样。\n[Decision(options=\"详细一点。;......;太简单了吧！\",values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",focus=1)]\n[name=\"嘉维尔\"]  啧，好吧，总之，博士你运气不太好，我们被攻击的时候爆炸正好发生在你座位附近，你直接被炸飞撞到墙上就晕倒了。\n[name=\"嘉维尔\"]  放心，你的伤口我已经包扎过了，问题不大，而且和你刚到罗德岛的时候比，你的体质可好了不少。不错啊，博士。\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",focus=2)]\n[name=\"刻俄柏\"]  呜呜，博士，对不起，我应该接住你的，但是我被爆炸声吓到了......\n[Character(name=\"char_187_ccheal_1\", name2=\"char_2013_cerber_1\",focus=1)]\n[name=\"嘉维尔\"]  这也不能怪你，老实说，就算是我也想不到这帮崽子居然还有能对空的武器了。\n[Decision(options=\"也就是说你早就料到会被攻击了？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_187_ccheal_1\")]\n[name=\"嘉维尔\"]  是啊，我没说过吗，我老家这里的人很好斗的，虽然他们都打不过我。\n[Decision(options=\"其他人呢？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_187_ccheal_1\")]\n[name=\"嘉维尔\"]  在下坠的时候，为了控制高度，其他人中途就先跳下去了。\n[name=\"嘉维尔\"]  为了保护你，我和刻俄柏是最后才跳下来的。\n[name=\"嘉维尔\"]  哦对，Lancet-2应该还留在飞行器上。\n[Decision(options=\"飞行器呢？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_187_ccheal_1\")]\n[name=\"嘉维尔\"]  我没记错的话，在那个方向吧，喏，那边那个山坡过去应该就是了。\n[Decision(options=\"先过去看看吧。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_187_ccheal_1\")]\n[name=\"嘉维尔\"]  行。\n[Dialog]\n[character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_desert_2\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[name=\"嘉维尔\"]  你看，那就是我们的飞行器。\n[name=\"嘉维尔\"]  唔哦，在冒烟呢，感觉不能用了。\n[name=\"嘉维尔\"]  不过看起来还能修的样子。\n[name=\"刻俄柏\"]  博士，嘉维尔，飞行器那边有人！\n[name=\"嘉维尔\"]  嗯？那是......\n[Dialog]\n[character]\n[stopmusic(fadetime=3)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_desert_2\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[CameraShake(duration=0.5, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Character(name=\"char_285_medic2_1\")]\n[name=\"Lancet-2\"]  请不要靠近我，虽然我有保护罗德岛财产的义务，但我只是一台医疗器械，呜呜......\n[PlayMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.8, crossfade=0.5)]\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=1)]\n[name=\"阿达克利斯人A\"]  喂，这台机器好像会说话啊。\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=2)]\n[name=\"阿达克利斯人B\"]  是啊，没想到天上掉下来这么个厉害的机器不说，里面还有会说话的机器！\n[Character(name=\"avg_npc_070\")]\n[name=\"阿达克利斯人C\"]  喂，你们说，该不会它里面其实装着个人吧？\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=1)]\n[name=\"阿达克利斯人A\"]  不知道，要不然我们把它也抢回去吧，酋长肯定会喜欢的。\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=2)]\n[name=\"阿达克利斯人B\"]  好啊，弟兄们，我们把它也扛回去！\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Character(name=\"char_285_medic2_1\")]\n[name=\"Lancet-2\"]  救命啊——\n[character]\n[Dialog]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[Character(name=\"char_187_ccheal_1#4\",fadetime=1,block=true)]\n[delay(time=0.6)]\n[name=\"嘉维尔\"]  给我住手！\n[Character(name=\"avg_npc_071\")]\n[name=\"阿达克利斯人A\"]  ......&%（什么人？！）\n[Character(name=\"char_187_ccheal_1#4\")]\n[name=\"嘉维尔\"]  敢抢我们的东西，你们活得不耐烦了！\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=1)]\n[name=\"阿达克利斯人A\"]  ......￥%%#（谁能证明这就是你的东西，它是从天上掉下来的！）\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=2)]\n[name=\"阿达克利斯人B\"]  ！@#%......&（没错，是我们先到的，所以就是我们的！）\n[Character(name=\"char_187_ccheal_1#2\")]\n[name=\"嘉维尔\"]  啧，还挺有道理。\n[Decision(options=\"嘉维尔，他们在说什么？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_187_ccheal_1\")]\n[name=\"嘉维尔\"]  嗯？哦对，忘了博士你们听不懂我们这里的语言了。\n[name=\"嘉维尔\"]  虽然这里也是萨尔贡，但是这里的人没有会用普通的萨尔贡语的。\n[name=\"嘉维尔\"]  这样吧，要是有要传达给你的话我给你翻译一下好了。\n[name=\"嘉维尔\"]  其他时候就意会一下吧！\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=1)]\n[name=\"阿达克利斯人A\"]  ......&*#（在那边嘀嘀咕咕说什么呢混账！）\n[Character(name=\"char_187_ccheal_1#3\")]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"嘉维尔\"]  我在说，既然这是你们的东西，那只要把你们全都放倒，它就是我的了！\n[Character(name=\"avg_npc_071\", name2=\"avg_npc_070\", focus=2)]\n[name=\"阿达克利斯人B\"]  &&......！@（什么？这个女人太嚣张了，弟兄们，上！）\n[Dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[Dialog]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}