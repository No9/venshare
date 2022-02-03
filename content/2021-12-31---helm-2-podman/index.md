---
title: "Helm 2 Podman - A local dev flow"
published: true
date: "2021-12-31"
path: blog/helm-2-podman
author: "anton"
category: "tech"
tutorial: "true"
length: "30 mins"
tags: [helm, podman, knative]
cover: ./preview.png
excerpt: A step by step tutorial on constructing a local development environment with helm and podman.
---

## Introduction

There has been a [some discussion](https://github.com/readme/guides/developer-onboarding) around the local dev loop this year. It's always been an area of interest for me as a tight dev loop is a key factor in having fun when writing code.

I've had a couple of iterations on writing tooling for the inner dev loop such as [roche-rs](https://roche-rs.org/) and [appsody plugins](https://appsody.dev/tutorials/ServerlessRust/) and my current perspective is that the solutions that are going to succeed will be the ones that merge the local dev loop with a path to production.

The path to production is currently an active area with 4 types of solutions converging on this.

1. Internal development platforms - Platforms created by developments teams to solve an internal business need that have been productised.

1. Integrated development Infrastructure - Products that incorporate 



 with [internal development platforms](https://github.com/padraigobrien/awesome-internal-developer-platforms) being a hot topic and CNCF starting the [knative func addon](https://github.com/knative-sandbox/kn-plugin-func) a tool to improve the local dev loop for knative and it integrates with your kubernetes deployment.

GraphQL tools are also touching this area with [hasura](https://hasura.io/) and [apollo](https://www.apollographql.com/) taking what an opinionated approach to providing devs with application infrastructure that's *easy* to run locally and scale in production.

JAMstack architecture is also part of this journey as we are seeing the likes of [vercel](https://vercel.com/) and [netlify](https://www.netlify.com/) build on the developer friendly JAMstack architecture to provide dynamic  E2E experience with serverless backends.

There are also hosted environments such as [Github Code Spaces](https://github.com/features/codespaces) and [AWS WorkSpaces](https://aws.amazon.com/workspaces/) are iterating on the idea of remote execution environments.

While there are a lot of products coming to market in this space some organisations are cutting thier own path. These organisations need to support legacy codebases and aquiring new skills for the new platforms mentioned above is time consuming. 
https://github.com/No9/helm-2-podman 






