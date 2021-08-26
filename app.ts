class Car {
    id: number;
    brand: string;
    engine: Engine;

    constructor(id: number, brand: string, horsePower: number, cc: number) {
        this.id = id;
        this.brand = brand;
        this.engine = new Engine(horsePower, cc);
    }

    ride() {
        this.engine.run();
        console.info(`Riding my ${this.brand} car.`);
    }
}

class Engine {
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

const lamborghini = new Car(123, 'Lamborghini', 769, 6498);
lamborghini.ride();
