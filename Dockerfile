FROM ubuntu:bionic

COPY stopAllOtherBuilds.sh /root

RUN apt-get update && apt-get install -y --no-install-recommends \
    awscli \
    hugo
