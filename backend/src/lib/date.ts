const FUSO = "Amerida/Fortaleza"

export function agoraEmFortaleza(): Date{
    const agora = new Date();
    const localStr = agora.toLocaleString("en-CA", {timeZone: FUSO})

    return new Date(localStr + "GMT-0300")
}

export function inicioDoDia(data: Date): Date{
    const d = new Date(data)
    d.setHours(0,0,0,0)
    return d
}

export function fimDoDia(data: Date): Date {
    const d = new Date(data)
    d.setHours(23,59,59,999)
    return d

}

export function adicionarDias(data: Date, dias: number): Date {
    const d = new Date(data);
    d.setDate(d.getDate() + dias)
    return d
}

export function adicionarMinutos(data: Date, minutos: number): Date{
    return new Date(data.getTime() + minutos * 60 * 1000)
}