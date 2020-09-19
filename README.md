# FlowChatForChrome
comment system for chrome extensions
ニコニコ動画や"コメントスクリーン"といったサービスのようなチャットが画面上に流れてくるようなchrome拡張機能です．
チャット機能の実装はFirebaseのRealtimeDatabaseで実現しました．

# 拡張機能の使用方法
FlowChatForChromeのフォルダを直接Chromeの
その他->拡張機能の中にドラッグ&ドロップし，デベロッパーモードをオンにする．
サンプルのソースでは"Google meet"のみで動作するようになっています．
適宜サンプルを変更して用いて下さい．

#注意
本サンプルではFirebaseのRealtimeDatabaseを用いてチャット機能を実現しています．
そのため，RealtimeDatabaseを用いるためのAPIkeyは今回，使用者様自身が取得したものを想定しています．
したがって，実際用いる場合にはご自身でFirebaseのプロジェクトを作成し，サンプルの該当部分を変更してください．

[Firebase](https://firebase.google.com/)
