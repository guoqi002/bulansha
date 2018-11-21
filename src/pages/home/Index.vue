<template>
  <div class="page-main">
    <index-header @changeType="handleChangeType"></index-header>
    <div class="page-content">

    </div>
  </div>
</template>

<script>
  import IndexHeader from './header'
    export default {
      name: "Index",
      data() {
        return{
          headerList:[
            {name:"精选",routername:"choiceness"},
            {name:"店铺",routername:"dynamic"},
            {name:"联系我们",routername:"contact"},
            ],
        }
      },
      components: {
        IndexHeader,
      },
      methods: {
        handleChangeType (type) {
          console.log(type)
        },
      }
    }
</script>

<style scoped lang="less">
  .page-main{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .page-content{
    flex: 1;
    overflow: hidden;
  }

  .comment-input{
    z-index: 1;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: .1rem;
    width: 100%;
    background: #fff;
    border: .01rem solid #999;
  }


</style>
