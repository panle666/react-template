import { useParams } from "react-router-dom";

export function Home() {
  let params = useParams<{ id: string }>();
  return (
    <div>
      <h1>home </h1>
      <div>{params.id}</div>
    </div>
  );
}
