class DailyTask{
    start: number;
    end: number;
    name: string;
    constructor(start: number, end: number, name: string){
        this.start = start;
        this.end = end;
        this.name = name;
    }
}

class WeeklyTask extends DailyTask{
    dayOfWeek: number
    constructor(start: number, end: number, name: string, dayOfWeek: number) {
        super(start, end, name);
        this.dayOfWeek = dayOfWeek;
    }
}

class MonthlyTask extends DailyTask{
    date: number
    constructor(start: number, end: number, name: string, date: number){
        super(start, end, name);
        this.date = date
    }
}

class OneTimeTask extends DailyTask{
    date: number
    repeating: boolean
    constructor(start: number, end: number, name: string, date: number, repeating: boolean) {
        super(start, end, name);
        this.date = date
        this.repeating = repeating
    }
}

export {WeeklyTask, MonthlyTask, OneTimeTask, DailyTask};
