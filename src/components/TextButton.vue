<template>
  <Button :class="className" @tap="tap" :text="loading ? '...' : text" :isEnabled="!disabled && !loading" />
</template>

<script>
export default {
  name: "TextButton",
  props: ['text', 'class', 'tap', 'disabled', 'loading'],
  computed: {
    className() {
      return "text-button" + (this.class ? ` ${this.class}` : "") + (this.loading ? " loading" : "");
    }
  }

}
</script>

<style lang="scss" scoped>
.text-button {
    border-radius: 28;
    font-family: Comfortaa;
    font-size: 18;
    vertical-align: middle;
    height: 56;
    background-color: #78bdc4;
    color: #0d4850;
    font-weight: bold;
}

.text-button.margin-top {
  margin-top: 40;
}

.text-button.decent {
  background: transparent;
  color: #607d8b;
}

.text-button:disabled {
  background-color: rgba(111, 136, 148, 0.7);
}
</style>