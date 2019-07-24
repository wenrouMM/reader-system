<template>
    <transition-group  mode="out-in" appear name="list">
        
            <div    v-for="item in items" v-bind:key="item" class="list-item">
                {{ item }}
            </div>
       
        
    </transition-group>
</template>

<script>
export default {
    data(){
        return{
            items: [1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<style lang="scss" scoped>
.list-item {
  
  margin-bottom: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(30px);
}
</style>

