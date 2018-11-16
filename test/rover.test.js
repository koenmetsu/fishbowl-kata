const worldsize = 10;
const NORTH = "N";

class Rover {
    constructor(position = {
        x: 0,
        y: 0
    }, direction = NORTH) {
        this._direction = direction;
        this._position = position;
    }

    position() {
        return this._position;
    }

    direction() {
        return this._direction;
    }

    execute(command) {
        switch (command) {
            case "f":
                this.forward()
                break;
            case "b":
                this.backward()
                break;
        }
    }

    forward() {
        if (this._position.y === worldsize) {
            this._position.y = 0;
        } else {
            this._position.y += 1;
        }
    }

    backward() {
        if (this._position.y === 0) {
            this._position.y = worldsize
        } else {
            this._position.y -= 1
        }
    }
}

describe("initializing a rover", () => {
    it("should have 0, 0 as starting position", () => {
        expect(new Rover().position()).toEqual({
            x: 0,
            y: 0
        });
    });
    it("should be facing N", () => {
        expect(new Rover().direction()).toEqual(NORTH);
    })

});

describe("rover forwards and backwards", () => {

    it("should move to 0, 1 when command f is received", () => {
        const rover = new Rover();
        rover.execute("f");
        expect(rover.position()).toEqual({
            x: 0,
            y: 1
        });
    });

    it("should move to 0, 0 when command b is received on position 0,1", () => {
        const rover = new Rover({
            x: 0,
            y: 1
        });
        rover.execute("b");
        expect(rover.position()).toEqual({
            x: 0,
            y: 0
        });
    });

    it("should move to 0, 10 when command b is received on position 0,0", () => {
        const rover = new Rover();
        rover.execute("b");
        expect(rover.position()).toEqual({
            x: 0,
            y: 10
        });
    });

    it("should move to 0, 0 when command f is received on position 0,10", () => {
        const rover = new Rover({
            x: 0,
            y: 10
        });
        rover.execute("f");
        expect(rover.position()).toEqual({
            x: 0,
            y: 0
        });
    });
});

describe("rover turning", () => {
    it("should stay on the same position when turning right", () => {
        const rover = new Rover();
        rover.execute("r");
        expect(rover.position()).toEqual({
            x: 0,
            y: 0
        });
    });
    xit("should be on position  same position when turning right", () => {
        const rover = new Rover();
        rover.execute("r");
        expect(rover.position()).toEqual({
            x: 0,
            y: 0
        });
    });
});