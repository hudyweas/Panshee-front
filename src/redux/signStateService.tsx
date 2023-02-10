import { BehaviorSubject } from "rxjs";

const subscriber = new BehaviorSubject("main");

const signStateService = {
    changeState: function (state: "login" | "signup" | "main") {
        subscriber.next(state);
    },
};

export { signStateService, subscriber };
