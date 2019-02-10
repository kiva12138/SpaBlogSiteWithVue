<template>
  <div id='Register'>
    <h3 class='regtitle'>请注册</h3>
    <el-upload
      class="avatar-uploader"
      action=""
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-form size='medium' class='regform'>
      <el-form-item label="用户名" :label-width="formLabelWidth">
        <el-input v-model="username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="手机号" :label-width="formLabelWidth">
        <el-input v-model="userphone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="生日" :label-width="formLabelWidth">
        <el-date-picker v-model="userbirth"
          type="date" placeholder="选择日期"
          format='yyyy-MM-dd'/>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="handleRegist">确 定</el-button>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: null,
      password: null,
      userphone: null,
      userbirth: null,
      formLabelWidth: '120px',
      imageUrl: ''
    }
  },
  methods: {
    handleRegist: function () {
      this.$message({
        message: '恭喜你，注册成功',
        type: 'success'
      })
      this.$router.push({
        path: '/login'
      })
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style>
#Register{
  margin-top: 60px;
  text-align: center;
  color: #7B7D7D;
}
.regform{
  width: 30%;
  text-align: left;
  margin-left: 32%;
  margin-top: 20px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
