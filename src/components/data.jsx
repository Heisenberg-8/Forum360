import React, { useState, useEffect } from "react";

const Data = () => {
    const [data, setData] = useState(null);

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

    const [dataList, setDataList] = useState([
        { username: "Roger Vaccaro", question: "Do fixed income investments on a 30-year period have higher returns?" },
        { username: "Aarin Kachroo", question: "Do fixed income investments on a 30-year period have higher returns?" },
        { username: "Alice Smith", question: "What is the impact of climate change on agriculture?" }
    ]);

    return {
        comments,
        dataList,
        data
    };
};

export function fetchQuestions() {
    return fetch('https://mgmt-test.forum360.co/api/PA_Event/InProgressQuestion/84573623-aa87-402c-b28d-24d1e181ecbe/2560', {
        headers: {
            Authorization: 'Bearer -1leljERr74J_xVJlYOBVgnlwBcsXpfobmY8VW6Pvp-gFpzsDFsXQpJ3fSBX3k_tVZVLvwkE--Bd9wi9gLzI2tRsPxSqrM5zSP8IdN01j8m4-QSmhJG_CGV93z34ATgHQemf4FiiVh2LsAs6VdxOqVJKbb6t0MIyXRdd8js-WPEemNftAtXGLS22KmawdbvT6P3GBCrFwoghEnWmto7Tuaoj2hF6v4G9QjgmPavEYLvQzMvCQdTv0YRGtuUzmWlbv1TMsKOPGlVgKspIKwbSiz_DcatM7ph-6YNjSfAGlR-rIIrfc73j8y5wnkJQ0koBR1ZLhl5D6kqzcVrMxUUVhXfKXIfm6MxHYaKW4HQk6Kumhry5Ijrdoab05yXo5qufAi8gews5UBrrGkYMhaZYt9cUWdGO7YOgwvmFA38-iUXJXCqgzJUdPLSHZgxyO8g19yhFdHvVi07dTRwyyuY1_Jy9vNjhA5tP0pWSO1lKVbQ',
        },
    })
        .then(response => response.json())
        .then(json => json.Payload.Audiences)
        .catch(error => {
            console.error(error);
            return [];
        });
}


export default Data;
