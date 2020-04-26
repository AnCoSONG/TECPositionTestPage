git add . && git-cz && git push
yarn build
rm -r dist.zip
zip -r dist.zip dist