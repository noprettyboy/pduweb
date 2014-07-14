#!/bin/bash
echo "Deploy and compress css/js"

echo "1.1) Create sub folder"
mkdir web/css
mkdir web/js
mkdir web/locale

echo "1.2) Combine Javascript and CSS"
node tool/combineEx.js -in MakeFile.cfg -run true -watch false

echo "1.3) Update version in device info"
node tool/version.js


#sleep 20
echo "Building step 1 complete, press any key to continue..."
read -N1 key

echo "2.1) Minified js/css"
rm web/js/prod.js
rm web/css/prod.css

java -jar tool/lib/yuicompressor-2.4.7.jar src/js/prod.js    -o  web/js/prod.min.js
# java -jar tool/lib/compiler.jar --js   src/js/prod.js    --js_output_file    web/js/prod.js
java -jar tool/lib/yuicompressor-2.4.7.jar src/css/prod.css  -o  web/css/prod.min.css

echo "for locale js, -x: display the commands"
node  tool/Compress.locale.js
sh -x ./tool/Compress.locale.list.cmd

echo "2.2) Compress with Gzip  prod.min.js => prod.js"
gzip -vc web/js/prod.min.js     >> web/js/prod.js
gzip -vc web/css/prod.min.css   >> web/css/prod.css

echo "2.3) Remove temp Files"
rm web/js/prod.min.js
rm web/css/prod.min.css

echo "2.4) Deploy statics from src to web, /i: all is directory /s: including the subfolders /y: replace the file without confirm"
#cp src/css/images/*   web/css/images  -r
#cp src/images/*       web/images      -r
cp src/css/img/*      web/css/img     -r

echo "2.5) Compress HTML"
# sample: java -jar tool/lib/htmlcompressor-1.5.3.jar ../src/master.htm > ../web/master.htm

echo "Create compress list"
node tool/Compress.html.js
sh -x ./tool/Compress.html.list.cmd

echo "Build step2 complete press any key to exit..."

read -N1 key