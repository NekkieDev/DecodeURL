import createUrlObject from './urlParser.js';
import validateValues from './Validation.js';

const urlObject = createUrlObject('https:securepubads.g.doubleclick.netgampadadxiu=%2F32352161%2Fformatos%2Fframe&sz=1x1&c=1729876706120&ppid=f0e576917b3461e6c2c67b825a150d08fe8e36b2f38514c19b85f3d13ce4b77d&t=gp_platform=app&op=none&glb_assinante=globoplaypremium&ambient=app&device_type=android_tv&kw=false&glb_tipo=assinante&gp_gender=masculino&video_subscription=true&tipo_pagina=globoplay&available_for=&permutive=&glb_id=5bb4845533f64720b882bb17792652fd&permutiveid=fb27c7ba30f1487eb06a1821c3062d98&tvg_pos=FRAMEAD');

console.log("Objeto da URL:", urlObject);
validateValues(urlObject);