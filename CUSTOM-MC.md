# 安装老版本的 Minecraft

如果您想要运行旧的模组或整合包（Minecraft 1.2.4 及更旧版本），那么这个方法适合您。警告，不适合新手！

### 安装步骤：

1. 请安装 [**MiXplorer**](https://forum.xda-developers.com/showpost.php?p=23109280&postcount=2) 和 [**MiX Archive**](https://play.google.com/store/apps/details?id=com.mixplorer.addon.archive)。
2. 复制您想要修改的 Minecraft 版本。
3. 将自定义版本的文件夹、.jar 文件和 .json 文件重命名为您想要的自定义版本名称（例如，**foo**、**foo.jar**、**foo.json**）。
4. 使用 MiX 的 **文本编辑器** 打开自定义版本的 .json 文件。
5. 删除 `"downloads:{"client"...}`，如屏幕截图所示。

![custom2](https://user-images.githubusercontent.com/85581164/220926885-d25e911f-98c4-4989-af06-f1bd81acc7e2.jpg)

6. 将 `"id": "1.2.4"` 更改为 `"id": "(您的自定义版本名称)"`。
7. 将 `"mainClass": "net.minecraft.launchwrapper.Launch"` 更改为 `"mainClass": "net.minecraft.client.Minecraft"`。
8. 保存 .json 文件。
9. 根据需要修改您的 .jar 文件，确保之后删除 `META-INF` 文件夹。
10. 启动您的自定义版本！

### 注意事项：
* 如果您的游戏在 Mojang 屏幕卡住，尝试删除 **options.txt** 文件。
* 本指南 **不适用** 于 Babric 或 Cursed Fabric！
