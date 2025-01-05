---
title: Kubernetes
draft: false
tags:
  - devops
  - k8s
aliases:
  - Kubernetes
  - k8s
  - 쿠버네티스
---
# Name
- Kubernetes; 쿠버네티스
- k8s; 케이츠 (k-에잇-s)
	- k와 s 사이에 8자가 있어서 이렇게 줄여서 부름


# Definition
- [[container|컨테이너]]화된 어플리케이션을 스케줄링하여 문제를 해결하는 [[cluster|클러스터]] 플랫폼
- [[devops|DevOps]] 분야에서... **'컨테이너 오케스트레이션 플랫폼'**


# Origin
- 쿠버네티스의 어원은 그리스어로 선장(Captain) 혹은 조타수(Steersman)를 의미한다.


# Related Terms
## 바닐라 쿠버네티스 (Vanilla Kubernetes)
- 쿠버네티스 기본구성으로, 쿠버네티스 공식 릴리즈를 그대로 설치하는 것을 의미한다.
- 수동 구성: `kubeadm`으로 직접 생성한 경우는 바닐라 쿠버네티스이다.
- 자동 구성: minikube, k8s on docker-desktop 등은 바닐라 쿠버네티스이다.

## 튜닝 쿠버네티스 (Tuned Kubernetes)
- 쿠버네티스를 튜닝하여 특정 환경에 맞춘 쿠버네티스를 의미한다. 대부분 자동 구성 쿠버네티스이다.
- 수동 구성: 직접 튜닝 쿠버네티스를 생성하는 경우. 보통 클라우드 공급 업체에서 구성한다
	- 예시: AWS EKS, GCP GKE, Azure AKS, NCloud NKS, KakaoCloud Kubernetes Engine
- 자동 구성: CNI, CSI 등을 튜딩하여 메모리 사용량을 줄이거나 성능을 향상시키는 것을 의미한다.
	- 예시: [[microk8s|MicroK8s]], k3s는 경량 튜닝 쿠버네티스의 일종이다.
