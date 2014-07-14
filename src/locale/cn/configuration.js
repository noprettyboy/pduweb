/*Model*/
(function(window) {
  
  window.ALARMTYPE = {
    0: "PDU",
    1: "输入相位",
    2: "断路器",
    3: "输出端口",
    4: "外置传感器"
  };

  window.SENSORTYPE = {
    1: "温度",
    2: "湿度 (%)",
    3: "门开关",
    4: "干触点",
    5: "点式漏水传感器",
    6: "绳式漏水传感器",
    7: "烟雾传感器",
    8: "警报灯"
  };

  window.TEMPUNIT = {
    0: "摄氏度",
    1: "华氏度"
  };

  window.FLUID = {
    0: "无漏水",
    1: "漏水"
  };

  window.AISLETYPE = {
    0: "冷",
    1: "热"
  };

  window.POWERSTATUS = {
    0: "关",
    1: "开",
    2: "同前"
  };

  /*
  pdu power control type
  */
  window.PDUCTRLTYPE = {
    0: "0",
    1: "1",
    2: "2"
  };

  window.POWERCTRLTYPE = {
    0: "关",
    1: "开",
    2: "延时关",
    3: "延时开",
    4: "立即重启",
    5: "延时重启"
    //, 6: "Cancel Pending Commands"
  };

  window.UPDATESTATUS = {
    0: "更新失败!",
    2: "由于长时间处于未活动状态您已经被注销.",
    3: "选择的用户组已分配给用户，不能被删除。",
    41: "您的旧密码输入不正确!",
    42: "端口被占用!",
    43: "您的登录密码过于简单不能被用作身份验证依据!",
    51: "由于过载限制,下面的输出端口不能被打开.<br/>( 输出端口ID: [ {0} ] )"
  };

  window.POWERENERGY = {
    "activepower" : "有效功率 (W)",
    "apparentpower" : "视在功率 (VA)",
    "totalenergymeter" : "总电能 (kWh)"
  };

  window.OUTLETS = {
    0x00000001: "输出端口 1",
    0x00000002: "输出端口 2",
    0x00000004: "输出端口 3",
    0x00000008: "输出端口 4",
    0x00000010: "输出端口 5",
    0x00000020: "输出端口 6",
    0x00000040: "输出端口 7",
    0x00000080: "输出端口 8",
    0x00000100: "输出端口 9",
    0x00000200: "输出端口 10",
    0x00000400: "输出端口 11",
    0x00000800: "输出端口 12",
    0x00001000: "输出端口 13",
    0x00002000: "输出端口 14",
    0x00004000: "输出端口 15",
    0x00008000: "输出端口 16",
    0x00010000: "输出端口 17",
    0x00020000: "输出端口 18",
    0x00040000: "输出端口 19",
    0x00080000: "输出端口 20",
    0x00100000: "输出端口 21",
    0x00200000: "输出端口 22",
    0x00400000: "输出端口 23",
    0x00800000: "输出端口 24",
    0x01000000: "输出端口 25",
    0x02000000: "输出端口 26",
    0x04000000: "输出端口 27",
    0x08000000: "输出端口 28",
    0x10000000: "输出端口 29",
    0x20000000: "输出端口 30",
    0x40000000: "输出端口 31",
    0x80000000: "输出端口 32"
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
    0x00100000: "Change Server Reachbility",
    0x00200000: "Disconnect Other User",
    0x00400000: "Run Diagnostics",
    0x00800000: "Clear Data/Event Log",
    0x01000000: "Change LDAP Setting",
    0x02000000: "Change Outlet Setting"
    */
    0x00000100: "更改PDU设置",
    0x00010000: "更改输入相位设置",
    0x00020000: "更改断路器设置",
    0x00000010: "更改外置传感器配置",
    0x00004000: "开关输出端口",
    0x02000000: "更改输出端口设置",
    0x00000080: "更改自身密码",
    0x00000020: "更改本地用户管理",
    0x00040000: "更改网络服务",
    0x00000200: "更改SNMP设置",
    0x00000040: "更改网络配置",
    0x00000400: "更改安全设置",
    0x00000008: "更改事件设置",
    0x00000002: "更改数据日志记录设置",
    0x00000004: "更改日期/时间设置",
    0x00080000: "更改邮件设置",
    0x00100000: "更改服务器的可访问性",
    0x00000800: "更改USB设置",
    0x01000000: "更改LDAP设置",
    0x00800000: "清除数据/事件日志",
    0x00001000: "固件更新",
    0x00200000: "断开其他用户",
    0x00400000: "运行诊断",
    0x00008000: "操作配置文件",
    0x00002000: "网络管理卡复位"
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
      title: "电流"
    },
    V: {
      unit: " (V)",
      factor: 1000,
      fixed: 0,
      max: 260,
      min: 90,
      title: "电压"
    },
    VA: {
      unit: " (VA)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "视在功率"
    },
    W: {
      unit: " (W)",
      factor: 1000,
      fixed: 0,
      min: 0,
      max: 49140,
      title: "有效功率"
    },
    Wh: {
      unit: " (Wh)",
      factor: 1000,
      fixed: 2,
      min: 0,
      max: 1000000000,
      title: "能量"
    },
    C: {
      unit : " (°C)",
      factor: 1,
      fixed: 0,
      min: 0,
      max: 75,
      title: "温度"
    },
    F: {
      unit : " (F)",
      factor: 1,
      fixed: 0,
      min: 32,
      max: 167,
      title: "温度"
    },
    H: {
      unit : " (%)",
      factor : 1,
      fixed: 0,
      min: 15,
      max: 90,
      title: "湿度"
    }
  };


  /*
  AJAX status collection
  */
  window.AJAXSTATUS = {
    0: "服务器没有响应!"
    , 401: "由于长时间处于未活动状态您已经被注销。"
    , 420: "您的会话已被终止."
    , 425: "用户未处于活动状态或用户已经登陆。"
    , 426: "登录用户数已达到最大限度(10)."
    , 427: "登录失败次数太多：帐户暂时被锁定."
    , 430: "您没有权限做此操作!"
    , 501: "内部服务器错误!"
    //, 404: "Page not found!"
  };

  /*
  PING Status
  */
  window.PINGSTATUS = {
    0: "可访问",
    1: "不可访问",
    2: "等待可靠的响应",
    3: "错误"
  };

  window.CLIENTTYPE = {
    //0: "TELNET",
    1: "Web GUI",
    2: "TELNET",
    3: "FTP",
    4: "SSH"
  };

  window.EVENTNAME = {
    "CALA" : "紧急告警",
    "WALA" : "警告告警",
    "CBSC" : "断路器状态改变",
    "OLSC" : "输出端口电源控制状态改变",
    "ESSC" : "外置传感器的状态改变",
    "PDUC" : "PDU配置文件输入/输出",
    "FMUP" : "固件更新",
    "NCRS" : "网络管理卡重置/启动",
    "CSSC" : "通讯状态改变",
    "DCSC" : "级联状态改变",
    "EBLM" : "进入Bootloader模式",
    "SPSC" : "服务器ping状态改变",
    "USRA" : "用户活动",
    "PSWC" : "密码/设置改变",
    "ROSC" : "用户组状态改变",
    "USSC" : "用户状态改变",
    "LDAP" : "LDAP 错误"
  };

  /*
  Lower 16 bits are used for parameter (e.g. users);
  */
  window.EVENTTYPE = {
    //0x00000001 : "Log Event Message",
    0x00010000 : "发送邮件信息"
    , 0x00020000 : "发送 SNMP 消息"
    , 0x00040000 : "警报灯闪亮"
  };

  window.EVENTRULE = {
    "告警" : {
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
    "用户管理": {
      "PSWC": 196608,
      "ROSC": 196608,
      "USSC": 196608 
    },
    "LDAP": 196608
  };

  /*Root of the tree*/
  EL.TreeRoot = {
    "id": "dashboard",
    "text": "控制面板",
    "iconCls": "icon-desk"
  };

  /*Template of the PDU*/
  EL.TreeMap = {
    ips:{
      id: "ips",
      url: "xhrips.jsp",
      text: "输入相位",
      icon: "icon-ip"
    },
    cbs:{
      id: "cbs",
      url: "xhrcbs.jsp",
      text: "断路器",
      icon: "icon-cb"
    },
    ess:{
      id: "extsens",
      url: "xhrextsens.jsp",
      text: "外置传感器",
      icon: "icon-temp"
    },
    outs:{
      id: "outlets",
      url: "xhroutlets.jsp",
      text: "输出端口管理"
      //,icon: "icon-ol"
    }
  };


  // 
  /*--------Models---------*/ 

  /*--main pages--*/ 
  /*login page*/ 
  MODEL.login = {
    title:    "登录",
    username: "用户名",
    password: "密码",
    login:    "登录",
    clear:    "清除"
  };

  /*master page*/
  MODEL.master = {
    useradmin: {
      txt: "用户管理",
      changepw:{
        txt: "更改密码",
        dlg: "更改用户密码"
      },
      users: {
        txt: "用户",
        dlg: "管理用户"
      },    
      roles: {
        txt: "用户组",
        dlg: "管理用户组"
      }
    },
    deviceadmin: {
      txt: "设备配置",
      networkser: {
        txt: "网络服务",
        http: {
          txt: "HTTP",
          dlg: "HTTP设置"
        },
        snmp: {
          txt: "SNMP",
          dlg: "SNMP设置"
        },
        ssh: {
          txt: "SSH",
          dlg: "SSH设置"
        },
        telnet: {
          txt: "TELNET",
          dlg: "TELNET设置"
        },
        ftp: {
          txt: "FTP",
          dlg: "FTP设置"
        }
      },
      networkcon: {
        txt: "网络配置",
        dlg: "网络配置"
      },
      security: {
        txt: "安全",
        loginset: {
          txt: "登录设置",
          dlg: "登录设置"
        },
        passwordpol: {
          txt: "密码策略",
          dlg: "密码策略"
        },
        forcehttps: {
          txt: "为Web访问强制设置HTTPS",
          dlg: "强制设置Https"
        }
      },
      eventrules: {
        txt: "事件规则设置",
        dlg: "事件规则设置"
      },
      datalog: {
        txt: "数据日志",
        dlg: "数据日志设置"
      },
      datetime: {
        txt: "日期/时间",
        dlg: "配置日期/时间"
      },
      smtpemail: {
        txt: "SMTP邮件",
        dlg: "SMTP服务器设置"
      },
      serverreach: {
        txt: "服务器可访问性",
        dlg: "服务器可访问性"
      },
      usb: {
        txt: "USB",
        dlg: "USB设置"
      },
      ldap: {
        txt: "LDAP",
        dlg: "LDAP设置"
      }
    },
    systemadmin: {
      txt: "系统管理",
      vweventlog: {
        txt: "查看事件日志",
        dlg: "查看事件日志"
      },
      vwdatalog: {
        txt: "查看数据日志",
        dlg: "查看数据日志"
      },
      firmwaremt: {
        txt: "固件维护",
        udfirmware: {
          txt: "更新固件",
          dlg: "固件更新"
        },
        vwfirmwareud: {
          txt: "查看固件更新历史",
          dlg: "固件更新历史"
        }
      },
      conusers: {
        txt: "连接的用户",
        dlg: "连接的用户"
      },
      diagnostic: {
        txt: "诊断",
        dldiaginfo: {
          txt: "下载诊断信息",
          dlg: "下载诊断信息"
        }
      },
      pduconfig: {
        txt: "PDU配置文件",
        dlg: "配置文件"
      },
      deviceinfo: {
        txt: "设备信息",
        dlg: "设备信息"
      },
      nwcardreset: {
        txt: "网络管理卡复位",
        dlg: "网络管理卡复位"
      }
    },
    help: {
      txt: "帮助",
      userguide: {
        txt: "用户指引",
        dlg: "用户指引"
      }
    },
    setalarmdl: {
      lowercritical: "下临界值",
      lowerwarning: "下临界警告",
      upperwarning: "上临界警告",
      uppercritical: "上临界值",
      resetthreshold: "复位阈值",
      alarmscdelay: "告警状态变化的延迟：",
      alarmsetting: "告警设置",
      enablealarm: "启用告警设置",
      updatefail: "更新失败",
      lowcriticalinfo: "下临界值+阈值应小于或等于下临界警告!",
      lowwarninfo: "下临界警告+2倍复位阈值应小于或等于上临界警告!",
      upwarninfo: "上临界警告+阈值应小于或等于上临界值!",
      lowcriticalinfo2: "下临界值+2倍复位阈值应小于或等于上临界警告!",
      lowcriticalinfo3: "下临界值+2倍复位阈值应小于或等于上临界值!",
      lowwarninfo2: "下临界警告+2倍复位阈值应小于或等于上临界值!"
    },
    resetdevicedl: {
      txt: "网络管理卡重置",
      txt1: "在几秒钟后网络管理卡会被重置。",
      txt2: "您将会被重定向到登录页面，在",
      txt3: "秒后。",
      txt4: "如果重定向无法连接，请点击",
      txt5: "此连接",
      txt6: "到登录页面。"
    },
    language: {
      txt: "语言",
      type: {
        en: "English",
        cn: "简体中文"
      }
    },
    logout: "退出",
    doreallylogout: "您确定要退出吗?",
    tree: "PDU 浏览",
    login: "以 {0} 身份登录",
    greeting: "欢迎来到 Enlogic",
    ip:   "<b>IP 地址: </b>{0}",
    time: "<b>登录时间: </b>{0}"
  };

  /*--left pages--*/ 
  /*Dashboard page*/
  MODEL.dashboard = {
    loading: "加载中",
    status: "状态",
    alarms: "告警",
    ok: "正常",
    currentrms: "电流, RMS (A)",
    voltagerms: "电压, RMS (V)",
    pdupowerenergy: "PDU 电能",
    externalsensor: "外部传感器, 类型",
    sensorname: "传感器名字",
    pduname: "PDU 名字",
    location: "位置",
    value: "值",
    activealarmpdu: "当前告警 PDU #",
    close: "关闭",
    alarmtype: "告警类型",
    count: "个数"
  };

  /*PDU #*/
  MODEL.pdu = {
    pduset: "PDU 设置",
    pduenergy: "PDU 能量",
    pduattribute: "PDU 属性",
    pduname: "PDU 名字",
    pdulocation: "PDU 位置",
    pduunitdelay: "PDU 冷启动延迟 (0 - 3600 s)",
    outletstate: "PDU 启动时输出端口状态 [0: 关, 1: 开, 2: 同前]",
    resetenergy: "复位电能",
    resetolenergy: "复位输出端口电能",
    pdumacaddress: "PDU MAC 地址",
    rating: "额定值",
    resetenergymeter: "可复位电能",
    activepowervalue: "有效功率值 (W)",
    activepowerset: "有效功率状态，设置",
    reset: "重置",
    resetsuccess: "重置成功!",
    surechangeol: "您确定想为所有输出端口做此改变吗?",
    reallyresetenergy: "您确定想重置电能？",
    nopermission: "无权限:"
  }

  /*Input Phases*/
  MODEL.phases = {
    phasecurrentrms: "相电流,RMS",
    reading: "读取值 ",
    lowercritical: "下临界值 ",
    lowerwarning: "下临界警告 ",
    upperwarning: "上临界警告 ",
    uppercritical: "上临界值 ",
    statusset: "状态, 设置",
    phasevoltagerms: "相电压, RMS",
    phasepower: "相功率",
    apparentpower: "视在功率 (VA)",
    powerfactor: "功率因素",
    activepower: "有效功率 (W)"
  };

  /*Circuit Breaker*/
  MODEL.breakers = {
    circuitid: "断路器编号",
    statusset: "状态, 设置",
    currentrms: "电流, RMS (A)",
    rating: "额定值 (A)",
    remaincapacity: "剩余容量 (A)",
    inputphases: "输入相位",
    connoutlet: "连接的输出端口"
  };

  /*Sensor page*/
  MODEL.sensor = { 
    id: "编号",
    typeset: "类型",
    statusset: "状态, 设置",
    value: "值",
    serialno: "序列号",
    aisle: "通道",
    name: "名字",
    description: "描述",
    location: "位置"
  }

  /*Outlet Power Management*/
  MODEL.outletstools = {
    powercontrol: "电源控制",
    execute: "执行",
    outletid: "输出端口编号",
    outletname: "输出端口名字",
    alarmstatus: "告警状态",
    activepower: "有效功率(W)",
    powerstatus: "电源状态",
    noselect: "您没有选择任何一个!",
    doexecute: "您确定想执行此命令吗?",
    // 
    outletset: "输出端口设置",
    outletattr: "输出端口属性",
    stateonstart: "启动时状态",
    ondelay: "打开延迟(0 ~ 7200s)",
    offdelay: "关断延迟(0 ~ 7200s)",
    rebootduration: "重启时间 (5 ~ 60s)",
    current: "电流(A)",
    voltage: "电压(V)",
    activepower: "有效功率(W)",
    peakpower: "峰值功率(W)",
    powerfactor: "功率因素",
    energymeter: "可复位电能"
  }

  // 
  /**--Menu Dialog Pages--*/
  MODEL.changepw = {
    oldpass: "旧密码",
    newpass: "新密码",
    cfmpass: "重复新密码",
    chgpwfail: "修改密码失败."
  };

  MODEL.users = {
    noselect: "请选择一行!",
    usernotbedel: "此用户不能被删除!",
    notdelyourself: "您不能删除您自己!",
    notdelthisuser: "您不能删除此用户!",
    reallydeluser: "您确定想删除此用户: {0} ?",
    nopermission: "您没有权限修改此用户!",
    enteruserexist: "输入的用户名已经存在!",
    noselectrole: "请选择一个用户组!",
    setting: "设置",
    snmpv3: "SNMPv3",
    // roles: "用户组",
    preferences: "首选项",
    // 
    createnewuser: "创建新用户",
    edituser: "编辑用户:",
    active: "活动",
    roles: "用户组",
    username: "用户名",
    fullname:"全名",
    password: "密码",
    cfpassword: "确认密码",
    telnumber: "电话号码",
    emailaddress: "邮箱地址",
    enabled: "启用",
    forcepwchntlg: "在下次登录时强制修改密码",
    // 
    enablesnmpacc: "启用SNMPv3的访问",
    securitylevel: "安全级别",
    usepwasauthpass: "使用密码作为身份验证码",
    authpass: "身份验证码",
    cfauthpass: "确认身份验证码",
    useauthaspri: "使用身份验证码作为加密密钥",
    pripass: "加密密钥",
    cfpripass: "确认加密密钥",
    authalgorithm: "身份验证算法",
    prialgorithm: "加密算法",
    // 
    temperatureunit: "温度单位",
    // 
    news: "新建",
    edits: "编辑",
    deletes: "删除"
  };

  MODEL.role = {
    noselect: "请选择一行!",
    rolenotbedel: "此用户组不能被删除!",
    reallydelrole: "您确定想删除此用户组: {0} ?",
    settings: "设置",
    privileges: "权限",
    rolename: "用户组名称",
    description: "描述",
    roleinfo: "用户组信息",
    // 
    privilegesedit: "权限编辑",
    selectillustrate: "选择添加用户组的权限.<br/>请注意某些权限可能需要额外的参数.",
    parameters: "参数",
    //
    clickcancel: "点击取消按钮关闭",
    clicksavecancel: "点击此处保存并关闭",
    news: "新建",
    edits: "编辑",
    deletes: "删除",
    saves: "保存"
  };

  MODEL.netsvr = {
    change: "更改设置后，您将需要重置网络管理卡使其生效。您确定想现在应用此变更吗？"
  };

  MODEL.http = {
    httpport: "HTTP端口",
    httpsport: "HTTPS端口"
  };

  MODEL.snmp = {
    general: "常规项",
    traps: "Traps",
    snmpv12set: "SNMP v1 / v2c 设置",
    snmpv12: "SNMP v1 / v2c",
    enable: "启用",
    readcs: "读权限授权字串",
    writecs: "写权限授权字串",
    snmpv3set: "SNMP v3 设置",
    snmpv3: "SNMP v3",
    mibiigroup: "MIB-II 系统组",
    syscontact: "sysContact",
    sysname: "sysName",
    syslocation: "sysLocation",
    snmptrapset: "SNMP Traps 设置",
    snmptraprule: "系统 SNMP Traps事件规则",
    host: "主机",
    port: "端口",
    community: "授权字串",
    helpinfo: "请进入 设备配置 > 事件规则设置 进行详细设置.",
    downloadmib: "下载MIB文件"
  };

  MODEL.ssh = {
    sshport: "SSH端口",
    enablessh: "启用SSH访问"
  };

  MODEL.telnet = {
    telnetport: "Telnet端口",
    enabletelnet: "启用Telnet访问"
  };

  MODEL.ftp = {
    ftpport: "FTP端口",
    enableftp: "启用FTP访问"
  };

  MODEL.network = {
    ipprotocol: "IP协议",
    ipv4set: "IPv4设置",
    ipv4only: "仅选IPv4",
    ipv6only: "仅选IPv6",
    ipv46: "IPv4 & IPv6",
    dnsresolve: "DNS服务器",
    preference: "首选项",
    ipv4address: "IPv4地址",
    ipv6address: "IPv6地址",
    ipautoconfig: "IP地址获取方法",
    ipaddress: "IP地址",
    netmask: "网络掩码",
    gateway: "网关IP地址",
    specficdns: "手动配置DNS服务器",
    primarydns: "主DNS服务器",
    secondarydns: "次DNS服务器",
    dnssuffix: "DNS后缀(可选)"
  };

  MODEL.loginset = {
    userblock: "用户锁定",
    blockuserfail: "在登录失败时锁定用户",
    maxnumfailln: "登录失败最多次数",
    blocktimeout: "锁定时长",
    loginlimit: "登录限制",
    idletimeout: "空闲超时时间"
  };

  MODEL.pwpolicy = {
    pwaging: "密码过期",
    pwaginginterval: "密码过期时间间隔",
    strongpw: "强密码",
    minpwlength: "密码最小长度",
    maxpwlength: "密码最大长度",
    enforcelower: "强制至少一个小写字母",
    enforceupper: "强制至少一个大写字母",
    enforcenumeric: "强制至少一个数字字符",
    enforcespecial: "强制至少一个特殊字符"
  };

  MODEL.forcehttpinfo = {
    confirminfo: "改变设置后, 您将需要重新设置网络管理卡使其生效.<br/> 您确定现在应用此变化吗?"
  };

  MODEL.evtrule = {
    eventset: "事件动作设定",
    selectrule: "已选规则",
    smtpreceive: "SMTP接收者",
    eventname: "事件名称",
    action: "动作"
  };

  MODEL.datalog = {
    loginterval: "日志记录间隔 (1 - 1440 分钟)",
    enablelog: "启用数据日志记录",
    illustrateinfo: "数据记录可存储多达2000条记录，存储是基于日志的时间间隔设置的最大时间范围内的数据。例如，对于日志的时间间隔为600秒（10分钟），数据日志将会包含13.89天的数据记录，一旦达到最大规模，最早的条目将会被较新的条目覆盖。"
  };

  MODEL.datetime = {
    timezone: "时区",
    usertime: "用户指定时间",
    date: "日期(YYYY-MM-DD)",
    time: "时间(hh:mm:ss)",
    synntpserver: "与NTP服务器同步",
    firstip: "主服务器IP地址",
    secondip: "次服务器IP地址",
    checkntp: "检查NTP服务器",
    checkntpinfo: "请输入正确的NTP服务器！"
  };

  MODEL.smtp = {
    serverset: "服务器设置",
    servername: "服务器名字",
    port: "端口",
    sendemail: "发件人电子邮件地址",
    numsend: "重复发送次数",
    intervalsend: "重复发送时间间隔(以分为单位)",
    serverreq: "服务器请求身份验证",
    username: "用户名",
    password: "密码",
    smtpset: "测试SMTP设置",
    recemail: "收件人电子邮件地址",
    testemail: "发送测试邮件",
    testsmtp: "测试SMTP配置",
    testemailinfo: "正在发送测试邮件,请等待 ...",
    errorinfo: "错误: SMTP设置配置! & 更新状态为 : ",
    probleminfo: "发送测试邮件有问题<br/>",
    checkinfo: "请检查SMTP服务器配置<br/>",
    succinfo: "该消息已成功发送,请检查您的邮箱。",
    errorname: "<br/>这个错误信息是:<br/>名称或服务未知",
    errorconn: "<br/>这个错误信息是:<br/>连接拒绝",
    errordns: "<br/>这个错误信息是:<br/>DNS服务器无法解析!",
    errorsmtp: "在设置SMTP服务器时发生错误:" 
  };

  MODEL.serreach = {
    iphostnm: "IP地址/主机名",
    pingenable: "Ping启用",
    status: "状态",
    news: "新建",
    edit: "编辑",
    deletes: "删除",
    refresh: "刷新",
    addnew: "添加新服务器",
    reachemax: "达到服务器最大访问数. <br/> 用户不能创建新的服务器",
    enableping: "启用此服务器的ping监控",
    numSuccping:   "连续Ping成功认为服务器正常的次数",
    numunsuccping: "连续Ping失败认为服务器异常的次数",
    waittime: "恢复执行ping前的等待时间（以秒为单位）",
    editserver: "编辑服务器属性",
    noselect: "请选择一行!",
    deleteser: "您确定删除此服务器 '{0}'?"
  };

  MODEL.usb = {
    usb: "USB",
    enableusb: "启用USB访问"
  };

  MODEL.ldap = {
    ldapset: "LDAP设置",
    ldapenable: "LDAP启用",
    typeserver: "LDAP服务器类型",
    iphostnm: "IP地址/主机名",
    port: "端口",
    sasl: "SASL",
    authnm: "身份验证名称",
    authdomain: "身份验证域",
    usebind: "使用绑定凭证",
    binddn: "绑定DN",
    bindpw: "绑定密码",
    Confirmpw: "确认密码",
    dnsearch: "搜索Base DN",
    lgnmattr: "登录名称属性",
    userentry: "用户输入对象类",
    testldapset: "测试LDAP设置",
    usernm: "用户名",
    password: "密码",
    testconn: "测试连接",
    conntest: "连接测试",
    conftest: "配置测试",
    authtest: "身份验证测试",
    userrole: "用户组分配",
    userknownrole: "已知用户组分配"
  };

  MODEL.eventlog = {
    reflog: "刷新日志",
    clearlog: "清除日志",
    savelog: "保存日志",
    launch: "在新窗口中启动",
    clearloginfo: "您确定清除日志吗?"
  };

  MODEL.vwdtlog = {
    reflog: "刷新日志",
    clearlog: "清除日志",
    savelog: "保存日志",
    launch: "在新窗口中启动"
  };

  MODEL.updtfw = {
    upload: "上传",
    selectfile: "选择文件",
    deletes: "删除",
    pending: "待处理...",
    fileformat: "所选文件格式不正确，请重新选择!"
  };

  MODEL.frupdth = {
    timestamp: "时间戳",
    preversion: "上一版本",
    updversion: "更新版本",
    status: "状态"
  };

  MODEL.conuser = {
    usernm: "用户名",
    ipaddr: "IP地址",
    clienttype: "客户类型",
    idletime: "空闲时间",
    action: "操作",
    disconn: "断开连接",
    disconnuser: "断开用户",
    dodisconnuser: "您确定断开此用户 '{0}'?",
    dodisconnself: "您正试图终止您的连接'{0} ({1})' <br/> 您确定断开自身连接吗?"
  };

  MODEL.diagnostic = {
    diagconf: "诊断配置",
    dldiaginfo: "下载诊断信息"
  };

  MODEL.blkconf = {
    dlconf: "下载配置",
    dlconffile: "下载配置文件",
    Uploadconf: "上传配置",
    upload: "上传",
    uploadsucc: "上传成功, 更新中...",
    applyconf: "应用配置",
    pleasewait: "请稍候...!"
  };

  MODEL.devinfo = {
    pduinfo: "PDU信息",
    outlets: "输出端口",
    circbreak: "断路器",
    sku: "SKU",
    serialnum: "序列号",
    rating: "额定值",
    functype: "功能类型",
    ipv4addr: "设备IPv4地址",
    ipv6addr: "设备IPv6地址",
    macaddr: "设备MAC地址",
    fwversion: "固件版本",
    webversion: "Web版本",
    pdumib: "PDU-MIB",
    download: "下载",
    label: "编号",
    operatevol: "工作电压",
    ratecurrent: "额定电流",
    type: "类型",
    protoutlet: "被保护的输出端口"
  };

  MODEL.resetdev = {
    doresetcard: "您确定要重置网络管理卡吗?"
  };

  // 
  /**--Buttons--*/ 
  MODEL.buttons = {
    cancels: "取消",
    oks: "确认",
    closes: "关闭",
    yes: "是",
    no: "否",
    save: "保存",
    edit: "编辑",
    action: "操作",
    message: "消息",
    info: "信息",
    runping: "执行Ping",
    run: "运行"
  };

  MODEL.master.setalarmdl.alarm = "告警";
  MODEL.master.setalarmdl.off = "关闭";
  MODEL.master.setalarmdl.on = "开启";
  MODEL.master.setalarmdl.disable = "禁用";
  MODEL.master.setalarmdl.enable = "启用";
  MODEL.master.setalarmdl.normal = "正常";
  MODEL.role.deldone = "用户组删除成功";
  MODEL.loginset.min = "分";
  MODEL.loginset.hr = "小时";
  MODEL.loginset.infinite = "不限";
  MODEL.pwpolicy.d = "天";
  MODEL.outletstools.powctrl = "电源控制";
  MODEL.outletstools.apply = " 应用 ";
  MODEL.outletstools.excuting = " 执行中, 单击取消 ";
  MODEL.datetime.succ = "验证成功";
  MODEL.datetime.fail = "验证失败";

  window.VALID = {
      ipv4: "请输入正确的IPV4地址"
    , ipv6: "请输入正确的IPV6地址"
    , nowhite: "不允许空白字符"
    , greater: "请输入大一些的数字"
    , customdate: "日期格式不正确"
    , lowchar: "请至少输入一个小写字母"
    , uppchar: "请至少输入一个大写字母"
    , numchar: "请至少输入一个数字"
    , spechar: "请至少输入一个特殊字符"
    , diffval: "请输入不同的值"
  };

  window.FUNCTYPE = {
      0: "未知"
    , 1: "PDU可测"
    , 2: "PDU可测, 端口可控"
    , 3: "端口可测"
    , 4: "端口可测, 端口可控"
  };

  window.CBTYPE = {
      0: "无"
    , 1: "单极断路器"
    , 2: "双极断路器"
  };

  MODEL.login.authfail = "认证失败";
  MODEL.dashboard.pduid = "PDU 编号";
  MODEL.devinfo.bootver = "引导程序版本";
  MODEL.devinfo.langver = "液晶屏语言版本";
  MODEL.login.connfail = "连接拒绝";
  MODEL.outletstools.outinuse = "端口已用";

})(window);
