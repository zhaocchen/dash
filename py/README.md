version 2.7

## 基础使用

判断：

	if ：--3|--15
	比大小 -- 48

循环： 

	for in （list and str）:--1|--17
		遍历enumerate
		
	--77

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

### String%s

	长度len(str)、 str.__len__()--60|--70
		--29
	查找find--62 
	拼接--86、--84
	截取[ : ]
	转数组split|splitlines|import re
	去除空字符strip(), rstrip(),lstrip()
	倒置 list(reversed()) --32
		[::-1]--27
	str.join( seq )

### List

	应用  --2
	append()
	insert()
	pop()
	upper()
	深复制[:]--7	--31
	排序sort --5	
	逆序list(reversed()) 	-- 40
	[::-1] --32

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
	print('数位：%s\n输入的数字：%s\n逆序数字：%s' % (len(s), s, fun(s)))
	print "长度为：{0}, \n逆序为:{1}".format(l,''.join(str(x) for x in lis) )

## 模块


	random random.random()--50
	stdout --23
	time --10
		.time()  ---ts
		.localtime()
	//time.struct_time(tm_year=2018, tm_mon=8, tm_mday=15, tm_hour=15, tm_min=33, tm_sec=54, tm_wday=2, tm_yday=227, tm_isdst=0)
		.sleep()延时--9
		.strftime()--10
	datetime --16
		.datetime.now()


## 高级

	作用域演示 -- 42
	class
		color:--35
	静态变量， -- 41 -- 43


## 绘图

	绘制线.create_line(x0,y0,x0,y1, width=1, fill='red') --57
	绘制矩形rectangle(int left, int top, int right, int bottom)--58 
	绘制圆create_oval(310 - k,250 - k,310 + k,250 + k, width=1)--56
	复杂图形 -- 59
	--64unfinished
	

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
	水仙花数--13
	弹球自由落体 --20
	猴子摘桃子（逆向处理）--21
	推理(排列组合) -- 22(no)
	排序 --37（no）
	输入3*3矩阵，求对角线和 -- 38， 矩阵加法 -- 44
	插入有序列表 -- 39