[https://threejs.org/](threejs官网)

[教程]( http://www.hewebgl.com/article/articledir/1 )

[编辑器1](http://www.myjscode.com/threejs/editor/index.html)



```html
initThree  -> 
```

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



