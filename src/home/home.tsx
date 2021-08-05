import { useParams } from "react-router-dom";
import "./home.sass";

export function Home() {
  let params = useParams<{ id: string }>();
  return (
    <div>
      <h1 className="test">home1 </h1>
      <div>{params.id}</div>
    </div>
  );
}
