import { useEffect, useState } from "react";
import { RadarChart } from "../components";
import { api } from "../lib";
import ReactWordcloud from "react-wordcloud";
import { useNavigate, useParams } from "react-router-dom";

const MemberDetail = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const { name } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await api.post(`/evaluation/search-detail?name=${name}`);

      setData(data);
    })();
  }, []);

  const onClick = () => navigate(`/${name}/insert`);

  return (
    <div className="h-screen flex items-center flex-col justify-around">
      <div className="text-center space-y-10">
        <h1 className="text-8xl">{data?.name}</h1>
        <button
          onClick={onClick}
          className="bg-[#28A745] text-white px-8 py-2 rounded-2xl hover:bg-[#21943b] transition"
        >
          투표하기기
        </button>
      </div>

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
