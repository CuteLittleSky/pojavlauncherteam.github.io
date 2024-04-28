# 下载并安装PojavLauncher启动器 (Android/IOS)

## Android
在Android设备上安装PojavLauncher.   

> 一个小小的宣传栏 | [不妨来看看SKYCRAFT服务器? 1.20.4粘液科技单方块空岛生存服务器|免费飞行|基岩版互通优化|无尽|网络|异域花园|魔法水晶编年史等附属 QQ群:599951039 服务器IP:mc.skycraft.cn](https://docs.skycraft.cn/oneblock)  

**国内镜像下载:**  
[**[点我下载(提取码4454)]**](https://url51.ctfile.com/d/33285351-59813893-452981?p=4454)  
你可以从[天空导航 - Pojav下载页](https://mc.skycraft.cn/pojav/download)获取PojavLauncher/HMCLPE.  


::: details Google Play
你可以从[Google Play Store](https://play.google.com/store/apps/details?id=net.kdt.pojavlaunch)获取PojavLauncher.
:::

::: details GitHub Actions(构建版本)
**你需要登录Github账号才能下载.**

如果你想要使用测试版,你可以从Github Actions中获取最新构建版本.

1. 打开 [PojavLauncher](https://github.com/PojavLauncherTeam/PojavLauncher)仓库的[Actions](https://github.com/PojavLauncherTeam/PojavLauncher/actions)界面.

![](./images/Actions/android/Android-Actions-1.png)

2. 在workflow菜单中选择"[Android CI](https://github.com/PojavLauncherTeam/PojavLauncher/actions/workflows/android.yml)".

![](./images/Actions/android/Android-Actions-2.png)

3. 选择你想要下载的分支,并选择带有绿色或蓝色标记的构建.
    - 对于绝大多数人来说,一般选择 `v3_openjdk` 分支.

![](./images/Actions/android/Android-Actions-3.png)

4. 在 "Artifacts" 下方, 选择你需要下载的类型.
    - `app-debug` 为包含Java8运行库的版本.
    - `app-debug-noruntime` 为不包含Java8运行库的版本.
    - 若想要运行1.16以上版本,需要额外安装Java17运行库.

![](./images/Actions/android/Android-Actions-4.png)

下载完成后,使用解压缩工具解压下载后的压缩包并像安装其他安卓应用程序(.apk)的方法安装它.
:::

::: details 通过源代码构建
**请查阅[通过源代码构建]文档.**
:::

## iOS / 苹果设备
在iOS设备上安装PojavLauncher.

::: details 测载 (TrollStore)
如果可能的话，我们建议所有用户使用 TrollStore。这种方法允许自动启用 JIT，更多内存分配和非撤销安装。

按照以下步骤安装 [TrollStore](https://github.com/opa334/TrollStore).
TrollStore 兼容以下 iOS 版本：
14.0 至 15.4.1
15.5 beta 1 至 15.5 beta 4
15.6 beta 1 至 15.6 beta 5
从 [这里](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/latest/download/net.kdt.pojavlauncher.ipa) 下载最新版本。
对于特定版本，您可以在 [Releases](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases) 页面找到其安装包。
找到下载的 .ipa 文件，点击共享图标，并在可用选项列表中选择 TrollStore。
现在您可以在您的 苹果设备 上享受 Minecraft: Java 版本了！
:::

::: details 测载 (Unjailbroken)

**需要一个已登录至 [开发者门户网站](https://developer.apple.com/account) 至少一次的活跃 Apple ID。**

PojavLauncher 支持通过 AltStore、Sideloadly 和 Xcode 进行侧载。以下是使用 AltStore 的说明，其他选项请参考它们的文档。

1. 按照官方指南安装 AltStore 本身：
    - [Mac](https://faq.altstore.io/getting-started/how-to-install-altstore-macos) 和 [Windows](https://faq.altstore.io/getting-started/how-to-install-altstore-windows) 的说明
    
2. 使用此 [使用 AltStore 安装](altstore://install?url=https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/latest/download/net.kdt.pojavlauncher.ipa) 按钮安装最新版本。
    - 对于特定版本，您可以在 [Releases](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases) 页面找到其按钮。

安装 PojavLauncher 并不是 iOS 设备的终点。为了玩 Minecraft 本身，您需要[启用 JIT](./JIT.md)。
:::

::: details 测载 (Jailbroken)
**目前，不支持 AppSync Unified。** 使用 AppSync 安装时存在一个关于数据目录的 [问题](https://github.com/akemin-dayo/AppSync/issues/108)。

您可以按照 `侧载 (TrollStore)` 或 `侧载 (Unjailbroken)` 步骤在越狱的 iDevice 上进行侧载。无论使用哪种方法，您都将受益于自动启用 JIT 和更多内存分配。
:::

::: details GitHub Actions(构建版本)
**你需要登录Github账号才能下载.**  

如果你想要使用测试版,你可以从Github Actions中获取最新构建版本.

1. 打开 [PojavLauncher_IOS](https://github.com/PojavLauncherTeam/PojavLauncher_IOS)仓库的[Actions](https://github.com/PojavLauncherTeam/PojavLauncher_IOS/actions)界面.

![](./images/Actions/ios/iOS-Actions-1.png)

2. 在workflow菜单中选择"[Development Build](https://github.com/PojavLauncherTeam/PojavLauncher/actions/workflows/)".
![](./images/Actions/ios/iOS-Actions-2.png)

3. 3. 选择你想要下载的分支,并选择带有绿色或蓝色标记的构建.
    - 对于绝大多数人来说,一般选择 `main` 分支.

![](./images/Actions/ios/iOS-Actions-3.png)

4. 在 "Artifacts" 下方, 选择 `net.kdt.pojavlauncher.ipa`

![](./images/Actions/ios/iOS-Actions-4.png)

下载完成后,使用解压缩工具解压下载后的压缩包并像安装其他应用程序(.ipa)的方法(TrollStore or sideloading)安装它.
:::

::: details 通过源代码构建
**请查阅[通过源代码构建]文档.**
:::
