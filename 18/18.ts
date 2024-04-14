type Status="Pending" | "Completed" | "Cancelled";
type User = {
    id:number,
    name:string;
};
type Admin = {
    id: number,
    role: string;
};
type AdminUser = User & Admin;
type Check<T>= T extends string? boolean : number;
const checkString: Check <string>=true;
const checkNumber: Check <number>=42;
