<template>
  <div id="app">
    <form class="layui-form" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">输入框</label>
        <div class="layui-input-inline">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码框</label>
        <div class="layui-input-inline">
          <input
            type="password"
            name="password"
            required
            lay-verify="required"
            placeholder="请输入密码"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-inline">
          <input
            type="text"
            name="code"
            required
            lay-verify="required"
            placeholder="验证码"
            autocomplete="off"
            class="layui-input"
          />
        </div>
        <div class="layui-form-mid layui-word-aux">
          http://127.0.0.1:3000/user/authcode
        </div>
      </div>

      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit lay-filter="formDemo">
            立即提交
          </button>
          <button type="reset" class="layui-btn layui-btn-primary">重置</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
</style>
