import { genSalt, hash, compare } from "bcrypt";

export const hashPassword = async (password) => {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);
    return await hash(password, salt);
}

export const validatePassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword);
}