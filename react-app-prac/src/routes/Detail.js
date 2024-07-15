import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  // http 요청(Link)의 url 정보를 가져올 수 있는 함수
  const { id } = useParams();
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`, {
        mode: "cors",
      })
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
