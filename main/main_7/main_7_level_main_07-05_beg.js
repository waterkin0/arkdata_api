var items = {"brief": "完成与凯尔希的情报汇总后，博士与迷迭香的小队汇合，并目睹了她的战斗方式。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] \n[stopmusic]\n[Delay(time=1)]\n[Character]\n[Blocker(fadetime=1,block=true)]\n切尔诺伯格地下基建\n10:30 a.m.\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_cherunder\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[playMusic(intro=\"$darkness02_intro\", key=\"$darkness02_loop\", volume=0.4)]\n[Character(name=\"char_003_kalts_1\",fadetime=1,block=true)]\n[delay(time=1)]\n[Decision(options=\"你在这，是在等我？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  是。\n[Decision(options=\"找你花了我很长时间。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  我们会在环境信息汇总完毕后开始行动。在这之前，更多地向你描述一些核心城内的现状会对你有帮助。\n[name=\"凯尔希\"]  阿米娅还要处理现场，这次讨论，她就不参加了。\n[name=\"凯尔希\"]  任务简报你都已经看过。但那些资料对于你的头脑来说，并不够多。\n[Decision(options=\"你终于意识到需要我了？;......;我还以为你当我只会战地指挥。\", values=\"1;2;3\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  如果最坏的情况发生，我不希望你牺牲的不明不白。\n[Predicate(references=\"2\")]\n[name=\"凯尔希\"]  如果你对我五官中的某个部分很在意，可以直接指出来。不用一直盯着我看。\n[Predicate(references=\"3\")]\n[name=\"凯尔希\"]  虽然你可能忘了，但我记得。我记得你相当擅长在凌晨四点时，用沸腾的饮用水直接在口腔中加热速食食品。\n[name=\"凯尔希\"]  至于是不是真的，你也许可以试试。\n[Predicate(references=\"1;2;3\")]\n[name=\"凯尔希\"]  不说闲话。我们的时间没有多充裕。\n[name=\"凯尔希\"]  罗德岛与近卫局在龙门合作击败了整合运动，击溃了“梅菲斯特”和“弑君者”带领的武装力量。\n[name=\"凯尔希\"]  这之后，整合运动在龙门的部署已经全部失效。\n[name=\"凯尔希\"]  阿米娅向我报告过，你们与整合运动的特殊小队指挥官，别称“霜星”的感染者，在龙门城邦的底部展开了殊死搏斗。\n[name=\"凯尔希\"]  战斗以你们的胜利告终。\n[Decision(options=\"没人赢。;不。;那不算是胜利。\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[name=\"凯尔希\"]  可以理解。根据PRTS申报的数据，在干员的协力下，你正是在罗德岛处理了敌对感染者的遗体。\n[Decision(options=\"我不认为她是敌人。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  Dr.{@nickname}，“分清敌我”。\n[name=\"凯尔希\"]  ......不。也许这会让你会错意，请听我说完。\n[Decision(options=\"......？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  我没有指责你，Dr.{@nickname}。\n[name=\"凯尔希\"]  我从阿米娅的讲述中了解了敌指挥官的情况。现场的判断属于你们，如何看待他们，只能由身在现场的你们决定。\n[name=\"凯尔希\"]  我没有跳出职责来判断立场的权力。\n[name=\"凯尔希\"]  你曾经尝试去理解感染者的行为动机，你愿意承担她——霜星——所作所为导致的所有后果。\n[name=\"凯尔希\"]  你也这么做了。\n[name=\"凯尔希\"]  如果你打算诚实地去了解这片大地，博士，我没有指责你的理由。\n[name=\"凯尔希\"]  我甚至可以向罗德岛干员担保你的行为。坚持下去，Dr.{@nickname}，做自己的决定，我会尽量不做干涉。\n[name=\"凯尔希\"]  之后的后果，我会解决罗德岛应承担的那部分。\n[name=\"凯尔希\"]  你的责任与权力相辅相成。“分清敌我”，是你自己的判断，不是我的。\n[name=\"凯尔希\"]  ......\n[name=\"凯尔希\"]  （轻声）如果你真的与他们共呼吸。\n[Decision(options=\"我这么做......你其实完全认可？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  我没有这么说过。\n[name=\"凯尔希\"]  言归正传。霜星及其率领的小队，也就是“雪怪小队”，从属于一支感染者游击队。 \n[name=\"凯尔希\"]  现在，整合运动能够驱策的精锐武装力量只剩下两支。感染者游击队是其中一支。\n[name=\"凯尔希\"]  另一支，是由萨卡兹雇佣兵“W”带领的萨卡兹雇佣军。\n[name=\"凯尔希\"]  据我所知，W依赖一系列手段，窃取了整合运动这支萨卡兹雇佣军的领头人地位。\n[name=\"凯尔希\"]  因为我们没时间复习历史常识，所以我直截了当地告诉你——萨卡兹雇佣军并不可靠，对W，对整合运动，都一样。\n[name=\"凯尔希\"]  萨卡兹雇佣军并不是普通的雇佣兵组织。他们是卡兹戴尔无处容放的军事力量在大地各处的流露。\n[name=\"凯尔希\"]  妄图控制它，只会引来他们背后的牵线人。\n[Decision(options=\"你似乎对萨卡兹有很深的了解。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  这不是重点。\n[name=\"凯尔希\"]  重点在于，雪怪小队所属的感染者游击队和雇佣兵全然不同。\n[name=\"凯尔希\"]  形式，编制，行事方式以及信条，游击队和雇佣兵之间没有一点相似之处。\n[name=\"凯尔希\"]  在成为整合运动的武装前，它是独立的感染者游击队，他们的威名在特定区域的感染者中比它的后起之秀整合运动更加响亮。\n[name=\"凯尔希\"]  ......在成为游击队之前，他们曾是乌萨斯强大军事力量的一部分。\n[Decision(options=\"是西北冻原的游击队？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  ——\n[name=\"凯尔希\"]  无论你从哪里得到了这条信息，博士，我都该为此夸赞你。\n[name=\"凯尔希\"]  尽管这样的情报很基础，但你能主动去获取情报这一行为，让我感到欣慰。\n[Decision(options=\"夸我不用拐弯抹角。;......;我有点怀疑你在讽刺我？\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[name=\"凯尔希\"]  点到为止。\n[name=\"凯尔希\"]  我们身处切尔诺伯格核心城的基础工业结构处。\n[name=\"凯尔希\"]  接下来，我们带领的这三支小队将穿过错综复杂的地下通道、下水管道与工业层，前往核心城的中央区域。\n[name=\"凯尔希\"]  注意，哪怕是恰巧在这里巡逻的敌人，也不会是普通的整合运动暴徒。\n[name=\"凯尔希\"]  我们会遇见经过严苛训练的......“士兵”。游击队以乌萨斯现役军的训练方式训练过的整合运动“士兵”。\n[name=\"凯尔希\"]  侦查干员发现核心城内的通讯遭到了人为切断，或者说，整合运动并没有尝试维持城内的通讯。\n[name=\"凯尔希\"]  这对于利用常规通讯手法进行交流的现代小队有着很强的制约力。\n[name=\"凯尔希\"]  却也意味着，整合运动也有特殊的通讯手段，或者是他们完全没有准备好应战。\n[name=\"凯尔希\"]  参照一个月前在切尔诺伯格发生的事件，后者的情况几乎不会发生。但是，切断通讯，底层的整合运动将不会收到任何直接命令。\n[name=\"凯尔希\"]  大多数时间里，他们会自由行事。\n[name=\"凯尔希\"]  恐怕他们还不知道，他们频道收不到的那个信号——那个只有国家与城邦才能辨别的信号，正在划定乌萨斯的疆域。\n[name=\"凯尔希\"]  这是一座酝酿着风暴的城区。混乱，无论是无意还是故意，都会像沉重的烟雾一样四处弥漫。\n[name=\"凯尔希\"]  先我一步，崩溃的种子已经被人播撒出去了。\n[Decision(options=\"结论呢？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  某种冲突正在整合运动内部孕育。\n[Decision(options=\"你很确定？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  类似的事情在这片大地上发生过无数遍。\n[Decision(options=\"你是不是还有什么没和我说？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  能说的差不多就这些，剩下的，等要讨论的时候再讨论。\n[name=\"凯尔希\"]  即使我们只是在做战前准备工作，我们也要兼顾效率。\n[name=\"凯尔希\"]  请你帮我通知R-4小队的成员，博士。请他们来取这批装置。\n[Decision(options=\"......等一等......？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  还有什么问题？\n[Decision(options=\"这些装置似乎是迷迭香的。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  是的。\n[name=\"凯尔希\"]  那么，你与迷迭香干员的交流似乎并不局限于生物处理室里的谈话。\n[Decision(options=\"我看到她准备战斗的样子。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Decision(options=\"很难想像她居然有使用这种装置的力量。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_003_kalts_1\")]\n[name=\"凯尔希\"]  事实上，每一个精英干员都具备相当的力量。他们必须独当一面。 \n[name=\"凯尔希\"]  ......所以你还没来及了解迷迭香的战斗方式。\n[name=\"凯尔希\"]  事先声明，有些事情不只该他们自己承担。罗德岛的战地指挥官身负多种职能，帮忙分担干员身上的压力，也是其中必要的一环。\n[name=\"凯尔希\"]  在这之后的战斗中，你可能会被某些事实冲击。\n[Decision(options=\"啊......？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"凯尔希\"]  很少有不会被迷迭香的战斗震慑住的人。\n[name=\"凯尔希\"]  做好心理准备。\n[Dialog]\n[Character]\n[stopmusic(fadetime=2)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[Background(image=\"bg_cherunder\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[playMusic(intro=\"$batmeeting_intro\", key=\"$batmeeting_loop\", volume=0.4)]\n[Character(name=\"avg_npc_012\")]\n[name=\"罗德岛干员\"]  Dr.{@nickname}，你来了！\n[name=\"罗德岛干员\"]  我们截住了敌人的巡逻小队，正在稳步处理中。\n[Decision(options=\"战斗已经开始了？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"罗德岛干员\"]  博士，你的位置有点危险......\n[name=\"罗德岛干员\"]  我建议你不要站在那个位置。\n[Decision(options=\"我才刚刚到位。\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"罗德岛干员\"]  你那里，那里是......\n[name=\"罗德岛干员\"]  博士，她身边真的很危险！\n[Character]\n[name=\"？？？\"]  ......敌人。\n[Decision(options=\"难道说......\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Decision(options=\"......迷迭香？\", values=\"1\")]\n[Predicate(references=\"1\")]\n[PlaySound(key=\"$d_gen_walk_n\")]\n[Character(name=\"avg_npc_042\",fadetime=1,block=true)]\n[delay(time=1)]\n[name=\"迷迭香\"]  敌人。\n[name=\"迷迭香\"]  博士，那些是杀害我家人的......敌人！\n[Decision(options=\"你怎么这么凶？;......？;迷迭香？发生什么事......\", values=\"1;2;3\")]\n[Predicate(references=\"1;2;3\")]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=2, block=true)]\n[name=\"迷迭香\"]  ......\n[name=\"迷迭香\"]  博士，让一让。不要呆在这条走道。\n[name=\"迷迭香\"]  我和阿米娅不一样。阿米娅的法术能绕过家人，准确地惩罚别人......\n[name=\"迷迭香\"]  我不能。我做不到。\n[name=\"迷迭香\"]  所以，不要站在迷迭香和战场之间。\n[Decision(options=\"......\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"整合运动成员\"]  噫！！\n[CameraShake(duration=0.4, xstrength=0, ystrength=8, vibrato=30, randomness=30, fadeout=true, block=false)]\n[name=\"整合运动成员\"]  那个背着大盒子的女孩，怎，怎，怎么......\n[name=\"整合运动成员\"]  我的眼睛要看不到了，我的眼睛，我的头！！好痛！好痛！！\n[name=\"整合运动成员\"]  有什么东西要把我捏碎了！\n[name=\"迷迭香\"]  ......\n[name=\"迷迭香\"]  不会的。\n[name=\"迷迭香\"]  我已经很久没捏死过人了。\n[name=\"整合运动成员\"]  那些剑，那些剑——\n[Dialog]\n[Character]\n[Decision(options=\"迷迭香？！\", values=\"1\")]\n[Predicate(references=\"1\")]\n[name=\"迷迭香\"]  整合运动...... \n[name=\"迷迭香\"]  我不要你们留在我的记忆里。\n[name=\"迷迭香\"]  我不要。\n[Dialog]\n[Blocker(fadetime=2,block=true)]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}