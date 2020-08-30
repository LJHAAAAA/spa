# 自定义UI组件

整体参考案例: -[自定义UI组件](https://spa.wangding.in/chapters/ch07-diy-ui-component.html)

H5的组件大致经历了以下三个阶段: 
H5内置空间 -> 第三方组件 -> 自定义组件(功能逐渐完善)  
**用户可以根据自己的需求去选择对应的组件**  



### H5通用的对话框
+ alert
+ prompt
+ confirm
+ file 
+ color
依次对应如下
![](https://s1.ax1x.com/2020/08/30/db4f0J.png)



### 何谓组件化开发
+ 页面上的每个**独立的**可视/可交互区域视为一个组件
+ **每个组件对应一个工程目录**,组件所需的各类资源都在这个目录
+ 组件具有独立性,所以组件之间可以相互配合
+ 页面只不过是组件的容器，负责组合组件形成功能完整的界面
+ 当不需要某个组件，或者想要替换组件时，可以整个目录删除/替换 

组件化开发具有较高的通用性，无论是前端渲染的单页面应用，还是后端模板渲染的多页面应用，组件化开发的概念都能适用。组件HTML部分根据业务选型的不同，可以是静态的HTML文件，可以是前端模板，也可以是后端模板



### 完整前端项目的组成
整个前端项目可以划分为：JS模块 + CSS模块 + UI组件 + 页面 + 应用
对应作用如下图
![](https://s1.ax1x.com/2020/08/30/dbHGfs.png)



### 组件绘制
+ 通过模板字符串
```
var html = '<input type="button" value="同意">'
$('div.box').html(html);
```
+ 操作DOM节点
```
var $button = $('<input type="button" value="同意">');
$('div.box').append($button);
```

### 组件样式
+ 外部样式表
```
<link rel="stylesheet" href="03-button.css">
<script src="03-button.js"></script>
```
+ 内部直接设置
```
$btn.css({
  'width':'130px',
  ..........
})
```

### 组件封装
![](https://s1.ax1x.com/2020/08/30/dbqJs0.md.png)


### 组件参数化
+ container:组件的容器
+ title:定时器按钮的文字
+ sLength: 定时器的时长
+ enabled: 定时器按钮初始状态是否启用
+ 样式: 定时器按钮的样式
