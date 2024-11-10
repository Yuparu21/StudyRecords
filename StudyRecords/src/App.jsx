import { useState } from 'react';
import './App.css'

export const App = () => {
  
  const [studyContents, setStudyContents] = useState("");  // 学習内容
  const [studyHour, setStudyHour] = useState("");  // 学習時間(h)
  const [inputCheck, setInputCheck] = useState(true);
  const [studyTotalHour, setStudyTotalHour] = useState(0);  // 合計学習時間(h)

  // 「学習内容」の入力を、「入力されている学習内容」に反映
  const onChangeStudyContents = (event) => setStudyContents(event.target.value);
  // 「学習時間」の入力を、「入力されている時間」に反映
  const onChangeStudyHour = (event) => setStudyHour(event.target.value);

  // 「登録」ボタンを押下したら、合計時間に入力した学習時間を加える
  const onClickRegisteration = () => {
    if (studyContents === "" || studyHour === "") {
      setInputCheck(false);
      return;
    }
    setInputCheck(true);
    const newStudyTotalHour = Number(studyHour) + Number(studyTotalHour);
    setStudyTotalHour(newStudyTotalHour);
    setStudyContents("");
    setStudyHour("");
  };

  return (
    <>
      <div>
        <div>
          <label>学習内容</label>
          <input value={studyContents} onChange={onChangeStudyContents}></input>
        </div>
        <div>
          <label>学習時間</label>
          <input type="number" value={studyHour} onChange={onChangeStudyHour}></input>
          <label>時間</label>
        </div>
        <div>
          <label>入力されている学習内容：</label>
          <span>{studyContents}</span>
        </div>
        <div>
          <label>入力されている時間：</label>
          <span>{studyHour}</span>
          <label>時間</label>
        </div>
        <button onClick={onClickRegisteration}>登録</button>
      </div>
      {inputCheck || <span style={{ color: "red" }}>入力されていない項目があります</span>}
      <div>
        <label>合計時間：</label>
        <span>{studyTotalHour}</span>
        <label>/1000(h)</label>
      </div>
    </>
  );
};
