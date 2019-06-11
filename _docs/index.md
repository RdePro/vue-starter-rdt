---
title: 关于
subTitle: About
order: 12
---

### 关于

rdc-vue-starter是基于RDE模式开发vue工程的容器，你可以使用它快速创建一个vue工程

### 创建工程

搭建好的容器可以通过下面命令直接创建工程：

```shell
$ rde create
```

如该容器可以使用下面命令创建：

```shell
$ rde create rdebase/rdc-vue-suite
```

您可以在[Docker Hub](https://cloud.docker.com/repository/docker/rdebase/rdc-vue-starter/general)上查询最新版本

### 快速开始

工程创建后，可以先使用`rde serve`命令，启动调试，该命令serve的其实是`template/main.js`文件。`main.js`引用了`app/App.vue`。

如果您对`main.js`为啥可以引用`app/App.vue`有疑惑的话，可以阅读下 [RDC 模式选择的说明](https://kaola-fed.github.io/RDE/rdc/modes.html)

