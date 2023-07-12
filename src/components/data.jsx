import React, { useState, useEffect } from "react";

const Data = () => {
    const [comments, setComments] = useState([
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
    ]);

    const [questions, setQuestions] = useState([
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        },
        {
            username: "Roger Vaccaro",
            time: "20:19:20",
            text: "Do fixed income investments on a 30 year period have higher returns?"
        }
    ]);

    const [dataList, setDataList] = useState([
        { username: "Roger Vaccaro", question: "Do fixed income investments on a 30-year period have higher returns?" },
        { username: "Aarin Kachroo", question: "Do fixed income investments on a 30-year period have higher returns?" },
        { username: "Alice Smith", question: "What is the impact of climate change on agriculture?" }
    ]);

    return {
        comments,
        questions,
        dataList
    };
};

export default Data;
