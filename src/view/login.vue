/* eslint-disable vue/no-parsing-error */
<template>
  <div class="contair">
   <el-card class="box-card">
     <img src="../assets/logo_index.png" alt="">
     <el-form ref="form" :model="form">
         <el-form-item >
    <el-input v-model="form.model" placeholder="请输入手机号"></el-input>
  </el-form-item>
    <el-form-item>
    <el-input v-model="form.number" placeholder="请输入验证码" style='width:320px'></el-input>
    <el-button type="primary"  style="margin-left:20px">点击验证</el-button>
  </el-form-item>
   <el-form-item>
       <el-checkbox name="type" :value='true'>我已经同意阅读</el-checkbox>
        </el-form-item>
  <el-form-item>
           <el-button type="primary"  style="width:100%">点击验证</el-button>
           </el-form-item>
</el-form>
</el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        model: '',
        number: ''

      }
    }
  }
}
</script>

<style lang="less">
.contair {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background:url(../assets/login_bg.jpg) no-repeat center / cover
}
 .el-card {
    width: 480px;
    height: 330px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    img{
    width:200px;
    display: block;
    margin: 0 auto 20px;
  }
  }
</style>
