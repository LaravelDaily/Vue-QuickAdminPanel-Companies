<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      notificationSettings: {
        type: 'success',
        delay: 1000,
        placement: {
          from: 'top',
          align: 'center'
        }
      }
    }
  },
  created() {
    this.$eventHub.$on('create-success', this.itemCreated)
    this.$eventHub.$on('update-success', this.itemUpdated)
    this.$eventHub.$on('delete-success', this.itemDeleted)
  },
  methods: {
    itemCreated() {
      this.$jquery.notify(
        {
          icon: 'check',
          message: 'Your item has been successfully saved.'
        },
        this.notificationSettings
      )
    },
    itemUpdated() {
      this.$jquery.notify(
        {
          icon: 'check',
          message: 'Your item has been successfully updated.'
        },
        this.notificationSettings
      )
    },
    itemDeleted() {
      this.$jquery.notify(
        {
          icon: 'check',
          message: 'Your item has been successfully deleted.'
        },
        this.notificationSettings
      )
    }
  },
  watch: {
    $route: {
      handler() {
        axios.get('abilities').then(response => {
          this.$ability.update([
            { subject: 'all', actions: response.data.data }
          ])
        })
      },
      immediate: true
    }
  }
}
</script>
