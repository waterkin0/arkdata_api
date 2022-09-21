var items = {"brief": "云游僧嵯峨展现出了惊人的实力，甚至于能听懂墨魉在说什么。虽然感到困惑，但炎熔还是跟着嵯峨清扫战场，并来到了一家清冷的当铺。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")]\n[stopmusic]\n[Dialog]\n[Delay(time=1)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0, block=true)]\n[Background(image=\"bg_plankroad\",xscale=1,ysclae=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[PlayMusic(intro=\"$longmenbat_intro\", key=\"$longmenbat_loop\", volume=0.4)]\n[Delay(time=1)]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[Character(name=\"avg_npc_140#1\",fadetime=0.7)]\n[delay(time=1)]\n[name=\"村民\"]还有人没离开这儿吗！赶紧去先生那儿躲着！\n[name=\"村民\"]往东边走，快！\n[Dialog]\n[PlaySound(key=\"$rungeneral\", volume=1)] \n[character(fadetime=1)]\n[Delay(time=2)]\n[Character(name=\"char_1011_purgatory_1#4\")]\n[name=\"炎熔\"]......自从留意到天色之后就意识到，这里真的是越往西边走越靠近黑夜呢......\n[Character(name=\"char_455_nothing_1#6\")]\n[name=\"乌有\"]这么说的话，我们现在是“从正午走向黄昏”？还挺有诗意诶。\n[Character(name=\"char_1011_purgatory_1#4\")]\n[name=\"炎熔\"]......还是不对，这“白天到黑夜”的距离也太短了，我们才走了几步路？\n[Character(name=\"char_362_Saga#1\")]\n[name=\"嵯峨\"]画卷长短时有变化，各处景象光怪陆离，画中人为自己的天地寻了一份规矩，但说到底，也是假的。这也是在所难免的事情嘛。\n[Character(name=\"char_1011_purgatory_1#5\")]\n[name=\"炎熔\"]所以我说——等等，什么？\n[Character(name=\"char_362_Saga#2\")]\n[name=\"嵯峨\"]呃？\n[Character(name=\"char_1011_purgatory_1#5\")]\n[name=\"炎熔\"]你刚才说——\n[Dialog]\n[character]\n[delay(time=1)]\n[CameraShake(duration=0.5, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"？？？\"]唔啊啊啊——！\n[Character(name=\"char_1011_purgatory_1#5\",name2=\"char_362_Saga#2\",focus=1)]\n[name=\"炎熔\"]——！还有人没离开这儿吗！？\n[Character(name=\"char_1011_purgatory_1#5\",name2=\"char_362_Saga#6\",focus=2)]\n[name=\"嵯峨\"]在这里！\n[Dialog]\n[character(fadetime=0.5)]\n[Character(name=\"avg_npc_143#2\",name2=\"avg_npc_141#1\")]\n[delay(time=1)]\n[characteraction(name=\"left\", type=\"jump\",power=60, fadetime=0.7,times=3,block=true)]\n[Delay(time=1)]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"村民\"]救、救命！\n[Dialog]\n[characteraction(name=\"left\", type=\"move\", xpos=100,fadetime=0.5,block=true)]\n[Delay(time=1)]\n[character]\n[Character(name=\"char_362_Saga#6\")]\n[name=\"嵯峨\"]莫怕，小僧来也！\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[Dialog]\n[characteraction(name=\"middle\", type=\"move\",xpos=-200,fadetime=1,block=true)]\n[character]\n[delay(time=1)]\n[Character(name=\"avg_npc_143#2\",name2=\"avg_npc_141#1\")]\n[Delay(time=1)]\n[characteraction(name=\"right\", type=\"move\",xpos=800,block=true,fadetime=1.5)]\n[Character(name=\"avg_npc_143#2\",name2=\"char_empty\")]\n[delay(time=1.5)]\n[characteraction(name=\"right\", type=\"move\", xpos=-950, fadetime=0.2, block=false)]\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#6\",fadetime=0.2)]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[CameraShake(duration=0.7, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[delay(time=0.51)]\n[name=\"墨魉\"]嘎——\n[Dialog]\n[characteraction(name=\"right\", type=\"move\",xpos=150, fadetime=1, block=false)]\n[Character(name=\"avg_npc_143#2\",name2=\"char_362_Saga#5\")]\n[characteraction(name=\"left\", type=\"move\", xpos=-100,ypos=50, fadetime=1, block=true)]\n[Character(name=\"char_empty\", name2=\"char_362_Saga#5\",fadetime=0.5)]\n[delay(time=2)]\n[character]\n[Character(name=\"char_362_Saga#2\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"嵯峨\"]唔，果不其然，被斩之后便化作墨渍，怪哉怪哉。\n[Dialog]\n[character]\n[Character(name=\"char_362_Saga#2\", name2=\"char_455_nothing_1#6\",fadetime=1,block=true)]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[delay(time=1)]\n[Character(name=\"char_362_Saga#2\", name2=\"char_455_nothing_1#6\",focus=2)]\n[name=\"乌有\"]大师，好身手哇！\n[Dialog]\n[Character(name=\"avg_npc_141#1\", name2=\"char_362_Saga#5\",focus=2)]\n[name=\"嵯峨\"]莫要掉以轻心，姑娘，你赶紧往东边去！\n[Character(name=\"avg_npc_141#1\", name2=\"char_362_Saga#5\",focus=1)]\n[name=\"村民\"]好，好！你们也要小心啊！\n[Character(name=\"avg_npc_141#1\", name2=\"char_362_Saga#5\")]\n[Dialog]\n[characteraction(name=\"left\", type=\"exit\", direction=\"right\",block=true,fadetime=1.5)]\n[delay(time=1.51)]\n[character]\n[Character(name=\"char_362_Saga#5\", name2=\"char_1011_purgatory_1#4\",focus=2)]\n[name=\"炎熔\"]......似乎还有不少来不及逃走的村民。\n[Character(name=\"char_362_Saga#5\", name2=\"char_1011_purgatory_1#4\",focus=1)]\n[name=\"嵯峨\"]可能是太过突然，反应不及——\n[Dialog]\n[character]\n[delay(time=1)]\n[Character(name=\"avg_npc_143#2\",name2=\"avg_npc_142#1\")]\n[delay(time=1)]\n[characteraction(name=\"left\", type=\"jump\",power=60, fadetime=0.7,times=3,block=true)]\n[Delay(time=1)]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"小女孩\"]爸爸？妈妈？\n[Dialog]\n[delay(time=1)]\n[Character(name=\"char_362_Saga#5\", name2=\"char_455_nothing_1#3\",focus=2)]\n[name=\"乌有\"]那、那边有个孩子！\n[Character(name=\"char_362_Saga#6\", name2=\"char_455_nothing_1#3\",focus=1)]\n[characteraction(name=\"left\", type=\"move\",xpos=-200, fadetime=0.6,times=3,block=true)]\n[name=\"嵯峨\"]不好——快趴下！\n[delay(time=0.51)]\n[Character(name=\"char_362_Saga#6\", name2=\"char_455_nothing_1#3\",focus=2)]\n[name=\"乌有\"]来不及了！\n[Dialog]\n[character]\n[Character(name=\"avg_npc_143#2\",name2=\"avg_npc_142#1\")]\n[name=\"小女孩\"]呜呜......呜啊啊......\n[Dialog]\n[characteraction(name=\"left\", type=\"move\", xpos=100,fadetime=0.7,block=true)]\n[Delay(time=0.7)]\n[PlaySound(key=\"$p_imp_arrow_h\", volume=1)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.04, block=true)]\n[CameraShake(duration=0.5, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[delay(time=0.7)]\n[characteraction(name=\"left\", type=\"move\", xpos=-400,fadetime=1,block=true)]\n[Character(name=\"char_empty\",name2=\"avg_npc_142#1\",fadetime=0.5)]\n[delay(time=1)]\n[name=\"小女孩\"]啊！\n[Dialog]\n[character]\n[delay(time=1)]\n[Character(name=\"avg_npc_142#1\",name2=\"char_empty\")]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#3\",enter2=\"right\",fadetime=1)]\n[delay(time=1)]\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#3\",focus=2)]\n[name=\"乌有\"]唔哦，千钧一发！\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#4\",focus=2)]\n[name=\"乌有\"]没受伤吧？\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#4\",focus=1)]\n[name=\"小女孩\"]呜呜呜......没......呜呜呜......\n[Dialog]\n[character]\n[delay(time=0.6)]\n[Character(name=\"char_455_nothing_1#6\",name2=\"char_1011_purgatory_1#1\",focus=1)]\n[name=\"乌有\"]刚才......刚才是不是有什么东西刺穿了那玩意的喉咙......？\n[Character(name=\"char_455_nothing_1#6\",name2=\"char_1011_purgatory_1#3\",focus=2)]\n[name=\"炎熔\"]是克洛丝，真是刁钻的角度。\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#3\",focus=1)]\n[name=\"乌有\"]她，她在哪儿？\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#1\",focus=2)]\n[name=\"炎熔\"]别找了，找不到的，只要知道她在就足够了，得优先保证所有村民都离开这片黑夜。\n[character(name=\"char_362_Saga#3\")]\n[name=\"嵯峨\"]嚯，当真好默契，真让小僧大开眼界。\n[Dialog]\n[character]\n[delay(time=0.6)]\n[Character(name=\"avg_npc_142#1\")]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=true)]\n[name=\"小女孩\"]呜呜......呜呜呜......\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#1\",focus=1)]\n[name=\"乌有\"]但、但我们要带着这个小姑娘一起走？\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#4\",focus=2)]\n[name=\"炎熔\"]......你先带她离开这里，送去安全的地方，没问题吧？\n[Character(name=\"char_455_nothing_1#6\",name2=\"char_1011_purgatory_1#4\",focus=1)]\n[CameraShake(duration=0.5, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[characteraction(name=\"left\", type=\"jump\",power=40, fadetime=0.5,times=1,block=true)]\n[name=\"乌有\"]没问题！哪儿能呢！\n[Dialog]\n[delay(time=0.6)]\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#4\",focus=1)]\n[characteraction(name=\"left\", type=\"move\", xpos=100,fadetime=0.6,block=true)]\n[name=\"乌有\"]但是——我实在不忍抛下恩人，独自避难呀！不能陪着恩人抛头颅洒热血，多可惜——\n[delay(time=0.6)]\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#1\",focus=2)]\n[characteraction(name=\"left\",type=\"jump\",power=20,xpos=-100,fadetime=0.5,times=1,block=true)]\n[name=\"炎熔\"]你可以先把孩子送去煮伞先生那里，然后再回来找我们。\n[Character(name=\"char_455_nothing_1#6\",name2=\"char_1011_purgatory_1#1\",focus=1)]\n[name=\"乌有\"]啊哈哈......欸......好的，我会的，会的。\n[Dialog]\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#4\",focus=2)]\n[name=\"乌有\"]小妹妹，跟哥哥走好不好呀？\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#4\",focus=1)]\n[name=\"小女孩\"]呜......呜呜......叔叔，你看见我妈妈了吗......呜呜......\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#4\",focus=2)]\n[name=\"乌有\"]哥哥带你去找妈妈好不好？\n[Character(name=\"avg_npc_142#1\",name2=\"char_455_nothing_1#4\",focus=1)]\n[name=\"小女孩\"]呜......嗯......谢谢叔叔......\n[Dialog]\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#1\",focus=1)]\n[name=\"乌有\"]......咳。恩人呐，那我，先走一步？\n[Character(name=\"char_455_nothing_1#3\",name2=\"char_1011_purgatory_1#1\",focus=2)]\n[name=\"炎熔\"]嗯。\n[Dialog]\n[Character(name=\"char_455_nothing_1#6\",name2=\"char_1011_purgatory_1#1\")]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[musicvolume(volume=0,fadetime=1)]\n[Character]\n[Character(name=\"avg_npc_138#4\")]\n[Delay(time=2)]\n[Background(image=\"bg_landscape\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=1.5)]\n[name=\"说书人\"]......\n[Character(name=\"avg_npc_140#2\")]\n[name=\"村民\"]先生，只靠嵯峨和那三位英雄，打不打紧啊？\n[Character(name=\"avg_npc_138#4\")]\n[name=\"说书人\"]......\n[Character(name=\"avg_npc_140#2\")]\n[name=\"村民\"]先生？\n[Character(name=\"avg_npc_138#4\")]\n[name=\"说书人\"]......无妨。\n[Dialog]\n[PlaySound(key=\"$d_gen_walk_n\", volume=1)]\n[character(fadetime=1)]\n[delay(time=2)]\n[Character(name=\"avg_npc_140#2\",name2=\"avg_npc_141#2\",focus=1)]\n[name=\"村民甲\"]咋回事儿啊？先生今儿是不是心情不好？昨天忘了睡觉啦？\n[Character(name=\"avg_npc_140#2\",name2=\"avg_npc_141#2\",focus=2)]\n[name=\"村民乙\"]先生温文尔雅，不像是个喜怒无常的人呀。\n[Character(name=\"avg_npc_140#2\",name2=\"avg_npc_141#2\",focus=1)]\n[name=\"村民甲\"]一定是先生为我们劳神操心，累了吧，我们应当多为他着想点，让他睡着吧。\n[Dialog]\n[Character(name=\"avg_npc_140#2\",name2=\"avg_npc_141#2\")]\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character]\n[musicvolume(volume=0.4,fadetime=1)]\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#5\")]\n[Delay(time=2)]\n[Background(image=\"bg_plankroad\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=1.5)]\n[name=\"嵯峨\"]六根清净！\n[Dialog]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[CameraShake(duration=0.7, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[delay(time=0.51)]\n[name=\"墨魉\"]嘎啊！\n[characteraction(name=\"left\", type=\"move\", xpos=-100,ypos=50, fadetime=0.5, block=true)]\n[Character(name=\"char_empty\", name2=\"char_362_Saga#6\",fadetime=0.5)]\n[delay(time=2)]\n[Dialog]\n[character]\n[delay(time=0.7)]\n[Character(name=\"char_362_Saga#6\", name2=\"avg_npc_143#2\")]\n[name=\"嵯峨\"]斩却烦恼！\n[Dialog]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[CameraShake(duration=0.7, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[delay(time=0.51)]\n[name=\"墨魉\"]嘎啊！\n[characteraction(name=\"right\", type=\"move\", xpos=100,ypos=-50, fadetime=0.5, block=true)]\n[Character(name=\"char_362_Saga#6\", name2=\"char_empty\",fadetime=0.5)]\n[delay(time=2)]\n[Dialog]\n[character]\n[delay(time=0.7)]\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#6\")]\n[name=\"嵯峨\"]油炸豆腐！\n[Dialog]\n[PlaySound(key=\"$e_skill_skulsrsword\",volume=1)]\n[CameraShake(duration=0.7, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[delay(time=0.51)]\n[name=\"墨魉\"]嘎，嘎啊？\n[characteraction(name=\"left\", type=\"move\", xpos=-100,ypos=50, fadetime=0.5, block=true)]\n[Character(name=\"char_empty\",blackstart=0.99,blackend=1, name2=\"char_362_Saga#6\",fadetime=0.5)]\n[delay(time=2)]\n[Character(name=\"char_empty\", name2=\"char_362_Saga#6\",fadetime=0.5)]\n[Dialog]\n[character]\n[delay(time=0.7)]\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]......你还挺厉害的。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]小僧自幼在寺庙长大，耳濡目染，稍微学了些刀法罢了。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]你这叫稍微？\n[Character(name=\"char_362_Saga#5\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]莫要在意，待小僧为炎熔施主开出一条道来！\n[Character(name=\"char_362_Saga#5\", name2=\"char_1011_purgatory_1\")]\n[characteraction(name=\"left\", type=\"exit\", direction=\"left\",block=true,fadetime=1.5)]\n[Dialog]\n[delay(time=1.5)]\n[character]\n[delay(time=1)]\n[Character(name=\"avg_npc_143#2\", name2=\"avg_npc_143#2\")]\n[delay(time=1)]\n[characteraction(name=\"left\", type=\"move\", xpos=-50,fadetime=0.6,block=true)]\n[delay(time=0.51)]\n[characteraction(name=\"left\", type=\"move\", xpos=-50,fadetime=0.6,block=true)]\n[name=\"墨魉\"]嘎......嘎啊！\n[Dialog]\n[delay(time=0.6)]\n[Character(name=\"avg_npc_143#1\", name2=\"avg_npc_143#2\")]\n[characteraction(name=\"left\", type=\"exit\", direction=\"left\",block=true,fadetime=1)]\n[characteraction(name=\"right\", type=\"jump\",power=40, fadetime=0.5,times=1,block=true)]\n[delay(time=0.51)]\n[Character(name=\"char_empty\", name2=\"avg_npc_143#1\")]\n[characteraction(name=\"right\", type=\"exit\", direction=\"left\",block=true,fadetime=0.5)]\n[delay(time=1.5)]\n[Character(name=\"char_1011_purgatory_1\")]\n[name=\"炎熔\"]那些怪物已经开始怕你了......说起来，墨魉是有智慧的吗？\n[Dialog]\n[delay(time=1)]\n[Character(name=\"avg_npc_143#2\", name2=\"char_empty\")]\n[characteraction(name=\"left\", type=\"jump\",power=40, fadetime=1,times=3,block=true)]\n[name=\"墨魉\"]嘎！嘎啊！嘎啊嘎啊！\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#5\",enter2=\"right\")]\n[stopmusic(time=0.5)]\n[delay(time=0.6)]\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#2\")]\n[name=\"嵯峨\"]唔？\n[Character(name=\"char_1011_purgatory_1\")]\n[name=\"炎熔\"]怎么停手了？\n[Dialog]\n[character]\n[delay(time=1)]\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#4\",focus=1)]\n[characteraction(name=\"left\", type=\"jump\",power=40, fadetime=1,times=3,block=true)]\n[name=\"墨魉\"]嘎，嘎嘎啊，嘎啊嘎啊......\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#4\",focus=2)]\n[name=\"嵯峨\"]嗯，嗯嗯，嗯......\n[Character(name=\"char_1011_purgatory_1\")]\n[name=\"炎熔\"]喂！？你还能听懂这玩意说话的！？\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#4\",focus=2)]\n[name=\"嵯峨\"]略通一二。施主你看，这一只墨魉也没犯什么过错，若是真心悔过，不再侵扰镇上邻里，放了就放了罢。\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#4\",focus=1)]\n[characteraction(name=\"left\", type=\"jump\",power=40, fadetime=1,times=3,block=true)]\n[name=\"墨魉\"]嘎啊！\n[Character(name=\"char_1011_purgatory_1\")]\n[name=\"炎熔\"]......这样好吗？\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#1\",focus=2)]\n[name=\"嵯峨\"]没关系，小僧自有分寸。\n[Character(name=\"avg_npc_143#2\", name2=\"char_362_Saga#1\",focus=1)]\n[name=\"墨魉\"]嘎......\n[stopmusic(fadetime=1)]\n[Dialog]\n[Character(name=\"avg_npc_143#1\", name2=\"char_362_Saga#1\")]\n[characteraction(name=\"left\", type=\"exit\", direction=\"left\",block=true,fadetime=1)]\n[delay(time=1)]\n[character]\n[PlayMusic(intro=\"$path_intro\", key=\"$path_loop\", volume=0.4)]\n[delay(time=1)]\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]这附近安静些了......应该没有其他村民留在这里，现在我们可以谈谈了吗？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]炎熔施主好生严肃，莫非小僧做错了什么吗？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]这倒没有，只是你刚才说了......画卷？你似乎对这里很了解。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]那可不，小僧在此地云游，也有段时间了。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]这地方看上去可不值得“云游”。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]一幅画卷，能有多大？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]什么意思......我们在画里？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]正是如此。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]......到底什么意思？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]啊，小僧明白了，几位施主和小僧一样，也是误入此中山河——\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]呃？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]想当初，小僧只是途经大炎勾吴地界，突发奇想，想去拜访一下那位大家后人。\n[name=\"嵯峨\"]见灰齐山飞瀑之下美不胜收，就在一处山中茅屋露宿一宿，没想到眼睛一闭一睁，就到这里来啦。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]等、等等，什么意思，你也是来找“夕”的？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]夕？小僧倒未曾听说过这个名讳......\n[name=\"嵯峨\"]小僧寻的，是那位“一笔拙山起，何处话风流”的炎国画家。\n[name=\"嵯峨\"]不过算算时日，怕那画家已经不在人世了，故而想去探访其故居，如此而已。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]反正你也是先去的大炎勾吴灰齐山，然后莫名其妙就到了这里的，对吧！？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]唔，确是如此不假，但施主为何如此激动？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]然后你说这里是画卷——\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]天地人皆不合情理，炎熔施主，就没意识到吗？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]这我也知道，可为什么是画......？\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]小僧也难说明白，不过这婆山镇，已经是小僧游历的......大概百余幅画卷啦！至少自己身在何处，还是心知肚明的。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]可......那些人，是活生生的人，茶水有滋味，水果也能吃......\n[name=\"炎熔\"]只是某种法术的结果吗？可如果这是法术的结果......这是什么样的......\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]这小僧可就毫无头绪了。要不是曾有幸一瞥这天地真实，小僧怕也意识不到自己身在何处吧。\n[name=\"嵯峨\"]此处没有天灾所扰，各界生灵，都遵循着自己的规矩，自成方圆，妙不可言。小僧留在这里，未尝没有图个安心的意思。\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]这......\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]哈哈，看施主一脸困惑，也在所难免，小僧初见夕娥的时候，也是施主这般模样......\n[Character(name=\"char_362_Saga#1\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]慢着......你说见谁！？\n[Character(name=\"char_362_Saga#6\", name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]小僧见了——等等，那处灯火，莫非是掌柜的当铺？她竟然没去避难，这可不成！\n[Dialog]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[characteraction(name=\"left\", type=\"exit\", direction=\"left\",block=true,fadetime=0.5)]\n[delay(time=1)]\n[Character(name=\"char_362_Saga#6\", name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]等等我！\n[Dialog]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[characteraction(name=\"right\", type=\"exit\", direction=\"left\",block=true,fadetime=1)]\n[delay(time=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character(name=\"avg_npc_139#5\",name2=\"char_empty\")]\n[Delay(time=1)]\n[Background(image=\"bg_pawnshop\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Delay(time=2)]\n[name=\"掌柜\"]......\n[Dialog]\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#1\",enter2=\"right\",fadetime=1)]\n[delay(time=0.6)]\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#1\",focus=2)]\n[CameraShake(duration=0.5, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"墨魉\"]嘎唔......\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#1\",focus=1)]\n[name=\"掌柜\"]......好了好了，别这么激动。\n[name=\"掌柜\"]为什么要来吓唬人？她是怎么说的？\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#1\",focus=2)]\n[characteraction(name=\"right\", type=\"jump\",power=60, fadetime=0.7,times=3,block=true)]\n[delay(time=1)]\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#1\",focus=1)]\n[name=\"掌柜\"]啊......是这样......她还是老样子。\n[Dialog]\n[character]\n[Delay(time=1)]\n[PlaySound(key=\"$rungeneral\", volume=1)]\n[delay(time=0.7)]\n[Character(name=\"char_362_Saga#6\",name2=\"char_1011_purgatory_1\")]\n[delay(time=0.51)]\n[Character(name=\"char_362_Saga#6\",name2=\"char_1011_purgatory_1\",focus=1)]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=true)]\n[name=\"嵯峨\"]掌柜的！\n[Dialog]\n[character]\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#2\")]\n[characteraction(name=\"right\", type=\"jump\",power=60, fadetime=0.3,times=1,block=true)]\n[delay(time=0.51)]\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#2\",focus=1)]\n[name=\"掌柜\"]......去吧。\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#1\",focus=2)]\n[name=\"墨魉\"]嘎......\n[Dialog]\n[Character(name=\"avg_npc_139#5\",name2=\"avg_npc_143#1\")]\n[characteraction(name=\"right\", type=\"exit\", direction=\"left\",block=true,fadetime=1)]\n[Character(name=\"avg_npc_139#5\",name2=\"char_empty\")]\n[delay(time=1.5)]\n[Character(name=\"char_362_Saga#1\",name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]掌柜的，你没事？\n[Character(name=\"avg_npc_139#5\")]\n[name=\"掌柜\"]我没事的......这位就是？\n[Character(name=\"char_362_Saga\",name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]哦，这位施主就是炎熔，是之前传得沸沸扬扬的外来者。\n[Character(name=\"avg_npc_139#5\")]\n[name=\"掌柜\"]幸会。\n[Character(name=\"char_362_Saga\",name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]这位是这间当铺的老板娘，单名一个“黎”字，黎明的黎。\n[Character(name=\"char_362_Saga\",name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]......你没有被奇怪的东西袭击吗？\n[Character(name=\"avg_npc_139#5\")]\n[name=\"黎\"]不曾见过。\n[Character(name=\"char_362_Saga\",name2=\"char_1011_purgatory_1\",focus=2)]\n[name=\"炎熔\"]......\n[Character(name=\"char_362_Saga\",name2=\"char_1011_purgatory_1\",focus=1)]\n[name=\"嵯峨\"]黎姑娘，不知那些墨魉是不是还会回来，可否让我们躲藏在此处，观察一二？\n[Character(name=\"avg_npc_139#5\")]\n[name=\"黎\"]......嗯，好。\n[Dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}