type ValidationResult = {
    key: string;
    value: any;
    status: 'OK' | 'ERRO';
    message: string;
};

type ValidationRulesType = {
    [key: string]: (value: any) => boolean;
};

const validateAvailableFor = new Set(['ANONYMOUS', 'LOGGED_IN', 'SUBSCRIBER', '']);
const validDeviceType = new Set(['android', 'ios', 'desktop', 'mobile', 'tablet', 'android_tv', 'html', 'nativa', 'smart_app', 'chromecast', 'fire_tv', 'roku']);
const validPlatforms = new Set(['web', 'app', 'tv', 'roku']);
const validAmbient = new Set(['web', 'app', 'tv']);
const validGlbAssinante = new Set(['globoplaybasico', 'globoplaypremium', 'naoassinante', 'anonimo', 'globoplaypadrao', 'globoplayinternacional']);
const validGlbTipo = new Set(['nao-assinante', 'assinante', 'anonimo']);
const validGpGender = new Set(['masculino', 'feminino', 'outro']);

const validationRules: ValidationRulesType = {
    sz: value => ['1x1', 'fluid'].includes(value),
    c: value => typeof value === 'string' && value.length > 0,
    ppid: value => typeof value === 'string' && value.length > 0,
    't.gp_platform': value => validPlatforms.has(value),
    't.op': value => typeof value === 'string' && value.length > 0,
    't.glb_assinante': value => validGlbAssinante.has(value),
    't.ambient': value => validAmbient.has(value),
    't.device_type': value => validDeviceType.has(value),
    't.kw': value => value === 'true' || value === 'false',
    't.glb_tipo': value => validGlbTipo.has(value),
    't.gp_gender': value => validGpGender.has(value),
    't.video_subscription': value => value === 'true' || value === 'false',
    't.tipo_pagina': value => value === 'globoplay',
    't.available_for': value => validateAvailableFor.has(value),
    't.permutive': value => typeof value === 'string' && (value === '' || value.length > 0),
    't.glb_id': value => typeof value === 'string' && value.length > 0,
    't.permutiveid': value => typeof value === 'string' && value.length > 0,
    't.tvg_pos': value => typeof value === 'string' && value.length > 0
};

function getNestedValue(obj: Record<string, any>, path: string): any {
    return path.split('.').reduce((acc, key) => {
        return acc !== null && acc !== undefined ? acc[key] : undefined;
    }, obj);
}

function validateValues(paramsObject: Record<string, any>): ValidationResult[] {
    const results: ValidationResult[] = [];
    console.log('Iniciando validação...');
    
    for (const [key, validator] of Object.entries(validationRules)) {
        const value = getNestedValue(paramsObject, key);
        const isValid = validator(value);
        
        const logEntry: ValidationResult = {
            key,
            value,
            status: isValid ? 'OK' : 'ERRO',
            message: isValid ? 'Validação bem-sucedida -' : 'Valor inválido ou ausente -'
        };

        results.push(logEntry);
        console.log(`${logEntry.key}: ${logEntry.status} | ${logEntry.message}`, value);
    }
    
    console.log('Validação concluída.');
    return results;
}

export default validateValues;