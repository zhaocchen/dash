相机（自带）

 透视投影有一个基本点，就是远处的物体比近处的物体小 .

- 正投影 ，  OrthographicCamera( left, right, top, bottom, near, far ) 
- 透视投影 ，  PerspectiveCamera( fov, aspect, near, far ) 

- 视点

- 观察点

- 上方向

```
// 创建
var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000)
```





| 方法/属性                          | 描述         | 注释 |
| ---------------------------------- | ------------ | ---- |
| position.set(0, 400, 800)          | 视点         |      |
| position.x, position.y, position.z |              |      |
| up.x,  up.y,  up.z                 | 上方向       |      |
| lookAt(new THREE.Vector3(0, 0, 0)) | 观察点       |      |
| aspect                             | 更新aspect   |      |
| updateProjectionMatrix             | 更新投影矩阵 |      |



常见视角



```
// 前俯视
this.camera.position.set(0, 1000, 1800); 

// 后俯视
// this.camera.position.set(0, 1000, -1800);

// 右俯视
// this.camera.position.set(1800, 1000, 0);

// 左俯视
// this.camera.position.set(-1800, 1000, 0);

// 正前
// this.camera.position.set(0, 1800, 0);

// 正后
// this.camera.position.set(0, -1000, 0);

// 正右
// this.camera.position.set(0, 0, 1800);

// 正左
// this.camera.position.set(0, 0, -1800);

// 正上
// this.camera.position.set(1800, 0, 0);

// 正下
// this.camera.position.set(-1800, 0, 0);
```

