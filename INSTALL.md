# 安装PojavLauncher启动器

## Android
在Android设备上安装PojavLauncher.  
> 一个小小的宣传栏 | [不妨来看看SKYCRAFT服务器? 1.20.4粘液科技单方块空岛生存服务器|免费飞行|基岩版互通优化|无尽|网络|异域花园|魔法水晶编年史等附属 QQ群:599951039 服务器IP:mc.skycraft.cn](https://docs.skycraft.cn/oneblock)  

::: detais 国内镜像下载
你可以从[天空导航 - Pojav下载页](https://mc.skycraft.cn/pojav/download)获取PojavLauncher.
:::

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

## iOS
在iOS设备上安装PojavLauncher.

::: details 测载 (TrollStore)
We recommend TrollStore for all users if possible. This method allows for automatic JIT enabling, more memory allocation, and non-revoking installs.

1. Follow the steps to install [TrollStore](https://github.com/opa334/TrollStore).
    - TrollStore is compatible with the following iOS versions:
        - 14.0 to 15.4.1
        - 15.5 beta 1 to 15.5 beta 4
        - 15.6 beta 1 to 15.6 beta 5

2. Download the latest release from [here](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/latest/download/net.kdt.pojavlauncher.ipa).
    - For a specific release, you can find its package on the [Releases](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases) page

3. Locate where the .ipa was downloaded, tap the Share icon, and choose TrollStore in the list of options available.

You can now enjoy Minecraft: Java Edition on your iDevice!
:::

::: details 测载 (Unjailbroken)
**Requires an active Apple ID, that has signed into the [Developer Portal](https://developer.apple.com/account) at least once.**

PojavLauncher supports being sideloaded with AltStore, Sideloadly, and Xcode. Instructions to use AltStore are below--for other options, refer to their documentation.

1. Follow the official guide on installing AltStore itself:
    - Instructions for [Mac](https://faq.altstore.io/getting-started/how-to-install-altstore-macos) and [Windows](https://faq.altstore.io/getting-started/how-to-install-altstore-windows)
    
2. Install the latest release using this [Install with AltStore](altstore://install?url=https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases/latest/download/net.kdt.pojavlauncher.ipa) button.
    - For a specific release, you can find its button on the [Releases](https://github.com/PojavLauncherTeam/PojavLauncher_iOS/releases) page

Installing PojavLauncher is not the end for iOS devices. In order to play Minecraft itself, you will need to [enable JIT](./JIT.md).
:::

::: details 测载 (Jailbroken)
**Currently, AppSync Unified is not supported.** There is an [issue](https://github.com/akemin-dayo/AppSync/issues/108) regarding the data directory when installed with AppSync.

You can follow the `Sideloading (TrollStore)` or `Sideloading (Unjailbroken)` steps to sideload on a jailbroken iDevice. Regardless of the method, you will benefit from automatic JIT enabling and more memory allocation.
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
