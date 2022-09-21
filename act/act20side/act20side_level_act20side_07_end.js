var items = {"brief": "为了让斯第奇敢于直面穹顶，不留下遗憾，他的朋友们奔走努力着。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")]\n[stopmusic]\n[Dialog]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"30_g11_malistgarden\",screenadapt=\"coverall\")] \n[Delay(time=1)]\n[Character(name=\"char_empty\",name2=\"avg_npc_569_1#2$1\")]\n[PlaySound(key=\"$d_avg_summercicada\",volume=0.3, loop=true, channel=\"a\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=2)]\n[PlaySound(key=\"$radio\",volume=0.6)]\n[name=\"广播\"]各位际崖城的居民，你们好。\n[name=\"广播\"]耶奇大师的勘测结果已经出炉。\n[name=\"广播\"]活性源石矿脉的爆发时间，大约在二十五天后。\n[name=\"广播\"]从现在开始，际崖城将正式进入撤离的准备阶段。\n[name=\"广播\"]接下来，经过各位代表的讨论后，将在合适的时间于广场举行一场全体会议。\n[name=\"广播\"]届时，我们将讨论具体的撤离方案，以及城市的遗容。\n[name=\"广播\"]请各位际崖城居民注意收听广播。\n[Dialog]\n[StopSound(channel=\"a\", fadetime=2)]\n[Delay(time=1)]\n[playMusic(intro=\"$m_dia_street_intro\",key=\"$m_dia_street_loop\", volume=0.4)]\n[Delay(time=1)]\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.7)]\n[Character(name=\"avg_npc_567_1#1$1\",name2=\"avg_npc_569_1#2$1\",fadetime=0.5)]\n[characteraction(name=\"left\", type=\"move\", xpos=-200, fadetime=0, block=false)]\n[characteraction(name=\"left\", type=\"move\", xpos=200, fadetime=1.5, block=false)]\n[Delay(time=2)]\n[Character(name=\"avg_npc_567_1#1$1\",name2=\"avg_npc_569_1#2$1\",focus=1)]\n[name=\"卡奇·叙光\"]黛柯绮，醒醒，黛柯绮。\n[Character(name=\"avg_npc_567_1#1$1\",name2=\"avg_npc_569_1#2$1\",focus=2)]\n[name=\"睡着的黛柯绮·银币\"]......机器人斯第奇，真听话。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#2$1\",focus=1)]\n[name=\"卡奇·叙光\"]......黛柯绮，黛柯绮。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#2$1\",focus=2)]\n[name=\"睡着的黛柯绮·银币\"]机器人卡奇，笨笨的。\n[name=\"睡着的黛柯绮·银币\"]你们，打一架。\n[Character(name=\"avg_npc_567_1#3$1\",name2=\"avg_npc_569_1#2$1\",focus=1)]\n[name=\"卡奇·叙光\"]你到底在做什么梦啊。\n[Dialog]\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#2$1\")]\n[characteraction(name=\"left\", type=\"move\", xpos=100, fadetime=1.5, block=true)]\n[Delay(time=2)]\n[CameraShake(duration=0.3, xstrength=30, ystrength=30, vibrato=30, randomness=90, fadeout=true, block=false)]\n[name=\"卡奇·叙光\"]黛柯绮！醒醒！\n[Dialog]\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#4$1\")]\n[Delay(time=1)]\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#1$1\",focus=2)]\n[name=\"黛柯绮·银币\"]嗯？怎么了？\n[Dialog]\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#1$1\")]\n[characteraction(name=\"left\", type=\"move\", xpos=-100, fadetime=1, block=true)]\n[Delay(time=1)]\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#1$1\",focus=1)]\n[name=\"卡奇·叙光\"]......我还想问你呢，你怎么又在斯第奇的花园里午睡。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#8$1\",focus=2)]\n[name=\"黛柯绮·银币\"]因为斯第奇的花园很安静啊。\n[Character(name=\"avg_npc_567_1#1$1\",name2=\"avg_npc_569_1#8$1\",focus=1)]\n[name=\"卡奇·叙光\"]看你睡得这么死，肯定也没听到广播吧。\n[Character(name=\"avg_npc_567_1#1$1\",name2=\"avg_npc_569_1#1$1\",focus=2)]\n[name=\"黛柯绮·银币\"]发生什么事了吗？\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#1$1\",focus=1)]\n[name=\"卡奇·叙光\"]......耶奇大师去湖对岸勘测过后，发现了源石矿脉被之前的地震拉扯到了隧道出口的附近，而且活性化已经十分厉害了。\n[name=\"卡奇·叙光\"]我们接下来要开一次全体会议，决定如何避难。\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#5$1\",focus=2)]\n[name=\"黛柯绮·银币\"]哦。\n[name=\"黛柯绮·银币\"]但是，你应该不是特意来告诉我这个的吧？\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#5$1\",focus=1)]\n[name=\"卡奇·叙光\"]......没错。\n[name=\"卡奇·叙光\"]我是来找斯第奇的。\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#1$1\",focus=2)]\n[name=\"黛柯绮·银币\"]斯第奇的话，他应该乘坐我借给他的船去湖对岸找耶奇大师他们去了。\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#1$1\",focus=1)]\n[name=\"卡奇·叙光\"]是吗，那我在这里等他吧。\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#5$1\",focus=2)]\n[name=\"黛柯绮·银币\"]你找他有事吗？\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#5$1\",focus=1)]\n[name=\"卡奇·叙光\"]嗯，我希望，他......能回到设计部来参与穹顶的设计修改。\n[name=\"卡奇·叙光\"]既然际崖城面临毁灭，我们关于这座城市地标的比拼已经毫无意义，但好在我们还有些时间。\n[name=\"卡奇·叙光\"]那么，我们在之后的大会上肯定需要决定，该如何处理地震留下的穹顶缺口。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_569_1#10$1\",focus=2)]\n[name=\"黛柯绮·银币\"]就那么放着不管我觉得也可以吧？\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#10$1\",focus=1)]\n[name=\"卡奇·叙光\"]即使如此，那也要城里的居民们都同意才行。\n[name=\"卡奇·叙光\"]让一座城市在这片土地上存在的最后一瞬间趋于完美，这对于每个建筑设计师来说都是非常有意义的事情。\n[name=\"卡奇·叙光\"]我们会对这座城市进行最后一次观察，并且给出一个在有限的时间里能够完成的方案。\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#1$1\",focus=2)]\n[name=\"黛柯绮·银币\"]所以，你希望斯第奇能够回去。\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#1$1\",focus=1)]\n[name=\"卡奇·叙光\"]嗯。\n[name=\"卡奇·叙光\"]我不知道芬奇大师为什么会忽然离开，别人或许会以为，是因为他们师徒的感情淡了，或者缘分尽了，但我知道，这是不可能的。\n[name=\"卡奇·叙光\"]作为芬奇大师过去的助手，我比任何人都了解，他虽然是个十分豪放的人，但心底里其实非常关心斯第奇。\n[name=\"卡奇·叙光\"]对他来说，斯第奇就像他的亲生儿子一样。\n[name=\"卡奇·叙光\"]所以，他的离开一定和斯第奇有密不可分的关系。\n[name=\"卡奇·叙光\"]而斯第奇在大师离开后的情况，身为工业代表你也看在眼里。\n[name=\"卡奇·叙光\"]他从一次次提出的方案被否决，到逐渐不再在设计部出现，在这中间，我一直想要帮他，却始终没有找到办法。\n[name=\"卡奇·叙光\"]这座穹顶，是斯第奇的老师，芬奇大师留给这座城市最宏伟的作品。\n[name=\"卡奇·叙光\"]但这座穹顶，对斯第奇来说，会不会反而是一种负担呢？\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_569_1#5$1\",focus=2)]\n[name=\"黛柯绮·银币\"]......\n[name=\"黛柯绮·银币\"]即使如此，你也不希望他留下遗憾，对吗？\n[Character(name=\"avg_npc_567_1#1$1\",name2=\"avg_npc_569_1#5$1\",focus=1)]\n[name=\"卡奇·叙光\"]嗯。\n[name=\"卡奇·叙光\"]这是最后的机会了，黛柯绮。\n[Character(name=\"avg_npc_567_1#1$1\",name2=\"avg_npc_569_1#1$1\",focus=2)]\n[name=\"黛柯绮·银币\"]真有你的风格。\n[Dialog]\n[Character]\n[Delay(time=1)]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.7)]\n[Character(name=\"avg_1026_gvial2_1#1$1\",name2=\"avg_npc_564_1#1$1\",fadetime=1)]\n[Delay(time=2)]\n[Character(name=\"avg_1026_gvial2_1#1$1\",name2=\"avg_npc_564_1#5$1\",focus=2)]\n[name=\"耶奇·地心\"]斯第奇，斯第奇！你在吗？\n[Character(name=\"avg_1026_gvial2_1#5$1\",name2=\"avg_npc_564_1#5$1\",focus=1)]\n[name=\"嘉维尔\"]嗯？怎么是你们两个？\n[Character(name=\"avg_npc_571_1#2$1\")]\n[name=\"极境\"]卡奇，原来你和黛柯绮是这种关系吗？\n[Character(name=\"avg_npc_569_1#10$1\")]\n[name=\"黛柯绮·银币\"]不是。\n[Character(name=\"avg_npc_571_1#1$1\")]\n[name=\"极境\"]哇哦，好果断。\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]你就别拿我开玩笑了，极境哥。\n[name=\"卡奇·叙光\"]耶奇大师，嘉维尔小姐，你们辛苦了。\n[Character(name=\"avg_npc_569_1#1$1\")]\n[name=\"黛柯绮·银币\"]我在这里午睡，他在这里等斯第奇回来。\n[Character(name=\"avg_npc_564_1#5$1\")]\n[name=\"耶奇·地心\"]斯第奇没有回来吗？\n[Character(name=\"avg_npc_569_1#4$1\")]\n[name=\"黛柯绮·银币\"]他不是应该给大师你们送设备去了吗？还闹出了不小的动静呢。\n[Character(name=\"avg_npc_564_1#6$1\")]\n[name=\"耶奇·地心\"]但他中途就不见了，我们都不知道他去哪了，结果他也没有回家吗......\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]特米米遇到过这小子，说他的表情好像很难受。\n[name=\"嘉维尔\"]你们有什么头绪吗？\n[Character(name=\"avg_npc_569_1#10$1\")]\n[name=\"黛柯绮·银币\"]我......不知道。\n[Character(name=\"avg_npc_567_1#2$1\")]\n[name=\"卡奇·叙光\"]......我可能知道。\n[dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[character(fadetime=0)]\n[Background(image=\"30_g5_library_indoor\",screenadapt=\"coverall\")] \n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[PlaySound(key=\"$getcast\")]\n[Character(name=\"avg_npc_576_1#1$1\",name2=\"avg_npc_576_1#1$1\",fadetime=0.5)]\n[Delay(time=1)]\n[name=\"奇怪的机械\"]祖玛玛，祖玛玛，这一列，也没有。\n[Character(name=\"avg_4055_bgsnow_1#1$1\",name2=\"char_416_zumama_1#1\",focus=2)]\n[name=\"森蚺\"]嗯，看看下一列吧。\n[Character(name=\"avg_4055_bgsnow_1#7$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]哎，我有些累了。\n[name=\"阿芙朵嘉\"]居然到现在都没找到......\n[Character(name=\"avg_4055_bgsnow_1#7$1\",name2=\"char_416_zumama_1#1\",focus=2)]\n[name=\"森蚺\"]你休息一下吧。\n[Character(name=\"avg_4055_bgsnow_1#4$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]关于刚才的问题，我还是想知道为什么，祖玛玛。\n[Character(name=\"avg_4055_bgsnow_1#1$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]你不会没有发现在杜林城邦的生活有多么美好。\n[name=\"阿芙朵嘉\"]这里没有贵族阴谋，没有勾心斗角——即使有，也都是可爱的。\n[name=\"阿芙朵嘉\"]即使是我们即将面临的灾难，杜林对其也有足够的预案，他们现在甚至能够悠闲地思考——\n[name=\"阿芙朵嘉\"]如何让际崖城以他们认为最好的姿态迎接毁灭。\n[Character(name=\"avg_4055_bgsnow_1#1$1\",name2=\"char_416_zumama_1#2\",focus=2)]\n[name=\"森蚺\"]我没有否定你的想法啊，阿芙朵嘉。\n[name=\"森蚺\"]我觉得你说的挺对的，杜林的生活挺好的。\n[Character(name=\"avg_4055_bgsnow_1#1$1\",name2=\"char_416_zumama_1#4\",focus=2)]\n[name=\"森蚺\"]我拒绝你的理由不是觉得你说的这些不好，而是......我不喜欢。\n[name=\"森蚺\"]要是到时候有提亚卡乌愿意来地下生活的话，我想，我也好，依娜姆也好，都不会阻止的。\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#4\",focus=1)]\n[name=\"阿芙朵嘉\"]为什么？我并不是单单因为自身的经历而排斥地面的生活。\n[name=\"阿芙朵嘉\"]在杜林城邦的这段日子里，我思考过许多次这样的事情。\n[name=\"阿芙朵嘉\"]我认为，从结果上来说，杜林人过的生活无疑是一种更好的，更有人文追求的生活。\n[name=\"阿芙朵嘉\"]但为什么你也好，嘉维尔也好，都对于一种更好的生活不感兴趣？\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#1\",focus=2)]\n[name=\"森蚺\"]......\n[name=\"森蚺\"]我的师父除了对于机械知识非常精通之外，也是个影视迷。\n[name=\"森蚺\"]她经常会拉着我看各种各样的东西，并且根本不管我感不感兴趣就给我讲解，久而久之，我也记住了一些。\n[name=\"森蚺\"]比如，她在看到剧中人开始长篇大论的时候，总是会说——\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#5\",focus=2)]\n[name=\"森蚺\"]“唉，这种义正词严地长篇大论的人，一般最后要么是反派，要么是主角的绊脚石，就不能设计点可爱的角色吗......”\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#5\",focus=1)]\n[name=\"阿芙朵嘉\"]......\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#1\",focus=2)]\n[name=\"森蚺\"]为什么你一定要说服我，或者说服嘉维尔呢？\n[Character(name=\"avg_4055_bgsnow_1#9$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]我......\n[Character(name=\"avg_npc_074\")]\n[name=\"大祭司\"]噢，顺便一提，小姑娘，关于杜林，你的看法实际上并不正确。\n[Character(name=\"avg_4055_bgsnow_1#6$1\")]\n[name=\"阿芙朵嘉\"]为什么？\n[Character(name=\"avg_npc_074\")]\n[name=\"大祭司\"]如果你说，在杜林城邦的生活是一种“更便捷”“更舒适”“更安全”之类的生活，我都不会反驳你。\n[name=\"大祭司\"]但你认为，杜林人过的生活是一种“更好的”生活，只有这一点，或许并不是这样。\n[name=\"大祭司\"]你是个聪明的孩子，不会不了解这其中的差别。\n[Character(name=\"avg_4055_bgsnow_1#7$1\")]\n[name=\"阿芙朵嘉\"]老先生......我暂且这么称呼您，我明白您的意思。\n[name=\"阿芙朵嘉\"]但是，难道说，我希望其他人过上物质上和精神上都更加富足的生活是错的吗？\n[Character(name=\"avg_npc_074\")]\n[name=\"大祭司\"]这是另一个问题，现在的你，只是希望从一场早已结束的辩论中挽回自己的一点颜面，不是吗？\n[Character(name=\"avg_4055_bgsnow_1#9$1\")]\n[name=\"阿芙朵嘉\"]......\n[dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[character(fadetime=0)]\n[Background(image=\"30_g8_malistroom\",screenadapt=\"coverall\")] \n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character(name=\"avg_1026_gvial2_1#9$1\")]\n[name=\"嘉维尔\"]也就是说，你觉得斯第奇因为心理压力太大，所以选择了逃避？\n[Character(name=\"avg_npc_567_1#2$1\")]\n[name=\"卡奇·叙光\"]是的。\n[name=\"卡奇·叙光\"]如果是这样的话，我想，他现在可能去了湖边的一座小房子里吧。\n[name=\"卡奇·叙光\"]在他搬到这栋房子来之前，那里是他和他的老师一起生活的地方。\n[Character(name=\"avg_npc_564_1#2$1\")]\n[name=\"耶奇·地心\"]卡奇，你明白我想说什么吧？\n[Character(name=\"avg_npc_567_1#4$1\")]\n[name=\"卡奇·叙光\"]如果最后决定要修改穹顶设计，而斯第奇还是不愿意的话，由我来，是吗？\n[Character(name=\"avg_npc_564_1#1$1\")]\n[name=\"耶奇·地心\"]这不仅仅是为了城市的遗容，从现实的角度来说，穹顶的加固也能为我们的撤离争取更多的时间。\n[name=\"耶奇·地心\"]我和芬奇是好朋友，对于他的不告而别我也搞不懂，所以之前，我也想着尽量照看一下他的弟子。\n[Character(name=\"avg_npc_564_1#8$1\")]\n[name=\"耶奇·地心\"]但凡事都有个界限。\n[Character(name=\"avg_npc_567_1#2$1\")]\n[name=\"卡奇·叙光\"]......嘉维尔小姐，能麻烦你去找一找斯第奇吗？\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]不用你说，我也正打算去呢，特米米自告奋勇去帮城里的人做事了，我正愁没事干呢。\n[Character(name=\"avg_1026_gvial2_1#2$1\")]\n[name=\"嘉维尔\"]现在看来，我和他之间可能有笔小账要算呢。\n[Character(name=\"avg_npc_567_1#2$1\")]\n[name=\"卡奇·叙光\"]......那就拜托你了。\n[Character(name=\"avg_1026_gvial2_1#1$1\")]\n[name=\"嘉维尔\"]那栋房子在哪？\n[Character(name=\"avg_npc_567_1#2$1\")]\n[name=\"卡奇·叙光\"]就在湖边，和这栋房子的风格很像，很独特，过去就能看到。\n[Character(name=\"avg_1026_gvial2_1#10$1\")]\n[name=\"嘉维尔\"]好嘞。\n[Dialog]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.7)]\n[Character(fadetime=0.5)]\n[Delay(time=2)]\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_571_1#10$1\",focus=2)]\n[name=\"极境\"]卡奇，你不去吗？\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#10$1\",focus=1)]\n[name=\"卡奇·叙光\"]我......我不知道在这种情况下，应该怎么面对斯第奇。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#1$1\",focus=2)]\n[name=\"极境\"]但你很关心他，不是吗？\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#1$1\",focus=1)]\n[name=\"卡奇·叙光\"]在芬奇大师不告而别后，我一直想要帮助他，却不知道该怎么做。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#1$1\",focus=2)]\n[name=\"极境\"]你啊，该说你是人太好了呢，还是人太太太好了呢。\n[name=\"极境\"]不过，你们杜林人确实整体上给我的感觉是这样没错。\n[Character(name=\"avg_npc_567_1#3$1\",name2=\"avg_npc_571_1#1$1\",focus=1)]\n[name=\"卡奇·叙光\"]欸？\n[Character(name=\"avg_npc_567_1#3$1\",name2=\"avg_npc_571_1#12$1\",focus=2)]\n[name=\"极境\"]出于我也不知道的原因，斯第奇其实是比较自卑的。\n[name=\"极境\"]对他这种性格的人来说，你以你认为平等的态度去和他交流，在他看来，其实就是一种高姿态的施压。\n[name=\"极境\"]因为对他来说，光是伪装出自己和你平等的态度就已经竭尽全力了。\n[name=\"极境\"]与人交流不是付出一片真心就一定能够有回报的。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#12$1\",focus=1)]\n[name=\"卡奇·叙光\"]那，我该怎么办？\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#1$1\",focus=2)]\n[name=\"极境\"]既然你喊我一声极境哥，那我这个做哥哥的，自然也要给你支两招。\n[name=\"极境\"]其实很简单，你不要去说什么我希望你和我公平竞争，不要跟他说，你有选择。\n[name=\"极境\"]你要封住他的退路，告诉他，你没得选，但我会和你一起努力。\n[name=\"极境\"]对于把自己关在自己制造的小空间里太久的人，有的时候，是需要一些刺激的。\n[Character(name=\"avg_npc_571_1#1$1\")]\n[name=\"极境\"]黛柯绮小姐觉得呢？\n[Character(name=\"avg_npc_569_1#5$1\")]\n[name=\"黛柯绮·银币\"]为什么要问我？\n[Character(name=\"avg_npc_571_1#1$1\")]\n[name=\"极境\"]我只是说了一些我的猜测，而你，显然是在场的人中最了解他的。\n[Character(name=\"avg_npc_569_1#10$1\")]\n[name=\"黛柯绮·银币\"]......斯第奇他确实是有些自卑的。\n[Character(name=\"avg_npc_569_1#1$1\")]\n[name=\"黛柯绮·银币\"]或许你说得确实没错吧，他需要的不是温柔的安慰，而是有人狠狠地拉他一把。\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#1$1\",focus=1)]\n[name=\"卡奇·叙光\"]这样，不会伤到他吗？\n[Character(name=\"avg_npc_567_1#4$1\",name2=\"avg_npc_571_1#10$1\",focus=2)]\n[name=\"极境\"]会，而且不一定会有好的效果。\n[name=\"极境\"]但是，如果如你所说，这是他最后的机会——\n[name=\"极境\"]你也要问问你自己，你究竟只是想要和他关系变好，还是说，即使关系恶化，你也希望他走出来？\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_571_1#10$1\",focus=1)]\n[name=\"卡奇·叙光\"]......\n[name=\"卡奇·叙光\"]我会去试试。\n[Character(name=\"avg_npc_567_1#2$1\",name2=\"avg_npc_571_1#1$1\",focus=2)]\n[name=\"极境\"]那我建议你快一点。\n[name=\"极境\"]不然的话，嘉维尔的拳头，可就不是“拉一把”那么简单了。\n[Character(name=\"avg_npc_567_1#1$1\")]\n[name=\"卡奇·叙光\"]哈哈，那我就先去了！\n[Dialog]\n[PlaySound(key=\"$rungeneral\", volume=0.7)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-400, fadetime=1.5,block=true)]\n[Delay(time=1)]\n[Character(fadetime=0.5)]\n[Delay(time=1)]\n[Character(name=\"avg_npc_569_1#1$1\")]\n[name=\"黛柯绮·银币\"]......\n[Dialog]\n[Character(name=\"avg_npc_569_1#5$1\")]\n[Delay(time=1)]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.7)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-300, fadetime=1.5,block=true)]\n[Delay(time=1)]\n[Character(fadetime=0.5)]\n[Delay(time=1)]\n[dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"30_g11_malistgarden\",screenadapt=\"coverall\")] \n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[PlaySound(key=\"$d_gen_walk_n\",volume=0.7)]\n[Character(name=\"avg_npc_569_1#5$1\",fadetime=0.5)]\n[name=\"黛柯绮·银币\"]......\n[name=\"黛柯绮·银币\"]活泼，外向，懂得社交，这些确实都是很好的品质，卡奇。\n[name=\"黛柯绮·银币\"]你认为人应该变成这样，而你也确实是在这么做的。\n[Character(name=\"avg_npc_569_1#6$1\")]\n[name=\"黛柯绮·银币\"]但你不能总是想要让别人变得和你一样。\n[name=\"黛柯绮·银币\"]极境的话也是对的，如果我要帮斯第奇的话，或许我也会这么做。\n[Character(name=\"avg_npc_569_1#5$1\")]\n[name=\"黛柯绮·银币\"]但我觉得苦恼和逃避也是对的。\n[name=\"黛柯绮·银币\"]所以......\n[Character(name=\"avg_npc_569_1#7$1\")]\n[name=\"黛柯绮·银币\"]卡奇，既然你要按照你的想法去做，那我也要按照我的想法去做。\n[name=\"黛柯绮·银币\"]如果斯第奇想要逃，我会帮他逃。\n[Dialog]\n[Character]\n[Blocker(a=0,fadetime=0.5, block=true)]\n[playsound(key=\"$d_avg_robotwalk\")]\n[Character(name=\"avg_npc_576_1#1$1\",name2=\"avg_npc_576_1#1$1\",fadetime=0.5)]\n[Delay(time=1)]\n[name=\"奇怪的机械\"]黛柯绮，黛柯绮，你找我们？\n[Character(name=\"avg_npc_569_1#10$1\")]\n[name=\"黛柯绮·银币\"]去吧，去帮斯第奇。\n[dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[character(fadetime=0)]\n[Background(image=\"30_g8_malistroom\",screenadapt=\"coverall\")] \n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character(name=\"avg_npc_571_1#10$1\")]\n[name=\"极境\"]......黛柯绮小姐，如果她不是故意的，那就是她并没有发现自己的表情其实很好读懂吧。\n[Character(name=\"avg_npc_571_1#1$1\")]\n[name=\"极境\"]她其实并不同意我的话，呵呵。\n[Character(name=\"avg_npc_571_1#4$1\")]\n[name=\"极境\"]嗯——好久没有感到这么青春的氛围了，我都有点想去凑热闹啊。\n[Character(name=\"avg_npc_571_1#3$1\")]\n[name=\"极境\"]......\n[Character(name=\"avg_npc_571_1#1$1\")]\n[name=\"极境\"]算了，真过去的话，说不定会被嘉维尔卷进去。\n[name=\"极境\"]我可不想平白无故挨一顿揍。\n[Character(name=\"avg_npc_571_1#10$1\")]\n[name=\"极境\"]所以，斯第奇啊，你也该醒一醒了。\n[name=\"极境\"]有这么多人都想要帮你呢，视而不见可是会遭报应的。\n[dialog]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=0, block=true)]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[character(fadetime=0)]\n[Character(name=\"avg_4055_bgsnow_1#7$1\",name2=\"char_416_zumama_1#1\")]\n[Background(image=\"30_g5_library_indoor\",screenadapt=\"coverall\")] \n[Delay(time=1)]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=2, block=true)]\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]我不明白，你们明明不像嘉维尔那样不讲道理。\n[name=\"阿芙朵嘉\"]为什么你们会这么地——\n[name=\"阿芙朵嘉\"]惯着她？\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.7)]\n[Character(name=\"avg_npc_075\",fadetime=0.5)]\n[Delay(time=1)]\n[name=\"依娜姆\"]因为看到嘉维尔这样的人，你难道不觉得，我们需要这样的人吗？\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#6\",focus=2)]\n[name=\"森蚺\"]依娜姆，你不是在外面吗？\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]看你们半天不出来，还以为你们在干什么呢......\n[name=\"依娜姆\"]阿芙朵嘉，其实我们是有些相似的。\n[name=\"依娜姆\"]我会来阿卡胡拉当信使，很大一部分原因，其实是想要逃避无止境的王酋之间的倾轧。\n[name=\"依娜姆\"]阿卡胡拉什么都没有，但是在这里的生活很舒服，我很喜欢这片土地。\n[name=\"依娜姆\"]而且，要说担心，我比你更担心杜林的到来会不会引发什么问题。\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#6\",focus=1)]\n[name=\"阿芙朵嘉\"]那你为什么还......\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]嘉维尔离开了阿卡胡拉这么多年，一点也没有改变。\n[name=\"依娜姆\"]仿佛这片大地上没有什么东西能够让她屈服。\n[name=\"依娜姆\"]看到嘉维尔，我就会想，啊，这片大地上还是有这样的人的啊。\n[name=\"依娜姆\"]我会忍不住地想要帮她一把。\n[name=\"依娜姆\"]就这么简单。\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#3\",focus=2)]\n[name=\"森蚺\"]......\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#1\",focus=2)]\n[name=\"森蚺\"]在跟着嘉维尔离开阿卡胡拉前，我也十分无知。\n[name=\"森蚺\"]我跟着罗德岛看到了许多东西，但我逐渐发现，我真正学到的，并不只是知识。\n[name=\"森蚺\"]这片大地上有着许多我没有想过，但又理所当然的事情。\n[name=\"森蚺\"]嘉维尔一定也已经见过许多她也无能为力的事。\n[name=\"森蚺\"]我的梦想是造出这片大地上最厉害的机器。\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#5\",focus=2)]\n[name=\"森蚺\"]但造出来之后该用来做什么呢，我其实也没有想好。\n[name=\"森蚺\"]不过，看着嘉维尔，我逐渐有了一个想法。\n[name=\"森蚺\"]我制造的机器，会用来帮助嘉维尔。\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#2\",focus=2)]\n[name=\"森蚺\"]总有一天，嘉维尔的拳头会遇到砸不穿的墙壁。\n[name=\"森蚺\"]但那并不是她的问题，她毕竟也是血肉之躯。\n[name=\"森蚺\"]而我会像这一次一样，给她最好的武器。\n[name=\"森蚺\"]拳头不行，那就用斧头。斧头不行，那就用锤子。锤子不行，那就用电钻。电钻不行，那我就给她造一台大丑。\n[name=\"森蚺\"]如果大丑还不行，那我就给她造一座移动城市，她想用来干什么，就用来干什么。\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#2\",focus=1)]\n[name=\"阿芙朵嘉\"]你就这么信任她？\n[Character(name=\"avg_4055_bgsnow_1#6$1\",name2=\"char_416_zumama_1#2\",focus=2)]\n[name=\"森蚺\"]因为嘉维尔比任何东西都能代表阿卡胡拉。\n[name=\"森蚺\"]她是我们的主心骨，她也将成为更多人的主心骨。\n[name=\"森蚺\"]而我们能做的，就是让嘉维尔的拳头永远不受阻碍。\n[Character(name=\"avg_4055_bgsnow_1#9$1\",name2=\"char_416_zumama_1#2\",focus=1)]\n[name=\"阿芙朵嘉\"]......\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]当然，实际上我也挺担心，真的把阿卡胡拉交给她来管会成什么样子就是了。\n[name=\"依娜姆\"]以嘉维尔的性格，让她去拥有权力，权力可能会比她还不自在。\n[name=\"依娜姆\"]所以，其实如果她真的来当王酋的话，我是打算给她狠狠培训一段时间的。\n[Character(name=\"avg_4055_bgsnow_1#9$1\",name2=\"char_416_zumama_1#1\",focus=2)]\n[name=\"森蚺\"]大概不会有效果吧。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]哈哈，我猜也是。\n[name=\"依娜姆\"]只是，连我自己都没想到，我居然愿意为了她做到这一步。\n[Character(name=\"avg_4055_bgsnow_1#9$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]......\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]你的经历让你始终对嘉维尔这样的人心存怀疑。\n[Character(name=\"avg_4055_bgsnow_1#9$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]我不否认。\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]那么，或许你可以试着从相信她开始。\n[Character(name=\"avg_4055_bgsnow_1#9$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]......我会尝试一下。\n[StopMusic(fadetime=2)]\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]所以说，地图呢？\n[Character(name=\"avg_4055_bgsnow_1#4$1\",name2=\"char_416_zumama_1#1\",focus=1)]\n[name=\"阿芙朵嘉\"]啊......我忘记了。\n[Character(name=\"avg_npc_074\")]\n[name=\"大祭司\"]噢，在你们为了嘉维尔吵得不可开交的时候，只有我这把老骨头和这些机器人在认真寻找着地图。\n[name=\"大祭司\"]并且，我从刚才就发现了，这面书架上的书，和游记根本没有关系。\n[name=\"大祭司\"]所以，我就去了书架的另一面找了找，一下子就找到了。\n[name=\"大祭司\"]是这个没错吧？\n[Dialog]\n[Character(name=\"avg_4055_bgsnow_1#1$1\")]\n[PlaySound(key=\"$d_avg_paper2\")]\n[Delay(time=2)]\n[Character(name=\"avg_4055_bgsnow_1#10$1\")]\n[name=\"阿芙朵嘉\"]没错。\n[Character(name=\"char_416_zumama_1#4\")]\n[name=\"森蚺\"]......\n[Character(name=\"avg_npc_075\")]\n[name=\"依娜姆\"]......\n[playMusic(intro=\"$holiday_intro\",key=\"$holiday_loop\", volume=0.4)]\n[Character(name=\"avg_npc_576_1#1$1\",name2=\"avg_npc_576_1#1$1\")]\n[name=\"奇怪的机械\"]阿芙朵嘉，笨蛋，阿芙朵嘉。\n[Character(name=\"avg_4055_bgsnow_1#3$1\")]\n[name=\"阿芙朵嘉\"]......好啦，我知道错啦，对不起！\n[Character(name=\"avg_4055_bgsnow_1#8$1\")]\n[name=\"阿芙朵嘉\"]这样可以了吧！\n[Dialog]\n[Character]\n[PlaySound(key=\"$d_gen_walk_n\", volume=0.7)]\n[Character(name=\"avg_npc_566_1#1$1\",fadetime=0.5)]\n[characteraction(name=\"middle\", type=\"move\", xpos=200, fadetime=0, block=false)]\n[characteraction(name=\"middle\", type=\"move\", xpos=-200, fadetime=1.5, block=true)]\n[Delay(time=2)]\n[Character(name=\"avg_npc_566_1#4$1\")]\n[name=\"克罗绮·砖石\"]啊，阿芙朵嘉，太好了，你还在这里。\n[Character(name=\"avg_npc_566_1#1$1\")]\n[name=\"克罗绮·砖石\"]耶奇大师刚才发来了通讯，他提议现在就在广场举行全体大会，其他代表都已经同意了，问问你的意见。\n[Character(name=\"avg_4055_bgsnow_1#1$1\")]\n[name=\"阿芙朵嘉\"]......\n[name=\"阿芙朵嘉\"]谢谢你，祖玛玛。\n[Character(name=\"avg_4055_bgsnow_1#6$1\")]\n[name=\"阿芙朵嘉\"]我虽然还是没有完全接受，但或许——我确实可以尝试一下。\n[Character(name=\"char_416_zumama_1#5\")]\n[name=\"森蚺\"]嗯。\n[Character(name=\"avg_4055_bgsnow_1#10$1\")]\n[name=\"阿芙朵嘉\"]克罗绮，告诉耶奇大师，就说，我没有问题，并且，我会来说服际崖城的居民们。\n[Dialog]\n[Blocker(a=1, r=0,g=0, b=0, fadetime=2, block=true)]\n[stopmusic(fadetime=3)]\n[Character]"}// 定义数据出口
module.exports = {dataList_story: items}