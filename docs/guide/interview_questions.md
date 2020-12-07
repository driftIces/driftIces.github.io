---
title: web前端基础面试题
date: 2019-08-08
sidebar: 'auto'
categories:
 - 前端
tags:
 - 前端
publish: true
---
## 如何兼容低版本的html5。
先利用if语句对游览器版本进行判断，再引用html5shiv脚本。

## px和em的区别。
px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。

## 浏览器的内核分别是什么?
IE: trident内核<br/>
Firefox：gecko内核<br/>
Safari：webkit内核<br/>
Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核<br/>
Chrome：Blink(基于webkit，Google与Opera Software共同开发)<br/>

## 一次完整的HTTP事务是怎样的一个过程？
基本流程：<br/>
a. 域名解析<br/>
b. 发起TCP的3次握手<br/>
c. 建立TCP连接后发起http请求<br/>
d. 服务器端响应http请求，浏览器得到html代码<br/>
e. 浏览器解析html代码，并请求html代码中的资源<br/>
f. 浏览器对页面进行渲染呈现给用户<br/>

## 你所了解到的Web攻击技术
（1）XSS（Cross-Site Scripting，跨站脚本攻击）：指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者JavaScript进行的一种攻击。<br/>
（2）SQL注入攻击<br/>
（3）CSRF（Cross-Site Request Forgeries，跨站点请求伪造）：指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。

## 行内元素，块级元素，空元素有哪些？
行内元素：`a`、`b`、`span`、`img`、`input`、`strong`、`select`、`label`、`em`、`button`、`textarea`<br/>
块级元素：`div`、`ul`、`li`、`dl`、`dt`、`dd`、`p`、`h1-h6`、`blockquote`<br/>
空元素：即系没有内容的HTML元素，例如：`br`、`meta`、`hr`、`link`、`input`、`img`<br/>

## 阐述清楚浮动的几种方式（常见问题）
①.父级div定义 height<br/>
原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。 <br/>
优点：简单、代码少、容易掌握 <br/>
缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题<br/>
②.父级div定义 overflow:hidden<br/>
原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度 <br/>
优点：简单、代码少、浏览器支持好<br/>
③. 结尾处加空div标签 clear:both<br/>
原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度 <br/>
优点：简单、代码少、浏览器支持好、不容易出现怪问题<br/>
缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div，让人感觉很不好<br/>

## 解释css sprites ，如何使用？
CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，<br/>“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。<br/>
CSS Sprites为一些大型的网站节约了带宽，让提高了用户的加载速度和用户体验，不需要加载更多的图片。<br/>

## 请描述一下 cookies sessionStorage和localstorage区别
sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。<br/>
因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。<br/>
## web storage和cookie的区别
Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。<br/>
除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。<br/>

## document.write和innerHTML的区别：
document.write是直接写入到页面的内容流，如果在写之前没有调用document.open, 浏览器会自动调用open。每次写完关闭之后重新调用该函数，会导致页面被重写。<br/>
innerHTML则是DOM页面元素的一个属性，代表该元素的html内容。你可以精确到某一个具体的元素来进行更改。如果想修改document的内容，则需要修改document.documentElement.innerElement。<br/>
innerHTML将内容写入某个DOM节点，不会导致页面全部重绘。<br/>
innerHTML很多情况下都优于document.write，其原因在于其允许更精确的控制要刷新页面的那一个部分。<br/>

## xml和json的区别，请用四个词语来形容
·  JSON相对于XML来讲，数据的体积小，传递的速度更快些<br/>
·  JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互<br/>
·  XML对数据描述性比较好；<br/>
·  JSON的速度要远远快于XML<br/>

## http 和 https 有何区别？如何灵活使用？
http是HTTP协议运行在TCP之上。所有传输的内容都是明文，客户端和服务器端都无法验证对方的身份。<br/>
https是HTTP运行在SSL/TLS之上，SSL/TLS运行在TCP之上。<br/>
所有传输的内容都经过加密，加密采用对称加密，但对称加密的密钥用服务器方的证书进行了非对称加密。此外客户端可以验证服务器端的身份，如果配置了客户端验证，服务器方也可以验证客户端的身份<br/>


## 对前端工程师这个职位你是怎么样理解的？
①. 前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好<br/>
②. 参与项目，快速高质量完成实现效果图，精确到1px；<br/>
③. 与团队成员，UI设计，产品经理的沟通；<br/>
④. 做好的页面结构，页面重构和用户体验；<br/>
⑤. 处理hack，兼容、写出优美的代码格式；<br/>
⑥. 针对服务器的优化、拥抱最新前端技术。<br/>



编程部分。
1.css实现水平居中。

```html
   <div class="wrapper">
        <div class="content"></div>
    </div>    
    .wrapper {
      position: relative;
      width: 500px;
      height: 500px;
      background-color: #ddd;
     }
    .content{
        background-color:#6699FF;
        width:200px;
        height:200px;
        position: absolute;        //父元素需要相对定位
        top: 50%;
        left: 50%;
        margin-top:-100px ;   //二分之一的height，width
        margin-left: -100px;
    } 
```

2.各种CSS样式缩写。(上右下左)

`margin:1em 0 2em 0.5em;`
`border:width style color;`
`background:color image repeat attachment position;`
`font:italic small-caps bold 1em/140% "Lucida Grande",sans-serif;`
`list-style:square inside url(image.gif);`

3.如何用原生js给一个按钮绑定两个onclick事件？

```js
Var  btn=document.getElementById(‘btn’);
//事件监听 绑定多个事件
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click",hello1);
btn4.addEventListener("click",hello2);

function hello1(){
 alert("hello 1");
}
function hello2(){
 alert("hello 2");
}
```

4.如何消除一个数组里面重复的元素？

```js
var arr1 =[1,2,2,2,3,3,3,4,5,6],
    arr2 = [];
for(var i = 0,len = arr1.length; i< len; i++){
    if(arr2.indexOf(arr1[i]) < 0){
        arr2.push(arr1[i]);
    }
}
document.write(arr2); // 1,2,3,4,5,6
```



5. 块级元素水平垂直居中的方法有哪些

```css
.mycss{ 
   width:300px;  
   height:200px;  
   position:absolute;  
   left:50%;  
   top:50%;  
   margin:-100px 0 0 -150px 
}
```

