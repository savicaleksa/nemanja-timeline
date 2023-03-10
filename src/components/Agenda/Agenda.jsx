import React from "react";
import styles from "./Agenda.module.css";

/*
 date: string
 place: string
 activities: [
    {
        time: string,
        activity: string
    }
 ]
 reverse: boolean
*/

const Agenda = ({ date, place, activities, reverse = false }) => {
  return (
    <div
      className={!reverse ? styles.agendaWrapper : styles.agendaWrapperReverse}
    >
      <div className={styles.agendaDateWrapper}>
        <div className={styles.agendaDate}>
          <span>{date}</span>
          <span>{place}</span>
        </div>
      </div>
      <div className={styles.agendaActivitiesWrapper}>
        <div className={styles.agendaActivities}>
          {activities.map((activity, i) => (
            <p key={i}>
              <strong className={styles.agendaActivitiesTime}>
                {activity.time}
              </strong>
              {activity.activity}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
