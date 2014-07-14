REM Deploy and compress css/js

REM 1.1) Create sub folder
mkdir web\css
mkdir web\js
mkdir web\locale

REM 1.2) Combine Javascript and CSS
node tool/combineEx.js -in MakeFile.cfg -run true -watch false

REM 1.3) Update version in device info
node tool/version.js


REM wait for 1 seconds:   ping -n 1 127.1>nul

pause;

REM 2.1) Minified js/css
REM for prod js/css
del web\js\prod.js
del web\css\prod.css

java -jar tool/lib/yuicompressor-2.4.7.jar src/js/prod.js    -o  web/js/prod.min.js
REM java -jar tool/lib/compiler.jar --js   src/js/prod.js    --js_output_file    web/js/prod.js
java -jar tool/lib/yuicompressor-2.4.7.jar src/css/prod.css  -o  web/css/prod.min.css

REM for locale js
REM del web\locale\*.*
node tool/Compress.locale.js
call tool\Compress.locale.list.cmd

REM 2.2) Compress with Gzip  prod.min.js => prod.js
tool\7z.exe a -tgzip  web/js/prod.js    web/js/prod.min.js
tool\7z.exe a -tgzip  web/css/prod.css  web/css/prod.min.css

REM 2.3) Remove temp Files
del web\js\prod.min.js
del web\css\prod.min.css

REM 2.4) Deploy statics from src to web, /i: all is directory /s: including the subfolders /y: replace the file without confirm
REM xcopy src\css\images  web\css\images  /s /i /y
REM xcopy src\images      web\images      /s /i /y
REM xcopy src\locale      web\locale      /i /y
xcopy src\css\img     web\css\img     /s /i /y

REM 2.5) Compress HTML
REM sample: java -jar tool/lib/htmlcompressor-1.5.3.jar ../src/master.htm > ../web/master.htm

REM Create compress list
node tool/Compress.html.js
call tool\Compress.html.list.cmd

pause;