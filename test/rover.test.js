class Rover {
    constructor(position = {
        x: 0,
        y: 0
    }) {

        this._position = position;
    }

    position() {
        return this._position;
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
        this._position.y += 1
    }

    backward() {
        if (this._position.y === 0) {
            this._position.y = 10
        } else {
            this._position.y -= 1
        }
    }
}

describe("rover starting position", () => {
    it("should have 0, 0 as starting position", () => {
        expect(new Rover().position()).toEqual({
            x: 0,
            y: 0
        });
    });

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
});