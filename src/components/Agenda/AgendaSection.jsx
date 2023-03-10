import React from "react";
import Agenda from "./Agenda";
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

const agendaSectionArray = [
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
  {
    date: "14. maj",
    place: "Fakultet Organizacionih Nauka",
    activities: [
      { time: "10:30 - 11:45", activity: "Svecano otvaranje projekta" },
      { time: "10:30 - 11:45", activity: "Panel diskusija" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
      { time: "10:30 - 11:45", activity: "Pauza" },
      { time: "10:30 - 11:45", activity: "Radionica" },
    ],
  },
];

const AgendaSection = () => {
  return (
    <div className={styles.agendasContainer}>
      {agendaSectionArray.map((entry, i) => (
        <Agenda key={i} {...entry} reverse={i % 2 != 0} />
      ))}
    </div>
  );
};

export default AgendaSection;
