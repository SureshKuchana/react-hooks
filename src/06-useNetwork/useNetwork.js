import React, { useEffect, useState } from "react";

export const useNetwork = ({ url }) => {
  let [state, setState] = useState({ loading: true });

  useEffect(() => {
    const makeNetworkReq = async () => {
      try {
        let res = await fetch(url);
        let data = await res.json();
        setState({ data, loading: false });
      } catch (error) {
        console.log(" error ", error);
      }
    };
    makeNetworkReq();
  }, [url]);
  return state;
};
