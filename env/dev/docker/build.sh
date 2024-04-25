#!/usr/bin/env bash

IMAGE=kg.biom/calc-web
VERSION=dev

docker build \
-t ${IMAGE}:${VERSION} \
-f ./env/dev/docker/Dockerfile . \
