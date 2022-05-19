<template>
  <v-app-bar
      app
      color="primary"
      dark
      height=70%
  >
    <div class="d-flex align-self-start">
<!--      <v-img-->
<!--          alt="Schedule Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="@/assets/ScheduleTransparentLogo.png"-->
<!--          transition="scale-transition"-->
<!--          width="200"-->
<!--      />-->
      <p class="text-h2">
        Schedule
      </p>
    </div>

    <v-spacer></v-spacer>

    <v-btn
        href=""
        target="_blank"
        text
    >
      <span class="mr-2">Export schedule</span>
    </v-btn>
    <v-btn
        href=""
        target="_blank"
        text
    >
      <span class="mr-2">Import schedule</span>
    </v-btn>
    <v-btn
        href=""
        target="_blank"
        text
    >
      <v-icon
          large
          color="white"
      >mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
// const logo = require ("@/assets/ScheduleTransparentLogo.png")
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>