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

### Step 2: Tag Your Docker Image

Before pushing, tag your local Docker image to match the GCR format:

  ```sh
  docker tag YOUR_IMAGE gcr.io/PROJECT_ID/YOUR_TAG
  ```

### Step 3: Push the Docker Image to GCR

Now, push the tagged image to GCR:

  ```sh
  docker push gcr.io/PROJECT_ID/YOUR_TAG
  ```

### Step 4: Verify the Image in GCR

To check if your image was successfully pushed, list the images in your registry:

  ```sh
  gcloud container images list --repository=gcr.io/PROJECT_ID
  ```

### Step 5: Run the Image from GCR

To pull and run the image from GCR, use the following commands:

  ```sh
  docker pull gcr.io/PROJECT_ID/YOUR_TAG
  docker run -p PORT:PORT gcr.io/PROJECT_ID/YOUR_TAG
  ```