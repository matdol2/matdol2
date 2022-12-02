import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Member = () => {
  const [members, setMembers] = React.useState([]);
  const [me, setMe] = React.useState("");

  React.useEffect(() => {
    axios.get("http://34.64.185.76/employee/search").then(res =>
      setMembers(res.data.list)
    );
    setMe(localStorage.getItem("name"));
  }, []);

  const render_members = () => {
    return members.map(name => name !== me ?
      <div class="p-10 bg-cyan-200 rounded-md flex items-center justify-center">
        <Link to={`/${name}`}>
          {name}
        </Link>
      </div> : null
    )
  }

  return <div class="p-60 bg-amber-200">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      {render_members()}
    </div>
  </div>;
};

export default Member;
