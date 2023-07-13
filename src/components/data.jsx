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
        Authorization: 'Bearer COJWkKhYanoNYTcF6c13SGcMtd-5gJy8wwvghVENkBHoYgjCUZcYgY3lIgJkWY_eAV4BDOOE9LphtW4iAfa3c_E40UJUBtpZ8ZXxiZiddgIxCI4uOgafJ-Mohnjv3WB90R_AL31lLxA45KXhyXhnfdvG0vd5rxEaGseASXORQw51cxi1sy6WffTzbMJSSOKI363IckErkuL7yTQnu2unQY6wlce5BuKJq5jmuBdNGMLgeQO5ixmjOVSIiRt-mEabQFqXh5n-hrVu1qB1_QwCdzsgBPLWFl3fBO90BZ7pQFsVpl2B0w2xuj-mCMWHXOX-9r9PZ7G8eQwhWi0eTFcUC_qkKCy8DLkf16X-IYM3vT1tjmwWAvZ4pt3lu-PVe0-NNmrd7cDKSTOIjEiPgZpXLP2lzQqEvz3iQp28571vIeGH_nssfdre_U5MT8nIbv3ao5HgnoGONG069aJCbt8V2yLpbKgNFxVIrz42rCXxk3U',
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
