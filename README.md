# FlowChatForChrome
ニコニコ動画や"コメントスクリーン"といったサービスのようなチャットが画面上に流れてくるようなchrome拡張機能です．
チャット機能の実装はFirebaseのRealtimeDatabaseで実現しました．

# 拡張機能の使用方法
FlowChatForChromeのフォルダを直接Chromeの
その他->拡張機能の中にドラッグ&ドロップし，デベロッパーモードをオンにする．
サンプルのソースでは"Google meet"のみで動作するようになっています．
適宜サンプルを変更して用いて下さい．

# 注意
本サンプルではFirebaseのRealtimeDatabaseを用いてチャット機能を実現しています．
そのため，RealtimeDatabaseを用いるためのAPIkeyは今回，使用者様自身が取得したものを想定しています．
したがって，実際用いる場合にはご自身でFirebaseのプロジェクトを作成し，サンプルの該当部分を変更してください．

[Firebase](https://firebase.google.com/)

# 参考
## Chrome Extension関係
[Chromeの拡張機能を自作する　- 虎の穴開発室ブログ](https://toranoana-lab.hatenablog.com/entry/2020/04/23/174421)

[Chrome拡張の開発方法まとめ その1：概念編 - Qiita](https://qiita.com/k7a/items/26d7a22233ecdf48fed8)

[Chrome 拡張機能で Firebase を ... - Google Developers Japan](https://developers-jp.googleblog.com/2016/09/how-to-use-firebase-in-chrome-extension.html)

## Firebase関係
[FirebaseのRealtime Databaseでチャットアプリを作成｜ai ...](https://note.com/airis0/n/n807f2e7cabea)

[Firebaseで1時間で簡単なWebチャットアプリが作れる ...](https://qiita.com/taketakekaho/items/52b7c196ddbd4cb3c968)


