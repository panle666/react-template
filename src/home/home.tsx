import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeApi from "../api/HomeApi";
import { ILikeWare } from "../api/viewModel/ILikeWare";
import "./home.sass";

export function Home() {
  let params = useParams<{ id: string }>();
  const [arrs, setArrs] = useState<ILikeWare[]>([]);
  useEffect(() => {
    async function getData() {
      const result = await HomeApi.GetData();
      setArrs(result.Data);
    }
    getData();
  });

  return (
    <div>
      <h1 className="test">home1 </h1>
      <div>{params.id}</div>
      {arrs?.map((item, index) => {
        return <div key={index}>{item.Pic180}</div>;
      })}
    </div>
  );
}
