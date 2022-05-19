<template>
  <v-app>
    <AppBar></AppBar>

    <v-main>
      <ScheduleGrid2></ScheduleGrid2>
      <v-btn fab
             elevation="2"
             bottom
             right
             fixed
             @click="dialog=true"
      >add task</v-btn>

      <AddTaskPopUp dialog="dialog"></AddTaskPopUp>
    </v-main>
  </v-app>
</template>

<script>

import AppBar from "@/components/AppBar";
// import ScheduleGrid from "@/components/ScheduleGrid";
import ScheduleGrid2 from "@/components/ScheduleGrid2";
import AddTaskPopUp from "@/components/AddTaskPopUp";


export default {
  name: 'App',

  components: {
    AddTaskPopUp,
    ScheduleGrid2,
    AppBar,
  },

  beforeMount() {
    this.data().dialog = false
  },

  data: () => ({
    dialog: false,
    method:{
      openDialog()
      {

      }


    }
    //q
  }),
};
</script>
