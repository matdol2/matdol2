import { useEffect, useState } from "react";
import { RadarChart } from "../components";
import { api } from "../lib";
import ReactWordcloud from "react-wordcloud";
import { useParams } from "react-router-dom";

const MemberDetail = () => {
  const [data, setData] = useState();
  const { name } = useParams();
  useEffect(() => {
    (async () => {
      const { data } = await api.post(`/evaluation/search-detail?name=${name}`);

      setData(data);
    })();
  }, []);

  return (
    <div className="h-screen flex items-center flex-col justify-around">
      <h1 className="text-8xl">{data?.name}</h1>

      <div className="flex gap-20">
        <RadarChart
          name={data?.name}
          data={[
            data?.professionality,
            data?.humor,
            data?.kkondae,
            data?.leadership,
            data?.sensitivity,
          ]}
        />
        <div>
          <ReactWordcloud words={data?.new_comment} />
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
