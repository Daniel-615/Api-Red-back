import { users } from '../models/users.js';
export const getUsuarios=async (req,res)=>{
    try {
        const data=await users.findAll();
        res.json(data);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};
export const inicio=(req,res)=>{
    res.json('Inicio')
}
export const signup=(req,res)=>{
    res.json('signup')
}
export const login=(req,res)=>{
    res.json('login');
}
