import React, { useState } from 'react';

function CategoryBox() {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedFields, setSelectedFields] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const regions = [
    '서울', '부산', '대구', '인천', '대전', '광주', '경기', '강원', '경상', '전라'
  ];

  const fields = [
    '음식', '뷰티', '게임', 'IT', '의류', '일상', '음악', '미술', '레저', '건강 및 운동', '엔터'
  ];

  const platforms = [
    '유튜브', '인스타', '블로그', '페이스북', '틱톡'
  ];

  const handleRegionSelection = (region) => {
    const newSelectedRegions = selectedRegions.includes(region)
      ? selectedRegions.filter((selectedRegion) => selectedRegion !== region)
      : [...selectedRegions, region];
    setSelectedRegions(newSelectedRegions);
  };

  const handleFieldSelection = (field) => {
    const newSelectedFields = selectedFields.includes(field)
      ? selectedFields.filter((selectedField) => selectedField !== field)
      : [...selectedFields, field];
    setSelectedFields(newSelectedFields);
  };

  const handlePlatformSelection = (platform) => {
    const newSelectedPlatforms = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter((selectedPlatform) => selectedPlatform !== platform)
      : [...selectedPlatforms, platform];
    setSelectedPlatforms(newSelectedPlatforms);
  };

  return (
    <div className='CategoryBox'>
      <h2>지역별</h2>
      {regions.map((region, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedRegions.includes(region)}
            onChange={() => handleRegionSelection(region)}
          />
          
          {region}
          &nbsp;&nbsp;
        </label>
      ))}

      <h2>분야별</h2>
      {fields.map((field, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedFields.includes(field)}
            onChange={() => handleFieldSelection(field)}
          />
          {field}
          &nbsp;&nbsp;
        </label>
      ))}

      <h2>플랫폼 별</h2>
      {platforms.map((platform, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={selectedPlatforms.includes(platform)}
            onChange={() => handlePlatformSelection(platform)}
          />
          {platform}
          &nbsp;&nbsp;
        </label>
      ))}
    </div>
  );
}

export default CategoryBox;