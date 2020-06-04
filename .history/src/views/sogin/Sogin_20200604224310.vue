<template>
 <div>
   用户名：<input type="text" v-model="username">
   <br>
   密码：<input type="text" v-model="password"><br>
   <button @click="sogin">登录</button>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{

    },
   data () {
     return {
       username:'',
       password:''
   }
   },
   components: {

   },
   methods: {
       sogin(){
            let  user = {
                username: this.username
            }
            localStorage.setItem('user',JSON.stringify(user))
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