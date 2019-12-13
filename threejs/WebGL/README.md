WebGL: Web Graphics Library, 一种网页3D绘图标准, 为HTML5 Canvas提供硬件3D加速渲染

解决：

1. 通过HTML脚本本身实现Web交互式三维动画的制作，无需任何浏览器插件支持

2. 利用底层的图形硬件加速功能进行的图形渲染，是通过统一的、标准的、跨平台的OpenGL接口实现的

   [教程]( https://www.w3cschool.cn/webgl/6fg21oh0.html )

threejs, 一款开源的主流3D绘图JS引擎

thingjs



- 场景（scene）：容器
- 相机（camera）： 透视相机
- 物体对象（Mesh）： 点线面、三维物体、模型
- 光源（Light）：全局光、平行光、点光源
- 渲染器（renderer）： webGL、canvas2D、css3D
- 控制器(Control): 键盘鼠标移动相机

 setLookAt(eyeX,eyeY,eyeZ,atX,atY,atZ,upX,upY,upZ) 

- 视点

- 观察点

- 上方向

  

 getContext（'canvas'）



getContext('webgl')

渲染管线（Pipeline）

### WebGLShader 对象

顶点/片元着色器(vertex shader / fragment shader)

创建对象  ->  挂载glsl源码   ->  编译着色器
createShader(type: gl.VERTEX_SHADER|gl.FRAGMENT_SHADER) -> shaderSource -> compileShader

```
function createShader (gl, sourceCode, type) {
  // Compiles either a shader of type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
  var shader = gl.createShader( type ); // WebGLShader {}
  gl.shaderSource( shader, sourceCode );
  gl.compileShader( shader );

  if ( !gl.getShaderParameter(shader, gl.COMPILE_STATUS) ) {
    var info = gl.getShaderInfoLog( shader );
    throw "Could not compile WebGL program. \n\n" + info;
  }
  return shader;
}

```
### WebGLProgram 对象

创建对象  ->  添加预存的着色器  -> 

createProgram -> attachShader -> linkProgram -> useProgram -> deleteProgram
- drawArrays/ drawElements 

gl.drawArrays(mode, first, count)



 数据的类型  normalizeFlag = true(false)

- BYTE  [-128, 127] ([-1.0, 1.0] )
-  UNSIGNED_ BYTE  [0, 255]
- FLOAT
- INT
- SHORT [-32768, 32767]
- UNSIGNED_SHORT  

mode:

- gl.POINTS 点
- gl.LINE_STRIP
- gl.LINE_LOOP
- gl.LINES
- gl.TRIANGLES  三角


### WebGLBuffer 对象

创建缓存  -> 绑定缓存  ->  数据拷贝到缓存  -> 分配attribute变量 -> 开启变量

createBuffer  ->   bindBuffer  ->  bufferData   ->    vertexAttribPointer   ->  enableVertexAttribArray



 **纹理** :  activeTexture   ->   bindTexture   texParameteri   texImage2D      



 createFramebuffer    framebufferTexture2D 

clearColor

clear

getAttribLocation 获取attribute变量的位置信息

getUniformLocation



 一致性变量  :  uniform4f

 Float32Array 



 Uint8Array 



 属性可以使用 float，vec2，vec3，vec4，mat2，mat3 和 mat4 作为类型 



 GLSL是图像库着色器语言的简称。语言着色器就是被写在这里。它具有一些 JavaScript 中不存在的独特的特性。 它用于实现一些逻辑来渲染图像。比如，它可以创建类似于 vec2，vec3 和 vec4 分别表示2、3、4个值。类似的，mat2，mat3 和 mat4 来表示 2x2,3x3,4x4 的矩阵。可以实现 vec 来乘以一个标量。 



 uniform vec2 u_translation;

uniform vec2 u_rotation; 






[暮志未晚实现参考](<https://www.wjceo.com/blog/threejs/>)

