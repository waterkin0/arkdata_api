var items = {"brief": "撤退还在继续。博士一行终于与赶来支援的Ace完成汇合。\nAce接受了博士失忆的事实，并表示依然愿意接受指挥。\n\n", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] 第三关（前）\n[PlaySound(key=\"$d_gen_soldiersrun\",volume=0.5)]\n[Background(screenadapt=\"coverall\", image=\"bg_cher_5\",fadetime=1,screenadapt=\"coverall\")]\n[PlayMusic(intro=\"$escape_intro\", key=\"$escape_loop\", volume=0.8, crossfade=1.5, delay=0.5)]\n[Delay(time=1)]\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  Ace！\n[Character(fadetime=0.5)]\n[Character(name=\"char_014_riope\" ,fadetime=0.6)]\n[delay=0.65]\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]  看来，你们都平安无事。\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  这里还没到汇合点......怎么只有你一个人？\n[Character]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=0.3, block=true)]\n[Dialog]\n[Blocker(a=0, fadetime=0.3, block=true)]\n[Character(name=\"char_1002_nsabr_2\")]\n[name=\"整合运动成员\"]   他们就是那支从核心区出逃的人！别放他们走！\n[Character]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=0.3, block=true)]\n[Dialog]\n[Blocker(a=0, fadetime=0.3, block=true)]\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  呿，穷追不舍！\n[name=\"杜宾\"]  E2小队，应敌——\n[Character(name=\"char_014_riope\")]\n[name=\"Ace\"]   杜宾，不要恋战，优先后撤！\n[name=\"Ace\"]   阿米娅，Dr.{@nickname}！快！\n[Character]\n[PlaySound(key=\"$d_gen_soldiersrun\",volume=0.5)]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=0.6, block=true)]\n[Dialog]\n[Blocker(a=0, fadetime=0.6, block=true)]\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  这里也不安全。\n[Character(name=\"char_014_riope\")]\n[name=\"Ace\"]  是的，我们还要继续向下一个汇合点移动。\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  你的小队呢？\n[Character]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=0.3, block=true)]\n[Dialog]\n[Blocker(a=0, fadetime=0.3, block=true)]\n[Character(name=\"char_1002_nsabr_2\")]\n[name=\"整合运动成员\"]   藏到哪去了？把他们找出来！\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  又来了吗！\n[Character(name=\"char_014_riope\")]\n[name=\"Ace\"]  Dr.{@nickname}，请下命令吧。\n[name=\"Ace\"]  就像以前那样。\n[Decision(options=\"......？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_002_amiya_1#4\")]\n[name=\"阿米娅\"]   啊，Ace......\n[name=\"阿米娅\"]   其实有些，小小的变故。\n[name=\"阿米娅\"]   博士......意外失去了记忆。\n[Character(name=\"char_002_amiya_1#4\",name2=\"char_014_riope\",focus=2)]\n[name=\"Ace\"]   ......原来如此。\n[Character(name=\"char_002_amiya_1#4\")]\n[name=\"阿米娅\"]   抱歉，Ace......事情和以前相比，有不小的区别。\n[Character(name=\"char_002_amiya_1#4\",name2=\"char_014_riope\",focus=2)]\n[name=\"Ace\"]   是吗。你没必要向我道歉。\n[name=\"Ace\"]   博士的指挥能力，有没有因为失忆受到影响？\n[Character(name=\"char_002_amiya_1\",name2=\"char_014_riope\",focus=1)]\n[name=\"阿米娅\"]   ......和以前一样。\n[name=\"阿米娅\"]   博士的决策依旧十分可靠，我保证。\n[Character(name=\"char_002_amiya_1\",name2=\"char_014_riope\",focus=2)]\n[name=\"Ace\"]   那就好。我听从博士的指挥。\n[name=\"Ace\"]   失去了的东西是可以找回来的。\n[name=\"Ace\"]   眼下有更棘手的问题等着我们去解决。\n[Character]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=0.3, block=true)]\n[Dialog]\n[Blocker(a=0, fadetime=0.3, block=true)]\n[Character(name=\"char_1002_nsabr_2\")]\n[name=\"整合运动成员\"]   他们在这儿！快，快攻击！！\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  聊天还没结束？我已经开始战斗了！\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]   Dr.{@nickname}，请下命令吧。\n[Character(name=\"char_1002_nsabr_2\")]\n[name=\"整合运动成员\"]   放，把那些畜生放出来，让他们尝尝被撕咬的滋味！\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  博士！Ace！敌人近在眼前了！\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]   ——\n[Decision(options=\"立刻出动！;......好的。;趁现在，破坏敌人的计划吧。\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]   明白。\n[name=\"Ace\"]   E3小队！支援杜宾！\n[PlayMusic(intro=\"$calamity_intro\", key=\"$calamity_loop\", volume=1, crossfade=1.5)]\n[character(fadetime=0)]\n[Dialog(fadetime=0)]\n[PlaySound(key=\"$d_sp_ballista\",volume=0.7)]\n[Blocker(a=1, r=100, g=100, b=100, fadetime=0.1,block=true)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0.3, block=true)]\n[CameraShake(duration=1.5, xstrength=7, ystrength=5, vibrato=30, randomness=90, fadeout=true, block=false)]\n[Delay(time=1)]\n[name=\"整合运动成员\"]   埋伏？！！\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]   E3小队......一直隐藏着行踪，就是等着和我们配合，夹击敌人吗。\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]   在通讯受到干扰的情况下，小队应该在汇合点附近行动，这样，即使是我或者侦查干员发生了意外......\n[name=\"Ace\"]   整体的撤退计划，依然能够正常实施。这是我的判断。\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  也就是说，Ace你把小队留在汇合点，一个人......\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]   毕竟最重要的，是去除汇合点周围的威胁。\n[name=\"Ace\"]   优先确认你们的状况是一种冒险。我不能带上整个小队一起。\n[name=\"Ace\"]   小队存在的目的，本来就是为了让战术更有效，而不是固步自封，成为拖累。\n[Character(name=\"char_130_doberm_ex\")]\n[name=\"杜宾\"]  哈。接下来，用实战去解决了整合运动再说吧！\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]   阿米娅，拜托你。\n[Character(name=\"char_002_amiya_1#7\")]\n[name=\"阿米娅\"]   知道了！我会辅佐博士，通过法术支援你们的！\n[Character(name=\"char_014_riope\" )]\n[name=\"Ace\"]   终于......\n[name=\"Ace\"]   Dr.{@nickname}，请你，指挥罗德岛。\n[Delay(time=0.6)]\n[Dialog]\n[Blocker(block=true)]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}