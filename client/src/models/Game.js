import { CurrentUser } from "./Users";
import myFetch from "./myFetch";

export let State = {};
export let MyCards = [];

let interval;

export default { 
    State: {},
    MyCards: [],
    Init(){
        if(this.MyCards.length){
            // The player already joined the game. They just temporarily went to a different view.
            return;
        }
        myFetch('/game/join', {})
            .then(x=> { 
                this.MyCards = x.MyCards;
                console.log(x);
            })
            .catch(err=> console.warn(err));
    },
    Run(){
        myFetch('/game')
            .then(x=> { 
                this.State = x;
                console.log(x);
            });
    },
    Start(){
        interval = setInterval(()=> this.Run(), 2000 )
    },
    Pause(){
        clearInterval(interval);
    } 
} 