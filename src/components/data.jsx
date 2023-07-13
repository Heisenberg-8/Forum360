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
            Authorization: 'Bearer jA2uXibyaXYKJnEH0YHN_xC7T2uqKG-UpubJSe8KAWmrJEtBIlhIHmpWSVhI-lFQLg-DcsHq9u9T0vUE_m3qgZ1Z_KOPdw_EFkUuL7tK6itim8jaChdyt408Q75JGWgVso6nt-1WiXbD3t22TIYqCWIBxIrUXihXSwTEGdFrQfAHQ2N3yn6G30Cx9kXKU9j389_LZWkpqwn9yo_fY6-dUNNXRDPKBkUKX8RDCT4RxG1WeobLu5gXM-UEEbEnkZosJXYlwPuLzAoNzbp0gPhSziwJXNXK1c9aQ7DimfQouJu17ezNNYtHAbWo_c-TqZoat4zY9bzefAeR_wMSu2HUWAjBGxWKmdAZJtnPY0krx8lWZShNx-IGDW-NuDIRGgVJNm0PN00IzibLBztlOjSJY1iVRwgbuB5pDEw30wRwcLlQ7pPqpnfAuZeU1Ijb0z0yJ2zdj3vk8M0x2EKljeu0mLQdEGCWrQKJ2pCRk_hUuUg',
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
