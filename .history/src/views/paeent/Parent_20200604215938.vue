<template>
 <div>
   <div class="item">我是头部组件</div>
   <div class="item1">我是侧边栏</div>
   <router-v></router-v>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.item{
    width: 100%;
    height: 50px;
    background: royalblue;
}
.item1{
    width: 100px;
    height: 300px;
    background: springgreen;
}
</style>