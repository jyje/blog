---
title: Argo Workflows
draft: false
tags:
  - argo-proj
aliases:
  - Argo Workflows
  - 아르고 워크플로우
---
# Definition
- [[k8s|쿠버네티스]]의 워크플로우 엔진


# Origin
- 워크플로우의 이름인 아르고의 어원은 [[argo-proj#Origin|아르고 프로젝트]]에서 찾을 수 있다.


# Objectives 
- 쿠버네티스 파드를 원하는 순서대로 실행하여 문제를 해결한다.


# Example 
- [[Argo Events|아르고 이벤트]]와 연동해 이벤트 감지 후 파이프라인을 수행한다.
	- 구체적인 예시:
		- 깃허브에서 푸시 이벤트를 감지해 CI/CD 파이프라인을 수행한다.
