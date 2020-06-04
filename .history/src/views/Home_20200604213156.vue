<template>
 <div>
  <div>
  <input type="text">
  <button @click="toGo">下个页面</button>
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
         toGo() {
         this.$router.push('/detail')
       }
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

</style>
