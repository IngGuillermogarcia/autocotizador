document.getElementById('calcular').addEventListener('click', function () {
    const fechaNacimiento = document.getElementById('fecha-nacimiento').value;
    const modeloAuto = document.getElementById('modelo-auto').value;
    const planSeguro = document.getElementById('plan-seguro').value;
let precioBase,precioPlan = 0;
    switch (modeloAuto,planSeguro) {
        case 'compacto':
            precioBase = 1000;
            break;
        case 'sedan':
            precioBase = 1200;
            break;
        case 'suv':
            precioBase = 1500;
            break;
        case 'moto':
            precioBase = 800;
            break;
         case 'estandar':
            precioPlan = 3000;
            break
    }


    const costoSeguro = precioBase+precioPlan;

    document.getElementById('total').textContent = costoSeguro + '';
});
