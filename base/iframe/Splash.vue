<template>
  <div></div>
</template>

<script>
export default {
  name: 'Splash',
  created () {
    this.init()
  },
  methods: {
    init () {
      const loading = this.$loading({
        lock: true,
        text: '请稍候'
      })
      const vm = this
      const sdk = document.createElement('script')
      sdk.type = 'text/javascript'
      sdk.src = process.env.VUE_APP_ACS_BASE_API + 'js/client.min.js'
      sdk.onerror = function () {
        loading.close()
      }
      sdk.onload = function () {
        loading.close()
        const promisesCrossStorage = []
        /* eslint-disable no-undef */
        promisesCrossStorage.push(crossStorage.get('token'))
        promisesCrossStorage.push(crossStorage.get('authorities'))
        promisesCrossStorage.push(crossStorage.get('lastSignedInTime'))
        /* eslint-disable no-undef */
        Promise.all(promisesCrossStorage).then(data => {
          if (data[0] != null && data[0] !== '') {
            vm.$store.dispatch('user/setToken', data[0]).then(() => {
              vm.$store.dispatch('user/setAuthorities', data[1]).then(() => {
                vm.$store.dispatch('user/setLastSignedInTime', data[2]).then(() => {
                  vm.$router.replace({ name: 'Main' })
                })
              })
            })
          }
        })
      }
      document.body.appendChild(sdk)
    }
  }
}
</script>
