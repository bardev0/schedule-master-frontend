#! /bin/bash
pnpm run build
cp -r ./dist ./shiftArtist
scp -rp ./shiftArtist   root@191.96.53.225:/var/www/html/
rm -rf shiftArtist