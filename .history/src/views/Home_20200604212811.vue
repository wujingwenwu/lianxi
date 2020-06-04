<template>
 <div>
  <div>
  <input type="text">
  <button @click="azz">下个页面</button>
 </div>
   
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
       azz(){
         this.$youter.push('detail')
       }
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>
