# iOS 和 "JIT"

## JIT 是什么，我为什么要关心它？
JIT 代表**即时编译**，虽然不专属于 Java，但它作为一种在运行时执行 Java 代码的方法，比其他方式更快地执行，通过在运行时按需编译函数，而不是通过较慢的方法重复编译所有代码或以不太可移植的硬件级格式编写。它是在移动设备上运行《Minecraft：Java 版》的最快方法，基本上是可用体验所必需的。

在苹果的移动平台上（iOS、iPadOS、tvOS，在我们这里），一个名为**代码签名**的安全功能深深植根于系统的运作中。它用于验证应用程序在用户安装后未被篡改，以防止恶意负载在安装后由恶意人员安装。然而，由于代码签名的工作方式，这会阻止 JIT 正常工作，因为它通过读取代码、修改代码，然后以某种方式执行它来工作（无论是通过将代码复制到内存中的新位置、直接执行还是镜像）。

## 这对于 PojavLauncher 意味着什么？

### 越狱设备
越狱设备用户不需要担心 JIT 要求，因为 PojavLauncher 被构建为检测越狱并自动启用新功能。

### 未越狱设备
未越狱设备用户可能会看到两种不同的结果，取决于他们用什么方式侧载 PojavLauncher。

#### TrollStore
如果你使用 TrollStore 来侧载 PojavLauncher，好消息：PojavLauncher 利用了 TrollStore 的扩展功能，并在启动时自动启用 JIT。

#### 普通侧载
如果你正常侧载，你需要以某种方式启用 JIT。最常见的方法是在应用程序运行时附加调试服务器 - JITStreamer、AltStore 和 Jitterbug 都使用这个功能来启用 JIT。这种方法的唯一缺点是你需要连接到 WiFi 网络才能启用 JIT。

PojavLauncher 与 JITStreamer 有本地集成，我们建议按照 [这里](https://jitstreamer.com/?slide=home) 提供的步骤开始。或者，你可以使用 [AltStore](https://faq.altstore.io/how-to-use-altstore/altjit)，对于更高级的用户，也可以使用 [Jitterbug](https://github.com/osy/Jitterbug/tree/main/Jitterbug)。我们不确认或不建议使用此处未列出的方法与 PojavLauncher 一起使用。
