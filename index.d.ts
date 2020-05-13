declare enum WeekdaysShort {
    Sun = 0,
    Mon = 1,
    Tue = 2,
    Wed = 3,
    Thu = 4,
    Fri = 5,
    Sat = 6
}
declare enum WeekdaysMin {
    Su = 0,
    Mo = 1,
    Tu = 2,
    We = 3,
    Th = 4,
    Fr = 5,
    Sa = 6
}
declare enum Weekdays {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}
declare const _default: {
    short: typeof WeekdaysShort;
    min: typeof WeekdaysMin;
    default: typeof Weekdays;
};
export default _default;
