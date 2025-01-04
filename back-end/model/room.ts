export class Room {
    private id?: number;
    private name: string;
    private size: number;
    private description?: string;

    constructor(name: string, size: number, id?: number, description?: string) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.description = description;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getSize(): number {
        return this.size;
    }

    public getDescription(): string | undefined {
        return this.description;
    }

    equals(otherRoom: Room): boolean {
        return (
            this.id === otherRoom.id &&
            this.name === otherRoom.name &&
            this.size === otherRoom.size &&
            this.description === otherRoom.description
        );
    }

    validate(room: {
        name: string;
        size: number;
        description?: string;

    }): void {
        if (!room.name) {
            throw new Error('Room name is required');
        }
        if (!room.size) {
            throw new Error('Room size is required');
        }
        if (!room.description) {
            throw new Error('Room description is required');
        }
        if (room.name.length < 3) {
            throw new Error('Room name must be at least 3 characters long');
        }
        if (room.size <= 0) {
            throw new Error('Room size must be greater than 0');
        }
    }
}