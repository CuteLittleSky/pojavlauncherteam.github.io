# "应用未安装"错误

错误消息如下：

<img src="https://media.discordapp.net/attachments/755410958100201472/1081249821907750974/image.png?width=575&amp;height=146" alt="Image"/>

不确定为什么会发生这种情况，但这只发生在 VenomousSteam81 开发版本中.

---

## 使用 电脑 安装 （适用于所有 Android 版本）

要修复此问题，只需准备好您的 电脑，安装 [Android 调试桥 (ADB)](https://developer.android.com/studio/releases/platform-tools).然后搜索如何在您的操作系统上使用 adb,找到解决方法后,将您的手机连接到电脑上.

现在,下载您在手机上下载的 PojavLauncher 版本（或者从手机上复制）,执行 `adb pm install path/to/pojavlauncher/apk.apk`（如果这样不起作用并显示错误，请使用 `adb shell pm install path/to/pojavlauncher/apk.apk`）,然后它应该会安装.如果没有,请在 [wiki github](https://github.com/PojavLauncherTeam/pojavlauncherteam.github.io) 上提出问题，并确保提到 VenomousSteam81。

---

## 无需 电脑 安装（仅适用于 Android 11 及更新版本）

首先，转到设置并启用开发者选项（不告诉您如何执行此操作），打开无线 ADB，接受所有 ADB 相关内容，然后[下载并在 termux 中自行构建](https://github.com/tytydraco/ladb)，从 [Play 商店](https://play.google.com/store/apps/details?id=com.draco.ladb) 购买该应用，或在互联网上找到某个 apk.

接下来,从 [GitHub Actions](https://github.com/PojavLauncherTeam/PojavLauncher/actions) 下载 PojavLauncher.打开 LADB,接受 ADB 连接,然后键入（或复制粘贴）`pm install path/to/pojavlauncher/apk.apk`.如果这也不起作用，请在 [wiki github](https://github.com/PojavLauncherTeam/pojavlauncherteam.github.io) 上提出问题,并确保提到 VenomousSteam81.
