"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WeekdaysShort;
(function (WeekdaysShort) {
    WeekdaysShort[WeekdaysShort["Sun"] = 0] = "Sun";
    WeekdaysShort[WeekdaysShort["Mon"] = 1] = "Mon";
    WeekdaysShort[WeekdaysShort["Tue"] = 2] = "Tue";
    WeekdaysShort[WeekdaysShort["Wed"] = 3] = "Wed";
    WeekdaysShort[WeekdaysShort["Thu"] = 4] = "Thu";
    WeekdaysShort[WeekdaysShort["Fri"] = 5] = "Fri";
    WeekdaysShort[WeekdaysShort["Sat"] = 6] = "Sat";
})(WeekdaysShort || (WeekdaysShort = {}));
var WeekdaysMin;
(function (WeekdaysMin) {
    WeekdaysMin[WeekdaysMin["Su"] = 0] = "Su";
    WeekdaysMin[WeekdaysMin["Mo"] = 1] = "Mo";
    WeekdaysMin[WeekdaysMin["Tu"] = 2] = "Tu";
    WeekdaysMin[WeekdaysMin["We"] = 3] = "We";
    WeekdaysMin[WeekdaysMin["Th"] = 4] = "Th";
    WeekdaysMin[WeekdaysMin["Fr"] = 5] = "Fr";
    WeekdaysMin[WeekdaysMin["Sa"] = 6] = "Sa";
})(WeekdaysMin || (WeekdaysMin = {}));
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Sunday"] = 0] = "Sunday";
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
})(Weekdays || (Weekdays = {}));
exports.default = {
    short: WeekdaysShort,
    min: WeekdaysMin,
    default: Weekdays
};
