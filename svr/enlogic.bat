REM start sitetest

:loop
node enlogic.js

REM waiting...
ping -n 30 127.1>nul

goto loop; 