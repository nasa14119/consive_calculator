import moment from "moment/min/moment-with-locales";
import Months from "./FunctionsMonts"

export type Message = {
  regalo: string;
  body: string;
  img?: string
};
export class Messages {
    date : moment.Moment
    constructor(consive: () => moment.Moment){
        this.date = consive(); 
    }
    async getMessage() : Promise<Message>{
        const dia = this.date.get("date"); 
        const getMonth = Months[this.date.get("month")]
        return getMonth(dia);
    }
}