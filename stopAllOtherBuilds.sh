#!/bin/bash

for id in $(aws codebuild list-builds-for-project --project-name atigerband-hugo --no-paginate --output text --query ids)
    do if [ $id != $ CODEBUILD_BUILD_ID ]
    then
        aws codebuild stop-build --id $id
    fi
done
