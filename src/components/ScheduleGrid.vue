<template>
<v-container>
  <v-row style="padding: 2vh 0 2vh 4vw;">
    <v-col cols="1.2"
           v-for="i in dayArray"
           v-bind:key="i"
    class="pa-1">
      <v-card
          height="5vh"
          width="12vw"
          align="center"
          style="font-size: 3.5vh"
      >
        {{i}}
      </v-card>
    </v-col>
  </v-row>
  <v-row dense v-for="i in clockArray"
  :key="i">
    <v-card
        width="2vw"
        align="center"
        height="3vh"
        style="font-size: 2vh">
      {{i}}

    </v-card>
    <v-col
        v-for="j in dayArray"
        :key="j"
    >
      <v-card
        align="center"
        width="12vw"
        height="3vh"
      >
        {{j}}
      </v-card>
    </v-col>

<!--    <v-col style="max-width: 4vw" >-->
<!--      <v-card-->
<!--          width="4vw"-->
<!--          align="center"-->
<!--          class="pa-3"-->
<!--      >-->
<!--        <p-->
<!--            v-for="i in this.clockArray"-->
<!--            v-bind:key="i"-->
<!--            v-bind:ref="i"-->
<!--        >-->
<!--          {{i}}-->
<!--        </p>-->
<!--      </v-card>-->
<!--    </v-col>-->


  </v-row>
</v-container>

</template>

<script>
// import {DailyTask, MonthlyTask, WeeklyTask, OneTimeTask} from "@/classes/TaskClass.ts";

export default {
  name: "ScheduleGrid",
  data(){
    return{
      clockStart: 5,
      clockArray: [],
      timeFormat: 24,
      dayArray: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    }
  },
  created() {
    this.getHourList()
  },
  methods:{
    getHourList(){
        for (let i = 0;i<25;i++)
        {
          let offset = this.clockStart+i;
          this.clockArray.push(offset%24)
        }
    }
  }

}
</script>

<style scoped>



</style>