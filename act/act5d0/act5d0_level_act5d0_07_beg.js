var items = {"brief": "就在甘比诺决心要与叛徒卡彭做了断的同时，全面铺开情报网络的企鹅物流也找到了卡彭的据点，战斗一触即发。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] 第二关（前）\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Background(image=\"bg_motorway\",screenadapt=\"coverall\")]\n[Delay(time=0.4)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮\"]   首领，企鹅物流有动作了。\n[Character(name=\"avg_npc_028#2\",name2=\"avg_npc_031\",focus=1)]\n[name=\"甘比诺\"]   ......意料之内，只是给她留下了点皮肉伤......\n[name=\"甘比诺\"]   但我更在意的是，卡彭呢？\n[Character(name=\"avg_npc_028#2\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮\"]   其、其实在一个小时前就彻底联系不上了。\n[Character(name=\"avg_npc_028#3\",name2=\"avg_npc_031\",focus=1)]\n[name=\"甘比诺\"]   ......最后一次例行联络是在哪里？贫民窟吗？\n[Character(name=\"avg_npc_028#3\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮\"]   啊，是的。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_031\",focus=1)]\n[name=\"甘比诺\"]   那还真是可惜。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮\"]   您的意思是？\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_031\",focus=1)]\n[name=\"甘比诺\"]   先通知所有小队，按原计划拦截企鹅物流——\n[name=\"甘比诺\"]   但我猜，不出意外的话，大概会有那么两三个小队挂断联络吧。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮\"]   您这是什么意思......啊。\n[name=\"黑帮\"]   难道——卡彭先生背叛了家族？\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_031\",focus=1)]\n[name=\"甘比诺\"]   我理解他，太理解他了。\n[name=\"甘比诺\"]   我们从小一起长大，亲手为父亲解决叛徒，那是我第一次杀人，是我们第一次杀人。\n[name=\"甘比诺\"]   叙拉古的惨败改变了我们。唯一的区别是，他变得更加懦弱，而我选择了更明确的道路。\n[name=\"甘比诺\"]   他打算出卖家族，或者说，给家族换个姓氏。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮\"]   那我们应该如何是好？\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_031\",focus=1)]\n[name=\"甘比诺\"]   ......企鹅物流比想象中棘手，我们也不能同时树敌太多。\n[name=\"甘比诺\"]   也许，我们应该先解决叛徒的问题。\n[stopmusic(fadetime=3)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_lmstreet_1\",screenadapt=\"coverall\")]\n[Blocker(a=0, fadetime=1, block=true)]\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮A\"]   这里是三道口，没有异常。\n[Character]\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[name=\"黑帮B\"]   明白了，那么一切照常行动。\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮A\"]   ——等、等等！我们的计划是什么来着？\n[Character]\n[name=\"黑帮B\"]   啊？你小子没搞错吧？\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮A\"]   呃，我只是确认一下，对龙门不太熟悉。\n[Character]\n[name=\"黑帮B\"]   安魂节的午夜过后，龙门会按例举办狂欢活动，我们的任务就是乘着万人空巷时候解决企鹅物流，就这么简单！\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮A\"]   那关于首领的——\n[Character]\n[name=\"黑帮B\"]   别问那么多，这是要求，照做就是了！快！\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮\"]   ......就是这样了。\n[name=\"黑帮\"]    不会杀我的，对吧？\n[Character(name=\"char_103_angel_1#8\")]\n[name=\"能天使\"]   当然，多谢小哥啦，小睡一会吧~\n[Character(name=\"avg_npc_031\")]\n[PlaySound(key=\"$fightgeneral\")]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true,block=true)]\n[Delay(time=1)]\n[Character(name=\"char_103_angel_1#3\")]\n[name=\"能天使\"]   德克萨斯，听得见吗~？\n[Dialog]\n[Character]\n[PlayMusic(intro=\"$penguinlogistics_intro\", key=\"$penguinlogistics_loop\", volume=0.8, crossfade=1.5)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Background(image=\"bg_lmstreet_2\",screenadapt=\"coverall\")]\n[Delay(time=0.4)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   和这里的情况一样。他们打散了小队。\n[name=\"德克萨斯\"]   但既然首领亲自参与了战斗，他们一定有另一个指挥塔负责调度。\n[name=\"德克萨斯\"]   找到那里，一了百了。\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[Character]\n[name=\"空\"]   喂~？德克萨斯？\n[name=\"空\"]   我们已经到市中心啦，但是人真的很多。\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   注意敌方小队的动向。\n[Character]\n[name=\"空\"]   知道啦~会拜托街上的熟人们留意的......等等，老板？你要到花车上面去看看？欸，等等我——\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   ......可颂，拜松，听得见吗？\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_lmstreet_1\",screenadapt=\"coverall\")]\n[Delay(time=0.4)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[Character(name=\"char_325_bison_1#4\")]\n[name=\"拜松\"]   你说的那个指挥塔，我们稍微有点意外发现。\n[Character(name=\"char_325_bison_1#4\",name2=\"char_201_moeshd#3\",focus=2)]\n[name=\"可颂\"]   ......拜松，压低身子，躲到那边的箱子后面，不要被发现。\n[Character(name=\"char_325_bison_1#4\",name2=\"char_201_moeshd#3\",focus=1)]\n[name=\"拜松\"]   好，德克萨斯，一会联系。\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0.5, block=true)]\n[Delay(time=0.4)]\n[Blocker(a=0, fadetime=0.5, block=true)]\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮A\"]   我们，以后会怎么样？\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮B\"]   不知道，从我们挂断首领......挂断甘比诺·里奇的通讯开始，我们就没得选了。\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_031\",focus=1)]\n[name=\"黑帮A\"]   唉。\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮B\"]   叹什么气，卡彭先生在龙门为我们准备了这么多，结果呢？\n[name=\"黑帮B\"]   甘比诺从叙拉古转移过来就开始胡搅蛮缠，没一件好事！\n[name=\"黑帮B\"]   本来按照卡彭先生的计划，根本不需要这么大费周章。\n[name=\"黑帮B\"]   都和鼠王聊好了，为什么非要大开杀戒？这里可不是叙拉古！\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_031\",focus=1)]\n[name=\"黑帮A\"]   唉，首领，我是说前首领，可能只是在泄愤吧。\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_031\",focus=2)]\n[name=\"黑帮B\"]   呸，幼稚。\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=0.4)]\n[stopmusic(time=2)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Character(name=\"char_325_bison_1\",name2=\"char_201_moeshd#3\",focus=2)]\n[name=\"可颂\"]   （他们好像起了点内讧？）\n[Character(name=\"char_325_bison_1\",name2=\"char_201_moeshd#3\",focus=1)]\n[name=\"拜松\"]   （似乎是，这是大好的机会，我们——）\n[Character]\n[Dialog]\n[CameraShake(duration=1, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=0.7, r=0.95, g=0.95, b=0.95, fadetime=0.02, block=true)]\n[PlaySound(key=\"$pistol\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Delay(time=1)]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=0.4)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮A\"]   ——！谁在那里！\n[PlayMusic(intro=\"$chasing_intro\", key=\"$chasing_loop\", volume=0.8, crossfade=1.5)]\n[Character(name=\"char_325_bison_1#4\",name2=\"char_201_moeshd#5\",focus=2)]\n[name=\"可颂\"]   欸？哪儿来的枪声？\n[Character(name=\"char_325_bison_1#4\",name2=\"char_201_moeshd#5\",focus=1)]\n[name=\"拜松\"]   又是那个狙击手——！他暴露了我们的位置！\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮B\"]   是企鹅物流的人，别放走他们！\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_lungmen_n\",screenadapt=\"coverall\")]\n[Blocker(a=0, fadetime=1, block=true)]\n[Character(name=\"avg_npc_029#2\",fadetime=1,block=true)]\n[Delay(time=1)]\n[name=\"管家\"]   ......少爷，对不住。这是老爷交代的工作。\n[name=\"管家\"]  唉，但我竟然对少爷动了手，还让少爷陷入了危险......\n[name=\"管家\"]  等事情结束之后，不如告老还乡吧。\n[name=\"管家\"]  唉，唉！\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Background(image=\"bg_lmstreet_2\",screenadapt=\"coverall\")]\n[Delay(time=0.4)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[Character(name=\"char_102_texas_1#4\")]\n[name=\"德克萨斯\"]   ......他们好像遇到麻烦了。\n[name=\"德克萨斯\"]   能天使，确认完黑帮的路线之后去和可颂汇合。\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[Character]\n[name=\"能天使\"]   明白~\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   空。\n[playsound(key=\"$d_gen_transmissionget\", volume=0.4)]\n[Character]\n[name=\"空\"]   诶......今天可疑人物的动向非常复杂，不过他们好像分成两队行动了，可能是陷阱——\n[playsound(key=\"$transmission\", volume=0.4)]\n[name=\"伊斯\"]   没有那么复杂。敌人内部出现了问题。这是机会。\n[name=\"空\"]   哇！吓了我一跳！\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   ......你也回来了啊。\n[name=\"德克萨斯\"]   为什么要黑进自己人的频道，就不能正常通讯吗？\n[Character]\n[name=\"伊斯\"]   这样比较快。\n[name=\"空\"]   那你现在在哪儿？\n[name=\"伊斯\"]   伤心咖啡馆。我突然想起来今天应该放假，所以来凑个热闹。\n[name=\"伊斯\"]   可颂和那个新人的坐标已经发送给你们了，龙门城际网络的速度真是令人舒心。\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   ......既然如此，解决完各自的任务，就去支援他们吧。\n[name=\"德克萨斯\"]   这是反击的好机会。\n[stopmusic(fadetime=1)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_lmstreet_2\",screenadapt=\"coverall\")]\n[Delay(time=0.4)]\n[PlayMusic(intro=\"$darkalley_intro\", key=\"$darkalley_loop\", volume=0.8, crossfade=1.5)]\n[Blocker(a=0, fadetime=1, block=true)]\n[Character(name=\"avg_npc_031\")]\n[name=\"黑帮\"]   卡彭先生，首领突袭企鹅物流的计划似乎失败了。\n[PlayMusic(intro=\"$darkalley_intro\", key=\"$darkalley_loop\", volume=0.8, crossfade=1.5)]\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=2)]\n[name=\"卡彭\"]   废话，那个莽夫能成什么事，不用管他。\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=1)]\n[name=\"黑帮\"]   ......这样真的好吗。\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=2)]\n[name=\"卡彭\"]   家族需要的是一个立足之地，至于姓甚名谁，根本无关紧要。\n[name=\"卡彭\"]   还没找到鼠王吗？\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=1)]\n[name=\"黑帮\"]   没有，鼠王实在是太不留痕迹了......\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=2)]\n[name=\"卡彭\"]   有点耐心，他就像是这座城市的一部分，像是龙门的影子，虽然我们的时间已经不多了。\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=1)]\n[name=\"黑帮\"]   可要是不够谨慎而被鼠王察觉到的话，我们会同时面临三方的压力......\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=2)]\n[name=\"卡彭\"]   对谁来说都是如此，如果处于劣势，我宁可让场面变得更混乱些。\n[name=\"卡彭\"]   有甘比诺的消息吗？\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027\",focus=1)]\n[name=\"黑帮\"]   ......\n[Character(name=\"avg_npc_031\",name2=\"avg_npc_027#2\",focus=2)]\n[name=\"卡彭\"]   为什么不说话？\n[Dialog]\n[Character]\n[playsound(key=\"$d_gen_walk_n\")]\n[Character(name=\"avg_npc_028#4\",fadetime=1,block=true)]\n[Delay(time=2)]\n[name=\"甘比诺\"]   真是见外，有什么事情直接联络我不就好了吗？\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027#2\",focus=2)]\n[name=\"卡彭\"]   ......你是怎么进来的？\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027#2\",focus=1)]\n[name=\"甘比诺\"]   不是每个人都能像你一样，毫无愧疚地违背在父亲墓前立下的誓言。\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027\",focus=2)]\n[name=\"卡彭\"]   誓言？那仅仅是因为我们走在同一条道路上，但是今非昔比了，甘比诺。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_027\",focus=1)]\n[name=\"甘比诺\"]   现在是我说了算，你让我很失望，但我愿意给你一个机会解释，老兄弟。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_027#2\",focus=2)]\n[name=\"卡彭\"]   哼。七年前，前首领遇刺身亡，那时我就被你派到了龙门。\n[name=\"卡彭\"]   我千里迢迢赶来，为的是建立一条史无前例的商业桥梁，作为家族的后盾。\n[name=\"卡彭\"]   但结果，你在叙拉古还是失败了，而且逃了过来，转眼就接手了我辛苦运作的一切。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_027#2\",focus=1)]\n[name=\"甘比诺\"]   省省吧，你不是会为了这点蝇头小利就动怒的人，否则你早就死了。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_027#2\",focus=2)]\n[name=\"卡彭\"]   随你怎么说，我只是到了今天才发现，家族最勇猛的獠牙才是真正妨害家族的罪魁祸首。\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027#2\",focus=1)]\n[name=\"甘比诺\"]   所以你想掰断自己的爪牙，再给自己戴上项圈？哈！\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027#4\",focus=2)]\n[name=\"卡彭\"]   继续让你在龙门肆意妄为，我们迟早会被那些不可阻挡的大势泯灭。\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027#4\",focus=1)]\n[name=\"甘比诺\"]   原来如此，我都感动得要哭了。想不到你为了家族竟然如此深思熟虑。\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027#4\",focus=2)]\n[name=\"卡彭\"]   彼此彼此。\n[Dialog]\n[PlaySound(key=\"$e_skill_skulsrsword\", volume=0.9)]\n[Blocker(a=1, r=1, g=1, b=1, afrom=0, rfrom=0, gfrom=0, bfrom=0, fadetime=0.1, block=true)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[playsound(key=\"$p_imp_blunt_h\")]\n[Blocker(a=1, r=0.95, g=0.95, b=0.95, fadetime=0.2, block=true)]\n[Blocker(a=0, r=0.95, g=0.95, b=0.95, fadetime=0.25, block=true)]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Character(name=\"avg_npc_028#3\",name2=\"avg_npc_027#4\",focus=1)]\n[name=\"甘比诺\"]   你身手变得迟钝了，卡彭。\n[Character(name=\"avg_npc_028#3\",name2=\"avg_npc_027#2\",focus=2)]\n[name=\"卡彭\"]   你在叙拉古留下的伤也不好受，甘比诺。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_027\",focus=1)]\n[name=\"甘比诺\"]   放弃吧，我不想杀你。\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_027#3\",focus=2)]\n[name=\"卡彭\"]   不，你想得很。\n[Character(name=\"avg_npc_028#4\",name2=\"avg_npc_027#3\",focus=1)]\n[name=\"甘比诺\"]   呵！你可真了解我！\n[Dialog]\n[Character]\n[stopmusic(fadetime=2)]\n[Blocker(a=1, r=1, g=1, b=1, afrom=0, rfrom=0, gfrom=0, bfrom=0, fadetime=0.1, block=true)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[PlaySound(key=\"$char_emp\", volume=0.9)]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Character(name=\"avg_npc_028\",name2=\"avg_npc_027#2\",focus=2)]\n[name=\"卡彭\"]   什——\n[Character(name=\"char_201_moeshd#2\")]\n[name=\"可颂\"]   哎呀？本想着破墙离开的......似乎撞到了不得了的现场？\n[Character(name=\"char_201_moeshd\")]\n[name=\"可颂\"]   没关系喔，你们继续，我们换条路。\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_soldiersrun\",volume=0.5)]\n[name=\"黑帮\"]   快追！别让那两个人溜走了！！\n[Character(name=\"char_325_bison_1\")]\n[name=\"拜松\"]   ......好像不太有机会。\n[PlayMusic(intro=\"$chasing_intro\", key=\"$chasing_loop\", volume=0.8, crossfade=1.5)]\n[Character(name=\"avg_npc_028#4\")]\n[name=\"甘比诺\"]   正好，搅局者都到齐了，那就把你们——\n[Dialog]\n[Character]\n[Blocker(a=1, r=1, g=1, b=1, afrom=0, rfrom=0, gfrom=0, bfrom=0, fadetime=0.1, block=true)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[PlaySound(key=\"$char_emp\", volume=0.9)]\n[PlaySound(key=\"$char_emp\", volume=0.9)]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=true)]\n[Character(name=\"avg_npc_028#3\")]\n[name=\"甘比诺\"]   这次又怎么了！？\n[Character(name=\"char_103_angel_1#3\")]\n[name=\"能天使\"]   喂~我们来啦！\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   ......真巧，全都在这儿了。\n[Character(name=\"char_101_sora_1#2\")]\n[name=\"空\"]   唔，这架势是要最终决战了吗？是不是早了点？\n[Character(name=\"char_102_texas_1\")]\n[name=\"德克萨斯\"]   没关系，越早解决这出闹剧越好。\n[name=\"德克萨斯\"]   就按老板的意思，把他们扔进江里吧。\n[Character(name=\"avg_npc_027#2\")]\n[name=\"卡彭\"]   哼，越混乱，越合我意。\n[name=\"卡彭\"]   看来，谁能从这里站着出去，谁就会成为今晚的赢家。\n[Character(fadetiem=1)]\n[Dialog]\n[Delay(time=0.5)]\n[Dialog]\n[Blocker(fadetime=1,block=true)]"}// 定义数据出口
module.exports = {dataList_story: items}