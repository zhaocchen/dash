[https://threejs.org/](threejs官网)

[教程]( http://www.hewebgl.com/article/articledir/1 )

[编辑器1](http://www.myjscode.com/threejs/editor/index.html)



initThree  ->   initScene  -> initLight  ->   initCamera  ->  initObject  ->  render



实现：

- 立方体（旋转）
- 线（五彩缤纷）
- 网格
- 统计动画
- 透视（动画）
- 环境光
- 球（未完成）




### 初始化

```
var renderer;
var width = window.innerWidth;
var height = window.innerHeight;
function initTree() {
	var renderer = new THREE.WebGLRenderer();  // 渲染
	renderer.setSize(width, height)  // 设置渲染器窗口大小
	document.body.appendChild(renderer.domElement)
	renderer.setClearColor(0xF0F0F0, 1.0)
}
initTree()  	
```

##  场景

```js
var scene;
function initScene() {
    scene = new THREE.Scene();  // 场景
}
```

##  相机（透视）

```js
var camera;
function initCanera() {
    var scale = width / height;
    camera = new THREE.PerspectiveCamera(45, scale, 1, 1000)   //  相机
    camera.position.x = 0
	camera.position.y = 1000          
    camera.position.z = 0
    camera.up.x = 0;
    camera.up.y = 0;
    camera.up.z = 1;
    camera.lookAt({
        x: 0,
        y: 0,
        z: 0,
    });
}
initCamera();
```



### 渲染(动画)


render( scene, camera, renderTarget, forceClear )

各个参数的意义是：
- scene：前面定义的场景
- camera：前面定义的相机
- renderTarget：渲染的目标，默认是渲染到前面定义的render变量中
- forceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为false，也会清除。


动画： requestAnimationFrame (render)

 人眼仍能继续保留其影像1/24秒左右的图像 

```
funcrion render() {
    renderer.clear()
    renderer.render(scene, camera)
    
    // 动画及规则
    
    requestAnimationFrame(render)
}
```







### 渲染(动画)


render( scene, camera, renderTarget, forceClear )

各个参数的意义是：

- scene：前面定义的场景
- camera：前面定义的相机
- renderTarget：渲染的目标，默认是渲染到前面定义的render变量中
- forceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为false，也会清除。


动画： requestAnimationFrame (render)



```
funcrion render() {
    renderer.clear()
    renderer.render(scene, camera)
    
    // 动画及规则
    
    requestAnimationFrame(render)
}
```

## 物体,  geometry  ->  material  ->   objcet  -> add(object)

- 线 Geometry + LineBasicMaterial  + Line

- 立方体  CubeGeometry + MeshBasicMaterial + Mesh

  定位 object.position.set(0,0,0)   等价于 object.position.x 、object.position.y 、object.position.z

  等价于 object.position = new THREE.Vector3(0,0,0) 

```
function initObject() {
	var geometry
	var material
	
	object = (geometry, material)
	scene.add(object)
}
initObject()


// 线
function initLine() {
	var geometry = new THREE.Geometry();	
	var p1 = new THREE.Vector3( -100, 0, 100 );
	var p2 = new THREE.Vector3(  100, 0, -100 );
	geometry.vertices.push(p1);
	geometry.vertices.push(p2);
	// 线的材质可以由2点的颜色决定
	var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0xFF0000 );
	geometry.colors.push( color1, color2 );
	
	var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors} );	

	var line = new THREE.Line( geometry, material, THREE.LinePieces );
	scene.add(line);
}

// 立方体
var cube;
function initCube() {
	var geometry = new THREE.CubeGeometry(1,1,1)
	
	var materal = new THREE.MeshBasicMaterial({
		color: 0x0D3099
	})
	
	cube = new THREE.Mesh(geometry, materal)
	// 定位
	cube.position.set(0,0,0);
	scene.add(cube)
}

// 球
var sphere;
function initSphere() {
	var sphereGeometry = new THREE.SphereGeometry(50, 50, 50, 50);
	var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x3CB371});
	var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	sphere.position.x = 200;
	sphere.position.y = 50;
	sphere.name = "sphere";
	// sphere.position.z = 200;
	scene.add(sphere);
}
```



## 光THREE.Light

- AmbientLight 环境光 ( hex ) 
- AreaLight  区域光 
- DirectionalLight  方向光   ( hex, intensity ) 
- PointLight  点光源( color, intensity, distance ) 
- SpotLight  聚光灯 ( hex, intensity, distance, angle, exponent ) 

```js
var light;
function initLight() {
    // 环境光
    light = new THREE.AmbientLight(0xFF0000);
    
    //方向光
    light = new THREE.DirectionalLight(0xFF0000, 0.8);
    light.position.set(1,0,0)
    
    
    scene.add(light)
}
initLight();
```

##  统计

 人眼仍能继续保留其影像1/24秒左右的图像 

```js
require('stats.js')

var stats ;
function initStats(params) {
    stats = new Stats();
    stats.setMode(1); // 0: fps, 1: ms
    // 将stats的界面对应左上角
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );
    setInterval( function () {
        stats.begin();
        // 你的每一帧的代码
        stats.end();
    }, 1000 / 60 );
}

initStats()

// render中添加更新
stats.update();

```

工具

- stats
-  dat.GUI()  *图形调试控件* 
-  *轨迹球控件* 