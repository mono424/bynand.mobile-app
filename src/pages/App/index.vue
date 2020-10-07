<template>
  <Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
    <DockLayout width="100%" height="100%" :stretchLastChild="true">
      <StackLayout orientation="horizontal" horizontalAlignment="center" dock="bottom">
        <NavButton icon="res://home" :selected="slideSelected('dashboard')" :tap="selectSlide('dashboard')" />
        <NavButton icon="res://sheets" :selected="slideSelected('damages')" :tap="selectSlide('damages')" /> <!-- icon: fa-file-invoice -->
        <NavButton icon="res://settings" :selected="slideSelected('settings')" :tap="selectSlide('settings')" />
      </StackLayout>
      <AbsoluteLayout>
        <!-- <AppPageDashboard :user="user" :visible="slideSelected('dashboard')" :visibility="slideSelected('dashboard') ? 'visible' : 'hidden'" /> -->
        <AppPageDashboard :visible="slideSelected('dashboard')" :visibility="slideSelected('dashboard') ? 'visible' : 'hidden'" />
        <Label text="Damage Page" :visible="slideSelected('damages')" :visibility="slideSelected('damages') ? 'visible' : 'hidden'"></Label>
        <Label text="Settings Page" :visible="slideSelected('settings')" :visibility="slideSelected('settings') ? 'visible' : 'hidden'"></Label>
      </AbsoluteLayout>
    </DockLayout>
  </Page>
</template>

<script>
  import AppPageDashboard from './Slides/Dashboard/index'
  import NavButton from '../../components/NavButton'
  export default {
    data() {
      return {
       selectedSlide: 'dashboard' 
      }
    },
    components: {
      AppPageDashboard,
      NavButton
    },
    methods: {
      
      slideSelected(page) {
        return this.selectedSlide === page;
      },
      
      selectSlide(page) {
        return () => this.selectedSlide = page;
      }
      
    }
  }
</script>

<style scoped>
TabView{
   font-size: 18;
}
</style>