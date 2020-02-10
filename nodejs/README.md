nodejs是一个异步的事件驱动的JS运行时。

- 非阻塞I/O

- 事件驱动

  运行`node filename.js`即可。自动重启工具`nodemon`

### module

引入方式 `const http = require('htpp')`, 第三方库需要安装到webpack工程中， 自定义模块需要在文件中导出`module.exports = {}`

####  http

手动终止win被占用端口

```
netstat -aon|findstr "8888"
  TCP    0.0.0.0:8888           0.0.0.0:0              LISTENING       12420
  TCP    [::]:8888              [::]:0                 LISTENING       12420
  TCP    [::1]:8888             [::1]:52026            TIME_WAIT       0
  TCP    [::1]:52027            [::1]:8888             TIME_WAIT       0
tasklist|findstr "12420"
node.exe                     12420 Console                    2     20,744 K
taskkill /f /t /im node.exe
成功: 已终止 PID 12420 (属于 PID 9792 子进程)的进程。
```

#### fs

- fs.readFile(fileName, (err, data) => {})  ， 其中读取的为Buffer对象（二进制格式） 

  - toString()

  - toString('utf-8')
  - promsify包裹

#### buffer

- alloc(number) 分配内存空间
- write(data) 写入
- from 二进制赋值
- concat 拼接

#### 第三方

`npm/yarn init -y`

1. cpu-stat