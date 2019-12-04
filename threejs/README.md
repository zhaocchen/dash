[https://threejs.org/](threejs官网)

[教程]( http://www.hewebgl.com/article/articledir/1 )

[编辑器1](http://www.myjscode.com/threejs/editor/index.html)



initThree  ->   initScene  -> initLight  ->   initCamera  ->initMesh  ->  render



实现：

- 立方体（旋转）
- 线（五彩缤纷）
- 网格
- 统计动画
- 透视（动画）
- 环境光
- 球（未完成）




### 基础

```
var scene = new THREE.Scene();  // 场景		
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);   //  相机		
var renderer = new THREE.WebGLRenderer();  // 渲染		
renderer.setSize(window.innerWidth, window.innerHeight);  //  设置渲染器窗口大小	
document.body.appendChild(renderer.domElement);
```



### 渲染

```
render( scene, camera, renderTarget, forceClear )

各个参数的意义是：

scene：前面定义的场景

camera：前面定义的相机

renderTarget：渲染的目标，默认是渲染到前面定义的render变量中

forceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为false，也会清除。
```

### 动画

 requestAnimationFrame (render)



 人眼仍能继续保留其影像1/24秒左右的图像 

## 透视

 透视投影有一个基本点，就是远处的物体比近处的物体小 .

- 正投影 ，  OrthographicCamera( left, right, top, bottom, near, far ) 

-  透视投影 ，  PerspectiveCamera( fov, aspect, near, far ) 

## 光THREE.Light

- AmbientLight 环境光 ( hex ) 
- AreaLight  区域光 
- DirectionalLight  方向光   ( hex, intensity ) 
- PointLight  点光源( color, intensity, distance ) 
- SpotLight  聚光灯 ( hex, intensity, distance, angle, exponent ) 