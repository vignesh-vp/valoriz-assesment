# Valoriz Assessment - README

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Running the Application Locally](#running-the-application-locally)
- [Building and Deploying to K3s](#building-and-deploying-to-k3s)
- [CI/CD Pipeline Setup](#cicd-pipeline-setup)
- [Monitoring and Alerting](#monitoring-and-alerting)
- [Troubleshooting](#troubleshooting)

---

## Overview
This project is a full-stack application with a Django backend and a Next.js frontend. It is containerized using Docker and deployed on a K3s Kubernetes cluster with CI/CD automation using Jenkins. Monitoring and alerting are implemented using Prometheus and Grafana.

---

## Project Structure
```
.
├── menu/                   # Django backend
├── menu-frontend/          # Next.js frontend
├── k8s/                    # Kubernetes manifests
│   ├── django-backend-deployment.yaml
│   ├── nextjs-frontend-deployment.yaml
├── Dockerfile.backend      # Dockerfile for Django backend
├── Dockerfile.frontend     # Dockerfile for Next.js frontend
├── jenkins/                # Jenkins pipeline scripts
├── monitoring/             # Prometheus and Grafana setup
└── README.md               # Project documentation
```

---

## Running the Application Locally

### Prerequisites
- Install Docker and Docker Compose
- Install Python and Node.js
- Install Kubernetes (K3s)

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/vignesh-vp/valoriz-assesment.git
   cd valoriz-assesment
   ```

2. Start the backend:
   ```sh
   cd menu
   python manage.py runserver
   ```

3. Start the frontend:
   ```sh
   cd menu-frontend
   npm install
   npm run dev
   ```

4. Access the application:
   - Backend: http://localhost:8000
   - Frontend: http://localhost:3000

---

## Building and Deploying to K3s

### Prerequisites
- Ensure K3s is running
- Install `kubectl` and `helm`
- Have access to Docker Hub

### Build and Push Docker Images
```sh
# Backend
docker build -t vgnsh/django-backend:latest -f Dockerfile.backend .
docker push vgnsh/django-backend:latest

# Frontend
docker build -t vgnsh/menu-frontend:latest -f Dockerfile.frontend .
docker push vgnsh/menu-frontend:latest
```

### Deploy to K3s
```sh
kubectl apply -f k8s/django-backend-deployment.yaml
kubectl apply -f k8s/nextjs-frontend-deployment.yaml
```

### Verify Deployment
```sh
kubectl get pods
kubectl get services
```

---

## CI/CD Pipeline Setup
Jenkins is installed inside the K3s cluster and automates the CI/CD process.

### Steps to Set Up CI/CD
1. Create a Jenkins pipeline job.
2. Use the provided Jenkinsfile.
3. Grant Jenkins permissions using a ServiceAccount.
4. Ensure Docker builds and Kubernetes deployments are triggered automatically.

---

## Monitoring and Alerting
Prometheus and Grafana are used for monitoring.

### Install Prometheus and Grafana using Helm
```sh
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring --create-namespace
```

### Access Grafana
```sh
kubectl port-forward svc/monitoring-grafana -n monitoring 3000:80
```
- Open http://localhost:3000
- Default credentials: `admin/admin`

### Configure Alertmanager for Email Alerts
1. Edit the `alertmanager.yaml` to configure SMTP settings.
2. Apply the updated configuration.

---

## Troubleshooting

### Application Issues
- Check logs: `kubectl logs <pod-name>`
- Restart pod: `kubectl delete pod <pod-name>`

### CI/CD Issues
- Check Jenkins logs: `kubectl logs -n jenkins <jenkins-pod>`

### Monitoring Issues
- Check Prometheus status: `kubectl get pods -n monitoring`

---

This completes the setup for running, deploying, and monitoring the application!

