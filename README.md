# Taller de TypeScript - Depencency Inyection

Autor: Eduardo Oviedo Blanco

Para usar este taller efectivamente, clone el código en su ambiente local.
```
git clone https://github.com/edWAR6/JavaScript-Dependency-Inyection-Workshop.git
```
Si desea subir el taller en su repositorio personal.
Cree un repositorio en su perfil, luego:
```
git remote set-url origin https://github.com/<su usuario>/JavaScript-Dependency-Inyection-Workshop.git
```

> El nombre del repositorio puede cambiar. Siga las instrucciones y guarde sus cambios.

## Propósito

Este taller demuestra el uso de Angular properties.

## Instrucciones

1. Familiarícese con el código existente en el archivo TypeScript.

> Note como las clases Car y Engine nos permiten crear autos con sus motores, sin embargo solo para motores de gasolina.
> ¿Cómo podemos crear un auto con un motor eléctrico?

2. Para ejecutar el código ejecute el siguiente comando.
```bash
npx ts-node app.ts
```

> Si el comando le pide instalar `ts-node` indique que si.

3. Lo primero que hay que hacer es crear interfaces para los motores.
```typescript
interface IEngine {
    horsePower: number;
    run: Function;
}

interface IGasEngine extends IEngine {
    cc: number
}

interface IElectricEngine extends IEngine {
    voltage: string
}
```

4. Modifique la clase Car para que en lugar de las propiedades del motor de gasolina, reciba ahora un motor de tipo IEngine.
```typescript
    constructor(id: number, brand: string, engine: IEngine) {
        this.id = id;
        this.brand = brand;
        this.engine = engine;
    }
```

5. Cambie el nombre de la clase `Engine` y haga que implemente la interface.
```typescript
class GasEngine implements IGasEngine {
  ///...
```

6. Cree la nueva clase para el motor eléctrico.
```typescript
class ElectricEngine implements IElectricEngine {
    horsePower: number;
    voltage: string;

    constructor(horsePower: number, voltage: string) {
        this.horsePower = horsePower;
        this.voltage = voltage;
    }

    run() {
        console.info(`Running engine of ${this.voltage} voltage at ${this.horsePower} horse power.`);
    };
}
```

7. Ahora puede inicializar el auto con diferentes tipos de motor.
```typescript
const lamborghini = new Car(123, 'Lamborghini', new GasEngine(769, 6498));
lamborghini.ride();

const tesla = new Car(456, 'Tesla', new ElectricEngine(769, '350V'));
tesla.ride();
```

8. Ejecute la aplicación y observe el resultado.
```bash
npx ts-node app.ts
```

## Conclusión

La inyección de dependencia abre las puertas al dinamismo y a la flexibilidad, permitiendo que una funcionalidad no esté totalmente ligada a sus dependencias.

Los principales usos de este patrón son, las pruebas de integración y servicios, entre otros.
