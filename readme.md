### 模板 代码片段

```
只有两个文件
一个是wxml wxss 
只是代码块 每天任何逻辑 所以 没有 .js 逻辑代码

template
	Head
		Head.wxml
			<template name="head">
                <view class="head">
                    我是公共的头部
                    {{ title }}
                    <!-- {{ obj.name }}
                    {{ obj.content }} -->
                    {{ name }}
                    {{ content }}
                </view>
            </template>
		Head.wxss
			.head{
                width:100%;
                height:100rpx;
                line-height:100rpx;
                text-align: center;
                color:#dcdf98;
            }
            
   在home中使用
   pages
   	home
   		home.wxml
            <import src="/template/Head/Head.wxml"/>
            <view class="container">
                <!-- <template is="head" data="{{title:'小明真棒',obj}}"/> -->
                 <template is="head" data="{{title:'小明真棒',...obj}}"/>
            </view>
   		home.wxss
   			@import "/template/Head/Head.wxss"; //在头部 前面不要有其他代码
   		home.js
   		home.json
```