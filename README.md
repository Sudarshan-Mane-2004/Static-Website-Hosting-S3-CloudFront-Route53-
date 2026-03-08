# 🌐 Static Website Hosting using AWS S3 + CloudFront + Route53

![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![Amazon S3](https://img.shields.io/badge/Amazon-S3-blue)
![CloudFront](https://img.shields.io/badge/Amazon-CloudFront-purple)
![Route53](https://img.shields.io/badge/Amazon-Route53-green)
![Project](https://img.shields.io/badge/Project-Static%20Website-success)

---

## 📌 Project Overview

This project demonstrates how to deploy a **static website using AWS cloud services**.

The website is hosted on **Amazon S3**, distributed globally using **CloudFront CDN**, and accessed using a **custom domain configured through Route53**.

This architecture improves **performance, scalability, and availability** of static websites and is commonly used in modern cloud-based applications.

---

## 🏗 Architecture

```
User
  ↓
CloudFront CDN
  ↓
Amazon S3 (Static Website Hosting)
  ↓
index.html | styles.css | script.js
```

You can place your architecture screenshot here.

```
images/architecture.png
```

Example:

```markdown
![Architecture](images/architecture.png)
```

---

## ⚙ AWS Services Used

| AWS Service | Purpose |
|-------------|--------|
| Amazon S3 | Store and host static website files |
| Amazon CloudFront | Deliver content globally using CDN |
| Amazon Route53 | Domain management and DNS routing |

---

## 📁 Project Structure

```
aws-static-website/
│
├── index.html
├── styles.css
├── script.js
├── README.md
│
└── images/
    ├── architecture.png
    ├── s3-setup.png
    ├── cloudfront.png
    └── route53.png
```

---

## 🎯 Project Goal

The goal of this project is to learn and implement:

- Static website hosting using **Amazon S3**
- Content delivery using **CloudFront CDN**
- Domain management using **Route53**
- Basic **cloud architecture design**
- Troubleshooting AWS deployment errors

---

## 🚀 Deployment Steps

### 1️⃣ Create an S3 Bucket

Create a bucket with a unique name.

Example:

```
project-1-bucket-demo
```

Disable:

```
Block all public access
```

---

### 2️⃣ Enable Static Website Hosting

Navigate to:

```
S3 → Bucket → Properties → Static Website Hosting
```

Configure:

```
Index document = index.html
```

---

### 3️⃣ Upload Website Files

Upload the following files into the S3 bucket:

```
index.html
styles.css
script.js
```

---

### 4️⃣ Add Bucket Policy

Add a bucket policy to allow public access.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::project-1-bucket-demo/*"
    }
  ]
}
```

---

### 5️⃣ Create CloudFront Distribution

Navigate to:

```
CloudFront → Create Distribution
```

Origin Domain:

```
project-1-bucket-demo.s3-website-us-east-1.amazonaws.com
```

Set:

```
Default Root Object = index.html
```

Wait until the distribution status becomes **Deployed**.

---

### 6️⃣ Configure Route53

Purchase a domain and configure DNS.

Create an **A record** pointing to the CloudFront distribution.

Example:

```
yourdomain.com → CloudFront Distribution
```

---

## 🌍 Final Result

The website becomes accessible globally using CloudFront CDN.

Example:

```
https://yourdomain.com
```

This ensures **low latency and fast content delivery worldwide**.

---

## 🧠 Skills Learned

- Static Website Hosting using Amazon S3
- CDN configuration using CloudFront
- DNS configuration using Route53
- Basic cloud architecture design
- Troubleshooting AWS deployment errors

---

## ⚠ Errors Faced During Deployment

### 1️⃣ AccessDenied Error

```
<Code>AccessDenied</Code>
<Message>Access Denied</Message>
```

Cause:

- Incorrect S3 bucket policy
- Block public access enabled
- CloudFront cannot access S3

Solution:

- Disable block public access
- Add correct bucket policy
- Verify object permissions

---

### 2️⃣ CloudFront 403 Error

Cause:

- Default root object not set

Solution:

```
Default Root Object = index.html
```

---

### 3️⃣ Incorrect Origin Endpoint

Wrong configuration:

```
bucket-name.s3.amazonaws.com
```

Correct configuration for static websites:

```
bucket-name.s3-website-region.amazonaws.com
```

---

## 📈 Future Improvements

- Add HTTPS using AWS Certificate Manager
- Configure advanced caching policies
- Implement CI/CD pipeline
- Enable monitoring with CloudWatch

---

## 👨‍💻 Author

**Sudarshan Mane**

Cloud & DevOps Enthusiast
