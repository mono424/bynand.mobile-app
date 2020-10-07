<template>
  <CardView :ripple="true" radius="120" margin="5 10" class="nav-button" @tap="tap" elevation="0" shadowColor="#fff">
    <StackLayout class="inner-wrap" verticalAlignment="center">
      <Image :tintColor="selected ? '#072c3d' : '#bccad1'" :src="icon" width="24" height="24" horizontalAlignment="center" stretch="aspectFit" />
    </StackLayout>
  </CardView>
</template>

<script>
export default {
  name: "NavButton",
  props: ['icon', 'selected', 'tap'],
}
</script>

<style scoped lang="scss">
@import '../config/variables.scss';
.nav-button {
    vertical-align: middle;

    .inner-wrap {
      height: 60;
      width: 60;
    }
}
</style>