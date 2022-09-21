var items = {"brief": "随着爆炸发生，深池部队在“领袖”带领下大肆反攻，参与集会的人伤亡惨重。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] \n[stopmusic]\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Background(image=\"bg_manorindoor\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=1)]\n[playMusic(intro=\"$nervous_intro\", key=\"$nervous_loop\", volume=0.4)]\n[Character]\n[Character(name=\"avg_npc_229_1#7\",fadetime=1,block=true)]\n[delay(time=1)]\n[CameraShake(duration=0.5, xstrength=15, ystrength=15, vibrato=20, randomness=70, fadeout=true, block=false)]\n[name=\"号角\"]  咳咳......\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#7\",focus=1)]\n[name=\"风笛\"]  队长，你没事吧？\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"]  我没事。倒是你，幸亏这回没往前扑。\n[Character(name=\"avg_222_bpipe_1#8\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  队长的反应比我更快，至少盾后这片大厅基本都是好的。\n[Character(name=\"avg_222_bpipe_1#8\",name2=\"avg_npc_229_1#5\",focus=2)]\n[name=\"号角\"]  ......我护不住所有人。\n[Character(name=\"avg_222_bpipe_1#7\",name2=\"avg_npc_229_1#5\",focus=1)]\n[name=\"风笛\"]  烟散得差不多了，我看到上校也只受了轻伤，他们正从另一个门撤退。\n[Character(name=\"avg_222_bpipe_1#7\",name2=\"avg_npc_229_1#5\",focus=2)]\n[name=\"号角\"]  诗人......\n[Character(name=\"avg_222_bpipe_1#4\",name2=\"avg_npc_229_1#5\",focus=1)]\n[name=\"风笛\"]  唉，他站得离炸弹太近了。\n[name=\"风笛\"]  好可惜，不是每个人都能顶着刀刃替别人站出来的。他虽然是个诗人，但他有不输给优秀战士的勇气。\n[Character(name=\"avg_222_bpipe_1#4\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"]  ......\n[name=\"号角\"]  我多么希望他的死不是毫无意义。\n[name=\"号角\"]  趁敌人还没打进来，风笛，疏散幸存者。\n[dialog]\n[delay(time=1)]\n[Character(name=\"avg_222_bpipe_1#4\",name2=\"avg_npc_229_1#2\",focus=2)]\n[name=\"号角\"]  风笛......？\n[dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=3, block=true)]\n[character]\n[stopmusic(fadetime=2)]\n[delay(time=1.5)]\n风笛呆呆地看着窗外。\n[dialog]\n[Background]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[playMusic(intro=\"$ghosthunter02_intro\", key=\"$ghosthunter02_loop\", delay=0.4,volume=0.4)]\n[Delay(time=1.5)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Image(image=\"21_I3\", fadetime=3)]\n[Delay(time=6)]\n有那么一刻，交战声都仿佛消失了。\n一股巨大的能量自黑夜深处迸开。\n火并没有真的烧起来，从雕像到市政厅，一切活物都在瞬间无声地化作了灰烬。\n紧接着，一支军队悄无声息地从黑夜和灰烬里渗了出来。\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[image]\n[Background(image=\"bg_manorindoor\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Character(name=\"avg_222_bpipe_1#7\")]\n[name=\"风笛\"]  ......\n[Character(name=\"avg_222_bpipe_1#2\")]\n[name=\"风笛\"]  ............\n[name=\"风笛\"]  我从来没见过......这样的火。\n[name=\"风笛\"]  领头的术师，她是谁？\n[Character(name=\"avg_npc_229_1#7\")]\n[name=\"号角\"]  风笛，快走远一些！\n[Dialog]\n[character]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=false)]\n[CameraShake(duration=1, xstrength=8, ystrength=6, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=0.5, b=0.3, fadetime=0.2, block=true)]\n[playsound(key=\"$p_atk_elecball_n\",volume=1)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[Character(fadetime=0.3)]\n[delay(time=0.51)]\n[playsound(key=\"$p_imp_blunt_h\",volume=0.8)]\n[PlaySound(key=\"$bottlebroken\",delay=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.25, block=true)]\n[delay(time=2)]\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"]  你站得离窗太近了。以刚才的能量来看，下一击能直接炸穿墙体。\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  是，队长。\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  我只是......\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 帮我......快帮帮我......\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 我的腿......好疼！\n[Character(name=\"avg_npc_229_1#7\")]\n[name=\"号角\"] 救人要紧。先撤退。\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[character]\n[stopmusic(fadetime=1)]\n[Background(image=\"21_G6_decisivebattlealley_n\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$warchaos_intro\", key=\"$warchaos_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[PlaySound(key=\"$d_avg_warfireamb_loop\", volume=1, loop=true, channel=\"bgs\")]\n[delay(time=1)]\n[Character(name=\"avg_npc_244\")]\n[name=\"深池士兵\"]谁？附近还有活着的维多利亚士兵？！\n[dialog]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[CameraShake(duration=1, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[character(name=\"avg_npc_244\",name2=\"avg_222_bpipe_1#6\")]\n[characteraction(name=\"right\", type=\"move\", xpos=-200, fadetime=0.5,block=true)]\n[PlaySound(key=\"$e_skill_skulsrsword\", volume=1)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=1, block=true)]\n[delay(time=1)]\n[PlaySound(key=\"$bodyfalldown2\", volume=1)]\n[characteraction(name=\"left\", type=\"move\", ypos=-300, fadetime=1,block=true)]\n[character(name=\"char_empty\",name2=\"avg_222_bpipe_1#6\",fadetime=0.5)]\n[delay(time=1.5)]\n[dialog]\n[character]\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"] 敌人到处都是！\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#2\",focus=2)]\n[name=\"号角\"] ......以这个行军速度来看，鬼魂部队早就渗透进这座城市里了。\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"] 十一区到十七区的沦陷速度太快了......难道说......这就是上校要去这些街区搜查的原因？！\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"] ......\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"] 我们必须撤去第十区以南。驻军正在那个方位和鬼魂部队交战。\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 别、别去战场，先......先送我回到安全的地方躲一躲......不能让头领们发现我还活着......\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"] 送你回去？现在来看，你真的该被送进监狱！\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 轻一点......呜......疼......\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 我......我给你们钱......我甚至可以送你们一个街区......只要你们......\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"] ......队长，我能不能用我的法子让他闭嘴？！\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"] 趁他醒着，多问几句。\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"] 刚才那个领头的术师是谁？\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] ......那是......领袖......\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#4\",focus=1)]\n[name=\"风笛\"] 鬼魂部队的领袖？！\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#4\",focus=1)]\n[name=\"风笛\"] 她......到底是什么身份？\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 我不知道......\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#4\",focus=1)]\n[name=\"风笛\"] 你们不是一伙的吗？你什么都不知道就敢把人领进家门？！\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 她是......公爵的客......\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#7\",focus=2)]\n[name=\"号角\"] ......公爵？哪一个？！\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 我不能......\n[dialog]\n[PlaySound(key=\"$e_atk_arrow_h\",volume=0.7)]\n[delay(time=0.7)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0, block=true)]\n[Blocker(a=1, r=255,g=255, b=255, fadetime=0.03, block=true)]\n[CameraShake(duration=0.5, xstrength=40, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[PlaySound(key=\"$fightgeneral\", volume=0.2)]\n[Blocker(a=0, r=255,g=255, b=255, fadetime=0.5, block=true)]\n[Dialog]\n[delay(time=0.51)]\n[Character(name=\"avg_npc_177\")]\n[name=\"野心勃勃的男爵\"] 唔——\n[Dialog]\n[delay(time=0.7)]\n[PlaySound(key=\"$bodyfalldown2\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", ypos=-300, fadetime=2,block=true)]\n[character(fadetime=0.5)]\n[delay(time=2)]\n[dialog]\n[character]\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"] 他......死了？\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"] 鬼魂部队动的手......？\n[Character(name=\"avg_npc_244\")]\n[name=\"深池士兵\"]——\n[dialog]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[CameraShake(duration=1, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[PlaySound(key=\"$e_skill_skulsrsword\", volume=1)]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[delay(time=1)]\n[Dialog]\n[delay(time=0.7)]\n[PlaySound(key=\"$bodyfalldown2\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", ypos=-300, fadetime=2,block=true)]\n[character(fadetime=0.5)]\n[delay(time=2)]\n[dialog]\n[character]\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"] 他们不是一伙的吗？鬼魂部队怎么专挑自己人下手？\n[Character(name=\"avg_222_bpipe_1#6\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"] ......先离开这里。\n[StopSound(channel=\"bgs\", fadetime=1)]\n[musicvolume(volume=0.2, fadetime=1)]\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[character]\n[delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=2)]\n[musicvolume(volume=0.4, fadetime=1)]\n[Character(name=\"avg_npc_244\")]\n[name=\"深池士兵\"]你，站住。\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]......\n[Character(name=\"avg_npc_244\")]\n[name=\"深池士兵\"]你是什么人？躲在这里干什么？\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]我那个......我本来只是送个药......谁知你们打起来了。\n[Character(name=\"avg_npc_244\")]\n[name=\"深池士兵\"]送药？给谁送？给维多利亚士兵？\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]我......呵呵......罗德岛的药，是给感染者用的，我们不关心病人的身份......\n[Character(name=\"avg_npc_244\")]\n[name=\"深池士兵\"]行迹可疑。\n[dialog]\n[dialog]\n[Blocker(a=0, r=255, g=255, b=255, fadetime=0, block=true)]\n[CameraShake(duration=1, ystrength=40, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Blocker(a=1, r=255, g=255, b=255, fadetime=0.03, block=true)]\n[PlaySound(key=\"$fightgeneral\",volume=0.4)] \n[Blocker(a=0, r=255, g=255, b=255, fadetime=0.5, block=true)]\n[delay(time=1)]\n[PlaySound(key=\"$bodyfalldown2\", volume=1)]\n[characteraction(name=\"middle\", type=\"move\", ypos=-300, fadetime=1,block=true)]\n[character(name=\"char_empty\",fadetime=0.5)]\n[delay(time=1.5)]\n[dialog]\n[character]\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]啊......！\n[Character(name=\"avg_npc_245_1#1\")]\n[name=\"Outcast\"]没事了，威尔。\n[Character(name=\"avg_npc_090\")]\n[CameraShake(duration=0.5, xstrength=15, ystrength=15, vibrato=20, randomness=70, fadeout=true, block=false)]\n[name=\"干员威尔\"]Outcast女士！您、您来得太及时了！\n[Character(name=\"avg_npc_245_1#1\")]\n[name=\"Outcast\"]唉，你收到下午的通讯了吧？罗德岛将紧急停止在小丘郡的一切日常业务。\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]收是收到了，但......\n[Character(name=\"avg_npc_245_1#4\")]\n[name=\"Outcast\"]——想把剩下的药送完？\n[Character(name=\"avg_npc_245_1#6\")]\n[name=\"Outcast\"]你是个好孩子。先把药给我吧，剩下的我替你送。\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]女士，外面到底怎么回事？一眨眼，到处都在打仗！\n[Character(name=\"avg_npc_245_1#1\")]\n[name=\"Outcast\"]累积了数百年的仇怨被人利用，成了一把试图摧毁一切的火。\n[Character(name=\"avg_npc_245_1#2\")]\n[name=\"Outcast\"]而且，这才刚刚开始。\n[Character(name=\"avg_npc_245_1#1\")]\n[name=\"Outcast\"]你赶紧回去吧。既然我在这里，我最优先要确保的，就是我们罗德岛的人，一个都不能少。\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]好的，女士......对了，我刚才在十七区附近还见到了简小姐......她......她经常来办事处，我们都当她半个罗德岛干员！\n[Character(name=\"avg_npc_090\")]\n[name=\"干员威尔\"]她是维多利亚士兵，看这群暴徒的意思，他们不会放过她的！\n[Character(name=\"avg_npc_245_1#1\")]\n[name=\"Outcast\"]好。\n[Character(name=\"avg_npc_245_1#7\")]\n[name=\"Outcast\"]我修改下刚才那句话——罗德岛的人，半个都不能少。\n[Dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Background(image=\"21_G3_victoria_street_d\",screenadapt=\"coverall\")]\n[Delay(time=1)]\n[playMusic(intro=\"$darkness01_intro\", key=\"$darkness01_loop\", volume=0.4)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=1)]\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",fadetime=0.7)]\n[delay(time=0.7)]\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  队长，能转移的人都转移了。\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"]  很好。你有没有受伤？\n[Character(name=\"avg_222_bpipe_1#7\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  没有。这一夜交手下来，我算是放心了一点。除了那个领头的术师，还有几个厉害角色，剩下的大多数士兵还是普通人。\n[name=\"风笛\"]  他们是受过一些训练，但纪律说不上好。如果人数相当，正面碰上的话，不会是我们小队的对手。\n[Character(name=\"avg_222_bpipe_1#7\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"]  你也说了前提。而且，他们的主要对手是驻军。\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  队长，你说得对，要和他们打的话，驻军占不到上风。\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"]  还有没有什么发现？\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  他们的武器装备都很精良。我刚刚去救那几个官员和贵族的时候，有人想从拐角处偷袭我，被我敲晕以后，我从他手里拿了这个回来。\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#4\",focus=2)]\n[name=\"号角\"]  维多利亚制式军弩？\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#4\",focus=1)]\n[name=\"风笛\"]  是两年前的型号，不过有改装，你看这两个线圈和下面的导轨。\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#2\",focus=2)]\n[name=\"号角\"]  是破盾弹加速装置。\n[Character(name=\"avg_222_bpipe_1#7\",name2=\"avg_npc_229_1#2\",focus=1)]\n[name=\"风笛\"]  我对弩不是很在行，队长，我没在军队和学校里见过这个。这是我们的技术吗？\n[Character(name=\"avg_222_bpipe_1#7\",name2=\"avg_npc_229_1#2\",focus=2)]\n[name=\"号角\"]  不是很像。\n[name=\"号角\"]  风笛，我是不是遗漏了什么......我们是来调查源石制品失窃案的，对吧？\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  是，毫无疑问，鬼魂部队想和我们正规军抗衡，就一定需要大量武器。\n[Character(name=\"avg_222_bpipe_1#5\",name2=\"avg_npc_229_1#1\",focus=2)]\n[name=\"号角\"]  但我们手上这把弩透露了很多信息。\n[name=\"号角\"]  首先，敌人暗中谋划的时间比我们想得更久；其次，除了从我们手里抢过去的物资，另外有势力在长期资助他们的行动。\n[name=\"号角\"]  也就是说，这一回，在这里，他们并没有打算拿上新装备就匆匆上阵。\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#1\",focus=1)]\n[name=\"风笛\"]  对哦！这么说的话，最近这批丢了的武器去了哪里？\n[Character(name=\"avg_222_bpipe_1#2\",name2=\"avg_npc_229_1#2\",focus=2)]\n[name=\"号角\"]  你也发现了问题所在——鬼魂部队终于现身，可消失在小丘郡的源石制品，到现在都没有露面。\n[name=\"号角\"]  希望三角铁找到了一些新的线索。\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_transmissionget\",volume=0.6)]\n[delay(time=1)]\n[name=\"三角铁\"]  （小声）我在，队长。\n[Character(name=\"avg_npc_229_1#1\")]\n[name=\"号角\"]  你们小组现在还好吗？\n[Character(name=\"avg_npc_229_1#1\",focus=-1)]\n[name=\"三角铁\"]  小鼓受了点伤，其他人都还能行动，就是大家都又累又饿，状态肯定没那么好了。\n[Character(name=\"avg_npc_229_1#4\")]\n[name=\"号角\"]  你们昨天也参与战斗了吗？\n[Character(name=\"avg_npc_229_1#4\",focus=-1)]\n[name=\"三角铁\"]  是的。昨天傍晚开始，突然有大量敌人涌了出来，他们就跟一直埋伏在大棚和灌溉系统里似的——\n[Character(name=\"avg_npc_229_1#1\")]\n[name=\"号角\"]  看来这就是他们之前的藏身之地了。不熟悉农用地块的驻军，很难赢下这场捉迷藏。\n[Character(name=\"avg_npc_229_1#1\",focus=-1)]\n[name=\"三角铁\"]  我们和其中一小波打了个照面，我看敌人实在太多，就带人躲了起来，直到天亮。\n[Character(name=\"avg_npc_229_1#6\")]\n[name=\"号角\"]  你做得很好。能回城里来吗？\n[Character(name=\"avg_npc_229_1#6\",focus=-1)]\n[name=\"三角铁\"]  哈哈，队长，有点困难。他们中的一半进了城，另一半仍然到处都是。\n[Character(name=\"avg_npc_229_1#1\")]\n[name=\"号角\"]  ......\n[Character(name=\"avg_npc_229_1#1\",focus=-1)]\n[name=\"三角铁\"]  队长，我们小组一致认为，我们应该继续最初的任务。\n[name=\"三角铁\"]  我们查到了一辆运输车，你猜得没错，确实有人在利用农产品运输路线把这批源石制品运往某个地方。\n[name=\"三角铁\"]  每次都不算多，今天这些很可能是最后一批。\n[Character(name=\"avg_npc_229_1#1\")]\n[name=\"号角\"]  今天这些？你们在哪里？！\n[Character(name=\"avg_npc_229_1#1\",focus=-1)]\n[name=\"三角铁\"]  我们现在就藏在运输车上。\n[name=\"三角铁\"]  队长，我不敢说太多，怕他们听见。下次联络，你就知道到底是谁是小偷了。\n[Character(name=\"avg_npc_229_1#7\")]\n[name=\"号角\"]  这太冒险了！\n[Character(name=\"avg_npc_229_1#7\",focus=-1)]\n[name=\"三角铁\"]  哈哈......队长，你和风笛也要小心。\n[name=\"三角铁\"]  三角铁，通讯完毕。\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_transmissionget\",volume=0.6)]\n[delay(time=1)]\n[Character(name=\"avg_npc_229_1#1\")]\n[name=\"号角\"]  ......\n[name=\"号角\"]  风笛，马上通知大提琴，我们这就回军营。\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=3, block=true)]\n[Character]\n[Background(image=\"21_G2_opera_room\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=3, block=true)]\n[playsound(key=\"$transmission\", volume=1)]\n[delay(time=1)]\n“......第三到第九城区失守......”\n“......市政厅、报社、玛丽医院同时遭到敌人攻击......”\n“......波莱男爵的夫人发来急电，她的丈夫于凌晨后失联，她请求驻军施以援手......”\n[dialog]\n[character]\n[name=\"号角\"]  上校！我有话要说。\n[Character(name=\"avg_npc_227_1\")]\n[name=\"汉密尔顿上校\"]  让她进来。\n[dialog]\n[character]\n[PlaySound(key=\"$dooropenquite\",volume=1)] \n[delay(time=1)]\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1\",fadetime=1)]\n[delay(time=1)]\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1\",focus=2)]\n[name=\"汉密尔顿上校\"]  我希望你不是来说废话的，斯卡曼德罗斯。如你所见，我们的敌人十分猖狂，我没空再和你争辩。\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1\",focus=1)]\n[name=\"号角\"]  上校，敌人躲在农用地块。\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1#6\",focus=2)]\n[name=\"汉密尔顿上校\"]  什么？\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1#6\",focus=1)]\n[name=\"号角\"]  他们之前就藏在那里。而且，现在在城里的也不是全部，他们还有更多人。\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1\",focus=2)]\n[name=\"汉密尔顿上校\"]  ......\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1#5\",focus=2)]\n[name=\"汉密尔顿上校\"]  我就知道。\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1#5\",focus=1)]\n[name=\"号角\"]  我建议您马上派人去农用地块撤离平民，并尽快实施中央城区和农用地块的紧急脱钩，以免让更多敌人进入城区！\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1#4\",focus=2)]\n[name=\"汉密尔顿上校\"]  我不用你教我怎么做。\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1#4\",focus=1)]\n[name=\"号角\"]  上校！仅凭驻军兵力和我们突击队的人，对付渗透进城内的敌军都未必能很快取得胜利，我们必须确保敌人不会再有援军——\n[Character(name=\"avg_npc_229_1#1\",name2=\"avg_npc_227_1\",focus=2)]\n[name=\"汉密尔顿上校\"]  你走吧。\n[Character(name=\"avg_npc_229_1#4\",name2=\"avg_npc_227_1\",focus=1)]\n[name=\"号角\"]  上校？！\n[Character(name=\"avg_npc_229_1#4\",name2=\"avg_npc_227_1\",focus=2)]\n[name=\"汉密尔顿上校\"]  如何保住小丘郡是我的事。\n[Character(name=\"avg_npc_229_1#7\",name2=\"avg_npc_227_1\",focus=1)]\n[name=\"号角\"]  在捍卫维多利亚国土安全这件首要任务上，我们该站在一起！\n[Character(name=\"avg_npc_227_1\")]\n[name=\"汉密尔顿上校\"]  希尔，送客。\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Character]\n[Background(image=\"21_G2_opera_room\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n[Character(name=\"avg_npc_227_1#5\")]\n[name=\"汉密尔顿上校\"]  你听到了吗，希尔？农用地块，哈，他们藏在农用地块！我早该想到了，还有谁会给鬼魂开门？！\n[Character(name=\"avg_npc_227_1\",name2=\"avg_npc_248\",focus=2)]\n[name=\"副官希尔\"]  是的，上校，塔拉人在帮他们。\n[Character(name=\"avg_npc_227_1#5\",name2=\"avg_npc_248\",focus=1)]\n[name=\"汉密尔顿上校\"]  炮兵营准备得如何了？\n[Character(name=\"avg_npc_227_1\",name2=\"avg_npc_248\",focus=2)]\n[name=\"副官希尔\"]  按计划，最后一批原料会在中午左右送达。\n[Character(name=\"avg_npc_227_1#5\",name2=\"avg_npc_248\",focus=1)]\n[name=\"汉密尔顿上校\"]  好，你让他们加紧改造。只要一想到令人作呕的东西正在我的城市里蹦跶，我就一秒钟都不想多等。\n[name=\"汉密尔顿上校\"]  对了，还有斯卡曼德罗斯和她的手下，伦蒂尼姆来的狼还死死咬着不放。你都听见了吧？他们有人在外面。\n[name=\"汉密尔顿上校\"]  吩咐下去，不管采取什么手段，都不能让任何人妨碍到我们的计划。\n[Character(name=\"avg_npc_227_1#5\",name2=\"avg_npc_248\",focus=2)]\n[name=\"副官希尔\"]  是，上校。\n[Character(name=\"avg_npc_227_1\",name2=\"avg_npc_248\",focus=1)]\n[name=\"汉密尔顿上校\"]  至于斯卡曼德罗斯，在事成之前，也不能放任她自由行动。\n[Character(name=\"avg_npc_227_1\",name2=\"avg_npc_248\",focus=2)]\n[name=\"副官希尔\"]  我明白。\n[Character(name=\"avg_npc_227_1#1\",name2=\"avg_npc_248\",focus=1)]\n[name=\"汉密尔顿上校\"]  ......被她这么一说，我倒是想到了。\n[Character(name=\"avg_npc_227_1#2\",name2=\"avg_npc_248\",focus=1)]\n[name=\"汉密尔顿上校\"]  为什么我们昨夜在波顿家的行动会被敌人提前知道？！\n[Character(name=\"avg_npc_227_1#6\",name2=\"avg_npc_248\",focus=1)]\n[name=\"汉密尔顿上校\"]  斯卡曼德罗斯......不，不会的。这人虽然和那类贵族一样天真又软弱，但她对帝国的忠诚很有保障。\n[Character(name=\"avg_npc_227_1\",name2=\"avg_npc_248\",focus=2)]\n[name=\"副官希尔\"]  ......\n[Character(name=\"avg_npc_227_1#2\")]\n[name=\"汉密尔顿上校\"]  啧......看来渣滓终究是渣滓，卑劣的天性始终难改。\n[name=\"汉密尔顿上校\"]  在这最后的几个小时里，还有件早该完成的事情必须完成。\n[Dialog]\n[Dialog]\n[Blocker(a=0, r=0,g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=1, block=true)]\n[stopmusic(fadetime=1)]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}