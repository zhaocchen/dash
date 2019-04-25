version 2.7

## 基础使用

判断：

	if ：--3|--15
	比大小 -- 48 --49	排序--66

循环： 

	for in （list and str）:--1|--17
	for i, v in enumerate(list)   --69
	
	--77
	while 分桃子--80

运算

	+ --18
	// 操作符
	按位取反~55
	异或^53
	按位或 |--52
	按位与 &--51 
	移位 << >> -- 54

### Number%d%f

	拼接extend--74（类似js, set）
	bin() 二进制 --82
	oct() 八进制
	hex() 十六进制

### String%s

	长度len(str)、 str.__len__()--60|--70
		--29
	查找find，return index --62 
	拼接--86、--84  +|* --85
	截取[ : ]
	转数组split|splitlines|import re
	去除空字符strip(), rstrip(),lstrip()
		[::-1]--27
	str.join( seq )  // list转str, 需要list中个元素type必须是str
	count() --96

### List --90

	应用  --2
	append()
	insert()
	pop()
	upper()
	深复制[:]--7	--31
	排序sort --5	
	逆序 	-- 40  list.reverse() 改变list而不是return  
	list(reversed())
	[::-1] --32 --68
	插入有序列表 -- 39
	max()、min() --67 取大取小， return Ele， max(1,2,3,3) // 3
	list转str  =====  "".join(list)

### 元组

	//

### Dictionary


	转字典 --78|--100

### 函数 

	定义 --6|--34|--47|
	匿名函数 -- 49

### 输入输出

	print|print()|,表示不换行|
	raw_input('input tip:')--88	
	注：int(raw_input()) 等同 input()
	print('数位：%s\n输入的数字：%s\n逆序数字：%s' % (len(s), s, fun(s)))
	print "长度为：{0}, \n逆序为:{1}".format(l,''.join(str(x) for x in lis) )

## 模块

- random 
```
random.random()--50
```

- time

```
time --10
	.time()  ---ts
	.localtime(
	//time.struct_time(tm_year=2018, tm_mon=8, tm_mday=15, tm_hour=15, tm_min=33, tm_sec=54, tm_wday=2, tm_yday=227, tm_isdst=0)
	.sleep()延时--9
	.strftime()--10
	.clock() --91-94
datetime --16
	.datetime.now()
dateutil --95（need install）
```
- sys

```
stdout --23
	.write()
```

## 高级

	作用域演示 -- 42
	class
		color:--35 --87
	静态变量， -- 41 -- 43
	文件 open('', w).write().close() --97-98-99


## 绘图

	绘制线.create_line(x0,y0,x0,y1, width=1, fill='red') --57
	绘制矩形rectangle(int left, int top, int right, int bottom)--58 
	绘制圆、椭圆create_oval(310 - k,250 - k,310 + k,250 + k, width=1)--56 -- 63 --64（略）
	复杂图形 -- 59 --65（No）



## 练习

	互换 -- 47
	累加1-100 -- 45
	输入判断 -- 46
	99乘法表--8
	素数--12
	分解因数--14 --19
	闰年--4
	级数：
	斐波那契--6|应用--24(0.06)
	累乘	--25|--26(递归)
	杨辉三角 -- 61
	水仙花数--13
	弹球自由落体 --20
	猴子摘桃子（逆向处理）--21
	推理(排列组合) -- 22(no)
	排序 --37（no）
	输入3*3矩阵，求对角线和 -- 38， 矩阵加法 -- 44
	简单加密 --89

[python100例](http://www.runoob.com/python/python-100-examples.html)

### LeetCode

return res即可

- 二叉树深度104(.2DFS)

[密码学简明教材-python实现](http://davidlowryduda.com/a-brief-notebook-on-cryptography/)