var items = {"brief": "离开龙门后的陈一直在考虑自己该如何行动，在哥伦比亚亲眼目睹了一名“罪犯”的经历后，陈更加明确了自己的决心。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] \n[stopmusic]\n[Dialog]\n[Delay(time=1)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_forest\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[playMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.4)]\n[PlaySound(key=\"$fightgeneral\")] \n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[PlaySound(key=\"$fightgeneral\")] \n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Blocker(a=1, r=1, g=1, b=1, afrom=0, rfrom=0, gfrom=0, bfrom=0, fadetime=0.1, block=true)]\n[PlaySound(key=\"$swordtsing2\", volume=0.9)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Blocker(a=1, r=1, g=1, b=1, afrom=0, rfrom=0, gfrom=0, bfrom=0, fadetime=0.1, block=true)]\n[PlaySound(key=\"$swordtsing3\", volume=0.9)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Blocker(a=1, r=1, g=1, b=1, afrom=0, rfrom=0, gfrom=0, bfrom=0, fadetime=0.1, block=true)]\n[PlaySound(key=\"$swordtsing6\", volume=0.9)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[CameraShake(duration=0.5, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[delay(time=1)]\n[Character(name=\"char_010_chen_1#2\")]\n[CameraShake(duration=0.2, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"陈\"]  ——停下！\n[Character(name=\"char_010_chen_1\")]\n[name=\"陈\"]  到此为止。别再逃了，警察很快就会追到这里，已经太迟了。\n[Dialog]\n[Character]\n[CameraShake(duration=0.5, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Character(name=\"avg_npc_094\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"感染者\"]  所以，你也是他们派来的追兵？说什么罗德岛的任务，什么有医生愿意治感染者也全是骗人的，是不是？\n[name=\"感染者\"]  老汤姆警告过我们，别相信那些外来的人。哈，我没听他的，我觉得你够义气，和那些有几个钱就斜眼看人的蠢货不一样......\n[name=\"感染者\"]  结果就是这样。我才是那个蠢货！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#5\", focus=2)]\n[name=\"陈\"]  ......随你怎么想。不管你相不相信，我都要说，我和外面的那些警察没关系。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#5\", focus=1)]\n[name=\"感染者\"]  那你就放我离开这里！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  抱歉，这我做不到。\n[name=\"陈\"]  你在去警局的路上突然发难，打伤了两名看守又连夜逃出城，这种情况下，我不能就这么放你走。\n[name=\"陈\"]  现在有三支小队在搜捕你，我只是恰好先他们一步。只要踏出这里，你就会被其他人发现。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#4\", focus=2)]\n[name=\"陈\"]  那么多人里，只有我知道你没做过他们控告里写的那些事。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#4\", focus=1)]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"感染者\"]  ——我当然没有！\n[name=\"感染者\"]  那帮混蛋要抓我，就因为我和那个死在街头的外国佬多说了一句话！就这一句话，他们就控告我杀了人，可不可笑啊？\n[name=\"感染者\"]  “现场残留有法术痕迹，经推断或为感染者作案”......我呸！我要真有那个本事，他们还有命在？我有什么本事啊？我连把火都放不出！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  我知道......\n[name=\"陈\"]  在光天化日下杀掉一个武装过的雇佣兵，你没这个能耐。这是我还站在这里和你说话的唯一理由。\n[name=\"陈\"]  我信你没杀人。但你袭警伤人，拒捕逃窜，这些罪名都是逃不掉的。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#2\", focus=2)]\n[name=\"陈\"]  别再抵抗了，这对你没有好处。哥伦比亚比我见过的很多地方都强许多，我看过法院的审判，你们有陪审团，还有民众可以旁听。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#5\", focus=2)]\n[name=\"陈\"]  你有可以为自己辩白的场所。你可以把一切告诉所有人。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#6\", focus=2)]\n[name=\"陈\"]  尽管有限，但这里的感染者至少有公正......\n[stopmusic(fadetime=1)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_black\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[playMusic(intro=\"$warm_intro\", key=\"$warm_loop\", volume=0.4)]\n[name=\"陈\"]  阿米娅，听说哥伦比亚是个法制十分健全的地方，那里有法官，有关押感染者的监狱，我想去亲眼看一看。\n[Dialog]\n[Character(name=\"char_002_amiya_1#2\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"阿米娅\"]  当然可以。陈长官想去哪里都可以，不如说，我也更希望陈长官能够多去各种地方看一看呢。\n[Character(name=\"char_002_amiya_1#6\")]\n[name=\"阿米娅\"]  啊......是不是不该叫长官了？\n[Character(name=\"char_002_amiya_1#5\")]\n[name=\"阿米娅\"]  陈小姐。哎？不需要这么尊敬？可是......好，好的，那，陈？\n[Character(name=\"char_002_amiya_1#5\")]\n[name=\"阿米娅\"]  不行，总觉得有点不好意思......\n[Character(name=\"char_002_amiya_1#7\")]\n[name=\"阿米娅\"]  咳咳，言归正传。我对哥伦比亚并没有太多了解，在法制和刑事这方面，陈小姐也一定比我要知道得多，所以对这些，我就不多说了。\n[Character(name=\"char_002_amiya_1\")]\n[name=\"阿米娅\"]  只是，我却很清楚一件事。\n[name=\"阿米娅\"]  人与人之间的相互轻贱与敌视，可以发生在任何地点，任何场合。\n[name=\"阿米娅\"]  它可以发生在健康的人和感染者之间，也可以发生在富有的人和贫穷的人之间，甚至是一些被人为划分出的界限......\n[name=\"阿米娅\"]  总有人会将同胞割裂，分出高低，分出贵贱。\n[name=\"阿米娅\"]  请不要急着否认，陈小姐。我听说过哥伦比亚有很多感染者，他们能去拓荒，能赚到钱，有一些甚至能得到公民身份......这生活听起来很有希望。\n[name=\"阿米娅\"]  但是，陈小姐，好不好是需要亲自去看，去判断的。乌萨斯的土地是直白的残酷，而许多地方，只是将这份残酷遮掩在了干净的餐布下。\n[Character(name=\"char_002_amiya_1#7\")]\n[name=\"阿米娅\"]  我从来没有忘记过，在指挥塔的那天，陈小姐说过的话。\n[name=\"阿米娅\"]  公平地对待所有人，公平地审判所有人......那很美好，也会很难。\n[name=\"阿米娅\"]  因为从来没人走过那条路，所以就连方向也没有，只能靠陈小姐，靠我们自己，一步一步去踏出一条路来。\n[Character(name=\"char_002_amiya_1#4\")]\n[name=\"阿米娅\"]  ......我有些担心陈小姐。\n[name=\"阿米娅\"]  我很怕你会失望。\n[stopmusic(fadetime=1)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_forest\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[playMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.4)]\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#6\", focus=1)]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"感染者\"]  什么狗屁公正？！你这是在做梦！\n[name=\"感染者\"]  谁会听我辩白？难道有哪一个被押上法庭的“罪犯”，没有为自己痛哭流涕，没有说自己是清白无辜的吗？！\n[name=\"感染者\"]  但他们把你捉到那一圈木头栏杆里，就像捉只羽兽关进笼子，然后掐着脖子把你的肚子剖开，给别人看里头是不是生着一副黑心肠！\n[name=\"感染者\"]  你知道那些陪审老爷里有多少人会花钱请人来演讲，就在街上说“染病的穷光蛋在占领城市，在掏空我们的钱袋”？！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#6\", focus=1)]\n[CameraShake(duration=0.5, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"感染者\"]  你知道什么，你才来多久，你什么都不知道！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#6\", focus=2)]\n[name=\"陈\"]  我......\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#5\", focus=2)]\n[name=\"陈\"]  不。不。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  或许我还没来得及更多地了解这里，但我了解一个国家的暴力机构。\n[name=\"陈\"]  我曾经对这些感到失望所以离开。我知道其中麻木甚至腐坏的部分。\n[name=\"陈\"]  但相比那些，我更清楚如果这股力量不再能稳定这个社会，如果人人都能挑战被暴力所保障的秩序，接下来会发生多可怕的事。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#4\", focus=2)]\n[name=\"陈\"]  所以......我不能放你就这么逃出去。\n[name=\"陈\"]  至少不是在这个满城人都知道有罪犯袭击警察，并且逃走的时候。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#4\", focus=1)]\n[name=\"感染者\"]  ......\n[name=\"感染者\"]  你不打算放我走。我打不过你，行，我认栽。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  我不会感到抱歉。\n[name=\"陈\"]  不论今天站在你这个位置的是其他任何什么人，我都会这么选。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"感染者\"]  呸。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  这不是玩笑。\n[name=\"陈\"]  ......但如果事实真是你说的那样，如果他们真的让你背上冤罪，我也会采取行动。\n[name=\"陈\"]  我希望事情不会真的走到那一步......\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"感染者\"]  我知道的就是这样。\n[name=\"感染者\"]  你是个感染者，你没有钱，就只配这样。\n[name=\"感染者\"]  来这的感染者要么在铁盒子里发烂发臭，要么去荒原上拿命去拼，还有力气的人都去了。\n[name=\"感染者\"]  小皮尔，汤姆，傻大个马尔斯，小子们一批一批地去，他们没一个再回来。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  ......\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"感染者\"]  你还记得老汤姆吗？总是说你坏话的那个。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  怎么不记得。我来你们那条街的第一天，他就想骗走我戴着的手链，反被我教训了一顿也不老实。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"感染者\"]  他记仇，我们当时都以为你招惹了这个老东西，肯定没法在这条街呆下去。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  显然我比你们想的要更不好惹。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"感染者\"]  是。早就没人敢惹你。\n[name=\"感染者\"]  你收拾老汤姆，也没下辣手，让他皮紧一阵子也是好事，所以没人管过。\n[name=\"感染者\"]  大家都知道他不是个好东西，偷摸抢骗，他都干过。为了给他那个孙女攒一条裙子，配一串首饰，他什么都做。\n[name=\"感染者\"]  图啥呢，他那个漂亮孙女收了他的钱和东西，转头在城里和有钱人好上，有了房子，再也不许老头的泥脚踩她家的地砖。哈，他图什么。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  ......我就该第一个把他送进警局。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"感染者\"]  得了，我问你，你有多久没见过他了？\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  两周。也有可能更长。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#3\", focus=2)]\n[name=\"陈\"]  等等，你为什么突然提起这个？\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#2\", focus=2)]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"陈\"]  ——他怎么了？！\n[stopmusic(fadetime=1)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_black\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[playMusic(intro=\"$drift_intro\", key=\"$drift_loop\", volume=0.4)]\n[name=\"陈\"]  阿米娅，如果我努力到生命终结，也始终看不到有那样一个地方，那样一个让所有人公正地接受审判的地方......\n[name=\"陈\"]  那么那些在不公的土壤上成长，又确实犯了错的人，我该怎么对待他们？\n[name=\"陈\"]  罗德岛可以一时地关押这样的人，可最终他们会走向什么方向？\n[name=\"陈\"]  我可以惩恶，我可以扬善，我可以阻止不公正的私刑，我拥有能做到这件事的能力。我可以为了我想要的正义放下许多别的东西，我愿意为之奔走。\n[name=\"陈\"]  但我会问自己，我到底有没有权利去做这样一件事？\n[name=\"陈\"]  谁有权力去定另一个人的罪？\n[Dialog]\n[Character(name=\"avg_npc_042\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"迷迭香\"]  阿米娅不在这里，我来替阿米娅回答。\n[name=\"迷迭香\"]  阿米娅一定会说，“没人能审判他人”。凯尔希医生老是这样说。\n[name=\"迷迭香\"]  她们都是好人，很好的人。她们不会骗我，我信她们。\n[name=\"迷迭香\"]  但我......我认识另一群很好的大个子，我们并肩战斗，我们一起打退了坏人，他们相信我，我也信他们。\n[name=\"迷迭香\"]  我觉得他们说的是对的。如果你面对的是坏人，他做了坏事，你能看出来，那你就说他有罪。有罪的人就应该被惩罚。\n[name=\"迷迭香\"]  陈在烦恼的是什么呢？没关系的，陈现在也变成我的家人了，家人是该互相帮助的。所以，如果陈下不了手，那就我来。\n[name=\"迷迭香\"]  我会阻止不公。我能阻止有人要别人失去家人。\n[name=\"迷迭香\"]  如果罪不该死，却有人要他死，我就阻止。我阻止要杀人的人，然后惩罚坏蛋。做了什么错事，就怎么惩罚。\n[name=\"迷迭香\"]  如果偷盗，就得挨揍。如果伤人，就切掉伤人的那只手。\n[name=\"迷迭香\"]  这样好吗？这样不就可以了吗？\n[name=\"迷迭香\"]  我会努力长大，我会努力拿到能裁量的那把尺子。我会看出人的好坏。我会审判。\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_forest\",screenadapt=\"coverall\")]\n[CameraShake(duration=2, xstrength=4, ystrength=4, vibrato=20, randomness=30, fadeout=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.25, block=true)]\n[CameraShake(duration=1, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.02, block=true)]\n[PlaySound(key=\"$d_sp_ballista\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.25, block=true)]\n[delay(time=1.5)]\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#4\", focus=2)]\n[CameraShake(duration=0.3, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"陈\"]  你说什么——？\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#2\", focus=2)]\n[name=\"陈\"]  你刚刚说什么，你再说一遍！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#2\", focus=1)]\n[name=\"感染者\"]  我说——人死啦！\n[name=\"感染者\"]  早死了！得罪了不该得罪的人，被拖在地上抓进去，又不肯交点钱，开口之前就能被捣好几拳头，那老东西一把年纪了，能活几天？\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#2\", focus=2)]\n[name=\"陈\"]  他们这样用私刑就没人管？！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#2\", focus=1)]\n[name=\"感染者\"]  谁管你？老汤姆那样的人，谁为他说话？\n[name=\"感染者\"]  老东西想看一眼孙女，临死也没看着。他孙女早就不和他联系了，他摸骗一点钱，全寄过去，半点回音也没有。\n[name=\"感染者\"]  我告诉你，他们不找你麻烦，只是因为你还有用，你能挣到钱，就还有点价值！但我们不能被抓到丁点错处，否则就得要被剥下一层皮。\n[name=\"感染者\"]  难道杀人不是大罪吗？但我告诉你，从来没人会因为死一个得病的穷光蛋而去为难另一个体面人！\n[name=\"感染者\"]  如果有人要你的命，那碾死一个人就和弹掉一粒灰尘一样简单。他们有的是理由。\n[name=\"感染者\"]  你听到外头的声音了没？他们追来了，我也没好下场，我也活不了了！\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#6\", focus=2)]\n[name=\"陈\"]  ——\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#5\", focus=2)]\n[name=\"陈\"]  不会的。我知道你没有杀人，如果你受到不公平的判罚，我不会坐视不理，我会帮你。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#5\", focus=1)]\n[name=\"感染者\"]  漂亮话！都这样了，你能怎么帮？\n[name=\"感染者\"]  现在堵着我活路的难道不是你？\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#5\", focus=2)]\n[name=\"陈\"]  我会找到办法。\n[name=\"陈\"]  相信我。一定不会送你去死。\n[Character(name=\"avg_npc_094\", name2=\"char_010_chen_1#4\", focus=2)]\n[name=\"陈\"]  没有任何人该被加上不符合重量的责罚。如果有人认为这理所当然，那他就错了。\n[name=\"陈\"]  就从我眼前开始，我会去纠正这种错误。\n[name=\"陈\"]  ......这是我现在唯一能做到的。\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_black\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Character(name=\"char_010_chen_1\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"陈\"]  我一直在想，该怎么去做这件事。\n[name=\"陈\"]  最开始，我总觉得罗德岛的理念天真又幼稚，不是不好，但要实现很难。\n[name=\"陈\"]  现在回头再看，就发现其实我和你们实在没什么分别。\n[Character(name=\"char_010_chen_1#5\")]\n[name=\"陈\"]  阿米娅，你说没人能给我指路。我想你是对的，我很早就看清这一点，我对此早有准备。\n[Character(name=\"char_010_chen_1#6\")]\n[name=\"陈\"]  可......如果到头来，我所能依仗的还是只有一身力气，一腔热情，一把剑，那我能改变的，是不是也只有剑锋能触及的这片范围？\n[Character(name=\"char_010_chen_1\")]\n[name=\"陈\"]  魏彦吾曾经教我，落子无悔。\n[name=\"陈\"]  不管是去核心城，还是离开龙门......\n[name=\"陈\"]  我都没有后悔过。\n[name=\"陈\"]  或许魏彦吾替我安排的，的确是所能设想的最好的那条路。但我不想那样去选，我没法坦然身处那个位置，那对我来说是种煎熬。\n[name=\"陈\"]  我心不安。\n[name=\"陈\"]  有人用行动告诉她，或许有些理想，就是穷尽一生也无法实现。可尽管明知无法实现，却依然还是要去做。\n[name=\"陈\"]  她是对的。她也这样做了。\n[Character(name=\"char_010_chen_1#4\")]\n[name=\"陈\"]  我也一样会去做我要做的事。我说过，这不是我的理想，而是我的工作。这是我有责任去做的事。\n[Character(name=\"char_010_chen_1\")]\n[name=\"陈\"]  自那件事后，我总在想该怎么做。我还没有答案，我只能做我能做的。但......\n[Character(name=\"char_010_chen_1#7\")]\n[name=\"陈\"]  我感到庆幸。在这条路上，还有罗德岛和我一起。\n[stopmusic(fadetime=1)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Background(image=\"bg_lmstreet_2\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[playMusic(intro=\"$darkness01_intro\", key=\"$darkness01_loop\", volume=0.4)]\n[Character(name=\"avg_npc_032\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"办事员\"]  好了，没问题。\n[name=\"办事员\"]  你们任务完成得真快......这还不到一周吧，就都解决了？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  合约上有时间限制，必须要速战速决。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"办事员\"]  真厉害！\n[name=\"办事员\"]  这是各位的任务表，每人一份，请小心收好。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  谢谢。\n[name=\"陈\"]  ......对了，我们小队临时来了一个新人，申请表在这，麻烦帮他也开一个证明吧。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"办事员\"]  咦？加人了？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  是临时决定的，还没来得及通知。抱歉，是我的失职。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"办事员\"]  没事没事，那稍等一下哦。我得回去再拿一份表格。\n[name=\"办事员\"]  对了，能帮我转告阿米娅一个好消息吗？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  什么？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"办事员\"]  上次推广的预防药反馈不错，如果能继续维持低价的话，应该就能把现在打开的这块市场给稳定下来。\n[name=\"办事员\"]  如果能成，下一步就可以扩大销售点了！\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  的确是好消息。阿米娅会高兴的。\n[name=\"陈\"]  目前的销售体量要再扩大的话，就需要罗德岛直接运输药品过来......唔，我会尽快通知到阿米娅。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"办事员\"]  哈哈，那太好了，我有好久没见过阿米娅了呢！\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#3\", focus=2)]\n[name=\"陈\"]  你和阿米娅......很熟？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#3\", focus=1)]\n[name=\"办事员\"]  还不错，我是学医的，之前都在船上实习，后来因为实在想家，和凯尔希医生谈过之后，就回来这里办事了。\n[name=\"办事员\"]  也挺好的。再攒点钱，我就能和朋友合伙开间诊所了。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=2)]\n[name=\"陈\"]  祝你顺利。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=1)]\n[name=\"办事员\"]  谢谢，各位干员如果在任务途中受伤，也可以找我帮忙！\n[name=\"办事员\"]  那没事我就先回去了？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=2)]\n[name=\"陈\"]  好。我送你。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=1)]\n[name=\"办事员\"]  哎不用，不用，我这没什么事。陈小姐才是，路上千万要小心些！\n[name=\"办事员\"]  最近刚发生杀人案呢，怪吓人的......不过陈小姐听说没，这个案子还有个挺有意思的后续。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#3\", focus=2)]\n[name=\"陈\"]  哦？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#3\", focus=1)]\n[name=\"办事员\"]  大家都在讨论这事，据说原本有个收治区的倒霉蛋被抓了，结果没两天凶手居然主动去警局自首，那人就又被放出来。\n[name=\"办事员\"]  不过，我可不信这套。事情根本就不是这么回事。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#3\", focus=2)]\n[name=\"陈\"]  ......怎么说？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#3\", focus=1)]\n[name=\"办事员\"]  哎，这事我偷偷告诉陈小姐，可千万不要说给别人听！\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=2)]\n[name=\"陈\"]  好，我一定保密。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=1)]\n[name=\"办事员\"]  我有个亲戚就在警局工作，所以我知道点内幕，听他说那杀人犯根本不是自首，而是被一个神秘人绑起来连同证据一起扔在警局门口的！\n[name=\"办事员\"]  这年头居然还有这种事，你说奇不奇？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=2)]\n[name=\"陈\"]  哈哈，确实离奇。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1#7\", focus=1)]\n[name=\"办事员\"]  对吧！那些小报还有说要给这个神秘人起个名字的呢！\n[name=\"办事员\"]  亦正亦邪的高手！游离在系统之外的制裁者！惩恶扬善主持公道的英雄！说什么的都有，听起来有够酷的。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  ......\n[name=\"陈\"]  酷吗？我不这么认为。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"办事员\"]  啊？\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]  如果本地的警察没有抓错人，本来也就不需要这样的人来出风头。\n[name=\"陈\"]  我倒希望，之后不要再给这个神秘人出现的机会了。\n[Character(name=\"avg_npc_032\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"办事员\"]  这么说那倒也是......\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.6)]\n[Character(name=\"avg_npc_012\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"蒙着脸的罗德岛干员\"]  东西都准备好了，该走了。\n[Character(name=\"char_010_chen_1#5\")]\n[name=\"陈\"]  知道了。\n[name=\"陈\"]  你的东西真的都不用取了？虽然未必能全都带上，但好歹能拿一些留个纪念。\n[Character(name=\"char_010_chen_1#5\",name2=\"avg_npc_012\",fadetime=2)]\n[name=\"蒙着脸的罗德岛干员\"]  不必了。\n[name=\"蒙着脸的罗德岛干员\"]  我在这里没有太多需要纪念的东西。\n[name=\"蒙着脸的罗德岛干员\"]  或许从头开始会更好......\n[Character(name=\"char_010_chen_1#5\")]\n[name=\"陈\"]  ......好。\n[name=\"陈\"]  那我们走。\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[name=\"陈\"]  阿米娅，我知道我一定会遭受种种挫折，我一定会对很多东西失望。\n[name=\"陈\"]  但我也知道，我不会停下，我绝不会放弃走下去。\n[Dialog]\n[Character]\n[delay(time=2)]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}