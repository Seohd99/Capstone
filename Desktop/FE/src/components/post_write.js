import React,{useState} from "react";
import axios from "axios";
import "../CSS/post_write.css";

function Post_write(){
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [selectedContractType, setSelectedContractType] = useState("");
    const [adFormat, setAdFormat] = useState(null);

    const handlePlatformChange = (e) => {
    const platform = e.target.value;
    const isSelected = selectedPlatforms.includes(platform);

    if (isSelected) {
      // 이미 선택된 경우 해제
      setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform));
    } else {
      // 선택되지 않은 경우 추가
      setSelectedPlatforms([...selectedPlatforms, platform]);
        }
    };

    const handleContractTypeChange = (e) => {
        setSelectedContractType(e.target.value);
    };

    const handleAdFormatChange = (e) => {
        // e.target.files에 선택된 파일이 들어 있습니다.
        setAdFormat(e.target.files[0]);
      };

    const handleUpload = async () => {
    // 이 부분에서 선택된 데이터를 서버로 전송하는 로직을 작성

    console.log("제목:", title);
    console.log("일시:", date);
    console.log("주요 플랫폼:", selectedPlatforms);
    console.log("계약 형식:", selectedContractType);

    // 나머지 서버로 전송 로직 작성...
    };
    return(
       <div className="pagearea4">
            <div className="writeArea">
                <div className="inputTitle">
                    <p/>제목: <input className="Title"></input>
                </div>
                <div className="contentArea">
                <p/>일시: <input className="Title" value={title} onChange={(e) => setTitle(e.target.value)}></input> {/*달력 api?*/}
                <p/>주요 플랫폼: &nbsp;
                <label>
                    <input type = "checkbox" onChange={handlePlatformChange} 
                    checked={selectedPlatforms.includes("인스타")}
                    value = "인스타" className = "CKbox"/>
                    인스타 &nbsp;&nbsp;
                </label>
                <label>
                    <input type = "checkbox" onChange={handlePlatformChange} 
                    checked={selectedPlatforms.includes("틱톡")}
                    value = "틱톡" className = "CKbox"/>
                    틱톡&nbsp;&nbsp;
                </label>
                <label>
                    <input type = "checkbox" onChange={handlePlatformChange} 
                    checked={selectedPlatforms.includes("네이버 블로그")}
                     value = "네이버블로그" className = "CKbox"/>
                    네이버 블로그&nbsp;&nbsp;
                </label>
                <label>
                    <input type = "checkbox" onChange={handlePlatformChange} 
                    checked={selectedPlatforms.includes("페이스북")}
                     value = "페이스북" className = "CKbox"/>
                    페이스북&nbsp;&nbsp;
                </label>
                <label>
                    <input type = "checkbox" onChange={handlePlatformChange} 
                    checked={selectedPlatforms.includes("기타")}
                    value = "기타" className = "CKbox"/>
                    틱톡&nbsp;&nbsp;
                </label>
                <p/>계약 형식: &nbsp;&nbsp;
                <select
                value={selectedContractType}
                onChange={handleContractTypeChange}
                >
                <option value="">-- 선택하세요 --</option>
                <option value="계약금 진행">계약금 진행</option>
                <option value="협찬">협찬</option></select>
                <p/>광고 양식: &nbsp;&nbsp;
                <input type="file" onChange={handleAdFormatChange} />

                
                </div>
            </div>
       </div> 
    );
}

export default Post_write;