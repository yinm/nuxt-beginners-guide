<template>
  <section class="container">
    <el-card style="flex: 1;">
      <div slot="header" class="clearfix">
        <span>ログイン</span>
      </div>
      <form>
        <div class="form-content">
          <span>ユーザーID</span>
          <el-input placeholder="" v-model="formData.id" />
          <div class="form-content">
            <el-checkbox v-model="isCreateMode">アカウントを作成する</el-checkbox>
          </div>
          <div class="text-right">
            <el-button typee="primary">{{ buttonText }}</el-button>
          </div>
        </div>
      </form>
    </el-card>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      isCreateMode: false,
      formData: {
        id: ''
      }
    }
  },

  computed: {
    buttonText() {
      return this.isCreateMode ? '新規登録' : 'ログイン'
    }
  }
}
</script>

<style scoped>
.form-content {
  margin: 16px 0;
}
</style>
