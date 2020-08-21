// 업데이트 일시 함수(자동)
var updateTarget = document.getElementById("text-update-datetime");
updateTarget.innerHTML = koreaRegionalData[koreaRegionalData.length-1]['업데이트날짜'];

//세계지도에 표시할 데이터 추가, 아래 데이터는 메인페이지 최상단 데이터와 연결되어 있음(자동)
marker.push({
  "Name": "한국",
  "Name_en": "Korea, Republic of",
  "Name_ch": "韩国",
  "lat": 37.5456299,
  "lng": 126.9540667,
  "확진자수": koreaRegionalData[0]['확진자수'], //10683, //koreaRegionalData[0]['확진자수'],
  "사망자수": koreaRegionalData[0]['사망자수'], //237, //koreaRegionalData[0]['사망자수'],
  "완치자수": koreaRegionalData[0]['격리해제수'], //8213, //,
  "십만명당발생율": koreaRegionalData[0]['십만명당발생율'] //1.94 //koreaRegionalData[0]['십만명당발생율']
})


for (var i = 0; i < koreaRegionalData.length; i++) {
  if(koreaRegionalData[i]['지역이름'] == '제주'){
    marker.push({
      "Name": "제주",
      "Name_en": "Jeju",
      "Name_ch": "濟州",
      "lat": 33.50972,
      "lng": 126.52194,
      "확진자수": 28, //koreaRegionalData[i]['확진자수'],
      "사망자수": koreaRegionalData[i]['사망자수'], //0, //koreaRegionalData[i]['사망자수']
      "완치자수": koreaRegionalData[i]['격리해제수'] //6 //koreaRegionalData[i]['격리해제수']
    })
    // console.log(koreaRegionalData[i]['확진자수'], koreaRegionalData[i]['사망자수'], koreaRegionalData[i]['격리해제수'])
  }
}

/////////////// 업데이트 방법 //////////////
// 1. 아래 데이터는 민감데이터로 크롤링에 의존하지 않는 데이터입니다.
//    긴급할 경우 아래 데이터만 수정하여 push 해주세요.
// 2. 크롤러_통합.py를 실행시키시고, 모두 push해주시면 됩니다.
//    크롤러_세계확진자.js, koreaRegionalData.js가 뽑힙니다.
// 3. 크롤러가 동작하지 않을 경우 수동업데이트해야 합니다.
// 4. 지역별 현황 사이트(질병관리본부 홈페이지) : http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=
// 5. 세계 현황 사이트 : https://www.worldometers.info/coronavirus/
//     개수가 많아 긴급할 경우 Top 5 정도만 업데이트 부탁드립니다.
////////////////////////////////////////////

// 존스홉킨스 : https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6
// https://www.worldometers.info/coronavirus/
// 질본 : http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=&brdGubun=&ncvContSeq=&contSeq=&board_id=&gubun=

// 선차트용 데이터 - 제주도청 제공
// 바울랩 메일 참고

var 입도객현황 = {
  날짜: ["19년평균", "2/3", "2/4", "2/5", "2/6", "2/8", "2/9", "2/10", "2/11", "2/12", "2/13", "2/16", "2/17", "2/18", "2/19", "2/20", "2/22", "2/23", "2/24", "2/25", "2/26", "2/27",
    "2/29",
    "3/1",
    "3/2",
    "3/3",
    "3/4",
    "3/5",
    "3/7",
    "3/8",
    "3/9",
    "3/10",
    "3/11",
    "3/12",
    "3/13",
    "3/14",
    "3/15",
    "3/16",
    "3/17",
    "3/18",
    "3/19",
    "3/20",
    "3/21",
    "3/22",
    "3/23",
    "3/24",
    "3/25",
    "3/26",
    "3/27",
    "3/28",
    "3/29",
    "3/30",
    "3/31",
    "4/1",
    "4/2",
    "4/3",
    "4/4",
    "4/5",
    "4/6",
    "4/7",
    "4/8",
    "4/9",
    "4/10",
    "4/11",
    "4/12",
    "4/13",
    "4/14",
    "4/15",
    "4/16",
    "4/17",
    "4/18",
    "4/19",
    "4/20",
    "4/21",
    "4/22",
    "4/23",
    "4/24",
    "4/25",
    "4/26",
    "4/27",
    "4/28",
    "4/29",
    "4/30",
    "5/1",
    "5/2",
    "5/3",
    "5/4",
    "5/5",
    "5/6",
    "5/7",
    "5/8",
    "5/9",
    "5/10",
    "5/11",
    "5/12",
    "5/13",
    "5/14",
    "5/15",
    "5/16",
    "5/17",
    "5/18",
    "5/19",
    "5/20",
    "5/21",
  ],
  내국인: [37150, 19209, 17633, 15873, 17184, 20488, 18959, 19074, 18922, 18720, 24409, 26120, 25105, 27135, 27247, 29316, 23732, 20508, 16379, 14567, 13978, 13318,
    14855, //2월 29일
    13402, //3월 1일
    15628, //3월 2일
    15668, //3월 3일
    14598, //3월 4일
    15727, //3월 5일
    16015, //3월 7일
    13672, //3월 8일
    15234, //3월 9일
    15637, //3월 10일
    17209, //3월 11일
    17600, //3월 12일
    17570, //3월 13일
    16795, //3월 14일
    15934, //3월 15일
    16592, //3월 16일
    16948, //3월 17일
    16089, //3월 18일
    16406, //3월 19일
    17570, //3월 20일
    17540, //3월 21일
    16605, //3월 22일
    16887, //3월 23일
    14890, //3월 24일
    13021, //3월 25일
    13016, //3월 26일
    14653, //3월 27일
    15071, //3월 28일
    13454, //3월 29일
    11640, //3월 30일
    11950, //3월 31일
    14668, //4월 1일
    15454, //4월 2일
    15223, //4월 3일
    14490, //4월 4일
    11578, //4월 5일
    12840, //4월 6일
    12363, //4월 7일
    12630, //4월 8일
    13335, //4월 9일
    15695, //4월 10일
    15711, //4월 11일
    14033, //4월 12일
    13892, //4월 13일
    14618, //4월 14일
    16720, //4월 15일
    14111, //4월 16일
    16355, //4월 17일
    15902, //4월 18일
    13603, //4월 19일
    16444, //4월 20일
    15563, //4월 21일
    16945, //4월 22일
    18355, //4월 23일
    22211, //4월 24일
    21908, //4월 25일
    22626, //4월 26일
    23691, //4월 27일
    26080, //4월 28일
    36549, //4월 29일
    46759, //4월 30일
    32488, //5월 1일
    22625, //5월 2일
    20885, //5월 3일
    17231, //5월 4일
    19001, //5월 5일
    20482, //5월 6일
    20027, //5월 7일
    18982, //5월 8일
    20834, //5월 9일
    26997, //5월 10일
    25485, //5월 11일
    24258, //5월 12일
    21379, //5월 13일
    23261, //5월 14일
    22043, //5월 15일
    22941, //5월 16일
    24321, //5월 17일
    23932, //5월 18일
    23976, //5월 19일
    24625, //5월 20일
    29824, //5월 21일
  ],
  외국인: [4729, 1866, 1285, 1247, 1280, 1127, 976, 906, 1003, 755, 793, 769, 639, 453, 623, 815, 762, 613, 524, 598, 351, 383,
    320, //2월 29일
    337, //3월 1일
    270, //3월 2일
    343, //3월 3일
    205, //3월 8일
    222, //3월 5일
    193, //3월 7일
    139, //3월 8일
    137, //3월 9일
    153, //3월 10일
    106, //3월 11일
    118, //3월 12일
    89, //3월 13일
    128, //3월 14일
    88, //3월 15일
    79, //3월 16일
    66, //3월 17일
    94, //3월 18일
    41, //3월 19일
    35, //3월 20일
    34, //3월 21일
    39, //3월 22일
    23, //3월 23일
    31, //3월 24일
    35, //3월 25일
    27, //3월 26일
    24, //3월 27일
    37, //3월 28일
    26, //3월 29일
    81, //3월 30일
    31, //3월 31일
    35, //4월 1일
    30, //4월 2일
    28, //4월 3일
    32, //4월 4일
    26, //4월 5일
    26, //4월 6일
    30, //4월 7일
    32, //4월 8일
    33, //4월 9일
    32, //4월 10일
    20, //4월 11일
    26, //4월 12일
    27, //4월 13일
    26, //4월 14일
    25, //4월 15일
    17, //4월 16일
    33, //4월 17일
    23, //4월 18일
    24, //4월 19일
    30, //4월 20일
    24, //4월 21일
    29, //4월 22일
    34, //4월 23일
    29, //4월 24일
    29, //4월 25일
    22, //4월 26일
    20, //4월 27일
    40, //4월 28일
    38, //4월 29일
    181, //4월 30일
    98, //5월 1일
    64, //5월 2일
    69, //5월 3일
    103, //5월 4일
    47, //5월 5일
    56, //5월 6일
    65, //5월 7일
    41, //5월 8일
    35, //5월 9일
    56, //5월 10일
    45, //5월 11일
    46, //5월 12일
    80, //5월 13일
    66, //5월 14일
    92, //5월 15일
    68, //5월 16일
    73, //5월 17일
    69, //5월 18일
    91, //5월 19일
    74, //5월 20일
    84, //5월 21일
  ],
  중국인: [2957, 755, 156, 116, 157, 86, 209, 66, 76, 103, 52, 186, 6, 12, 100, 7, 9, 7, 6, 6, 1, 24,
    33, //2월 29일
    69, //3월 1일
    61, //3월 2일
    54, //3월 3일
    24, //3월 4일
    18, //3월 5일
    13, //3월 7일
    10, //3월 8일
    10, //3월 9일
    5, //3월 10일
    2, //3월 11일
    5, //3월 12일
    21, //3월 13일
    0, //3월 14일
    0, //3월 15일
    9, //3월 16일
    1, //3월 17일
    49, //3월 18일
    3, //3월 19일
    1, //3월 20일
    0, //3월 21일
    0, //3월 22일
    2, //3월 23일
    0, //3월 24일
    4, //3월 25일
    4, //3월 26일
    0, //3월 27일
    0, //3월 28일
    4, //3월 29일
    54, //3월 30일
    1, //3월 31일
    1, //4월 1일
    0, //4월 2일
    0, //4월 3일
    4, //4월 4일
    0, //4월 5일
    0, //4월 6일
    4, //4월 7일
    0, //4월 8일
    0, //4월 9일
    0, //4월 10일
    5, //4월 11일
    0, //4월 12일
    3, //4월 13일
    3, //4월 14일
    3, //4월 15일
    0, //4월 16일
    0, //4월 17일
    0, //4월 18일
    0, //4월 19일
    5, //4월 20일
    2, //4월 21일
    4, //4월 22일
    5, //4월 23일
    0, //4월 24일
    1, //4월 25일
    0, //4월 26일
    0, //4월 27일
    0, //4월 28일
    0, //4월 29일
    3, //4월 30일
    11, //5월 1일
    2, //5월 2일
    7, //5월 3일
    2, //5월 4일
    1, //5월 5일
    3, //5월 6일
    10, //5월 7일
    2, //5월 8일
    0, //5월 9일
    0, //5월 10일
    6, //5월 11일
    6, //5월 12일
    5, //5월 13일
    3, //5월 14일
    4, //5월 15일
    6, //5월 16일
    6, //5월 17일
    6, //5월 18일
    5, //5월 19일
    1, //5월 20일
    3, //5월 21일
  ]
}

// This is a bad way to copy, but for now it will suffice.
// 네이버 지도 API가 로드된 후 marker를 수정하기 때문에 일단 copy를 진행하지만 수정이 필요한 코드입니다.

var _marker = JSON.parse(JSON.stringify(marker));


// 업데이트 시간
var 지역별확진자_업데이트_시간 = "";
var 지역별확진자_업데이트4시간 = "";
for (var i = 0; i < koreaRegionalData.length; i++) {
  if(koreaRegionalData[i]['업데이트날짜']){
    지역별확진자_업데이트_시간 = koreaRegionalData[i]['업데이트날짜'];
  }
}
