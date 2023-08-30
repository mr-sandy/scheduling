import React, { useEffect } from "react";
import { fetchBoms } from "../../services/bomService";
import { useBoms, useBomsDispatch } from "../BomListProvider";
import { RetrieveBoms } from "../../state/bomList/bomListActions";

export default function BomList() {
  const boms = useBoms();
  const dispatch = useBomsDispatch();

  useEffect(() => {
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");

    fetchBoms().then((r) => {
      console.log("IN CALLBACK");
      dispatch(RetrieveBoms(r));
    });
  }, []);
  console.log(boms);
  return (
    <>
      <ul>
        {boms.map((bom) => (
          <li>{bom.name}</li>
        ))}
      </ul>
    </>
  );
}
