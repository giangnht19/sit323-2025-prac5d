# Deploying Vite React App to Kubernetes

This guide walks you through the steps to deploy a Vite React app to a Kubernetes cluster. It includes building a Docker image, creating a Kubernetes deployment, and setting up a service to expose the app.

## Prerequisites

- A Kubernetes cluster running (e.g., Minikube, AWS EKS, GKE, or a local setup with kubectl access).
- Docker installed and configured.
- kubectl installed and configured to interact with your Kubernetes cluster.

## Steps

### 1. **Setup the Kubernetes Cluster**

If you don’t already have a Kubernetes cluster, follow the instructions to set it up:

- **Minikube (Local Development):**
  ```bash
  minikube start
  ```
Check if it working:
  ```bash
  kubectl get nodes
  ```

### 2. **Create the Docker Image**
1. Dockerfile for Vite + React (using Nginx)
  ```bash
  # Stage 1: Build
  FROM node:18 AS build

  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  RUN npm run build

  # Stage 2: Serve with Nginx
  FROM nginx:alpine

  COPY --from=build /app/dist /usr/share/nginx/html

  # Copy custom Nginx config (optional)
  COPY nginx.conf /etc/nginx/conf.d/default.conf

  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]
  ```

2. Build the Docker Image: 
Run the following command to build the Docker image from the Dockerfile:
  ```bash
  docker build -t vite-react-app .
  ```

3. Push the Docker Image to a Container Registry
  ```bash
  docker tag vite-react-app <your-dockerhub-username>/vite-react-app:latest
  docker push <your-dockerhub-username>/vite-react-app:latest
  ```

### 3. Create the Kubernetes Deployment
Create the Deployment Manifest (deployment.yaml)
  ```bash
  apiVersion: apps/v1
kind: Deployment
metadata:
  name: vite-react-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: vite-react-app
  template:
    metadata:
      labels:
        app: vite-react-app
    spec:
      containers:
        - name: vite-react-app
          image: <your-dockerhub-username>/vite-react-app:latest
          ports:
            - containerPort: 80
  ```

### 4. Create the Kubernetes Service
Create the Service Manifest (service.yaml)
  ```bash
  apiVersion: v1
  kind: Service
  metadata:
    name: vite-react-app
  spec:
    selector:
      app: vite-react-app
    ports:
      - protocol: TCP
        port: 80
        targetPort: 80
    type: LoadBalancer
    ```
