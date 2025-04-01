# Deploying a Docker Image to Google Container Registry (GCR)

This guide explains how to push a Docker image to **Google Container Registry (GCR)** and run it.

## Prerequisites

- Install **Google Cloud SDK** ([Download](https://cloud.google.com/sdk/docs/install))
- Install **Docker** ([Download](https://www.docker.com/get-started))
- Have a **Google Cloud Project** (Replace `PROJECT_ID` with your actual project ID)
- Enable the **Google Container Registry API**

  ```sh
  gcloud services enable containerregistry.googleapis.com
  ```
### Step 1. Authenticate Docker with Google Cloud

Run the following command to configure Docker authentication with Google Cloud:

  ```sh
  gcloud auth configure-docker
  ```