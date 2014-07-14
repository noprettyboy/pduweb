/*Model*/
(function(window) {

  window.ALARMTYPE = {
    0: "Unit",
    1: "Input Phases",
    2: "Circuit Breaker",
    3: "Outlets",
    4: "External Sensors"
  };

  window.SENSORTYPE = {
    1: "Temperature",
    2: "Humidity (%)",
    3: "Door Contact",
    4: "Dry Contact",
    5: "Spot Fluid",
    6: "Rope Fluid",
    7: "Smoke",
    8: "Beacon"
  };

  window.TEMPUNIT = {
    0: "C",
    1: "F"
  };

  window.FLUID = {
    0: "No-leak",
    1: "Leak"
  };

  window.AISLETYPE = {
    0: "Cold",
    1: "Hot"
  };

  window.POWERSTATUS = {
    0: "Off",
    1: "On",
    2: "Last Known"
  };

  /*
  pdu power control type
  */
  window.PDUCTRLTYPE = {
    0: "Off",
    1: "On",
    2: "Last Known"
  };

  window.POWERCTRLTYPE = {
    0: "Off",
    1: "On",
    2: "Off Delayed",
    3: "On Delayed",
    4: "Reboot Immediate",
    5: "Reboot Delayed"
    //, 6: "Cancel Pending Commands"
  };

  window.UPDATESTATUS = {
    0: "Update failed!",
    2: "You have been logged out due to inactivity.",
    3: "The selected role is currently assigned to users and cannot be deleted.",
    41: "Your old password is not correct!",
    42: "The port is occupied!",
    43: "Your login password is too simple to use as authentication pass phrase!",
    51: "The outlet(s) below cannot be turned on at this time due to an overload restriction.<br/>( Outlet ID: [ {0} ] )"
  };

  window.POWERENERGY = {
    "activepower" : "Active Power (W)",
    "apparentpower" : "Apparent Power (VA)",
    "totalenergymeter" : "Total Energy Meter (kWh)"
  };

  window.OUTLETS = {
    0x00000001: "Outlet 1",
    0x00000002: "Outlet 2",
    0x00000004: "Outlet 3",
    0x00000008: "Outlet 4",
    0x00000010: "Outlet 5",
    0x00000020: "Outlet 6",
    0x00000040: "Outlet 7",
    0x00000080: "Outlet 8",
    0x00000100: "Outlet 9",
    0x00000200: "Outlet 10",
    0x00000400: "Outlet 11",
    0x00000800: "Outlet 12",
    0x00001000: "Outlet 13",
    0x00002000: "Outlet 14",
    0x00004000: "Outlet 15",
    0x00008000: "Outlet 16",
    0x00010000: "Outlet 17",
    0x00020000: "Outlet 18",
    0x00040000: "Outlet 19",
    0x00080000: "Outlet 20",
    0x00100000: "Outlet 21",
    0x00200000: "Outlet 22",
    0x00400000: "Outlet 23",
    0x00800000: "Outlet 24",
    0x01000000: "Outlet 25",
    0x02000000: "Outlet 26",
    0x04000000: "Outlet 27",
    0x08000000: "Outlet 28",
    0x10000000: "Outlet 29",
    0x20000000: "Outlet 30",
    0x40000000: "Outlet 31",
    0x80000000: "Outlet 32"
  };

  /*
  privilege text
  */
  window.PRIVILEGES = {
    /*
    //"ADMIN_PRIV":     "Administrator Privileges",
    0x00000002: "Change Data Logging Settings",
    0x00000004: "Change Date/Time Settings",
    0x00000008: "Change Event Settings",
    0x00000010: "Change External Sensors Configuration",
    0x00000020: "Change Local User Management",
    0x00000040: "Change Network Configuration",
    0x00000080: "Change Own Password",
    0x00000100: "Change PDU Settings",
    0x00000200: "Change SNMP Settings",
    0x00000400: "Change Security Settings",
    0x00000800: "Change USB Settings",
    0x00001000: "Firmware Update",
    0x00002000: "Network Card Reset",
    0x00004000: "Switch Outlet",
    0x00008000: "Operate Configuration File",
    0x00010000: "Change Input Phase Setting",
    0x00020000: "Change Circuit Breaker Setting",
    0x00040000: "Change Network Service",
    0x00080000: "Change SMTP Setting",
    0x00100000: "Change Server Reachability",
    0x00200000: "Disconnect Other User",
    0x00400000: "Run Diagnostics",
    0x00800000: "Clear Data/Event Log",
    0x01000000: "Change LDAP Setting",
    0x02000000: "Change Outlet Setting"
    */
    0x00000100: "Change PDU Settings",
    0x00010000: "Change Input Phase Setting",
    0x00020000: "Change Circuit Breaker Setting",
    0x00000010: "Change External Sensors Configuration",
    0x00004000: "Switch Outlet",
    0x02000000: "Change Outlet Setting",
    0x00000080: "Change Own Password",
    0x00000020: "Change Local User Management",
    0x00040000: "Change Network Service",
    0x00000200: "Change SNMP Settings",
    0x00000040: "Change Network Configuration",
    0x00000400: "Change Security Settings",
    0x00000008: "Change Event Settings",
    0x00000002: "Change Data Logging Settings",
    0x00000004: "Change Date/Time Settings",
    0x00080000: "Change SMTP Setting",
    0x00100000: "Change Server Reachability",
    0x00000800: "Change USB Settings",
    0x01000000: "Change LDAP Setting",
    0x00800000: "Clear Data/Event Log",
    0x00001000: "Firmware Update",
    0x00200000: "Disconnect Other User",
    0x00400000: "Run Diagnostics",
    0x00008000: "Operate Configuration File",
    0x00002000: "Network Card Reset"
  };

  /*
  The value will be different due to different device.
  */
  window.CURRENTMAX = 32;

  window.ALARMUNITTYPE = {
    A: {
      unit: " (A)",
      factor: 1000,
      fixed: 2,
      max: 16,
      min: 0,
      title: "Current"
    },
    V: {
      unit: " (V)",
      factor: 1000,
      fixed: 0,
      max: 260,
      min: 90,
      title: "Voltage"
    },
    VA: {
      unit: " (VA)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Apparent Power"
    },
    W: {
      unit: " (W)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "Active Power"
    },
    Wh: {
      unit: " (Wh)",
      factor: 1000,
      fixed: 2,
      min: 0,
      max: 1000000000,
      title: "Energy"
    },
    C: {
      unit : " (°C)",
      factor: 1,
      fixed: 0,
      min: 0,
      max: 75,
      title: "Temperature"
    },
    F: {
      unit : " (F)",
      factor: 1,
      fixed: 0,
      min: 32,
      max: 167,
      title: "Temperature"
    },
    H: {
      unit : " (%)",
      factor : 1,
      fixed: 0,
      min: 15,
      max: 90,
      title: "Humidity"
    }
  };


  /*
  AJAX status collection
  */
  window.AJAXSTATUS = {
    0: "Server is not responding!"
    , 401: "You have been logged out due to inactivity."
    , 420: "Your session has been administratively terminated."
    , 425: "User is not active or user has already logged in."
    , 426: "Logged user number is up to maximize number(10)."
    , 427: "Too many unsuccessful login attempts: Account locked temporarily."
    , 430: "You do not have the privilege to do this action!"
    , 501: "Internal server error!"
    //, 404: "Page not found!"
  };

  /*
  PING Status
  */
  window.PINGSTATUS = {
    0: "Reachable",
    1: "Unreachable",
    2: "Waiting for Reliable Response",
    3: "Error"
  };

  window.CLIENTTYPE = {
    //0: "TELNET",
    1: "Web GUI",
    2: "TELNET",
    3: "FTP",
    4: "SSH"
  };

  window.EVENTNAME = {
    "CALA" : "Critical alarm",
    "WALA" : "Warning alarm",
    "CBSC" : "Circuit Breaker status changed",
    "OLSC" : "Outlet power control status changed",
    "ESSC" : "External sensor status changed",
    "PDUC" : "PDU configuration file imported/exported",
    "FMUP" : "Firmware update",
    "NCRS" : "Network card reset/start",
    "CSSC" : "Communication status changed",
    "DCSC" : "Daisy Chain status changed",
    "EBLM" : "Enter Bootloader Mode",
    "SPSC" : "Server ping status changed",
    "USRA" : "User activity",
    "PSWC" : "Password/settings changed",
    "ROSC" : "Role status changed",
    "USSC" : "User status changed",
    "LDAP" : "LDAP Error"
  };

  /*
  Lower 16 bits are used for parameter (e.g. users);
  */
  window.EVENTTYPE = {
    //0x00000001 : "Log Event Message",
    0x00010000 : "Send SMTP Message"
    , 0x00020000 : "Send SNMP Trap"
    , 0x00040000 : "Beacon Flash"
  };

  window.EVENTRULE = {
    "Alarm" : {
      "CALA": 458752,
      "WALA": 458752
    },
    "CBSC": 458752,
    "OLSC": 196608,
    "ESSC": 458752,
    "PDUC": 196608,
    "FMUP": 196608,
    "NCRS": 196608,
    "CSSC": 458752,
    "DCSC": 196608,
    "EBLM": 196608,
    "SPSC": 196608,
    "USRA": 196608,
    "User administration": {
      "PSWC": 196608,
      "ROSC": 196608,
      "USSC": 196608 
    },
    "LDAP": 196608
  };

  /*Root of the tree*/
  EL.TreeRoot = {
    "id": "dashboard",
    "text": "Dashboard",
    "iconCls": "icon-desk"
  };

  /*Template of the PDU*/
  EL.TreeMap = {
    ips:{
      id: "ips",
      url: "xhrips.jsp",
      text: "Input Phases",
      icon: "icon-ip"
    },
    cbs:{
      id: "cbs",
      url: "xhrcbs.jsp",
      text: "Circuit Breakers",
      icon: "icon-cb"
    },
    ess:{
      id: "extsens",
      url: "xhrextsens.jsp",
      text: "External Sensors",
      icon: "icon-temp"
    },
    outs:{
      id: "outlets",
      url: "xhroutlets.jsp",
      text: "Outlet Power Management"
      //,icon: "icon-ol"
    }
  };


  // 
  /*--------Models---------*/ 

  /*--main pages--*/ 
  /*login page*/ 
  MODEL.login = {
    title:    "Login",
    username: "Username",
    password: "Password",
    login:    "Login",
    clear:    "Clear"
  };

  /*master page*/
  MODEL.master = {
    useradmin: {
      txt: "User Administration",
      changepw: {
        txt: "Change Password",
        dlg: "Change User Password"
      },
      users: {
        txt: "Users",
        dlg: "Manage Users"
      },    
      roles: {
        txt: "Roles",
        dlg: "Manage Roles"
      }
    },
    deviceadmin: {
      txt: "Device Configuration",
      networkser: {
        txt: "Network Services",
        http: {
          txt: "HTTP",
          dlg: "HTTP Settings"
        },
        snmp: {
          txt: "SNMP",
          dlg: "SNMP Settings"
        },
        ssh: {
          txt: "SSH",
          dlg: "SSH Settings"
        },
        telnet: {
          txt: "TELNET",
          dlg: "TELNET Settings"
        },
        ftp: {
          txt: "FTP",
          dlg: "FTP Settings"
        }
      },
      networkcon: {
        txt: "Network Configuration",
        dlg: "Network Configuration"
      },
      security: {
        txt: "Security",
        loginset: {
          txt: "Login Settings",
          dlg: "Login Settings"
        },
        passwordpol: {
          txt: "Password Policy",
          dlg: "Password Policy"
        },
        forcehttps: {
          txt: "Force HTTPS for Web Access",
          dlg: "Force Https"
        }
      },
      eventrules: {
        txt: "Event Rules",
        dlg: "Event Rule Setting"
      },
      datalog: {
        txt: "Data Log",
        dlg: "Data Logging Settings"
      },
      datetime: {
        txt: "Date/Time",
        dlg: "Configure Date/Time Settings"
      },
      smtpemail: {
        txt: "SMTP Email",
        dlg: "SMTP Server Settings"
      },
      serverreach: {
        txt: "Server Reachability",
        dlg: "Server Reachability"
      },
      usb: {
        txt: "USB",
        dlg: "USB Settings"
      },
      ldap: {
        txt: "LDAP",
        dlg: "LDAP Settings"
      }
    },
    systemadmin: {
      txt: "System Administration",
      vweventlog: {
        txt: "View Event Log",
        dlg: "View Event Log"
      },
      vwdatalog: {
        txt: "View Data Log",
        dlg: "View Data Log"
      },
      firmwaremt: {
        txt: "Firmware Maintenance",
        udfirmware: {
          txt: "Update Firmware",
          dlg: "Firmware update"
        },
        vwfirmwareud: {
          txt: "View Firmware Update History",
          dlg: "Firmware Update History"
        }
      },
      conusers: {
        txt: "Connected Users",
        dlg: "Connected Users"
      },
      diagnostic: {
        txt: "Diagnostics",
        dldiaginfo: {
          txt: "Download Diagnostic information",
          dlg: "Download Diagnostic Information"
        }
      },
      pduconfig: {
        txt: "PDU Configuration file",
        dlg: "Configuration File"
      },
      deviceinfo: {
        txt: "Device Information",
        dlg: "Device Information"
      },
      nwcardreset: {
        txt: "Network Card Reset",
        dlg: "Network Card Reset"
      }
    },
    help: {
      txt: "Help",
      userguide: {
        txt: "User Guide",
        dlg: "User Guide"
      }
    },
    setalarmdl: {
      lowercritical: "Lower Critical",
      lowerwarning: "Lower Warning",
      upperwarning: "Upper Warning",
      uppercritical: "Upper Critical",
      resetthreshold: "Reset Threshold",
      alarmscdelay: "Alarm State Change Delay (samples):",
      alarmsetting: "Alarm Setting",
      enablealarm: "Enable Alarm Setting",
      updatefail: "Update failed",
      lowcriticalinfo: "Low critical + threshold should be less than or equal to low warning!",
      lowwarninfo: "Low warning + 2 times reset threshold should be less than or equal to up warning!",
      upwarninfo: "Up warning + threshold should be less than or equal to up critical!",
      lowcriticalinfo2: "Low critical + 2 times reset threshold should be less than or equal to up warning!",
      lowcriticalinfo3: "Low critical + 2 times reset threshold should be less than or equal to up critical!",
      lowwarninfo2: "Low Warning + 2 times threshold should be less than or equal to up critical!"
    },
    resetdevicedl: {
      txt: "Network Card Reset",
      txt1: "The Network Card will be reset in a few seconds.",
      txt2: "You will be redirected to the login page within",
      txt3: "seconds.",
      txt4: "If redirection does not work, use",
      txt5: "this link",
      txt6: "to the login page."
    },
    language: {
      txt: "Language",
      type: {
        en: "English",
        cn: "Chinese"
      }
    },
    logout: "logout",
    doreallylogout: "Do you really want to logout?",
    tree: "PDU Explorer",
    login: "Logged in as {0}",
    greeting: "Welcome to Enlogic",
    ip:   "<b>IP Adress: </b>{0}",
    time: "<b>Login Time: </b>{0}"
  };

  /*--left pages--*/ 
  /*Dashboard page*/
  MODEL.dashboard = {
    loading: "Loading",
    status: "Status",
    alarms: "Alarms",
    ok: "OK",
    currentrms: "Current, RMS (A)",
    voltagerms: "Voltage, RMS (V)",
    pdupowerenergy: "PDU power energy",
    externalsensor: "External Sensors, Type",
    sensorname: "Sensor Name",
    pduname: "PDU Name",
    location: "Location",
    value: "Value",
    activealarmpdu: "Active Alarms for PDU #",
    close: "Close",
    alarmtype: "Alarm Type",
    count: "Count"
  };

  /*PDU #*/
  MODEL.pdu = {
    pduset: "PDU Setting",
    pduenergy: "PDU Energy",
    pduattribute: "PDU Attribute",
    pduname: "PDU Name",
    pdulocation: "PDU Location",
    pduunitdelay: "PDU Unit Coldstart Delay (0 - 3600 s)",
    outletstate: "Outlet State On PDU Startup",
    resetenergy: "Reset Energy",
    resetolenergy: "Reset Outlet Energy",
    pdumacaddress: "PDU MAC Address",
    rating: "Rating",
    resetenergymeter: "Resettable Energy Meter",
    activepowervalue: "Active Power Value (W)",
    activepowerset: "Active Power Status, Setting",
    reset: "Reset",
    resetsuccess: "Reset Success!",
    surechangeol: "Are you sure you want to make this change for all outlets?",
    reallyresetenergy: "Do you really want to reset the energy?",
    nopermission: "No Permission:"
  };

  /*Input Phases*/
  MODEL.phases = {
    phasecurrentrms: "Phase Current, RMS",
    reading: "Reading ",
    lowercritical: "Lower Critical ",
    lowerwarning: "Lower Warning ",
    upperwarning: "Upper Warning ",
    uppercritical: "Upper Critical ",
    statusset: "Status, Setting",
    phasevoltagerms: "Phase Voltage, RMS",
    phasepower: "Phase Power",
    apparentpower: "Apparent Power (VA)",
    powerfactor: "Power Factor",
    activepower: "Active Power (W)"
  };

  /*Circuit Breaker*/
  MODEL.breakers = {
    circuitid: "Circuit ID",
    statusset: "Status, Setting",
    currentrms: "Current, RMS (A)",
    rating: "Rating (A)",
    remaincapacity: "Remaining Capacity (A)",
    inputphases: "Input Phases",
    connoutlet: "Connected Outlets"
  };

  /*Sensor page*/
  MODEL.sensor = {
    id: "ID",
    typeset: "Type",
    statusset: "Status, Setting",
    value: "Value",
    serialno: "Serial NO.",
    aisle: "Aisle",
    name: "Name",
    description: "Description",
    location: "Location"
  };

  /*Outlet Power Management*/
  MODEL.outletstools = {
    powercontrol: "Power Control",
    execute: "Execute",
    outletid: "Outlet ID",
    outletname: "Outlet Name",
    alarmstatus: "Alarm Status",
    activepower: "Active Power (W)",
    powerstatus: "Power Status",
    noselect: "You didn't select anything!",
    doexecute: "Do you really want to execute this command?",
    // 
    outletset: "Outlet Setting",
    outletattr: "Outlet Attribute",
    stateonstart: "State On Startup",
    ondelay: "On Delay (0 ~ 7200s)",
    offdelay: "Off Delay (0 ~ 7200s)",
    rebootduration: "Reboot Duration (5 ~ 60s)",
    current: "Current (A)",
    voltage: "Voltage (V)",
    activepower: "Active Power (W)",
    peakpower: "Peak Power (W)",
    powerfactor: "Power Factor",
    energymeter: "Resettable Energy Meter"
  }

  // 
  /**--Menu Dialog Pages--*/
  MODEL.changepw = {
    oldpass: "Old Password",
    newpass: "New Password",
    cfmpass: "Confirm Password",
    chgpwfail: "Change Password Failed."
  };

  MODEL.users = {
    noselect: "Please select a row!",
    usernotbedel: "This user cannot be deleted!",
    notdelyourself: "You cannot delete yourself!",
    notdelthisuser: "You cannot delete this user!",
    reallydeluser: "Do you really want to delete the user: {0} ?",
    nopermission: "You do not have permission to modify this user!",
    enteruserexist: "Entered username is already existed!",
    noselectrole: "Please select a role!",
    setting: "Settings",
    snmpv3: "SNMPv3",
    // roles: "Roles",
    preferences: "Preferences",
    // 
    createnewuser: "Create New User",
    edituser: "Edit User:",
    active: "Active",
    roles: "Roles",
    username: "User Name",
    fullname:"Full Name",
    password: "Password",
    cfpassword: "Confirm Password",
    telnumber: "Telephone Number",
    emailaddress: "eMail Address",
    enabled: "Enabled",
    forcepwchntlg: "Force password change on next login",
    // 
    enablesnmpacc: "Enable SNMPv3 Access",
    securitylevel: "Security Level",
    usepwasauthpass: "Use Password as Authentication Pass Phrase",
    authpass: "Authentication Pass Phrase",
    cfauthpass: "Confirm Authentication Pass Phrase",
    useauthaspri: "Use Authentication Pass Phrase as Privacy Pass Phrase",
    pripass: "Privacy Pass Phrase",
    cfpripass: "Confirm Privacy Pass Phrase",
    authalgorithm: "Authentication Algorithm",
    prialgorithm: "Privacy Algorithm",
    // 
    temperatureunit: "Temperature Unit",
    // 
    news: "New",
    edits: "Edit",
    deletes: "Delete"
  };

  MODEL.role = {
    noselect: "Please select a row!",
    rolenotbedel: "This role can not be deleted!",
    reallydelrole: "Do you really want to delete the role: {0} ?",
    settings: "Settings",
    privileges: "Privileges",
    rolename: "Role Name",
    description: "Description",
    roleinfo: "Role Information",
    // 
    privilegesedit: "Privileges Editing",
    selectillustrate: "Select privileges to add to role.<br/>Be aware some privileges may require additional parameters.",
    parameters: "Parameters",
    // 
    clickcancel: "Click Cancel to Close",
    clicksavecancel: "Click here to Save and Close",
    news: "New",
    edits: "Edit",
    deletes: "Delete",
    saves: "Save"
  };

  MODEL.netsvr = {
    change : " After changing the setting, you will need to reset the Network Card to take effect. Do you really want to apply changes now?"
  };

  MODEL.http = {
    httpport: "HTTP Port",
    httpsport: "HTTPS Port"
  };

  MODEL.snmp = {
    general: "General",
    traps: "Traps",
    snmpv12set: "SNMP v1 / v2c Settings",
    snmpv12: "SNMP v1 / v2c",
    enable: "Enable",
    readcs: "Read Community String",
    writecs: "Write Community String",
    snmpv3set: "SNMP v3 Settings",
    snmpv3: "SNMP v3",
    mibiigroup: "MIB-II System Group",
    syscontact: "sysContact",
    sysname: "sysName",
    syslocation: "sysLocation",
    snmptrapset: "SNMP Trap Settings",
    snmptraprule: "System Snmp Trap Event Rule",
    host: "Host",
    port: "Port",
    community: "Community",
    helpinfo: "Please use the Device Configuration > Event Rules Dialog for a more detailed trap setup.",
    downloadmib: "Download MIB"
  }

  MODEL.ssh = {
    sshport: "SSH Port",
    enablessh: "Enable SSH Access"
  }

  MODEL.telnet = {
    telnetport: "Telnet Port",
    enabletelnet: "Enable Telnet Access"
  }

  MODEL.ftp = {
    ftpport: "FTP Port",
    enableftp: "Enable FTP Access"
  }

  MODEL.network = {
    ipprotocol: "IP Protocol",
    ipv4set: "IPv4 Settings",
    ipv4only: "IPv4 Only",
    ipv6only: "IPv6 Only",
    ipv46: "IPv4 & IPv6",
    dnsresolve: "DNS Resolver",
    preference: "Preference",
    ipv4address: "IPv4 Address",
    ipv6address: "IPv6 Address",
    ipautoconfig: "IP Auto Configuration",
    ipaddress: "IP Address",
    netmask: "Net Mask",
    gateway: "Gateway",
    specficdns: "Specific DNS server manually",
    primarydns: "Primary DNS Server",
    secondarydns: "Secondary DNS Server",
    dnssuffix: "DNS Suffix(Optional)"
  }

  MODEL.loginset = {
    userblock: "User Blocking",
    blockuserfail: "Block user on login failure",
    maxnumfailln: "Maximum number of failed logins",
    blocktimeout: "Block timeout",
    loginlimit: "Login Limitations",
    idletimeout: "Idle Timeout Period"
  };

  MODEL.pwpolicy = {
    pwaging: "Password Aging",
    pwaginginterval: "Password Aging Interval",
    strongpw: "Strong Passwords",
    minpwlength: "Minimum Password Length",
    maxpwlength: "Maximum Password Length",
    enforcelower: "Enforce at least one lower case character",
    enforceupper: "Enforce at least one upper case character",
    enforcenumeric: "Enforce at least one numeric case character",
    enforcespecial: "Enforce at least one special character"
  };

  MODEL.forcehttpinfo = {
    confirminfo: "After changing the setting, you will need to reset the Network Card to take effect.<br/> Do you really want to apply changes now?"
  }

  MODEL.evtrule = {
    eventset: "Event Action Setting",
    selectrule: "Selected Rules",
    smtpreceive: "SMTP Receivers",
    eventname: "Event Name",
    action: "Actions"
  };

  MODEL.datalog = {
    loginterval: "Log Interval (1 - 1440 minutes)",
    enablelog: "Enable Data Logging",
    illustrateinfo: "The data log can store up to 2000 records. The maximum time range of stored data is based upon the log interval setting.  For example, for log interval = 600 seconds (10 minutes), the data log will contain up to 13.89 days of data.  Once the data log reaches the maximum size, the oldest entries will be overwritten by the newer entries."
  };

  MODEL.datetime = {
    timezone: "Time Zone",
    usertime: "User Specified Time",
    date: "Date (YYYY-MM-DD)",
    time: "Time (hh:mm:ss)",
    synntpserver: "Synchronize with NTP Server",
    firstip: "First Time Server IP Address",
    secondip: "Second Time Server IP Address",
    checkntp: "Check NTP Servers",
    checkntpinfo: "Please input the right NTP Server!"
  };

  MODEL.smtp = {
    serverset: "Server Settings",
    servername: "Server Name",
    port: "Port",
    sendemail: "Sender Email Address",
    numsend: "Number of Sending Retries",
    intervalsend: "Time Interval Between Sending Retries (in minutes)",
    serverreq: "Server Requires Authentication",
    username: "Username",
    password: "Password",
    smtpset: "Test SMTP Settings",
    recemail: "Recipient Email Addresses",
    testemail: "Send Test Email",
    testsmtp: "Testing SMTP configuration",
    testemailinfo: "Sending test email, please wait ...",
    errorinfo: "Error: SMTP settings  confuguration ! & uptstatus is : ",
    probleminfo: "There was a problem sending the test email.<br/>",
    checkinfo: "Please check your SMTP server configuration<br/>",
    succinfo: "The message was successfully sent. Please check your mailbox.",
    errorname: "<br/>The error message is:<br/>Name or service not known",
    errorconn: "<br/>The error message is:<br/>Connection refused",
    errordns: "<br/>The error message is:<br/>The DNS server could not be resolved!",
    errorsmtp: "Error Occured for onreadystatechange at SMTP serever configuration  Settings:"
  };

  MODEL.serreach = {
    iphostnm: "IP Address/Hostname",
    pingenable: "Ping Enabled",
    status: "Status",
    news: "New",
    edit: "Edit",
    deletes: "Delete",
    refresh: "Refresh",
    addnew: "Add New Server Property",
    reachemax: "Reached maximum server enteries. <br/> User cannot create new Server",
    enableping: "Enable Ping Monitoring for this Server",
    numSuccping: "Number of Successful Pings to Enable Feature",
    numunsuccping: "Number of Consecutive Unsuccessful Pings For Failure",
    waittime: "Wait Time (in seconds) before Resuming Pinging",
    editserver: "Edit Server Property",
    noselect: "Pelease select a row!",
    deleteser: "Do you really want to delete the server '{0}'?"
  };

  MODEL.usb = {
    usb: "USB",
    enableusb: "Enable USB Access"
  };

  MODEL.ldap = {
    ldapset: "LDAP Settings",
    ldapenable: "LDAP Enable",
    typeserver: "Type of LDAP Server",
    iphostnm: "IP Address / Hostname",
    port: "Port",
    sasl: "SASL",
    authnm: "Authentication Name",
    authdomain: "Authentication Domain",
    usebind: "Use Bind Credentials",
    binddn: "Bind DN",
    bindpw: "Bind Password",
    Confirmpw: "Confirm Password",
    dnsearch: "Base DN for Search",
    lgnmattr: "Login Name Attribute",
    userentry: "User Entry Object Class",
    testldapset: "Testing LDAP Settings",
    usernm: "Username",
    password: "Password",
    testconn: "Test Connection",
    conntest: "Connection test",
    conftest: "Configuration test",
    authtest: "Authentication test",
    userrole: "User has roles assigned",
    userknownrole: "User has known roles assigned"
  };

  MODEL.eventlog = {
    reflog: "Refresh Log",
    clearlog: "Clear Log",
    savelog: "Save Log",
    launch: "Launch in New Window",
    clearloginfo: "Do you really want to clear the log?"
  };

  MODEL.vwdtlog = {
    reflog: "Refresh Log",
    clearlog: "Clear Log",
    savelog: "Save Log",
    launch: "Launch in New Window"
  };

  MODEL.updtfw = {
    upload: "Upload",
    selectfile: "Select files",
    deletes: "Delete",
    pending: "Pending...",
    fileformat: "The selected file format is incorrect, please re-select!"
  };

  MODEL.frupdth = {
    timestamp: "Timestamp",
    preversion: "Previous Version",
    updversion: "Update Version",
    status: "Status"
  };

  MODEL.conuser = {
    usernm: "User Name",
    ipaddr: "IP Address",
    clienttype: "Client Type",
    idletime: "Idle Time",
    action: "Action",
    disconn: "Disconnect",
    disconnuser: "Disconnect User",
    dodisconnuser: "Do you really want to disconnect user '{0}'?",
    dodisconnself: "You are attempting to terminate your connection to '{0} ({1})' <br/> Do you really want to disconnect yourself?"
  };

  MODEL.diagnostic = {
    diagconf: "Diagnostic Configuration",
    dldiaginfo: "Download Diagnostic Information"
  };

  MODEL.blkconf = {
    dlconf: "Download Configuration",
    dlconffile: "Download Configuration File",
    Uploadconf: "Upload Configuration",
    upload: "Upload",
    uploadsucc: "Upload successful, updating...",
    applyconf: "Apply Configuration",
    pleasewait: "Please wait...!"
  };

  MODEL.devinfo = {
    pduinfo: "PDU Information",
    outlets: "Outlets",
    circbreak: "Circuit Breakers",
    sku: "SKU",
    serialnum: "Serial Number",
    rating: "Rating",
    functype: "Function Type",
    ipv4addr: "Device IPv4 Address",
    ipv6addr: "Device IPv6 Addresses",
    macaddr: "Device MAC Address",
    fwversion: "Firmware Version",
    webversion: "Web Version",
    pdumib: "PDU-MIB",
    download: "Download",
    label: "Label",
    operatevol: "Operating Voltage",
    ratecurrent: "Rated Current",
    type: "Type",
    protoutlet: "Protected Outlets"
  };

  MODEL.resetdev = {
    doresetcard: "Do you really want to reset the Network Card?"
  };

  // 
  /*--Buttons--*/ 
  MODEL.buttons = {
    cancels: "Cancel",
    oks: "OK",
    closes: "Close",
    yes: "Yes",
    no: "No",
    save: "Save",
    edit: "Edit",
    action: "Action",
    message: "Message",
    info: "Information",
    runping: "Run Ping",
    run: "Run"
  };

  MODEL.master.setalarmdl.alarm = "Alarm";
  MODEL.master.setalarmdl.off = "Off";
  MODEL.master.setalarmdl.on = "On";
  MODEL.master.setalarmdl.disable = "Disable";
  MODEL.master.setalarmdl.enable = "Enable";
  MODEL.master.setalarmdl.normal = "Normal";
  MODEL.role.deldone = "Role deleted successfully";
  MODEL.loginset.min = "min";
  MODEL.loginset.hr = "hr";
  MODEL.loginset.infinite = "Infinite";
  MODEL.pwpolicy.d = "d";
  MODEL.outletstools.powctrl = "Power Control";
  MODEL.outletstools.apply = " Apply ";
  MODEL.outletstools.excuting = " Executing, Click to Cancel ";
  MODEL.datetime.succ = "SUCCEEDED";
  MODEL.datetime.fail = "FAILED";

  window.VALID = {
      ipv4: "Please enter a valid ipv4 address"
    , ipv6: "Please enter a valid ipv6 address"
    , nowhite: "White spaces are not allowed"
    , greater: "Please enter a larger number"
    , customdate: "Please enter valid date"
    , lowchar: "Please enter at least one lower case character."
    , uppchar: "Please enter at least one upper case character."
    , numchar: "Please enter at least one numeric case character."
    , spechar: "Please enter at least one special character."
    , diffval: "Please enter a different value."
  };

  window.FUNCTYPE = {
      0: "Unknow"
    , 1: "PDU Metered"
    , 2: "PDU Metered, Outlet Switched"
    , 3: "Outlet Metered"
    , 4: "Outlet Metered, Outlet Switched"
  };

  window.CBTYPE = {
      0: "None"
    , 1: "1-Pole Circuit Breaker"
    , 2: "2-Pole Circuit Breaker"
  };

  MODEL.login.authfail = "Authentication failed";
  MODEL.dashboard.pduid = "PDU ID";
  MODEL.devinfo.bootver = "Bootloader Version";
  MODEL.devinfo.langver = "OLED Language Version";
  MODEL.login.connfail = "Connection refused";
  MODEL.outletstools.outinuse = "Outlet In Use";

})(window);
