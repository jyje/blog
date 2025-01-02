---
title: MicroK8s
draft: false
tags:
aliases:
  - MicroK8s
  - microk8s
  - m8s
---
# Definition
- IoT를 위한 경량화된 [[k8s|쿠버네티스]] [[cluster|클러스터]] 생성 및 관리 도구 

# About
- 대표 사이트: https://microk8s.io
- 깃헙 리포지토리: https://github.com/canonical/microk8s

## 슬로건

> [!Quote]
> **The effortless Kubernetes**
> *Zero-ops, pure-upstream, HA Kubernetes, from developer workstations to production*


- 해석: 노력이 필요없는 간편한 쿠버네티스
	- ZeroOps: 간단한 설치와 관리(snap), 자동 업데이트(kubelet), 다양한 플러그인 지원(addons)
	- Pure Upstream: [[cncf|CNCF]] 공인 쿠버네티스 배포 중 하나로, 쿠버네티스 배포와 동일하게 버전을 갱신한다. 공식 쿠버네티스가 배포되면 거의 같은시기에 함께 배포된다.
	- HA Kubernetes: 멀티 노드를 지원하여 고가용성 유지 가능
	- From Developer Workstations to Production: 개발환경부터 프로덕션까지 사용 가능
- [[microk8s|MicroK8s]]는 튜닝 쿠버네티스이지만 경량화를 위한 튜닝만 적용되어 있다.
- 고가용성 구성을 기반으로 프로덕션으로 사용할 수 있고, 이를 위한 기술적인 난도는 낮은 편이다. 
- 대기업에서 사용하기 보다는, 개인이나 소규모 프로젝트에서 프로덕션 레벨의 쿠버네티스를 운영하기에 적합하다. 
