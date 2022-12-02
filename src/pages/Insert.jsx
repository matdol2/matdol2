import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../lib";

const Insert = () => {
  const { register, handleSubmit } = useForm();
  const { name } = useParams();
  const navigate = useNavigate();
  const onSubmit = async (form) => {
    await api.post(
      `evaluation/insert?targetName=${name}&sourceName=${localStorage.getItem(
        "name"
      )}&professionality=${form.professionality}&humor=${form.humor}&kkondae=${
        form.kkondae
      }&leadership=${form.leadership}&sensitivity=${form.sensitivity}&comment=${
        form.comment
      }`
    );

    navigate("/");
  };

  return (
    <form
      className="flex justify-center items-center flex-col gap-5 h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex gap-5 items-center bg-">
        <p>전문성</p>
        <input
          {...register("professionality", { required: true, max: 4, min: 0 })}
          className="outline-none bg-gray-100 rounded-lg px-2 py-1 w-20"
          type="number"
          max={4}
          min={0}
        />
      </div>

      <div className="flex gap-5 items-center">
        <p>개그력</p>
        <input
          {...register("humor", { required: true, max: 4, min: 0 })}
          className="outline-none bg-gray-100 rounded-lg px-2 py-1 w-20"
          type="number"
        />
      </div>

      <div className="flex gap-5 items-center">
        <p>꼰대력</p>
        <input
          {...register("kkondae", { required: true, max: 4, min: 0 })}
          className="outline-none bg-gray-100 rounded-lg px-2 py-1 w-20"
          type="number"
          max={4}
          min={0}
        />
      </div>

      <div className="flex gap-5 items-center">
        <p>리더십</p>
        <input
          {...register("leadership", { required: true, max: 4, min: 0 })}
          className="outline-none bg-gray-100 rounded-lg px-2 py-1 w-20"
          type="number"
          max={4}
          min={0}
        />
      </div>

      <div className="flex gap-5 items-center">
        <p>감수성</p>
        <input
          {...register("sensitivity", { required: true, max: 4, min: 0 })}
          className="outline-none bg-gray-100 rounded-lg px-2 py-1 w-20"
          type="number"
          max={4}
          min={0}
        />
      </div>

      <div className="flex gap-5 items-center">
        <p>한 줄로 표현하자면...</p>
        <input
          {...register("comment", { required: true })}
          className="outline-none bg-gray-100 rounded-lg px-2 py-1 w-96"
          type="text"
        />
      </div>

      <button className="bg-[#28A745] text-white px-8 py-2 rounded-2xl hover:bg-[#21943b] transition">
        제출
      </button>
    </form>
  );
};

export default Insert;
