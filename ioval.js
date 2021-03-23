function ioValDIDlgSet(j) {
    var i, b;
    try {
        for (i = 0; i < j.Values.length; i++) {
            b = "gray";
            if (j.Values[i].Value) {
                b = "red";
            }
            eGetById("di" + j.Values[i].Id + "Val").style.backgroundColor = b;
        }
    } catch(e) {
        console.log(e);
    }
}

function ioValDIChAdd(vId) {
    return '<div class="box-full-sub"><h3>DI CH ' + vId + '</h3></div>' +
            '<div class="box-topic">' +
            '<div class="digState" id="di' + vId + 'Val"></div>' +
            '<button class="button" onclick="ioValXXGet(' + vId + ', 1)">Get</button>' +
            '</div>';
}

function ioValDIInit(vIdStart, vIdEnd) {
    var cnt = 0;
    var html;
    for (var vId = vIdStart; vId < vIdEnd; vId++) {
        html += ioValDIChAdd(vId);
        cnt++;
    }
    html += '<div><button class="button" id="btDI">Get All</button></div>';
    eGetById("v-di").innerHTML = html;

    btnEvAdd("btDI", async () => {
        await ioValXXGetAll(vIdStart, cnt, vtDI1, ioValDIDlgSet)
        .then(() => {})
        .catch((m) => {
            alert(m);
        })
    });
    dS("v-di", "inline");  
}


function ioValDODlgSet(j) {
    var i, b;
    try {
        for(i = 0; i < j.Values.length; i++) {
            b = "gray";
            if (j.Values[i].Value) 
                b = "red";
            eGetById("do" + j.Values[i].Id + "Val").style.backgroundColor = b;
        }
    } catch(e) {
        console.log(e);
    }
}

async function ioValDOSet(vIdStart, cnt, v)
{
    let rq = {Cmd:"IoSet", SessionId:sIdG()};
    var a = [], i, o;

    for (i = 0; i < cnt; i++) {
        o = {};
        o["Id"] = vIdStart + i;
        o["Type"] = vtDI1;
        o["Value"] = v;
        a.push(o);
    }
    rq["Values"] = a;
    return await rqp(rq, null);
}


async function ioValDOSetChk(vIdStart, cnt, v) {
    return new Promise(async(res, rej) => {
        await ioValDOSet(vIdStart, cnt, v)
        .then(async () => {
            await ioValXXGetAll(vIdStart, cnt, vtDI1, ioValDODlgSet).
            then(() => {
                res();
            })
        }).catch((m) => {
            rej(m);
        })
    });
}

function ioValDOChAdd(vId) {
    return '<div class="box-full-sub"><h3>DO CH ' + vId + '</h3></div>' +
            '<div class="box-topic">' +
            '<div class="digState" id="do' + vId + 'Val"></div>' +
            '<button class="button" id="btDO' + vId + 'Set">Set</button>' +
            '<button class="button" id="btDO' + vId + 'Rst">Reset</button>' +
        '</div>';
}

function ioValDOInit(vIdStart, vIdEnd) {
    var cnt = 0, html, vId;
    for (vId = vIdStart; vId < vIdEnd; vId++) {
        html += ioValDOChAdd(vId);
        cnt++;
    }
    html += '<div>' + 
        '<button class="button" id="btDOSet">Set All</button>' +
        '<button class="button" id="btDORst">Reset All</button>' +
        '</div>';

    eGetById("v-do").innerHTML = html;

    for (var i = vIdStart; i < vIdEnd; i++) {
        (function(i) {
            btnEvAdd("btDO" + i + "Set", async () => {
                await ioValDOSetChk(i, 1, true).then(() => {
                }).catch((m) => {
                    alert(m);
                })
            });
            btnEvAdd("btDO" + i + "Rst", async () => {
                await ioValDOSetChk(i, 1, false).then(() => {
                }).catch((m) => {
                    alert(m);
                })
            });
        }(i));
    }

    btnEvAdd("btDOSet", async () => {
        await ioValDOSetChk(vIdStart, cnt, true).then(() => {
        }).catch((m) => {
            alert(m);
        })
    });

    btnEvAdd("btDORst", async () => {
        await ioValDOSetChk(vIdStart, cnt, false).then(() => {
        }).catch((m) => {
            alert(m);
        })
    });

    dS("v-do", "inline");
}

function ioValAIDlgSet(j) {
    var i;
    try {
        for (i = 0; i < j.Values.length; i++) {
            vS("ai" + j.Values[i].Id + "Val", j.Values[i].Value)
        }
    } catch(e) {
        console.log(e);
    }
}


function ioValAIChAdd(vId) {
    return '<div class="box-full-sub"><h3>AI CH ' + vId + '</h3></div>' +
            '<div class="box-topic">' +
            '<p>Value</p>' +
            '<p id="ai' + vId + 'Val">' +
            '</div>';
}

function ioValAIInit(vIdStart, vIdEnd, t) {
    var cnt = 0, html, vId;
    for (vId = vIdStart; vId < vIdEnd; vId++) {
        html += ioValAIChAdd(vId);
        cnt++;
    }
    html += '<div>' + 
        '<button class="button" id="btAIV">Get Voltages</button>';

    if (t == tC)
        html += '<button class="button" id="btAIC">Get Currents</button>';

    html += '</div>';

    eGetById("v-ai").innerHTML = html;

    btnEvAdd("btAIV", async() => {
        await ioValXXGetAll(vIdStart, cnt, vtVOS4, ioValAIDlgSet).then(() =>{
        }).catch((m) => {
            alert(m);
        })
    });

    if (t == tC) {
        btnEvAdd("btAIC", async() => {
            await ioValXXGetAll(vIdStart, cnt, vtCUS4, ioValAIDlgSet).then(() => {
            }).catch((m) => {
                alert(m);
            })
        });
    }
    
    dS("v-ai", "inline");
}


function ioValAODlgSet(j) {
    var i;
    try {
        for (i = 0; i < j.Values.length; i++) {
            vS("ao" + j.Values[i].Id + "Val", j.Values[i].Value)
        }
    } catch(e) {
        console.log(e);
    }
}

function ioValAODlgGet(vIds, vT) {
    var i, t = [];
    for (i = 0; i < vIds.length; i++) {
        var o = {};
        o["Id"] = vIds[i];
        o["Type"] = vT;
        o["Value"] = vG("ao" + vIds[i] + "Val");
        t.push(o);
    }
    return t;
}

async function ioValAOSet(vIdStart, cnt, vT) {
    let rq = {Cmd:"IoSet", SessionId:sIdG()};
    var vIds = [], i;

    for (i = 0; i < cnt; i++) {
        vIds.push(vIdStart + i);
    }

    rq["Values"] = ioValAODlgGet(vIds, vT);
    return await rqp(rq, null);
}

async function ioValAOSetChk(vIdStart, cnt, v) {
    return new Promise(async(res,rej) => {
        await ioValAOSet(vIdStart, cnt, v).then(async() => {
            await ioValXXGetAll(vIdStart, cnt, v, ioValAODlgSet).then(() => {
                res();
            })
        }).catch((m) => {
            rej(m);
        })
    });
}


function ioValAOChAdd(vId, t) {
    return '<div class="box-full-sub"><h3>AO CH ' + vId + '</h3></div>' +
            '<div class="box-topic">' +
            '<p><label for="ao' + vId + 'Val">Value</label><input id="ao' + vId + 'Val" type="number" min=0 step=1 max=24000000></p>' +
        '</div>';
}

function ioValAOInit(vIdStart, vIdEnd, t)
{
    var cnt = 0, html, vId, vT = vtVOS4;
    for (vId = vIdStart; vId < vIdEnd; vId++) {
        html += ioValAOChAdd(vId);
        cnt++;
    }
    html += '<div>' + 
        '<button class="button" id="btAOSet">Set All</button>' +
        '</div>';

    eGetById("v-ao").innerHTML = html;

    if (t == tC)
        vT = vtCUS4;
/*
    for (var i = vIdStart; i < vIdEnd; i++) {
        (function(i) {
            btnEvAdd("btAO" + i, () => {ioValAOSetChk(i, 1, vT);});
        }(i));
    }
*/

    btnEvAdd("btAOSet", async() => {
        await ioValAOSetChk(vIdStart, cnt, vT).then(() => {
        }).catch((m) => {
            alert(m);
        })
    });

    dS("v-ao", "inline");
}


function ioValRIDlgSet(j) {
    var i;
    try {
        for (i = 0; i < j.Value.length; i++) {
            vS("ri" + j.Value[i].Id + "Val", j.Value[i].Value)
        }
    } catch(e) {
        console.log(e);
    }
}


function ioValRIChAdd(vId) {
    return '<div class="box-full-sub"><h3>RI CH ' + vId + '</h3></div>' +
        '<div class="box-topic">' + 
        '<p>Value</p>' +
        '<p id="ri' + vId + 'Val">' +
        '</div>';
}

function ioValRIInit(vIdStart, vIdEnd) {
    var cnt = 0, html, vId;
    for (vId = vIdStart; vId < vIdEnd; vId++) {
        html += ioValRIChAdd(vId);
        cnt++;
    }
    html += '<div><button class="button" id="btRI">Get</button></div>';

    eGetById("v-ri").innerHTML = html;

    btnEvAdd("btRI", async() => {
        await ioValXXGetAll(vIdStart, cnt, vtTMS4, ioValRIDlgSet).then(() => {
        }).catch((m) => {
            alert(m);
        })
    });

    dS("v-ri", "inline");
}


async function ioValXXGet(v, fncDlgSet) {
    let rq = {Cmd:"IoGet", SessionId:sIdG(), "Values":v};
    return await rqp(rq, fncDlgSet);
}


async function ioValXXGetAll(vIdStart, vIdNr, vt, fncDlgSet) {
    var i, v = [], o;

    for (var i = 0; i < vIdNr; i++) {
        o = {};
        o["Id"] = vIdStart + i;
        o["Type"] = vt;
        v.push(o);
    }

    return new Promise(async(res,rej) => {
        await ioValXXGet(v, fncDlgSet)
        .then(() => {
            res();
        }).catch((m) => {
            rej(m);
        })
    });     
}

async function ioValInit(s, c, t) {
    var vIdStart = ofstGet(s);
    var cn, tn, fncDlgSet, vt = vtVOS4, vIdNr;

    return new Promise(async(res, rej) => {
        try {
            eGetById("vSlot").innerHTML = s;
            cn = sessionStorage.getItem("cn" + s);
            tn = sessionStorage.getItem("tn" + s);

            eGetById("vCn").innerHTML = cn;
            eGetById("vTn").innerHTML = tn;

            if (c == cDI4) {
                ioValDIInit(vIdStart, vIdStart + 4);
                vIdNr = 4;
                vt = vtDI1;
                fncDlgSet = ioValDIDlgSet;
            }
            if (c == cDI8) {
                ioValDIInit(vIdStart, vIdStart + 8);
                vIdNr = 8;
                vt = vtDI1;
                fncDlgSet = ioValDIDlgSet;
            }
            if (c == cDO4) {
                ioValDOInit(vIdStart, vIdStart + 4);
                vIdNr = 4;
                vt = vtDI1;
                fncDlgSet = ioValDODlgSet;
            }
            if (c == cDO8) {
                ioValDOInit(vIdStart, vIdStart + 8);
                vIdNr = 8;
                vt = vtDI1;
                fncDlgSet = ioValDODlgSet;
            }
            
            if (c == cAI4) {
                ioValAIInit(vIdStart, vIdStart + 4, t);
                vIdNr = 4;
                vt = vtVOS4;
                fncDlgSet = ioValAIDlgSet;
            }
            
            if (c == cAO4) {
                ioValAOInit(vIdStart, vIdStart + 4, t);
                vIdNr = 4;
                if (t == tC)
                    vt = vtCUS4;
                else
                    vt = vtVOS4;
                fncDlgSet = ioValAODlgSet;
            }
            
            if (c == cRI4) {
                ioValRIInit(vIdStart, vIdStart + 4);
                vIdNr = 4;
                vt = vtTMS4;
                fncDlgSet = ioValRIDlgSet;
            }
            if (c == cRI8) {
                ioValRIInit(vIdStart, vIdStart + 8);
                vIdNr = 8;
                vt = vtTMS4;
                fncDlgSet = ioValRIDlgSet;
            }
        } catch (e) {
            console.log(e);
            res();
        }

        if (fncDlgSet) {
            await ioValXXGetAll(vIdStart, vIdNr, vt, fncDlgSet)
            .then(() => {
                res();
            }).catch((m) => {
                rej(m);
            })
        } else
            rej("Invalid");
    });
}