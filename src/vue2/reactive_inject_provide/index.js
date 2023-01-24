// parent:
{
  provide() {
    return {
      $computedProperty: () => this.computedProperty
    }
  },

  computed: {
    computedProperty() {
      // Returns the result of some potentially reactive computation
    }
  }
}

// children:
{
  inject: [
    '$computedProperty'
  ],

  computed: {
    computedProperty() {
      return this.$computedProperty()
    }
  }
}