---
layout: post
title: Civic Agents Observatory beta launch
date: 2024-08-05 08:30:00 -0500
inline: false
related_posts: false
---

지난 1년간 City of Austin Innovation Office와 손잡고 설계해 온 **Civic Agents Observatory** 베타가 3-1-1 상담팀에 배포되었습니다. Austin 시의회 자료, 공공 데이터 포털, 10년 치 민원 로그를 안전하게 불러올 수 있는 파이프라인을 설계했고, 위험 프롬프트를 사전에 걸러내는 alignment 카드도 함께 공개했습니다.

### 무엇이 달라졌나요?

- Austin 주민들이 남긴 한국어/영어 문의를 한 번의 라벨링으로 다루기 위해 `implicature-aware` 보상 모델을 붙였습니다.
- 상담사가 정답을 모를 때 모델이 먼저 "clarifying question"을 던지도록 Pragmatic RL 정책을 실험 중입니다.
- 모델이 근거를 남기도록 Retrieval + critique 체인을 적용하고, 이를 모니터링하는 대시보드까지 묶었습니다.

이제는 실제 현장에서 나오는 피드백을 모아 두 번째 배포를 준비합니다. 커뮤니티 리뷰를 돕고 싶다면 언제든 연락 주세요!
