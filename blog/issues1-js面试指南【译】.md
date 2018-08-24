# 破解js面试的完美指南(开发者视角) #

  为了向你说明js面试的复杂性， 尝试给出代码段的输出。	

	console.log(2.0 == '2' == new Boolean(true) == '1')
	// true

十有八九的会给出false， 其实运行结果是true。

JavaScript是难的。 如果面试者太聪明以至于询问以上问题， 我们并不能做什么。 但是什么是我们应该准备的呢？深入学习这十一个基本知识点，有助于你的JS面试。

## 1.熟悉js函数 ##

function 是JavaScript的精髓。不同于其他语言， 在js中， 一个函数可以分配成一个变量， 作为参数传递给其他函数也可以作为其他函数的返回值。

	console.log(square1(5));
	/* ... */
	function square1(n) { return n * n; }
	// 25

	console.log(square2(5)); 
	var square2 = function(n) { 
	  return n * n; 
	}
	// square2 is not a function

JS中， 如果你把函数定义为变量， 变量的名字会被提升， 但是JS执行到它的定义才能被访问。


你可能在一些代码中频繁的如下语法。

	var simpleLibrary = function() {
	   var simpleLibrary = {
	        a: 0,
	        b: 0,
	        add: function(a, b) {
	            return a + b;
	        },
	        subtract: function(a, b) {
	            return a - b;   
	        }
	   }
	  return simpleLibrary;
	}();

一个函数变量中变量和函数被分装， 可以避免全局变量污染。 从JQuery到Lodash的库采用这用技术提供$等

## 2.熟悉bind、apply和call ##

## 3.熟悉js作用域(闭包) ##

JS作用域是一个潘多拉魔盒。数以百计的面试难题有这个概念构成。 有三种作用域：

1. 全局作用域
2. 本地/函数作用域
3. 块级作用域(ES6引进)

全局作用域是我们通常做的那样：

	x = 10;
	function Foo() {
	  console.log(x); // Prints 10
	}
	Foo()

函数作用域生效当你定义一个局部变量时：

	pi = 3.14;
	function circumference(radius) {    
	     pi = 3.14159;
	     console.log(2 * pi * radius); // Prints "12.56636" not "12.56"
	}
	circumference(2);

ES16标准

## 4.熟悉this(全局域、函数域、对象域) ##

## 5.熟悉对象(freeze、seal属性) ##

## 6.熟悉原型继承 ##

## 7.熟悉callback和promise ##

## 8.熟悉正则表达 ##

## 9.熟悉map、reduce和filter ##

## 10.熟悉异常处理模式 ##

## 其他(提升机制和事件冒泡) ##


[阅读原文](https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d)

[运行代码](https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions)