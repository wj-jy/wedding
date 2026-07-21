/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "신랑 박우정",
    father: "아버지 박근배",
    mother: "어머니 백종임",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "신부 정지영",
    father: "아버지 정영호",
    mother: "어머니 정현숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-11-01",
    time: "12:30",
    venue: "루벨",
    hall: "이스트센트럴타워 35층",
    address: "서울시 강동구 천호대로 1077 이스트센트럴타워 35-36층",
    tel: "02-6956-0230",
    mapLinks: {
      kakao: "https://map.kakao.com/?urlX=529237.9999999993&urlY=1121413.999999998&urlLevel=3&itemId=1185379934&q=%EB%A3%A8%EB%B2%A8%20%EA%B0%95%EB%8F%99&srcid=1185379934&map_type=TYPE_MAP",
      naver: "https://map.naver.com/p/search/%EB%A3%A8%EB%B2%A8/place/1064180088?placePath=%3Fbk_query%3D%25EB%25A3%25A8%25EB%25B2%25A8%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3D%25EB%25A3%25A8%25EB%25B2%25A8%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3D%25EB%25A3%25A8%25EB%25B2%25A8%26x%3D%26y%3D&searchType=place"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "10년의 인연 끝에 사랑을 만나,\n5년의 시간을 함께 걸어왔습니다.\n\n서로의 가장 좋은 친구이자 가장 사랑하는 사람으로,이제 평생을 약속하려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우정,지영의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "박우정", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "박근배", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "백종임", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "정지영", bank: "우리은행", number: "1002-194-002100" },
      { role: "아버지", name: "정영호", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "정현숙", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 박우정♥신부 정지영 결혼합니다",
    description: "2026년 11월 1일, 소중한 분들을 초대합니다."
  }
};
