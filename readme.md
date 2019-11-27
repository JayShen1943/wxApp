###  小程序中的模块化 common.js node模块化

```
暴露接口
	module.exports = {
		
	}
	module.exports = function(){
	
	}
	一个文件只能返回一个接口
	
  exports.a =1234
  exports.b = 2233
  
  
  引入 require('aaa')  


es6模块化   新增
暴露接口：
	export default function(){}
	export default {}
	
	import aaa from 'aaaa'
一个文件只能暴露一个接口

	export let a=10;
	export let b=20;
	
	export {
		 a:10,
		 b:20
	}
	
	
引入 import  { a,b } from 
	import * as util from "xxx"
```