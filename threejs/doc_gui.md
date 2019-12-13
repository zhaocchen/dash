

示例

```js
// 创建

var gui = new dat.GUI();

// 添加目录

// 是否需要辅助线
var helperGui = gui.addFolder('Helper');
        helperGui.add(controls,'gridHelper').onChange(function (e) {
            console.log(e);
            if (e){
                scene.remove(gridHelper);
            }else{
                scene.add(gridHelper);
            }
        });


```

api

| 方法               | 描述 | 示例 |
| ------------------ | ---- | ---- |
| addFolder(名称)    |      |      |
| add(controls,组件) |      |      |
| onChange(事件函数) |      |      |

添加现况控制

```
var meshGui = gui.addFolder("Mesh");
        meshGui.add(controls,'wireframe').onChange(function (e) {
            cubeMaterial.wireframe = e;
        });
        meshGui.addColor(controls,'color').onChange(function (e) {
            cubeMaterial.color.setStyle(e);
        })
        meshGui.add(controls,'rotationSpeed',0, 0.1);
```

添加背景

```
var sceneGui = gui.addFolder('Scene');
        sceneGui.addColor(controls,'backGround').onChange(function (e) {
            webGlRenderer.setClearColor(e)
        })
```

