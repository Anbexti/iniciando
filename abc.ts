function aplicarDescuento (a: number) {
    console.log("su descuento es de", a * 0.10)  //generalmente no se pone los console.log en las funcioones,gral se hacen para debugear
    return a - (a * 0.10)
}

console.log(aplicarDescuento(500))
//generalmente no se pone los console.log en las funcioones,gral se hacen para debugear