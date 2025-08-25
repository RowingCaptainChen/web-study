# Vue进阶

初中级：
1. 深入理解Compositon API：深入理解Composition API的使用，掌握技巧
2. 掌握Vue生命周期钩子：掌握Vue3生命周期函数，并了解其原理
3. 了解异步组件与性能优化：了解异步组件定义与使用，能使用异步组件优化组件性能

高级：
1. 掌握自定义指令的使用与原理：掌握自定义指令，并能在特定场景通过自定义指令解决实际开发问题
2. 深入理解Vue3生命周期实现原理：深入理解Vue3生命周期实现原理，钩子函数初始化过程
3. 掌握常用内置组件并深入其原理：掌握常用内置组件，提升应用性能，并深入理解其实现原理
4. 掌握自定义Compositon API: 掌握常见Composition API的定义与实现，了解其原理

Vue3编译原理：https://vue-compiler.iamouyang.cn/guide/get-start.html

Vueuse: https://vueuse.nodejs.cn/

Vue Compsition API理解？

Vue Teleport组件作用？

## Composition API
- 基础
- 工具
- 进阶
ref
用来定义响应式数据
```js
const count = ref(0)

count.value
//模板中内部有解构过程
count
```
## reactive
属于ref的基础api， 区别在于ref的值会在模板中自动解构，不用.value
建议用ref
```js
const count = reactive({value:0})
```
## computed
计算数据，一般用在由已有状态派生出新的状态的场景
副作用
我们要关注副作用的执行时机，跟onBeforeUpdate执行时机比较
- watchEffect
- watchPostEffect
- watchSyncEffect
我们可以配置watch options来实现以上效果
```js
{
    immediate?: Immediate;
    deep?: boolean
    once?: boolean
    flush?: 'pre' | 'post' | 'sync'
}
```

## 工具函数
- isRef
判断一个数据是不是ref响应式数据
- isReactive
判断一个数据是不是reactive响应式数据
- isProxy
判断一个数据是不是代理数据
- unRef 
- toRef 
- toRefs 
- toValue

## 生命周期
```js
onBeforeMount(() => {
    console.log('onBeforeMount')
})
//被追踪的数据
onRenderTracked(() => {

})
onRenderTriggered(() => {

})
onMounted(() => {
    console.log('onMounted')
})
onBeforeUpdate(() => {
    console.log('onBeforeUpdate')
})
onUpdated(() => {
    console.log('onUpdated')
})
onBeforeUnmount(() => {
    console.log('onBeforeUnmount')
})
onUnmounted(() => {
    console.log('onUnmounted')
})

//与<KeepAlive></KeepAlive>组件一起使用，不会调用onUnmounted
onActivated(() => {
    console.log('onActivated')
})
onDeactivated(() => {
    console.log('onDeactivated')
})
//组件级别的，错误边界ErrorBoundary，捕获异常，应用不会因为error崩溃
onErrorCaptured((err, vm, info)=>{
    console.log(err, vm, info)
})
```

## 异步组件
用来优化应用，打包输出生成chunk
suspense配合异步组件使用使用
自定义指令-切面编程的体现
另外一种形式的面向切面，我们一把一些处理逻辑封装到指令中，使用的时候自定义指令即可
## Teleport
## composible
