# 渲染器 (Renderers)
Minecraft 运行在 OpenGL 上，而移动设备通常只支持 OpenGL ES（GLES）。由于 Minecraft 无法在 GLES 上运行，我们必须使用渲染器作为 OpenGL ES 和 OpenGL 之间的兼容层。

## Holy GL4ES
- Holy GL4ES 专为性能而设计，是 PojavLauncher 的默认渲染器，几乎在所有情况下都应该使用。
- 支持 OpenGL 2.1，并具有着色器转换功能，因此大约相当于 OpenGL 3.x 标准的 1/8。
- 适用于所有版本的原版 Minecraft。

### Holy GL4ES 运行 Minecraft 1.19.4 的截图
![holygl4es](https://cdn.discordapp.com/attachments/967462820012773466/1094267417980579890/Screenshot_2023-04-08-16-17-56-860_net.kdt.pojavlaunch.debug.jpg)

## ANGLE
- 比 Holy GL4ES 稍慢，运行在 Vulkan 上。应仅在特定情况下使用，例如无法加载服务器资源包或由于缺少 OpenGL 扩展而无法运行的 mod。
- 仅支持 OpenGL 3.2。
- 仅适用于 Minecraft 1.17+。

### ANGLE 运行 Minecraft 1.19.4 的截图
![angle](https://cdn.discordapp.com/attachments/967462820012773466/1094267418236428288/Screenshot_2023-04-08-16-19-39-025_net.kdt.pojavlaunch.debug.jpg)

## virglrenderer
- 非常慢，将很快被移除。它唯一的用例是由于缺少 OpenGL 扩展和运行着色器而无法运行的 mod。
- 支持 OpenGL 4.3。
- 适用于 Minecraft 1.7+，可能会极其不稳定。

### virglrenderer 运行 Minecraft 1.12.2 的截图
![virglrenderer](https://cdn.discordapp.com/attachments/967462820012773466/1094267418517454858/Screenshot_2023-04-08-16-27-08-363_net.kdt.pojavlaunch.debug.jpg)
