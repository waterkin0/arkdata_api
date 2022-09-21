var items = {"brief": "公爵之女遵循了内心的正义，然而源自正义的善行无法带来善意的结果。因为她所背负的阴影从未放弃吞噬她的意志。", "details": "[HEADER(key=\"title_test\", is_skippable=true, fit_mode=\"BLACK_MASK\")] \n[stopmusic]\n[Delay(time=1)]\n[Dialog]\n[Character]\n[Blocker(a=1, r=0, g=0, b=0, fadetime=1, block=true)]\n[Background(image=\"bg_snowconutry_4\",screenadapt=\"coverall\")]\n[Blocker(a=0, r=0, g=0, b=0, fadetime=1, block=true)]\n[delay(time=1)]\n[Dialog]\n[Character]\n[Dialog]\n[PlaySound(key=\"$e_skill_skulsrsword\", volume=0.9)]\n[Blocker(a=1, r=1, g=1, b=1, afrom=0, rfrom=0, gfrom=0, bfrom=0, fadetime=0.1, block=true)]\n[Blocker(a=0, fadetime=1.5, block=false)]\n[CameraShake(duration=0.5, xstrength=10, ystrength=12, vibrato=30, randomness=90, fadeout=true, block=false)]\n[delay(time=1)]\n[Character(name=\"avg_npc_082\")]\n[CameraShake(duration=0.4, xstrength=0, ystrength=8, vibrato=30, randomness=30, fadeout=true, block=false)]\n[name=\"感染者纠察队\"] 呃......\n[Character(name=\"avg_npc_078#4\")]\n[name=\"塔露拉\"] 我没有砍掉你的手，爬起来！\n[Character(name=\"avg_npc_082\")]\n[name=\"感染者纠察队\"] ......别以为事情就这么完了！\n[Character(name=\"avg_npc_078#4\")]\n[name=\"塔露拉\"] 我现在就剐了你的舌头。\n[Character(name=\"avg_npc_082\")]\n[CameraShake(duration=0.4, xstrength=0, ystrength=8, vibrato=30, randomness=30, fadeout=true, block=false)]\n[name=\"感染者纠察队\"] 嘁！！\n[PlaySound(key=\"$rungeneral\", volume=0.9)]\n[Dialog]\n[Character]\n[delay(time=2)]\n[playMusic(intro=\"$drift_intro\", key=\"$drift_loop\", volume=0.4)]\n[Character(name=\"avg_npc_078#4\")]\n[name=\"塔露拉\"] ......他跑了。\n[Character(name=\"avg_npc_078#3\")]\n[name=\"塔露拉\"] 爷爷，您没事——\n[Character(name=\"avg_npc_092#2\")]\n[name=\"老汉\"] 你都做了啥！啊呀，塔露拉......你看看你都做了啥！\n[name=\"老汉\"] 塔露拉，再过两天我们就要迁村子了。你看看你这样......！\n[name=\"老汉\"] 你打了纠察队啊！这可惹上大麻烦了！\n[Character(name=\"avg_npc_092#2\",name2=\"avg_npc_078#3\",focus=2)]\n[name=\"塔露拉\"] 继续让他打你更不是办法。现在已经晚了，他逃了。我现在杀了他，其他人发现他踪迹的时候，我们就已经迁走了。\n[name=\"塔露拉\"] 可那样死活是避不过的，纠察队一旦集结起来，一定还会找上我们。说不定还会报复我们。\n[Character(name=\"avg_npc_092#2\",name2=\"avg_npc_078#3\",focus=1)]\n[name=\"老汉\"] 那你还动手！这该怎么办！\n[Character(name=\"avg_npc_092#2\",name2=\"avg_npc_078\",focus=2)]\n[name=\"塔露拉\"] 放心，爷爷，他们是找感染者。现在他们还不知道。\n[Character(name=\"avg_npc_092#5\",name2=\"avg_npc_078\",focus=1)]\n[name=\"老汉\"] ......\n[name=\"老汉\"] 不知道什么？\n[Character(name=\"avg_npc_092#5\",name2=\"avg_npc_078\",focus=2)]\n[name=\"塔露拉\"] 不知道我接下来要做的事。\n[Character(name=\"avg_npc_092#5\",name2=\"avg_npc_078\",focus=1)]\n[name=\"老汉\"] 哎......塔露拉！\n[Character(name=\"avg_npc_092#5\",name2=\"avg_npc_078#2\",focus=2)]\n[name=\"塔露拉\"] 爷爷，没事的。来，我扶你回去。\n[name=\"塔露拉\"] 你这条腿......可有得治了。\n[Character(name=\"avg_npc_092#5\",name2=\"avg_npc_078#2\",focus=1)]\n[name=\"老汉\"] 哈。没想到我也到了被你搀着这天。我一直觉得我的身体还好着，只是没想到还是没逃过去。\n[name=\"老汉\"] 塔露拉，我有件事，你一定要听。\n[Character(name=\"avg_npc_092#5\",name2=\"avg_npc_078#2\",focus=2)]\n[name=\"塔露拉\"] 又是什么事，爷爷？\n[Character(name=\"avg_npc_092#5\")]\n[name=\"老汉\"] ......\n[Character(name=\"avg_npc_092\")]\n[name=\"老汉\"] 啊，是什么来着？唔，哈哈，对不住，我忘啦。你看看，你看我这记性......\n[Character(name=\"avg_npc_078#2\")]\n[name=\"塔露拉\"] ......\n[name=\"塔露拉\"] 您那忘性可还真够大的。\n[Dialog]\n[Blocker(fadetime=3,block=true)]\n[Image]"}// 定义数据出口
module.exports = {dataList_story: items}