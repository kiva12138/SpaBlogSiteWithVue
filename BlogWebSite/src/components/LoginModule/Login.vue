<template>
  <div id='Login'>
    <form>
      <h3 class='logintitle'>请登录</h3>
      <el-row>
        <div class='idtip'>ID：</div>
        <el-input placeholder="请输入您的ID"
                  v-model="userid"
                  clearable
                  class='idinput'/>
      </el-row>
      <el-row>
        <div class='passwordtip'>密码：</div>
        <el-input placeholder="请输入您的密码"
                  v-model="password"
                  clearable
                  class='passwordinput'
                  type='password'/>
      </el-row>
      <el-button type="primary"
                 class="loginbutton"
                 v-on:click='handleLogin'>
                登录
      </el-button>
      <el-button type="primary"
                 v-on:click='handlejumptoreg'>
                注册
      </el-button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userid: null,
      password: null
    }
  },
  methods: {
    handleLogin: function () {
      this.$session.start()
      this.$session.set('userid', this.userid)
      /*  this.$session.set('jwt', response.body.token)
      Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token  */
      this.$cookie.set('login', 1, {expires: '10m'})
      this.$cookie.set('username', 'Mike', {expires: '10m'})
      this.$cookie.set('phone', '12334444', {expires: '10m'})
      this.$cookie.set('regtime', '2018-2-8', {expires: '10m'})
      this.$cookie.set('numofblog', 2, {expires: '10m'})
      this.$cookie.set('numofques', 5, {expires: '10m'})
      this.$cookie.set('numofres', 33, {expires: '10m'})
      this.$cookie.set('birth', '1998-2-2', {expires: '10m'})
      this.$cookie.set('userblogs', JSON.stringify([
        {
          title: 'Title1',
          headline: 'Headline1',
          url: '',
          time: '2018-12-29',
          read: 256,
          comment: 9
        },
        {
          title: 'Title2',
          headline: 'Headline2',
          url: '',
          time: '2018-12-19',
          read: 239,
          comment: 9
        },
        {
          title: 'Title3',
          headline: 'Headline3',
          url: '',
          time: '2018-11-11',
          read: 98,
          comment: 9
        },
        {
          title: 'Title4',
          headline: 'Headline4',
          url: '',
          time: '2018-12-1',
          read: 267,
          comment: 9
        },
        {
          title: 'Title5',
          headline: 'Headline5',
          url: '',
          time: '2018-11-7',
          read: 132,
          comment: 9
        },
        {
          title: 'Title6',
          headline: 'Headline6',
          url: '',
          time: '2018-10-9',
          read: 217,
          comment: 9
        },
        {
          title: 'Title7',
          headline: 'Headline7',
          url: '',
          time: '2018-10-26',
          read: 24,
          comment: 9
        },
        {
          title: 'Title8',
          headline: 'Headline8',
          url: '',
          time: '2018-10-3',
          read: 85,
          comment: 9
        },
        {
          title: 'Title9',
          headline: 'Headline9',
          url: '',
          time: '2018-10-4',
          read: 56,
          comment: 9
        },
        {
          title: 'Title10',
          headline: 'Headline10',
          url: '',
          time: '2018-11-2',
          read: 26,
          comment: 9
        }
      ]), {expires: '10m'})
      this.$cookie.set('userques', JSON.stringify([
        {
          title: 'Title1',
          url: '',
          time: '2018-12-29',
          ans: 256
        },
        {
          title: 'Title2',
          url: '',
          time: '2018-12-19',
          ans: 239
        },
        {
          title: 'Title3',
          url: '',
          time: '2018-11-11',
          ans: 98
        },
        {
          title: 'Title4',
          url: '',
          time: '2018-12-1',
          ans: 267
        },
        {
          title: 'Title5',
          url: '',
          time: '2018-11-7',
          ans: 132
        },
        {
          title: 'Title6',
          url: '',
          time: '2018-10-9',
          ans: 217
        },
        {
          title: 'Title7',
          url: '',
          time: '2018-10-26',
          ans: 24
        },
        {
          title: 'Title8',
          url: '',
          time: '2018-10-3',
          ans: 85
        },
        {
          title: 'Title9',
          url: '',
          time: '2018-10-4',
          ans: 56
        },
        {
          title: 'Title10',
          url: '',
          time: '2018-11-2',
          ans: 26
        }
      ]), {expires: '10m'})
      this.$cookie.set('userres', JSON.stringify([
        {
          title: 'Title1',
          headline: 'Headline1',
          url: '',
          time: '2018-12-29',
          download: 256,
          comment: 9
        },
        {
          title: 'Title2',
          headline: 'Headline2',
          url: '',
          time: '2018-12-19',
          download: 239,
          comment: 9
        },
        {
          title: 'Title3',
          headline: 'Headline3',
          url: '',
          time: '2018-11-11',
          download: 98,
          comment: 9
        },
        {
          title: 'Title4',
          headline: 'Headline4',
          url: '',
          time: '2018-12-1',
          download: 267,
          comment: 9
        },
        {
          title: 'Title5',
          headline: 'Headline5',
          url: '',
          time: '2018-11-7',
          download: 132,
          comment: 9
        },
        {
          title: 'Title6',
          headline: 'Headline6',
          url: '',
          time: '2018-10-9',
          download: 217,
          comment: 9
        },
        {
          title: 'Title7',
          headline: 'Headline7',
          url: '',
          time: '2018-10-26',
          download: 24,
          comment: 9
        },
        {
          title: 'Title8',
          headline: 'Headline8',
          url: '',
          time: '2018-10-3',
          download: 85,
          comment: 9
        },
        {
          title: 'Title9',
          headline: 'Headline9',
          url: '',
          time: '2018-10-4',
          download: 56,
          comment: 9
        },
        {
          title: 'Title10',
          headline: 'Headline10',
          url: '',
          time: '2018-11-2',
          download: 26,
          comment: 9
        }
      ]), {expires: '10m'})
      this.$router.push('/person')
      this.$message({
        message: '登录成功',
        type: 'success'
      })
    },
    handlejumptoreg: function () {
      this.$router.push({path: '/regist'})
    }
  }
}
</script>

<style>
#Login{
  margin-top: 60px;
  text-align: center;
  color: #7B7D7D;
}
.idinput{
  width: 20%;
  display: inline-block;
  margin-top: 20px;
}
.passwordinput{
  width: 20%;
  display: inline-block;
  margin-top: 20px;
}
.loginbutton{
  margin-top: 20px;
}
.idtip{
  width: 4%;
  display: inline-block;
}
.passwordtip{
  width: 4%;
  display: inline-block;
}
</style>
