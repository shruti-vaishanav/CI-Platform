export interface IFormData {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string,
}
export interface ILogin {
    email: string,
    password: string,
}
export interface IResetPassword {
    password: string,
    confirmPassword: string,
}
export interface IForgotPassword {
    email: string,

}