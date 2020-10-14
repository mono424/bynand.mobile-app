<template>
   <StackLayout>
      <Button @tap="logout">Logout</Button>
    </StackLayout>
</template>

<script>
export default {
   name: "DashboardSlide",
   methods: {
      logout() {
         this.$auth.logout();
      }
   }
}
</script>