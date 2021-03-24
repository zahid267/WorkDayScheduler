# WorkDayScheduler
05 Third-Party APIs: Work Day Scheduler

This is a calendar application, that allows a user to save events for each hour of the day . This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

I have used the [Moment.js](https://momentjs.com/) library to work with date and time. 

## Criteria

```
GIVEN a user is using a daily planner to create a schedule
WHEN the user open the planner
THEN the current day is displayed at the top of the calendar
WHEN the user scroll down
THEN he/she is presented with timeblocks for standard business hours
WHEN viewing the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN the user click into a timeblock
THEN he/she can enter an event
WHEN he/she click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN the user refresh the page
THEN the saved events persist
```
The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](./assets/WorkDayScheduler_demo.gif)