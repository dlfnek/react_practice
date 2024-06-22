import { useState } from "react";

function App() {
  // useState를 통한 변수 관리
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  // 변수를 변경시키기 위한 함수들
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }

    // input 값을 toDos 배열에 추가
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/*
      toDo 목록을 UI에 표시
      map함수의 경우 (함수를 설정할 시,)
      배열 안 요소들에 대해서
      반복문을 수행함
      */}
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}

export default App;
