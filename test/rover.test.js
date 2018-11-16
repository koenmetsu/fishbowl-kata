class Rover {
    constructor(){
        this._position = {
            x: 0,
            y: 0
        }
    }

    position() {
        return this._position;
    }

    execute(command) {
        switch (command) {
            case "f":
                this.forward()
                break;
        }
    }

    forward() {
        this._position.y += 1
    }
}

describe("rover starting position", () => {
    it("should have 0, 0 as starting position", () => {
        expect(new Rover().position()).toEqual({x: 0, y: 0});
    });

    it("should move to 0, 1 when command f is received", () => {
        const rover = new Rover();
        rover.execute("f");
        expect(rover.position()).toEqual({x: 0, y: 1});
    });
});