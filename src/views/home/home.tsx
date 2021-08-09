import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import homeApi from "../../api/homeApi";
import { ILikeWare } from "../../api/viewModel/ILikeWare";
import "./home.sass";

export function Home() {
  let params = useParams<{ id: string }>();
  let [arrs, setArrs] = useState<ILikeWare[]>([]);

  useEffect(() => {
    let getData = async () => {
      const result = await homeApi.GetData();
      setArrs(result.Data);
    };
    getData();
    return () => setArrs([]);
  }, []);

  return (
    <div>
      <h1 className="test">home1 </h1>
      <div>{params.id}</div>
      {arrs.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.Pic180} alt="" />
            <div>{item.Pic180}</div>;
          </div>
        );
      })}
    </div>
  );
}
