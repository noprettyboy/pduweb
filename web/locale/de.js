(function(a){a.ALARMTYPE={0:"Unit",1:"Eingabephase",2:"Sicherungsautomat",3:"Outlets",4:"Externe Sensoren"};a.SENSORTYPE={1:"Temperatur",2:"Feuchtigkeit (%)",3:"Türkontakt",4:"Kontaktsensor",5:"Flüssigkeits-Leckagesensor",6:"Doppelboden-Feuchtigkeitssensor",7:"Rauch",8:"Leuchtsignal"};a.TEMPUNIT={0:"C",1:"F"};a.FLUID={0:"keine Leckage",1:"Leckage"};a.AISLETYPE={0:"Kalt",1:"Heiß"};a.POWERSTATUS={0:"Aus",1:"An",2:"Zuletzt bekannt"};a.PDUCTRLTYPE={0:"Aus",1:"An",2:"Zuletzt bekannt"};a.POWERCTRLTYPE={0:"Aus",1:"An",2:"Ausschaltung verzögert",3:"Einschaltung verzögert",4:"Umgehendes Reboot",5:"Verzögertes Reboot"};a.UPDATESTATUS={0:"Update fehlgeschlagen!",2:"Sie wurden ausgeloggt, da Sie zu lange inaktiv waren.",3:"Die ausgewählte Rolle ist derzeit Usern zugeordnet und kann nicht entfernt werden.",41:"Das alte Passwort ist nicht korrekt.",42:"Der Port ist bereits belegt!",43:"Ihr Login-Passwort ist zu einfach, um als Zugangspasswort benutzt  zu werden.",51:"Die folgenden Outlets/das folgende Outlet können/kann derzeit aufgrund einer Überladungsbegrenzung nicht angeschaltet werden :.<br/>( Outlet ID: [ {0} ] )"};a.POWERENERGY={activepower:"Aktive Leistung (W)",apparentpower:"Scheinleistung (VA)",totalenergymeter:"Gesamtstrom (kWh)"};a.OUTLETS={1:"Outlet 1",2:"Outlet 2",4:"Outlet 3",8:"Outlet 4",16:"Outlet 5",32:"Outlet 6",64:"Outlet 7",128:"Outlet 8",256:"Outlet 9",512:"Outlet 10",1024:"Outlet 11",2048:"Outlet 12",4096:"Outlet 13",8192:"Outlet 14",16384:"Outlet 15",32768:"Outlet 16",65536:"Outlet 17",131072:"Outlet 18",262144:"Outlet 19",524288:"Outlet 20",1048576:"Outlet 21",2097152:"Outlet 22",4194304:"Outlet 23",8388608:"Outlet 24",16777216:"Outlet 25",33554432:"Outlet 26",67108864:"Outlet 27",134217728:"Outlet 28",268435456:"Outlet 29",536870912:"Outlet 30",1073741824:"Outlet 31",2147483648:"Outlet 32"};a.PRIVILEGES={256:"PDF-Einstellungen ändern",65536:"Eingabephasen-Einstellungen ändern",131072:"Sicherungsautomaten-Einstellungen ändern",16:"Konfiguration Externer Sensoren ändern",16384:"Outlet schalten",33554432:"Outlet-Einstellungen wechseln",128:"Eigenes Passwort ändern",32:"Lokale Userverwaltung ändern",262144:"Netzwerkdienst ändern",512:"SNMP Einstellungen ändern",64:"Netzwerkeinstellungen ändern",1024:"Sicherheitseinstellungen ändern",8:"Ereigniseinstellungen ändern",2:"Datenlog-Einstellungen ändern",4:"Datum/Zeit-Einstellungen ändern",524288:"SMTP-Einstellungen ändern",1048576:"Servererreichbarkeit ändern",2048:"USB-Einstellungen ändern",16777216:"LDAP-Einstellung ändern",8388608:"Daten-/Ereignislog löschen",4096:"Firmware-Update",2097152:"Anderen User abkuppeln",4194304:"Diagnose durchführen",32768:"Konfigurationsdatei ausführen",8192:"Netzwerkkarten-Reset"};a.CURRENTMAX=32;a.ALARMUNITTYPE={A:{unit:" (A)",factor:1000,fixed:2,max:16,min:0,title:"Stromstärke"},V:{unit:" (V)",factor:1000,fixed:0,max:260,min:90,title:"Stromspannung"},VA:{unit:" (VA)",factor:1000,fixed:0,min:0,max:49140,title:"Scheinleistung"},W:{unit:" (W)",factor:1000,fixed:0,min:0,max:49140,title:"Aktive Leistung"},Wh:{unit:" (Wh)",factor:1000,fixed:2,min:0,max:1000000000,title:"Energie"},C:{unit:" (°C)",factor:1,fixed:0,min:0,max:75,title:"Temperatur"},F:{unit:" (F)",factor:1,fixed:0,min:32,max:167,title:"Temperatur"},H:{unit:" (%)",factor:1,fixed:0,min:15,max:90,title:"Feuchtigkeit"}};a.AJAXSTATUS={0:"Server reagiert nicht!",401:"Sie wurden ausgeloggt, da Sie zu lange inaktiv waren.",420:"Ihre Sitzung wurde vom Administrator beendet.",425:"Der User ist nicht aktiv oder bereits eingeloggt.",426:"Die maximale User-Anzahl ist eingeloggt (10).",427:"Zu viele erfolglose Login-Versuche: Konto vorübergehend gesperrt.",430:"Sie sind nicht dazu befugt, diese Handlung auszuführen!",501:"Interner Serverfehler!"};a.PINGSTATUS={0:"Erreichbar",1:"Nicht erreichbar",2:"Warte auf zuverlässige Antwort",3:"Fehler"};a.CLIENTTYPE={1:"Web GUI",2:"TELNET",3:"FTP",4:"SSH"};a.EVENTNAME={CALA:"Kritischer Alarm",WALA:"Warn-Alarm",CBSC:"Sicherungsautomaten-Status geändert",OLSC:"Outlet-Stromkontrollstatus geändert",ESSC:"Externer Sensorstatus geändert",PDUC:"PDU-Konfigurationsdatei importiert/exportiert",FMUP:"Firmware-Update",NCRS:"Netzwerkkarten-Reset/Start",CSSC:"Kommunikationsstatus geändert",DCSC:"Daisy Chain Status geändert",EBLM:"Bootloader-Modus eingeben",SPSC:"Server Ping-Status geändert",USRA:"User-Aktivität",PSWC:"Passwort/Einstellungen geändert",ROSC:"Rollenstatus geändert",USSC:"User-Status geändert",LDAP:"LDAP Fehler"};a.EVENTTYPE={65536:"Sende SMTP Nachricht",131072:"Sende SNMP Trap",262144:"Leuchtsignal leuchtet"};a.EVENTRULE={Alarm:{CALA:458752,WALA:458752},CBSC:458752,OLSC:196608,ESSC:458752,PDUC:196608,FMUP:196608,NCRS:196608,CSSC:458752,DCSC:196608,EBLM:196608,SPSC:196608,USRA:196608,"User-Verwaltung":{PSWC:196608,ROSC:196608,USSC:196608},LDAP:196608};EL.TreeRoot={id:"dashboard",text:"Dashboard",iconCls:"icon-desk"};EL.TreeMap={ips:{id:"ips",url:"xhrips.jsp",text:"Eingabephasen",icon:"icon-ip"},cbs:{id:"cbs",url:"xhrcbs.jsp",text:"Sicherungsautomaten",icon:"icon-cb"},ess:{id:"extsens",url:"xhrextsens.jsp",text:"Externe Sensoren",icon:"icon-temp"},outs:{id:"outlets",url:"xhroutlets.jsp",text:"Outlet-Stromverwaltung"}};MODEL.login={title:"Login",username:"User-Name",password:"Passwort",login:"Login",clear:"Löschen"};MODEL.master={useradmin:{txt:"User-Verwaltung",changepw:{txt:"Passwort ändern",dlg:"User-Passwort ändern"},users:{txt:"User",dlg:"User verwalten"},roles:{txt:"Rollen",dlg:"Rollen verwalten"}},deviceadmin:{txt:"Gerätekonfiguration",networkser:{txt:"Netzwerkdienste",http:{txt:"HTTP",dlg:"HTTP Einstellungen"},snmp:{txt:"SNMP",dlg:"SNMP Einstellungen"},ssh:{txt:"SSH",dlg:"SSH Einstellungen"},telnet:{txt:"TELNET",dlg:"TELNET Einstellungen"},ftp:{txt:"FTP",dlg:"FTP Einstellungen"}},networkcon:{txt:"Netzwerkkonfiguration",dlg:"Netzwerkkonfiguration"},security:{txt:"Sicherheit",loginset:{txt:"Login-Einstellungen",dlg:"Login-Einstellungen"},passwordpol:{txt:"Passwort-Richtlinien",dlg:"Passwort-Richtlinien"},forcehttps:{txt:"Force HTTPS für Webzugang",dlg:"Force Https"}},eventrules:{txt:"Ereignisregeln",dlg:"Ereignisregel-Einstellungen"},datalog:{txt:"Datenlog",dlg:"Datenlog-Einstellungen"},datetime:{txt:"Datum/Zeit-Einstellungen ändern",dlg:"Zeit/Datum Einstellungen konfigurieren"},smtpemail:{txt:"SMTP-Email",dlg:"SMTP Server-Einstellungen"},serverreach:{txt:"Server-Erreichbarkeit",dlg:"Server-Erreichbarkeit"},usb:{txt:"USB",dlg:"USB Einstellungen"},ldap:{txt:"LDAP",dlg:"LDAP Einstellungen"}},systemadmin:{txt:"Systemverwaltung",vweventlog:{txt:"Ereignislog ansehen",dlg:"Ereignislog ansehen"},vwdatalog:{txt:"Datenlog ansehen",dlg:"Datenlog ansehen"},firmwaremt:{txt:"Firmware-Wartung",udfirmware:{txt:"Firmware aktualisieren",dlg:"Firmware aktualisieren"},vwfirmwareud:{txt:"Firmware-Updateverlauf ansehen",dlg:"Firmware-Updateverlauf"}},conusers:{txt:"Verbundene User",dlg:"Verbundene User"},diagnostic:{txt:"Diagnostics",dldiaginfo:{txt:"Diagnostics-Informationen",dlg:"Diagnostics-Informationen herunterladen"}},pduconfig:{txt:"PDU-Konfigurationsdatei",dlg:"Konfigurationsdatei"},deviceinfo:{txt:"Geräteinformationen",dlg:"Geräteinformationen"},nwcardreset:{txt:"Netzwerkkarte zurücksetzen",dlg:"Netzwerkkarte zurücksetzen"}},help:{txt:"Hilfe",userguide:{txt:"Bedienungsanleitung",dlg:"Bedienungsanleitung"}},setalarmdl:{lowercritical:"Kritisch: Wert zu niedrig",lowerwarning:"Warnung: Wert zu niedrig ",upperwarning:"Warnung: Wert zu hoch",uppercritical:"Kritisch: Wert zu hoch",resetthreshold:"Threshold zurücksetzen",alarmscdelay:"Alarmstatusänderung verzögern (Muster):",alarmsetting:"Alarmeinstellungen",enablealarm:"Alarmeinstellungen aktivieren",updatefail:"Update fehlgeschlagen",lowcriticalinfo:'"Kritisch: Wert zu niedrig" + Grenze muss niedriger oder gleich sein als "Warnung: Wert zu niedrig"',lowwarninfo:'"Warnung: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Warnung: Wert zu hoch"',upwarninfo:'"Warnung: Wert zu hoch" + Grenze muss weniger oder gleich sein als "Kritisch: Wert zu hoch"',lowcriticalinfo2:'"Kritisch: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Warnung: Wert zu hoch"',lowcriticalinfo3:'"Kritisch: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Kritisch: Wert zu hoch"',lowwarninfo2:'"Warnung: Wert zu niedrig" + 2-fache Reset-Grenze muss weniger oder gleich sein als "Kritisch: Wert zu hoch"'},resetdevicedl:{txt:"Netzwerkkarte zurücksetzen",txt1:"Die Netzwerkkarte wird in wenigen Sekunden zurückgesetzt.",txt2:"Sie werden zurück zur Login-Seite geleitet in",txt3:"Sekunden.",txt4:"Wenn diese Weiterleitung nicht funktioniert, nutzen Sie",txt5:"diesen Link",txt6:"zur Login-Seite."},language:{txt:"Sprache",type:{en:"English",cn:"Chinesisch"}},logout:"Abmelden",doreallylogout:"Wollen Sie sich wirklich abmelden?",tree:"PDU Explorer",login:"Eingeloggt als {0}",greeting:"Willkommen bei Enlogic",ip:"<b>IP-Adresse: </b>{0}",time:"<b>Login-Zeit: </b>{0}"};MODEL.dashboard={loading:"Lade",status:"Status",alarms:"Alarme",ok:"Ok",currentrms:"Stärke, RMS (A)",voltagerms:"Spannung, RMS (V)",pdupowerenergy:"PDU Stromleistung",externalsensor:"Externe Sensoren, Typ",sensorname:"Sensorname",pduname:"PDU Name",location:"Ort",value:"Wert",activealarmpdu:"Aktive Alarme für PDU Nr.",close:"Schließen",alarmtype:"Alarmtyp",count:"Zählen"};MODEL.pdu={pduset:"PDU Einstellung",pduenergy:"PDU Energie",pduattribute:"PDU Attribute",pduname:"PDU Name",pdulocation:"PDU Ort",pduunitdelay:"PDU Einheit Kaltstart-Verzögerung (0 - 3600 s)",outletstate:"Outlet-Status bei PDU-Start",resetenergy:"Strom zurücksetzen",resetolenergy:"Outlet-Strom zurücksetzen",pdumacaddress:"PDU MAC Adresse",rating:"Bewertung",resetenergymeter:"Zurücksetzbarer Strommesser",activepowervalue:"Wert Aktive Leistung (W)",activepowerset:"Aktive Leistung Status, Einstellung",reset:"Zurücksetzen",resetsuccess:"Erfolgreich zurückgesetzt!",surechangeol:"Wollen Sie diese Änderung wirklich auf alle Outlets anwenden?",reallyresetenergy:"Wollen Sie wirklich den Strom zurücksetzen?",nopermission:"Keine Befugnis:"};MODEL.phases={phasecurrentrms:"Phasenstrom, RMS",reading:"Lese ",lowercritical:"Kritisch: Wert zu niedrig ",lowerwarning:"Warnung: Wert zu niedrig ",upperwarning:"Warnung: Wert zu hoch ",uppercritical:"Kritisch: Wert zu hoch ",statusset:"Status, Einstellung",phasevoltagerms:"Phasenspannung, RMS",phasepower:"Phasenstrom",apparentpower:"Scheinleistung (VA)",powerfactor:"Stromfaktor",activepower:"Aktive Leistung (W)"};MODEL.breakers={circuitid:"Schaltungs-ID",statusset:"Stärke, RMS (A)",currentrms:"Wertung (A)",rating:"Rating (A)",remaincapacity:"Verbleibende Kapazität (A)",inputphases:"Eingabephasen",connoutlet:"Verbundene Outlets"};MODEL.sensor={id:"ID",typeset:"Typ",statusset:"Status, Einstellung",value:"Wert",serialno:"Seriennr.",aisle:"Gang",name:"Name",description:"Beschreibung",location:"Ort"};MODEL.outletstools={powercontrol:"Stromeinstellung",execute:"Ausführen",outletid:"Outlet ID",outletname:"Outlet-Name",alarmstatus:"Alarm-Status",activepower:"Aktive Leistung (W)",powerstatus:"Stromstatus",noselect:"Sie haben nichts ausgewählt!",doexecute:"Wollen Sie diesen Befehl wirklich ausführen?",outletset:"Outlet-Einstellung",outletattr:"Outlet-Attribute",stateonstart:"Status beim Start",ondelay:"Einschaltverzögerung (0 ~ 7200s)",offdelay:"Ausschaltverzögerung (0 ~ 7200s)",rebootduration:"Reboot-Dauer (5 ~ 60s)",current:"Stärke (A)",voltage:"Spannung (V)",activepower:"Aktive Leistung (W)",peakpower:"Höchstleistung (W)",powerfactor:"Stromfaktor",energymeter:"Zurücksetzbarer Strommesser"};MODEL.changepw={oldpass:"Altes Passwort",newpass:"Neues Passwort",cfmpass:"Passwort bestätigen",chgpwfail:"Passwortänderung fehlgeschlagen."};MODEL.users={noselect:"Bitte wählen Sie eine Reihe!",usernotbedel:"Dieser User kann nicht gelöscht werden!",notdelyourself:"Sie können sich nicht selbst löschen!",notdelthisuser:"Sie können diesen User nicht löschen!",reallydeluser:"Wollen Sie wirklich den User  {0} löschen ?",nopermission:"Sie sind nicht dazu befugt, diesen User zu löschen!",enteruserexist:"Der eingegebene Username existiert bereits!",noselectrole:"Bitte wählen Sie eine Rolle!",setting:"Einstellungen",snmpv3:"SNMPv3",preferences:"Präferenzen",createnewuser:"Neuen User erstellen",edituser:"User bearbeiten:",active:"Aktiv",roles:"Rollen",username:"Username",fullname:"Kompletter Name",password:"Passwort",cfpassword:"Passwort bestätigen",telnumber:"Telefonnummer",emailaddress:"E-Mail Adresse",enabled:"Aktiviert",forcepwchntlg:"Beim nächsten Login Passwortänderung anfordern",enablesnmpacc:"SNMPv3 Zugang aktivieren",securitylevel:"Sicherheitslevel",usepwasauthpass:"Passwort als Zugangspasswort nutzen",authpass:"Zugangspasswort",cfauthpass:"Zugangspasswort bestätigen",useauthaspri:"Zugangspasswort als Datenschutzpasswort nutzen",pripass:"Datenschutzpasswort",cfpripass:"Datenschutzpasswort bestätigen",authalgorithm:"Zugangs-Algorithmus",prialgorithm:"Datenschutz-Algorithmus",temperatureunit:"Temperatureinheit",news:"Neu",edits:"Bearbeiten",deletes:"Löschen"};MODEL.role={noselect:"Bitte wählen Sie eine Reihe!",rolenotbedel:"Diese Rolle kann nicht gelöscht werden!",reallydelrole:"Wollen Sie wirklich die Rolle: {0} löschen ?",settings:"Einstellungen",privileges:"Privilegien",rolename:"Rollenname",description:"Beschreibung",roleinfo:"Privilegien werden bearbeitet",privilegesedit:"Privilegien werden bearbeitet",selectillustrate:"Fügen Sie der Rolle <br/> Privilegien hinzu. Bitte beachten Sie, dass einige Privilegien zusätzliche Parameter erfordern.",parameters:"Parameter",clickcancel:"Klicken Sie auf „Abbrechen“, um den Vorgang zu schließen",clicksavecancel:"Klicken Sie hier, um den Vorgang zu speichern und zu schließen",news:"Neu",edits:"Bearbeiten",deletes:"Löschen",saves:"Speichern"};MODEL.netsvr={change:"Nachdem Sie diese Einstellungen ändern, müssen Sie die Netzwerkkarte zurücksetzen, damit sie aktiv werden. Wollen Sie diese Änderungen jetzt anwenden?"};MODEL.http={httpport:"HTTP Port",httpsport:"HTTPS Port"};MODEL.snmp={general:"Allgemein",traps:"Traps",snmpv12set:"SNMP v1 / v2c Einstellungen",snmpv12:"SNMP v1 / v2c",enable:"Aktivieren",readcs:"Community-String lesen",writecs:"Community-String beschreiben",snmpv3set:"SNMP v3 Einstellungen",snmpv3:"SNMP v3",mibiigroup:"MIB-II Systemgruppe",syscontact:"sysContact",sysname:"sysName",syslocation:"sysLocation",snmptrapset:"SNMP Trap Einstellungen",snmptraprule:"System Snmp Trap Ereignisregel",host:"Host",port:"Port",community:"Community",helpinfo:"Bitte nutzen Sie die Option Geräteeinstellungen > Ereignisregeln für detailliertere Trap-Einstellungen.",downloadmib:"Download MIB"};MODEL.ssh={sshport:"SSH Port",enablessh:"SSH-Zugang aktivieren"};MODEL.telnet={telnetport:"Telnet Port",enabletelnet:"Telnet-Zugang aktivieren"};MODEL.ftp={ftpport:"FTP Port",enableftp:"FTP-Zugang aktivieren"};MODEL.network={ipprotocol:"IP-Protokoll",ipv4set:"IPv4 Einstellungen",ipv4only:"Nur IPv4",ipv6only:"Nur IPv6",ipv46:"IPv4 & IPv6",dnsresolve:"DNS Resolver",preference:"Präferenz",ipv4address:"IPv4 Adresse",ipv6address:"IPv6 Adresse",ipautoconfig:"IP Auto-Konfiguration",ipaddress:"IP Adresse",netmask:"Netzmaske",gateway:"Gateway",specficdns:"DNS-Server manuell einrichten",primarydns:"Primärer DNS-Server",secondarydns:"Sekundärer DNS-Server",dnssuffix:"DNS Suffix(Optional)"};MODEL.loginset={userblock:"Userblockierung",blockuserfail:"User nach fehlgeschlagenem Login blockieren",maxnumfailln:"Maximale Anzahl fehlgeschlagener Logins",blocktimeout:"Blockierungszeit",loginlimit:"Login-Begrenzungen",idletimeout:"Inaktivität-Timeoutzeitraum"};MODEL.pwpolicy={pwaging:"Passwort Aging",pwaginginterval:"Passwort Aging Intervall",strongpw:"Starke Passworte",minpwlength:"Minimale Passwortlänge",maxpwlength:"Maximale Passwortlänge",enforcelower:"Mindestens ein Kleinbuchstabe",enforceupper:"Mindestens ein Großbuchstabe",enforcenumeric:"Mindestens eine Ziffer",enforcespecial:"Mindestens ein Sonderzeichen."};MODEL.forcehttpinfo={confirminfo:"Nachdem Sie diese Einstellungen ändern, müssen Sie die Netzwerkkarte zurücksetzen, damit sie aktiv werden. <br/>Wollen Sie diese Änderungen jetzt anwenden?"};MODEL.evtrule={eventset:"Ereignisaktionseinstellungen",selectrule:"Ausgewählte Regeln",smtpreceive:"SMTP Receiver",eventname:"Ereignisname",action:"Aktionen"};MODEL.datalog={loginterval:"Log-Intervall (1 - 1440 Minuten)",enablelog:"Datenlog aktivieren",illustrateinfo:"Das Datenlog kann bis zu 2000 Einträge speichern. Die maximale Speicherzeit der Daten hängt von der Log-Intervalleinstellung ab. Wenn z.B. der Logintervall 600 Sekunden (10 Minuten) ist, kann das Log bis 13.89 Tage Daten speichern. Wenn das Log die maximale Kapazität erreicht hat, werden die ältesten Einträge mit den neuesten überschrieben."};MODEL.datetime={timezone:"Zeitzone",usertime:"Userspezifische Zeit",date:"Datum (JJJJ-MM-TT)",time:"Zeit (Stunde:Minute:Sekunde)",synntpserver:"An NTP Server anpassen",firstip:"IP Adresse des ersten Servers",secondip:"IP Adresse des zweiten Servers",checkntp:"NTP-Server prüfen",checkntpinfo:"Bitte geben Sie den richtigen NTP-Server ein!"};MODEL.smtp={serverset:"Server-Einstellungen",servername:"Server Name",port:"Port",sendemail:"E-Mail Adresse des Absenders",numsend:"Erneute Zustellungsversuche",intervalsend:"Zeitintervall (in Minuten) zwischen Zustellungsversuchen",serverreq:"Erfordert Serverauthentifizierung",username:"Username",password:"Passwort",smtpset:"SMTP-Einstellungen prüfen",recemail:"Empfänger E-Mail Adresse",testemail:"Test E-Mail versenden",testsmtp:"Prüfe SMTP-Einstellung",testemailinfo:"Sende Test E-Mail, bitte warten...",errorinfo:"Fehler: SMTP Einstellungen ! & uptstatus ist : ",probleminfo:"Beim Senden der Test E-Mail ist ein Fehler aufgetreten.<br/>",checkinfo:"Bitte prüfen Sie Ihre SMTP-Servereinstellungen.<br/>",succinfo:"Die Nachricht wurde erfolgreich versendet. Bitte prüfen Sie Ihren Posteingang.",errorname:"<br/>Fehlermeldung:<br/>Name oder Dienst unbekannt.",errorconn:"<br/>Fehlermeldung:<br/>Verbindung abgelehnt",errordns:"<br/>Fehlermeldung:<br/>Der DNS-Server konnte nicht gefunden werden!",errorsmtp:"Fehler bei onreadystatechange in den SMTP-Servereinstellungen:"};MODEL.serreach={iphostnm:"IP-Adresse/Hostname",pingenable:"Ping Aktiviert",status:"Status",news:"Neu",edit:"Bearbeiten",deletes:"Löschen",refresh:"Aktualisieren",addnew:"Neue Servereigenschaft hinzufügen",reachemax:"Maximale Servereinträge erreicht. <br/> User kann keinen neuen Server erstellen",enableping:"Ping-Prüfung für diesen Server aktivieren",numSuccping:"Anzahl erfolgreicher Pings zur Aktivierung",numunsuccping:"Anzahl erfolgloser Pings für Fehlversuch",waittime:"Wartezeit (in Sekunden) zum nächsten Ping",editserver:"Servereigenschafen bearbeiten",noselect:"Bitte wählen Sie eine Reihe.",deleteser:"Wollen Sie wirklich den Server '{0}' löschen?"};MODEL.usb={usb:"USB",enableusb:"USB-Zugang aktivieren"};MODEL.ldap={ldapset:"LDAP Einstellungen",ldapenable:"LDAP aktivieren",typeserver:"LDAP-Servertyp",iphostnm:"IP-Adresse / Hostname",port:"Port",sasl:"SASL",authnm:"Authentisierungs-Name",authdomain:"Authentisierungs-Domain",usebind:"Bind Credentials benutzen",binddn:"Bind DN",bindpw:"Bind Passwort",Confirmpw:"Passwort bestätigen",dnsearch:"Base DN für Suche",lgnmattr:"Login-Namen Attribute",userentry:"Eingabe nicht im richtigen Format",testldapset:"Prüfe LDAP Einstellungen",usernm:"Username",password:"Passwort",testconn:"Verbindung testen",conntest:"Verbindungstest",conftest:"Konfigurations-Test",authtest:"Authentifizierungs-Test",userrole:"Dem User sind Rollen zugeordnet",userknownrole:"Dem User sind bekannte Rollen zugeordnet"};MODEL.eventlog={reflog:"Log aktualisieren",clearlog:"Log löschen",savelog:"Log speichern",launch:"In neuem Fenster öffnen",clearloginfo:"Wollen Sie das Log wirklich löschen?"};MODEL.vwdtlog={reflog:"Log aktualisieren",clearlog:"Log löschen",savelog:"Log speichern",launch:"In neuem Fenster öffnen"};MODEL.updtfw={upload:"Hochladen",selectfile:"Dateien auswählen",deletes:"Löschen",pending:"Ausstehend...",fileformat:"Das ausgewählte Dateiformat ist ungültig; bitte wählen Sie erneut."};MODEL.frupdth={timestamp:"Zeitstempel",preversion:"Vorherige Version",updversion:"Version aktualisieren",status:"Status"};MODEL.conuser={usernm:"Username",ipaddr:"IP-Adresse",clienttype:"Client-Typ",idletime:"Inaktive Zeit",action:"Aktion",disconn:"Trennen",disconnuser:"User trennen",dodisconnuser:"Wollen Sie wirklich den User von der Verbindung trennen '{0}'?",dodisconnself:"Sie versuchen, Ihre Verbindung zu beenden zu:'{0} ({1})' <br/> Wollen Sie Ihre Verbindung wirklich beenden?"};MODEL.diagnostic={diagconf:"Diagnostic-Konfiguration",dldiaginfo:"Diagnostic-Informationen herunterladen"};MODEL.blkconf={dlconf:"Konfiguration herunterladen",dlconffile:"Konfigurationsdatei herunterladen",Uploadconf:"Konfiguration hochladen",upload:"Hochladen",uploadsucc:"Upload erfolgreich, aktualisiere...",applyconf:"Konfiguration anwenden",pleasewait:"Bitte warten...!"};MODEL.devinfo={pduinfo:"PDU-Informationn",outlets:"Outlets",circbreak:"Sicherungsautomaten",sku:"SKU",serialnum:"Seriennummer",rating:"Wertung",functype:"Funktionstyp",ipv4addr:"Geräte IPv4 Adresse",ipv6addr:"Geräte IPv6 Adressen",macaddr:"Gerät-MAC-Adresse",fwversion:"Firmware-Version",webversion:"Web-Version",pdumib:"PDU-MIB",download:"Download",label:"Label",operatevol:"Betriebsspannung",ratecurrent:"Nennstrom",type:"Typ",protoutlet:"Geschützte Outlets"};MODEL.resetdev={doresetcard:"Wollen Sie die Netzwerkkarte wirklich zurücksetzen?"};MODEL.buttons={cancels:"Abbrechen",oks:"Ok",closes:"Schließen",yes:"Ja",no:"Nein",save:"Speichern",edit:"Bearbeiten",action:"Aktion",message:"Nachricht",info:"Information",runping:"Ping ausführen",run:"Ausführen"};MODEL.master.setalarmdl.alarm="Alarme";MODEL.master.setalarmdl.off="Ein";MODEL.master.setalarmdl.on="Aus";MODEL.master.setalarmdl.disable="Ausschalten";MODEL.master.setalarmdl.enable="Einschalten";MODEL.master.setalarmdl.normal="Normal";MODEL.role.deldone="Rolle wurde erfolgreich gelöscht";MODEL.loginset.min="Min";MODEL.loginset.hr="St";MODEL.loginset.infinite="unbegrenzt";MODEL.pwpolicy.d="T";MODEL.outletstools.powctrl="Stromkontroll";MODEL.outletstools.apply=" Anwenden ";MODEL.outletstools.excuting=" Ausführe... Klicken Sie hier um abzubrechen ";MODEL.datetime.succ="Erfolgreich";MODEL.datetime.fail="Nicht erfolgreich";a.VALID={ipv4:"Bitte geben Sie eine gültige ipv4-Adresse ein",ipv6:"Bitte geben Sie eine gültige ipv6-Adresse ein",nowhite:"Leerzeichen sind nicht erlaubt",greater:"Geben Sie bitte eine größere Nummer ein",customdate:"Geben Sie bitte ein gültiges Datum ein",lowchar:"Geben Sie bitte mindestens einen Kleinbuchstaben ein",uppchar:"Geben Sie bitte mindestens einen Großbuchstaben ein ",numchar:"Geben Sie bitte mindestens eine Nummer ein",spechar:"Geben Sie bitte mindestens ein Sonderzeichen ein",diffval:"Geben Sie bitte einen verschiedenen Wert ein"};a.FUNCTYPE={0:"Unbekannt",1:"PDU Messen",2:"PDU Messen, Outlet Schalten",3:"Outlet Messen",4:"Outlet Messen, Outlet Schalten"};a.CBTYPE={0:"Keine",1:"Sicherungsautomat 1-polig",2:"Sicherungsautomat 2-polig"};MODEL.login.authfail="Authentifizierung fehlgeschlagen";MODEL.dashboard.pduid="PDU-ID";MODEL.devinfo.bootver="Bootloader-Version";MODEL.devinfo.langver="OLED Sprachversion";MODEL.login.connfail="Verbindung abgelehnt";MODEL.outletstools.outinuse="Outlet im Einsatz"})(window);if($.fn.pagination){$.fn.pagination.defaults.beforePageText="Seite";$.fn.pagination.defaults.afterPageText="von {pages}";$.fn.pagination.defaults.displayMsg="{from} bis {to} von {total} Datensätzen"}if($.fn.datagrid){$.fn.datagrid.defaults.loadMsg="Verarbeitung läuft, bitte warten ..."}if($.fn.treegrid&&$.fn.datagrid){$.fn.treegrid.defaults.loadMsg=$.fn.datagrid.defaults.loadMsg}if($.messager){$.messager.defaults.ok="OK";$.messager.defaults.cancel="Abbruch"}if($.fn.validatebox){$.fn.validatebox.defaults.missingMessage="Dieses Feld ist obligatorisch.";$.fn.validatebox.defaults.rules.email.message="Bitte geben Sie eine gültige E-Mail-Adresse ein.";$.fn.validatebox.defaults.rules.url.message="Bitte geben Sie eine gültige URL ein.";$.fn.validatebox.defaults.rules.length.message="Bitte geben Sie einen Wert zwischen {0} und {1} ein."}if($.fn.numberbox){$.fn.numberbox.defaults.missingMessage="Dieses Feld ist obligatorisch."}if($.fn.combobox){$.fn.combobox.defaults.missingMessage="Dieses Feld ist obligatorisch."}if($.fn.combotree){$.fn.combotree.defaults.missingMessage="Dieses Feld ist obligatorisch."}if($.fn.combogrid){$.fn.combogrid.defaults.missingMessage="Dieses Feld ist obligatorisch."}if($.fn.calendar){$.fn.calendar.defaults.firstDay=1;$.fn.calendar.defaults.weeks=["S","M","T","W","T","F","S"];$.fn.calendar.defaults.months=["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]}if($.fn.datebox){$.fn.datebox.defaults.currentText="Heute";$.fn.datebox.defaults.closeText="Schließen";$.fn.datebox.defaults.okText="OK";$.fn.datebox.defaults.missingMessage="Dieses Feld ist obligatorisch.";$.fn.datebox.defaults.formatter=function(b){var e=b.getFullYear();var a=b.getMonth()+1;var c=b.getDate();return(c<10?("0"+c):c)+"."+(a<10?("0"+a):a)+"."+e};$.fn.datebox.defaults.parser=function(c){if(!c){return new Date()}var b=c.split(".");var a=parseInt(b[1],10);var e=parseInt(b[0],10);var f=parseInt(b[2],10);if(!isNaN(f)&&!isNaN(a)&&!isNaN(e)){return new Date(f,a-1,e)}else{return new Date()}}}if($.fn.datetimebox&&$.fn.datebox){$.extend($.fn.datetimebox.defaults,{currentText:$.fn.datebox.defaults.currentText,closeText:$.fn.datebox.defaults.closeText,okText:$.fn.datebox.defaults.okText,missingMessage:$.fn.datebox.defaults.missingMessage})}(function(a){a.extend(a.validator.messages,{required:"Dieses Feld ist ein Pflichtfeld.",maxlength:a.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),minlength:a.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."),rangelength:a.validator.format("Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."),email:"Geben Sie bitte eine gültige E-Mail Adresse ein.",url:"Geben Sie bitte eine gültige URL ein.",date:"Bitte geben Sie ein gültiges Datum ein.",number:"Geben Sie bitte eine Nummer ein.",digits:"Geben Sie bitte nur Ziffern ein.",equalTo:"Bitte denselben Wert wiederholen.",range:a.validator.format("Geben Sie bitte einen Wert zwischen {0} und {1} ein."),max:a.validator.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."),min:a.validator.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."),creditcard:"Geben Sie bitte eine gültige Kreditkarten-Nummer ein."})}(jQuery));