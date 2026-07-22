function calcularPuntajePeliculasMiedo(sustosPorMinuto, bonoAtmoxfera, penalizacionCliche) {
    if (sustosPorMinuto.length === 0) {
        return 0;
    }

    let escenasAnalizadas = sustosPorMinuto.length;
    let puntajeFinal = escenasAnalizadas + bonoAtmoxfera - penalizacionCliche;
    
    return puntajeFinal;
}

// pruebas
let analisisSustos = [3, 5, 2, 6];
console.log("Resultado Terror:", calcularPuntajePeliculasMiedo(analisisSustos, 8, 3)); // esperado: 27

// pruebas caso borde
let peliculaMala = [1, 2];
console.log("Resultado Terror Caso Borde:", calcularPuntajePeliculasMiedo(peliculaMala, 2, 50)); // esperado: -46