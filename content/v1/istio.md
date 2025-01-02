---
title: Istio
draft: false
tags:
  - devops
aliases:
  - Istio
  - 이스티오
---

# Name
- Istio
- 이스티오

# Definition
- 서비스 메시(Service Mesh) 구현체로, 마이크로서비스 간의 통신을 관리하고 제어하는 오픈소스 플랫폼
- Lyft, Google, IBM이 공동으로 개발

# Key Features
- 트래픽 관리: 서비스 간 트래픽 라우팅, 로드밸런싱, 서킷브레이커 등 제공
- 보안: mTLS를 통한 서비스 간 암호화 통신, 접근 제어
- 관찰 가능성: 분산 추적, 모니터링, 로깅 기능 제공
- 정책 관리: 서비스 간 통신에 대한 정책 설정 및 적용

# Architecture
## 핵심 컴포넌트
- Control Plane
  - istiod: 서비스 디스커버리, 구성 관리, 인증서 관리
- Data Plane
  - Envoy 프록시: 사이드카 형태로 각 서비스에 주입되어 통신 제어

# Use Cases
- 마이크로서비스 아키텍처의 복잡성 관리
- 서비스 간 통신의 보안 강화
- A/B 테스팅, 카나리 배포
- 트래픽 모니터링 및 문제 해결 
