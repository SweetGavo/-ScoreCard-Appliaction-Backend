interface IAdmin{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    stack: string;
}
interface IAdminPasswordUpdate {
    password: string;
    newPassword: string;
    confirmPassword: string;
}
interface IAdminUpdate{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: string;
    stack?: string;
}

interface IDecadev{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    stack: string;
}
interface IDecadevPasswordUpdate{
    password: string;
    newPassword: string;
    confirmPassword: string;
}
interface IDecadevUpdate{
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    stack?: string;
}


interface ILogin {
    email: string;
    password: string;
}

interface Stack {
    name: string;
    imageUrl: string;
}

interface IWeeklyScore {
    algorithm: number;
    agileTest: number;
    weeklyTask: number;
    assessment: number;
    cummulative?: number;
}

interface IStack {
    name: string;
    imageUrl: string;
    _id: string;
}