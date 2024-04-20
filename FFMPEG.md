# 使用 Replay Mod 导出视频

1. 从 [这里](https://github.com/Khang-NT/ffmpeg-binary-android/releases/tag/2018-07-31) 下载 ffmpeg 二进制文件。根据您设备的架构选择一个版本。
   - （对于 GitHub 构建）由于 Replay 的命令窗口限制，您需要将可执行文件重命名为一个简短的名称，比如 -> `:fr:`。我们将其称为 `<exec_name>`。
2. 从 Google Play 或其他地方安装 APK 编辑器。
3. 按照应用程序的说明将可执行文件添加到 APK 的 `/lib/<device_architecture>` 文件夹中。然后构建 APK 并安装它。
   - （进行干净安装所需）安装所有必需的东西（Forge、Replay Mod）。
4. 现在启动 Minecraft。并在启动后强制关闭 Minecraft。
5. 找到 latestlog.txt 文件。
   - 打开文件并找到这一行：`Added custom env: POJAV_NATIVEDIR=<directory>`。
   - 复制 `<directory>` 部分。
6. 再次启动游戏，进入 Replay Viewer 并加载您想要导出的记录。
7. 按照 Replay 的说明添加关键帧，然后（按 T 显示鼠标指针并）点击 `Render Camera Path`。
8. 滚动到底部，在第一个命令行窗口中粘贴您在步骤 5 中复制的文本，然后在文本行末尾写上 `/<exec_name>`（步骤 1）。
9. 点击 `Render`，享受您的视频。
