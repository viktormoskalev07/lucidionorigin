function ioCfgDIDlgSet(j) {
    var id, DI;
    try {
        for (var i = 0; i < j.Configs.length; i++) {
            id = j.Configs[i].Id;
            DI = j.Configs[i].DI;
            siS("di" + id + "Mode", diModeGetIdxById(DI.Mode));
            cS("di" + id + "FAddCnt", DI.AddCnt);
            cS("di" + id + "FRst", DI.RstCntRd);
            cS("di" + id + "FInv", DI.Invert);
            vS("di" + id + "Scan", DI.ScanTime);
            vS("di" + id + "Count", DI.CntTime);
        }
    } catch(e) {
        console.log(e);
    }
}

function ioCfgDIDlgGet(vId) {
    var t = [];
    for (var i = 0; i < vId.length; i++) {
        var o = {};
        o["Id"] = vId[i];
        o["Type"] = cfgDI;
        var d = {};
        d["Mode"] = pI(diModeGetIdByIdx(siG("di" + vId[i] + "Mode")));
        d["AddCnt"] = cG("di" + vId[i] + "FAddCnt");
        d["RstCntRd"] = cG("di" + vId[i] + "FRst");
        d["Invert"] = cG("di" + vId[i] + "FInv");
        d["ScanTime"] = pI(vG("di" + vId[i] + "Scan"));
        d["CntTime"] = pI(vG("di" + vId[i] + "Count"));
        o["DI"] = d;
        t.push(o);
    }
    return t;
}

function ioCfgDODlgSet(j) {
    var id, DO;
    try {
        for (var i = 0; i < j.Configs.length; i++) {
            id = j.Configs[i].Id;
            DO = j.Configs[i].DO;
            siS("do" + id + "Mode", doModeGetIdxById(DO.Mode));
            cS("do" + id + "FCancel", DO.Cancel);
            cS("do" + id + "FRtrig", DO.Retrig);
            cS("do" + id + "FInv", DO.Invert);
            vS("do" + id + "CylTime", DO.CycleTime);
            vS("do" + id + "Duty", DO.Duty);
            vS("do" + id + "OnTime", DO.OnTime);
            vS("do" + id + "OnDly", DO.OnDly);
        }
    } catch(e) {
        console.log(e);
    }
}

function ioCfgDODlgGet(vId) {
    var t = [];
    for (var i = 0; i < vId.length; i++) {
        var o = {};
        o["Id"] = vId[i];
        o["Type"] = cfgDO;
        var d = {};
        d["Mode"] = pI(doModeGetIdByIdx(siG("do" + vId[i] + "Mode")));
        d["Cancel"] = cG("do" + vId[i] + "FCancel");
        d["Retrig"] = cG("do" + vId[i] + "FRtrig");
        d["Invert"] = cG("do" + vId[i] + "FInv");
        d["CycleTime"] = pI(vG("do" + vId[i] + "CylTime"));
        d["Duty"] = pI(vG("do" + vId[i] + "Duty"));
        d["OnTime"] = pI(vG("do" + vId[i] + "OnTime"));
        d["OnDly"] = pI(vG("do" + vId[i] + "OnDly"));

        o["DO"] = d;
        t.push(o);
    }
    return t;
}

function ioCfgAIDlgSet(j) {
    var id, AI;
    try {
        for (var i = 0; i < j.Configs.length; i++) {
            id = j.Configs[i].Id;
            AI = j.Configs[i].AI;
            siS("ai" + id + "Mode", stdModeGetIdxById(DO.Mode));
            vS("ai" + id + "Offset", AI.Offset);
            vS("ai" + id + "NrSmpl", AI.NrSamples);
            vS("ai" + id + "CLo", AI.CalLow);
            vS("ai" + id + "CHi", AI.CalHigh);
        }
    } catch(e) {
        console.log(e);
    }
}

function ioCfgAIDlgGet(vId) {
    var t = [];
    for (var i = 0; i < vId.length; i++) {
        var o = {};
        o["Id"] = vId[i];
        o["Type"] = cfgAI;
        var d = {};
        d["Mode"] = pI(stdModeGetIdByIdx(siG("ai" + vId[i] + "Mode")));
        d["Offset"] = pI(vG("ai" + vId[i] + "Offset"));
        d["NrSamples"] = pI(vG("ai" + vId[i] + "NrSmpl"));
        d["CalLow"] = pI(vG("ai" + vId[i] + "CLo"));
        d["CalHigh"] = pI(vG("ai" + vId[i] + "CHi"));
        o["AI"] = d;
        t.push(o);
    }
    return t;
}

function ioCfgAODlgSet(j) {
    var id, AO;
    try {
        for (var i = 0; i < j.Configs.length; i++) {
            id = j.Configs[i].Id;
            AO = j.Configs[i].AO;
            siS("ao" + id + "Mode", stdModeGetIdxById(AO.Mode));
            vS("ao" + id + "RTime", AO.RefreshTime);
            vS("ao" + id + "Offset", AO.Offset);
            vS("ao" + id + "CLo", AO.CalLow);
            vS("ao" + id + "CHi", AO.CalHigh);
        }
    } catch(e) {
        console.log(e);
    }
}

function ioCfgAODlgGet(vId) {
    var t = [];
    for (var i = 0; i < vId.length; i++) {
        var o = {};
        o["Id"] = vId[i];
        o["Type"] = cfgAO;
        var d = {};
        d["Mode"] = pI(stdModeGetIdByIdx(siG("ao" + vId[i] + "Mode")));
        d["RefreshTime"] = pI(vG("ao" + vId[i] + "RTime"));
        d["Offset"] = pI(vG("ao" + vId[i] + "Offset"));
        d["CalLow"] = pI(vG("ao" + vId[i] + "CLo"));
        d["CalHigh"] = pI(vG("ao" + vId[i] + "CHi"));
        o["AO"] = d;
        t.push(o);
    }
    return t;
}

function ioCfgRIDlgSet(j) {
    var id, RI;
    try {
        for (var i = 0; i < j.Configs.length; i++) {
            id = j.Configs[i].Id;
            RI = j.Configs[i].RI;
            siS("ri" + id + "Mode", stdModeGetIdxById(RI.Mode));
            vS("ri" + id + "NrSmpl", RI.NrSamples);
            vS("ri" + id + "STime", RI.SetupTime);
            vS("ri" + id + "Offset", RI.Offset);
            vS("ri" + id + "CLo", RI.CalLow);
            vS("ri" + id + "CHi", RI.CalHigh);
        }
    } catch(e) {
        console.log(e);
    }
}

function ioCfgRIDlgGet(vId) {
    var t = [];
    for (var i = 0; i < vId.length; i++) {
        var o = {};
        o["Id"] = vId[i];
        o["Type"] = cfgRI;
        var d = {};
        d["Mode"] = pI(stdModeGetIdByIdx(siG("ri" + vId[i] + "Mode")));
        d["NrSamples"] = pI(vG("ri" + vId[i] + "NrSmpl"));
        d["SetupTime"] = pI(vG("ri" + vId[i] + "STime"));
        d["Offset"] = pI(vG("ri" + vId[i] + "Offset"));
        d["CalLow"] = pI(vG("ri" + vId[i] + "CLo"));
        d["CalHigh"] = pI(vG("ri" + vId[i] + "CHi"));
        o["RI"] = d;
        t.push(o);
    }
    return t;
}


async function ioCfgXXSet(vId, dlgGetFnc) {
    let rq = {Cmd:"IoCfgSet", Save:true, SessionId:sIdG(),
        Configs:dlgGetFnc(vId)};
    return await rqp(rq, null);  
}

async function ioCfgXXSetAll(c, s, dlgGetFnc) {
    var o = ofstGet(s);
    return new Promise(async(res,rej) => {
        await ioCfgXXSet([o,o+1,o+2,o+3], dlgGetFnc)
        .then(async() => {
            if ((c == cDI8) || (c == cDO8)) {
                await ioCfgXXSet([o+4,o+5,o+6,o+7], dlgGetFnc)
                .then(() => {
                    res();
                }).catch((m) => {
                    rej(m);
                })
            } else
                res();
        }).catch((m) => {
            rej(m);
        })
    });
}

async function ioCfgXXGet(vId, dlgSetFnc) {
    let rq = {Cmd:"IoCfgGet", SessionId:sIdG(),
        ValueIds:vId};
    
    return await rqp(rq, dlgSetFnc);
}

async function ioCfgXXGetAll(c, s, dlgSetFnc) {
    var o = ofstGet(s);
    return new Promise(async(res,rej) => {
        await ioCfgXXGet([o,o+1,o+2,o+3], dlgSetFnc)
        .then(async() => {
            if ((c == cDO8) || (c == cDI8)) {
                await ioCfgXXGet([o+4,o+5,o+6,o+7], dlgSetFnc)
                .then(() => {
                    res();
                }).catch((m) => {
                    rej(m);
                })
            } else
                res();
        }).catch((m) => {
            rej(m);
        })
    }); 
}


async function ioCfgSetAll() {
    var c;
    var fncDlgGet;
    c = classGet(selectedSlot);

    if ((c == cDI4) || (c == cDI8))
        fncDlgGet = ioCfgDIDlgGet;
    if ((c == cDO4) || (c == cDO8))
        fncDlgGet = ioCfgDODlgGet;
    if (c == cAI4)
        fncDlgGet = ioCfgAIDlgGet;
    if (c == cAO4)
        fncDlgGet = ioCfgAODlgGet;
    if (c == cRI4)
        fncDlgGet = ioCfgRIDlgGet;

    return new Promise(async(res,rej) => {
        await ioCfgXXSetAll(c, selectedSlot, fncDlgGet)
        .then(() => {
            res();
        }).catch((m) => {
            rej(m);
        })
    });
}

async function ioCfgGetAll() {
    var c;
    var fncDlgSet;
    c = classGet(selectedSlot);

    if ((c == cDI4) || (c == cDI8))
        fncDlgSet = ioCfgDIDlgSet;
    if ((c == cDO4) || (c == cDO8))
        fncDlgSet = ioCfgDODlgSet;
    if (c == cAI4)
        fncDlgSet = ioCfgAIDlgSet;
    if (c == cAO4)
        fncDlgSet = ioCfgAODlgSet;
    if (c == cRI4)
        fncDlgSet = ioCfgRIDlgSet;

    return new Promise(async(res,rej) => {
        await ioCfgXXGetAll(c, selectedSlot, fncDlgSet)
        .then(() => {
            res();
        }).catch((m) => {
            rej(m);
        })
    });
}

function diChAdd(vId) {
    var html;
    html = 	'<div class="box-full-sub"><h3>DI CH' + vId + '</h3></div>'+
            '<div class="box-topic">' +
                '<div class="box-12">' +
                    '<p><label for="di' + vId + 'Mode">Mode</label>' +				
                    '<select id="di' + vId + 'Mode">' + diModeStrGet() + '</select></p>'+
                    '<p><label for="di' + vId + 'Scan">Scan Time</label><input id="di' + vId + 'Scan" type="number" maxlength="3" size="10" min=50000 step=1 max=1000000></p>' +
                    '<p><label for="di' + vId + 'Count">Count Time</label><input id="di' + vId + 'Count" type="number" maxlength="3" size="10" min=50000 step=1 max=1000000></p>' +
                '</div>' +
                '<div class="box-12">' +
                    '<p><label for="di' + vId + 'FAddCnt">Add Counter</label><input id="di' + vId + 'FAddCnt" type="checkbox"></p>' +
                    '<p><label for="di' + vId + 'FRst">Reset Counter</label><input id="di' + vId + 'FRst" type="checkbox"></p>' +
                    '<p><label for="di' + vId + 'FInv">Invert</label><input id="di' + vId + 'FInv" type="checkbox"></p>' +
                '</div>'+
            '</div>';
    return html;
}

function diInit(vIdStart, vIdEnd)
{
    for (var vId = vIdStart; vId < vIdEnd; vId++) {
        document.getElementById("io-di").innerHTML += diChAdd(vId);
    }
    dS("io-di", "inline");
}

function doChAdd(vId) {
    var html;
    html = '<div class="box-full-sub"><h3>DO CH' + vId + '</h3></div>' +
    '<div class="box-topic">'+
        '<div class="box-13">' +
            '<p><label for="do' + vId + 'Mode">Mode</label>' + 
            '<select id="do' + vId + 'Mode"> ' + doModeStrGet() + '</select></p>'+
            '<p><label for="do' + vId + 'CylTime">Cycle Time</label><input id="do' + vId + 'CylTime" type="number" maxlength="3" size="10" min=0 step=1 max=1000000></p>' +
            '<p><label for="do' + vId + 'Duty">Duty Cycle</label><input id="do' + vId + 'Duty" type="number" maxlength="3" size="10" min=0 step=1 max=1000></p>' +
        '</div>' +
        '<div class="box-13">' +
            '<p><label for="do' + vId + 'OnTime">On Time</label><input id="do' + vId + 'OnTime" type="number" maxlength="3" size="10" min=0 step=1 max=1000000></p>' +
            '<p><label for="do' + vId + 'OnDly">On Delay</label><input id="do' + vId + 'OnDly" type="number" maxlength="3" size="10" min=0 step=1 max=1000000></p>' +
        '</div>' +
        '<div class="box-13">' +
            '<p><label for="do' + vId + 'FCancel">Cancel</label><input id="do' + vId + 'FCancel" type="checkbox"></p>' +
            '<p><label for="do' + vId + 'FRtrig">Retrigger</label><input id="do' + vId + 'FRtrig" type="checkbox"></p>' +
            '<p><label for="do' + vId + 'FInv">Invert</label><input id="do' + vId + 'FInv" type="checkbox"></p>' +
        '</div>'+
    '</div>';
    return html;	
}

function doInit(vIdStart, vIdEnd)
{
    for (var vId = vIdStart; vId < vIdEnd; vId++) {
        document.getElementById("io-do").innerHTML += doChAdd(vId);
    }
    dS("io-do", "inline");
}

function aiChAdd(vId) {
    var html;
    html = '<div class="box-full-sub"><h3>AI CH' + vId + '</h3></div>' +
    '<div class="box-topic">'+
        '<div class="box-13">' +
            '<p><label for="ai' + vId + 'Mode">Mode</label>' + 
            '<select id="ai' + vId + 'Mode">' + stdModeStrGet() + '</option></select></p>'+
        '</div>' +
        '<div class="box-13">' +
            '<p><label for="ai' + vId + 'Offset">Offset</label><input id="ai' + vId + 'Offset" type="number" maxlength="9" size="10" min=-100000 step=1 max=100000></p>' +
            '<p><label for="ai' + vId + 'NrSmpl">Nr of Samples</label><input id="ai' + vId + 'NrSmpl" type="number" maxlength="3" size="10" min=0 step=1 max=256></p>' +
        '</div>' +
        '<div class="box-13">' +
            '<p><label for="ai' + vId + 'CLo">Cal Low</label><input id="ai' + vId + 'CLo" type="number" maxlength="9" size="10" min=-100000 step=1 max=100000></p>' +
            '<p><label for="ai' + vId + 'CHi">Cal High</label><input id="ai' + vId + 'CHi" type="number" maxlength="9" size="10" min=-100000 step=1 max=100000></p>' +
        '</div>' +
    '</div>';

    return html;
}

function aiInit(vIdStart, vIdEnd)
{
    for (var vId = vIdStart; vId < vIdEnd; vId++) {
        document.getElementById("io-ai").innerHTML += aiChAdd(vId);
    }
    dS("io-ai", "inline");
}

function aoChAdd(vId)
{
    var html;
    html = '<div class="box-full-sub"><h3>AO CH' + vId + '</h3></div>' +
    '<div class="box-topic">'+
        '<div class="box-13">' +
            '<p><label for="ao' + vId + 'Mode">Mode</label>' + 
            '<select id="ao' + vId + 'Mode">' + stdModeStrGet() + '</select></p>'+
            '</div>' +
        '<div class="box-13">' +
            '<p><label for="ao' + vId + 'Offset">Offset</label><input id="ao' + vId + 'Offset" type="number" maxlength="9" size="10" min=-100000 step=1 max=100000></p>' +
            '<p><label for="ao' + vId + 'RTime">Refresh Time</label><input id="ao' + vId + 'RTime" type="number" maxlength="9" size="10" min=0 step=1 max=10000</p>' +
        '</div>' +
        '<div class="box-13">' +
            '<p><label for="ao' + vId + 'CLo">Cal Low</label><input id="ao' + vId + 'CLo" type="number" maxlength="9" size="10" min=0 step=1 max=100000></p>' +
            '<p><label for="ao' + vId + 'CHi">Cal High</label><input id="ao' + vId + 'CHi" type="number" maxlength="9" size="10" min=0 step=1 max=100000></p>' +
        '</div>' +
    '</div>';	
    return html;
}

function aoInit(vIdStart, vIdEnd)
{
    for (var vId = vIdStart; vId < vIdEnd; vId++) {
        document.getElementById("io-ao").innerHTML += aoChAdd(vId);
    }
    dS("io-ao", "inline");
}


function riChAdd(vId)
{
    var html;
    html = '<div class="box-full-sub"><h3>RI CH' + vId + '</h3></div>' +
    '<div class="box-topic">'+
        '<div class="box-13">' +
            '<p><label for="ri' + vId + 'Mode">Mode</label>' + 
            '<select id="ri' + vId + 'Mode">' + stdModeStrGet() + '</select></p>'+
        '</div>' +
        '<div class="box-13">' +
            '<p><label for="ri' + vId + 'Offset">Offset</label><input id="ri' + vId + 'Offset" type="number" maxlength="9" size="10" min=-100000 step=1 max=100000></p>' +
            '<p><label for="ri' + vId + 'NrSmpl">Nr of Samples</label><input id="ri' + vId + 'NrSmpl" type="number" maxlength="3" size="10" min=0 step=1 max=256></p>' +
            '<p><label for="ri' + vId + 'STime">Setup Time</label><input id="ri' + vId + 'STime" type="number" maxlength="5" size="10" min=0 step=1 max=1000></p>' +
        '</div>' +
        '<div class="box-13">' +
            '<p><label for="ri' + vId + 'CLo">Cal Low</label><input id="ri' + vId + 'CLo" type="number" maxlength="9" size="10" min=-100000 step=1 max=100000></p>' +
            '<p><label for="ri' + vId + 'CHi">Cal High</label><input id="ri' + vId + 'CHi" type="number" maxlength="9" size="10" min=-100000 step=1 max=100000></p>' +
        '</div>' +
    '</div>';
    return html;
}

function riInit(vIdStart, vIdEnd)
{
    for (var vId = vIdStart; vId < vIdEnd; vId++) {
        document.getElementById("io-ri").innerHTML += riChAdd(vId);
    }
    dS("io-ri", "inline");
}

async function ioCfgInit(s, c) {
    var vIdStart = ofstGet(s);
    var cn, tn, fncDlgSet;

    return new Promise(async(res, rej) => {
        try {
            eGetById("cfgSlot").innerHTML = s;
            cn = sessionStorage.getItem("cn" + s);
            tn = sessionStorage.getItem("tn" + s);
        
            eGetById("cfgCn").innerHTML = cn;
            eGetById("cfgTn").innerHTML = tn;
        
            btnEvAdd("cfgSave", async() => {
                await ioCfgSetAll()
                .then(() => {
                }).catch((m) => {
                    alert(m);
                })
            });
        
            if (c == cDI4) {
                diInit(vIdStart, vIdStart + 4);
                fncDlgSet = ioCfgDIDlgSet;
            }
            if (c == cDI8) {
                diInit(vIdStart, vIdStart + 8);
                fncDlgSet = ioCfgDIDlgSet;
            }
            if (c == cDO4) {
                doInit(vIdStart, vIdStart + 4);
                fncDlgSet = ioCfgDODlgSet;
            }
            if (c == cDO8) {
                doInit(vIdStart, vIdStart + 8);
                fncDlgSet = ioCfgDODlgSet;
            }
            if (c == cAI4) {
                aiInit(vIdStart, vIdStart + 4);
                fncDlgSet = ioCfgAIDlgSet;
            }
            if (c == cAO4) {
                aoInit(vIdStart, vIdStart + 4);
                fncDlgSet = ioCfgAODlgSet;
            }
            if (c == cRI4) {
                riInit(vIdStart, vIdStart + 4);
                fncDlgSet = ioCfgRIDlgSet;
            }
            if (c == cRI8) {
                riInit(vIdStart, vIdStart + 8);
                fncDlgSet = ioCfgRIDlgSet;
            }
        } catch (e) {
            console.log(e);
            res();
        }
    
        if (fncDlgSet) {
            await ioCfgXXGetAll(c, s, fncDlgSet).then(() => {
                res();
            }).catch((m) => {
                rej(m);
            })
        } else
            rej("Invalid");
    });
}