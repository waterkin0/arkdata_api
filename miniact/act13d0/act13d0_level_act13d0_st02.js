var items = {"brief": "芳汀需要去工坊办理证明，但此时工坊中只有学徒安德切尔，不想白跑一趟的芳汀请同族检查武器，顺带聊些萨科塔人的话题。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] 异域同族\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[stopmusic]\n[Dialog]\n[Delay(time=1)]\n[Delay(time=1)]\n[name=\"芳汀\"]  武器可靠性证明？\n[name=\"芳汀\"]  那是什么？\n[name=\"芳汀\"]  需要我本人带着武器，去工坊接受检查，然后拿工匠的签名回来？\n[name=\"芳汀\"]  使用自带武器，竟然还要走这种流程啊......啧，听起来就好麻烦。\n[name=\"芳汀\"]  老师就不能通融一下，直接帮我签掉不就好了。\n[name=\"芳汀\"]  不可以？这是罗德岛的规矩？\n[name=\"芳汀\"]  真没意思。好吧，好吧，如果您坚持的话，我就自己去一趟吧。\n[name=\"芳汀\"]  初来乍到，我也不想这么快就惹那位凯尔希医生生气。\n[Dialog]\n[Delay(time=0.7)]\n[name=\"芳汀\"]  那就一会见了，老师。\n[Dialog]\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.9)]\n[Delay(time=2)]\n[Background(image=\"bg_corridor\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[playMusic(intro=\"$farce_intro\", key=\"$farce_loop\", volume=0.4)]\n[Delay(time=1)]\n罗德岛舰船，第三维修工坊，早晨\n[PlaySound(key=\"$doorknockquite\")]\n[Delay(time=1)]\n[Dialog]\n[PlaySound(key=\"$d_gen_dooropen\",volume=0.6)]\n[Delay(time=0.5)]\n[Character(name=\"char_271_arene_1\",fadetime=1,block=true)]\n[Delay(time=1)]\n[name=\"芳汀\"]  有没有人在？\n[Character]\n[Dialog]\n[Delay(time=1)]\n[Character(name=\"char_211_adnach_1\",fadetime=1,block=true)]\n[Delay(time=1)]\n[name=\"？？？\"]  您好，现在工坊不营业，五位工匠都去参加维修竞技比赛了。\n[name=\"？？？\"]  有需要的话请下午三点再来。\n[Character(name=\"char_271_arene_1#6\")]\n[name=\"芳汀\"]  维修竞技？那是什么怪比赛。\n[name=\"芳汀\"]  要先把武器弄坏再比怎么维修吗，还是看看谁把刀柄擦得更亮？\n[Character(name=\"char_211_adnach_1\")]\n[name=\"？？？\"]  很遗憾，只是普通的针对战场上半损毁武器的修缮和改良比赛。\n[Character(name=\"char_211_adnach_1#3\")]\n[name=\"？？？\"]  但如果真的能将武器擦到足够亮，让这变成一种攻击手段，或许也不是不能取得优胜。\n[Character(name=\"char_211_adnach_1#2\")]\n[name=\"？？？\"]  ......嗯？好像是个不错的主意。下次我试试。\n[Character(name=\"char_271_arene_1#4\")]\n[name=\"芳汀\"]  哈，怪人。随便吧。\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  我可不想为了这么点事还要再跑一趟，没有工匠在，但这里不是还有你吗。\n[name=\"芳汀\"]  反正也只是例行公事的检查，别那么较真。怎么样，这位朋友，帮我简单看一下，然后填个证明就行。\n[Dialog]\n[Delay(time=0.7)]\n[PlaySound(key=\"$g_card_10cardsrelease\")]\n[Delay(time=0.7)]\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"？？？\"]  武器可靠性证明？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  没错。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"？？？\"]  武器可靠性证明需要两位工匠同时进行检查后签字确认。\n[name=\"？？？\"]  我算是还在实习的助手，就算签上自己的名字也不管用，帮不了你这个忙。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  需要两个人签字，这里有你我两个人，这不是正好吗。\n[name=\"芳汀\"]  我自己的法杖，自己最清楚，不会有什么问题的。只要不出事，就没人会知道，没人知道，就是没有问题，不是吗。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"？？？\"]  啊这个想法有意思。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"？？？\"]  但还是别小看这里的其他人会比较好哦，特别是比较严肃的那几位。\n[name=\"？？？\"]  万一出了事，就是重大事故了，别说我们，连不在场的工匠都要一起受罚。\n[Character(name=\"char_271_arene_1#7\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  啧，死板，麻烦。\n[Character(name=\"char_271_arene_1#7\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"？？？\"]  但是有效。有些人就是想不起来维护武器。\n[name=\"？？？\"]  总比在战场上换弦要来得轻松。\n[Character(name=\"char_271_arene_1#7\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  哪会有那种傻子？\n[Dialog]\n[Character]\n[Delay(time=0.5)]\n[Character(name=\"char_271_arene_1#4\")]\n[name=\"芳汀\"]  算了。既然如此，那就——\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  只请你帮忙看下武器。\n[name=\"芳汀\"]  这还是可以的吧。总不能真的白跑一趟，那也有点让人不爽。\n[Character(name=\"char_211_adnach_1\")]\n[name=\"？？？\"]  啊......也好。稍等。\n[name=\"？？？\"]  等我拧好这最后一颗螺丝——好了。\n[Dialog]\n[Character]\n[Delay(time=1)]\n[PlaySound(key=\"$d_gen_walk_n\")]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"？？？\"]  久等了。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"？？？\"]  ......嗯，看你的表情，看来你还是在盘算什么，并没有打算彻底放弃呢。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  这是说什么，我可听不明白。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  来，给你。我的法杖。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"？？？\"]  哎.....算了。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"？？？\"]  好吧，那我来检查一下。\n[name=\"？？？\"]  （小声）只要小心一些，别出事故，应该就没关系了吧......\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  就拜托你啦。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"？？？\"]  武器的检查会需要一些时间，要麻烦你在这里稍微等一下。\n[name=\"？？？\"]  参观的话可以随意，但工坊里的东西最好还是不要随便碰，总有些工匠师傅喜欢做些比较危险的东西......\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"？？？\"]  你明白吧？那种做到一半的半成品只会更危险。\n[name=\"？？？\"]  而且，这里还有不少混杂着源石成分的矿石......就算你是感染者，也最好小心一些。\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  不劳担心。我还没有那么莽撞。\n[Character(name=\"char_271_arene_1#6\")]\n[name=\"芳汀\"]  ......等等。\n[Dialog]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  怪了，我有提过自己是感染者这件事吗？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"？？？\"]  没有。但要看出来不难。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  说说，怎么看出来的？很明显吗？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"？？？\"]  嗯......解释起来有点难，我也说不清。\n[name=\"？？？\"]  就靠多多观察吧，从大家的神情、动作，还有行为逻辑上，都可以看出很多东西。\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  听起来像是在糊弄人。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"？？？\"]  是真的啦。\n[Dialog]\n[Character]\n[Delay(time=1)]\n[Character(name=\"char_211_adnach_1\")]\n[name=\"？？？\"]  只有这根法杖要检查吗？如果还有其他的，我也可以帮你看一下。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  没有了。\n[name=\"芳汀\"]  很遗憾，我没有守护铳需要检查。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"？？？\"]  真巧，我也没有。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  ......\n[Character(name=\"char_271_arene_1#6\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  你这人真奇怪，有点意思。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"？？？\"]  嗯......谢谢夸奖？\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  没夸你。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  这根法杖没有使用上的问题。随便看看就行了。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"？？？\"]  还是要仔细点的。\n[dialog]\n[Character(name=\"char_211_adnach_1\")]\n[PlaySound(key=\"$dooropenquite\")]\n[Delay(time=1)]\n[Character(name=\"char_211_adnach_1#3\")]\n[name=\"？？？\"]  嗯......材质很高端呢。\n[name=\"？？？\"]  法杖上悬挂着的东西也是施法源吗？\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  是。不过更多是个人兴趣，能打人。\n[Character(name=\"char_211_adnach_1\")]\n[name=\"？？？\"]  那也挺好的，近身战会很有利。\n[Character]\n[Dialog]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  工匠，怎么称呼？\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  我可还算不上工匠啊。\n[name=\"安德切尔\"]  预备行动组A4小队的成员，安德切尔，顺带在这里兼职当学徒。\n[name=\"安德切尔\"] 你怎么称呼？\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  芳汀。\n[Character(name=\"char_211_adnach_1#2\")]\n[name=\"安德切尔\"]  听上去很适合你呢。\n[Character]\n[Dialog]\n[Delay(time=1)]\n[Character(name=\"char_211_adnach_1\")]\n[PlaySound(key=\"$dooropenquite\")]\n[Delay(time=1)]\n[name=\"安德切尔\"]  嗯......主要施术单元没有损伤，下面悬挂的施术源表面也没有明显的裂痕或破碎痕迹。\n[name=\"安德切尔\"]  看起来状态不错。\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  嗯哼，我说过了，不会有什么问题。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  那接下来，能请你用法杖驱动一下自己的源石技艺吗？这样我可以从运行反馈里确认法杖的运行状态。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  就这么施术？我的源石技艺不怎么平和哦。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  哦，能简单描述下类型吗？\n[Character(name=\"char_271_arene_1#7\")]\n[name=\"芳汀\"]  分解、毒素。\n[Delay(time=0.8)]\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  呜哇，听起来确实挺危险的。\n[name=\"安德切尔\"]  那就把法杖放在旁边的透明柜子里，然后把手从柜子旁的入口伸进去，使用一下能力就好。\n[name=\"安德切尔\"]  这样就算你的能力有强挥发性，也完全不用担心。\n[name=\"安德切尔\"]  是不是很方便？\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  好烦......\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  行，好，就这样吧。\n[Dialog]\n[PlaySound(key=\"$doorclosequite\")]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  可以了？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  可以了，我操作下机器。\n[name=\"安德切尔\"]  如果感到腕部受到压迫，请不要在意，那是正常现象。\n[PlaySound(key=\"$sheildimpact\",volume=0.7)]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  好了！\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"安德切尔\"]  现在可以使用你的源石技艺啦，不用担心会伤到我。\n[Character]\n[Dialog]\n[Character(name=\"char_271_arene_1#7\",block=true)]\n[name=\"芳汀\"]  谁担心了？\n[Character(name=\"char_271_arene_1\",block=true)]\n[name=\"芳汀\"]  （使用源石技艺）\n[PlaySound(key=\"$e_atk_magic_m\",volume=0.8)]\n[delay(time=2)]\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"安德切尔\"]  好了，完成了！\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  接下来就全是我的工作了，请把法杖交给我，然后到旁边去休息一下。\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  哦。\n[PlaySound(key=\"$d_gen_walk_n\")]\n[Character]\n[Dialog]\n[Delay(time=2)]\n[Character(name=\"char_271_arene_1#6\")]\n[name=\"芳汀\"]  我还以为萨科塔人都只对铳和弩感兴趣呢，看你好像对法杖也很熟悉，域外的萨科塔都是这样吗？\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  只是带我的铁锤师傅擅长维护锻造法杖，小队里也有朋友的武器需要保养。\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  擅长做法杖，代号却叫铁锤？\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  是这样的。\n[name=\"安德切尔\"]  师傅们起名随意的很，我第一次来实习的时候也愣了半天。\n[name=\"安德切尔\"]  喏，师傅们的工位牌都挂那里。\n[name=\"安德切尔\"]  你要是感兴趣可以随便看。\n[Character(name=\"char_271_arene_1#4\")]\n[name=\"芳汀\"]  ......\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  那我就不客气了。\n[Character]\n[Dialog]\n[Delay(time=0.5)]\n[Character(name=\"char_271_arene_1\")]\n[Dialog]\n[Delay(time=1)]\n[name=\"芳汀\"] （第三维修工坊工匠名单）\n[name=\"芳汀\"] （铁锤、锡罐、石头、毁盾、弃械）\n[name=\"芳汀\"] （这也太随意了......）\n[Character(name=\"char_271_arene_1#4\")]\n[name=\"芳汀\"] （不过，这或许会是一个好机会......）\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  工匠们都要把自己的签名铸在工牌上吗？\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  怎么会。\n[name=\"安德切尔\"]  那只是师傅们一时赌气的产物。\n[name=\"安德切尔\"]  有一天他们在工艺上出了点争执，然后所有人都用自己熟悉的工艺给打了块工牌和别人比试。\n[name=\"安德切尔\"]  消了气之后，大家都觉得这还挺好玩，所以就约定在工坊里用自己做的工牌，外出的时候用公司配发的统一工牌。\n[Character(name=\"char_211_adnach_1#2\")]\n[name=\"安德切尔\"]  有意思吧。\n[Character(name=\"char_271_arene_1#4\")]\n[name=\"芳汀\"] 很有......意思。\n[Dialog]\n[Character(name=\"char_271_arene_1\")]\n[Delay(time=1)]\n[name=\"芳汀\"] （每个人的签名都在上面。）\n[name=\"芳汀\"] （全是手写。）\n[name=\"芳汀\"]（不错。能省我不少事情，只要随便挑两个弄到手......）\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]（偷瞄）\n[Delay(time=1)]\n[name=\"芳汀\"]（哈，时机正好。）\n[Dialog]\n[Character(name=\"char_271_arene_1#7\")]\n[PlaySound(key=\"$tactfulboost\",volume=0.6)]\n[name=\"芳汀\"]（拓印......)\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"](成了。源石技艺还真便利。）\n[Character(name=\"char_271_arene_1#6\")]\n[name=\"芳汀\"]（嗯？这个签名，还是拉特兰语的。）\n[Dialog]\n[Character]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  安德切尔，这个工匠是？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  嗯？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"安德切尔\"]  哦，那是弃械师傅。\n[name=\"安德切尔\"]  从拉特兰来，和我们一样。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  但师傅从不做铳械相关的东西，只喜欢打剑。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  怎么，难道他也没有守护铳？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  守护铳师傅还是有的啦，师傅只是不喜欢铳。\n[name=\"安德切尔\"]  听说他把铳留在了拉特兰的家中，再也没有回去过。\n[CameraShake(duration=1, xstrength=4, ystrength=4, vibrato=20, randomness=20, fadeout=true)]\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#5\",focus=2)]\n[name=\"安德切尔\"]  “那个到处都是弹壳的地方，我见了就头疼。”\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  师傅是这么说的。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  说的不错。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  我有预感，我会和这个人合得来。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"安德切尔\"]  唉，可惜师傅因为这事和家里人闹掰了，拉特兰都不方便回去。\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  如果那位师傅真的像你说的那样讨厌铳，在拉特兰生活，估计不会有太多美好回忆吧。\n[name=\"芳汀\"]  即便如此，也还是会想回去吗？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  拉特兰真的有这么值得怀念？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  这么一说，这个问题我好像没想过。\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  那么。\n[name=\"芳汀\"]  你呢，你怀念拉特兰吗？\n[Delay(time=1)]\n[Character]\n[Dialog]\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  嗯......很难说。\n[name=\"安德切尔\"]  ......\n[name=\"安德切尔\"]  我很久以前就不在拉特兰生活了。\n[name=\"安德切尔\"]  因为光环的原因。\n[name=\"安德切尔\"]  而在之后又得了矿石病，就更加没法回去了。\n[Character(name=\"char_271_arene_1#6\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  所以，你的光环位置......不是因为矿石病？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  是啊，我天生就和别人不一样。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  那可......真惨。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  因为小时候爸妈总是笑着这样说，总是夸奖我，所以我到现在都觉得这确实是件幸运的事。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"安德切尔\"]  天生就与众不同，听起来就很帅气吧？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"安德切尔\"]  啊当然，这只是玩笑话。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  不必谦虚。你确实是个与众不同的怪人。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  是吗？其实我觉得自己还蛮普通的啊......\n[name=\"安德切尔\"]  和其他萨科塔人都差不多，共通点很多。\n[Character(name=\"char_271_arene_1#6\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  比如说？什么共通点？\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  比如......嗯，比如我也戴不上套头帽。\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  ......\n[Dialog]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1#2\")]\n[CameraShake(duration=1, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"芳汀\"]  哈哈哈哈哈哈哈！\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  咳咳 ，嗯，是，确实。\n[name=\"芳汀\"]  那东西戴上就像是把人裹在没缝的蛋里一样，恶心。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  除了那些专业训练过的家伙，比如公证所还有教宗骑士那群人，还有一些战斗狂之外，没多少萨科塔人能忍受那个吧。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  是这样没错。\n[name=\"安德切尔\"]  总之，大概是因为光环的原因吧，我没能通过持铳的资格审查，在那之后没多久我们一家就离开拉特兰了。\n[name=\"安德切尔\"]  矿石病也是在之后才染上的。\n[name=\"安德切尔\"]  拉特兰的土地不接纳感染者，你在感染后，也没再回去过吧？\n[Character(name=\"char_271_arene_1#5\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  ......是。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  所以，我对拉特兰......并不是很怀念。\n[name=\"安德切尔\"]  小时候发生的许多事情我都不太记得了。\n[name=\"安德切尔\"]  ......\n[Character]\n[Dialog]\n[Delay(time=0.8)]\n[Character(name=\"char_211_adnach_1#2\")]\n[name=\"安德切尔\"]  啊，不过我还记得街角的若望师傅！\n[name=\"安德切尔\"]  他教会了我做甜点，在我走的时候还把店里所有甜点的制作方式印成图册送给我了！\n[Character(name=\"char_271_arene_1#4\")]\n[name=\"芳汀\"]  （啧......来了，萨科塔们逃不过的甜食。）\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"安德切尔\"]  如果我没在搬家的时候丢失那本图册的话，唉。\n[Character(name=\"char_271_arene_1#5\")]\n[name=\"芳汀\"]  （每年父母都会给我准备一个大蛋糕，他们知道我吃不下，却还是把我一个人留在家里，对付那个，甜到发腻的糖块。）\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"安德切尔\"]  但至少，我可以把弹头麦芬做得和若望师傅的麦芬一丝不差。\n[name=\"安德切尔\"]  我到现在还记得甜点店里的麦香味。\n[Character(name=\"char_271_arene_1#7\")]\n[name=\"芳汀\"]  （我也记得很清楚，香味，每次闻到就觉得喉咙不舒服。）\n[Dialog]\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  ......\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1#7\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  咦，原来你不喜欢甜点啊。\n[name=\"安德切尔\"]  这还是挺少见的，我头一次见到不喜欢甜点的拉特兰人。\n[Character(name=\"char_271_arene_1#6\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  ......又是你看出来的？\n[Character(name=\"char_271_arene_1#6\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  嗯。\n[Character(name=\"char_271_arene_1#6\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"安德切尔\"]  一般我不太会这样直接说出来，因为有很多人会不太开心，有时我就干脆不说话了。\n[name=\"安德切尔\"]  不过，我觉得你看起来不像是很在意这些。\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  行吧，确实。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  我不在意哦。怪人总比普通人有意思。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  不喜欢甜点的话，那你可比我要怪多了。\n[name=\"安德切尔\"]  下次我可以尝试做点不太甜的点心，到时候再喊你来尝尝。\n[name=\"安德切尔\"]  也不知道老师傅现在还好吗......\n[name=\"安德切尔\"]  一会或许可以请后勤的信使们帮个忙。\n[Character]\n[Dialog]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1#4\")]\n[name=\"芳汀\"]  ......\n[Dialog]\n[Delay(time=1)]\n[name=\"芳汀\"]  我明白了一件事。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  啊？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  你是个地地道道的拉特兰萨科塔。\n[name=\"芳汀\"]  虽然持不了铳，光环也不正。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  嗯......\n[name=\"安德切尔\"]  你说得没错。\n[name=\"安德切尔\"]  我在那里存有回忆，不能回去的只是城市，不是家。故乡是不论何时都可以触碰的东西。\n[name=\"安德切尔\"]  城际间的来回、书信、传讯、照片。\n[name=\"安德切尔\"]  如果真的想怀念，不是很方便吗。\n[Dialog]\n[Character]\n[name=\"？？？\"]  这话说得还有点道理。\n[name=\"？？？\"]  但有人就是喜欢闻闻气味，摸摸土墙，来个故地重游，不然就要得上思乡症咯。\n[name=\"？？？\"]  虽然我都无所谓就是了。\n[Character]\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.9)]\n[Character(name=\"char_302_glaze_1\",fadetime=1,block=true)]\n[Delay(time=2)]\n[name=\"？？？\"]  只要你们分享甜点的时候带上我就行，不太甜的我也吃。\n[Delay(time=1)]\n[Dialog]\n[Character(name=\"char_302_glaze_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"安德切尔\"]  你好，安比尔。\n[Character(name=\"char_302_glaze_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"安比尔\"]  好啊。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#2\",focus=2)]\n[name=\"安比尔\"]  喔，你也好，新来的。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  我该叫你什么，小帅哥？\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  芳汀。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#2\",focus=2)]\n[name=\"安比尔\"]  你好芳汀。\n[Delay(time=0.5)]\n[Character(name=\"char_302_glaze_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"安比尔\"]  安德切尔，还是老样子，枪就拜托你啦。\n[Character(name=\"char_302_glaze_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  你放那儿就好，我还在处理芳汀的武器。\n[Character(name=\"char_302_glaze_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"安比尔\"]  好——\n[dialog]\n[Delay(time=0.5)]\n[Character(name=\"char_302_glaze_1#3\")]\n[name=\"安比尔\"]  唔，什么味道，香香的，好像不是市面上有得卖的种类......\n[Character(name=\"char_302_glaze_1#2\")]\n[name=\"安比尔\"]  有人涂香水了吗？\n[Character(name=\"char_271_arene_1#2\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  如果你喜欢，可以来我这里多吸几口。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  嗯......那还是算了。\n[name=\"安比尔\"]  总觉得没什么好事。\n[Delay(time=0.5)]\n[name=\"安比尔\"]  不过啊，如果你的香气能让我昏睡一天的话，我倒是可以考虑一下。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#4\",focus=2)]\n[name=\"安比尔\"]  那个成天板着脸的家伙又要来找我“履行义务”了。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  与其想办法逃跑，还是昏迷一天比较实际。\n[name=\"安比尔\"]  不过就他们的死脑筋程度，昏迷一天可能还不够。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#4\",focus=2)]\n[name=\"安比尔\"]  好烦。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  板着脸的家伙，你是说公证所的人？\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#4\",focus=2)]\n[name=\"安比尔\"]  还能有谁啊。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  你就不会被他们找吗？说是要监督履行公民责任与义务什么的。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  也会。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  不过上一个在我午睡的时候突然砸我的门的家伙，现在还在为了替我解决一些事情而四处奔走呢。\n[name=\"芳汀\"]  虽然他们很麻烦，但他们也很擅长处理麻烦。\n[name=\"芳汀\"]  只要用人用得好，那点麻烦不算什么。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#2\",focus=2)]\n[name=\"安比尔\"]  哇哦，你说话像个反派。挺不错的嘛。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  我该说谢谢夸奖吗？\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  倒也不用。\n[Dialog]\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.9)]\n[Delay(time=1)]\n[Character(name=\"char_211_adnach_1#2\")]\n[name=\"安德切尔\"]  芳汀，你的法杖已经检查完毕了！\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  除了施术回路有些腐蚀，其他的地方都没问题。\n[name=\"安德切尔\"]  轻微的腐蚀不会影响到施术，但如果你要做养护，我现在也可以帮你处理一下。\n[name=\"安德切尔\"]  下午等工匠们回来，你就可以找他们签可靠性证明了。\n[name=\"安德切尔\"]  （小声）虽然你可能已经不需要了吧。\n[name=\"安德切尔\"]  来，拿好。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  谢谢。\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  接下来是安比尔的长铳——嘿。\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.9)]\n[Character(name=\"char_211_adnach_1\",fadetime=0.7,block=true)]\n[dialog]\n[Delay(time=1)]\n[Character(name=\"char_302_glaze_1#2\")]\n[name=\"安比尔\"]  拜托啦。\n[Delay(time=0.5)]\n[Dialog]\n[Character(name=\"char_302_glaze_1\",name2=\"char_271_arene_1#6\",focus=2)]\n[name=\"芳汀\"]  你......不自己调试铳吗？\n[Character(name=\"char_302_glaze_1\",name2=\"char_271_arene_1\",focus=1)]\n[name=\"安比尔\"]  调呀。\n[name=\"安比尔\"]  但有时候就是懒得调，怎么办呢。\n[Character(name=\"char_302_glaze_1\",name2=\"char_271_arene_1\",focus=2)]\n[name=\"芳汀\"]  那就等着它坏掉。\n[Character(name=\"char_302_glaze_1#4\",name2=\"char_271_arene_1\",focus=1)]\n[name=\"安比尔\"]  这个嘛......还是不行的。\n[Character(name=\"char_302_glaze_1\",name2=\"char_271_arene_1\",focus=1)]\n[name=\"安比尔\"]  没了它就领不了工资。\n[name=\"安比尔\"]  没了工资就连偷懒的机会都不会有。\n[name=\"安比尔\"]  我才不会做这种傻事。\n[Character(name=\"char_302_glaze_1\",name2=\"char_271_arene_1#4\",focus=2)]\n[name=\"芳汀\"]  哼......你还挺正经的。\n[Character(name=\"char_302_glaze_1\",name2=\"char_271_arene_1\",focus=1)]\n[name=\"安比尔\"]  如果生活里真的可以用不上铳枪，把它放在角落里堆灰也不是不能接受啦。\n[name=\"安比尔\"]  哦，在拉特兰可能是有机会的，但要是真积灰，第二天就会被不知哪里冒出来的亲戚朋友怒目瞪视，很烦。\n[Character(name=\"char_302_glaze_1#4\",name2=\"char_271_arene_1\",focus=1)]\n[name=\"安比尔\"]  所以，我放弃了。\n[Dialog]\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.9)]\n[Delay(time=1)]\n[Character]\n[Character(name=\"char_211_adnach_1#2\",fadetime=0.5,block=true)]\n[name=\"安德切尔\"]  安比尔，铳没有问题。\n[Character(name=\"char_302_glaze_1\")]\n[name=\"安比尔\"]  本来就没问题，上周刚校过。\n[name=\"安比尔\"]  帮我擦一下上油就可以啦。\n[Character(name=\"char_211_adnach_1\")]\n[name=\"安德切尔\"]  好吧......\n[Dialog]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.9)]\n[Character(fadetime=1,block=true)]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  这时候你是不是觉得铳带在身边很累赘？\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  还好。\n[name=\"安比尔\"]  办法总会有的。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  就像你离开拉特兰，跑来这里那样？\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  嗯？\n[dialog]\n[Delay(time=1)]\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#5\",focus=2)]\n[name=\"安比尔\"]  你真的很不客气，对刚见面的女孩子说话这么直白，会不受欢迎的哦？\n[Character(name=\"char_271_arene_1#4\",name2=\"char_302_glaze_1#5\",focus=1)]\n[name=\"芳汀\"]  那真是不好意思，你感到被冒犯了吗？\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  倒是还好。\n[Character]\n[Dialog]\n[Delay(time=0.5)]\n[Character(name=\"char_302_glaze_1#4\")]\n[name=\"安比尔\"]  差不多，就算是那样吧。我的确不太适合那里。\n[Character(name=\"char_302_glaze_1\")]\n[name=\"安比尔\"]  比起当个守城小工，天天被人唠叨荣耀荣耀的，我还是更愿意让自己的钱包鼓一点。\n[name=\"安比尔\"]  过得自在一点，舒服一点。\n[name=\"安比尔\"]  挺好。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=1)]\n[name=\"芳汀\"]  看来你对拉特兰没什么留念。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1\",focus=2)]\n[name=\"安比尔\"]  只要过得好，哪里都行吧。\n[name=\"安比尔\"]  再说，也没人规定萨科塔要一辈子呆在拉特兰啦。\n[Character(name=\"char_271_arene_1\",name2=\"char_302_glaze_1#2\",focus=2)]\n[name=\"安比尔\"]  大地那么广，多看看嘛。\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.9)]\n[Delay(time=1)]\n[Dialog]\n[Character(name=\"char_211_adnach_1#2\")]\n[name=\"安德切尔\"]  枪好了安比尔！\n[Character(name=\"char_302_glaze_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"安比尔\"]  谢啦。\n[name=\"安比尔\"]  唔，比我擦得亮多了。\n[Character(name=\"char_302_glaze_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"安比尔\"]  那你们慢慢聊，我先回去休息了，再见。\n[Character(name=\"char_302_glaze_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  再见！\n[Dialog]\n[Character(name=\"char_302_glaze_1\")]\n[Delay(time=0.8)]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.9)]\n[Character(fadetime=1,block=true)]\n[Delay(time=2)]\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  ......\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#2\",focus=2)]\n[name=\"安德切尔\"]  快到饭点了，芳汀你还有什么需要我帮忙的吗？\n[name=\"安德切尔\"]  没有的话我要锁工坊的门去吃饭了。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  ？\n[Delay(time=0.5)]\n[name=\"芳汀\"]  好。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=2)]\n[name=\"安德切尔\"]  要不要一起来？\n[Character(name=\"char_271_arene_1#4\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  不了，我和那位叫送葬人的公证所干员有约，他好像有点事要通知我。\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  你说顺带把安比尔出没的情报带给他，他会不会卖我个人情？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  呃？说笑？\n[Character(name=\"char_271_arene_1#2\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  是哦。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#6\",focus=2)]\n[name=\"安德切尔\"]  你太爱开玩笑啦......\n[name=\"安德切尔\"]  虽然我可以看得出，但是其他人或许会产生误会，还是稍微注意一点比较好哦。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  不劳担心。\n[name=\"芳汀\"]  对了，下午你还在这里吗？\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1#3\",focus=2)]\n[name=\"安德切尔\"]  嗯？我会在啊。吃完午饭我就会回来。\n[Character(name=\"char_271_arene_1\",name2=\"char_211_adnach_1\",focus=1)]\n[name=\"芳汀\"]  好。\n[Dialog]\n[Delay(time=0.7)]\n[Character(name=\"char_271_arene_1\")]\n[name=\"芳汀\"]  你知道吗，虽然你的观察力确实不一般，但你还是看错了一件事。\n[name=\"芳汀\"]  下午我还会来的。\n[name=\"芳汀\"]  那位弃械师傅的故事听起来很有意思，如果是为了见他一面，再跑一趟也不是不行。\n[name=\"芳汀\"]  那就下午再见了。\n[Dialog]\n[PlaySound(key=\"$d_gen_dooropen\",   volume=0.9)]\n[Character(name=\"char_271_arene_1\",fadetime=1,block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Delay(time=2)]\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.9)]\n[Delay(time=1)]\n[name=\"芳汀\"]  我回来了，老师。\n[name=\"芳汀\"]  当然，我当然已经去过工坊了。\n[name=\"芳汀\"]  啊......但是这个不可以交给您。\n[name=\"芳汀\"]  您看出来了？工坊不巧没有人在，这上面的签名是拓印的，不是工匠本人的签名。\n[name=\"芳汀\"]  唉，看来就算原本想拿这个交差，也还是会被识破啊。罗德岛的博士果然很敏锐，安德切尔那家伙倒是没说错。\n[name=\"芳汀\"]  放心，下午我还会再去一趟的。再给我一份证明书吧，等工匠们参加完比赛，我就可以问他们要真正的签名了。\n[name=\"芳汀\"]  嗯？我突然变老实了？\n[name=\"芳汀\"]  哈哈，别这么说嘛，我一直都很听老师的话，不是吗。\n[name=\"芳汀\"]  哎，老师，您那是什么表情啊。\n[name=\"芳汀\"]  转变心意的理由？\n[name=\"芳汀\"]  嗯......\n[Dialog]\n[Delay(time=1)]\n[name=\"芳汀\"]  发现了不少有意思的人，为此花费一些时间也不错。\n[name=\"芳汀\"]  怎么样。\n[name=\"芳汀\"]  这听起来算不算是一个好理由？\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Dialog]\n[Character]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}