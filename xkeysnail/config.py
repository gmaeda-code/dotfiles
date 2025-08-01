# -*- coding: utf-8 -*-

import re
from xkeysnail.transform import *
"""
# Key allocation source
    https://github.com/mooz/xkeysnail/blob/master/xkeysnail/key.py

# Current remapping memo
    (Shift+F1): 	terminal
    (Shift+F2): 	xkeysnail up
    (Shift+F3): 	xkeysnail down
    (Shift+F4): 	xkeysnail restart
    (Shift+F5): 	move window to the next display
    (Shift+F6):     whisker menu
    (Shift+F7):     lock


#example:
    K("ESC"):pass_through_key, #cancel
        # Cancel
        K("RC-g"): [K("esc"), set_mark(False)],
        # C-x h (select all)
        K("h"): [K("C-home"), K("C-a"), set_mark(True)],

#writing guideline,alphabetical order
    C-M-Shift-Super
# HIRAGANAはバインディングには当てはめられないようだ､単体なら反応する｡シークエンスはできる?


Idea 
- HIRAGANAで､MUHENKAN-xみたいにスイッチを入れ､alt+3とかalt+eで､alt+F3が押せるようにする｡
    もしくは､実際のLSHIFTをバインディングとかでもスイッチにしてもいい｡
- まずは､必要そうなキーをセットしていき､後で整理する

# volumeの変更をキーボードで行う
xkeysnailがroot権限なので､起動するシェルやコマンドもroot権限になる｡
ところが､pulseaudio?はmg権限なのでアクセスできずエラーになる｡
su mg -c "pamixer -i 3"とかを実行しても､環境はrootのまま?だからか､同様のエラー｡

"""
# define timeout for multipurpose_modmap
define_timeout(1)

#--------
# [Global modemap] Change modifier keys as in xmodmap
#--------
####################################################################
define_modmap({
   #Key.CAPSLOCK: Key.LEFT_CTRL
   #Key.LEFT_SHIFT: Key.HIRAGANA,
   #Key.ENTER: Key.HIRAGANA,
})
####################################################################
# [Conditional modmap] Change modifier keys in certain applications
#define_conditional_modmap(re.compile(r'Emacs'), {
    #Key.RIGHT_CTRL: Key.ESC,
#})
####################################################################
# [Multipurpose modmap] Give a key two meanings. A normal key when pressed and
# released, and a modifier key when held down with another key. See Xcape,
# Carabiner and caps2esc for ideas and concept.
define_multipurpose_modmap({
    #key単体時と､バインダー時を分ける
    # Enter is enter when pressed and released. Control when held down.
    #Mouse-------------------------------------
    Key.BTN_EXTRA: [Key.BTN_EXTRA, Key.RIGHT_ALT],
    Key.BTN_SIDE: [Key.BTN_SIDE, Key.RIGHT_CTRL],
    Key.BTN_RIGHT: [Key.BTN_RIGHT, Key.RIGHT_SHIFT],
    Key.BTN_MIDDLE: [Key.BTN_MIDDLE, Key.RIGHT_META],
    #Keyboard----------------------------------
    Key.CAPSLOCK: [Key.CAPSLOCK, Key.LEFT_CTRL],
    #Key.CAPSLOCK: [Key.HIRAGANA, Key.LEFT_CTRL],
    Key.SPACE: [Key.SPACE, Key.LEFT_SHIFT],
    Key.MUHENKAN: [Key.MUHENKAN, Key.LEFT_META],
    Key.HENKAN: [Key.ENTER, Key.LEFT_ALT],
    #Key.HIRAGANA: [Key.HIRAGANA, Key.RIGHT_META],

    #Key.LEFT_SHIFT: [Key.ESC, Key.LEFT_SHIFT],
})

####################################################################
define_keymap( None, {
    ########################################################################
    #----Mouse----##########################################################
    ########################################################################
    #---RM = EXTRA
    K("BTN_EXTRA"):{
		K("BTN_EXTRA"):launch(["/home/mg/mg-script/mouse-binding","--maximize-window"]), 
		K("BTN_MOUSE"):launch(["/home/mg/mg-script/mouse-binding","--tile-window-to-the-left"]), 
		K("BTN_RIGHT"):launch(["/home/mg/mg-script/mouse-binding","--tile-window-to-the-right"]),
		K("ESC"):pass_through_key,
	},
    K("RM-BTN_RIGHT"):K("C-PAGE_DOWN"), #allocate RM to SIDE
    K("RM-BTN_MOUSE"):K("C-PAGE_UP"),
    #---RC = SIDE
    K("BTN_SIDE"):{
		K("BTN_SIDE"):launch(["/home/mg/mg-script/mouse-binding","--move-to-next-monitor"]),
		K("BTN_MOUSE"):launch(["/home/mg/mg-script/mouse-binding","--back-to-previous-page"]),
		K("BTN_RIGHT"):launch(["/home/mg/mg-script/mouse-binding","--forward-to-next-page"]),
		K("ESC"):pass_through_key,
	},
    K("RC-BTN_MOUSE"):K("PAGE_UP"), #allocate RC to EXTRA
    K("RC-BTN_RIGHT"):K("PAGE_DOWN"),
    #---RShift = RIGHT
    K("RShift-BTN_MOUSE"):K("C-COMMA"), #delete tab?
    #K("RShift-BTN_MOUSE"):launch(["/home/mg/mg-script/mouse-binding","--close-tab"]),
    K("RShift-BTN_MIDDLE"):K("C-Shift-k"), #restore deleted tab?
    #---RSuper = MIDDLE
    K("RSuper-BTN_RIGHT"):[K("C-k"),K("TAB")], #new tab
    #-----------------
    #K("BACKSPACE"): launch(["xdotool", "click", "4"]),

    ###########################################################################
	#keyboard--------------   #################################################
	###########################################################################
    K("CAPSLOCK"):K("HIRAGANA"),
    #SPACE----------------------------------------------------------------------------
    #K("SPACE-HENKAN"):K("ENTER"),
    #MUHENKAN----------------------------------------------------------------------------
    #Number row
    #タブ操作
    K("LSuper-GRAVE"):K("C-COMMA"),
    K("LSuper-KEY_1"):K("C-Shift-k"),     
    K("LSuper-KEY_2"):K("C-PAGE_UP"),
    K("LSuper-KEY_3"):K("C-PAGE_DOWN"),
    K("LSuper-KEY_4"):K("C-k"),

    #volume変更 -- 現状うまく設定できていない､詳細は導入の説明文-> # volumeの変更をキーボードで行う
    #K("LSuper-KEY_2"):launch(["/usr/bin/pamixer","-d","5"]),
    #K("LSuper-KEY_2"):launch(["/usr/bin/kitty", "--hold", "su","mg", "&&", "/usr/bin/pamixer","-d","3"]),
    #K("LSuper-KEY_2"):launch(["/home/mg/mg-script/volume-updown"]),
    #K("LSuper-KEY_2"):launch(["/usr/bin/kitty"]),
    #K("LSuper-KEY_3"):launch(["/usr/bin/pamixer","-i","5"]),

	#最上段
	#上段
	K("LSuper-q"):[K("ESC"),K("HENKAN")],
	K("LM-q"):[K("ESC"),K("Shift-F11")],
	K("LSuper-TAB"):K("ENTER"),
	K("LSuper-w"):K("BACKSPACE"),
	K("LSuper-e"):K("UP"),
	K("LSuper-r"):K("DELETE"),
	K("LSuper-t"):K("C-t"),
	#中段
	#K("LSuper-CAPSLOCK"):[K("HOME"),K("Shift-END")],
	K("LSuper-CAPSLOCK"):[K("HOME"),K("Shift-END")],
	K("LSuper-a"):K("HOME"),
	K("LSuper-s"):K("LEFT"),
	K("LSuper-d"):K("DOWN"),
	K("LSuper-f"):K("RIGHT"),
	K("LSuper-g"):K("END"),
	#下段
	K("LSuper-z"):K("C-SLASH"),

    K("LSuper-x"):{
		#単体
		#K("a"):K("C-LM-o"), #ankiデザイン初期化
		K("d"):[K("C-f"),K("F7")], #anki フォントデザイン変更
		K("s"):K("C-o"), #ankiデザイン初期化
		K("a"):[K("HOME"),K("Shift-END")], 
        K("e"):K("C-Shift-KEY_1"), #uBlock relax
        K("r"):K("C-Shift-KEY_2"), #uBlock opentab
		K("o"):K("Shift-F4"), #restart xkeysnail
		#複合
		#cancel
		K("LSuper-c"):pass_through_key, #cancel
		K("ESC"):pass_through_key, #cancel
		#left-hand
		K("LSuper-x"):K("C-b"), #cut
		K("LSuper-c"):K("LM-F4"), #close window
		K("LSuper-a"):K("C-a"), #select all
		K("LSuper-s"):K("C-SEMICOLON"), #save
		K("LSuper-f"):K("C-y"), #search
		K("LSuper-d"):K("Shift-F4"), #restart xkeysnail
		#right-hand 
		K("k"):K("Shift-F1"), #open terminal
		K("j"):K("C-Shift-k"), #new terminal tab
		K("u"):K("LSuper-j"), #tile window left
		K("i"):K("LSuper-k"), #tile window right
        K("y"):K("F6"), #FF,focus back to webpage

	},
    K("LSuper-c"):K("C-i"), 
    K("LSuper-v"):K("C-dot"), 
	#右
    #IMEの設定
	K("LSuper-u"):K("Shift-LEFT"), #右上段､IMEの変換
	K("LSuper-i"):K("Shift-RIGHT"), 
	K("LSuper-o"):K("RIGHT"),
	K("LSuper-p"):[K("F7"),K("ENTER")],
	#K("LSuper-j"):K("HIRAGANA"),
	#K("LSuper-l"):K("Shift-F5"), #別ディスプレイにwindow移動
    #ブラウザ等のタブ操作
    K("LSuper-h"):K("C-COMMA"), #タブ削除
    K("LSuper-l"):K("C-Shift-k"), #タブ復元
    K("LSuper-j"):K("C-PAGE_UP"), #左タブに移動
    K("LSuper-k"):K("C-PAGE_DOWN"), #右タブに移動
    K("LSuper-SEMICOLON"):K("C-k"), #新規タブを開く

    #CAPSLOCK------------------------------------------------------------------------
    #when xfce
    #K("LC-GRAVE"):K("C-COMMA"),
    #K("LC-KEY_1"):K("C-Shift-k"),     
    #K("LC-KEY_2"):K("C-PAGE_UP"),
    #K("LC-KEY_3"):K("C-PAGE_DOWN"),
    #K("LC-KEY_4"):[K("C-k"),K("TAB")],
	#K("LC-left"):launch(["/bin/pamixer","-d", "3"]),
	#K("LC-left"):launch(["st", "-e","pamixer","-d","3"]),
	#K("LC-left"):launch(["st"]),
    #変換 LEFT_ALT-------------------------------------------------------------------
#    K("LM-KEY_1"):K("C-Alt-LEFT"), # left desktop
#	K("LM-KEY_2"):K("C-Alt-RIGHT"),
	#K("LM-TAB"):K("Shift-TAB"),
#    K("LM-KEY_3"):K("LM-F3"),
    #変換+無変換
        #高速移動 ctrl
	K("LSuper-Alt-s"):K("C-LEFT"), 
	K("LSuper-Alt-f"):K("C-RIGHT"),  
    # MUHENKAN & CAPSLOCK
	K("LSuper-LC-s"):K("C-LEFT"), 
	K("LSuper-LC-f"):K("C-RIGHT"),  

    # MUHENKAN & HENKAN
    K("LSuper-LM-w"):K("PAGE_UP"),
    K("LSuper-LM-r"):K("PAGE_DOWN"),
    K("LSuper-LM-s"):K("C-LEFT"),
    K("LSuper-LM-f"):K("C-RIGHT"),
    K("LSuper-LM-e"):K("C-HOME"),
    K("LSuper-LM-d"):K("C-END"),
    # MUHENKAN & SPACE
    K("LSuper-LShift-s"):K("Shift-LEFT"),
    K("LSuper-LShift-f"):K("Shift-RIGHT"),
    K("LSuper-LShift-e"):K("Shift-UP"),
    K("LSuper-LShift-d"):K("Shift-DOWN"),
    # MUHENKAN & SPACE & CAPS
    K("LSuper-LShift-LC-s"):K("C-Shift-LEFT"),
    K("LSuper-LShift-LC-f"):K("C-Shift-RIGHT"),
    K("LSuper-LShift-LC-e"):K("C-Shift-HOME"),
    K("LSuper-LShift-LC-d"):K("C-Shift-END"),
    # HENKAN & CAPSLOCK
	#K("LM-CAPSLOCK"):K("LM-C"),
    # function keyを中段に持ってくる ------------------------------------------------
    # Alt hook
	K("LM-a"):[K("HOME"),K("Shift-END")],
    K("LM-LSuper-a"):K("M-KEY_1"),
    K("LM-LSuper-s"):K("M-KEY_2"),
    K("LM-LSuper-d"):K("M-KEY_3"),
    K("LM-LSuper-f"):K("M-KEY_4"),
    K("LM-LSuper-g"):K("M-KEY_5"),
    K("LM-LSuper-h"):K("M-KEY_6"),
    K("LM-LSuper-j"):K("M-KEY_7"),
    K("LM-LSuper-k"):K("M-KEY_8"),
    K("LM-LSuper-l"):K("M-KEY_9"),
    K("LM-LSuper-SEMICOLON"):K("M-KEY_0"),
    #K("LM-LSuper-:"):K("M-F11"),
    #K("LM-LSuper-\\"):K("M-F12"),
    # Shift hook
    K("LShift-LSuper-a"):K("Shift-F1"),



}, "global-key")
