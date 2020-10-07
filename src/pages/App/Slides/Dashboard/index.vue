<template>
   <StackLayout>
      <Button @tap="logout">Logout</Button>
    </StackLayout>
</template>

<script>
import { firebase } from '@nativescript/firebase'
export default {
   name: "DashboardSlide",
   methods: {
      logout() {
         firebase.logout();
      }
   }
}
</script>