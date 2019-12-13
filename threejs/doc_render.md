渲染（自带）

```
// 创建, W大写
var renderer = new  THREE.WebGLRenderer()

$("#WebGL-output").append(renderer.domElement)

// 循环渲染， 借助函数 requestAnimationFrame

function animate() {
	render(scene, camera)
	requestAnimationFrame(animate)
}

animate()
```



| 方法/属性                | 描述         | 数据类型 | 示例 |
| ------------------------ | ------------ | -------- | ---- |
| render(scene, camera)    | 开始渲染     | 方法     |      |
| setClearColor(0x)        | 背景颜色     | 方法     |      |
| getClearColor().getHex() | 获取背景颜色 | --       |      |
| setSize(width, height)   | 范围         | 方法     |      |
| antialias                | 锯齿         | Boolean  |      |
| autoClear                | 自动清除     | Boolean  |      |
|                          |              |          |      |





requestAnimationFrame开启动画 

cancelAnimationFrame取消动画