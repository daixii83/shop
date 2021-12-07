<template lang="pug">
#about
  b-container
    b-row
      b-col(cols='12')
        ul
          li 地址: 台北市松山區八德路三段113號, Taipei, 105
          li 最近更新日期: {{ date }}
</template>

<script>
export default {
  data () {
    return {
      date: new Date().toLocaleDateString()
    }
  }
}
</script>
