---
title: Istio
draft: false
tags:
  - devops
  - k8s
aliases:
  - Istio
  - 이스티오
---

# Name
- Istio; 이스티오


# Definition
- 마이크로서비스의 통신을 관리하고 제어하는 [[service-mesh|서비스 메시(Service Mesh)]] 구현체


# About
- 공식 웹사이트: https://istio.io
- 깃헙 프로젝트: https://github.com/istio/istio
- 라이선스: Apache 2.0
- 초기 개발: Lyft, Google, IBM
- 소속 기관: CNCF
- 기능
	- [[k8s|쿠버네티스]] 서비스 간 통신을 관리하고 제어하는 데 필요한 기능을 제공
	- 트래픽 관리, 보안, 관찰 가능성, 정책 관리 등


# Key Features
- 트래픽 관리: 서비스 간 트래픽 라우팅, 로드밸런싱, 서킷브레이커 등 제공
- 보안: mTLS를 통한 서비스 간 암호화 통신, 접근 제어
- 관찰 가능성: 분산 추적, 모니터링, 로깅 기능 제공
- 정책 관리: 서비스 간 통신에 대한 정책 설정 및 적용


# Architecture
## Components
- Control Plane
  - istiod: 서비스 디스커버리, 구성 관리, 인증서 관리
- Data Plane
  - Envoy 프록시: 사이드카 형태로 각 서비스에 주입되어 통신 제어


# Use Cases
- 마이크로서비스 아키텍처의 복잡성 관리
- 서비스 간 통신의 보안 강화
- 트래픽 모니터링 및 문제 해결
- A/B 테스팅, 카나리 배포
	- [[argo-rollouts|Argo Rollouts]]와 결합하여 고도화된 테스트 및 롤링 업데이트 가능
