import { Room } from "./room";
import { Address } from "./address";

export class House {
    private id?: number;
    private name: string;
    private address: Address;
    private rooms: Room[];
    private rentPerDay: number;
    private ownerId: number;

    constructor(name: string, address: Address, rooms: Room[], rentPerDay: number, ownerId: number, id?: number) {
        this.name = name;
        this.address = address;
        this.rooms = rooms;
        this.rentPerDay = rentPerDay;
        this.ownerId = ownerId;
        this.id = id;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress(): Address {
        return this.address;
    }

    public getRooms(): Room[] {
        return this.rooms;
    }

    public getRentPerDay(): number {
        return this.rentPerDay;
    }

    public getOwnerId(): number {
        return this.ownerId;
    }

    validate(house: {
        name: string,
        address: Address,
        rooms: Room[],
        rentPerDay: number,
        ownerId: number,
        id?: number
    }): void {
        if (!house.name?.trim()) {
            throw new Error('House name is required');
        }
        if (house.name.length < 3) {
            throw new Error('House name must be at least 3 characters long');
        }
        if (!house.address) {
            throw new Error('Address is required');
        }
        if (!house.rooms || house.rooms.length < 1) {
            throw new Error('House must have at least one room');
        }
        if (house.rentPerDay < 0) {
            throw new Error('Rent per day must be a positive number');
        }
        if (house.ownerId < 0) {
            throw new Error('Owner ID must be a positive number');
        }
      
    }

    equals(otherHouse: House): boolean {
        return (
            this.id === otherHouse.id &&
            this.name === otherHouse.name &&
            this.address === otherHouse.address &&
            this.rooms.length === otherHouse.rooms.length &&
            this.rooms.every((room, index) => room.equals(otherHouse.rooms[index])) &&
            this.rentPerDay === otherHouse.rentPerDay &&
            this.ownerId === otherHouse.ownerId
        );
    }
}