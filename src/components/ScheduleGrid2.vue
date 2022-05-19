<template>
  <v-container>
    <v-btn fab
           elevation="2"
           bottom
           right

           fixed
    >add task</v-btn>
    <v-row>
      <!--clock column-->
      <v-col>
        <p></p>
        <v-card  align="center" width="3vw">
          <p v-for="j in clockArray"
                 :key="j">
            {{j}}
          </p>
        </v-card>
      </v-col>

      <!--day columns-->
      <v-col cols="1.2"
             v-for="i in dayArray"
             v-bind:key="i"
             class="pa-1">
        <v-card
            width="12vw"
            align="center"
            style="font-size: 3.5vh"
        >
          {{i}}

          <v-card v-for="j in clockArray"
          :key="j"
                  class="pt-2 pb-1"
          style="font-size: 2vh">
              bruv
          </v-card>
        </v-card>
      </v-col>


    </v-row>

  </v-container>

</template>

<script>
import {WeeklyTask, DailyTask/*, MonthlyTask, OneTimeTask*/} from "@/classes/Task";

export default {
  name: "ScheduleGrid2",
  data(){
    return{
      clockStart: 5,
      clockArray: [],
      timeFormat: 24,
      dayArray: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      taskArray:[],
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
    },
    createWeeklyTask(start, end, name, dayOfWeek){
      let task = WeeklyTask(start,end,name,dayOfWeek);
      this.taskArray.push(task)
    },
    createDailyTask(start, end, name){
      let task = DailyTask(start, end, name);
      this.taskArray.push(task);
    }
  },

}
</script>

<style scoped>



</style>