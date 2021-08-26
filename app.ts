interface IEngine {
    horsePower: number;
    run: Function;
}

interface IGasEngine extends IEngine {
    cc: number;
}

interface IElectricEngine extends IEngine {
    voltage: string;
}

class Car {
    id: number;
    brand: string;
    engine: IEngine;

    constructor(id: number, brand: string, engine: IEngine) {
        this.id = id;
        this.brand = brand;
        this.engine = engine;
    }

    ride() {
        this.engine.run();
        console.info(`Riding my ${this.brand} car.`);
    }
}

class GasEngine implements IGasEngine {
    horsePower: number;
    cc: number;
    constructor(horsePower: number, cc: number) {
        this.horsePower = horsePower;
        this.cc = cc;
    }

    run() {
        console.info(`Running engine of ${this.cc} cc at ${this.horsePower} horse power.`);
    }
}

class ElectricEngine implements IElectricEngine {
    voltage: string;
    horsePower: number;

    constructor(horsePower: number, voltage: string) {
        this.horsePower = horsePower;
        this.voltage = voltage;
    }

    run() {
        console.info(`Running engine of ${this.voltage} voltage at ${this.horsePower} horse power.`);
    };

}

const lamborghini = new Car(123, 'Lamborghini', new GasEngine(769, 6498));
lamborghini.ride();

const tesla = new Car(456, 'Tesla', new ElectricEngine(769, '350V'));
tesla.ride();
