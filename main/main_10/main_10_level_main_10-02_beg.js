var items = {"brief": "阿米娅小队抵达出入口岸，却遭遇萨卡兹巡逻队大肆搜查出城人员。引路人惊惶逃走，再次撞上蔓德拉带领的深池士兵。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[stopmusic]\n[Dialog]\n[Background(image=\"27_g2_inexport\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n9:09 A.M. 天气/阴\n伦蒂尼姆，萨迪恩区，三零九号出入口 \n[dialog]\n[delay(time=1)]\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] 前面......就是入口了。\n[dialog]\n[Character(name=\"avg_npc_394_1#7$1\",focus=-1)]\n[Decision(options=\"你在担心什么？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"avg_npc_394_1#3$1\")]\n[name=\"阿米娅\"] 嗯......其实到目前为止都很顺利......\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] ——除了一件事。\n[Character(name=\"avg_npc_394_1#20$1\")]\n[name=\"阿米娅\"] 博士，一直以来与您和凯尔希医生联络的那位信使，她本来会在我们抵达附属地块之后，就立刻与我们联系。\n[dialog]\n[Character(name=\"avg_npc_394_1#20$1\",focus=-1)]\n[Decision(options=\"我记得这项约定。;......;她会不会出事？\", values=\"1;2;3\")]\n[Predicate(references=\"1\")]\n[Character(name=\"avg_npc_394_1#3$1\")]\n[name=\"阿米娅\"] 我们都在等......但也只能被动等待。\n[Character(name=\"avg_npc_394_1#1$1\")]\n[name=\"阿米娅\"] 我本以为会亲眼见到她，或者至少收到某种形式的讯息。\n[Predicate(references=\"2\")]\n[Character(name=\"avg_npc_394_1#11$1\")]\n[name=\"阿米娅\"] 博士，眼下的情况，我也不能对其他干员多说什么。\n[Character(name=\"avg_npc_394_1#17$1\")]\n[name=\"阿米娅\"] 我们已经到了这里，就必须继续往前走。\n[Predicate(references=\"3\")]\n[Character(name=\"avg_npc_394_1#18$1\")]\n[name=\"阿米娅\"] 联络不上，就没有办法确认。\n[Character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"] 希望她没有遇上什么意外......\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"avg_npc_394_1#11$1\")]\n[name=\"阿米娅\"] 我们还是按原定计划进城。\n[Character(name=\"avg_npc_394_1#5$1\")]\n[name=\"阿米娅\"] 唔，前面好多人，都是从城内的方向涌过来的......\n[musicvolume(volume=0.2, fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character]\n[Delay(time=1)]\n[Background(image=\"27_g15_customs\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[musicvolume(volume=0.4, fadetime=1)]\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",fadetime=0.7)]\n[delay(time=0.7)]\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] ......我们真就这么逃出来了？\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]这条路是安全的，我邻居一家上周就是从这里走的。\n[name=\"伦蒂尼姆市民B\"]只要能申请到出城证，士兵们就不会为难我们。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 我......我其实不是这个意思。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]我知道。我脑子里的想法应该和你一样。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]四年前，我头一回见到萨卡兹的军队出现在新闻里。那时候我并没有多想。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 是啊，我也是。陛下离去之后，乱糟糟的事情总是不少，谁知道又有哪位大公爵心血来潮，将魔族也招揽进了军队里呢？\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]两年前，我看见萨卡兹的军队走在特伦菲尔德区的街道上。那件事成了我在下班路上，与同事的谈资。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 我也记得......仿佛一夜之间，有些事情就悄悄变了。我们这些住在卡登区公爵办事处附近的，看见这些变化，要更晚一些。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]大半年前，萨卡兹的军队站在了我们银行门口。他们带走了我们行长，因为她的丈夫在城防军中担任要职。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 唉，在那之后，你是不是再也没见过他们？在我们住的街区，警员们也都换了面孔，他们之中的好些个都长着那可怕的角。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]再然后......昨天。我看到有萨卡兹来到我家对面的街角，他们在......挨家挨户地敲门。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 所以你逃出来了？\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]其实我的父母早就走了。我只是......我放不下这份银行柜员的收入。\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 谁又不是呢。伦蒂尼姆......真离开了这座城市，我们就都回不去以前那种生活了吧？\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民B\"]还是别说了。走吧，都走吧。比起挣钱，我更想活命。\n[dialog]\n[playsound(key=\"$d_gen_walk_n\")]\n[character(fadetime=1.5)]\n[delay(time=2)]\n[musicvolume(volume=0.2, fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character]\n[Delay(time=1)]\n[Background(image=\"27_g2_inexport\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[musicvolume(volume=0.4, fadetime=1)]\n[Character(name=\"avg_npc_394_1#11$1\")]\n[name=\"阿米娅\"] ......\n[Character(name=\"avg_npc_394_1#11$1\")]\n[name=\"阿米娅\"] 这里每天都是这副样子吗？\n[Character(name=\"avg_npc_407_1#1$1\")]\n[name=\"推进之王\"]......从某一天开始，大概就是如此。\n[Character(name=\"avg_npc_394_1#5$1\")]\n[name=\"阿米娅\"] 特雷西斯的军队......他们并不阻挠平民出城？\n[Character(name=\"avg_npc_407_1#10$1\")]\n[name=\"推进之王\"]看起来，他并不在意让伦蒂尼姆之外的人知晓现在伦蒂尼姆真正的掌权人是谁。\n[dialog]\n[Character(name=\"avg_npc_407_1#10$1\",focus=-1)]\n[Decision(options=\"外面那些大贵族不介意？;维多利亚议会的情况如何？\", values=\"1;2\")]\n[Predicate(references=\"1\")]\n[Character(name=\"avg_npc_407_1#2$1\")]\n[name=\"推进之王\"]我想，他们无疑时时刻刻都在关注伦蒂尼姆的动向。这正是他们在城外屯兵的原因。\n[Character(name=\"avg_npc_407_1#2$1\")]\n[name=\"推进之王\"]但他们更在意彼此的动作。\n[Character(name=\"avg_npc_407_1#1$1\")]\n[name=\"推进之王\"]对有意入主伦蒂尼姆的各大公爵来说，无论谁率先对城内的萨卡兹发起进攻，都可能在这场持续了二十多年的竞赛中占得先机。\n[Character(name=\"avg_npc_407_1#6$1\")]\n[name=\"推进之王\"]他们之中，有谁乐意看到本可能属于自己的王座被别人捷足先登？\n[Character(name=\"avg_npc_407_1#1$1\")]\n[name=\"推进之王\"]在这种情况下，任意一位公爵表露出进攻的意向，都可能会被几则通讯、一场聚会邀请和一系列的来自自己领地的不利消息打断。\n[Character(name=\"avg_npc_407_1#1$1\")]\n[name=\"推进之王\"]而若是他执意进军，等待着他的一定是一场失利，这场失利甚至不需要耗费城内的萨卡兹摄政王一兵一卒。\n[Predicate(references=\"2\")]\n[Character(name=\"avg_npc_407_1#2$1\")]\n[name=\"推进之王\"]......我不知道。\n[Character(name=\"avg_npc_407_1#2$1\")]\n[name=\"推进之王\"]我们离开伦蒂尼姆的时候，那一天的伦蒂尼姆，与之前的任何一天都没有太大不同。\n[Character(name=\"avg_npc_407_1#5$1\")]\n[name=\"推进之王\"]而且，我曾经以为，只要议会仍在运作一天，伦蒂尼姆就并不会陷入真正的混乱。\n[Predicate(references=\"1;2\")]\n[Character(name=\"avg_npc_407_1#1$1\")]\n[name=\"推进之王\"]至于城内的具体情况，我们只有在进去之后才能看清楚了。\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]各位，我已经把你们带到这里......剩下的路，你们就自己走了吧？\n[Character(name=\"avg_npc_394_1#8$1\")]\n[name=\"阿米娅\"] 没问题。谢谢您，托马斯先生，您帮了我们一个大忙。\n[Character(name=\"avg_npc_394_1#13$1\")]\n[name=\"阿米娅\"] 各小组注意，我们按之前的安排，分批混入面前的人流里——\n[name=\"阿米娅\"] 可露希尔小组先走，确定前路通畅之后，推进之王小组跟上。我与博士会殿后。\n[name=\"阿米娅\"] 侦察小组请持续留意周围情况，如有异常，立刻通报。\n[name=\"阿米娅\"] 白轮，还是由你带托马斯先生从原路返......\n[Character(name=\"avg_npc_012\")]\n[name=\"罗德岛干员\"] 阿米娅！\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] 请说。\n[Character(name=\"avg_npc_012\")]\n[name=\"罗德岛干员\"] 前方突发骚乱，看起来像是有萨卡兹士兵过来了！\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] ......！\n[Character(name=\"avg_npc_394_1#20$1\")]\n[name=\"阿米娅\"] 全体注意，潜入行动中止，我们先就近隐蔽！\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"27_g15_customs\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[PlayMusic(intro=\"$warchaos_intro\", key=\"$warchaos_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\n[PlaySound(key=\"$d_avg_crwddiscuss_outside\", volume=0.8, loop=true, channel=\"bse\")]\n[PlaySound(key=\"$d_gen_soldiersrun\",volume=1)]\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"char_empty\",fadetime=0.5)]\n[delay(time=0.51)]\n[Character(name=\"char_empty\",name2=\"avg_npc_419_1#1$1\",fadetime=0.5)]\n[delay(time=0.51)]\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"char_empty\",fadetime=0.5)]\n[delay(time=0.51)]\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\")]\n[name=\"萨卡兹战士\"]——\n[dialog]\n[SoundVolume(channel=\"bse\", volume=0.3, fadetime=1)]\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]抓住前面那个人！\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 怎么......怎么会这样？为什么会有萨卡兹士兵？\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 你不是说这条路是安全的吗？！\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]说的就是你，不许走！\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[name=\"伦蒂尼姆市民A\"] 快点......再走快一点，我们马上就能出......出城......\n[Character(name=\"avg_npc_416_1#1$1\",name2=\"avg_npc_418_1#1$1\",focus=1)]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"伦蒂尼姆市民A\"] 啊——！\n[dialog]\n[Character(name=\"char_empty\",name2=\"avg_npc_418_1#1$1\",focus=1,fadetime=1)]\n[PlaySound(key=\"$bodyfalldown2\", volume=1)]\n[delay(time=2)]\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]......\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]不是这个人。\n[Character(name=\"avg_npc_418_1#1$1\")]\n[name=\"伦蒂尼姆市民B\"]先、先生，您......您别打我，我愿意跟您回去......我们是犯了什么错吗？\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]爱滚哪去滚哪去，别站在这里碍事。\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]听好了，谁都不许动！\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]都给我原地待着。你，你，还有你，把脸转过来！\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]你包里装什么了？是不是武器？全倒出来看看！\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]你脸上为什么有灼伤？还挺新的......就是你，给我滚出队列！\n[dialog]\n[delay(time=1)]\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]......你说做面包的时候被烫伤了？你当我们是傻子吗！\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]嘁......看样子真不是被我们的武器弄的。我说，你不是反抗军吧？\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]吓晕过去了。算了，这个先带走。\n[dialog]\n[character(fadetime=0.7)]\n[SoundVolume(channel=\"bse\", volume=0.3, fadetime=1)]\n[delay(time=1.5)]\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",fadetime=0.7)]\n[delay(time=0.7)]\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]......\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 中尉，我们走不了了。\n[Character(name=\"avg_4039_horn_1#5$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]......是我的责任。送你们来这里之前，我应该先注意下有没有追兵。\n[Character(name=\"avg_4039_horn_1#5$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 您千万别这么说。\n[Character(name=\"avg_4039_horn_1#5$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 不管是我们这几个被深池抓住的兄弟，还是老汤姆他们那几个被萨卡兹折磨更久的，我们在被你救出来之前，都已经与死人无异了。\n[Character(name=\"avg_4039_horn_1#5$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 那滋味真的太绝望了......我宁可战死沙场，而不是这么窝囊又稀里糊涂地就被敌人关了起来。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]伦蒂尼姆的沦陷绝不是你们的错。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 那更不可能是您的错。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 是您把我们从绝望的境地里拉了出来。至少，我能靠自己的双腿走到这里，我已经多活了一个小时。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 我说我没法再战斗下去了，您也没有怪我，而是冒险把我们送到这里。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 中尉，您走吧。只有您一个人的话，还来得及躲起来，躲开这些萨卡兹的视线，找个安全的地方藏好。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 我们伤的伤病的病，只会连累您。\n[Character(name=\"avg_4039_horn_1#7$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]我绝不会抛下你们任何一个人。\n[Character(name=\"avg_4039_horn_1#7$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 哈......要是当时我的长官也能像您一样，我们是不是......也不至于输得这么快这么惨？\n[Character(name=\"avg_4039_horn_1#7$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 见到您以后，我其实就意识到了，我也想像您一样再做些什么......\n[Character(name=\"avg_4039_horn_1#4$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]你是想......不，不可以！\n[Character(name=\"avg_4039_horn_1#4$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 您说，我们几个老兄弟一块冲过去，能带走几个萨卡兹？\n[Character(name=\"avg_4039_horn_1#7$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]......都给我听好了。\n[Character(name=\"avg_4039_horn_1#7$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]谁都不许行动。这是命令。\n[Character(name=\"avg_4039_horn_1#7$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 命令......\n[Character(name=\"avg_4039_horn_1#7$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 好。您现在是我的长官了，我愿意服从您的命令。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]从这里走到萨卡兹士兵所在的位置，还有几分钟。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]全部低下头。记住我教你们的，你们都是来自附近街区的无业者，受的伤是为了抢一块面包而互殴留下的。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 萨卡兹......会信？\n[Character(name=\"avg_4039_horn_1#2$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]如今的萨迪恩区一片乱象，他们自然也都见识过。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]不管他们信不信，就算逼问起来，你们也......暂时忍一忍。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]万一有谁忍不住......\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 我们明白。被萨卡兹发现的话，我们绝不牵连其他人。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]万一谁忍不住，我会动手。\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=2)]\n[name=\"伦蒂尼姆市民？\"] 中尉......？！\n[Character(name=\"avg_4039_horn_1#1$1\",name2=\"avg_npc_413_1#1$1\",focus=1)]\n[name=\"号角\"]先静观其变。\n[SoundVolume(channel=\"bse\", volume=0, fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"27_g2_inexport\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[SoundVolume(channel=\"bse\", volume=0.3, fadetime=1)]\n[Delay(time=2)]\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]这边没有。\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]那边呢？那边还有几个，还有升降梯后面，那块结构特别容易藏人！\n[Character(name=\"avg_npc_419_1#1$1\",name2=\"avg_npc_419_1#1$1\",focus=1)]\n[name=\"萨卡兹战士\"]你们几个，过去仔细看看！\n[dialog]\n[PlaySound(key=\"$rungeneral\", volume=0.9)]\n[character(fadetime=1)]\n[delay(time=1.5)]\n[Character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"] 那些士兵看起来是在找人。\n[Character(name=\"avg_npc_394_1#15$1\")]\n[name=\"阿米娅\"] 各小组，汇报方位。\n[dialog]\n[PlaySound(key=\"$transmission\",volume=0.6)]\n[delay(time=1)]\n[Character(name=\"avg_npc_394_1#1$1\")]\n[Delay(time=0.51)]\n[playsound(key=\"$d_gen_transmissionget\", volume=0.6)]\n[name=\"阿米娅\"] ......位置确认完毕。\n[dialog]\n[delay(time=1)]\n[Character(name=\"avg_npc_394_1#1$1\",focus=-1)]\n[Decision(options=\"他们不像在找我们。;我们应该还没暴露。\", values=\"1;2\")]\n[Predicate(references=\"1;2\")]\n[Character(name=\"avg_npc_394_1#3$1\")]\n[name=\"阿米娅\"] 我同意。\n[Character(name=\"avg_npc_394_1#8$1\")]\n[name=\"阿米娅\"] 博士，还记得我们出发前与凯尔希医生一起做的情况推演吧？\n[Character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"] 有一种可能性，我们在伦蒂尼姆与维多利亚各处活跃的秘密信使确实失败了。\n[Character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"] 他们没有来得及传来正确的情报，罗德岛的全部动向都被特雷西斯掌握。\n[Character(name=\"avg_npc_394_1#18$1\")]\n[name=\"阿米娅\"] 那么，只要我们一进入伦蒂尼姆，特雷西斯的亲兵很可能就会站在我们面前。\n[Character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"] 可是眼前的情况似乎不太一样......\n[dialog]\n[Character(name=\"avg_npc_394_1#2$1\",focus=-1)]\n[Decision(options=\"我以为等着我们的起码是赦罪师。;......;我们不至于这么没面子吧？\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"] 我和博士的判断应该是一致的。\n[Character(name=\"avg_npc_394_1#2$1\")]\n[name=\"阿米娅\"] 特雷西斯目前还不知道我们已经到了。否则的话，我们很难一路走到这里。\n[Character(name=\"avg_npc_394_1#11$1\")]\n[name=\"阿米娅\"] 那么，眼前这些萨卡兹士兵，在搜捕的应该是其他恰好出现在这里的人......\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]——！\n[Character(name=\"avg_npc_394_1#5$1\")]\n[name=\"阿米娅\"] 欸，托马斯先生......？\n[Character(name=\"avg_npc_012\")]\n[name=\"罗德岛干员\"] 阿米娅，他突然就想跑出去，我差点没拦住！\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]不，不要拦着我，我不能在这里......\n[Character(name=\"avg_npc_394_1#14$1\")]\n[name=\"阿米娅\"] 托马斯先生，您最好不要擅自行动！这样会非常危险！\n[Character(name=\"avg_npc_394_1#15$1\")]\n[name=\"阿米娅\"] 我答应过您，会让干员护送您离开，但很抱歉，我们当前还不能......\n[Character(name=\"avg_npc_012\")]\n[CameraShake(duration=0.5, xstrength=15, ystrength=15, vibrato=20, randomness=70, fadeout=true, block=false)]\n[name=\"罗德岛干员\"] 哎呦！\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] 等、等等，您不能抢夺我们干员的武器——！\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]抱歉了，我、我还不想死！\n[dialog]\n[PlaySound(key=\"$rungeneral\", volume=0.9)]\n[character(fadetime=1.5)]\n[delay(time=2)]\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] 这到底是怎么回事......\n[dialog]\n[Character(name=\"avg_npc_394_1#7$1\",focus=-1)]\n[Decision(options=\"答案很明显了。;他觉得士兵们在找他。\", values=\"1;2\")]\n[Predicate(references=\"1;2\")]\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] ......\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]我也不想这样......我只是给萨卡兹开了半年车而已！\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]他们占了我的炼糖厂，又逼我给他们运东西，我在城外的一家老小都还要活下去......我能怎么办？！\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]那天我就看了一眼，一小眼，我哪能猜到他们在用我的厂房做什么......\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]他们一直追我，我知道一旦被追上，他们一定会杀了我！\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]你们为什么都要找我......我往哪里跑都要没命！\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]我......我不能坐以待毙......\n[Character(name=\"avg_npc_012\")]\n[name=\"罗德岛干员\"] 托马斯先生！\n[Character(name=\"avg_npc_394_1#7$1\")]\n[name=\"阿米娅\"] 白轮！别追了，不能暴露自己。\n[stopsound(channel=\"bse\", fadetime=1)]\n[Dialog]\n[delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[image]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"bg_desert_1\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$plot_intro\", key=\"$plot_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]哈......哈哈......\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]像这样......跑出伦蒂尼姆......我不管外面那群深池的人了......\n[dialog]\n[character]\n[playsound(key=\"$d_gen_walk_n\")]\n[character(name=\"avg_npc_233_1#1\",blackstart=0.2,blackend=0.7,fadetime=1.5)]\n[delay(time=2)]\n[name=\"？？？\"]哦？\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]呃——！\n[Character(name=\"avg_npc_406_1#1$1\",name2=\"avg_npc_406_1#1$1\")]\n[name=\"深池士兵\"]......\n[Character(name=\"avg_npc_416_1#1$1\")]\n[name=\"伦蒂尼姆市民\"]你......你怎么回事......你们是......\n[dialog]\n[character]\n[character(name=\"avg_npc_233_1#1\",fadetime=0.5)]\n[name=\"蔓德拉\"]深池的人，可不是你想不管就能不管的。\n[character(name=\"avg_npc_233_1#1\")]\n[name=\"蔓德拉\"]——抓住他。\n[Dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=2)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}