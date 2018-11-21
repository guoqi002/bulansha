<template>
  <div class="header">
    <div class="header-item" :class="{active: isChange(index)}"  data-id="choiceness" @click.stop="handleLinkClick(index)">
      精选
    </div>
    <div class="header-item" :class="{active: isChange(index)}"  data-id="dynamic" @click.stop="handleLinkClick(index)">
      店铺
    </div>
    <div class="header-item" :class="{active: isChange(index)}"  data-id="contact" @click.stop="handleLinkClick(index)">
      联系我们
    </div>
    <ul>
      <li v-for="(item,index) in "></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'index-header',
    data () {
      return {
        isShow: true,
        isActive:1,
      }
    },
    methods: {
      isChange(num) {
        if(num == this.isActive){
          return true;
        }
          return false;
      },
      handleLinkClick (e) {
        this.isActive = num;
        this.$emit('changeType', e.target.dataset.id)
      }
    }
  }
</script>

<style scoped lang="less">
  .header{
    display: flex;
    justify-content: center;
    height: .88rem;
    line-height: .88rem;
    font-size: .32rem;
    color: #fff;
    background: #ffc955;
    .header-item{
    margin: 0 .25rem;
    padding: 0 .16rem;
    line-height: .88rem;
    text-align: center;
  }
    .active{
      border-bottom: .1rem solid #fff
    }
  }

</style>
