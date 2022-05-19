export {WeeklyTask, MonthlyTask, OneTimeTask, DailyTask};

class DailyTask{
    constructor(start, end, name){
        this.start = start;
        this.end = end;
        this.name = name;
    }
}


class WeeklyTask extends DailyTask{
    constructor(props, dayOfWeek) {
        super(props);
        this.dayOfWeek = dayOfWeek;
    }

}

class MonthlyTask extends DailyTask{
    constructor(props, date) {
        super(props);
        this.date = date
    }
}

class OneTimeTask extends DailyTask{
    constructor(props, date, repeating) {
        super(props);
        this.date = date
        this.repeating = repeating
    }
}

