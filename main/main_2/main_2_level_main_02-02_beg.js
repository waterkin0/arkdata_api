var items = {"brief": "谈判的目的是建立龙门与罗德岛关于处理整合运动的合作关系。\n过程中，魏彦吾提出，要确认罗德岛的军事实力。\n", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] 第十四关（前）\n[name=\"陈\"]   进来吧。\n[Delay(time=0.3)]\n[PlaySound(key=\"$d_gen_dooropen\", volume=0.7)]\n[character]\n[Dialog]\n[Background(image=\"bg_lungmen_o\", width=1, height=1, fadetime=2)]\n[PlayMusic(intro=\"$mist_loop\", key=\"$mist_loop\", volume=0.8, crossfade=1.5, delay=0.5)]\n[Character(name=\"char_003_kalts_1\",name2=\"char_2005_weiyw_1\")]\n[Character(name=\"char_002_amiya_1\")]\n[name=\"阿米娅\"]   ......凯尔希医生！\n[Character(name=\"char_003_kalts_1\")]\n[Delay(time=0.6)]\n[name=\"凯尔希\"]   ——阿米娅......\n[Character(name=\"char_003_kalts_1#3\")]\n[name=\"凯尔希\"]   ......{@nickname}。\n[name=\"凯尔希\"]   你来了。\n[PlaySound(key=\"$d_gen_doorclose\", volume=0.5)]\n[Delay(time=1)]\n[Character(name=\"char_003_kalts_1#3\", focus=-1)]\n[Decision(options=\"......\", values=\"1\")]\n[Predicate(references=\"1\")]\n[Character(name=\"char_010_chen_1\")]\n[name=\"陈\"]   咳咳。\n[name=\"陈\"]   魏长官，罗德岛的另外两位代表也到了。\n[Character]\n[Dialog]\n[Character(name=\"char_2005_weiyw_1\")]\n[Delay(time=1)]\n[name=\"魏彦吾\"]   哦，正好。\n[name=\"魏彦吾\"]   请坐。凯尔希小姐正向我说明现在的局势呢。\n[Character(name=\"char_003_kalts_1\", name2=\"char_2005_weiyw_1\", focus=1)]\n[name=\"凯尔希\"]   那我就继续吧。关于现在的局势，我想魏先生也已经很清楚了。\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0.6, block=true)]\n[Image(image=\"bg_0_tv\",x=0, y=-20, xScale=1.1, yScale=1.1, fadetime=0)]\n[ImageTween(xFrom=0, yFrom=-20, xTo=0, yTo=0, xScaleFrom=1.1, yScaleFrom=1.1, xScaleTo=1, yScaleTo=1, duration=7, block=false)]\n[Blocker(a=0, fadetime=0.6, block=true)]\n[PlaySound(key=\"$slideshow\", volume=0.2,channel=\"2\", loop=true)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[name=\"凯尔希\"]   龙门的情报网每天都在搜集大量针对整合运动的信息，想必也对这件事情极为重视。\n[name=\"凯尔希\"]   不过仅凭这样，龙门仍然还缺乏一些关键信息。\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0.6, block=true)]\n[image]\n[Blocker(a=0, fadetime=0.6, block=true)]\n[Character(name=\"char_003_kalts_1\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]   ......\n[Character(name=\"char_003_kalts_1\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"凯尔希\"]   简单的感染者检疫是不能对抗整合运动的，想必龙门近卫局再清楚不过。\n[name=\"凯尔希\"]   整合运动不会乖乖过检，更不会等到当局反应过来才行动。所以————\n[name=\"凯尔希\"]   如果没有罗德岛的协助，龙门依靠目前对待感染者的策略，抵挡接下来整合运动的攻击会面临巨大损失。\n[Character(name=\"char_003_kalts_1\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]   抱歉，我需要插一句。\n[name=\"陈\"]   关于龙门的防卫情报，龙门近卫局方面比罗德岛更了解。对于整合运动的渗透，也已经做了相应准备。\n[name=\"陈\"]   只是龙门目前没有将相关机密行动的方针通知罗德岛的义务。\n[Character(name=\"char_003_kalts_1\", name2=\"char_2005_weiyw_1\", focus=2)]\n[name=\"魏彦吾\"]    ......\n[name=\"魏彦吾\"]    凯尔希小姐，请继续说。\n[Character(name=\"char_003_kalts_1\", name2=\"char_2005_weiyw_1\", focus=1)]\n[name=\"凯尔希\"]   龙门的确有对付手无寸铁的感染者的经验，但恐怕龙门目前没有面对集团化感染者暴徒的经验，这可能会对龙门造成不必要的损失。\n[name=\"凯尔希\"]   以罗德岛目前的经验来说————只有感染者，才能更好对抗感染者。\n[Character(name=\"char_2005_weiyw_1\")]\n[name=\"魏彦吾\"]   那么，罗德岛是否已经从针对整合运动的行动中获得了有效的经验？\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0.6, block=true)]\n[Image(image=\"bg_0_rhodes2\",x=0, y=0, xScale=1.2, yScale=1.2, fadetime=0)]\n[ImageTween(xFrom=0, yFrom=-0, xTo=0, yTo=0, xScaleFrom=1.2, yScaleFrom=1.2, xScaleTo=1, yScaleTo=1, duration=27, block=false)]\n[Blocker(a=0, fadetime=0.6, block=true)]\n[Character(name=\"char_003_kalts_1\", name2=\"char_2005_weiyw_1\", focus=1)]\n[name=\"凯尔希\"]   仅仅是有而已，大概是不敢自称专家的。\n[Character(name=\"char_003_kalts_1\", name2=\"char_2005_weiyw_1\", focus=2)]\n[CharacterCutin(widgetID=\"1\", name=\"char_2005_weiyw_1\", style=\"cutin\", fadestyle= \"horiz_expand_center\", fadetime=0.5, offsetx=300, width=200, block=true)]\n[name=\"魏彦吾\"]   哦——？\n[name=\"魏彦吾\"]   我听说，罗德岛曾卷入过切尔诺伯格事件，并且从中也获得了不少其他整合运动的情报。\n[CharacterCutin(widgetID=\"1\", fadetime=0.5, block=true)]\n[Character(name=\"char_003_kalts_1\", name2=\"char_2005_weiyw_1\", focus=1)]\n[CharacterCutin(widgetID=\"1\", name=\"char_003_kalts_1\", style=\"cutin\", fadestyle= \"horiz_expand_center\", fadetime=0.5, offsetx=-300, width=200, block=true)]\n[name=\"凯尔希\"]   无论魏先生是从哪里得到这条消息的——\n[name=\"凯尔希\"]   这都不是现阶段能与龙门交换的信息。这只是履历，只是站在这里与魏先生交谈的资格。\n[CharacterCutin(widgetID=\"1\", fadetime=0.5, block=true)]\n[name=\"魏彦吾\"]   决定是否要和你们进行利益交换的是龙门。如果这种程度的信息罗德岛都无法提供的话——\n[name=\"魏彦吾\"]   呵。\n[name=\"魏彦吾\"]   龙门将无法信任你们的真实实力。\n[Blocker(a=1, r=0, g=0, b=0, fadetime=0.6, block=true)]\n[character]\n[image]\n[Blocker(a=0, fadetime=0.6, block=true)]\n[Character(name=\"char_003_kalts_1\", name2=\"char_2005_weiyw_1\", focus=1)]\n[name=\"凯尔希\"]   魏先生，我的言辞可能不够清晰。\n[name=\"凯尔希\"]   不过需要强调的是——罗德岛提供的信息，本身就是用实力换来的。\n[Character(name=\"char_003_kalts_1\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]   但，无论怎样，龙门都无法信任同样是一群感染者的罗德岛。\n[Character(name=\"char_003_kalts_1\", name2=\"char_010_chen_1\", focus=1)]\n[name=\"凯尔希\"]   如果陈小姐认为龙门的安危，尚不如对感染者进行盲目的惩罚来的重要————\n[name=\"凯尔希\"]   那我会立刻服从当地法令，任由陈小姐逮捕我。然后在监牢里看着龙门被整合运动焚烧殆尽，默默惋惜。\n[name=\"凯尔希\"]   这次，龙门别无选择。\n[Character(name=\"char_003_kalts_1\", name2=\"char_010_chen_1#5\", focus=2)]\n[Blocker(a=0.6, r=1, g=1, b=1, fadetime=0.1, block=true)]\n[Blocker(a=0, fadetime=0.1, block=true)]\n[CameraShake(duration=0.5, xstrength=10, ystrength=12, vibrato=15, randomness=90, fadeout=true, block=false)]\n[name=\"陈\"]   ——龙门既不是因为有人出言不逊就拒绝善意的城市——\n[name=\"陈\"]   却也不是收留无用说客的慈善机构。\n[Character(name=\"char_2005_weiyw_1\", name2=\"char_010_chen_1#5\", focus=1)]\n[name=\"魏彦吾\"]   陈警官。\n[Character(name=\"char_2005_weiyw_1\", name2=\"char_010_chen_1#5\", focus=2)]\n[name=\"陈\"]   魏长官，让外来的感染者参与龙门的机密事务，我认为并不妥当。\n[Character(name=\"char_2005_weiyw_1\", name2=\"char_010_chen_1#5\", focus=1)]\n[name=\"魏彦吾\"]   冷静些，陈警官，他们是客人。\n[name=\"魏彦吾\"]   ——我的客人。\n[Character(name=\"char_2005_weiyw_1\", name2=\"char_010_chen_1#5\", focus=2)]\n[name=\"陈\"]   .....\n[name=\"陈\"]   是。\n[Character(name=\"char_2005_weiyw_1\", name2=\"char_010_chen_1\", focus=2)]\n[name=\"陈\"]   在他们违反龙门法律之前，我会容忍，长官。\n[Character(name=\"char_2005_weiyw_1\", name2=\"char_003_kalts_1\", focus=1)]\n[name=\"魏彦吾\"]   啊，不好意思。我想起来了，有这么一句——\n[name=\"魏彦吾\"]   ——没错，呣......\n[name=\"魏彦吾\"]   我所看重的就只有一点。\n[name=\"魏彦吾\"]   实力。\n[name=\"魏彦吾\"]   据我所知，罗德岛也参与清剿了附近的感染者吧？\n[name=\"魏彦吾\"]   陈警官，以目前确切了解的情报，罗德岛在军事力量的实力如何？\n[Character(name=\"char_010_chen_1\")]\n[name=\"陈\"]   ......请容我简要描述一下我所见的罗德岛的行动情况。\n[name=\"陈\"]   ——详情如下——\n[stopSound(channel=\"2\", fadetime=1)]\n[Delay(time=0.6)]\n[Dialog]\n[Blocker(block=true)]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}